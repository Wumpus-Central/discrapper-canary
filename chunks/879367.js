t.d(n, { default: () => m });
var a = t(951288),
    l = t(647438),
    i = t(120356),
    o = t.n(i),
    r = t(481060),
    s = t(788080),
    c = t(81643),
    d = t(469775),
    f = t(388032),
    u = t(248319);
let m = function (e) {
    let { onClose: n, onComplete: t, onCancel: i, transitionState: m, webviewUrl: p } = e,
        h = (0, s.GE)(),
        C = l.useCallback(() => {
            t(), n();
        }, [t, n]),
        _ = l.useCallback(() => {
            (0, r.nfh)(d.zJ) && C();
        }, [C]);
    (0, c.F5)(_);
    let b = l.useCallback(
        (e) => {
            if (h && "" !== p) {
                var n;
                (null == e || null == (n = e.data) ? void 0 : n.eventType) === "Verification.Result" && C();
            }
        },
        [p, C, h],
    );
    return (
        l.useEffect(
            () => (
                window.addEventListener("message", b),
                () => {
                    window.removeEventListener("message", b);
                }
            ),
            [b],
        ),
        (0, a.jsxs)(r.Y0X, {
            "data-migration-pending": !0,
            transitionState: m,
            className: o()(u.root, u.fullbleedContent),
            parentComponent: "AgeVerificationModal",
            size: r.CgR.MEDIUM,
            children: [
                (0, a.jsx)(r.hzk, {
                    "data-migration-pending": !0,
                    className: o()(u.content, u.fullbleed),
                    scrollbarType: "none",
                    children: (0, a.jsx)("iframe", {
                        id: "frame",
                        src: p,
                        className: u.iframe,
                        allow: "camera; microphone",
                    }),
                }),
                (0, a.jsx)(r.mzw, {
                    "data-migration-pending": !0,
                    children: (0, a.jsx)("div", {
                        className: u.footer,
                        children: (0, a.jsxs)(r.ButtonGroup, {
                            justify: "space-between",
                            fullWidthContainer: !0,
                            children: [
                                (0, a.jsx)(r.Avr, {
                                    variant: "secondary",
                                    text: f.intl.string(f.t.fjKFae),
                                    onClick: n,
                                }),
                                null != i &&
                                    (0, a.jsx)(r.Avr, {
                                        variant: "secondary",
                                        text: f.intl.string(f.t["4gTnU0"]),
                                        onClick: i,
                                    }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
};
