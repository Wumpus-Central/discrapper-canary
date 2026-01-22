n.d(t, {
    AO: () => f,
    Ee: () => u,
    nr: () => c,
});
var r = n(311907),
    i = n(52133),
    a = n(290863),
    s = n(652215);
function o(e) {
    return e.type === s.$pd.PLAYING;
}
function l(e, t) {
    return t.findActivity(e, o);
}
function c(e, t) {
    return null != e ? l(e.ownerId, t) : null;
}
function u(e, t) {
    if (null == e) return null;
    let n = c(e, t);
    return null == n
        ? null
        : {
              id: n.application_id,
              name: n.name,
          };
}
function d(e, t) {
    return e === t || (null != e && null != t && (0, i.A)(e, t));
}
function f(e) {
    return (0, r.bG)([a.A], () => u(e, a.A), [e], d);
}
