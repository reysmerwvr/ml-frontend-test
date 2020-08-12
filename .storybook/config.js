import React from "react"
import { addDecorator } from "@storybook/react"
import { MemoryRouter } from 'react-router';


const MemoryRouterDecorator = (storyFn) => (
  <MemoryRouter >{storyFn()}</MemoryRouter>
)

addDecorator(MemoryRouterDecorator)