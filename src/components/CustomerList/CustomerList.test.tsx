import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomerList from './CustomerList'
import { Customer } from '../../types/customer'

const mockCustomers: Customer[] = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "ABC Corp", status: "active", lastContact: "2023-01-01" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "XYZ Inc", status: "inactive", lastContact: "2023-02-01" },
  ];


describe("CustomerList", () => {
    it("renders loading state", () => {
        render(<CustomerList customers={undefined} isLoading={true} isError={false} />)

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    it("renders error state", () => {
        render(<CustomerList customers={undefined} isLoading={false} isError={true} />)

        expect(screen.getByText("Error fetching customers")).toBeInTheDocument()
    })

    it("renders customers when data is available", () => {
        render(<CustomerList customers={mockCustomers} isLoading={false} isError={false} />)

        expect(screen.getByText("John Doe")).toBeInTheDocument()
        expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })
})