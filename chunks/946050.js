n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(670044),
    a = n(28391),
    o = n(526761),
    s = n(388032),
    c = n(860168);
function u(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, r.jsxs)('div', {
        className: c.notice,
        children: [
            (0, r.jsx)(l.Z, { id: t.id }),
            (0, r.jsx)('div', {
                className: c.info,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-sm/medium',
                    children: s.intl.format(s.t.P6Y2Nz, {})
                })
            }),
            (0, r.jsx)('div', {
                className: c.buttons,
                children: (0, r.jsxs)(i.zxk, {
                    size: i.zxk.Sizes.TINY,
                    look: i.zxk.Looks.FILLED,
                    color: i.zxk.Colors.PRIMARY,
                    className: c.button,
                    innerClassName: c.buttonInner,
                    onClick: () => {
                        (0, a.Z)(t.guild_id, t.id, o.ic.UNREADS_ONLY_MENTIONS), n();
                    },
                    children: [
                        s.intl.string(s.t.KyUKhY),
                        (0, r.jsx)(i.UEU, {
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
