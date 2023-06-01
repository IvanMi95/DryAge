export interface Cow {
  name: string;
  description: string;
  pictureReference?: string;
}

export interface Cut {
  name: string;
  duration_of_dry_age: Date;
  pictureReference?: string;
  price: number;
}
