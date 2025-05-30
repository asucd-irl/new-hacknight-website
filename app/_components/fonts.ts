import {
  Instrument_Serif,
  Instrument_Sans,
  Patrick_Hand,
} from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const instrumentSans = Instrument_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
});
