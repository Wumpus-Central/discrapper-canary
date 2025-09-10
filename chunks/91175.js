n.d(t, { default: () => m }), n(388685);
var a = n(951288),
    i = n(647438),
    s = n(435935),
    o = n(481060),
    r = n(788080),
    l = n(81643),
    c = n(469775),
    d = n(398158),
    u = n(388032),
    f = n(179835),
    x = n(248319);
let m = function (e) {
    let { onClose: t, onComplete: n, onCancel: m, transitionState: p, webviewUrl: h } = e,
        g = (0, r.GE)(),
        [k, v] = i.useState(0),
        j = i.useCallback(() => {
            n(), t();
        }, [n, t]),
        C = i.useCallback(() => {
            (0, o.nfh)(c.zJ) && j();
        }, [j]);
    (0, l.F5)(C);
    let _ = i.useCallback(
            (e) => {
                if (g && "" !== h) {
                    var t;
                    (null == e || null == (t = e.data) ? void 0 : t.eventType) === "Verification.Result" && j();
                }
            },
            [h, j, g],
        ),
        b = i.useCallback(() => {
            v(k + 1);
        }, [k]);
    return (
        i.useEffect(
            () => (
                window.addEventListener("message", _),
                () => {
                    window.removeEventListener("message", _);
                }
            ),
            [_],
        ),
        (0, a.jsxs)(o.Y0X, {
            "data-migration-pending": !0,
            transitionState: p,
            className: x.root,
            parentComponent: "AgeVerificationExpressiveModal",
            size: o.CgR.MEDIUM,
            children: [
                (0, a.jsxs)(o.xBx, {
                    justify: s.k.Justify.BETWEEN,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: u.intl.string(u.t.JHNunp),
                        }),
                        (0, a.jsx)(o.olH, { onClick: m }),
                    ],
                }),
                (0, a.jsx)(o.hzk, {
                    "data-migration-pending": !0,
                    className: x.content,
                    scrollbarType: "none",
                    children: (0, a.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: h,
                            className: x.iframe,
                            allow: "camera; microphone",
                        },
                        k,
                    ),
                }),
                (0, a.jsx)("div", {
                    className: f.floatingFooter,
                    children: (0, a.jsx)("div", {
                        className: f.footerButtons,
                        children: (0, a.jsxs)(o.hE2, {
                            children: [
                                (0, a.jsx)(o.zxk, {
                                    variant: "secondary",
                                    icon: o.j9r,
                                    text: u.intl.string(d.default.b7Oqdn),
                                    onClick: t,
                                }),
                                (0, a.jsx)(o.zxk, {
                                    variant: "secondary",
                                    icon: o.DuK,
                                    text: u.intl.string(d.default["0vTx7u"]),
                                    onClick: b,
                                }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
};
