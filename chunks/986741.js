o.r(t), o(47120);
var a = o(200651),
    n = o(192379),
    r = o(481060),
    i = o(191237),
    s = o(277021),
    c = o(292018);
t.default = function (e) {
    let { onClose: t, transitionState: o } = e,
        [l, d] = n.useState(''),
        u = n.useCallback(() => {
            console.log('Scan complete');
        }, []),
        h = async () => {
            d('');
            try {
                let e = await (0, s.Q)();
                i.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: u
                });
            } catch (e) {
                d(e.message);
            }
        };
    return (0, a.jsxs)(r.ModalRoot, {
        transitionState: o,
        className: c.root,
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                className: c.header,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Age Verification Test Tool'
                    }),
                    (0, a.jsx)(r.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, a.jsx)(r.ModalContent, { className: c.content }),
            (0, a.jsxs)(r.ModalFooter, {
                className: c.footer,
                children: [
                    (0, a.jsx)(r.Button, {
                        onClick: h,
                        children: 'Trigger Age Verification Test'
                    }),
                    '' !== l && (0, a.jsx)(r.InputError, { error: l })
                ]
            })
        ]
    });
};
