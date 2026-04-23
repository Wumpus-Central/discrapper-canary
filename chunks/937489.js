s.d(e, { default: () => h });
var a = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    i = s(862482),
    l = s(935462),
    c = s(834730),
    o = s(939249),
    d = s(386406),
    m = s(235986),
    p = s(985018),
    u = s(495284);
let h = (t) => {
    let { onClose: e, transitionState: s, showHideSuppressWarning: r = !1 } = t;
    return (0, a.jsx)(l.EO, {
        transitionState: s,
        className: u.kL,
        "aria-label": p.intl.string(p.t["4Y2AS7"]),
        parentComponent: "HubStudyRoomSuppressModal",
        children: (0, a.jsxs)("form", {
            onSubmit: (t) => {
                t?.preventDefault(), d.A.clearSuppressWarning(), e?.();
            },
            className: u.Zd,
            children: [
                (0, a.jsxs)(l.$m, {
                    className: u.jE,
                    children: [
                        (0, a.jsx)("img", { src: "/assets/ceb45d3d0fd6a2d9.png", alt: "", className: u.ZK }),
                        (0, a.jsx)(c.E, {
                            className: u.DD,
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: p.intl.string(p.t.sDvH0T),
                        }),
                        (0, a.jsx)(c.E, {
                            className: u.h_,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: p.intl.string(p.t["CLpr/y"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(l.jl, {
                    justify: m.A.Justify.BETWEEN,
                    wrap: m.A.Wrap.WRAP,
                    children: [
                        (0, a.jsx)(i.$n, {
                            type: "submit",
                            size: i.$n.Sizes.LARGE,
                            className: n()(u.FS, u.cU),
                            autoFocus: !0,
                            children: p.intl.string(p.t["NX+WJN"]),
                        }),
                        r &&
                            (0, a.jsx)(o.D, {
                                onClick: () => d.A.clearSuppressWarning(!0),
                                className: u.ZM,
                                children: (0, a.jsx)(c.E, {
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
