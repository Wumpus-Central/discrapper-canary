n.d(t, { h: () => f });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(990547),
    s = n(481060),
    o = n(213609),
    c = n(626135),
    d = n(738672),
    u = n(981631),
    h = n(388032),
    p = n(62210);
function m(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, o.Z)(
            {
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.HD_STREAMING_POPOUT
            },
            { disableTrack: t },
            [t]
        ),
        (0, i.jsxs)('div', {
            className: a()(p.popoutContainer, { [p.hidden]: t }),
            children: [
                (0, i.jsx)('img', {
                    className: p.image,
                    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                    alt: 'HD Streaming Nitro Perk'
                }),
                (0, i.jsx)(s.zxk, {
                    className: p.closeButton,
                    'aria-label': h.intl.string(h.t.cpT0Cg),
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    onClick: () => {
                        n(), c.default.track(u.rMx.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, i.jsx)(s.Dio, {
                        size: 'xs',
                        className: p.closeIcon,
                        color: 'white'
                    })
                }),
                (0, i.jsx)('div', {
                    className: p.infoContainerParent,
                    children: (0, i.jsxs)('div', {
                        className: p.infoContainer,
                        children: [
                            (0, i.jsx)(s.Text, {
                                className: p.infoText,
                                variant: 'text-sm/medium',
                                children: h.intl.format(h.t.ruvD7u, {})
                            }),
                            (0, i.jsxs)('div', {
                                className: p.poweredByNitroContainer,
                                children: [
                                    (0, i.jsx)(s.SrA, { size: 'xs' }),
                                    (0, i.jsx)(s.Text, {
                                        className: p.infoText,
                                        variant: 'text-sm/medium',
                                        children: h.intl.string(h.t['BMw+7O'])
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function f(e) {
    let { ...t } = e;
    return (0, i.jsx)(d.h, {
        ...t,
        renderComponent: (e) => (0, i.jsx)(m, { ...e })
    });
}
