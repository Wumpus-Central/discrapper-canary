(o.d(t, { default: () => l }), o(388685));
var a = o(255367),
    r = o(73800),
    i = o(481060),
    n = o(168107),
    s = o(277021),
    c = o(514211);
let l = function (e) {
    let { onClose: t, transitionState: o } = e,
        [l, d] = r.useState(''),
        [h, u] = r.useState(!1),
        f = r.useCallback(() => {
            console.log('Scan complete');
        }, []),
        p = async () => {
            (u(!0), d(''));
            try {
                let e = await (0, s.Q)();
                n.Z.showAgeVerification({
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
    return (0, a.jsxs)(i.Y0X, {
        transitionState: o,
        className: c.root,
        parentComponent: 'AgeVerificationTestModal',
        children: [
            (0, a.jsxs)(i.xBx, {
                className: c.header,
                children: [
                    (0, a.jsx)(i.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, a.jsx)(i.olH, { onClick: t })
                ]
            }),
            (0, a.jsx)(i.hzk, { className: c.content }),
            (0, a.jsxs)(i.mzw, {
                className: c.footer,
                children: [
                    (0, a.jsx)(i.zxk, {
                        variant: 'primary',
                        text: 'Trigger Age Verification Test',
                        onClick: p,
                        loading: h
                    }),
                    '' !== l && (0, a.jsx)(i.pdY, { error: l })
                ]
            })
        ]
    });
};
