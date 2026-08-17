n.d(t, { MS: () => o, OE: () => d, Qb: () => c });
var i = n(228366),
    l = n(976860),
    r = n(114129),
    s = n(174459),
    a = n(652215);
function o() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
}
function d(e) {
    if (!(0, l.TX)()) return;
    let t = (0, r.a2)();
    t === r.ug.Noop ||
        (s.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }),
        t !== r.ug.Navigated && (0, l.aX)());
}
function c(e) {
    if (!(0, l.TX)()) return;
    let t = (0, r.qu)();
    t === r.ug.Noop ||
        (s.default.track(a.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }),
        t !== r.ug.Navigated && (0, l.sY)());
}
