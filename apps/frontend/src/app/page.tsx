'use client'

// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

const StyledPage = styled.div`
  .page {
  }
`

export default function Index() {
  return (
    <StyledPage>
      <div className="page">
        <h1>Page</h1>
      </div>
    </StyledPage>
  )
}
