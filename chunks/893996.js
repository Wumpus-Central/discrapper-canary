n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(921801),
    a = n(300530);
function l(e) {
    let { children: t, title: n, description: l, webSetting: o } = e;
    return (0, i.jsx)(r.F, {
        setting: o,
        children: (0, i.jsxs)('div', {
            className: a.category,
            children: [
                (0, i.jsxs)('div', {
                    className: a.categoryHeader,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: n
                        }),
                        null != l
                            ? (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: l
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', {
                    className: a.categoryContent,
                    children: t
                }),
                (0, i.jsx)(s.FormDivider, { className: a.categoryDivider })
            ]
        })
    });
}
