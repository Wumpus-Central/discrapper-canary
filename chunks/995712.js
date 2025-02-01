n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(686546),
    s = n(768581),
    o = n(388032),
    l = n(3463);
let u = 32,
    c = (e) => {
        var t;
        let { entry: n } = e,
            { id: c, icon: d, name: f } = n,
            _ =
                null !==
                    (t = s.ZP.getGuildIconURL({
                        id: c,
                        icon: d,
                        size: u
                    })) && void 0 !== t
                    ? t
                    : void 0;
        return (0, i.jsxs)('div', {
            className: l.container,
            children: [
                (0, i.jsx)(r.X6q, {
                    className: l.header,
                    variant: 'heading-sm/semibold',
                    children: o.intl.string(o.t.nTe4HB)
                }),
                (0, i.jsx)('div', {
                    className: l.guildContainer,
                    children: (0, i.jsxs)('div', {
                        className: l.guildInfo,
                        children: [
                            (0, i.jsx)(a.ZP, {
                                mask: a.ZP.Masks.SQUIRCLE,
                                width: u,
                                height: u,
                                className: l.guildIconMask,
                                children: (0, i.jsx)('img', {
                                    src: _,
                                    alt: '',
                                    className: l.guildIcon
                                })
                            }),
                            (0, i.jsx)(r.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: f
                            })
                        ]
                    })
                })
            ]
        });
    };
