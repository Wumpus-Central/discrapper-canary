function a(t) {
    if (!t) return {};
    let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    let _ = e[6] || "",
        a = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: _,
        hash: a,
        relative: e[5] + _ + a,
    };
}
function r(t) {
    return t.split(/[?#]/, 1)[0];
}
_.d(e, {
    en: () => a,
    rt: () => r,
});
