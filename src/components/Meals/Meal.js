import React, { Fragment } from 'react'
import { MealsList } from './MealsList'
import MealsSummary from './MealsSummary'

 const Meal = () => {
  return (
    <Fragment>
        <MealsSummary/>
        <MealsList/>
    </Fragment>
  )
}
export default Meal