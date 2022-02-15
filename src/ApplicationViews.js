import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animal/AnimalCard.js'
import { CustomerCard } from './components/customer/CustomerCard.js'
import { EmployeeCard } from './components/employee/EmployeeCard.js'
import { LocationCard } from './components/location/LocationCard.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/locations" element={<LocationCard />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/customers" element={<CustomerCard />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/employees" element={<EmployeeCard />} />
            </Routes>
        </>
    )
}