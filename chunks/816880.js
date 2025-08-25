n.d(t, { Z: () => l });
var r = n(684667),
    i = n(529883),
    o = n(692764),
    a = n(463424),
    s = n(267236);
let l = { read: u },
    c = 16;
function u(e, t, n) {
    let i = r.Z.getByteOrder(e, t),
        a = (0, s.N)(e, o.Xr, t, (0, s.a)(e, t, i), i, n);
    return d(e, t, a, i);
}
function d(e, t, n, r) {
    if (!n.MPEntry) return n;
    let o = [];
    for (let s = 0; s < Math.ceil(n.MPEntry.value.length / c); s++) {
        o[s] = {};
        let l = f(n.MPEntry.value, s * c, i.Z.getTypeSize("LONG"), r);
        (o[s].ImageFlags = _(l)), (o[s].ImageFormat = p(l)), (o[s].ImageType = h(l));
        let u = f(n.MPEntry.value, s * c + 4, i.Z.getTypeSize("LONG"), r);
        o[s].ImageSize = {
            value: u,
            description: "" + u,
        };
        let d = m(s, n.MPEntry, r, t);
        o[s].ImageOffset = {
            value: d,
            description: "" + d,
        };
        let g = f(n.MPEntry.value, s * c + 12, i.Z.getTypeSize("SHORT"), r);
        o[s].DependentImage1EntryNumber = {
            value: g,
            description: "" + g,
        };
        let E = f(n.MPEntry.value, s * c + 14, i.Z.getTypeSize("SHORT"), r);
        (o[s].DependentImage2EntryNumber = {
            value: E,
            description: "" + E,
        }),
            (o[s].image = e.buffer.slice(d, d + u)),
            (0, a.eN)(o[s], "base64", function () {
                return (0, a.sq)(this.image);
            });
    }
    return (n.Images = o), n;
}
function f(e, t, n, i) {
    if (i === r.Z.LITTLE_ENDIAN) {
        let r = 0;
        for (let i = 0; i < n; i++) r += e[t + i] << (8 * i);
        return r;
    }
    let o = 0;
    for (let r = 0; r < n; r++) o += e[t + r] << (8 * (n - 1 - r));
    return o;
}
function _(e) {
    let t = [(e >> 31) & 1, (e >> 30) & 1, (e >> 29) & 1],
        n = [];
    return (
        t[0] && n.push("Dependent Parent Image"),
        t[1] && n.push("Dependent Child Image"),
        t[2] && n.push("Representative Image"),
        {
            value: t,
            description: n.join(", ") || "None",
        }
    );
}
function p(e) {
    let t = (e >> 24) & 7;
    return {
        value: t,
        description: 0 === t ? "JPEG" : "Unknown",
    };
}
function h(e) {
    let t = 16777215 & e;
    return {
        value: t,
        description:
            {
                196608: "Baseline MP Primary Image",
                65537: "Large Thumbnail (VGA equivalent)",
                65538: "Large Thumbnail (Full HD equivalent)",
                131073: "Multi-Frame Image (Panorama)",
                131074: "Multi-Frame Image (Disparity)",
                131075: "Multi-Frame Image (Multi-Angle)",
                0: "Undefined",
            }[t] || "Unknown",
    };
}
function m(e, t, n, r) {
    return g(e) ? 0 : f(t.value, e * c + 8, i.Z.getTypeSize("LONG"), n) + r;
}
function g(e) {
    return 0 === e;
}
