import * as v from "valibot";
import { StatesSchema, TimeSchema } from "../utils/schemas";

export default defineEventHandler(async (event) => {
  const { time, states } = await $fetch<{ time: unknown; states: unknown }>(
    "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226"
  );
  try {
    const validatedTime = v.parse(TimeSchema, time);
    const validatedStates = v.parse(StatesSchema, states);
    return { validatedTime, validatedStates };
  } catch (error) {
    console.log(error);
    return "empty Object";
  }
});
