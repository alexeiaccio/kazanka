import * as React from 'react'
import * as uuid from 'uuid/v1'

import { Img } from '../img/index'
import { Row, Col } from '../row/index'

import { imagesStyles, rowStyles, imageSectionStyles } from './styles'

export function Images({ items }) {
  if (!items) return null
  return (
    <section css={imagesStyles}>
      <Row css={rowStyles} gap={1.5}>
        {items.map(({ imageimages }) => (
          <Col key={uuid()} cols={3} gap={1.5}>
            <Img css={imageSectionStyles} src={imageimages} />
          </Col>
        ))}
      </Row>
    </section>
  )
}