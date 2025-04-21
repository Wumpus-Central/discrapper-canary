n.d(t, { Z: () => a }), n(953529);
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(921801),
    l = n(733750);
function a(e) {
    let { children: t, title: n, description: a, webSetting: o } = e;
    return (0, i.jsx)(s.F, {
        setting: o,
        children: (0, i.jsxs)('div', {
            className: l.category,
            children: [
                (0, i.jsxs)('div', {
                    className: l.categoryHeader,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: n
                        }),
                        null != a
                            ? (0, i.jsx)(r.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: a
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', {
                    className: l.categoryContent,
                    children: t
                }),
                (0, i.jsx)(r.$i$, { className: l.categoryDivider })
            ]
        })
    });
}
