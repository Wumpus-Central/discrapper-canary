n.d(t, { Z: () => l }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(921801),
    a = n(733750);
function l(e) {
    let { children: t, title: n, description: l, webSetting: o } = e;
    return (0, r.jsx)(s.F, {
        setting: o,
        children: (0, r.jsxs)('div', {
            className: a.category,
            children: [
                (0, r.jsxs)('div', {
                    className: a.categoryHeader,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: n
                        }),
                        null != l
                            ? (0, r.jsx)(i.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: l
                              })
                            : null
                    ]
                }),
                (0, r.jsx)('div', {
                    className: a.categoryContent,
                    children: t
                }),
                (0, r.jsx)(i.$i$, { className: a.categoryDivider })
            ]
        })
    });
}
