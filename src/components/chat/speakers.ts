export const speakers = {
  walker: "Samuel Green",
  owner: "You",
} as const;

export type Speaker = keyof typeof speakers;
