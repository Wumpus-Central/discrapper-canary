n.d(t, { A: () => y, H: () => b });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(323889),
    o = n(311907),
    d = n(397927),
    c = n(975807),
    u = n(859703),
    A = n(341915),
    h = n(579473),
    _ = n(561844),
    m = n(590202),
    g = n(415441),
    p = n(73473),
    E = n(139384),
    I = n(506787),
    f = n(7832),
    C = n(654487),
    T = n(49999),
    N = n(985018),
    S = n(437176),
    x = n(695074);
function v(e) {
    let { assetImage: t, assetVideo: n } = e,
        l = a.useRef(null);
    (0, E.A)(l, C.rE.QUEST_HOME_DESKTOP);
    let s = a.useMemo(() => (null != n ? (0, h.WV)(n.url) : null) ?? t.url, [n, t]);
    return null == n
        ? (0, i.jsxs)("div", {
              className: S.Tv,
              children: [
                  (0, i.jsx)("div", { className: S.Np }),
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
                  (0, i.jsx)("div", { className: S.Np }),
                  (0, i.jsx)("div", {
                      className: S.LO,
                      children: (0, i.jsx)(g.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
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
        l = (0, o.bG)([u.A], () => u.A.quests),
        { dismissQuestHomeHeroContent: r } = (0, f.I)();
    return (
        a.useEffect(() => {
            r(T.i.INDIRECT_ACTION);
        }, [r]),
        (0, i.jsx)(p.R, {
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
                            t.ctaQuests.map((e, a) =>
                                l.has(e.questId)
                                    ? (0, i.jsx)(
                                          d.Button,
                                          {
                                              onClick: () => {
                                                  n?.(e.questId),
                                                      (0, _.vK)({
                                                          adContentId: t.campaignId,
                                                          adCreativeType: s.p.QUEST_HOME_HERO,
                                                          questContent: A.uF.QUEST_HOME_HERO,
                                                          questContentCTA: m.Cy.VIEW_QUESTS,
                                                          sourceQuestContent: A.uF.QUEST_HOME_HERO,
                                                      });
                                              },
                                              size: "md",
                                              text: e.title,
                                              variant: "color-mix",
                                          },
                                          a,
                                      )
                                    : null,
                            ),
                        ],
                    }),
                    background: (0, i.jsx)(v, { assetImage: t.assetHeroImage, assetVideo: t.assetHeroVideo }),
                }),
        })
    );
}
function b() {
    return (0, i.jsx)("div", { className: r()(x.iE, x.FG, x.B3), children: (0, i.jsx)(d.y$y, {}) });
}
