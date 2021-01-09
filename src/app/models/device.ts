interface Device {
  name: string;
  colors: {r: number, g: number, b: number, a: number, code: number}[];
  inputs: {
    [key: number]: [number, number]
  };
  outputs: {
    [key: number]: {
      [key: number]: number
    }
  };
}
