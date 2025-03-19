a.d(t, { default: () => u });
var o = a(200651),
    s = a(192379),
    n = a(120356),
    c = a.n(n),
    l = a(481060),
    r = a(81643),
    i = a(469775),
    d = a(388032),
    k = a(826180);
let u = function (e) {
    let { onClose: t, onComplete: a, transitionState: n, webviewUrl: u, useV1: f = !1 } = e,
        x = s.useCallback(() => {
            a(), t();
        }, [a, t]),
        N = s.useCallback(() => {
            (0, l.nfh)(i.z) && x();
        }, [x]);
    (0, r.F5)(N);
    let h = s.useCallback(
        (e) => {
            if ('' !== u && 'string' == typeof e.data)
                try {
                    var t = JSON.parse(e.data);
                    'AGE_CHECK_COMPLETE' === t.status && x();
                } catch (e) {}
        },
        [u, x]
    );
    return (
        s.useEffect(
            () => (
                window.addEventListener('message', h),
                () => {
                    window.removeEventListener('message', h);
                }
            ),
            [h]
        ),
        (0, o.jsxs)(l.Y0X, {
            transitionState: n,
            className: k.root,
            children: [
                (0, o.jsxs)(l.hzk, {
                    className: c()(k.content, { [k.fullbleed]: !f }),
                    scrollbarType: 'none',
                    children: [
                        f &&
                            (0, o.jsx)(l.X6q, {
                                variant: 'heading-xl/bold',
                                children: d.NW.string(d.t.tYNaXF)
                            }),
                        (0, o.jsx)('iframe', {
                            id: 'frame',
                            src: u,
                            className: k.iframe,
                            allow: 'camera; microphone'
                        })
                    ]
                }),
                (0, o.jsx)(l.mzw, {
                    children: f
                        ? (0, o.jsx)(l.zxk, {
                              color: l.zxk.Colors.TRANSPARENT,
                              look: l.zxk.Looks.BLANK,
                              onClick: t,
                              className: k.cancelButton,
                              children: d.NW.string(d.t['4gTnU1'])
                          })
                        : (0, o.jsxs)('div', {
                              className: k.footer,
                              children: [
                                  (0, o.jsx)(l.zxk, {
                                      color: l.zxk.Colors.TRANSPARENT,
                                      look: l.zxk.Looks.BLANK,
                                      onClick: t,
                                      className: k.cancelButton,
                                      children: d.NW.string(d.t['4gTnU1'])
                                  }),
                                  (0, o.jsx)(l.zxk, {
                                      color: l.zxk.Colors.BRAND,
                                      onClick: x,
                                      children: d.NW.string(d.t.XYt3Ag)
                                  })
                              ]
                          })
                })
            ]
        })
    );
};
