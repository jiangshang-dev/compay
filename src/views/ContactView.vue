<script setup>
import PageHero from '../components/sections/PageHero.vue'
import ContactForm from '../components/sections/ContactForm.vue'
import MapPlaceholder from '../components/sections/MapPlaceholder.vue'
import SectionTitle from '../components/ui/SectionTitle.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'

const contactInfo = {
  address: '北京市海淀区中关村科技园区 8 号楼',
  phone: '400-888-8888',
  email: 'contact@star-tech.com',
  hours: '周一至周五 9:00 - 18:00'
}

const offices = [
  {
    name: '北京总部',
    address: '北京市海淀区中关村科技园区 8 号楼 12 层',
    phone: '010-8888-8888',
    icon: '🏛️'
  },
  {
    name: '上海分部',
    address: '上海市浦东新区陆家嘴金融中心 25 层',
    phone: '021-6666-6666',
    icon: '🏙️'
  },
  {
    name: '深圳分部',
    address: '深圳市南山区科技园南区 18 层',
    phone: '0755-8888-8888',
    icon: '🌆'
  }
]
</script>

<template>
  <div class="contact-view">
    <PageHero title="联系我们" subtitle="我们随时准备为您服务" />

    <section class="section section--contact">
      <TheContainer>
        <div class="contact-grid">
          <ScrollReveal direction="left">
            <div class="contact-form-wrap">
              <h2 class="contact-form-title">发送消息</h2>
              <p class="contact-form-subtitle">填写以下表单，我们将在 24 小时内与您联系</p>
              <ContactForm />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" :delay="100">
            <div class="contact-info">
              <h2 class="contact-info-title">联系方式</h2>

              <div class="info-items">
                <div class="info-item">
                  <span class="info-icon">📍</span>
                  <div>
                    <h4 class="info-label">地址</h4>
                    <p class="info-value">{{ contactInfo.address }}</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">📞</span>
                  <div>
                    <h4 class="info-label">电话</h4>
                    <p class="info-value">{{ contactInfo.phone }}</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">✉️</span>
                  <div>
                    <h4 class="info-label">邮箱</h4>
                    <p class="info-value">{{ contactInfo.email }}</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">🕐</span>
                  <div>
                    <h4 class="info-label">营业时间</h4>
                    <p class="info-value">{{ contactInfo.hours }}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>

    <section class="section section--map">
      <TheContainer>
        <ScrollReveal direction="up">
          <MapPlaceholder :address="contactInfo.address" />
        </ScrollReveal>
      </TheContainer>
    </section>

    <section class="section section--offices">
      <TheContainer>
        <ScrollReveal direction="up">
          <SectionTitle title="我们的办公室" subtitle="欢迎莅临参观" align="center" />
        </ScrollReveal>
        <div class="offices-grid">
          <ScrollReveal
            v-for="(office, index) in offices"
            :key="index"
            direction="up"
            :delay="index * 100"
          >
            <div class="office-card">
              <span class="office-icon">{{ office.icon }}</span>
              <h3 class="office-name">{{ office.name }}</h3>
              <p class="office-address">{{ office.address }}</p>
              <p class="office-phone">{{ office.phone }}</p>
            </div>
          </ScrollReveal>
        </div>
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.contact-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-12);
  align-items: start;
}

.contact-form-wrap {
  padding: var(--space-10);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-soft);
}

.contact-form-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.contact-form-subtitle {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.contact-info {
  padding: var(--space-10);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
}

.contact-info-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-8);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.info-item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.info-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.info-value {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.section--map {
  padding: var(--space-16) 0;
  background-color: var(--color-bg-soft);
}

.section--offices {
  background-color: var(--color-bg);
}

.offices-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}

.office-card {
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-soft);
  text-align: center;
  border: 1px solid var(--color-border);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.office-card:hover {
  box-shadow: var(--shadow-md);
}

.office-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--space-4);
}

.office-name {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.office-address {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-2);
}

.office-phone {
  font-size: var(--text-sm);
  color: var(--color-primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .contact-form-wrap,
  .contact-info {
    padding: var(--space-6);
  }

  .offices-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
