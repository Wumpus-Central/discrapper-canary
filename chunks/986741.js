n.d(t, { default: () => l }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    o = n(191237),
    c = n(277021),
    s = n(680143);
let l = function (e) {
    let { onClose: t, transitionState: n } = e,
        [l, u] = a.useState(''),
        d = a.useCallback(() => {
            console.log('Scan complete');
        }, []),
        g = async () => {
            u('');
            try {
                let e = await (0, c.Q)();
                o.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: d
                });
            } catch (e) {
                u(e.message);
            }
        };
    return (0, r.jsxs)(i.Y0X, {
        transitionState: n,
        className: s.root,
        children: [
            (0, r.jsxs)(i.xBx, {
                className: s.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, r.jsx)(i.olH, { onClick: t })
                ]
            }),
            (0, r.jsx)(i.hzk, { className: s.content }),
            (0, r.jsxs)(i.mzw, {
                className: s.footer,
                children: [
                    (0, r.jsx)(i.zxk, {
                        onClick: g,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, r.jsx)(i.pdY, { error: l })
                ]
            })
        ]
    });
};
