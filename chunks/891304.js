n.d(t, {
    Hm: () => l,
    TL: () => c,
    pN: () => s,
});
var r = n(570140),
    i = n(703656),
    a = n(365355),
    o = n(336219);
function s(e, t, n) {
    r.Z.dispatch({
        type: "ROUTE_CHANGED",
        path: e,
        key: t,
        isReplace: n,
    });
}
function l(e) {
    if (!(0, i.x3)()) return;
    if (!(0, o.vA)({ location: e })) return void (0, i.op)();
    let t = a.Z.backDestination;
    null != t && (r.Z.dispatch({ type: "GO_BACK" }), (0, i.uL)(t.path));
}
function c(e) {
    if (!(0, i.x3)()) return;
    if (!(0, o.vA)({ location: e })) return void (0, i.eH)();
    let t = a.Z.forwardDestination;
    null != t && (r.Z.dispatch({ type: "GO_FORWARD" }), (0, i.uL)(t.path));
}
