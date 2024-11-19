---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// const coreMembers = [
//   {
//     avatar: 'https://www.github.com/wds-dxh.png',
//     name: '邬东升',
//     title: 'Creator',
//     links: [
//       { icon: 'github', link: 'https://github.com/wds-dxh' }
//     ]
//   }
// ]

const partners = [
    {
    avatar: 'https://www.github.com/wds-dxh.png',
    name: '邬东升',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/wds-dxh' }
    ]
  },
  {
    avatar: 'https://www.github.com/yijinsong.png',
    name: '易劲松',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/yijinsong' }
    ]
  },
  {
    avatar: 'https://github.com/dong.png',
    name: '董德胜',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/dong' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our vision</template>
    <template #lead>Helping people enhance their survival skills in the AI era.</template>
  </VPTeamPageTitle>
  
  <!-- <VPTeamPageSection>
    <template #title>Core Members</template>
    <template #members>
      <VPTeamMembers :members="coreMembers" />
    </template>
  </VPTeamPageSection> -->

  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #members>
      <VPTeamMembers :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

