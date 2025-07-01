(o.d(t, { default: () => l }), o(388685));
var i = o(255367),
    n = o(73800),
    r = o(481060),
    a = o(168107),
    s = o(277021),
    c = o(514211);
let l = function (e) {
    let { onClose: t, transitionState: o } = e,
        [l, d] = n.useState(''),
        [h, u] = n.useState(!1),
        f = n.useCallback(() => {
            console.log('Scan complete');
        }, []),
        _ = async () => {
            (u(!0), d(''));
            try {
                let e = await (0, s.Q)();
                a.Z.showAgeVerification({
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
    return (0, i.jsxs)(r.Y0X, {
        transitionState: o,
        className: c.root,
        parentComponent: 'AgeVerificationTestModal',
        children: [
            (0, i.jsxs)(r.xBx, {
                className: c.header,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, i.jsx)(r.olH, { onClick: t })
                ]
            }),
            (0, i.jsx)(r.hzk, { className: c.content }),
            (0, i.jsxs)(r.mzw, {
                className: c.footer,
                children: [
                    (0, i.jsx)(r.zxk, {
                        onClick: _,
                        submitting: h,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, i.jsx)(r.pdY, { error: l })
                ]
            })
        ]
    });
};
