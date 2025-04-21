n.d(t, {
    $0: () => d,
    E_: () => c
});
var i = n(200651),
    r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(517791);
let o = () => (0, i.jsx)('hr', { className: a.sectionDivider }),
    c = (e) => {
        let { label: t, children: n, direction: r = 'horizontal', className: c } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o, {}),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/semibold',
                    className: a.labelSpacing,
                    children: t
                }),
                (0, i.jsx)('div', {
                    className: s()(a.container, c, { [a.verticalContainer]: 'vertical' === r }),
                    children: n
                })
            ]
        });
    },
    d = (e) => {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: a.section,
            children: t
        });
    };
