i.d(t, { A: () => o });
var n = i(723727),
    r = i(116657);
let o = {
    33434: { name: "ExposureTime", description: r.A.ExposureTime },
    33437: { name: "FNumber", description: r.A.FNumber },
    34850: { name: "ExposureProgram", description: r.A.ExposureProgram },
    34852: "SpectralSensitivity",
    34855: "ISOSpeedRatings",
    34856: { name: "OECF", description: () => "[Raw OECF table data]" },
    34858: "TimeZoneOffset",
    34859: "SelfTimerMode",
    34864: {
        name: "SensitivityType",
        description: (e) =>
            ({
                1: "Standard Output Sensitivity",
                2: "Recommended Exposure Index",
                3: "ISO Speed",
                4: "Standard Output Sensitivity and Recommended Exposure Index",
                5: "Standard Output Sensitivity and ISO Speed",
                6: "Recommended Exposure Index and ISO Speed",
                7: "Standard Output Sensitivity, Recommended Exposure Index and ISO Speed",
            })[e] || "Unknown",
    },
    34865: "StandardOutputSensitivity",
    34866: "RecommendedExposureIndex",
    34867: "ISOSpeed",
    34868: "ISOSpeedLatitudeyyy",
    34869: "ISOSpeedLatitudezzz",
    36864: { name: "ExifVersion", description: (e) => (0, n.Jn)(e) },
    36867: "DateTimeOriginal",
    36868: "DateTimeDigitized",
    36873: "GooglePlusUploadCode",
    36880: "OffsetTime",
    36881: "OffsetTimeOriginal",
    36882: "OffsetTimeDigitized",
    37121: { name: "ComponentsConfiguration", description: r.A.ComponentsConfiguration },
    37122: "CompressedBitsPerPixel",
    37377: { name: "ShutterSpeedValue", description: r.A.ShutterSpeedValue },
    37378: { name: "ApertureValue", description: r.A.ApertureValue },
    37379: "BrightnessValue",
    37380: "ExposureBiasValue",
    37381: { name: "MaxApertureValue", description: (e) => Math.pow(Math.sqrt(2), e[0] / e[1]).toFixed(2) },
    37382: { name: "SubjectDistance", description: (e) => e[0] / e[1] + " m" },
    37383: { name: "MeteringMode", description: r.A.MeteringMode },
    37384: { name: "LightSource", description: r.A.LightSource },
    37385: {
        name: "Flash",
        description: (e) => {
            if (0 === e) return "Flash did not fire";
            if (1 === e) return "Flash fired";
            if (5 === e) return "Strobe return light not detected";
            if (7 === e) return "Strobe return light detected";
            if (9 === e) return "Flash fired, compulsory flash mode";
            else if (13 === e) return "Flash fired, compulsory flash mode, return light not detected";
            else if (15 === e) return "Flash fired, compulsory flash mode, return light detected";
            else if (16 === e) return "Flash did not fire, compulsory flash mode";
            else if (24 === e) return "Flash did not fire, auto mode";
            else if (25 === e) return "Flash fired, auto mode";
            else if (29 === e) return "Flash fired, auto mode, return light not detected";
            else if (31 === e) return "Flash fired, auto mode, return light detected";
            else if (32 === e) return "No flash function";
            else if (65 === e) return "Flash fired, red-eye reduction mode";
            else if (69 === e) return "Flash fired, red-eye reduction mode, return light not detected";
            else if (71 === e) return "Flash fired, red-eye reduction mode, return light detected";
            else if (73 === e) return "Flash fired, compulsory flash mode, red-eye reduction mode";
            else if (77 === e)
                return "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
            else if (79 === e)
                return "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
            else if (89 === e) return "Flash fired, auto mode, red-eye reduction mode";
            else if (93 === e) return "Flash fired, auto mode, return light not detected, red-eye reduction mode";
            else if (95 === e) return "Flash fired, auto mode, return light detected, red-eye reduction mode";
            return "Unknown";
        },
    },
    37386: { name: "FocalLength", description: r.A.FocalLength },
    37393: "ImageNumber",
    37394: {
        name: "SecurityClassification",
        description: (e) =>
            ({ C: "Confidential", R: "Restricted", S: "Secret", T: "Top Secret", U: "Unclassified" })[e] || "Unknown",
    },
    37395: "ImageHistory",
    37396: {
        name: "SubjectArea",
        description: (e) =>
            2 === e.length
                ? `Location; X: ${e[0]}, Y: ${e[1]}`
                : 3 === e.length
                  ? `Circle; X: ${e[0]}, Y: ${e[1]}, diameter: ${e[2]}`
                  : 4 === e.length
                    ? `Rectangle; X: ${e[0]}, Y: ${e[1]}, width: ${e[2]}, height: ${e[3]}`
                    : "Unknown",
    },
    37500: { name: "MakerNote", description: () => "[Raw maker note data]" },
    37510: { name: "UserComment", description: n.Cn },
    37520: "SubSecTime",
    37521: "SubSecTimeOriginal",
    37522: "SubSecTimeDigitized",
    37724: "ImageSourceData",
    37888: { name: "AmbientTemperature", description: (e) => e[0] / e[1] + " \xb0C" },
    37889: { name: "Humidity", description: (e) => e[0] / e[1] + " %" },
    37890: { name: "Pressure", description: (e) => e[0] / e[1] + " hPa" },
    37891: { name: "WaterDepth", description: (e) => e[0] / e[1] + " m" },
    37892: { name: "Acceleration", description: (e) => e[0] / e[1] + " mGal" },
    37893: { name: "CameraElevationAngle", description: (e) => e[0] / e[1] + " \xb0" },
    40960: { name: "FlashpixVersion", description: (e) => e.map((e) => String.fromCharCode(e)).join("") },
    40961: { name: "ColorSpace", description: r.A.ColorSpace },
    40962: "PixelXDimension",
    40963: "PixelYDimension",
    40964: "RelatedSoundFile",
    40965: "Interoperability IFD Pointer",
    41483: "FlashEnergy",
    41484: { name: "SpatialFrequencyResponse", description: () => "[Raw SFR table data]" },
    41486: "FocalPlaneXResolution",
    41487: "FocalPlaneYResolution",
    41488: { name: "FocalPlaneResolutionUnit", description: r.A.FocalPlaneResolutionUnit },
    41492: { name: "SubjectLocation", description: ([e, t]) => `X: ${e}, Y: ${t}` },
    41493: "ExposureIndex",
    41495: {
        name: "SensingMethod",
        description: (e) => {
            if (1 === e) return "Undefined";
            if (2 === e) return "One-chip color area sensor";
            if (3 === e) return "Two-chip color area sensor";
            if (4 === e) return "Three-chip color area sensor";
            if (5 === e) return "Color sequential area sensor";
            else if (7 === e) return "Trilinear sensor";
            else if (8 === e) return "Color sequential linear sensor";
            return "Unknown";
        },
    },
    41728: { name: "FileSource", description: (e) => (3 === e ? "DSC" : "Unknown") },
    41729: { name: "SceneType", description: (e) => (1 === e ? "A directly photographed image" : "Unknown") },
    41730: { name: "CFAPattern", description: () => "[Raw CFA pattern table data]" },
    41985: { name: "CustomRendered", description: r.A.CustomRendered },
    41986: { name: "ExposureMode", description: r.A.ExposureMode },
    41987: { name: "WhiteBalance", description: r.A.WhiteBalance },
    41988: {
        name: "DigitalZoomRatio",
        description: (e) => (0 === e[0] ? "Digital zoom was not used" : "" + e[0] / e[1]),
    },
    41989: { name: "FocalLengthIn35mmFilm", description: r.A.FocalLengthIn35mmFilm },
    41990: { name: "SceneCaptureType", description: r.A.SceneCaptureType },
    41991: {
        name: "GainControl",
        description: (e) => {
            if (0 === e) return "None";
            if (1 === e) return "Low gain up";
            if (2 === e) return "High gain up";
            if (3 === e) return "Low gain down";
            if (4 === e) return "High gain down";
            return "Unknown";
        },
    },
    41992: { name: "Contrast", description: r.A.Contrast },
    41993: { name: "Saturation", description: r.A.Saturation },
    41994: { name: "Sharpness", description: r.A.Sharpness },
    41995: { name: "DeviceSettingDescription", description: () => "[Raw device settings table data]" },
    41996: {
        name: "SubjectDistanceRange",
        description: (e) => (1 === e ? "Macro" : 2 === e ? "Close view" : 3 === e ? "Distant view" : "Unknown"),
    },
    42016: "ImageUniqueID",
    42032: "CameraOwnerName",
    42033: "BodySerialNumber",
    42034: {
        name: "LensSpecification",
        description: (e) => {
            let t = parseFloat((e[0][0] / e[0][1]).toFixed(5)),
                i = parseFloat((e[1][0] / e[1][1]).toFixed(5)),
                n = `${t}-${i} mm`;
            if (0 === e[3][1]) return `${n} f/?`;
            let r = 1 / (e[2][1] / e[2][1] / (e[3][0] / e[3][1]));
            return `${n} f/${parseFloat(r.toFixed(5))}`;
        },
    },
    42035: "LensMake",
    42036: "LensModel",
    42037: "LensSerialNumber",
    42080: {
        name: "CompositeImage",
        description: (e) =>
            ({
                1: "Not a Composite Image",
                2: "General Composite Image",
                3: "Composite Image Captured While Shooting",
            })[e] || "Unknown",
    },
    42081: "SourceImageNumberOfCompositeImage",
    42082: "SourceExposureTimesOfCompositeImage",
    42240: "Gamma",
    59932: "Padding",
    59933: "OffsetSchema",
    65e3: "OwnerName",
    65001: "SerialNumber",
    65002: "Lens",
    65100: "RawFile",
    65101: "Converter",
    65102: "WhiteBalance",
    65105: "Exposure",
    65106: "Shadows",
    65107: "Brightness",
    65108: "Contrast",
    65109: "Saturation",
    65110: "Sharpness",
    65111: "Smoothness",
    65112: "MoireFilter",
};
