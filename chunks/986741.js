r.d(t, { default: () => l }), r(47120);
var n = r(200651),
    o = r(192379),
    a = r(481060),
    i = r(191237),
    s = r(277021),
    c = r(211677);
let l = function (e) {
    let { onClose: t, transitionState: r } = e,
        [l, d] = o.useState(''),
        h = o.useCallback(() => {
            console.log('Scan complete');
        }, []),
        u = async () => {
            d('');
            try {
                let e = await (0, s.Q)();
                i.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: h
                });
            } catch (e) {
                d(e.message);
            }
        };
    return (0, n.jsxs)(a.Y0X, {
        transitionState: r,
        className: c.root,
        children: [
            (0, n.jsxs)(a.xBx, {
                className: c.header,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, n.jsx)(a.olH, { onClick: t })
                ]
            }),
            (0, n.jsx)(a.hzk, { className: c.content }),
            (0, n.jsxs)(a.mzw, {
                className: c.footer,
                children: [
                    (0, n.jsx)(a.zxk, {
                        onClick: u,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, n.jsx)(a.pdY, { error: l })
                ]
            })
        ]
    });
};
