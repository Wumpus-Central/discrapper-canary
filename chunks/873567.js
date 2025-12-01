function n(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let r = t[6] || "",
        n = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: r,
        hash: n,
        relative: t[5] + r + n,
    };
}
function a(e) {
    return e.split(/[?#]/, 1)[0];
}
r.d(t, {
    en: () => n,
    rt: () => a,
});
