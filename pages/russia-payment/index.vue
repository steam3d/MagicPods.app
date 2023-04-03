<template>
  <UiMain class="relative z-0 min-h-[649px]">
    <SplitPage>
      <template #left-pane-image>
        <img
          src="/bg-russia.jpeg"
          class="absolute top-0 h-full w-full -scale-x-[1] object-cover object-right"
        />
      </template>
      <template #right-pane-content>
        <h1
          class="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl lg:mb-12 2xl:text-5xl 2xl:!leading-[56px]"
        >
          Купить MagicPods в&nbsp;России
        </h1>
        <div
          class="mb-6 grid grid-cols-1 gap-2 sm:grid-rows-1 sm:gap-6 xl:gap-8"
        >
          <UiArticle>
            <template #content>
              Перед оплатой рекомендую попробовать пробную версию. После оплаты
              укажите email на&nbsp;который отправить код активации.
              Я&nbsp;обрабатываю заявки вручную, обычно в&nbsp;течение
              1&nbsp;дня.
            </template>
          </UiArticle>
          <div class="flex max-h-[241px] min-h-[241px] justify-start">
            <!-- Этот img заменить на соответствующий iframe -->
            <img
              class="flex object-contain object-left"
              src="https://s3-alpha-sig.figma.com/img/1796/baf5/421609532b91ac219fb70fc0fbbad707?Expires=1679875200&Signature=fIWxesKBsdD4pqiGgjXM3UOpM4aESNWi2GkOT3U4nBjVJgPwLpyVosBUjw8xJaqM82chNVoBEZmZUuhB6cL-0BPdq49vp91~nnr4TofakvNr~mss16lXLWYoyk0avQxJBV~lUI4rsMhGwGH8Nyg9mDapcX0Sfig4ncPe7Iv6gdIFTewu~yK5iq2Ip1VW8i1JhCq4HFzxwVaWldh0IoG2Qr6sLs07f35HPG1NGlMVR~8TvzFLGNe16PsdbEGoFB6UMTXzYDVHw7GeLm~msMb3syPe5qp1pbnS3jAs2bh1QSjzLUt50BjA4KVjhPkIHpmTDHuY~I0jDFQToe~gdbXHeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
          <div class="opacity-50">
            По&nbsp;любым вопросам пишите на&nbsp;почту MagicPods@outlook.com.
          </div>
        </div>
      </template>
    </SplitPage>
  </UiMain>
</template>

<script lang="ts" setup></script>
