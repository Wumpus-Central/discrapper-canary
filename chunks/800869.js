n.d(t, { Z: () => p });
var r = n(54381),
    i = n(793030),
    l = n(159691),
    o = n(481060),
    a = n(921944),
    s = n(18853),
    c = n(388032),
    u = n(176179),
    d = n(719119);
function p(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: u.image,
                src: d,
            }),
            (0, r.jsx)(i.xvT, {
                color: "always-white",
                variant: "text-md/semibold",
                children: c.intl.string(s.default.diMhWc),
            }),
            (0, r.jsx)(i.xvT, {
                color: "always-white",
                variant: "text-sm/medium",
                children: c.intl.string(s.default.pycxTr),
            }),
            (0, r.jsx)("div", {
                className: u.close,
                children: (0, r.jsx)(l.hU, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": c.intl.string(c.t.cpT0Cq),
                    onClick: () => {
                        t(a.L.USER_DISMISS);
                    },
                    icon: o.Dio,
                }),
            }),
        ],
    });
}
