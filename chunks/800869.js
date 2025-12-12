n.d(t, { Z: () => p });
var r = n(54381),
    i = n(793030),
    l = n(159691),
    o = n(481060),
    a = n(921944),
    s = n(5238),
    u = n(388032),
    c = n(176179),
    d = n(719119);
function p(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: c.image,
                src: d,
            }),
            (0, r.jsx)(i.xvT, {
                color: "always-white",
                variant: "text-md/semibold",
                children: u.intl.string(s.default.diMhWc),
            }),
            (0, r.jsx)(i.xvT, {
                color: "always-white",
                variant: "text-sm/medium",
                children: u.intl.string(s.default.pycxTr),
            }),
            (0, r.jsx)("div", {
                className: c.close,
                children: (0, r.jsx)(l.hU, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": u.intl.string(u.t.cpT0Cq),
                    onClick: () => {
                        t(a.L.USER_DISMISS);
                    },
                    icon: o.Dio,
                }),
            }),
        ],
    });
}
