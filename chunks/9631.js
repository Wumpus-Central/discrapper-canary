n.d(t, {
    f: () => i,
    x: () => a,
});
var r = n(643479);
let i = {
        desc: {
            name: "ICC Description",
        },
        cprt: {
            name: "ICC Copyright",
        },
        dmdd: {
            name: "ICC Device Model Description",
        },
        vued: {
            name: "ICC Viewing Conditions Description",
        },
        dmnd: {
            name: "ICC Device Manufacturer for Display",
        },
        tech: {
            name: "Technology",
        },
    },
    a = {
        4: {
            name: "Preferred CMM type",
            value: (e, t) => (0, r.hT)(e, t, 4),
            description: (e) => (null !== e ? l(e) : ""),
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
            value: (e, t) => (0, r.hT)(e, t, 4),
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
        16: {
            name: "Color Space",
            value: (e, t) => (0, r.hT)(e, t, 4),
        },
        20: {
            name: "Connection Space",
            value: (e, t) => (0, r.hT)(e, t, 4),
        },
        24: {
            name: "ICC Profile Date",
            value: (e, t) => s(e, t).toISOString(),
        },
        36: {
            name: "ICC Signature",
            value: (e, t) => o(e.buffer.slice(t, t + 4)),
        },
        40: {
            name: "Primary Platform",
            value: (e, t) => (0, r.hT)(e, t, 4),
            description: (e) => l(e),
        },
        48: {
            name: "Device Manufacturer",
            value: (e, t) => (0, r.hT)(e, t, 4),
            description: (e) => l(e),
        },
        52: {
            name: "Device Model Number",
            value: (e, t) => (0, r.hT)(e, t, 4),
        },
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
        80: {
            name: "Profile Creator",
            value: (e, t) => (0, r.hT)(e, t, 4),
        },
    };

function s(e, t) {
    return new Date(
        Date.UTC(
            e.getUint16(t),
            e.getUint16(t + 2) - 1,
            e.getUint16(t + 4),
            e.getUint16(t + 6),
            e.getUint16(t + 8),
            e.getUint16(t + 10),
        ),
    );
}

function o(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e));
}

function l(e) {
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
