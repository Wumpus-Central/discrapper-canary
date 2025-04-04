a.d(e, {
    Bg: () => E,
    Ic: () => n,
    M: () => _,
    OC: () => i,
    s3: () => c,
    uv: () => o
});
var r = a(370336);
function n(t, e, a, n) {
    let _ = Object.entries((0, r.Jr)(n)).sort((t, e) => t[0].localeCompare(e[0]));
    return `${t}${e}${a}${_}`;
}
function _(t) {
    let e = 0;
    for (let a = 0; a < t.length; a++) (e = (e << 5) - e + t.charCodeAt(a)), (e &= e);
    return e >>> 0;
}
function o(t) {
    let e = '';
    for (let a of t) {
        let t = Object.entries(a.tags),
            r = t.length > 0 ? `|#${t.map(([t, e]) => `${t}:${e}`).join(',')}` : '';
        e += `${a.name}@${a.unit}:${a.metric}|${a.metricType}${r}|T${a.timestamp}
`;
    }
    return e;
}
function i(t) {
    return t.replace(/[^\w]+/gi, '_');
}
function c(t) {
    return t.replace(/[^\w\-.]+/gi, '_');
}
let s = [
    ['\n', '\\n'],
    ['\r', '\\r'],
    ['\t', '\\t'],
    ['\\', '\\\\'],
    ['|', '\\u{7c}'],
    [',', '\\u{2c}']
];
function E(t) {
    let e = {};
    for (let a in t)
        Object.prototype.hasOwnProperty.call(t, a) &&
            (e[a.replace(/[^\w\-./]+/gi, '')] = [...String(t[a])].reduce(
                (t, e) =>
                    t +
                    (function (t) {
                        for (let [e, a] of s) if (t === e) return a;
                        return t;
                    })(e),
                ''
            ));
    return e;
}
