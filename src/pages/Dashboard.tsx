import React from 'react'
import Top from '../components/dashboard/top'
// @ts-ignore
import VehicleDashboard from '../components/dashboard/vehicleDashboard'

const Dashboard: React.FC = () => {
  return (
    <div className='main-content-padding' style={{backgroundColor: '#FAFAFA'}}>
      <Top />
      <VehicleDashboard />
    </div>
  )
}

export default Dashboard
