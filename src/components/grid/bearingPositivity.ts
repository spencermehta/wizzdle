const bearingPositivity = (bearing: string): string => {
  return bearing === 'N' || bearing === 'E' ? '' : '-';
};

export default bearingPositivity;
