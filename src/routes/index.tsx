import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <main class='main'>
      <h1>Hey There, I'm Valeriy Khoma 👋</h1>
      <h3>I am a Software Developer</h3>
      <div>
        Find me on{' '}
        <a href='https://www.linkedin.com/in/valeriykhoma/' target='_blank'>
          LinkedIn
        </a>
        ,{' '}
        <a href='https://github.com/Bergamolt' target='_blank'>
          GitHub
        </a>{' '}
        and{' '}
        <a href='https://www.instagram.com/bergamolt' target='_blank'>
          Instagram
        </a>
        .
      </div>
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Valeriy Khoma',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
}
