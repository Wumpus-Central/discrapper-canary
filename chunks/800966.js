n.d(t, {
    h: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(990547),
    s = n(481060),
    o = n(213609),
    c = n(626135),
    d = n(738672),
    u = n(981631),
    h = n(388032),
    p = n(790582);
function m(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, o.Z)(
            {
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.HD_STREAMING_POPOUT
            },
            { disableTrack: t },
            [t]
        ),
        (0, i.jsxs)('div', {
            className: r()(p.popoutContainer, { [p.hidden]: t }),
            children: [
                (0, i.jsx)('img', {
                    className: p.image,
                    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                    alt: 'HD Streaming Nitro Perk'
                }),
                (0, i.jsx)(s.Button, {
                    className: p.closeButton,
                    'aria-label': h.intl.string(h.t.cpT0Cg),
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.NONE,
                    onClick: () => {
                        n(), c.default.track(u.rMx.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, i.jsx)(s.XSmallIcon, {
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
                                    (0, i.jsx)(s.NitroWheelIcon, { size: 'xs' }),
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
