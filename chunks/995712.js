n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(686546),
    a = n(768581),
    o = n(388032),
    s = n(519582);
let c = (e) => {
    var t;
    let { entry: n } = e,
        { id: c, icon: d, name: u } = n,
        m =
            null !=
            (t = a.ZP.getGuildIconURL({
                id: c,
                icon: d,
                size: 32
            }))
                ? t
                : void 0;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsx)(l.X6q, {
                className: s.header,
                variant: 'heading-sm/semibold',
                children: o.NW.string(o.t.nTe4HB)
            }),
            (0, r.jsx)('div', {
                className: s.guildContainer,
                children: (0, r.jsxs)('div', {
                    className: s.guildInfo,
                    children: [
                        (0, r.jsx)(i.ZP, {
                            mask: i.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: s.guildIconMask,
                            children: (0, r.jsx)('img', {
                                src: m,
                                alt: '',
                                className: s.guildIcon
                            })
                        }),
                        (0, r.jsx)(l.Text, {
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
