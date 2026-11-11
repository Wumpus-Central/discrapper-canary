var t = n(582128),
    i = n(855986),
    d = n(475470),
    E = n(516855),
    a = n(506988),
    S = n(471865),
    f = n(332560),
    r = n(145359),
    _ = n(739776),
    o = n(211824);
function c() {
    return (0, i.bG)([_.A], () => _.A.hasVisitedDisplayNameStyles);
}
n.d(
    s,
    {},
    {
        EW: function (e) {
            let s = (0, r.Lz)(o.vB.DISPLAY_NAME_STYLE, e) === o.S9.SELECTABLE,
                n = c();
            t.useEffect(() => {
                s && !n && (0, S.Tf)();
            }, [s, n]);
        },
        hh: function (e) {
            let { location: s, displayNameStyles: n, isTryItOut: t, disabled: i = !1 } = e,
                d = (0, r.Lz)(o.vB.DISPLAY_NAME_STYLE, s) === o.S9.SELECTABLE,
                E = !i && d && !0 !== t && n?.fontId !== o.vl;
            (0, f.UF)(a.uF.DISPLAY_NAME_STYLES_SETTINGS, f.rl.PROFILE_ROW_PROMO, E);
            let S = c();
            return { showCampaignPromo: E, showCampaignNewBadge: E && !S };
        },
        wP: function (e) {
            let s = (0, r.Lz)(o.vB.DISPLAY_NAME_STYLE, e) === o.S9.SELECTABLE,
                n = (0, i.bG)([E.A], () => E.A.getSeenFonts().has(o.vl));
            return {
                showCampaignFontBadge: s && !n,
                dismissCampaignFontBadge: t.useCallback(() => {
                    (0, d.Gs)(o.vl);
                }, []),
            };
        },
    },
);
