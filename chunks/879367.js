n.d(t, { default: () => S });
var i = n(255367),
    E = n(73800),
    l = n(120356),
    s = n.n(l),
    r = n(481060),
    a = n(788080),
    I = n(81643),
    _ = n(469775),
    o = n(388032),
    c = n(23525);
let S = function (e) {
    let { onClose: t, onComplete: n, onCancel: l, transitionState: S, webviewUrl: A, useV1: N = !1 } = e,
        L = (0, a.GE)(),
        u = E.useCallback(() => {
            (n(), t());
        }, [n, t]),
        T = E.useCallback(() => {
            (0, r.nfh)(_.zJ) && u();
        }, [u]);
    (0, I.F5)(T);
    let d = E.useCallback(
        (e) => {
            if (L && '' !== A) {
                var t;
                (null == e || null == (t = e.data) ? void 0 : t.eventType) === 'Verification.Result' && u();
            }
        },
        [A, u, L]
    );
    return (
        E.useEffect(
            () => (
                window.addEventListener('message', d),
                () => {
                    window.removeEventListener('message', d);
                }
            ),
            [d]
        ),
        (0, i.jsxs)(r.Y0X, {
            'data-migration-pending': !0,
            transitionState: S,
            className: c.root,
            parentComponent: 'AgeVerificationModal',
            size: r.CgR.MEDIUM,
            children: [
                (0, i.jsxs)(r.hzk, {
                    'data-migration-pending': !0,
                    className: s()(c.content, { [c.fullbleed]: !N }),
                    scrollbarType: 'none',
                    children: [
                        N &&
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xl/bold',
                                children: o.intl.string(o.t.tYNaXF)
                            }),
                        (0, i.jsx)('iframe', {
                            id: 'frame',
                            src: A,
                            className: c.iframe,
                            allow: 'camera; microphone'
                        })
                    ]
                }),
                (0, i.jsx)(r.mzw, {
                    'data-migration-pending': !0,
                    children: N
                        ? (0, i.jsx)(r.Avr, {
                              text: o.intl.string(o.t['4gTnU1']),
                              onClick: t
                          })
                        : (0, i.jsx)('div', {
                              className: c.footer,
                              children: (0, i.jsxs)(r.hE2, {
                                  justify: 'space-between',
                                  children: [
                                      (0, i.jsx)(r.Avr, {
                                          variant: 'secondary',
                                          text: o.intl.string(o.t.fjKFaW),
                                          onClick: t
                                      }),
                                      (0, i.jsx)(r.Avr, {
                                          variant: 'secondary',
                                          text: o.intl.string(o.t['4gTnU1']),
                                          onClick: l
                                      })
                                  ]
                              })
                          })
                })
            ]
        })
    );
};
