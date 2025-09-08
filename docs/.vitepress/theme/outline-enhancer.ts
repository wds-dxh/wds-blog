/**
 * 目录层级增强器和滚动效果
 * 为VitePress的右侧目录添加层级类名，实现更好的视觉层级效果和滚动跟踪
 */

interface HeadingInfo {
  element: HTMLElement;
  id: string;
  level: number;
  offsetTop: number;
}

interface ScrollOptions {
  passive?: boolean;
}

export function enhanceOutline(): void {
  // 等待DOM加载完成
  if (typeof window === 'undefined') return;
  
  let activeHeading: HeadingInfo | null = null;
  let headings: HeadingInfo[] = [];
  
  function addOutlineLevelClasses(): void {
    // 获取所有目录链接
    const outlineLinks = document.querySelectorAll<HTMLAnchorElement>('.VPDocAsideOutline .outline-link');
    
    outlineLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetHeading = document.getElementById(targetId);
        
        if (targetHeading) {
          const level = parseInt(targetHeading.tagName.substring(1));
          
          // 移除之前的层级类名
          link.classList.remove('outline-link-1', 'outline-link-2', 'outline-link-3', 'outline-link-4', 'outline-link-5', 'outline-link-6');
          
          // 添加新的层级类名
          link.classList.add(`outline-link-${level}`);
        }
      }
    });
    
    // 更新标题数组
    updateHeadings();
    // 初始化滚动监听
    initScrollTracking();
  }
  
  function updateHeadings(): void {
    // 获取所有标题元素
    headings = Array.from(document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5, h6'))
      .filter(heading => heading.id)
      .map(heading => ({
        element: heading,
        id: heading.id,
        level: parseInt(heading.tagName.substring(1)),
        offsetTop: heading.offsetTop
      }))
      .sort((a, b) => a.offsetTop - b.offsetTop);
  }
  
  function initScrollTracking(): void {
    // 移除之前的滚动监听器
    window.removeEventListener('scroll', handleScroll);
    // 添加新的滚动监听器
    const options: ScrollOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, options);
    // 立即执行一次以设置初始状态
    handleScroll();
  }
  
  function handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    // 找到当前可视区域的标题
    let currentHeading: HeadingInfo | null = null;
    
    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      // 标题顶部距离文档顶部的距离减去一些偏移量（考虑导航栏高度）
      if (scrollTop >= heading.element.offsetTop - 100) {
        currentHeading = heading;
        break;
      }
    }
    
    // 如果没找到，使用第一个标题
    if (!currentHeading && headings.length > 0) {
      currentHeading = headings[0];
    }
    
    // 更新活跃状态
    if (currentHeading && currentHeading !== activeHeading) {
      updateActiveHeading(currentHeading);
      activeHeading = currentHeading;
    }
  }
  
  function updateActiveHeading(heading: HeadingInfo): void {
    // 移除所有活跃状态
    document.querySelectorAll('.VPDocAsideOutline .outline-link.active')
      .forEach(link => link.classList.remove('active'));
    
    // 添加新的活跃状态
    const activeLink = document.querySelector<HTMLAnchorElement>(`.VPDocAsideOutline .outline-link[href="#${heading.id}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      
      // 平滑滚动目录到可视区域
      const outline = document.querySelector<HTMLElement>('.VPDocAsideOutline');
      if (outline && activeLink.offsetParent) {
        const outlineRect = outline.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        
        // 如果链接不在可视区域内，滚动目录
        if (linkRect.top < outlineRect.top || linkRect.bottom > outlineRect.bottom) {
          activeLink.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    }
  }
  
  function addSmoothScrollToLinks(): void {
    // 为目录链接添加平滑滚动效果
    document.querySelectorAll<HTMLAnchorElement>('.VPDocAsideOutline .outline-link').forEach(link => {
      link.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // 平滑滚动到目标位置，考虑导航栏高度
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            
            // 更新URL
            history.replaceState(null, '', href);
          }
        }
      });
    });
  }
  
  // 页面加载时执行
  function init(): void {
    addOutlineLevelClasses();
    addSmoothScrollToLinks();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // 监听路由变化（VitePress的SPA导航）
  if (typeof window !== 'undefined' && window.addEventListener) {
    // 使用MutationObserver监听DOM变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // 检查是否有新的目录元素被添加
          const hasOutlineChanges = Array.from(mutation.addedNodes).some(node => 
            node.nodeType === Node.ELEMENT_NODE && 
            ((node as Element).classList?.contains('VPDocAsideOutline') || 
             (node as Element).querySelector?.('.VPDocAsideOutline'))
          );
          
          if (hasOutlineChanges) {
            setTimeout(() => {
              addOutlineLevelClasses();
              addSmoothScrollToLinks();
            }, 100); // 延迟执行确保DOM完全更新
          }
        }
      });
    });
    
    // 开始观察
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // 监听popstate事件（浏览器前进后退）
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        addOutlineLevelClasses();
        addSmoothScrollToLinks();
      }, 200);
    });
    
    // 监听窗口大小变化，重新计算标题位置
    const resizeOptions: ScrollOptions = { passive: true };
    window.addEventListener('resize', () => {
      setTimeout(updateHeadings, 100);
    }, resizeOptions);
  }
}

// 自动执行
if (typeof window !== 'undefined') {
  enhanceOutline();
}