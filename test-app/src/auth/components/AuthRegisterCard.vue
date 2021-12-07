<script setup>
import { QCard, QCardSection, QBtn } from 'quasar'
import useRegister from 'auth/actions/useRegister'
import AuthRegisterForm from 'src/auth/components/AuthRegisterForm.vue'
import AuthErrorsBanner from './AuthErrorsBanner.vue'

const {
  form,
  loading,
  errors,
  onRegisterClicked,
  validationErrors,
  hasValidationErrors,
  customFields,
} = useRegister()

</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <!-- Register Form -->
      <AuthRegisterForm
        v-model:email="form.email"
        v-model:password="form.password"
        v-model:password-confirmation="form.password_confirmation"
        v-model:name="customFields.name"
        :validation-errors="validationErrors"
      />

      <!-- Errors -->
      <div v-if="!hasValidationErrors">
        <AuthErrorsBanner :errors="errors" />
      </div>
    </q-card-section>

    <!-- Register Button -->
    <q-btn
      :loading="loading"
      class="q-mt-sm full-width"
      color="primary"
      label="register"
      unelevated
      @click="onRegisterClicked"
    />
  </q-card>
</template>
