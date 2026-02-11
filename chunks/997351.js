"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(544028),
    l = n(967198),
    u = n(287809),
    c = n(255438),
    d = n(453771),
    _ = n(975571),
    f = n(927578),
    h = n(244975),
    p = n(788868),
    g = n(652215),
    E = n(985018),
    A = n(950503);
function I(e) {
    let { onClose: t, handleLearnMore: n, ...I } = e,
        T = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        y = (0, a.bG)([o.A], () => o.A.theme),
        S = (0, a.bG)([l.A], () => l.A.getGuildId()),
        v = y === g.NJ8.LIGHT ? "light" : "dark",
        C = (0, r.jsx)("img", {
            className: A.Qw,
            alt: "File Upload Nitro Perk",
            src: `https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_${v}_v2.png`,
        }),
        b = i.useMemo(() => {
            let e = f.Ay.getUserMaxFileSize(T);
            return (0, c.Xq)(e / 1024, { useKibibytes: !0 });
        }, [T]),
        N = (0, d.Iu)({
            guildId: S,
            onClick: () => {
                window.open(_.A.getArticleURL(g.MVz.NITRO_FAQ), "_blank");
            },
        }),
        R = (0, r.jsx)("div", {
            className: A.rf,
            children: (0, r.jsx)(s.Text, { variant: "text-sm/medium", children: N }),
        });
    return (0, r.jsx)(h.A, {
        artElement: C,
        artURL: `https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_${v}_v2.png`,
        artContainerClassName: A.JS,
        enableArtBoxShadow: !1,
        type: p.e.UPLOAD_ERROR_UPSELL,
        title: E.intl.string(E.t["9C+41g"]),
        body: R,
        context: E.intl.formatToPlainString(E.t.q5fTZp, { maxSize: b }),
        glowUp: N,
        analyticsLocation: { section: g.JJy.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: p.pe.TIER_2,
        secondaryCTA: E.intl.string(E.t.ZnqyZ2),
        onSecondaryClick: n,
        showEnhancedUpsell: !0,
        ...I,
    });
}
