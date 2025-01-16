var i = r(200651);
r(192379);
var a = r(481060),
    s = r(686546),
    o = r(768581),
    l = r(388032),
    u = r(3463);
let c = 32,
    d = (e) => {
        var n;
        let { entry: r } = e,
            { id: d, icon: f, name: _ } = r,
            h =
                null !==
                    (n = o.ZP.getGuildIconURL({
                        id: d,
                        icon: f,
                        size: c
                    })) && void 0 !== n
                    ? n
                    : void 0;
        return (0, i.jsxs)('div', {
            className: u.container,
            children: [
                (0, i.jsx)(a.Heading, {
                    className: u.header,
                    variant: 'heading-sm/semibold',
                    children: l.intl.string(l.t.nTe4HB)
                }),
                (0, i.jsx)('div', {
                    className: u.guildContainer,
                    children: (0, i.jsxs)('div', {
                        className: u.guildInfo,
                        children: [
                            (0, i.jsx)(s.ZP, {
                                mask: s.ZP.Masks.SQUIRCLE,
                                width: c,
                                height: c,
                                className: u.guildIconMask,
                                children: (0, i.jsx)('img', {
                                    src: h,
                                    alt: '',
                                    className: u.guildIcon
                                })
                            }),
                            (0, i.jsx)(a.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: _
                            })
                        ]
                    })
                })
            ]
        });
    };
n.Z = d;
