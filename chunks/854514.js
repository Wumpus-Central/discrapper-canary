n.d(t, { Ae: () => x, Ay: () => b, Hk: () => y });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    I = n(729168),
    f = n(7832),
    C = n(654487),
    T = n(985018),
    N = n(684027),
    S = n(311401);
function x() {
    return (0, i.jsx)("div", { className: N.Np });
}
function v(e) {
    let { heroImage: t, heroVideo: n } = e,
        l = r.useRef(null);
    (0, E.A)(l, C.rE.QUEST_HOME_DESKTOP);
    let s = r.useMemo(() => (null != n ? (0, h.WV)(n) : null) ?? t, [n, t]);
    return null == n
        ? (0, i.jsxs)("div", {
              className: N.Tv,
              children: [
                  (0, i.jsx)(x, {}),
                  (0, i.jsx)("div", {
                      className: N.LO,
                      children: (0, i.jsx)("img", { className: N.LY, src: t, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: a()(N.LO, N.jx, N.hw),
                      children: (0, i.jsx)("img", { className: N.LY, src: t, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: a()(N.LO, N.jx, N.Co),
                      children: (0, i.jsx)("img", { className: N.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: N.Tv,
              children: [
                  (0, i.jsx)(x, {}),
                  (0, i.jsx)("div", {
                      className: N.LO,
                      children: (0, i.jsx)(g.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
                          imageAsset: {
                              alt: "",
                              className: N.LY,
                              asset: { url: s, mimetype: (0, h.vm)(s), isAnimated: !1 },
                              assetId: s,
                          },
                          videoAsset: {
                              alt: "",
                              className: N.LY,
                              asset: { url: n, mimetype: (0, h.vm)(n), isAnimated: !0 },
                              assetId: n,
                          },
                      }),
                  }),
              ],
          });
}
function b(e) {
    let { hero: t, onQuestCtaClick: n } = e,
        l = (0, o.bG)([u.A], () => u.A.quests),
        { dismissQuestHomeHeroContent: a } = (0, f.I)();
    r.useEffect(() => {
        a();
    }, [a]);
    let h = r.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, i.jsx)(p.R, {
        adContentId: t.id,
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
                        null != t.sponsorImage && (0, i.jsx)("img", { src: t.sponsorImage, alt: "", className: N.wm }),
                        (0, i.jsx)(d.Text, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            className: N.yu,
                            children: T.intl.string(T.t.OJjFi5),
                        }),
                    ],
                }),
                title: t.labelTitle,
                subtitle: t.labelSubtitle,
                buttons: (0, i.jsxs)(d.ButtonGroup, {
                    children: [
                        (0, i.jsx)(d.Button, {
                            onClick: () => {
                                (0, c.A)(t.cta.url),
                                    (0, _.vK)({
                                        adContentId: t.id,
                                        adCreativeType: s.p.QUEST_HOME_HERO,
                                        questContent: A.uF.QUEST_HOME_HERO,
                                        questContentCTA: m.Cy.OPEN_GAME_LINK,
                                        sourceQuestContent: A.uF.QUEST_HOME_HERO,
                                    });
                            },
                            size: "md",
                            text: t.cta.buttonLabel,
                            variant: "overlay-primary",
                        }),
                        null != h &&
                            (0, i.jsx)(d.Button, {
                                onClick: () => {
                                    n?.(h),
                                        (0, _.vK)({
                                            adContentId: t.id,
                                            adCreativeType: s.p.QUEST_HOME_HERO,
                                            questContent: A.uF.QUEST_HOME_HERO,
                                            questContentCTA: m.Cy.VIEW_QUESTS,
                                            sourceQuestContent: A.uF.QUEST_HOME_HERO,
                                        });
                                },
                                size: "md",
                                text: T.intl.string(T.t["th2+0j"]),
                                variant: "color-mix",
                            }),
                    ],
                }),
                background:
                    null != t.heroImage ? (0, i.jsx)(v, { heroImage: t.heroImage, heroVideo: t.heroVideo }) : null,
            }),
    });
}
function y() {
    return (0, i.jsx)("div", { className: a()(S.iE, S.FG, S.B3), children: (0, i.jsx)(d.y$y, {}) });
}
