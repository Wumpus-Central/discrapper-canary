t.d(o, { default: () => f });
var s = t(200651),
    a = t(192379),
    n = t(120356),
    l = t.n(n),
    c = t(481060),
    r = t(81643),
    i = t(469775),
    k = t(388032),
    d = t(23525);
let f = function (e) {
    let { onClose: o, onComplete: t, onCancel: n, transitionState: f, webviewUrl: u, useV1: x = !1 } = e,
        h = a.useCallback(() => {
            t(), o();
        }, [t, o]),
        m = a.useCallback(() => {
            (0, c.nfh)(i.z) && h();
        }, [h]);
    (0, r.F5)(m);
    let z = a.useCallback(
        (e) => {
            if ('' !== u && 'string' == typeof e.data)
                try {
                    var o = JSON.parse(e.data);
                    'AGE_CHECK_COMPLETE' === o.status && h();
                } catch (e) {}
        },
        [u, h]
    );
    return (
        a.useEffect(
            () => (
                window.addEventListener('message', z),
                () => {
                    window.removeEventListener('message', z);
                }
            ),
            [z]
        ),
        (0, s.jsxs)(c.Y0X, {
            transitionState: f,
            className: d.root,
            children: [
                (0, s.jsxs)(c.hzk, {
                    className: l()(d.content, { [d.fullbleed]: !x }),
                    scrollbarType: 'none',
                    children: [
                        x &&
                            (0, s.jsx)(c.X6q, {
                                variant: 'heading-xl/bold',
                                children: k.intl.string(k.t.tYNaXF)
                            }),
                        (0, s.jsx)('iframe', {
                            id: 'frame',
                            src: u,
                            className: d.iframe,
                            allow: 'camera; microphone'
                        })
                    ]
                }),
                (0, s.jsx)(c.mzw, {
                    children: x
                        ? (0, s.jsx)(c.zxk, {
                              color: c.zxk.Colors.TRANSPARENT,
                              look: c.zxk.Looks.BLANK,
                              onClick: o,
                              className: d.cancelButton,
                              children: k.intl.string(k.t['4gTnU1'])
                          })
                        : (0, s.jsxs)('div', {
                              className: d.footer,
                              children: [
                                  (0, s.jsx)(c.zxk, {
                                      color: c.zxk.Colors.TRANSPARENT,
                                      look: c.zxk.Looks.BLANK,
                                      onClick: o,
                                      size: c.zxk.Sizes.SMALL,
                                      className: d.footerButton,
                                      children: k.intl.string(k.t.fjKFaW)
                                  }),
                                  (0, s.jsx)(c.zxk, {
                                      color: c.zxk.Colors.TRANSPARENT,
                                      look: c.zxk.Looks.BLANK,
                                      size: c.zxk.Sizes.SMALL,
                                      onClick: n,
                                      className: d.footerButton,
                                      children: k.intl.string(k.t['4gTnU1'])
                                  })
                              ]
                          })
                })
            ]
        })
    );
};
