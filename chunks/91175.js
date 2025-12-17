n.d(t, { default: () => m }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    c = n(481060),
    s = n(788080),
    r = n(81643),
    d = n(469775),
    u = n(144287),
    f = n(388032),
    p = n(139941),
    b = n(975401);
let m = function (e) {
    let { onClose: t, onComplete: n, transitionState: i, webviewUrl: m } = e,
        C = (0, s.GE)(),
        [h, x] = l.useState(0),
        g = l.useCallback(() => {
            n(), t();
        }, [n, t]),
        k = l.useCallback(() => {
            (0, c.nfh)(d.zJ) && g();
        }, [g]);
    (0, r.F5)(k);
    let v = l.useCallback(
            (e) => {
                if (C && "" !== m) {
                    var t;
                    (null == e || null == (t = e.data) ? void 0 : t.eventType) === "Verification.Result" && g();
                }
            },
            [m, g, C],
        ),
        j = l.useCallback(() => {
            x(h + 1);
        }, [h]);
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
        (0, a.jsxs)(c.Y0X, {
            "data-migration-pending": !0,
            transitionState: i,
            className: o()(b.root, p.fullbleedContent),
            parentComponent: "AgeVerificationExpressiveModal",
            size: c.CgR.MEDIUM,
            children: [
                (0, a.jsx)(c.hzk, {
                    "data-migration-pending": !0,
                    className: o()(b.content, b.fullbleed),
                    scrollbarType: "none",
                    children: (0, a.jsx)(
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
                (0, a.jsx)(c.mzw, {
                    "data-migration-pending": !0,
                    children: (0, a.jsxs)(c.ButtonGroup, {
                        fullWidth: !0,
                        children: [
                            (0, a.jsx)(c.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: c.j9r,
                                text: f.intl.string(u.default.b7Oqdu),
                                onClick: t,
                            }),
                            (0, a.jsx)(c.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: c.DuK,
                                text: f.intl.string(u.default["0vTx7j"]),
                                onClick: j,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
