a.d(e, { default: () => d });
var o = a(200651),
    s = a(192379),
    c = a(481060),
    n = a(81643),
    r = a(469775),
    l = a(388032),
    i = a(826180);
let d = function (t) {
    let { onClose: e, onComplete: a, transitionState: d, webviewUrl: k, useV1: N = !1 } = t,
        u = s.useCallback(() => {
            a(), e();
        }, [a, e]),
        x = s.useCallback(() => {
            (0, c.nfh)(r.z) && u();
        }, [u]);
    (0, n.F5)(x);
    let f = s.useCallback(
        (t) => {
            if ('' !== k && 'string' == typeof t.data)
                try {
                    var e = JSON.parse(t.data);
                    'AGE_CHECK_COMPLETE' === e.status && u();
                } catch (t) {}
        },
        [k, u]
    );
    return (
        s.useEffect(
            () => (
                window.addEventListener('message', f),
                () => {
                    window.removeEventListener('message', f);
                }
            ),
            [f]
        ),
        (0, o.jsx)(c.Y0X, {
            transitionState: d,
            className: i.root,
            children: (0, o.jsxs)(c.hzk, {
                className: i.content,
                children: [
                    N &&
                        (0, o.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            children: l.NW.string(l.t.tYNaXF)
                        }),
                    (0, o.jsx)('iframe', {
                        id: 'frame',
                        src: k,
                        className: i.iframe,
                        allow: 'camera; microphone'
                    }),
                    N
                        ? (0, o.jsx)(c.zxk, {
                              color: c.zxk.Colors.TRANSPARENT,
                              look: c.zxk.Looks.BLANK,
                              onClick: e,
                              className: i.cancelButton,
                              children: l.NW.string(l.t['4gTnU1'])
                          })
                        : (0, o.jsxs)('div', {
                              className: i.footer,
                              children: [
                                  (0, o.jsx)(c.zxk, {
                                      color: c.zxk.Colors.TRANSPARENT,
                                      look: c.zxk.Looks.BLANK,
                                      onClick: e,
                                      className: i.cancelButton,
                                      children: l.NW.string(l.t['4gTnU1'])
                                  }),
                                  (0, o.jsx)(c.zxk, {
                                      color: c.zxk.Colors.BRAND,
                                      onClick: u,
                                      children: l.NW.string(l.t.XYt3Ag)
                                  })
                              ]
                          })
                ]
            })
        })
    );
};
