export interface EmployerDto {
    id: string;
    name: string;
    email: string;
    hourRate: number;
    overtimeHourRate: number;
}


export interface ShiftDto {
    employeeId: string;
    clockIn: string;
    clockOut: string;
}

export interface SearchEmployerDto extends EmployerDto {
    totalClock: number;
    totalAmount: number;
    totalOverTimeAmout: number;
}