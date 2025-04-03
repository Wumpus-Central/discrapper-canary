n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(670044),
    o = n(28391),
    a = n(526761),
    s = n(388032),
    c = n(900907);
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
                    children: s.NW.format(s.t.P6Y2Nz, {})
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
                        (0, o.Z)(t.guild_id, t.id, a.ic.UNREADS_ONLY_MENTIONS), n();
                    },
                    children: [
                        s.NW.string(s.t.KyUKhY),
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
