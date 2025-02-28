import React from "react"
import { CustomerListProps } from "../../types/customerList"
import { Customer } from "../../types/customer"
import styles from "./CustomerList.module.css"

const CustomerList: React.FC<CustomerListProps> = ({
    customers,
    isLoading,
    isError
}) => {
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error fetching customers</div>
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Last Contact</th>
                </tr>
            </thead>
            <tbody>
                {customers?.map((customer: Customer) => (
                    <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.company}</td>
                        <td>{customer.status}</td>
                        <td>{customer.lastContact}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomerList
