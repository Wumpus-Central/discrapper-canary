n.d(t, { Ae: () => x, Ay: () => b, Hk: () => y });
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
    g = n(415441),
    p = n(73473),
    E = n(139384),
    I = n(729168),
    f = n(7832),
    C = n(654487),
    T = n(985018),
    N = n(95115),
    S = n(14233);
function x() {
    return (0, i.jsx)("div", { className: N.Np });
}
function v(e) {
    let { heroImage: t, heroVideo: n } = e,
        a = l.useRef(null);
    (0, E.A)(a, C.rE.QUEST_HOME_DESKTOP);
    let s = l.useMemo(() => (null != n ? (0, h.WV)(n) : null) ?? t, [n, t]);
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
                      className: r()(N.LO, N.jx, N.hw),
                      children: (0, i.jsx)("img", { className: N.LY, src: t, alt: "" }),
                  }),
                  (0, i.jsx)("div", {
                      className: r()(N.LO, N.jx, N.Co),
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
                          assetRef: a,
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
        a = (0, o.bG)([u.A], () => u.A.quests),
        { dismissQuestHomeHeroContent: r } = (0, f.I)();
    l.useEffect(() => {
        r();
    }, [r]);
    let h = l.useMemo(() => t.questIds?.find((e) => a.has(e)), [a, t.questIds]);
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
    return (0, i.jsx)("div", { className: r()(S.iE, S.FG, S.B3), children: (0, i.jsx)(d.y$y, {}) });
}
