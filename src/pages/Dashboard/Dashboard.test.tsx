import { render, screen, waitFor, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import Dashboard from "./Dashboard"
import { SWRConfig } from "swr"

jest.mock("../../api/mockAPI", () => ({
    fetchCustomers: jest.fn(),
    searchCustomers: jest.fn()
}))

describe("Dashboard", () => {
    it("renders the Dashboard component", async () => {
        await act(async () => {
            render(
                <SWRConfig value={{ provider: () => new Map() }}>
                    <Dashboard />
                </SWRConfig>
            )
        })

        await waitFor(() => {
            expect(screen.getByText("Dashboard")).toBeInTheDocument()
        })
    })

    it("displays loading state initially", async () => {
        require("../../api/mockAPI").fetchCustomers.mockImplementation(() =>
            new Promise(resolve => setTimeout(() => resolve({ ok: true, json: () => Promise.resolve([]) }), 100))
        );

        await act(async () => {
          render(
            <SWRConfig value={{ provider: () => new Map() }}>
              <Dashboard />
            </SWRConfig>
          );
        });
    
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
    
    it("displays customers after loading", async () => {
      const mockCustomers = [
        { id: 1, name: "John Doe", email: "john@example.com", company: "ABC Corp", status: "active", lastContact: "2023-01-01" },
      ];
      
      require("../../api/mockAPI").fetchCustomers.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockCustomers),
      });

      await act(async () => {
        render(
          <SWRConfig value={{ provider: () => new Map() }}>
            <Dashboard />
          </SWRConfig>
        );
      });

      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument();
      });
    });
})
