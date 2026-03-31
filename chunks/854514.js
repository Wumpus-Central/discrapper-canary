n.d(t, { Ae: () => v, Ay: () => y, Hk: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(323889),
    o = n(311907),
    d = n(397927),
    c = n(975807),
    u = n(859703),
    A = n(341915),
    h = n(579473),
    _ = n(561844),
    m = n(590202),
    p = n(415441),
    g = n(73473),
    E = n(139384),
    I = n(729168),
    f = n(7832),
    C = n(654487),
    T = n(49999),
    N = n(985018),
    S = n(225130),
    x = n(192164);
function v() {
    return (0, i.jsx)("div", { className: S.Np });
}
function b(e) {
    let { assetImage: t, assetVideo: n } = e,
        a = l.useRef(null);
    (0, E.A)(a, C.rE.QUEST_HOME_DESKTOP);
    let s = l.useMemo(() => (null != n ? (0, h.WV)(n.url) : null) ?? t.url, [n, t]);
    return null == n
        ? (0, i.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, i.jsx)(v, {}),
                  (0, i.jsx)("div", {
                      className: S.LO,
                      children: (0, i.jsx)("img", { className: S.LY, src: t.url, alt: t.altText }),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(S.LO, S.jx, S.hw),
                      children: (0, i.jsx)("img", { className: S.LY, src: t.url, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(S.LO, S.jx, S.Co),
                      children: (0, i.jsx)("img", { className: S.LY, src: t.url, alt: "" }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, i.jsx)(v, {}),
                  (0, i.jsx)("div", {
                      className: S.LO,
                      children: (0, i.jsx)(p.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: a,
                          imageAsset: {
                              alt: n.altText,
                              className: S.LY,
                              asset: { url: s, mimetype: (0, h.vm)(s), isAnimated: !1 },
                              assetId: s,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: S.LY,
                              asset: { url: n.url, mimetype: (0, h.vm)(n.url), isAnimated: !0 },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}
function y(e) {
    let { config: t, onQuestCtaClick: n } = e,
        a = (0, o.bG)([u.A], () => u.A.quests),
        { dismissQuestHomeHeroContent: r } = (0, f.I)();
    l.useEffect(() => {
        r(T.i.INDIRECT_ACTION);
    }, [r]);
    let h = l.useMemo(() => t.ctaQuests.find((e) => a.has(e.questId)), [a, t.ctaQuests]);
    return (0, i.jsx)(g.R, {
        adContentId: t.campaignId,
        adCreativeType: s.p.QUEST_HOME_HERO,
        questContent: A.uF.QUEST_HOME_HERO,
        sourceQuestContent: A.uF.QUEST_HOME_HERO,
        children: (e) =>
            (0, i.jsx)(I.A, {
                ref: e,
                topContent: (0, i.jsxs)(d.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "start",
                    children: [
                        (0, i.jsx)("img", {
                            src: t.assetSponsorImage.url,
                            alt: t.assetSponsorImage.altText,
                            className: S.wm,
                        }),
                        (0, i.jsx)(d.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            className: S.yu,
                            children: N.intl.string(N.t.OJjFi5),
                        }),
                    ],
                }),
                title: t.labelTitle,
                subtitle: t.labelSubtitle,
                buttons: (0, i.jsxs)(d.ButtonGroup, {
                    children: [
                        (0, i.jsx)(d.Button, {
                            onClick: () => {
                                (0, c.A)(t.ctaSponsorUrl.url),
                                    (0, _.vK)({
                                        adContentId: t.campaignId,
                                        adCreativeType: s.p.QUEST_HOME_HERO,
                                        questContent: A.uF.QUEST_HOME_HERO,
                                        questContentCTA: m.Cy.OPEN_GAME_LINK,
                                        sourceQuestContent: A.uF.QUEST_HOME_HERO,
                                    });
                            },
                            size: "md",
                            text: t.ctaSponsorUrl.title,
                            variant: "overlay-primary",
                        }),
                        null != h &&
                            (0, i.jsx)(d.Button, {
                                onClick: () => {
                                    n?.(h.questId),
                                        (0, _.vK)({
                                            adContentId: t.campaignId,
                                            adCreativeType: s.p.QUEST_HOME_HERO,
                                            questContent: A.uF.QUEST_HOME_HERO,
                                            questContentCTA: m.Cy.VIEW_QUESTS,
                                            sourceQuestContent: A.uF.QUEST_HOME_HERO,
                                        });
                                },
                                size: "md",
                                text: h.title,
                                variant: "color-mix",
                            }),
                    ],
                }),
                background: (0, i.jsx)(b, { assetImage: t.assetHeroImage, assetVideo: t.assetHeroVideo }),
            }),
    });
}
function O() {
    return (0, i.jsx)("div", { className: r()(x.iE, x.FG, x.B3), children: (0, i.jsx)(d.y$y, {}) });
}
