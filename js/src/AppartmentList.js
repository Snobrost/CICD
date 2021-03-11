import React from 'react'
import Appartment from './Appartment'

const AppartmentList = ({ appartments }) => (
  <div>
    {appartments.map(appartment =>
      <Appartment
        key={appartment.id}
        appartment={appartment}
      />
    )}
  </div>
)

export default AppartmentList