import React from 'react'
import EnvelopeIcon from './vectors/EnvelopeIcon'
import { mail } from '../constants/topbar'

const MailContact = () => {
  return (
    <div className="flex gap-3 items-center">
      <EnvelopeIcon />
      <p className="">{mail}</p>
    </div>
  )
}

export default MailContact
