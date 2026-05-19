"use strict";
n.d(t, { Fm: () => o, R3: () => l, oC: () => u }), n(321073);
var i = n(294845),
    r = n.n(i);
let s = /^(\d{4}-\d{1,2})/;
function a(e) {
    let t = s.exec(e);
    return null != t ? t[1] : null;
}
function o(e) {
    return Array.from(Object.entries(e)).map((e) => {
        let [t, n] = e;
        return { id: t, experiment: n };
    });
}
function l(e, t) {
    return e.slice().sort((e, n) => {
        if (null != t[e?.id] && null == t[n?.id]) return -1;
        if (null == t[e?.id] && null != t[n?.id]) return 1;
        let i = a(e.id),
            r = a(n.id);
        if (null != i && null != r) {
            let e = r.localeCompare(i);
            if (0 !== e) return e;
        }
        return e.experiment.title.localeCompare(n.experiment.title);
    });
}
function u(e, t) {
    let n = t.split(/\s+/g).filter((e) => "" !== e);
    if (0 === n.length) return e;
    let i = [];
    for (let t of e) {
        let e = 0;
        for (let i of n)
            (function e(t, n) {
                if (Array.isArray(t)) {
                    for (let i of t) if (e(i, n)) return !0;
                } else if ("object" == typeof t && null !== t) {
                    for (let i of Object.values(t)) if (e(i, n)) return !0;
                } else if ("string" == typeof t && t.toLowerCase().includes(n.toLowerCase())) return !0;
                return !1;
            })(t, i) && (e += 1);
        0 !== e && (null == i[e] && (i[e] = []), i[e].push(t));
    }
    return r()(i.filter((e) => void 0 !== e).reverse());
}
