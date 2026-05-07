"use strict";
n.d(t, { AO: () => _, Ee: () => c, nr: () => u });
var i = n(17928),
    r = n(52133),
    s = n(765379),
    a = n(290863),
    o = n(652215);
function l(e) {
    return e.type === o.$pd.PLAYING && !(0, s.A)(e);
}
function u(e, t) {
    var n;
    return null != e ? ((n = e.ownerId), t.findActivity(n, l)) : null;
}
function c(e, t) {
    if (null == e) return null;
    let n = u(e, t);
    return null == n ? null : { id: n.application_id, name: n.name };
}
function d(e, t) {
    return e === t || (null != e && null != t && (0, r.A)(e, t));
}
function _(e) {
    return (0, i.bG)([a.A], () => c(e, a.A), [e], d);
}
