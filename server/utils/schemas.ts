import * as v from "valibot";

const Icao24Schema = v.string(); // icao24
const CallSignSchema = v.nullable(v.string()); // callsign
const OriginCountrySchema = v.string(); // origin_country
const TimePositionSchema = v.nullable(v.number([v.integer()])); // time_position
const LastContactSchema = v.number([v.integer()]); // last_contact
const LongitudeSchema = v.nullable(v.number()); // longitude
const LatitudeSchema = v.nullable(v.number()); // latitude
const BaroAltitudeSchema = v.nullable(v.number()); // baro_altitude
const OnGroundSchema = v.boolean(); // on_ground
const VelovitySchema = v.nullable(v.number()); // velocity
const TrueTrackSchema = v.nullable(v.number()); // true_track
const VerticalRateSchema = v.nullable(v.number()); // vertical_rate
const SenseorsSchema = v.nullable(v.number()); // sensors
const GeoAltitudeSchema = v.nullable(v.number()); // geo_altitude
const SquawkSchema = v.nullable(v.string()); // squawk
const SpiSchema = v.boolean(); // spi
const PositionSourceSchema = v.number([v.integer()]); // position_source
const CategorySchema = v.number([v.integer()]); // category

export const TimeSchema = v.number();

export const StateSchema = v.tuple([
  Icao24Schema,
  CallSignSchema,
  OriginCountrySchema,
  TimePositionSchema,
  LastContactSchema,
  LongitudeSchema,
  LatitudeSchema,
  BaroAltitudeSchema,
  OnGroundSchema,
  VelovitySchema,
  TrueTrackSchema,
  VerticalRateSchema,
  SenseorsSchema,
  GeoAltitudeSchema,
  SquawkSchema,
  SpiSchema,
  PositionSourceSchema,
  CategorySchema,
]);

export const StatesSchema = v.array(StateSchema);

export const AllStatesOpenskySchema = v.object({
  time: TimeSchema,
  states: StatesSchema,
});
