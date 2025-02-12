n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(388032),
    r = n(63094);
function s(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsx)('div', {
                className: r.iconContainer,
                children: (0, i.jsx)(l.YlB, {
                    size: 'custom',
                    color: 'currentColor',
                    className: r.icon,
                    width: 20,
                    height: 20
                })
            }),
            (0, i.jsxs)('div', {
                className: r.header,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        className: r.headerText,
                        children: a.intl.string(a.t.LIIyeH)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: a.intl.format(a.t['4/6vQk'], { guildName: n })
                    }),
                    (0, i.jsx)(l.zxk, {
                        onClick: t,
                        className: r.button,
                        children: a.intl.string(a.t.BddRzc)
                    })
                ]
            })
        ]
    });
}
