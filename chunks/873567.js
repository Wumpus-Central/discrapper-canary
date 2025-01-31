function r(t) {
    if (!t) return {};
    let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    let a = e[6] || '',
        r = e[8] || '';
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: a,
        hash: r,
        relative: e[5] + a + r
    };
}
function n(t) {
    return t.split(/[?#]/, 1)[0];
}
a.d(e, {
    en: () => r,
    rt: () => n
});
