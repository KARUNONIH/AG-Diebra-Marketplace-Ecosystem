import { ObjectId } from "mongodb";

export type Role = "user" | "admin";

export interface Profile {
  _id?: ObjectId | string;
  userId: string;
  name: string;
  phone?: string;
  organizationName: string;
  organizationType: string;
  region: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export type RequestStatus =
  | "submitted"
  | "reviewing"
  | "matching"
  | "matched"
  | "closed";

export type UrgencyLevel = "low" | "medium" | "high";

export interface RequestItem {
  _id?: ObjectId | string;
  id?: string;
  userId: string;
  organizationName: string;
  category: string;
  title: string;
  description: string;
  targetRegion: string;
  urgency: UrgencyLevel;
  status: RequestStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type ResourceStatus = "available" | "reserved" | "allocated";

export interface ResourceItem {
  _id?: ObjectId | string;
  id?: string;
  userId: string;
  organizationName: string;
  category: string;
  title: string;
  description: string;
  capacitySpec?: string;
  region: string;
  status: ResourceStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type ConsentStatus = "pending" | "approved" | "rejected";
export type MatchStatus = "proposed" | "approved_both" | "declined" | "introduced";

export interface MatchItem {
  _id?: ObjectId | string;
  id?: string;
  requestId: string;
  resourceId: string;
  requestTitle: string;
  resourceTitle: string;
  requesterOrg: string;
  providerOrg: string;
  adminNotes?: string;
  requesterConsent: ConsentStatus;
  providerConsent: ConsentStatus;
  status: MatchStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type IntroStatus = "sent" | "discussion" | "collaborating" | "closed";

export interface IntroductionItem {
  _id?: ObjectId | string;
  id?: string;
  matchId: string;
  requesterOrg: string;
  providerOrg: string;
  topic: string;
  introNotes?: string;
  waLink: string;
  status: IntroStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}
