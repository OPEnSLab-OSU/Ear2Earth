export function sensorDisplayName(rawKey) {
  if (!rawKey) return rawKey;

  // any SHT31 or SHT31_# is matched here
  const sht = rawKey.match(/^SHT31(?:_(\d+))?$/);
  if (sht) {
    return sht[1] ? `Temperature/Humidity_${sht[1]}` : "Temperature/Humidity"; // if no number, return base name
  }

  // dictionary mapping for other sensors
  const map = {
    TSL2591: "Solar Radiation",
    MS5803_119: "Device Pressure",
    MS5803_118: "Outside Pressure",
    TippingBucket: "Rainfall",
    Teros10: "Sail Moisture",
    A55311: "Magnetic Encoder",
    DFR_MultiGas_0: "Hydrogen Sulfide",
    DFR_MultiGas_1: "Sulfur Dioxide",
    DFR_MultiGas_2: "Ozone",
    Sen55: "Air Quality",
    T6793: "CO2",
  };

  return map[rawKey] ?? rawKey; // backwards compatible fallback
}
