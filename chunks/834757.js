"use strict";
n.d(t, { AO: () => d, Ee: () => u, nr: () => l });
var i = n(17928),
    r = n(52133),
    s = n(290863),
    a = n(652215);
function o(e) {
    return e.type === a.$pd.PLAYING;
}
function l(e, t) {
    var n;
    return null != e ? ((n = e.ownerId), t.findActivity(n, o)) : null;
}
function u(e, t) {
    if (null == e) return null;
    let n = l(e, t);
    return null == n ? null : { id: n.application_id, name: n.name };
}
function c(e, t) {
    return e === t || (null != e && null != t && (0, r.A)(e, t));
}
function d(e) {
    return (0, i.bG)([s.A], () => u(e, s.A), [e], c);
}
