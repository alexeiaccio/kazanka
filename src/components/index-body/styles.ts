import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'


export const mainStyles = css`
  ${tw`
    w-full
  `};
`

export const jumboStyles = css`
  ${tw`
    flex items-center justify-center
    w-full h-screen
    relative
  `};
`

export const titleStyles = css`
  ${tw`
    font-serif font-bold
    text-3xl sm:text-5xl
    text-white text-center
    pb-10
  `};
  text-shadow: 0px 0px 10px #1f5fc2;
`

export const sectionStyles = css`
  ${tw`
    my-10 pb-40
  `};
`

export const headingStyles = css`
  ${tw`
    font-sans
    font-bold
    leading-tight
  `};
`

export const TextContainer = styled.div`
  ${tw`
    mx-auto
    w-screen max-w-xl
    subpixel-antialiased
    text-center
  `};

& h1 {
    ${headingStyles};
    ${tw`
      text-3xl sm:text-5xl
      pt-12 pb-6
    `};
  }
  & h2 {
    ${headingStyles};
    ${tw`
      text-2xl sm:text-3xl
      pt-10 pb-5
    `};
  }
  & h3 {
    ${headingStyles};
    ${tw`
      text-xl
      pt-8 pb-4
    `};
  }
  & p {
    ${tw`
      text-sm
    `};
    &:not(:last-of-type) {
      ${tw`
        pb-4
    `};
    }
  }
`
