s.d(t, { Ae: () => I, Ay: () => O, Hk: () => R });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(323889),
    o = s(311907),
    c = s(331322),
    u = s(834730),
    d = s(825484),
    m = s(821609),
    _ = s(289873),
    h = s(859703),
    x = s(341915),
    f = s(579473),
    b = s(561844),
    p = s(590202),
    A = s(901406),
    g = s(415441),
    E = s(73473),
    C = s(139384),
    j = s(729168),
    v = s(7832),
    N = s(654487),
    T = s(985018),
    S = s(95115),
    L = s(14233);
function I() {
    return (0, n.jsx)("div", { className: S.Np });
}
function y(e) {
    let { heroImage: t, heroVideo: s } = e,
        a = l.useRef(null);
    (0, C.A)(a, N.rE.QUEST_HOME_DESKTOP);
    let i = l.useMemo(() => (null != s ? (0, f.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, n.jsx)(I, {}),
                  (0, n.jsx)("div", {
                      className: S.LO,
                      children: (0, n.jsx)("img", { className: S.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(S.LO, S.jx, S.hw),
                      children: (0, n.jsx)("img", { className: S.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(S.LO, S.jx, S.Co),
                      children: (0, n.jsx)("img", { className: S.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, n.jsx)(I, {}),
                  (0, n.jsx)("div", {
                      className: S.LO,
                      children: (0, n.jsx)(g.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: a,
                          imageAsset: {
                              alt: "",
                              className: S.LY,
                              asset: { url: i, mimetype: (0, f.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: S.LY,
                              asset: { url: s, mimetype: (0, f.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function O(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        a = (0, o.bG)([h.A], () => h.A.quests),
        { dismissQuestHomeHeroContent: r } = (0, v.I)();
    l.useEffect(() => {
        r();
    }, [r]);
    let _ = l.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
    return (0, n.jsx)(E.R, {
        adContentId: t.id,
        adCreativeType: i.p.QUEST_HOME_HERO,
        questContent: x.uF.QUEST_HOME_HERO,
        sourceQuestContent: x.uF.QUEST_HOME_HERO,
        children: (e) =>
            (0, n.jsx)(j.A, {
                ref: e,
                topContent: (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "start",
                    children: [
                        null != t.sponsorImage && (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: S.wm }),
                        (0, n.jsx)(u.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            className: S.yu,
                            children: T.intl.string(T.t.OJjFi5),
                        }),
                    ],
                }),
                title: t.labelTitle,
                subtitle: t.labelSubtitle,
                buttons: (0, n.jsxs)(d.e, {
                    children: [
                        (0, n.jsx)(m.$, {
                            onClick: () => {
                                (0, A._Q)(
                                    { adContentId: t.id, adCreativeType: i.p.QUEST_HOME_HERO, cta: t.cta },
                                    {
                                        content: x.uF.QUEST_HOME_HERO,
                                        ctaContent: p.Cy.OPEN_GAME_LINK,
                                        sourceQuestContent: x.uF.QUEST_HOME_HERO,
                                    },
                                );
                            },
                            size: "md",
                            text: t.cta.buttonLabel,
                            variant: "overlay-primary",
                        }),
                        null != _ &&
                            (0, n.jsx)(m.$, {
                                onClick: () => {
                                    s?.(_),
                                        (0, b.vK)({
                                            adContentId: t.id,
                                            adCreativeType: i.p.QUEST_HOME_HERO,
                                            questContent: x.uF.QUEST_HOME_HERO,
                                            questContentCTA: p.Cy.VIEW_QUESTS,
                                            sourceQuestContent: x.uF.QUEST_HOME_HERO,
                                        });
                                },
                                size: "md",
                                text: T.intl.string(T.t["th2+0j"]),
                                variant: "color-mix",
                            }),
                    ],
                }),
                background:
                    null != t.heroImage ? (0, n.jsx)(y, { heroImage: t.heroImage, heroVideo: t.heroVideo }) : null,
            }),
    });
}
function R() {
    return (0, n.jsx)("div", { className: r()(L.iE, L.FG, L.B3), children: (0, n.jsx)(_.y, {}) });
}
