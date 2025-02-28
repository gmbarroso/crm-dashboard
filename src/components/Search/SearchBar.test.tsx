import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar'

describe("SearchBar", () => {
    it("should render correctly", () => {
        const mockOnSearch = jest.fn()
        render(<SearchBar onSearch={mockOnSearch} />)

        expect(screen.getByPlaceholderText("Search customers...")).toBeInTheDocument()
    })

    it("should call onSearch when the search input changes", () => {
        jest.useFakeTimers()
        const mockOnSearch = jest.fn()
        render(<SearchBar onSearch={mockOnSearch} />)

        const input = screen.getByPlaceholderText("Search customers...")
        fireEvent.change(input, { target: { value: "test" } })

        jest.runAllTimers()

        expect(mockOnSearch).toHaveBeenCalledWith("test")
    })
})