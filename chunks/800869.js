n.d(t, { Z: () => p });
var r = n(951288),
    i = n(793030),
    o = n(861066),
    s = n(481060),
    l = n(921944),
    a = n(989308),
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
            (0, r.jsx)(i.xv, {
                color: "always-white",
                variant: "text-md/semibold",
                children: c.intl.string(a.default.diMhWV),
            }),
            (0, r.jsx)(i.xv, {
                color: "always-white",
                variant: "text-sm/medium",
                children: c.intl.string(a.default.pycxTk),
            }),
            (0, r.jsx)("div", {
                className: u.close,
                children: (0, r.jsx)(o.h, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": c.intl.string(c.t.cpT0Cg),
                    onClick: () => {
                        t(l.L.USER_DISMISS);
                    },
                    icon: s.Dio,
                }),
            }),
        ],
    });
}
