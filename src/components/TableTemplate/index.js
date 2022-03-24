import React, { useState } from 'react'
import TableTemplateView from '../../views/TableTemplateView'

const TableTemplate = (props) => {
  const [collapse, setCollapse] = useState(false)

  const toggle = () => {
    setCollapse(!collapse)
  }
  return <TableTemplateView toggle={toggle} collapse={collapse} {...props} />
}

export default TableTemplate
