<script setup>
import PageHero from '../components/sections/PageHero.vue'
import StatsBar from '../components/sections/StatsBar.vue'
import TimelineBlock from '../components/sections/TimelineBlock.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import Card from '../components/ui/Card.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { team, milestones } from '../data/team.js'

const stats = [
  { value: '500+', label: '企业客户' },
  { value: '50+', label: '城市覆盖' },
  { value: '200+', label: '团队成员' },
  { value: '98%', label: '客户满意度' }
]

const missionVision = [
  {
    icon: '🎯',
    title: '我们的使命',
    description: '用领先的技术赋能企业，推动数字化转型，让科技创造更大价值。'
  },
  {
    icon: '🔭',
    title: '我们的愿景',
    description: '成为全球最受信赖的企业数字化合作伙伴，引领行业创新发展。'
  }
]
</script>

<template>
  <div class="about-view">
    <PageHero title="关于我们" subtitle="了解星辰科技的故事、使命与团队" />

    <section class="section section--story">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="我们的故事" subtitle="从初创到行业领先" align="left" />
        </ScrollReveal>
        <div class="story-grid">
          <ScrollReveal direction="left">
            <div class="story-image"></div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="story-content">
              <p class="story-lead">
                星辰科技成立于 2018 年，由一群充满激情的技术专家创立。
              </p>
              <p class="story-text">
                我们坚信技术能够改变企业的运营方式。从最初的三人团队到如今遍布全国多个城市的 200 余名员工，我们始终坚持以客户需求为中心，以技术创新为驱动，为企业提供全方位的数字化解决方案。
              </p>
              <p class="story-text">
                多年来，我们服务了超过 500 家企业客户，覆盖金融、医疗、制造、零售等多个行业。我们的使命是让每一家企业都能享受到世界级的技术服务，助力他们在数字化浪潮中乘风破浪。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--mission">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="使命与愿景" subtitle="驱动我们前行的核心信念" align="center" />
        </ScrollReveal>
        <div class="mission-grid">
          <ScrollReveal
            v-for="(item, index) in missionVision"
            :key="index"
            direction="up"
            :delay="index * 120"
          >
            <Card
              :title="item.title"
              :description="item.description"
              :icon="item.icon"
            />
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--timeline">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="发展历程" subtitle="我们的重要里程碑" align="center" />
        </ScrollReveal>
        <ScrollReveal direction="up" :delay="100">
          <TimelineBlock :items="milestones" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <section class="section section--team">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="核心团队" subtitle="经验丰富的领导团队" align="center" />
        </ScrollReveal>
        <div class="team-grid">
          <ScrollReveal
            v-for="(member, index) in team.slice(0, 4)"
            :key="member.id"
            direction="up"
            :delay="index * 100"
          >
            <div class="team-card">
              <div class="team-avatar">{{ member.initials }}</div>
              <h3 class="team-name">{{ member.name }}</h3>
              <p class="team-role">{{ member.role }}</p>
              <p class="team-bio">{{ member.bio }}</p>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--stats">
      <TheContainer>
        <ScrollReveal direction="up">
          <StatsBar :items="stats" />
        </ScrollReveal>
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  margin-top: var(--space-10);
}

.story-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
  background: linear-gradient(
    135deg,
    var(--color-primary-soft, #e8f0fe),
    var(--color-accent-soft, #fce8e6)
  );
}

.story-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.story-lead {
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--color-text);
  line-height: var(--leading-relaxed);
}

.story-text {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.section--mission {
  background-color: var(--color-bg-soft);
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}

.section--timeline {
  background-color: var(--color-bg);
}

.section--team {
  background-color: var(--color-bg-soft);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}

.team-card {
  text-align: center;
  padding: var(--space-8) var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.team-card:hover {
  box-shadow: var(--shadow-md);
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-bg);
  font-size: var(--text-xl);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

.team-name {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.team-role {
  font-size: var(--text-sm);
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--space-3);
}

.team-bio {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.section--stats {
  padding: var(--space-16) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .story-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .mission-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}
</style>
