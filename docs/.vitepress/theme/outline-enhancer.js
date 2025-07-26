// 目录层级增强器
// 为VitePress的右侧目录添加层级类名，实现更好的视觉层级效果

export function enhanceOutline() {
  // 等待DOM加载完成
  if (typeof window === 'undefined') return;
  
  function addOutlineLevelClasses() {
    // 获取所有目录链接
    const outlineLinks = document.querySelectorAll('.VPDocAsideOutline .outline-link');
    
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
          
          console.log(`添加层级类名: outline-link-${level} 到链接: ${link.textContent.trim()}`);
        }
      }
    });
  }
  
  // 页面加载时执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addOutlineLevelClasses);
  } else {
    addOutlineLevelClasses();
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
            (node.classList?.contains('VPDocAsideOutline') || 
             node.querySelector?.('.VPDocAsideOutline'))
          );
          
          if (hasOutlineChanges) {
            setTimeout(addOutlineLevelClasses, 100); // 延迟执行确保DOM完全更新
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
      setTimeout(addOutlineLevelClasses, 200);
    });
  }
}

// 自动执行
if (typeof window !== 'undefined') {
  enhanceOutline();
}