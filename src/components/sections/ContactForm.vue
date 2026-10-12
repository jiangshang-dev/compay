<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validate = () => {
  let valid = true

  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = '请输入您的姓名'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = '请输入您的邮箱'
    valid = false
  } else if (!validateEmail(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = '请输入咨询内容'
    valid = false
  }

  return valid
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  isSubmitted.value = true
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.message = ''
  isSubmitted.value = false
}
</script>

<template>
  <div class="contact-form">
    <div v-if="isSubmitted" class="contact-form__success">
      <div class="contact-form__success-icon">✓</div>
      <p class="contact-form__success-text">感谢您的咨询，我们会尽快与您联系！</p>
      <button class="contact-form__reset-btn" @click="resetForm">返回</button>
    </div>

    <form v-else class="contact-form__form" @submit.prevent="handleSubmit" novalidate>
      <div class="contact-form__field">
        <label class="contact-form__label" for="contact-name">
          姓名 <span class="contact-form__required">*</span>
        </label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          class="contact-form__input"
          :class="{ 'contact-form__input--error': errors.name }"
          placeholder="请输入您的姓名"
        />
        <span v-if="errors.name" class="contact-form__error">{{ errors.name }}</span>
      </div>

      <div class="contact-form__field">
        <label class="contact-form__label" for="contact-email">
          邮箱 <span class="contact-form__required">*</span>
        </label>
        <input
          id="contact-email"
          v-model="form.email"
          type="email"
          class="contact-form__input"
          :class="{ 'contact-form__input--error': errors.email }"
          placeholder="请输入您的邮箱"
        />
        <span v-if="errors.email" class="contact-form__error">{{ errors.email }}</span>
      </div>

      <div class="contact-form__field">
        <label class="contact-form__label" for="contact-phone">电话</label>
        <input
          id="contact-phone"
          v-model="form.phone"
          type="tel"
          class="contact-form__input"
          placeholder="请输入您的电话号码"
        />
      </div>

      <div class="contact-form__field">
        <label class="contact-form__label" for="contact-company">公司名称</label>
        <input
          id="contact-company"
          v-model="form.company"
          type="text"
          class="contact-form__input"
          placeholder="请输入您的公司名称"
        />
      </div>

      <div class="contact-form__field">
        <label class="contact-form__label" for="contact-message">
          咨询内容 <span class="contact-form__required">*</span>
        </label>
        <textarea
          id="contact-message"
          v-model="form.message"
          class="contact-form__textarea"
          :class="{ 'contact-form__textarea--error': errors.message }"
          rows="5"
          placeholder="请描述您的需求"
        ></textarea>
        <span v-if="errors.message" class="contact-form__error">{{ errors.message }}</span>
      </div>

      <button
        type="submit"
        class="contact-form__submit"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="contact-form__spinner"></span>
        {{ isSubmitting ? '提交中...' : '提交咨询' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contact-form__label {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.contact-form__required {
  color: var(--color-error);
}

.contact-form__input,
.contact-form__textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.contact-form__input:focus,
.contact-form__textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
  outline: none;
}

.contact-form__input--error,
.contact-form__textarea--error {
  border-color: var(--color-error);
}

.contact-form__input--error:focus,
.contact-form__textarea--error:focus {
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.1);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__error {
  font-size: var(--text-sm);
  color: var(--color-error);
}

.contact-form__submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--space-4);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-out);
}

.contact-form__submit:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.contact-form__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-form__spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: var(--radius-full);
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ── Success state ── */
.contact-form__success {
  text-align: center;
  padding: var(--space-12) var(--space-4);
}

.contact-form__success-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  background: var(--color-success);
  color: #fff;
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.contact-form__success-text {
  font-size: var(--text-lg);
  color: var(--color-text);
  margin-bottom: var(--space-6);
}

.contact-form__reset-btn {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.contact-form__reset-btn:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}
</style>
