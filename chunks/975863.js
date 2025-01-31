e.d(n, { default: () => U });
var c = e(200651);
e(192379);
var a = e(442837),
    s = e(654904),
    i = e(594174),
    o = e(74538),
    r = e(98278),
    d = e(790527),
    u = e(474936),
    p = e(981631),
    f = e(486324),
    l = e(388032),
    C = e(89671);
function U(t) {
    let { onClose: n, source: e, ...U } = t,
        b = (0, a.e7)([i.default], () => i.default.getCurrentUser()),
        y = o.ZP.isPremium(b) ? l.t.E0sNsb : l.t.UBcutr,
        E = l.intl.format(y, {
            onLearnMore: function () {
                n(), (0, r.z)(!0);
            }
        });
    return (0, c.jsx)(d.Z, {
        artURL: C.Z,
        type: u.cd.CUSTOM_PROFILE_UPSELL,
        title: l.intl.string(l.t.BbsMm5),
        body: E,
        glowUp: E,
        onSecondaryClick: () => {
            n(), (0, s.$r)(f.pC.BANNER);
        },
        secondaryCTA: l.intl.string(l.t.SpAQiY),
        analyticsSource: e,
        analyticsLocation: {
            section: p.jXE.USER_PROFILE,
            object: p.qAy.BUTTON_CTA
        },
        onClose: n,
        ...U
    });
}
