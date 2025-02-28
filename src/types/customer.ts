export interface Customer {
    id: number;
    name: string;
    email: string;
    company: string;
    status: 'active' | 'inactive' | 'pending';
    lastContact: string;
}