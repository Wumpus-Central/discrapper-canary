n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(388032),
    a = n(892703);
function o(e) {
    let { onClose: t, guildName: n } = e;
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            (0, r.jsx)('div', {
                className: a.iconContainer,
                children: (0, r.jsx)(i.YlB, {
                    size: 'custom',
                    color: 'currentColor',
                    className: a.icon,
                    width: 20,
                    height: 20
                })
            }),
            (0, r.jsxs)('div', {
                className: a.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        className: a.headerText,
                        children: l.intl.string(l.t.LIIyeH)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: l.intl.format(l.t['4/6vQk'], { guildName: n })
                    }),
                    (0, r.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: a.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: 'primary',
                            text: l.intl.string(l.t.BddRzc),
                            onClick: t
                        })
                    })
                ]
            })
        ]
    });
}
