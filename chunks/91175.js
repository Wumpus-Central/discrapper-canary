t.d(n, { default: () => h }), t(388685);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    s = t.n(i),
    o = t(481060),
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
        k = l.useCallback(() => {
            t(), n();
        }, [t, n]),
        _ = l.useCallback(() => {
            (0, o.nfh)(d.zJ) && k();
        }, [k]);
    (0, c.F5)(_);
    let v = l.useCallback(
            (e) => {
                if (b && "" !== h) {
                    var n;
                    (null == e || null == (n = e.data) ? void 0 : n.eventType) === "Verification.Result" && k();
                }
            },
            [h, k, b],
        ),
        g = l.useCallback(() => {
            C(x + 1);
        }, [x]);
    return (
        l.useEffect(
            () => (
                window.addEventListener("message", v),
                () => {
                    window.removeEventListener("message", v);
                }
            ),
            [v],
        ),
        (0, a.jsxs)(o.Y0X, {
            "data-migration-pending": !0,
            transitionState: i,
            className: s()(p.root, m.fullbleedContent),
            parentComponent: "AgeVerificationExpressiveModal",
            size: o.CgR.MEDIUM,
            children: [
                (0, a.jsx)(o.hzk, {
                    "data-migration-pending": !0,
                    className: s()(p.content, p.fullbleed),
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
                (0, a.jsx)(o.mzw, {
                    children: (0, a.jsxs)(o.hE2, {
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(o.zxk, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: o.j9r,
                                text: f.intl.string(u.default.b7Oqdn),
                                onClick: n,
                            }),
                            (0, a.jsx)(o.zxk, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: o.DuK,
                                text: f.intl.string(u.default["0vTx7u"]),
                                onClick: g,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
