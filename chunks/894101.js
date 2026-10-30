c.d(e, { openUploadError: () => k, D: () => h });
var n = c(477900);
c(582128);
var i = c(189213),
    o = c(192308),
    a = c(523527),
    s = c(17928),
    l = c(964486),
    _ = c(793574),
    d = c(688810),
    L = c(763827),
    A = c(967198),
    r = c(174459),
    E = c(676279),
    p = c(453771),
    P = c(24482),
    u = c(10392),
    f = c(82498),
    I = c(831318),
    U = c(202541),
    O = c(652215),
    M = c(105292),
    b = c(206433),
    D = c(323454);
let R = function (t) {
    let { handleLearnMore: e, effectiveMaxSize: c, ...i } = t,
        o = (0, s.bG)([A.A], () => A.A.getGuildId()),
        { analyticsLocations: a } = (0, d.Ay)(_.A.FILE_UPLOAD_POPOUT, _.A.PREMIUM_UPSELL_MODAL);
    (0, l.Ay)(() => {
        (r.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
            type: U.e.LARGER_FILE_UPLOAD_UPSELL,
            location_section: O.JJy.FILE_UPLOAD_UPSELL_MODAL,
            location_stack: a,
            sku_id: (0, P.mH)(U.pe.TIER_2),
            voice_guild_id: L.A.getGuildId() ?? null,
        }),
            (0, u.sq)(O.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, f.uq)(U.e.LARGER_FILE_UPLOAD_UPSELL)));
    });
    let R = (0, p.Iu)({ guildId: o, maxSize: c }),
        S = (0, E.TM)() ? b.A : D.A;
    return (0, n.jsx)(d.f5, {
        value: a,
        children: (0, n.jsx)(I.A, {
            title: M.intl.string(M.t["9C+41g"]),
            subtitle: R,
            graphic: { type: "video", src: S, loop: !0, loopAt: 2.1 },
            secondaryCTA: M.intl.string(M.t.ZnqyZ2),
            onSecondaryClick: e,
            ...i,
        }),
    });
};
var S = c(976860);
function y(t) {
    let { title: e, help: c, showPremiumUpsell: o, effectiveMaxSize: s, transitionState: l, onClose: _ } = t;
    return o
        ? (0, n.jsx)(R, {
              transitionState: l,
              onClose: _,
              handleLearnMore: function () {
                  ((0, a.A)(),
                      _(),
                      r.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: O.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: O.ZSU.NAVIGATION_LINK,
                      }),
                      (0, S.pX)(O.BVt.APPLICATION_STORE));
              },
              effectiveMaxSize: s,
          })
        : (0, n.jsx)(i.a, {
              title: e,
              subtitle: c,
              transitionState: l,
              actions: [{ text: M.intl.string(M.t["NX+WJN"]), onClick: _, variant: "primary" }],
              onClose: _,
          });
}
let h = "UPLOAD_ERROR_MODAL_KEY";
function k(t) {
    (0, o.openModal)((e) => (0, n.jsx)(y, { ...e, ...t }), { modalKey: h });
}
