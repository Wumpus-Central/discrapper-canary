n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(670044),
    o = n(28391),
    s = n(526761),
    c = n(388032),
    u = n(900907);
function d(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, r.jsxs)('div', {
        className: u.notice,
        children: [
            (0, r.jsx)(a.Z, { id: t.id }),
            (0, r.jsx)('div', {
                className: u.info,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    children: c.intl.format(c.t.P6Y2Nz, {})
                })
            }),
            (0, r.jsx)('div', {
                className: u.buttons,
                children: (0, r.jsxs)(i.zx, {
                    size: i.zx.Sizes.TINY,
                    look: i.zx.Looks.FILLED,
                    color: i.zx.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.buttonInner,
                    onClick: () => {
                        ((0, o.Z)(t.guild_id, t.id, s.ic.UNREADS_ONLY_MENTIONS), n());
                    },
                    children: [
                        c.intl.string(c.t.KyUKhY),
                        (0, r.jsx)(l.UEU, {
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
