n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(686546),
    a = n(768581),
    s = n(388032),
    o = n(539080);
let d = (e) => {
    var t;
    let { entry: n } = e,
        { id: d, icon: c, name: u } = n,
        m =
            null !==
                (t = a.ZP.getGuildIconURL({
                    id: d,
                    icon: c,
                    size: 32
                })) && void 0 !== t
                ? t
                : void 0;
    return (0, l.jsxs)('div', {
        className: o.container,
        children: [
            (0, l.jsx)(i.X6q, {
                className: o.header,
                variant: 'heading-sm/semibold',
                children: s.intl.string(s.t.nTe4HB)
            }),
            (0, l.jsx)('div', {
                className: o.guildContainer,
                children: (0, l.jsxs)('div', {
                    className: o.guildInfo,
                    children: [
                        (0, l.jsx)(r.ZP, {
                            mask: r.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: o.guildIconMask,
                            children: (0, l.jsx)('img', {
                                src: m,
                                alt: '',
                                className: o.guildIcon
                            })
                        }),
                        (0, l.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: u
                        })
                    ]
                })
            })
        ]
    });
};
