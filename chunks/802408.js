n.d(t, { Z: () => d }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(907862),
    s = n(780384),
    l = n(410030),
    c = n(607070),
    u = n(921944);
function d(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: d, config: f, children: _ } = e,
        p = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        h = (0, l.ZP)(),
        m = i.useRef(null),
        g = {
            text: f.cta(),
            onClick: () => {
                n(), t(), d(u.L.TAKE_ACTION);
            },
        },
        E = () => {
            t(), d(u.L.USER_DISMISS);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: m,
                children: _,
            }),
            (0, r.jsx)(o.Mb, {
                targetElementRef: m,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: f.title(),
                body: f.description(),
                assetUrl: f.getImageUrl((0, s.wj)(h), p),
                action: g,
                caretConfig: {
                    position: "bottom",
                    align: "center",
                },
                onRequestClose: E,
            }),
        ],
    });
}
