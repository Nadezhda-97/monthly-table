export interface PlanFact {
  income: number;
  activePartners: number;
}

export interface TotalItem {
  plan: PlanFact;
  fact: PlanFact;
}

export interface MonthData {
  income: number;
  activePartners: number;
  plan: PlanFact;
  fact: PlanFact;
}

export interface AdminData {
  id: number;
  adminId: number;
  adminName: string;
  year: number;
  months: MonthData[];
}

export interface ApiResponse {
  success: boolean;
  data: {
    total: TotalItem[];
    table: AdminData[];
  };
}