n.d(t, { A: () => O, H: () => L });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(873263),
    o = n(323889),
    d = n(311907),
    c = n(397927),
    u = n(770178),
    A = n(975807),
    h = n(151252),
    _ = n(859703),
    m = n(341915),
    p = n(579473),
    g = n(561844),
    E = n(590202),
    I = n(415441),
    f = n(73473),
    C = n(545986),
    T = n(139384),
    N = n(7832),
    S = n(654487),
    x = n(49999),
    v = n(985018),
    y = n(437176);
function b(e) {
    let { assetImage: t, assetVideo: n } = e,
        l = r.useRef(null);
    (0, T.A)(l, S.rE.QUEST_HOME_DESKTOP);
    let s = r.useMemo(() => (null != n ? (0, p.WV)(n.url) : null) ?? t.url, [n, t]);
    return null == n
        ? (0, i.jsxs)("div", {
              className: y.Tv,
              children: [
                  (0, i.jsx)("div", { className: y.Np }),
                  (0, i.jsx)("div", {
                      className: y.LO,
                      children: (0, i.jsx)("img", { className: y.LY, src: t.url, alt: t.altText }),
                  }),
                  (0, i.jsx)("div", {
                      className: a()(y.LO, y.jx, y.hw),
                      children: (0, i.jsx)("img", { className: y.LY, src: t.url, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: a()(y.LO, y.jx, y.Co),
                      children: (0, i.jsx)("img", { className: y.LY, src: t.url, alt: "" }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: y.Tv,
              children: [
                  (0, i.jsx)("div", { className: y.Np }),
                  (0, i.jsx)("div", {
                      className: y.LO,
                      children: (0, i.jsx)(I.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
                          imageAsset: {
                              alt: n.altText,
                              className: y.LY,
                              asset: { url: s, mimetype: (0, p.vm)(s), isAnimated: !1 },
                              assetId: s,
                          },
                          videoAsset: {
                              alt: n.altText,
                              className: y.LY,
                              asset: { url: n.url, mimetype: (0, p.vm)(n.url), isAnimated: !0 },
                              assetId: n.url,
                          },
                      }),
                  }),
              ],
          });
}
function O(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.zy)(),
        p = (0, s.W6)(),
        { enabled: I } = (0, h.Z)({ location: S.rE.QUEST_HOME_DESKTOP }),
        [T, O] = r.useState("display-lg"),
        L = r.useCallback((e) => {
            e.contentRect.width < 500 ? O("display-md") : O("display-lg");
        }, []),
        R = (0, u.w)(L, [], { fireOnMount: !0 }),
        P = (0, d.bG)([_.A], () => _.A.quests),
        { dismissQuestHomeHeroContent: j } = (0, N.I)();
    return (
        r.useEffect(() => {
            j(x.i.INDIRECT_ACTION);
        }, [j]),
        (0, i.jsx)(f.R, {
            adContentId: t.campaignId,
            adCreativeType: o.p.QUEST_HOME_HERO,
            questContent: m.uF.QUEST_HOME_HERO,
            sourceQuestContent: m.uF.QUEST_HOME_HERO,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(y.iE, "theme-midnight", { [y.Qx]: !I }),
                    ref: (t) => {
                        (R.current = t), (e.current = t);
                    },
                    children: (0, i.jsxs)("div", {
                        className: y.FG,
                        children: [
                            (0, i.jsxs)(c.BJc, {
                                className: y.Qs,
                                direction: "vertical",
                                justify: "space-between",
                                children: [
                                    (0, i.jsxs)(c.BJc, {
                                        direction: "horizontal",
                                        justify: "space-between",
                                        align: "start",
                                        children: [
                                            (0, i.jsx)("img", {
                                                src: t.assetSponsorImage.url,
                                                alt: t.assetSponsorImage.altText,
                                                className: y.wm,
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                className: y.yu,
                                                children: v.intl.string(v.t.OJjFi5),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.BJc, {
                                        className: y.yp,
                                        gap: 16,
                                        children: [
                                            (0, i.jsxs)(c.BJc, {
                                                gap: 8,
                                                children: [
                                                    (0, i.jsx)(c.Heading, {
                                                        color: "text-strong",
                                                        variant: T,
                                                        className: y.DD,
                                                        children: t.labelTitle,
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        color: "text-strong",
                                                        variant: "text-md/normal",
                                                        className: y.VA,
                                                        children: t.labelSubtitle,
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsxs)(c.ButtonGroup, {
                                                children: [
                                                    (0, i.jsx)(c.Button, {
                                                        onClick: () => {
                                                            (0, A.A)(t.ctaSponsorUrl.url),
                                                                (0, g.vK)({
                                                                    adContentId: t.campaignId,
                                                                    adCreativeType: o.p.QUEST_HOME_HERO,
                                                                    questContent: m.uF.QUEST_HOME_HERO,
                                                                    questContentCTA: E.Cy.OPEN_GAME_LINK,
                                                                    sourceQuestContent: m.uF.QUEST_HOME_HERO,
                                                                });
                                                        },
                                                        size: "md",
                                                        text: t.ctaSponsorUrl.title,
                                                        variant: "overlay-primary",
                                                    }),
                                                    t.ctaQuests.map((e, r) =>
                                                        P.has(e.questId)
                                                            ? (0, i.jsx)(
                                                                  c.Button,
                                                                  {
                                                                      onClick: () => {
                                                                          p.replace({ ...l, hash: void 0 }),
                                                                              n?.(),
                                                                              window.requestIdleCallback(() => {
                                                                                  (0, C.navigateToQuestHome)({
                                                                                      questId: e.questId,
                                                                                  });
                                                                              }),
                                                                              (0, g.vK)({
                                                                                  adContentId: t.campaignId,
                                                                                  adCreativeType: o.p.QUEST_HOME_HERO,
                                                                                  questContent: m.uF.QUEST_HOME_HERO,
                                                                                  questContentCTA: E.Cy.VIEW_QUESTS,
                                                                                  sourceQuestContent:
                                                                                      m.uF.QUEST_HOME_HERO,
                                                                              });
                                                                      },
                                                                      size: "md",
                                                                      text: e.title,
                                                                      variant: "color-mix",
                                                                  },
                                                                  r,
                                                              )
                                                            : null,
                                                    ),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(b, { assetImage: t.assetHeroImage, assetVideo: t.assetHeroVideo }),
                        ],
                    }),
                }),
        })
    );
}
function L() {
    return (0, i.jsx)("div", { className: a()(y.iE, y.FG, y.B3), children: (0, i.jsx)(c.y$y, {}) });
}
