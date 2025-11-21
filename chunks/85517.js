n.d(t, {
    Z: () => T,
    o: () => N,
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
    c = n(481060),
    u = n(393903),
    d = n(410030),
    p = n(782568),
    f = n(825102),
    h = n(626135),
    g = n(617136),
    m = n(49436),
    _ = n(110560),
    b = n(324805),
    E = n(981631),
    O = n(231338),
    y = n(388032),
    v = n(810516);
function I(e) {
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
function C(e, t) {
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
function S(e) {
    let { asset: t } = e;
    if ("image" === t.assetType)
        return (0, r.jsxs)("div", {
            className: v.heroImageBackground,
            children: [
                (0, r.jsx)("div", { className: v.backgroundOverlay }),
                (0, r.jsx)("div", {
                    className: v.heroImage,
                    children: (0, r.jsx)("img", {
                        className: v.image,
                        src: t.url,
                        alt: t.altText,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(v.heroImage, v.heroImageBlurred, v.heroImageBlurredB),
                    children: (0, r.jsx)("img", {
                        className: v.image,
                        src: t.url,
                        alt: "",
                    }),
                }),
                (0, r.jsx)("div", {
                    className: a()(v.heroImage, v.heroImageBlurred, v.heroImageBlurredA),
                    children: (0, r.jsx)("img", {
                        className: v.image,
                        src: t.url,
                        alt: "",
                    }),
                }),
            ],
        });
}
function T(e) {
    let { config: t, onQuestCtaClick: n } = e,
        l = (0, s.TH)(),
        T = (0, s.k6)(),
        { enabled: N } = (0, f.WX)({ location: b.dr.QUEST_HOME_DESKTOP }),
        j = (0, d.ZP)(),
        [P, x] = i.useState("display-lg"),
        A = i.useCallback((e) => {
            e.contentRect.width < 500 ? x("display-md") : x("display-lg");
        }, []),
        Z = (0, u.y)(A, [], { fireOnMount: !0 });
    return (
        i.useEffect(() => {
            h.default.track(
                E.rMx.QUEST_CONTENT_VIEWED,
                C(I({}, (0, g.mH)(m.jn.QUEST_HOME_TAKEOVER)), {
                    quest_id: t.id,
                    is_targeted: !1,
                }),
            );
        }, [t.id]),
        (0, r.jsx)("div", {
            className: a()(v.wrapper, {
                "theme-dark": j === O.BR.LIGHT,
                [v.wrapperWithOldDiscoveryHeader]: !N,
            }),
            ref: Z,
            children: (0, r.jsxs)("div", {
                className: v.contentWrapper,
                children: [
                    (0, r.jsxs)(c.Kqy, {
                        className: v.content,
                        direction: "vertical",
                        justify: "space-between",
                        children: [
                            (0, r.jsxs)(c.Kqy, {
                                direction: "horizontal",
                                justify: "space-between",
                                align: "start",
                                children: [
                                    (0, r.jsx)("img", {
                                        src: t.assetSponsorImage.url,
                                        alt: t.assetSponsorImage.altText,
                                        className: v.logo,
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: "text-secondary",
                                        variant: "text-sm/semibold",
                                        className: v.sponsoredTag,
                                        children: y.intl.string(y.t.OJjFi5),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(c.Kqy, {
                                className: v.contentBody,
                                gap: 16,
                                children: [
                                    (0, r.jsxs)(c.Kqy, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                color: "header-primary",
                                                variant: P,
                                                className: v.title,
                                                children: t.labelTitle,
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                color: "text-primary",
                                                variant: "text-md/normal",
                                                className: v.subtitle,
                                                children: t.labelSubtitle,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(c.ButtonGroup, {
                                        children: [
                                            (0, r.jsx)(c.Button, {
                                                onClick: () => {
                                                    (0, p.Z)(t.ctaSponsorUrl.url),
                                                        h.default.track(
                                                            E.rMx.QUEST_CONTENT_CLICKED,
                                                            I(
                                                                {
                                                                    quest_id: t.id,
                                                                    cta_name: g.jZ.OPEN_GAME_LINK,
                                                                    click_id: (0, o.Z)(),
                                                                    is_targeted: !1,
                                                                },
                                                                (0, g.mH)(m.jn.QUEST_HOME_TAKEOVER),
                                                            ),
                                                        );
                                                },
                                                size: "md",
                                                text: t.ctaSponsorUrl.title,
                                                variant: "overlay-primary",
                                            }),
                                            t.ctaQuests.map((e, i) =>
                                                (0, r.jsx)(
                                                    c.Button,
                                                    {
                                                        onClick: () => {
                                                            T.replace(C(I({}, l), { hash: void 0 })),
                                                                null == n || n(),
                                                                window.requestIdleCallback(() => {
                                                                    (0, _.navigateToQuestHome)({ questId: e.questId });
                                                                }),
                                                                h.default.track(
                                                                    E.rMx.QUEST_CONTENT_CLICKED,
                                                                    I(
                                                                        {
                                                                            quest_id: t.id,
                                                                            cta_name: g.jZ.LEARN_MORE,
                                                                            click_id: (0, o.Z)(),
                                                                            is_targeted: !1,
                                                                        },
                                                                        (0, g.mH)(m.jn.QUEST_HOME_TAKEOVER),
                                                                    ),
                                                                );
                                                        },
                                                        size: "md",
                                                        text: e.title,
                                                        variant: "color-mix",
                                                    },
                                                    i,
                                                ),
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(S, { asset: t.assetHeroImage }),
                ],
            }),
        })
    );
}
function N() {
    return (0, r.jsx)("div", {
        className: a()(v.wrapper, v.contentWrapper, v.contentWrapperLoading),
        children: (0, r.jsx)(c.$jN, {}),
    });
}
