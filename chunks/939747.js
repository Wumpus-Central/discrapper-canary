_.d(e, {
    Bg: () => s,
    Ic: () => r,
    M: () => n,
    OC: () => E,
    s3: () => i,
    uv: () => o,
});
var a = _(370336);
function r(t, e, _, r) {
    let n = Object.entries((0, a.Jr)(r)).sort((t, e) => t[0].localeCompare(e[0]));
    return `${t}${e}${_}${n}`;
}
function n(t) {
    let e = 0;
    for (let _ = 0; _ < t.length; _++) (e = (e << 5) - e + t.charCodeAt(_)), (e &= e);
    return e >>> 0;
}
function o(t) {
    let e = "";
    for (let _ of t) {
        let t = Object.entries(_.tags),
            a = t.length > 0 ? `|#${t.map(([t, e]) => `${t}:${e}`).join(",")}` : "";
        e += `${_.name}@${_.unit}:${_.metric}|${_.metricType}${a}|T${_.timestamp}
`;
    }
    return e;
}
function E(t) {
    return t.replace(/[^\w]+/gi, "_");
}
function i(t) {
    return t.replace(/[^\w\-.]+/gi, "_");
}
let c = [
    ["\n", "\\n"],
    ["\r", "\\r"],
    ["\t", "\\t"],
    ["\\", "\\\\"],
    ["|", "\\u{7c}"],
    [",", "\\u{2c}"],
];
function s(t) {
    let e = {};
    for (let _ in t)
        Object.prototype.hasOwnProperty.call(t, _) &&
            (e[_.replace(/[^\w\-./]+/gi, "")] = [...String(t[_])].reduce(
                (t, e) =>
                    t +
                    (function (t) {
                        for (let [e, _] of c) if (t === e) return _;
                        return t;
                    })(e),
                "",
            ));
    return e;
}
