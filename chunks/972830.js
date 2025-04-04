n.d(t, { h: () => u }), n(177593), n(653041);
var r = n(570140),
    i = n(179645),
    o = n(38618);
let a = [];
function s() {
    return null != i.Z.getType();
}
function l() {
    s() || (a.forEach((e) => c(e)), (a = []));
}
function c(e) {
    setImmediate(() => e());
}
function u(e) {
    o.Z.isConnectedOrOverlay() && !s() ? c(e) : a.push(e);
}
r.Z.subscribe('CONNECTION_OPEN', l), r.Z.subscribe('CONNECTION_RESUMED', l), r.Z.subscribe('NUF_COMPLETE', l);
