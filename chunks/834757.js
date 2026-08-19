"use strict";
n.d(t, { AO: () => _, Ee: () => c, nr: () => d });
var i = n(17928),
    r = n(52133),
    a = n(765379),
    s = n(290863),
    l = n(652215);
function o(e) {
    return e.type === l.$pd.PLAYING && !(0, a.A)(e);
}
function d(e, t) {
    var n;
    return null != e ? ((n = e.ownerId), t.findActivity(n, o)) : null;
}
function c(e, t) {
    if (null == e) return null;
    let n = d(e, t);
    return null == n ? null : { id: n.application_id, name: n.name };
}
function u(e, t) {
    return e === t || (null != e && null != t && (0, r.A)(e, t));
}
function _(e) {
    return (0, i.bG)([s.A], () => c(e, s.A), [e], u);
}
