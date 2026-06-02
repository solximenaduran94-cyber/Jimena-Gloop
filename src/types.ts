export interface GuestRSVP {
  id: string;
  name: string;
  attendance: 'yes' | 'no';
  menu: 'standard' | 'vegetarian' | 'vegan' | 'celiac';
  message: string;
  songRequest: string;
  timestamp: string;
}

export interface PhotoUpload {
  id: string;
  url: string;
  caption: string;
  sender: string;
  timestamp: string;
}

export interface CelebrationConfig {
  birthdayGirl: string;
  date: string; // e.g. "2026-10-04T22:00:00"
  locationName: string;
  locationAddress: string;
  cbu: string;
  alias: string;
  bankName: string;
  photoUrl: string;
  googleDriveUrl: string; // Link to the Google Drive folder
  adminPin: string; // Password to unlock the guest list
}
