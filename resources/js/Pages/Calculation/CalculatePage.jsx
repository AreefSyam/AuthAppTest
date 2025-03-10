import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function FuelCalculation({ auth, cars }) {
    const [distance, setDistance] = useState("");
    const [selectedCarId, setSelectedCarId] = useState(
        cars.length > 0 ? cars[0].id : ""
    );
    const [fuelUsed, setFuelUsed] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            car_id: selectedCarId,
            road_length_km: distance,
            fuel_used: fuelUsed,
        };
        Inertia.post(route("trip.store"), data);
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Fuel Efficiency Calculation
                </h2>
            }
        >
            <div className="max-w-4xl mx-auto py-10">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="car"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select your car:
                        </label>
                        <select
                            id="car"
                            value={selectedCarId}
                            onChange={(e) => setSelectedCarId(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            {cars.map((car) => (
                                <option key={car.id} value={car.id}>
                                    {car.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="distance"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Distance traveled (km):
                        </label>
                        <input
                            type="number"
                            id="distance"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter the distance..."
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="fuelUsed"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Fuel used (liters):
                        </label>
                        <input
                            type="number"
                            id="fuelUsed"
                            value={fuelUsed}
                            onChange={(e) => setFuelUsed(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter fuel used..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Calculate Efficiency
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
