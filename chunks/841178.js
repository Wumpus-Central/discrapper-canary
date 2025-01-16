i.r(n),
    i.d(n, {
        default: function () {
            return c;
        }
    });
var s = i(200651);
i(192379);
var e = i(481060),
    a = i(600164),
    o = i(313201),
    r = i(952164),
    d = i(388032),
    l = i(601216);
function c(t) {
    let { transitionState: n, onClose: i } = t,
        c = (0, o.Dt)();
    return (0, s.jsxs)(e.ModalRoot, {
        'aria-labelledby': c,
        transitionState: n,
        size: e.ModalSize.SMALL,
        children: [
            (0, s.jsx)(e.ModalHeader, {
                separator: !1,
                children: (0, s.jsx)(e.Heading, {
                    id: c,
                    variant: 'heading-lg/semibold',
                    children: d.intl.formatToMarkdownString(d.t.DQsSGh, {})
                })
            }),
            (0, s.jsxs)(e.ModalContent, {
                children: [
                    (0, s.jsx)(a.Z, {
                        justify: a.Z.Justify.CENTER,
                        children: (0, s.jsx)('div', { className: l.image })
                    }),
                    (0, s.jsx)(e.Text, {
                        className: l.text,
                        variant: 'text-sm/normal',
                        children: d.intl.string(d.t.xGMwi4)
                    })
                ]
            }),
            (0, s.jsxs)(e.ModalFooter, {
                children: [
                    (0, s.jsx)(e.Button, {
                        onClick: function () {
                            (0, r.KK)(), i();
                        },
                        children: d.intl.string(d.t.n8U5jY)
                    }),
                    (0, s.jsx)(e.Button, {
                        look: e.Button.Looks.LINK,
                        color: e.Button.Colors.PRIMARY,
                        onClick: i,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
