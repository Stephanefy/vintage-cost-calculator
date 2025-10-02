export type ContributionKey =
  | "MMID"
  | "VIEILLESSE_BASE"
  | "VIEILLESSE_PLAFONNEE"
  | "AF"
  | "ATMP"
  | "AC"
  | "AGS"
  | "FNAL"
  | "VM"
  | "CSA"
  | "DIALOGUE_SOCIAL";

export const BASIC_RATES: Record<ContributionKey, number> = {
  MMID: 0.07, 
  VIEILLESSE_BASE: 0.0202, 
  VIEILLESSE_PLAFONNEE: 0.0855, 
  AF: 0.0345, 
  ATMP: 0.0195, 
  AC: 0.04, 
  AGS: 0.10, 
  FNAL: 0.0345, 
  VM: 0.0195, 
  CSA: 0.0195, 
  DIALOGUE_SOCIAL: 0.0195, 
};

export const formatPercent = (rate: number) =>
  `${(rate * 100).toLocaleString("fr-FR", { maximumFractionDigits: 2 })}%`;


