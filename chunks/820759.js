n.d(t, {
    $0: function () {
        return o;
    },
    E_: function () {
        return l;
    }
});
var i = n(200651),
    s = n(481060),
    r = n(574792);
let a = () => (0, i.jsx)('hr', { className: r.sectionDivider }),
    l = (e) => {
        let { label: t, children: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a, {}),
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    className: r.labelSpacing,
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
            className: r.section,
            children: t
        });
    };
