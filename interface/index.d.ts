export {}
declare global {
 interface IUser {
    role: ReactNode;
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    metamask: string;
    groupId: string[]; // Adjust this based on your actual data structure
    whitelisted: boolean;
    allowedTradingAmountFrom: number;
    allowedTradingAmountTo: number;
    adminFee: number;
    userProfit: number;
    introducerFee: number;
  }
}
export interface Session {
  user: {
    id: string;
    email?: string; // Optional email for flexibility
    role?: string; // Optional role for flexibility
  };
}