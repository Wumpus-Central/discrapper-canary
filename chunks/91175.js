n.d(t, { default: () => b }), n(388685);
var a = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
    r = n(788080),
    c = n(81643),
    d = n(469775),
    u = n(398158),
    f = n(388032),
    p = n(179835),
    m = n(248319);
let b = function (e) {
    let { onClose: t, onComplete: n, transitionState: i, webviewUrl: b } = e,
        h = (0, r.GE)(),
        [C, _] = l.useState(0),
        x = l.useCallback(() => {
            n(), t();
        }, [n, t]),
        g = l.useCallback(() => {
            (0, s.nfh)(d.zJ) && x();
        }, [x]);
    (0, c.F5)(g);
    let k = l.useCallback(
            (e) => {
                if (h && "" !== b) {
                    var t;
                    (null == e || null == (t = e.data) ? void 0 : t.eventType) === "Verification.Result" && x();
                }
            },
            [b, x, h],
        ),
        v = l.useCallback(() => {
            _(C + 1);
        }, [C]);
    return (
        l.useEffect(
            () => (
                window.addEventListener("message", k),
                () => {
                    window.removeEventListener("message", k);
                }
            ),
            [k],
        ),
        (0, a.jsxs)(s.Y0X, {
            "data-migration-pending": !0,
            transitionState: i,
            className: o()(m.root, p.fullbleedContent),
            parentComponent: "AgeVerificationExpressiveModal",
            size: s.CgR.MEDIUM,
            children: [
                (0, a.jsx)(s.hzk, {
                    "data-migration-pending": !0,
                    className: o()(m.content, m.fullbleed),
                    scrollbarType: "none",
                    children: (0, a.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: b,
                            className: m.iframe,
                            allow: "camera; microphone",
                        },
                        C,
                    ),
                }),
                (0, a.jsx)(s.mzw, {
                    "data-migration-pending": !0,
                    children: (0, a.jsxs)(s.ButtonGroup, {
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(s.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: s.j9r,
                                text: f.intl.string(u.default.b7Oqdn),
                                onClick: t,
                            }),
                            (0, a.jsx)(s.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: s.DuK,
                                text: f.intl.string(u.default["0vTx7u"]),
                                onClick: v,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
