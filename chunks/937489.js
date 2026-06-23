a.d(t, { default: () => x });
var e = a(627968);
a(64700);
var n = a(503698),
    r = a.n(n),
    i = a(862482),
    l = a(935462),
    c = a(834730),
    d = a(939249),
    o = a(386406),
    m = a(235986),
    p = a(375708),
    u = a(495284);
let x = function (s) {
    let { onClose: t, transitionState: a, showHideSuppressWarning: n = !1 } = s;
    return (0, e.jsx)(l.EO, {
        transitionState: a,
        className: u.kL,
        "aria-label": p.intl.string(p.t["4Y2AS7"]),
        parentComponent: "HubStudyRoomSuppressModal",
        children: (0, e.jsxs)("form", {
            onSubmit: function (s) {
                s?.preventDefault(), o.A.clearSuppressWarning(), t?.();
            },
            className: u.Zd,
            children: [
                (0, e.jsxs)(l.$m, {
                    className: u.jE,
                    children: [
                        (0, e.jsx)("img", { src: "/assets/ceb45d3d0fd6a2d9.png", alt: "", className: u.ZK }),
                        (0, e.jsx)(c.E, {
                            className: u.DD,
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: p.intl.string(p.t.sDvH0T),
                        }),
                        (0, e.jsx)(c.E, {
                            className: u.h_,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: p.intl.string(p.t["CLpr/y"]),
                        }),
                    ],
                }),
                (0, e.jsxs)(l.jl, {
                    justify: m.A.Justify.BETWEEN,
                    wrap: m.A.Wrap.WRAP,
                    children: [
                        (0, e.jsx)(i.$n, {
                            type: "submit",
                            size: i.$n.Sizes.LARGE,
                            className: r()(u.FS, u.cU),
                            autoFocus: !0,
                            children: p.intl.string(p.t["NX+WJN"]),
                        }),
                        n &&
                            (0, e.jsx)(d.D, {
                                onClick: () => o.A.clearSuppressWarning(!0),
                                className: u.ZM,
                                children: (0, e.jsx)(c.E, {
                                    className: u.WI,
                                    variant: "text-xs/normal",
                                    children: p.intl.string(p.t["5E9SB9"]),
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
};
