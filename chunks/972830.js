n.d(t, { h: () => u }), n(358797), n(539854);
var r = n(570140),
    i = n(179645),
    a = n(38618);
let o = [];
function s() {
    return null != i.Z.getType();
}
function l() {
    s() || (o.forEach((e) => c(e)), (o = []));
}
function c(e) {
    setImmediate(() => e());
}
function u(e) {
    a.Z.isConnectedOrOverlay() && !s() ? c(e) : o.push(e);
}
r.Z.subscribe('CONNECTION_OPEN', l), r.Z.subscribe('CONNECTION_RESUMED', l), r.Z.subscribe('NUF_COMPLETE', l);
