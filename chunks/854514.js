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
    h = s(975807),
    x = s(859703),
    f = s(341915),
    b = s(579473),
    p = s(561844),
    A = s(590202),
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
    let i = l.useMemo(() => (null != s ? (0, b.WV)(s) : null) ?? t, [s, t]);
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
                              asset: { url: i, mimetype: (0, b.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: S.LY,
                              asset: { url: s, mimetype: (0, b.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function O(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        a = (0, o.bG)([x.A], () => x.A.quests),
        { dismissQuestHomeHeroContent: r } = (0, v.I)();
    l.useEffect(() => {
        r();
    }, [r]);
    let _ = l.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
    return (0, n.jsx)(E.R, {
        adContentId: t.id,
        adCreativeType: i.p.QUEST_HOME_HERO,
        questContent: f.uF.QUEST_HOME_HERO,
        sourceQuestContent: f.uF.QUEST_HOME_HERO,
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
                                (0, h.A)(t.cta.url),
                                    (0, p.vK)({
                                        adContentId: t.id,
                                        adCreativeType: i.p.QUEST_HOME_HERO,
                                        questContent: f.uF.QUEST_HOME_HERO,
                                        questContentCTA: A.Cy.OPEN_GAME_LINK,
                                        sourceQuestContent: f.uF.QUEST_HOME_HERO,
                                    });
                            },
                            size: "md",
                            text: t.cta.buttonLabel,
                            variant: "overlay-primary",
                        }),
                        null != _ &&
                            (0, n.jsx)(m.$, {
                                onClick: () => {
                                    s?.(_),
                                        (0, p.vK)({
                                            adContentId: t.id,
                                            adCreativeType: i.p.QUEST_HOME_HERO,
                                            questContent: f.uF.QUEST_HOME_HERO,
                                            questContentCTA: A.Cy.VIEW_QUESTS,
                                            sourceQuestContent: f.uF.QUEST_HOME_HERO,
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
