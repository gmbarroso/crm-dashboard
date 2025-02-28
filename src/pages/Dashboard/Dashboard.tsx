import React from "react"
import useSWR from "swr"
import { fetchCustomers, searchCustomers } from "../../api/mockAPI"
import {
    SearchBar,
    CustomerList
} from "../../components"
import styles from "./Dashboard.module.css"

const fetcher = async (query?: string) => {
    const response = query
        ? await searchCustomers(query)
        : await fetchCustomers()
    
    if (!response.ok) {
        throw new Error('An error occurred while fetching the data')
    }

    return response.json()
}

const Dashboard: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const {
        data: customers,
        isLoading,
        error
    } = useSWR(
        searchQuery ? ['customers', searchQuery] : 'customers',
        () => fetcher(searchQuery)
    )

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
            <CustomerList
                customers={customers}
                isLoading={isLoading}
                isError={!!error}
            />
        </div>
    )
}

export default Dashboard
