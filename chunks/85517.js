n.d(t, {
    Z: () => j,
    o: () => P,
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(828700),
    o = n(772848),
    c = n(442837),
    u = n(481060),
    d = n(393903),
    p = n(410030),
    f = n(782568),
    g = n(825102),
    h = n(626135),
    m = n(617136),
    b = n(616022),
    _ = n(49436),
    E = n(110560),
    O = n(324805),
    v = n(981631),
    y = n(231338),
    I = n(388032),
    C = n(550601);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { asset: t } = e;
    if ("image" === t.assetType)
        return (0, r.jsxs)("div", {
            className: C.heroImageBackground,
            children: [
                (0, r.jsx)("div", { className: C.backgroundOverlay }),
                (0, r.jsx)("div", {
                    className: C.heroImage,
                    children: (0, r.jsx)("img", {
                        className: C.image,
                        src: t.url,
                        alt: t.altText,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(C.heroImage, C.heroImageBlurred, C.heroImageBlurredB),
                    children: (0, r.jsx)("img", {
                        className: C.image,
                        src: t.url,
                        alt: "",
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(C.heroImage, C.heroImageBlurred, C.heroImageBlurredA),
                    children: (0, r.jsx)("img", {
                        className: C.image,
                        src: t.url,
                        alt: "",
                    }),
                }),
            ],
        });
}
function j(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.TH)(),
        j = (0, s.k6)(),
        { enabled: P } = (0, g.W)({ location: O.dr.QUEST_HOME_DESKTOP }),
        x = (0, p.ZP)(),
        [A, Z] = i.useState("display-lg"),
        w = i.useCallback((e) => {
            e.contentRect.width < 500 ? Z("display-md") : Z("display-lg");
        }, []),
        L = (0, d.y)(w, [], { fireOnMount: !0 }),
        R = (0, c.e7)([b.Z], () => b.Z.quests);
    return (
        i.useEffect(() => {
            h.default.track(
                v.rMx.QUEST_CONTENT_VIEWED,
                T(S({}, (0, m.mH)(_.jn.QUEST_HOME_TAKEOVER)), {
                    quest_id: t.campaignId,
                    is_targeted: !1,
                }),
            );
        }, [t.campaignId]),
        (0, r.jsx)("div", {
            className: a()(C.wrapper, {
                "theme-dark": x === y.BR.LIGHT,
                [C.wrapperWithOldDiscoveryHeader]: !P,
            }),
            ref: L,
            children: (0, r.jsxs)("div", {
                className: C.contentWrapper,
                children: [
                    (0, r.jsxs)(u.Kqy, {
                        className: C.content,
                        direction: "vertical",
                        justify: "space-between",
                        children: [
                            (0, r.jsxs)(u.Kqy, {
                                direction: "horizontal",
                                justify: "space-between",
                                align: "start",
                                children: [
                                    (0, r.jsx)("img", {
                                        src: t.assetSponsorImage.url,
                                        alt: t.assetSponsorImage.altText,
                                        className: C.logo,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        color: "text-strong",
                                        variant: "text-sm/normal",
                                        className: C.sponsoredTag,
                                        children: I.intl.string(I.t.OJjFi5),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(u.Kqy, {
                                className: C.contentBody,
                                gap: 16,
                                children: [
                                    (0, r.jsxs)(u.Kqy, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(u.Heading, {
                                                color: "text-strong",
                                                variant: A,
                                                className: C.title,
                                                children: t.labelTitle,
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                color: "text-strong",
                                                variant: "text-md/normal",
                                                className: C.subtitle,
                                                children: t.labelSubtitle,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(u.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(u.Button, {
                                                onClick: () => {
                                                    (0, f.Z)(t.ctaSponsorUrl.url),
                                                        h.default.track(
                                                            v.rMx.QUEST_CONTENT_CLICKED,
                                                            S(
                                                                {
                                                                    quest_id: t.campaignId,
                                                                    cta_name: m.jZ.OPEN_GAME_LINK,
                                                                    click_id: (0, o.Z)(),
                                                                    is_targeted: !1,
                                                                },
                                                                (0, m.mH)(_.jn.QUEST_HOME_TAKEOVER),
                                                            ),
                                                        );
                                                },
                                                size: "md",
                                                text: t.ctaSponsorUrl.title,
                                                variant: "overlay-primary",
                                            }),
                                            t.ctaQuests.map((e, i) =>
                                                R.has(e.questId)
                                                    ? (0, r.jsx)(
                                                          u.Button,
                                                          {
                                                              onClick: () => {
                                                                  j.replace(T(S({}, l), { hash: void 0 })),
                                                                      null == n || n(),
                                                                      window.requestIdleCallback(() => {
                                                                          (0, E.navigateToQuestHome)({
                                                                              questId: e.questId,
                                                                          });
                                                                      }),
                                                                      h.default.track(
                                                                          v.rMx.QUEST_CONTENT_CLICKED,
                                                                          S(
                                                                              {
                                                                                  quest_id: t.campaignId,
                                                                                  cta_name: m.jZ.LEARN_MORE,
                                                                                  click_id: (0, o.Z)(),
                                                                                  is_targeted: !1,
                                                                              },
                                                                              (0, m.mH)(_.jn.QUEST_HOME_TAKEOVER),
                                                                          ),
                                                                      );
                                                              },
                                                              size: "md",
                                                              text: e.title,
                                                              variant: "color-mix",
                                                          },
                                                          i,
                                                      )
                                                    : null,
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(N, { asset: t.assetHeroImage }),
                ],
            }),
        })
    );
}
function P() {
    return (0, r.jsx)("div", {
        className: a()(C.wrapper, C.contentWrapper, C.contentWrapperLoading),
        children: (0, r.jsx)(u.$jN, {}),
    });
}
