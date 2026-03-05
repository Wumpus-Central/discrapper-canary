"use strict";
n.d(t, { default: () => A });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(544028),
    l = n(967198),
    u = n(287809),
    c = n(255438),
    d = n(453771),
    _ = n(975571),
    f = n(927578),
    p = n(244975),
    h = n(788868),
    m = n(652215),
    E = n(985018),
    g = n(950503);
function A(e) {
    let { onClose: t, handleLearnMore: n, ...A } = e,
        I = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        T = (0, s.bG)([o.A], () => o.A.theme),
        S = (0, s.bG)([l.A], () => l.A.getGuildId()),
        y = T === m.NJ8.LIGHT ? "light" : "dark",
        v = (0, r.jsx)("img", {
            className: g.Qw,
            alt: "File Upload Nitro Perk",
            src: `https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_${y}_v2.png`,
        }),
        N = i.useMemo(() => {
            let e = f.Ay.getUserMaxFileSize(I);
            return (0, c.Xq)(e / 1024, { useKibibytes: !0 });
        }, [I]),
        C = (0, d.Iu)({
            guildId: S,
            onClick: () => {
                window.open(_.A.getArticleURL(m.MVz.NITRO_FAQ), "_blank");
            },
        }),
        R = (0, r.jsx)("div", {
            className: g.rf,
            children: (0, r.jsx)(a.Text, { variant: "text-sm/medium", children: C }),
        });
    return (0, r.jsx)(p.A, {
        artElement: v,
        artURL: `https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_${y}_v2.png`,
        artContainerClassName: g.JS,
        enableArtBoxShadow: !1,
        type: h.e.UPLOAD_ERROR_UPSELL,
        title: E.intl.string(E.t["9C+41g"]),
        body: R,
        context: E.intl.formatToPlainString(E.t.q5fTZp, { maxSize: N }),
        glowUp: C,
        analyticsLocation: { section: m.JJy.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: h.pe.TIER_2,
        secondaryCTA: E.intl.string(E.t.ZnqyZ2),
        onSecondaryClick: n,
        showEnhancedUpsell: !0,
        ...A,
    });
}
