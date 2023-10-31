import React from 'react'
import { Menu } from './model/Restaurant'

interface OwnProps extends Omit<Menu, 'price'> {
    showBestMenuName(name:string):string
}

const BestMenu:React.FC<OwnProps> = ({name, category,showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu