n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(150063),
    s = n(252618),
    c = n(313201),
    u = n(984370),
    d = n(199104),
    p = n(108427),
    f = n(210887),
    h = n(626135),
    g = n(270759),
    m = n(981631),
    b = n(388032),
    _ = n(236202);
let E = function () {
    i.useEffect(() => {
        o.Y(m.Z5c.ME_ACTIVITY), (0, p.e)("activity"), h.default.track(m.rMx.ACTIVITY_FEED_VIEWED, {});
    }, []);
    let e = (0, l.e7)([f.Z], () => f.Z.theme),
        t = (0, c.Dt)();
    return (0, r.jsxs)("main", {
        className: _.container,
        "aria-label": b.intl.string(b.t.IC5Anp),
        children: [
            (0, r.jsx)(s.yY, { location: b.intl.string(b.t.IC5Anp) }),
            (0, r.jsx)(a.f6W, {
                theme: e,
                children: (e) =>
                    (0, r.jsxs)(u.Z, {
                        className: e,
                        toolbar: (0, r.jsx)(g.F, {}),
                        role: "navigation",
                        "aria-labelledby": t,
                        children: [
                            (0, r.jsx)(u.Z.Icon, {
                                icon: a.g8d,
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)(u.Z.Title, {
                                id: t,
                                children: b.intl.string(b.t.F4Zgg4),
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
