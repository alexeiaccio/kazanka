import * as React from 'react'
import * as uuid from 'uuid/v1'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { Img } from '../img/index'
import { Row, Col } from '../row/index'

import { imagesStyles, rowStyles } from './styles'

export function Images({ items }) {
  if (!items) return null
  return (
    <section css={imagesStyles}>
      <Row css={rowStyles} gaps={[1, 0.5]}>
        {items.map(({ imageimages }) => (
          <Col key={uuid()} cols={3} gaps={[1, 0.5]}>
            <Img css={css`${tw`w-full`};`} src={imageimages} />
          </Col>
        ))}
      </Row>
    </section>
  )
}
