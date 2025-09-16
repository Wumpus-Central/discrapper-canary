t.d(n, { default: () => h }), t(388685);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    o = t.n(i),
    s = t(481060),
    r = t(788080),
    c = t(81643),
    d = t(469775),
    u = t(398158),
    f = t(388032),
    m = t(179835),
    p = t(248319);
let h = function (e) {
    let { onClose: n, onComplete: t, transitionState: i, webviewUrl: h } = e,
        b = (0, r.GE)(),
        [x, C] = l.useState(0),
        _ = l.useCallback(() => {
            t(), n();
        }, [t, n]),
        k = l.useCallback(() => {
            (0, s.nfh)(d.zJ) && _();
        }, [_]);
    (0, c.F5)(k);
    let g = l.useCallback(
            (e) => {
                if (b && "" !== h) {
                    var n;
                    (null == e || null == (n = e.data) ? void 0 : n.eventType) === "Verification.Result" && _();
                }
            },
            [h, _, b],
        ),
        v = l.useCallback(() => {
            C(x + 1);
        }, [x]);
    return (
        l.useEffect(
            () => (
                window.addEventListener("message", g),
                () => {
                    window.removeEventListener("message", g);
                }
            ),
            [g],
        ),
        (0, a.jsxs)(s.Y0X, {
            "data-migration-pending": !0,
            transitionState: i,
            className: o()(p.root, m.fullbleedContent),
            parentComponent: "AgeVerificationExpressiveModal",
            size: s.CgR.MEDIUM,
            children: [
                (0, a.jsx)(s.hzk, {
                    "data-migration-pending": !0,
                    className: o()(p.content, p.fullbleed),
                    scrollbarType: "none",
                    children: (0, a.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: h,
                            className: p.iframe,
                            allow: "camera; microphone",
                        },
                        x,
                    ),
                }),
                (0, a.jsx)(s.mzw, {
                    "data-migration-pending": !0,
                    children: (0, a.jsxs)(s.hE2, {
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(s.zxk, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: s.j9r,
                                text: f.intl.string(u.default.b7Oqdn),
                                onClick: n,
                            }),
                            (0, a.jsx)(s.zxk, {
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
