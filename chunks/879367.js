a.d(n, { default: () => m });
var t = a(54381),
    l = a(473749),
    i = a(120356),
    c = a.n(i),
    o = a(481060),
    r = a(788080),
    s = a(81643),
    d = a(469775),
    f = a(388032),
    u = a(975401);
let m = function (e) {
    let { onClose: n, onComplete: a, onCancel: i, transitionState: m, webviewUrl: p } = e,
        h = (0, r.GE)(),
        C = l.useCallback(() => {
            a(), n();
        }, [a, n]),
        b = l.useCallback(() => {
            (0, o.nfh)(d.zJ) && C();
        }, [C]);
    (0, s.F5)(b);
    let g = l.useCallback(
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
                window.addEventListener("message", g),
                () => {
                    window.removeEventListener("message", g);
                }
            ),
            [g],
        ),
        (0, t.jsxs)(o.Y0X, {
            "data-migration-pending": !0,
            transitionState: m,
            className: c()(u.root, u.fullbleedContent),
            parentComponent: "AgeVerificationModal",
            size: o.CgR.MEDIUM,
            children: [
                (0, t.jsx)(o.hzk, {
                    "data-migration-pending": !0,
                    className: c()(u.content, u.fullbleed),
                    scrollbarType: "none",
                    children: (0, t.jsx)("iframe", {
                        id: "frame",
                        src: p,
                        className: u.iframe,
                        allow: "camera; microphone",
                    }),
                }),
                (0, t.jsx)(o.mzw, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)("div", {
                        className: u.footer,
                        children: (0, t.jsxs)(o.ButtonGroup, {
                            justify: "space-between",
                            fullWidthContainer: !0,
                            children: [
                                (0, t.jsx)(o.Avr, {
                                    variant: "secondary",
                                    text: f.intl.string(f.t.fjKFae),
                                    onClick: n,
                                }),
                                null != i &&
                                    (0, t.jsx)(o.Avr, {
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
