import { Request } from "express";

// Extend the Request interface
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        fullName: string;
        username: string;
        email: string;
        phone: string;
        wallet: number;
        dateOfBirth: Date;
        profile?: string | undefined | null;
        balance: number;
        createdAt: Date;
        address: string | undefined | null;
        active: boolean;
        isBlocked: boolean;
        isVerified: boolean;
        role: string;
      };
    }
  }
}
