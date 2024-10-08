"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PlusIcon, SearchIcon } from 'lucide-react'
import AddClientDialog from './add-client-dialog'

// Mock data for demonstration
const mockClients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', company: 'ABC Corp' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'XYZ Inc' },
  // Add more mock clients as needed
]

export default function ClientList() {
  const [isAddClientOpen, setIsAddClientOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search clients..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={() => setIsAddClientOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add Client
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddClientDialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen} />
    </div>
  )
}