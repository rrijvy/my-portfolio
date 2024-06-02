<template>
  <div class="container">
    <div class="text-center pt-16">
      <p class="text-white text-3xl sm:text-xl">// HI, I'M RIJVY, A...</p>
      <div class="text-8xl sm:text-2xl text-cyan-700">
        <span>{" </span>
        <span ref="typedElement"></span>
        <span> "}</span>
      </div>
    </div>
    <div class="pt-36">
      <div class="text-center">
        <p class="text-rose-200 text-3xl sm:text-2xl">{{ '{#}' }}</p>
        <p class="text-rose-200 text-3xl sm:text-2xl">{{ '<services>' }}</p>
        <p class="pt-10 text-2xl w-3/4 mx-auto sm:text-xl sm:w-full">{{ 'As a full-stack developer, I specialize in creating robust, scalable software solutions using the latest technologies, including C#, JavaScript, Python, and leading frameworks like React.js, Vue.js, Node.js, .NET Core, and Django.' }}</p>
        <table class="mx-auto mt-10 text-3xl cursor-none sm:text-sm">
          <tbody>
            <tr class="text-left">
              <td ref="service1" class="px-10 hover:bg-neutral-800"></td>
              <td ref="service2" class="px-10 hover:bg-neutral-800"></td>
            </tr>
            <tr class="text-right">
              <td ref="service3" class="px-10 hover:bg-neutral-800"></td>
              <td ref="service4" class="px-10 hover:bg-neutral-800"></td>
            </tr>

            <!-- <tr class="text-center">
              <td ref="service1" class="px-10 hover:bg-neutral-800"></td>
            </tr>
            <tr class="text-center">
              <td ref="service2" class="px-10 hover:bg-neutral-800"></td>
            </tr>
            <tr class="text-center">
              <td ref="service3" class="px-10 hover:bg-neutral-800"></td>
            </tr>
            <tr class="text-center">
              <td ref="service4" class="px-10 hover:bg-neutral-800"></td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typedElement = ref<HTMLElement | null>(null)
const service1 = ref<HTMLElement | null>(null)
const service2 = ref<HTMLElement | null>(null)
const service3 = ref<HTMLElement | null>(null)
const service4 = ref<HTMLElement | null>(null)

const getTypedElement = (element: HTMLElement, values: Array<string>, loop: boolean = true) => {
  return new Typed(element, {
    strings: values,
    smartBackspace: true,
    startDelay: 1500,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 700,
    loop: loop,
    shuffle: false,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
  });
}

onMounted(() => {
  if (typedElement.value) 
    getTypedElement(typedElement.value, ['front-end developer', 'back-end developer', 'full stack engineer']);
  if (service1.value) 
    getTypedElement(service1.value, ['Web Development'], false);
  if (service2.value) 
    getTypedElement(service2.value, ['Scripting and Automation'], false);
  if (service3.value) 
    getTypedElement(service3.value, ['Mobile App Development'], false);
  if (service4.value) 
    getTypedElement(service4.value, ['Desktop App Development'], false);
})
</script>
