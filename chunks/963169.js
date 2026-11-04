var i = n(73153),
    r = n(976860),
    a = n(114129),
    s = n(129230),
    l = n(652215);
n.d(
    t,
    {},
    {
        MS: function () {
            i.h.dispatch({ type: "ROUTE_CHANGED" });
        },
        OE: function (e) {
            if (!(0, r.TX)()) return;
            let t = (0, a.a2)();
            t === a.ug.Noop ||
                (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }),
                t !== a.ug.Navigated && (0, r.aX)());
        },
        Qb: function (e) {
            if (!(0, r.TX)()) return;
            let t = (0, a.qu)();
            t === a.ug.Noop ||
                (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }),
                t !== a.ug.Navigated && (0, r.sY)());
        },
    },
);
