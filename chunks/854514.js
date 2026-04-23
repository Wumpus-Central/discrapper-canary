s.d(t, { Ae: () => y, Ay: () => Q, Hk: () => H });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(323889),
    o = s(311907),
    c = s(331322),
    u = s(834730),
    d = s(825484),
    _ = s(821609),
    m = s(289873),
    h = s(859703),
    x = s(341915),
    f = s(890687),
    E = s(579473),
    p = s(561844),
    g = s(590202),
    A = s(901406),
    C = s(415441),
    b = s(73473),
    j = s(139384),
    v = s(729168),
    N = s(7832),
    T = s(960488),
    S = s(654487),
    O = s(985018),
    L = s(95115),
    I = s(14233);
function y() {
    return (0, n.jsx)("div", { className: L.Np });
}
function R(e) {
    let { heroImage: t, heroVideo: s } = e,
        a = l.useRef(null);
    (0, j.A)(a, S.rE.QUEST_HOME_DESKTOP);
    let i = l.useMemo(() => (null != s ? (0, E.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: L.Tv,
              children: [
                  (0, n.jsx)(y, {}),
                  (0, n.jsx)("div", {
                      className: L.LO,
                      children: (0, n.jsx)("img", { className: L.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(L.LO, L.jx, L.hw),
                      children: (0, n.jsx)("img", { className: L.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(L.LO, L.jx, L.Co),
                      children: (0, n.jsx)("img", { className: L.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: L.Tv,
              children: [
                  (0, n.jsx)(y, {}),
                  (0, n.jsx)("div", {
                      className: L.LO,
                      children: (0, n.jsx)(C.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: a,
                          imageAsset: {
                              alt: "",
                              className: L.LY,
                              asset: { url: i, mimetype: (0, E.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: L.LY,
                              asset: { url: s, mimetype: (0, E.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function Q(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        a = (0, o.bG)([h.A], () => h.A.quests),
        { shelfQuests: r, isShelfEnabled: m } = (0, f.t9)(t),
        { dismissQuestHomeHeroContent: E } = (0, N.I)();
    l.useEffect(() => {
        E();
    }, [E]);
    let C = l.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(b.R, {
                adContentId: t.id,
                adCreativeType: i.p.QUEST_HOME_HERO,
                questContent: x.uF.QUEST_HOME_HERO,
                sourceQuestContent: x.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(v.A, {
                        ref: e,
                        topContent: (0, n.jsxs)(c.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: L.wm }),
                                (0, n.jsx)(u.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: L.yu,
                                    children: O.intl.string(O.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(d.e, {
                            children: [
                                (0, n.jsx)(_.$, {
                                    onClick: () => {
                                        (0, A._Q)(
                                            { adContentId: t.id, adCreativeType: i.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: x.uF.QUEST_HOME_HERO,
                                                ctaContent: g.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: x.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !m &&
                                    null != C &&
                                    (0, n.jsx)(_.$, {
                                        onClick: () => {
                                            s(C),
                                                (0, p.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: i.p.QUEST_HOME_HERO,
                                                    questContent: x.uF.QUEST_HOME_HERO,
                                                    questContentCTA: g.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: x.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: O.intl.string(O.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(R, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            m && (0, n.jsx)(T.A, { hero: t, shelfQuests: r, onQuestCtaClick: s }),
        ],
    });
}
function H() {
    return (0, n.jsx)("div", { className: r()(I.iE, I.FG, I.B3), children: (0, n.jsx)(m.y, {}) });
}
