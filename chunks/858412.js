var i = n(47671),
    r = n(413599),
    a = n(859034),
    s = n(287809),
    l = n(773527),
    o = n(211824),
    d = n(185928);
function c() {
    return [d.Fc.LIGHT, d.Fc.DARK].filter((e) => (0, l.oB)(r.A.getSyncedClientTheme(e)?.backgroundGradientPresetId));
}
n.d(
    t,
    {},
    {
        U0: c,
        Yx: function () {
            return (0, l.Jy)(s.default.getCurrentUser()?.displayNameStyles);
        },
        qi: function () {
            return (0, a.v)()
                ? c().length > 0
                : ((0, l.oB)(i.A.gradientPreset?.id) && !i.A.isUpsellGradientPreview) ||
                      i.A.hasHiddenHexagonCampaignPreset;
        },
        zu: function (e) {
            let { isClientThemeApplied: t, displayNameStyles: n, currentAppIconId: i } = e,
                r = { [o.vB.CLIENT_THEME]: t, [o.vB.DISPLAY_NAME_STYLE]: (0, l.Jy)(n), [o.vB.APP_ICON]: (0, l.z9)(i) };
            return Object.values(o.vB).filter((e) => r[e]);
        },
    },
);
