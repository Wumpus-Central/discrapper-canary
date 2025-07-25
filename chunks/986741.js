(i.d(t, { default: () => l }), i(388685));
var a = i(255367),
    n = i(73800),
    r = i(82659),
    o = i(481060),
    c = i(168107),
    s = i(277021);
let l = function (e) {
    let { onClose: t, transitionState: i } = e,
        [l, u] = n.useState(''),
        [d, f] = n.useState(!1),
        h = n.useCallback(() => {
            console.log('Scan complete');
        }, []),
        p = async () => {
            (f(!0), u(''));
            try {
                let e = await (0, s.Q)();
                c.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: h,
                    onClose: t
                });
            } catch (e) {
                u(e.message);
            } finally {
                f(!1);
            }
        };
    return (0, a.jsx)(r.Modal, {
        transitionState: i,
        onClose: t,
        title: 'Age Verification Test Tool',
        actions: [
            {
                text: 'Trigger Age Verification Test',
                onClick: p,
                loading: d
            }
        ],
        children: (0, a.jsx)('div', { children: '' !== l && (0, a.jsx)(o.pdY, { error: l }) })
    });
};
