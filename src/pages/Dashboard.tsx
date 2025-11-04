import React from 'react'
import Top from '../components/dashboard/top'
// @ts-ignore
import VehicleDashboard from '../components/dashboard/vehicleDashboard'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Top />
      <VehicleDashboard />
    </div>
  )
}

export default Dashboard
