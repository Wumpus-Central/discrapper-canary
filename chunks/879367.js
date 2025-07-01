n.d(t, { default: () => N });
var i = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    E = n(481060),
    r = n(788080),
    _ = n(81643),
    a = n(469775),
    I = n(388032),
    c = n(23525);
let N = function (e) {
    let { onClose: t, onComplete: n, onCancel: o, transitionState: N, webviewUrl: A, useV1: L = !1 } = e,
        S = (0, r.GE)(),
        u = l.useCallback(() => {
            (n(), t());
        }, [n, t]),
        T = l.useCallback(() => {
            (0, E.nfh)(a.zJ) && u();
        }, [u]);
    (0, _.F5)(T);
    let d = l.useCallback(
        (e) => {
            if (S && '' !== A) {
                var t;
                (null == e || null == (t = e.data) ? void 0 : t.eventType) === 'Verification.Result' && u();
            }
        },
        [A, u, S]
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
        (0, i.jsxs)(E.Y0X, {
            transitionState: N,
            className: c.root,
            parentComponent: 'AgeVerificationModal',
            children: [
                (0, i.jsxs)(E.hzk, {
                    className: s()(c.content, { [c.fullbleed]: !L }),
                    scrollbarType: 'none',
                    children: [
                        L &&
                            (0, i.jsx)(E.X6q, {
                                variant: 'heading-xl/bold',
                                children: I.intl.string(I.t.tYNaXF)
                            }),
                        (0, i.jsx)('iframe', {
                            id: 'frame',
                            src: A,
                            className: c.iframe,
                            allow: 'camera; microphone'
                        })
                    ]
                }),
                (0, i.jsx)(E.mzw, {
                    children: L
                        ? (0, i.jsx)(E.zxk, {
                              color: E.zxk.Colors.TRANSPARENT,
                              look: E.zxk.Looks.BLANK,
                              onClick: t,
                              className: c.cancelButton,
                              children: I.intl.string(I.t['4gTnU1'])
                          })
                        : (0, i.jsxs)('div', {
                              className: c.footer,
                              children: [
                                  (0, i.jsx)(E.zxk, {
                                      color: E.zxk.Colors.TRANSPARENT,
                                      look: E.zxk.Looks.BLANK,
                                      onClick: t,
                                      size: E.zxk.Sizes.SMALL,
                                      className: c.footerButton,
                                      children: I.intl.string(I.t.fjKFaW)
                                  }),
                                  (0, i.jsx)(E.zxk, {
                                      color: E.zxk.Colors.TRANSPARENT,
                                      look: E.zxk.Looks.BLANK,
                                      size: E.zxk.Sizes.SMALL,
                                      onClick: o,
                                      className: c.footerButton,
                                      children: I.intl.string(I.t['4gTnU1'])
                                  })
                              ]
                          })
                })
            ]
        })
    );
};
