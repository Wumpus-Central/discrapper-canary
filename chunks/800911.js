function r(e, t, n = "\\s{0,5},?\\s{0,5}") {
    let i = t.replace(/\((?!\?)/g, "(?:");
    return `${e}${i}(?:${n}${i}){0,10}`;
}
function i(e) {
    let t;
    return e instanceof Array ? [...e] : e instanceof Map ? Array.from(e.keys()) : Object.keys(e);
}
function a(e) {
    let t = i(e)
        .sort((e, t) => t.length - e.length)
        .join("|")
        .replace(/\./g, "\\.");
    return `(?:${t})`;
}
n.d(t, {
    Xf: () => r,
    q3: () => a,
});
