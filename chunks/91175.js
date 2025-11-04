n.d(t, { default: () => m }), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(481060),
    r = n(788080),
    d = n(81643),
    c = n(469775),
    u = n(153177),
    f = n(388032),
    b = n(179835);
let m = function (e) {
    let { onClose: t, onComplete: n, transitionState: i, webviewUrl: m } = e,
        p = (0, r.GE)(),
        [h, C] = a.useState(0),
        g = a.useCallback(() => {
            n(), t();
        }, [n, t]),
        x = a.useCallback(() => {
            (0, s.nfh)(c.zJ) && g();
        }, [g]);
    (0, d.F5)(x);
    let _ = a.useCallback(
            (e) => {
                if (p && "" !== m) {
                    var t;
                    (null == e || null == (t = e.data) ? void 0 : t.eventType) === "Verification.Result" && g();
                }
            },
            [m, g, p],
        ),
        k = a.useCallback(() => {
            C(h + 1);
        }, [h]);
    return (
        a.useEffect(
            () => (
                window.addEventListener("message", _),
                () => {
                    window.removeEventListener("message", _);
                }
            ),
            [_],
        ),
        (0, l.jsxs)(s.Y0X, {
            "data-migration-pending": !0,
            transitionState: i,
            className: o()(b.root, b.fullbleedContent),
            parentComponent: "AgeVerificationExpressiveModal",
            size: s.CgR.MEDIUM,
            children: [
                (0, l.jsx)(s.hzk, {
                    "data-migration-pending": !0,
                    className: o()(b.content, b.fullbleed),
                    scrollbarType: "none",
                    children: (0, l.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: m,
                            className: b.iframe,
                            allow: "camera; microphone",
                        },
                        h,
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
                                onClick: k,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
