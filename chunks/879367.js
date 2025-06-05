n.d(t, { default: () => N });
var i = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    E = n(481060),
    r = n(788080),
    a = n(81643),
    c = n(469775),
    _ = n(388032),
    I = n(23525);
let N = function (e) {
    let { onClose: t, onComplete: n, onCancel: o, transitionState: N, webviewUrl: L, useV1: S = !1 } = e,
        A = (0, r.GE)(),
        u = l.useCallback(() => {
            n(), t();
        }, [n, t]),
        T = l.useCallback(() => {
            (0, E.nfh)(c.z) && u();
        }, [u]);
    (0, a.F5)(T);
    let C = l.useCallback(
        (e) => {
            if (A && '' !== L) {
                var t;
                if ('string' == typeof e.data)
                    try {
                        var n = JSON.parse(e.data);
                        'AGE_CHECK_COMPLETE' === n.status && u();
                    } catch (e) {}
                else (null == e || null == (t = e.data) ? void 0 : t.eventType) === 'Verification.Result' && u();
            }
        },
        [L, u, A]
    );
    return (
        l.useEffect(
            () => (
                window.addEventListener('message', C),
                () => {
                    window.removeEventListener('message', C);
                }
            ),
            [C]
        ),
        (0, i.jsxs)(E.Y0X, {
            transitionState: N,
            className: I.root,
            parentComponent: 'AgeVerificationModal',
            children: [
                (0, i.jsxs)(E.hzk, {
                    className: s()(I.content, { [I.fullbleed]: !S }),
                    scrollbarType: 'none',
                    children: [
                        S &&
                            (0, i.jsx)(E.X6q, {
                                variant: 'heading-xl/bold',
                                children: _.intl.string(_.t.tYNaXF)
                            }),
                        (0, i.jsx)('iframe', {
                            id: 'frame',
                            src: L,
                            className: I.iframe,
                            allow: 'camera; microphone'
                        })
                    ]
                }),
                (0, i.jsx)(E.mzw, {
                    children: S
                        ? (0, i.jsx)(E.zxk, {
                              color: E.zxk.Colors.TRANSPARENT,
                              look: E.zxk.Looks.BLANK,
                              onClick: t,
                              className: I.cancelButton,
                              children: _.intl.string(_.t['4gTnU1'])
                          })
                        : (0, i.jsxs)('div', {
                              className: I.footer,
                              children: [
                                  (0, i.jsx)(E.zxk, {
                                      color: E.zxk.Colors.TRANSPARENT,
                                      look: E.zxk.Looks.BLANK,
                                      onClick: t,
                                      size: E.zxk.Sizes.SMALL,
                                      className: I.footerButton,
                                      children: _.intl.string(_.t.fjKFaW)
                                  }),
                                  (0, i.jsx)(E.zxk, {
                                      color: E.zxk.Colors.TRANSPARENT,
                                      look: E.zxk.Looks.BLANK,
                                      size: E.zxk.Sizes.SMALL,
                                      onClick: o,
                                      className: I.footerButton,
                                      children: _.intl.string(_.t['4gTnU1'])
                                  })
                              ]
                          })
                })
            ]
        })
    );
};
