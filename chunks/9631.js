i.d(t, { f: () => r, x: () => o });
var n = i(643479);
let r = {
        desc: { name: "ICC Description" },
        cprt: { name: "ICC Copyright" },
        dmdd: { name: "ICC Device Model Description" },
        vued: { name: "ICC Viewing Conditions Description" },
        dmnd: { name: "ICC Device Manufacturer for Display" },
        tech: { name: "Technology" },
    },
    o = {
        4: {
            name: "Preferred CMM type",
            value: (e, t) => (0, n.hT)(e, t, 4),
            description: (e) => (null !== e ? a(e) : ""),
        },
        8: {
            name: "Profile Version",
            value: (e, t) =>
                e.getUint8(t).toString(10) +
                "." +
                (e.getUint8(t + 1) >> 4).toString(10) +
                "." +
                (e.getUint8(t + 1) % 16).toString(10),
        },
        12: {
            name: "Profile/Device class",
            value: (e, t) => (0, n.hT)(e, t, 4),
            description: (e) => {
                switch (e.toLowerCase()) {
                    case "scnr":
                        return "Input Device profile";
                    case "mntr":
                        return "Display Device profile";
                    case "prtr":
                        return "Output Device profile";
                    case "link":
                        return "DeviceLink profile";
                    case "abst":
                        return "Abstract profile";
                    case "spac":
                        return "ColorSpace profile";
                    case "nmcl":
                        return "NamedColor profile";
                    case "cenc":
                        return "ColorEncodingSpace profile";
                    case "mid ":
                        return "MultiplexIdentification profile";
                    case "mlnk":
                        return "MultiplexLink profile";
                    case "mvis":
                        return "MultiplexVisualization profile";
                    default:
                        return e;
                }
            },
        },
        16: { name: "Color Space", value: (e, t) => (0, n.hT)(e, t, 4) },
        20: { name: "Connection Space", value: (e, t) => (0, n.hT)(e, t, 4) },
        24: {
            name: "ICC Profile Date",
            value: (e, t) => {
                var i, n;
                return ((i = e),
                (n = t),
                new Date(
                    Date.UTC(
                        i.getUint16(n),
                        i.getUint16(n + 2) - 1,
                        i.getUint16(n + 4),
                        i.getUint16(n + 6),
                        i.getUint16(n + 8),
                        i.getUint16(n + 10),
                    ),
                )).toISOString();
            },
        },
        36: {
            name: "ICC Signature",
            value: (e, t) => {
                var i;
                return (i = e.buffer.slice(t, t + 4)), String.fromCharCode.apply(null, new Uint8Array(i));
            },
        },
        40: { name: "Primary Platform", value: (e, t) => (0, n.hT)(e, t, 4), description: (e) => a(e) },
        48: { name: "Device Manufacturer", value: (e, t) => (0, n.hT)(e, t, 4), description: (e) => a(e) },
        52: { name: "Device Model Number", value: (e, t) => (0, n.hT)(e, t, 4) },
        64: {
            name: "Rendering Intent",
            value: (e, t) => e.getUint32(t),
            description: (e) => {
                switch (e) {
                    case 0:
                        return "Perceptual";
                    case 1:
                        return "Relative Colorimetric";
                    case 2:
                        return "Saturation";
                    case 3:
                        return "Absolute Colorimetric";
                    default:
                        return e;
                }
            },
        },
        80: { name: "Profile Creator", value: (e, t) => (0, n.hT)(e, t, 4) },
    };
function a(e) {
    switch (e.toLowerCase()) {
        case "appl":
            return "Apple";
        case "adbe":
            return "Adobe";
        case "msft":
            return "Microsoft";
        case "sunw":
            return "Sun Microsystems";
        case "sgi":
            return "Silicon Graphics";
        case "tgnt":
            return "Taligent";
        default:
            return e;
    }
}
