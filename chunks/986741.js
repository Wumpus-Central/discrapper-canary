o.d(t, { default: () => l }), o(47120);
var r = o(200651),
    i = o(192379),
    n = o(481060),
    s = o(191237),
    a = o(277021),
    c = o(211677);
let l = function (e) {
    let { onClose: t, transitionState: o } = e,
        [l, d] = i.useState(''),
        h = i.useCallback(() => {
            console.log('Scan complete');
        }, []),
        u = async () => {
            d('');
            try {
                let e = await (0, a.Q)();
                s.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: h
                });
            } catch (e) {
                d(e.message);
            }
        };
    return (0, r.jsxs)(n.Y0X, {
        transitionState: o,
        className: c.root,
        children: [
            (0, r.jsxs)(n.xBx, {
                className: c.header,
                children: [
                    (0, r.jsx)(n.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, r.jsx)(n.olH, { onClick: t })
                ]
            }),
            (0, r.jsx)(n.hzk, { className: c.content }),
            (0, r.jsxs)(n.mzw, {
                className: c.footer,
                children: [
                    (0, r.jsx)(n.zxk, {
                        onClick: u,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, r.jsx)(n.pdY, { error: l })
                ]
            })
        ]
    });
};
