e.d(n, { default: () => N }), e(47120);
var i = e(200651),
    o = e(192379),
    a = e(481060),
    s = e(230711),
    r = e(2052),
    c = e(906732),
    l = e(174609),
    p = e(626135),
    C = e(790527),
    d = e(940165),
    _ = e(474936),
    u = e(981631),
    x = e(871465),
    I = e(388032),
    S = e(957232);
function N(t) {
    let { onClose: n, ...N } = t,
        T = (0, r.O)(),
        { analyticsLocations: U } = (0, c.ZP)(),
        [E, b] = o.useState(!1);
    o.useEffect(() => {
        !E &&
            (p.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
                location: T.location,
                location_stack: U
            }),
            b(!0));
    }, [T.location, U, E]);
    let f = (0, x.LB)(!1);
    return (0, i.jsx)(C.Z, {
        type: _.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
        artContainerClassName: S.image,
        artURL: e(98165),
        title: I.intl.string(I.t.c0X1Cw),
        glowUp: I.intl.string(I.t.c0X1Cw),
        body: I.intl.string(I.t.SX63mJ),
        showEnhancedUpsell: !0,
        analyticsLocation: { section: u.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL },
        enableArtBoxShadow: !1,
        onSubscribeClick: l.Z,
        secondaryCTA: I.intl.string(I.t.PcTCBw),
        onSecondaryClick: () => {
            n(), s.Z.open(u.oAB.PREMIUM);
        },
        onClose: n,
        ...N,
        children: (0, i.jsx)(a.xJW, {
            title: I.intl.string(I.t['K/hjQU']),
            className: S.optionsContainerWrapper,
            children: (0, i.jsx)('div', {
                className: S.optionsContainer,
                children: f.map((t, n) => {
                    let e = t.value;
                    return e === x.YC.CLASSIC
                        ? null
                        : (0, i.jsx)(
                              d.Z,
                              {
                                  label: t.label,
                                  soundpack: e,
                                  description: t.description,
                                  location: 'upsellModal'
                              },
                              n
                          );
                })
            })
        })
    });
}
