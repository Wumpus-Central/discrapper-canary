o.d(t, { default: () => l }), o(47120);
var i = o(200651),
    r = o(192379),
    n = o(481060),
    s = o(168107),
    a = o(277021),
    c = o(514211);
let l = function (e) {
    let { onClose: t, transitionState: o } = e,
        [l, d] = r.useState(''),
        [h, u] = r.useState(!1),
        f = r.useCallback(() => {
            console.log('Scan complete');
        }, []),
        _ = async () => {
            u(!0), d('');
            try {
                let e = await (0, a.Q)();
                s.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: f,
                    onClose: t
                });
            } catch (e) {
                d(e.message);
            } finally {
                u(!1);
            }
        };
    return (0, i.jsxs)(n.Y0X, {
        transitionState: o,
        className: c.root,
        children: [
            (0, i.jsxs)(n.xBx, {
                className: c.header,
                children: [
                    (0, i.jsx)(n.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, i.jsx)(n.olH, { onClick: t })
                ]
            }),
            (0, i.jsx)(n.hzk, { className: c.content }),
            (0, i.jsxs)(n.mzw, {
                className: c.footer,
                children: [
                    (0, i.jsx)(n.zxk, {
                        onClick: _,
                        submitting: h,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, i.jsx)(n.pdY, { error: l })
                ]
            })
        ]
    });
};
