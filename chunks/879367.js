e.d(a, { default: () => i });
var n = e(200651),
    s = e(192379),
    c = e(481060),
    o = e(388032),
    r = e(999752);
let i = function (t) {
    let { onClose: a, onComplete: e, transitionState: i, webviewUrl: l } = t,
        d = s.useCallback(() => {
            a(), e();
        }, [e, a]),
        u = s.useCallback(
            (t) => {
                if ('' !== l && 'string' == typeof t.data)
                    try {
                        var a = JSON.parse(t.data);
                        'AGE_CHECK_COMPLETE' === a.status && d();
                    } catch (t) {}
            },
            [l, d]
        );
    return (
        s.useEffect(
            () => (
                window.addEventListener('message', u),
                () => {
                    window.removeEventListener('message', u);
                }
            ),
            [u]
        ),
        (0, n.jsx)(c.Y0X, {
            transitionState: i,
            className: r.root,
            children: (0, n.jsxs)(c.hzk, {
                className: r.content,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: o.intl.string(o.t.tYNaXF)
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
                        onClick: a,
                        className: r.cancelButton,
                        children: o.intl.string(o.t['4gTnU1'])
                    })
                ]
            })
        })
    );
};
