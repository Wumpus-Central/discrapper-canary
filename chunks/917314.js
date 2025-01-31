e.d(n, { default: () => g });
var o = e(200651);
e(192379);
var i = e(913527),
    s = e.n(i),
    a = e(848246),
    r = e(442837),
    l = e(230711),
    c = e(174609),
    d = e(114064),
    u = e(790527),
    p = e(1163),
    E = e(474936),
    M = e(981631),
    f = e(388032);
function g(t) {
    let { onClose: n, ...i } = t,
        g = p.Z.useExperiment({ location: 'PerksDemoPostUpsellModal' }, { autoTrackExposure: !1 }).extendedDemoDuration,
        L = (0, r.e7)([d.Z], () => {
            let t = s()(d.Z.activatedEndTime(a.q.STREAM_HIGH_QUALITY));
            return s().duration(t.diff(s()())).days();
        }),
        T = g ? (L < 1 ? f.intl.string(f.t.cRox19) : f.intl.formatToPlainString(f.t['5JlTZW'], { days: Math.floor(L) })) : f.intl.string(f.t.qLByR0);
    return (0, o.jsx)(u.Z, {
        type: E.cd.STREAM_QUALITY_UPSELL,
        artURL: e(279360),
        title: f.intl.string(f.t.uMbnCg),
        glowUp: f.intl.string(f.t.uMbnCg),
        showEnhancedUpsell: !0,
        body: T,
        analyticsLocation: { section: M.jXE.PREMIUM_PERKS_DEMO_UPSELL_MODAL },
        onSubscribeClick: c.Z,
        secondaryCTA: f.intl.string(f.t.PcTCBw),
        onSecondaryClick: () => {
            n(), l.Z.open(M.oAB.PREMIUM);
        },
        enableArtBoxShadow: !1,
        onClose: n,
        ...i
    });
}
