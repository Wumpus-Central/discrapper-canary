n.d(t, { Z: () => d });
var r = n(255367),
    o = n(793030),
    i = n(481060),
    l = n(921944),
    s = n(93841),
    a = n(388032),
    u = n(820222),
    c = n(719119);
function d(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: u.image,
                src: c,
            }),
            (0, r.jsx)(o.xv, {
                color: "always-white",
                variant: "text-md/semibold",
                children: a.intl.string(s.default.diMhWV),
            }),
            (0, r.jsx)(o.xv, {
                color: "always-white",
                variant: "text-sm/medium",
                children: a.intl.string(s.default.pycxTk),
            }),
            (0, r.jsx)(i.olH, {
                className: u.close,
                innerClassName: u.innerClose,
                onClick: () => {
                    t(l.L.USER_DISMISS);
                },
            }),
        ],
    });
}
