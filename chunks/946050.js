n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(670044),
    r = n(28391),
    s = n(526761),
    o = n(388032),
    c = n(544725);
function d(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, i.jsxs)('div', {
        className: c.notice,
        children: [
            (0, i.jsx)(a.Z, { id: t.id }),
            (0, i.jsx)('div', {
                className: c.info,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    children: o.intl.format(o.t.P6Y2Nz, {})
                })
            }),
            (0, i.jsx)('div', {
                className: c.buttons,
                children: (0, i.jsxs)(l.zxk, {
                    size: l.zxk.Sizes.TINY,
                    look: l.zxk.Looks.FILLED,
                    color: l.zxk.Colors.PRIMARY,
                    className: c.button,
                    innerClassName: c.buttonInner,
                    onClick: () => {
                        (0, r.Z)(t.guild_id, t.id, s.ic.UNREADS_ONLY_MENTIONS), n();
                    },
                    children: [
                        o.intl.string(o.t.KyUKhY),
                        (0, i.jsx)(l.UEU, {
                            size: 'xs',
                            color: 'currentColor',
                            style: { marginLeft: 4 }
                        })
                    ]
                })
            })
        ]
    });
}
