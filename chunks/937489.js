a.d(t, { default: () => x });
var e = a(627968);
a(64700);
var r = a(503698),
    n = a.n(r),
    i = a(862482),
    l = a(935462),
    c = a(834730),
    d = a(939249),
    m = a(386406),
    o = a(235986),
    p = a(375708),
    u = a(495284);
let x = (s) => {
    let { onClose: t, transitionState: a, showHideSuppressWarning: r = !1 } = s;
    return (0, e.jsx)(l.EO, {
        transitionState: a,
        className: u.kL,
        "aria-label": p.intl.string(p.t["4Y2AS7"]),
        parentComponent: "HubStudyRoomSuppressModal",
        children: (0, e.jsxs)("form", {
            onSubmit: (s) => {
                s?.preventDefault(), m.A.clearSuppressWarning(), t?.();
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
                    justify: o.A.Justify.BETWEEN,
                    wrap: o.A.Wrap.WRAP,
                    children: [
                        (0, e.jsx)(i.$n, {
                            type: "submit",
                            size: i.$n.Sizes.LARGE,
                            className: n()(u.FS, u.cU),
                            autoFocus: !0,
                            children: p.intl.string(p.t["NX+WJN"]),
                        }),
                        r &&
                            (0, e.jsx)(d.D, {
                                onClick: () => m.A.clearSuppressWarning(!0),
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
