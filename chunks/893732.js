n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(388032),
    o = n(892703);
function a(e) {
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
                        children: l.NW.string(l.t.LIIyeH)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: l.NW.format(l.t['4/6vQk'], { guildName: n })
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: t,
                        className: o.button,
                        children: l.NW.string(l.t.BddRzc)
                    })
                ]
            })
        ]
    });
}
