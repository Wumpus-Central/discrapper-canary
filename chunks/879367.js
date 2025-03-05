e.d(t, { default: () => i });
var n = e(200651),
    s = e(192379),
    c = e(481060),
    o = e(388032),
    r = e(826180);
let i = function (a) {
    let { onClose: t, onComplete: e, transitionState: i, webviewUrl: l, showHeader: d = !0 } = a,
        u = s.useCallback(() => {
            t(), e();
        }, [e, t]),
        m = s.useCallback(
            (a) => {
                if ('' !== l && 'string' == typeof a.data)
                    try {
                        var t = JSON.parse(a.data);
                        'AGE_CHECK_COMPLETE' === t.status && u();
                    } catch (a) {}
            },
            [l, u]
        );
    return (
        s.useEffect(
            () => (
                window.addEventListener('message', m),
                () => {
                    window.removeEventListener('message', m);
                }
            ),
            [m]
        ),
        (0, n.jsx)(c.Y0X, {
            transitionState: i,
            className: r.root,
            children: (0, n.jsxs)(c.hzk, {
                className: r.content,
                children: [
                    d &&
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            children: o.NW.string(o.t.tYNaXF)
                        }),
                    (0, n.jsx)('iframe', {
                        id: 'frame',
                        src: l,
                        className: r.iframe,
                        allow: 'camera; microphone'
                    }),
                    (0, n.jsx)(c.zxk, {
                        color: c.zxk.Colors.TRANSPARENT,
                        look: c.zxk.Looks.BLANK,
                        onClick: t,
                        className: r.cancelButton,
                        children: o.NW.string(o.t['4gTnU1'])
                    })
                ]
            })
        })
    );
};
