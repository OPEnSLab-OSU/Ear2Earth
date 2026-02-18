export function sensorDisplayName(rawKey) {
  if (!rawKey) return rawKey;

  // any SHT31 or SHT31_# is matched here
  const sht = rawKey.match(/^SHT31(?:_(\d+))?$/);
  if (sht) {
    return sht[1] ? `Climate_${sht[1]}` : "Climate"; // if no number, return base name
  }

  // dictionary mapping for other sensors
  const map = {
    TSL2591: "Light",
    MS5803_119: "Hydrostatic",
    MS5803_118: "Atmospheric",
    TippingBucket: "Rainfall Gauge",
    Teros10: "Soil Moisture",
    A55311: "Magnetic Encoder",
    DFR_MultiGas_0: "Hydrogen Sulfide",
    DFR_MultiGas_1: "Sulfur Dioxide",
    DFR_MultiGas_2: "Ozone",
    Sen55: "Air Quality Index",
    T6793: "CO2",
    Analog: "Battery Voltage"
  };

  return map[rawKey] ?? rawKey; // backwards compatible fallback
}
