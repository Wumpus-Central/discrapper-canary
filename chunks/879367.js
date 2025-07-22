n.d(t, { default: () => A });
var i = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    E = n(755721),
    r = n(481060),
    I = n(788080),
    _ = n(81643),
    a = n(469775),
    c = n(388032),
    N = n(23525);
let A = function (e) {
    let { onClose: t, onComplete: n, onCancel: o, transitionState: A, webviewUrl: L, useV1: S = !1 } = e,
        u = (0, I.GE)(),
        T = l.useCallback(() => {
            (n(), t());
        }, [n, t]),
        C = l.useCallback(() => {
            (0, r.nfh)(a.zJ) && T();
        }, [T]);
    (0, _.F5)(C);
    let d = l.useCallback(
        (e) => {
            if (u && '' !== L) {
                var t;
                (null == e || null == (t = e.data) ? void 0 : t.eventType) === 'Verification.Result' && T();
            }
        },
        [L, T, u]
    );
    return (
        l.useEffect(
            () => (
                window.addEventListener('message', d),
                () => {
                    window.removeEventListener('message', d);
                }
            ),
            [d]
        ),
        (0, i.jsxs)(r.Y0X, {
            transitionState: A,
            className: N.root,
            parentComponent: 'AgeVerificationModal',
            size: r.CgR.MEDIUM,
            children: [
                (0, i.jsxs)(r.hzk, {
                    className: s()(N.content, { [N.fullbleed]: !S }),
                    scrollbarType: 'none',
                    children: [
                        S &&
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xl/bold',
                                children: c.intl.string(c.t.tYNaXF)
                            }),
                        (0, i.jsx)('iframe', {
                            id: 'frame',
                            src: L,
                            className: N.iframe,
                            allow: 'camera; microphone'
                        })
                    ]
                }),
                (0, i.jsx)(r.mzw, {
                    children: S
                        ? (0, i.jsx)(E.zx, {
                              color: E.zx.Colors.TRANSPARENT,
                              look: E.zx.Looks.BLANK,
                              onClick: t,
                              className: N.cancelButton,
                              children: c.intl.string(c.t['4gTnU1'])
                          })
                        : (0, i.jsxs)('div', {
                              className: N.footer,
                              children: [
                                  (0, i.jsx)(E.zx, {
                                      color: E.zx.Colors.TRANSPARENT,
                                      look: E.zx.Looks.BLANK,
                                      onClick: t,
                                      size: E.zx.Sizes.SMALL,
                                      className: N.footerButton,
                                      children: c.intl.string(c.t.fjKFaW)
                                  }),
                                  (0, i.jsx)(E.zx, {
                                      color: E.zx.Colors.TRANSPARENT,
                                      look: E.zx.Looks.BLANK,
                                      size: E.zx.Sizes.SMALL,
                                      onClick: o,
                                      className: N.footerButton,
                                      children: c.intl.string(c.t['4gTnU1'])
                                  })
                              ]
                          })
                })
            ]
        })
    );
};
