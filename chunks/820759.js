n.d(t, {
    $0: function () {
        return o;
    },
    E_: function () {
        return l;
    }
});
var i = n(200651),
    r = n(481060),
    s = n(19246);
let a = () => (0, i.jsx)('hr', { className: s.sectionDivider }),
    l = (e) => {
        let { label: t, children: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a, {}),
                (0, i.jsx)(r.Text, {
                    variant: 'text-md/semibold',
                    className: s.labelSpacing,
                    children: t
                }),
                (0, i.jsx)('div', {
                    style: { display: 'flex' },
                    children: n
                })
            ]
        });
    },
    o = (e) => {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: s.section,
            children: t
        });
    };
