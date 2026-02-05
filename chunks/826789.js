a.d(e, { default: () => _ });
var n = a(627968);
a(64700);
var o = a(192308),
    s = a(523527),
    c = a(170887),
    l = a(244975),
    r = a(182681),
    i = a(976860),
    d = a(954571),
    A = a(652215),
    p = a(788868),
    b = a(985018),
    S = a(976385);
function _(t) {
    let { onClose: e, analyticsSource: a, ..._ } = t,
        C = (0, n.jsx)("img", {
            className: S.Qw,
            alt: "HD Streaming Nitro Perk",
            src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
        });
    function f() {
        (0, s.A)(),
            (0, o.closeAllModals)(),
            d.default.track(A.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: A.JJy.STREAM_UPSELL_MODAL,
                location_object: A.ZSU.NAVIGATION_LINK,
            }),
            (0, i.pX)(A.BVt.APPLICATION_STORE);
    }
    let h = b.intl.string(b.t.ewxv3J),
        m = b.intl.string(b.t.qlsCDB);
    return (0, c.A)({ location: "StreamUpsellModal" })
        ? (0, n.jsx)(r.A, { onClose: e, handleLearnMore: f, ..._ })
        : (0, n.jsx)(l.A, {
              title: h,
              glowUp: m,
              body: m,
              artElement: C,
              artContainerClassName: S.JS,
              type: p.e.STREAM_QUALITY_UPSELL,
              analyticsLocation: { section: A.JJy.STREAM_UPSELL_MODAL, object: A.ZSU.BUTTON_CTA },
              analyticsSource: a,
              onClose: e,
              onSubscribeClick: s.A,
              secondaryCTA: b.intl.string(b.t.ZnqyZ2),
              onSecondaryClick: f,
              showEnhancedUpsell: !0,
              enableArtBoxShadow: !1,
              headerClassName: S.wx,
              ..._,
          });
}
