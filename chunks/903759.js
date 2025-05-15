r.d(t, { u: () => o });
var n = r(255367);
r(73800);
var l = r(481060),
    i = r(372129),
    a = r(162337);
let o = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)('div', {
            className: a.emptyState,
            children: [
                (0, n.jsxs)('header', {
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: 'Add Emoji'
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: "Select an image or GIF. You'll be able to edit & preview."
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: a.dropZone,
                    children: [
                        (0, n.jsx)(l.dZu, {
                            size: 'lg',
                            color: l.TVs.colors.HEADER_MUTED
                        }),
                        (0, n.jsxs)(l.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, n.jsx)(s, { setUserImage: t })]
                        })
                    ]
                })
            ]
        });
    },
    s = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)(l.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: [
                'Select an image',
                (0, n.jsx)(i.Z, {
                    tabIndex: 0,
                    onChange: (e, r, n) => (
                        t({
                            data: e,
                            file: r,
                            image: n
                        }),
                        Promise.resolve(void 0)
                    )
                })
            ]
        });
    };
