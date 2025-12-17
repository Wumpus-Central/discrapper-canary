n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(150063),
    s = n(252618),
    c = n(313201),
    u = n(984370),
    d = n(199104),
    p = n(108427),
    f = n(210887),
    g = n(626135),
    h = n(270759),
    m = n(981631),
    b = n(388032),
    _ = n(221534);
let E = function () {
    i.useEffect(() => {
        o.Y(m.Z5c.ME_ACTIVITY), (0, p.e)("activity"), g.default.track(m.rMx.ACTIVITY_FEED_VIEWED, {});
    }, []);
    let e = (0, l.e7)([f.Z], () => f.Z.theme),
        t = (0, c.Dt)();
    return (0, r.jsxs)("main", {
        className: _.container,
        "aria-label": b.intl.string(b.t.IC5Ann),
        children: [
            (0, r.jsx)(s.yY, { location: b.intl.string(b.t.IC5Ann) }),
            (0, r.jsx)(a.f6W, {
                theme: e,
                children: (e) =>
                    (0, r.jsxs)(u.Z, {
                        className: e,
                        toolbar: (0, r.jsx)(h.F, {}),
                        role: "navigation",
                        "aria-labelledby": t,
                        children: [
                            (0, r.jsx)(u.Z.Icon, {
                                icon: a.g8d,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)(u.Z.Title, {
                                id: t,
                                children: b.intl.string(b.t.F4Zggw),
                            }),
                        ],
                    }),
            }),
            (0, r.jsx)("div", {
                className: _.tabBody,
                children: (0, r.jsx)("div", {
                    className: _.nowPlayingColumnFullWidth,
                    children: (0, r.jsx)(d.Z, { isStandalone: !0 }),
                }),
            }),
        ],
    });
};
