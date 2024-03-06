import { ProfileForm } from '@/components/profile-form'
import { Card } from '@/components/ui/card'
import React from 'react'

const Profile = () => {
  return (
    <div>
      <Card className='p-5'>
          <ProfileForm/>
      </Card>
    </div>
  )
}

export default Profile