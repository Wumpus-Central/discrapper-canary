t.d(n, { default: () => m });
var a = t(951288),
    i = t(647438),
    r = t(120356),
    s = t.n(r),
    l = t(481060),
    o = t(788080),
    c = t(81643),
    d = t(469775),
    f = t(388032),
    u = t(248319);
let m = function (e) {
    let { onClose: n, onComplete: t, onCancel: r, transitionState: m, webviewUrl: g, useV1: p = !1 } = e,
        h = (0, o.GE)(),
        x = i.useCallback(() => {
            t(), n();
        }, [t, n]),
        v = i.useCallback(() => {
            (0, l.nfh)(d.zJ) && x();
        }, [x]);
    (0, c.F5)(v);
    let j = i.useCallback(
        (e) => {
            if (h && "" !== g) {
                var n;
                (null == e || null == (n = e.data) ? void 0 : n.eventType) === "Verification.Result" && x();
            }
        },
        [g, x, h],
    );
    return (
        i.useEffect(
            () => (
                window.addEventListener("message", j),
                () => {
                    window.removeEventListener("message", j);
                }
            ),
            [j],
        ),
        (0, a.jsxs)(l.Y0X, {
            "data-migration-pending": !0,
            transitionState: m,
            className: u.root,
            parentComponent: "AgeVerificationModal",
            size: l.CgR.MEDIUM,
            children: [
                (0, a.jsxs)(l.hzk, {
                    "data-migration-pending": !0,
                    className: s()(u.content, { [u.fullbleed]: !p }),
                    scrollbarType: "none",
                    children: [
                        p &&
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                children: f.intl.string(f.t.tYNaXF),
                            }),
                        (0, a.jsx)("iframe", {
                            id: "frame",
                            src: g,
                            className: u.iframe,
                            allow: "camera; microphone",
                        }),
                    ],
                }),
                (0, a.jsx)(l.mzw, {
                    "data-migration-pending": !0,
                    children: p
                        ? (0, a.jsx)(l.Avr, {
                              text: f.intl.string(f.t["4gTnU1"]),
                              onClick: n,
                          })
                        : (0, a.jsx)("div", {
                              className: u.footer,
                              children: (0, a.jsxs)(l.ButtonGroup, {
                                  justify: "space-between",
                                  fullWidthContainer: !0,
                                  children: [
                                      (0, a.jsx)(l.Avr, {
                                          variant: "secondary",
                                          text: f.intl.string(f.t.fjKFaW),
                                          onClick: n,
                                      }),
                                      (0, a.jsx)(l.Avr, {
                                          variant: "secondary",
                                          text: f.intl.string(f.t["4gTnU1"]),
                                          onClick: r,
                                      }),
                                  ],
                              }),
                          }),
                }),
            ],
        })
    );
};
