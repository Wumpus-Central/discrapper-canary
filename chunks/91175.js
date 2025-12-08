n.d(t, { default: () => b }), n(388685);
var l = n(54381),
    a = n(473749),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
    r = n(788080),
    c = n(81643),
    d = n(469775),
    u = n(241751),
    f = n(388032),
    p = n(179835),
    m = n(248319);
let b = function (e) {
    let { onClose: t, onComplete: n, transitionState: i, webviewUrl: b } = e,
        C = (0, r.GE)(),
        [_, h] = a.useState(0),
        x = a.useCallback(() => {
            n(), t();
        }, [n, t]),
        g = a.useCallback(() => {
            (0, s.nfh)(d.zJ) && x();
        }, [x]);
    (0, c.F5)(g);
    let k = a.useCallback(
            (e) => {
                if (C && "" !== b) {
                    var t;
                    (null == e || null == (t = e.data) ? void 0 : t.eventType) === "Verification.Result" && x();
                }
            },
            [b, x, C],
        ),
        v = a.useCallback(() => {
            h(_ + 1);
        }, [_]);
    return (
        a.useEffect(
            () => (
                window.addEventListener("message", k),
                () => {
                    window.removeEventListener("message", k);
                }
            ),
            [k],
        ),
        (0, l.jsxs)(s.Y0X, {
            "data-migration-pending": !0,
            transitionState: i,
            className: o()(m.root, p.fullbleedContent),
            parentComponent: "AgeVerificationExpressiveModal",
            size: s.CgR.MEDIUM,
            children: [
                (0, l.jsx)(s.hzk, {
                    "data-migration-pending": !0,
                    className: o()(m.content, m.fullbleed),
                    scrollbarType: "none",
                    children: (0, l.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: b,
                            className: m.iframe,
                            allow: "camera; microphone",
                        },
                        _,
                    ),
                }),
                (0, l.jsx)(s.mzw, {
                    "data-migration-pending": !0,
                    children: (0, l.jsxs)(s.ButtonGroup, {
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(s.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: s.j9r,
                                text: f.intl.string(u.default.b7Oqdu),
                                onClick: t,
                            }),
                            (0, l.jsx)(s.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: s.DuK,
                                text: f.intl.string(u.default["0vTx7j"]),
                                onClick: v,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
