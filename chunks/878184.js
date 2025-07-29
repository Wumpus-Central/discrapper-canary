n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(686546),
    o = n(305347),
    s = n(220250),
    l = n(388032),
    c = n(541195);
function u(e) {
    let { name: t, onRetry: n } = e,
        u = (0, s.nv)(),
        d = (0, s.dG)(u.hex()),
        _ = null != t ? t : l.intl.string(l.t.DmIUGB);
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)('div', {
                className: c.banner,
                style: { background: d }
            }),
            (0, r.jsx)('div', {
                className: c.avatarContainer,
                children: (0, r.jsx)(a.ZP, {
                    mask: a.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: c.avatarWrapper,
                        children: (0, r.jsx)(o.R$, {
                            guildName: _,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: c.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: _
                    }),
                    (0, r.jsxs)(i.P3F, {
                        className: c.error,
                        onClick: n,
                        children: [
                            (0, r.jsx)(i.Mgn, {
                                size: 'sm',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-feedback-warning',
                                children: l.intl.string(l.t.tmGHjY)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
