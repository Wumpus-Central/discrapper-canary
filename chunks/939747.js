r.d(t, {
    Bg: () => E,
    Ic: () => a,
    M: () => i,
    OC: () => _,
    s3: () => s,
    uv: () => o,
});
var n = r(370336);
function a(e, t, r, a) {
    let i = Object.entries((0, n.Jr)(a)).sort((e, t) => e[0].localeCompare(t[0]));
    return `${e}${t}${r}${i}`;
}
function i(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) (t = (t << 5) - t + e.charCodeAt(r)), (t &= t);
    return t >>> 0;
}
function o(e) {
    let t = "";
    for (let r of e) {
        let e = Object.entries(r.tags),
            n = e.length > 0 ? `|#${e.map(([e, t]) => `${e}:${t}`).join(",")}` : "";
        t += `${r.name}@${r.unit}:${r.metric}|${r.metricType}${n}|T${r.timestamp}
`;
    }
    return t;
}
function _(e) {
    return e.replace(/[^\w]+/gi, "_");
}
function s(e) {
    return e.replace(/[^\w\-.]+/gi, "_");
}
let c = [
    ["\n", "\\n"],
    ["\r", "\\r"],
    ["\t", "\\t"],
    ["\\", "\\\\"],
    ["|", "\\u{7c}"],
    [",", "\\u{2c}"],
];
function E(e) {
    let t = {};
    for (let r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
            (t[r.replace(/[^\w\-./]+/gi, "")] = [...String(e[r])].reduce(
                (e, t) =>
                    e +
                    (function (e) {
                        for (let [t, r] of c) if (e === t) return r;
                        return e;
                    })(t),
                "",
            ));
    return t;
}
