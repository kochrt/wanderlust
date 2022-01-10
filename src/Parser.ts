export class Customer {
  firstName?: string
  lastName?: string
  email?: string
  vehicleName?: string
  vehicleType?: string
  vehicleLength?: string

  constructor(line: string[]) {
    this.firstName = line[0]
    this.lastName = line[1]
    this.email = line[2]
    this.vehicleType = line[3]
    this.vehicleName = line[4]
    this.vehicleLength = line[5]
  }

  comparableFirstName() {
    return this.firstName?.toLowerCase() ?? ""
  }

  comparableLastName() {
    return this.lastName?.toLowerCase() ?? ""
  }

  comparableEmail() {
    return this.email?.toLowerCase() ?? ""
  }

  comparableVehicleName() {
    return this.vehicleName?.toLowerCase() ?? ""
  }

  comparableVehicleType() {
    return this.vehicleType?.toLowerCase() ?? ""
  }

  comparableVehicleLength() {
    return this.vehicleLength?.toLowerCase() ?? ""
  }
}

export default async function parse(file: File): Promise<Customer[]> {
  const raw = await file.text()
  const lines = raw.split('\n')
  const customers = []
  for (const line of lines) {
    customers.push(new Customer(line.split(/,|\|/)))
  }
  return customers
}