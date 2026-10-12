<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/sections/PageHero.vue'
import Tag from '../components/ui/Tag.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'
import TheContainer from '../components/layout/TheContainer.vue'
import { articles, newsCategories } from '../data/news.js'

const activeCategory = ref('全部')

const allCategories = computed(() => ['全部', ...newsCategories])

const filteredArticles = computed(() => {
  if (activeCategory.value === '全部') return articles
  return articles.filter(a => a.category === activeCategory.value)
})

const featuredArticle = computed(() => {
  if (activeCategory.value !== '全部') return null
  return articles.find(a => a.featured) || articles[0]
})

const regularArticles = computed(() => {
  if (featuredArticle.value) {
    return filteredArticles.value.filter(a => a.id !== featuredArticle.value.id)
  }
  return filteredArticles.value
})
</script>

<template>
  <div class="news-view">
    <PageHero title="新闻动态" subtitle="了解星辰科技的最新资讯" />

    <section class="section section--news">
      <TheContainer>
        <ScrollReveal direction="up">
          <div class="category-tabs">
            <Tag
              v-for="cat in allCategories"
              :key="cat"
              :label="cat"
              :variant="activeCategory === cat ? 'primary' : 'default'"
              :active="activeCategory === cat"
              @click="activeCategory = cat"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          v-if="featuredArticle"
          direction="up"
          :delay="80"
        >
          <div class="featured-article">
            <div class="featured-image"></div>
            <div class="featured-content">
              <Tag :label="featuredArticle.category" variant="primary" />
              <h2 class="featured-title">{{ featuredArticle.title }}</h2>
              <time class="featured-date">{{ featuredArticle.date }}</time>
              <p class="featured-excerpt">{{ featuredArticle.excerpt }}</p>
            </div>
          </div>
        </ScrollReveal>

        <div class="news-grid">
          <ScrollReveal
            v-for="(article, index) in regularArticles"
            :key="article.id"
            direction="up"
            :delay="index * 80"
          >
            <article class="news-card">
              <div class="news-card-image"></div>
              <div class="news-card-body">
                <div class="news-card-meta">
                  <Tag :label="article.category" variant="outline" />
                  <time class="news-card-date">{{ article.date }}</time>
                </div>
                <h3 class="news-card-title">{{ article.title }}</h3>
                <p class="news-card-excerpt">{{ article.excerpt }}</p>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up">
          <div class="pagination">
            <p class="pagination-text">显示 1-{{ filteredArticles.length }} 共 {{ filteredArticles.length }} 条</p>
          </div>
        </ScrollReveal>
      </TheContainer>
    </section>
  </div>
</template>

<style scoped>
.news-view {
  background-color: var(--color-bg);
}

.section {
  padding: var(--space-20) 0;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
  margin-bottom: var(--space-12);
}

.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-10);
  align-items: center;
  margin-bottom: var(--space-16);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-soft);
}

.featured-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  background: linear-gradient(
    135deg,
    var(--color-primary-soft, #e8f0fe),
    var(--color-accent-soft, #fce8e6)
  );
}

.featured-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.featured-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-text);
  line-height: var(--leading-tight);
}

.featured-date {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.featured-excerpt {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

.news-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  transition: box-shadow var(--duration-normal) var(--ease-out);
}

.news-card:hover {
  box-shadow: var(--shadow-md);
}

.news-card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
    135deg,
    var(--color-bg-soft),
    var(--color-primary-soft, #e8f0fe)
  );
}

.news-card-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.news-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.news-card-date {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

.news-card-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  line-height: var(--leading-tight);
}

.news-card-excerpt {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.pagination {
  display: flex;
  justify-content: center;
  padding-top: var(--space-8);
}

.pagination-text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-16) 0;
  }

  .featured-article {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .news-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
