r.d(n, { RV: () => c, n7: () => u });
var e = r(574211),
    s = r(375708);
let i = [e.Z.DESKTOP, e.Z.MOBILE, e.Z.CONSOLE];
function u(t) {
    switch (t) {
        case e.Z.DESKTOP:
            return s.intl.string(s.t.KT6uCJ);
        case e.Z.MOBILE:
            return s.intl.string(s.t["0DvssQ"]);
        case e.Z.CONSOLE:
            return s.intl.string(s.t.RT9Ccb);
    }
}
function c(t) {
    if (null == t || 0 === t.length) return [];
    let n = new Set(t);
    return i.filter((t) => n.has(t));
}
