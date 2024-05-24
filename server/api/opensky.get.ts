import * as v from "valibot";

const TimeSchema = v.number()

const OpenskyStateSchema = v.tuple([
  v.string(), // icao24
  v.nullable(v.string()), // callsign
  v.string(), // origin_country
  v.nullable(v.number([v.integer()])), // time_position
  v.number([v.integer()]), // last_contact
  v.nullable(v.number()), // longitude
  v.nullable(v.number()), // latitude
  v.nullable(v.number()), // baro_altitude
  v.boolean(), // on_ground
  v.nullable(v.number()), // velocity
  v.nullable(v.number()), // true_track
  v.nullable(v.number()), // vertical_rate
  v.nullable(v.number()), // sensors
  v.nullable(v.number()), // geo_altitude 
  v.nullable(v.string()), // squawk
  v.boolean(), // spi
  v.number([v.integer()]), // position_source
  v.number([v.integer()]), // category
]);

export default defineEventHandler(async (event) => {
  const { time, states } = await $fetch<{ time: unknown; states: unknown }>(
    "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226"
  );

  return { time, states };
});
