n.d(t, {
    $0: () => d,
    E_: () => c
});
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(517791);
let o = () => (0, r.jsx)('hr', { className: l.sectionDivider }),
    c = (e) => {
        let { label: t, children: n, direction: i = 'horizontal', className: c } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o, {}),
                (0, r.jsx)(a.Text, {
                    variant: 'text-md/semibold',
                    className: l.labelSpacing,
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: s()(l.container, c, { [l.verticalContainer]: 'vertical' === i }),
                    children: n
                })
            ]
        });
    },
    d = (e) => {
        let { children: t } = e;
        return (0, r.jsx)('div', {
            className: l.section,
            children: t
        });
    };
