interface Device {
  name: string,
  inputs: {
    [key: number]: [number, number]
  };
  outputs: {
    [key: number]: {
      [key: number]: number
    }
  };
}
