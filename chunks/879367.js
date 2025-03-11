o.d(e, { default: () => i });
var a = o(200651),
    s = o(192379),
    c = o(481060),
    n = o(388032),
    r = o(826180);
let i = function (t) {
    let { onClose: e, onComplete: o, transitionState: i, webviewUrl: l, useV1: d = !1 } = t,
        k = s.useCallback(() => {
            e(), o();
        }, [o, e]),
        N = s.useCallback(
            (t) => {
                if ('' !== l && 'string' == typeof t.data)
                    try {
                        var e = JSON.parse(t.data);
                        'AGE_CHECK_COMPLETE' === e.status && k();
                    } catch (t) {}
            },
            [l, k]
        );
    return (
        s.useEffect(
            () => (
                window.addEventListener('message', N),
                () => {
                    window.removeEventListener('message', N);
                }
            ),
            [N]
        ),
        (0, a.jsx)(c.Y0X, {
            transitionState: i,
            className: r.root,
            children: (0, a.jsxs)(c.hzk, {
                className: r.content,
                children: [
                    d &&
                        (0, a.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            children: n.NW.string(n.t.tYNaXF)
                        }),
                    (0, a.jsx)('iframe', {
                        id: 'frame',
                        src: l,
                        className: r.iframe,
                        allow: 'camera; microphone'
                    }),
                    d
                        ? (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.TRANSPARENT,
                              look: c.zxk.Looks.BLANK,
                              onClick: e,
                              className: r.cancelButton,
                              children: n.NW.string(n.t['4gTnU1'])
                          })
                        : (0, a.jsxs)('div', {
                              className: r.footer,
                              children: [
                                  (0, a.jsx)(c.zxk, {
                                      color: c.zxk.Colors.TRANSPARENT,
                                      look: c.zxk.Looks.BLANK,
                                      onClick: e,
                                      className: r.cancelButton,
                                      children: n.NW.string(n.t['4gTnU1'])
                                  }),
                                  (0, a.jsx)(c.zxk, {
                                      color: c.zxk.Colors.BRAND,
                                      onClick: k,
                                      children: n.NW.string(n.t.XYt3Ag)
                                  })
                              ]
                          })
                ]
            })
        })
    );
};
