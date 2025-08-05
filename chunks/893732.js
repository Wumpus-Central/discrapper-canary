n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(388032),
    o = n(892703);
function s(e) {
    let { onClose: t, guildName: n } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)('div', {
                className: o.iconContainer,
                children: (0, r.jsx)(i.YlB, {
                    size: 'custom',
                    color: 'currentColor',
                    className: o.icon,
                    width: 20,
                    height: 20
                })
            }),
            (0, r.jsxs)('div', {
                className: o.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        className: o.headerText,
                        children: a.intl.string(a.t.LIIyeH)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: a.intl.format(a.t['4/6vQk'], { guildName: n })
                    }),
                    (0, r.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: o.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: 'primary',
                            text: a.intl.string(a.t.BddRzc),
                            onClick: t
                        })
                    })
                ]
            })
        ]
    });
}
