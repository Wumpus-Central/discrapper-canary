"use strict";
function r(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
        r = t[8] || "";
    return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
}
function i(e) {
    return e.split(/[?#]/, 1)[0];
}
n.d(t, { Dl: () => r, f: () => i });
