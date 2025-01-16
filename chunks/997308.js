n.r(e),
    n.d(e, {
        default: function () {
            return d;
        }
    });
var s = n(200651);
n(192379);
var i = n(481060),
    a = n(600164),
    r = n(388032),
    l = n(184764);
function d(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, s.jsxs)(i.ModalRoot, {
        size: i.ModalSize.DYNAMIC,
        transitionState: e,
        'aria-label': r.intl.string(r.t.elyVbm),
        children: [
            (0, s.jsxs)(i.ModalHeader, {
                justify: a.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-md/semibold',
                        className: l.header,
                        children: r.intl.string(r.t.elyVbm)
                    }),
                    (0, s.jsx)(i.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, s.jsxs)(i.ModalContent, {
                children: [
                    (0, s.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: r.intl.string(r.t.nIeRen)
                    }),
                    (0, s.jsx)('div', { className: l.fullArt })
                ]
            }),
            (0, s.jsx)(i.ModalFooter, {
                children: (0, s.jsx)(i.Button, {
                    onClick: n,
                    children: r.intl.string(r.t.BddRzc)
                })
            })
        ]
    });
}
