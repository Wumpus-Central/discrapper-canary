e.r(n),
    e.d(n, {
        default: function () {
            return S;
        }
    }),
    e(47120);
var i = e(200651),
    o = e(192379),
    a = e(481060),
    r = e(230711),
    c = e(2052),
    s = e(906732),
    l = e(174609),
    p = e(626135),
    C = e(790527),
    d = e(940165),
    u = e(474936),
    _ = e(981631),
    f = e(871465),
    I = e(388032),
    x = e(633342);
function S(t) {
    let { onClose: n, ...S } = t,
        m = (0, c.O)(),
        { analyticsLocations: N } = (0, s.ZP)(),
        [U, E] = o.useState(!1);
    o.useEffect(() => {
        if (!U)
            p.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                type: u.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
                location: m.location,
                location_stack: N
            }),
                E(!0);
    }, [m.location, N, U]);
    let h = (0, f.LB)(!1);
    return (0, i.jsx)(C.Z, {
        type: u.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
        artContainerClassName: x.image,
        artURL: e(98165),
        title: I.intl.string(I.t.c0X1Cw),
        glowUp: I.intl.string(I.t.c0X1Cw),
        body: I.intl.string(I.t.SX63mJ),
        showEnhancedUpsell: !0,
        analyticsLocation: { section: _.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL },
        enableArtBoxShadow: !1,
        onSubscribeClick: l.Z,
        secondaryCTA: I.intl.string(I.t.PcTCBw),
        onSecondaryClick: () => {
            n(), r.Z.open(_.oAB.PREMIUM);
        },
        onClose: n,
        ...S,
        children: (0, i.jsx)(a.FormItem, {
            title: I.intl.string(I.t['K/hjQU']),
            className: x.optionsContainerWrapper,
            children: (0, i.jsx)('div', {
                className: x.optionsContainer,
                children: h.map((t, n) => {
                    let e = t.value;
                    return e === f.YC.CLASSIC
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
