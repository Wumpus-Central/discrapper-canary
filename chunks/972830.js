n.d(t, { h: () => c }), n(177593), n(653041);
var i = n(570140),
    r = n(179645),
    a = n(38618);
let s = [];
function o() {
    return null != r.Z.getType();
}
function l() {
    !o() && (s.forEach((e) => u(e)), (s = []));
}
function u(e) {
    setImmediate(() => e());
}
function c(e) {
    a.Z.isConnectedOrOverlay() && !o() ? u(e) : s.push(e);
}
i.Z.subscribe('CONNECTION_OPEN', l), i.Z.subscribe('CONNECTION_RESUMED', l), i.Z.subscribe('NUF_COMPLETE', l);
