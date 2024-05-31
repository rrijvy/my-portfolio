<template>
  <main class="container">
    <div class="text-center pt-16">
      <p class="text-3xl text-white">// HI, I'M RIJVY, A...</p>
      <div class="text-8xl text-cyan-700">
        <span>{" </span>
        <span ref="typedElement"></span>
        <span> "}</span>
      </div>
    </div>
    <div class="pt-16">
      <div class="text-center">
        <p class="text-rose-200 text-3xl">{{ '{#}' }}</p>
        <p class="text-rose-200 text-3xl">{{ '<services>' }}</p>
        <p class="pt-5 text-2xl">I offer a comprehensive range of services tailored to meet the unique needs of each project. Specializing in full-stack web development, I excel in crafting robust and scalable software solutions using cutting-edge technologies such as C#, JavaScript, Python, and various frameworks like React.js, Vue.js, nodeJs, .NET CORE and Django. Whether it's developing custom web applications, designing intuitive user interfaces, or optimizing database performance, I bring a wealth of experience and expertise to every project. Let's collaborate to bring your software ideas to life and drive your business forward.</p>
        <table class="mx-auto mt-5 text-4xl cursor-none">
          <tbody>
            <tr class="text-left">
              <td ref="service1" class="px-10 hover:bg-neutral-800"></td>
              <td ref="service2" class="px-10 hover:bg-neutral-800"></td>
            </tr>
            <tr class="text-right">
              <td ref="service3" class="px-10 hover:bg-neutral-800"></td>
              <td ref="service4" class="px-10 hover:bg-neutral-800"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="pt-16">
      <div class="text-center">
        <p class="text-rose-200 text-3xl">{{ '{*}' }}</p>
        <p class="text-rose-200 text-3xl">{{ '<contact me>' }}</p>
        <p class="pt-5 text-2xl">Ready to start your next project or have questions about my services? Don't hesitate to reach out!</p>
        <div class="w-6/12 mx-auto pb-10">
          <form class="text-start" action="" method="post">
            <div class="md:flex items-center mt-12">
              <div class="w-full md:w-1/2 flex flex-col">
                <label class="leading-none text-white text-lg">Name</label>
                <input type="text" class="leading-none text-white p-3 text-xl focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
              </div>
              <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label class="leading-none text-white text-lg">Email</label>
                <input type="email" class="leading-none text-white p-3 text-xl focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
              </div>
            </div>
            <div class="md:flex items-center mt-8">
              <div class="w-full flex flex-col">
                <label class="leading-none text-white text-lg">Subject</label>
                <input type="text" class="leading-none text-white p-3 text-xl focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
              </div>
            </div>
            <div>
              <div class="w-full flex flex-col mt-8">
                <label class="leading-none text-white text-lg">Message</label>
                <textarea type="text" class="h-40 leading-none text-white p-3 text-xl focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
              </div>
            </div>
            <div class="flex items-center justify-center w-full">
              <button class="mt-9 leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Send message
              </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  </main>
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
