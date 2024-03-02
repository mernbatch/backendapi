const express = require("express");
const router = express.Router();

const amazonData = [
  {
    _id: 1001,
    title: "SteelSeries Arctis Nova 1P Multi-System Gaming Headset",
    description:
      "SteelSeries Arctis Nova 1P Multi-System Gaming Headset — Hi-Fi Drivers — 360° Spatial Audio — Comfort Design — Durable — Lightweight — Noise-Cancelling Mic — PS5/PS4, PC, Xbox, Switch - White",
    image:
      "https://m.media-amazon.com/images/I/711IoMiPz4L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    ratings: 4.5,
    discountedPrice: 200,
    regularPrice: 250,
    brand: "SteelSeries",
    isStock: true,
    Color: "#fff",
    aboutItem: {
      "Almighty Audio":
        "Custom-designed Nova Acoustic System features best-in class audio for gaming with High Fidelity Drivers. Fully customize your ideal sound experience with a first-in gaming Pro-grade Parametric EQ.",
      "360 degree Spatial Audio":
        "Immersive surround sound transports you to the gaming world, letting you hear every critical step, reload, or vocal cue to give you an advantage. *Fully compatible with Tempest 3D Audio for PS5 / Microsoft Spatial Sound",
    },
  },
  {
    _id: 1002,
    title: "SteelSeries Arctis Nova 1P Multi-System Gaming Headset",
    description:
      "GTRACING Footrest, Ergonomic Computer Game Desk, Reclining Gamer Chair Seat Height Adjustment Swivel Rocker with Headrest and Lumbar, Navy Blue with F",
    image:
      "https://m.media-amazon.com/images/I/618I64n2QdL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    ratings: 5,
    discountedPrice: 1500,
    regularPrice: 2000,
    brand: "unknown",
    isStock: true,
    Color: "#000000",
    aboutItem: {
      "Almighty Audio":
        "Custom-designed Nova Acoustic System features best-in class audio for gaming with High Fidelity Drivers. Fully customize your ideal sound experience with a first-in gaming Pro-grade Parametric EQ.",
      "360 degree Spatial Audio":
        "Immersive surround sound transports you to the gaming world, letting you hear every critical step, reload, or vocal cue to give you an advantage. *Fully compatible with Tempest 3D Audio for PS5 / Microsoft Spatial Sound",
    },
  },
  {
    _id: 1003,
    title: "iRobot Roomba s9+ (9550) Robot Vacuum & Braava Jet m6 (6112) Robot",
    description:
      "iRobot Roomba s9+ (9550) Robot Vacuum & Braava Jet m6 (6112) Robot Mop Bundle - Wi-Fi Connected, Smart Mapping, Powerful Suction, Precision Jet Spray, Corners & Edges, Ideal for Multiple Rooms",
    image:
      "https://m.media-amazon.com/images/I/71O+BXqgyTL._AC_SY300_SX300_.jpg",
    ratings: 4,
    discountedPrice: 1200,
    regularPrice: 1500,
    brand: "iRobot",
    isStock: true,
    Color: "#fff",
    aboutItem: {
      "Almighty Audio":
        "Custom-designed Nova Acoustic System features best-in class audio for gaming with High Fidelity Drivers. Fully customize your ideal sound experience with a first-in gaming Pro-grade Parametric EQ.",
      "360 degree Spatial Audio":
        "Immersive surround sound transports you to the gaming world, letting you hear every critical step, reload, or vocal cue to give you an advantage. *Fully compatible with Tempest 3D Audio for PS5 / Microsoft Spatial Sound",
    },
  },
];

router.get("/", (req, res) => {
  res.send(amazonData);
});

module.exports = router;
