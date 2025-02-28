import { Customer } from '../types/customer'

const generateCustomers = (): Customer[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    company: `Company ${String.fromCharCode(65 + (i % 26))}`,
    status: ['active', 'inactive', 'pending'][i % 3] as Customer['status'],
    lastContact: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }))
}

const customers = generateCustomers()

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchCustomers = async (): Promise<Response> => {
  await delay(500)
  return new Response(JSON.stringify(customers), {
    headers: { 'Content-Type': 'application/json' }
  })
}

export const searchCustomers = async (query: string): Promise<Response> => {
  await delay(300)
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(query.toLowerCase())
  )
  return new Response(JSON.stringify(filteredCustomers), {
    headers: { 'Content-Type': 'application/json' }
  })
}