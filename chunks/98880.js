n.d(t, {
    U4: () => X,
    cG: () => es,
    kA: () => el,
    qR: () => ec,
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(239091),
    d = n(911969),
    f = n(110924),
    _ = n(607070),
    p = n(115130),
    h = n(317381),
    m = n(723163),
    g = n(361213),
    E = n(542094),
    b = n(778569),
    y = n(182906),
    O = n(556505),
    v = n(367907),
    I = n(220082),
    S = n(70097),
    T = n(591472),
    A = n(973616),
    C = n(594174),
    N = n(695103),
    R = n(880448),
    P = n(768581),
    w = n(541099),
    D = n(783097),
    x = n(695676),
    L = n(176412),
    M = n(226026),
    j = n(570949),
    k = n(753972),
    U = n(981631),
    G = n(217702),
    B = n(388032),
    Z = n(992878),
    F = n(413097),
    V = n(969728);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var X = (function (e) {
    return (
        (e.ICON = "icon"),
        (e.ROW = "row"),
        (e.NO_BANNER = "no_banner"),
        (e.MEDIUM_BANNER = "medium_banner"),
        (e.LARGE_BANNER = "large_banner"),
        e
    );
})({});
function Q(e) {
    var t;
    let {
            application: n,
            look: i = "large_banner",
            onClick: a,
            imageStyle: o,
            enableVideoBanner: s = !0,
            children: l,
            sectionName: c,
            resultsPosition: u,
            sectionOverallPosition: d,
            tracksImpression: _ = !0,
            disabled: p = !1,
            overrideImageUrl: h,
            showsPromoted: m,
        } = e,
        g = null != (t = (0, f.Z)(p)) ? t : p;
    return (0, r.jsx)(J, {
        application: n,
        onClick: a,
        sectionName: c,
        resultsPosition: u,
        disabled: p,
        tracksImpression: _,
        look: i,
        sectionOverallPosition: d,
        children:
            "icon" === i
                ? (0, r.jsx)($, {
                      application: n,
                      imageStyle: o,
                      children: l,
                  })
                : (0, r.jsx)(ee, {
                      application: n,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: s,
                      disableBannerFadeIn: g !== p,
                      overrideImageUrl: h,
                      showsPromoted: m,
                      children: l,
                  }),
    });
}
function J(e) {
    let {
            application: t,
            onClick: n,
            children: a,
            sectionName: s,
            resultsPosition: l,
            sectionOverallPosition: d,
            tracksImpression: f,
            disabled: _,
            containerStyle: p,
            look: h,
        } = e,
        m = i.useCallback(
            (e) => {
                if ((0, D.BQ)(t)) {
                    let n = t instanceof A.ZP ? t : A.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, r.jsx)(j.Z, Y({ application: n }, e)));
                }
            },
            [t],
        ),
        { name: g, description: E } = i.useMemo(() => (0, D.sl)(t, { fakeAppIconURL: F }), [t]),
        { trackItemImpressionRef: b } = (0, M.Z)({
            applicationId: t.id,
            applicationFlags: (0, D.BQ)(t) ? t.flags : void 0,
            sectionName: s,
            sectionPosition: l,
            sectionOverallPosition: d,
            promotionalLabel: (0, D.dF)(t),
        }),
        y = i.useMemo(() => {
            let e = _ ? Z.containerDisabled : Z.container;
            return o()(
                e,
                {
                    [Z.containerBorderRadius]: "row" !== h,
                    [Z.rowContainer]: "row" === h,
                    [Z.iconCard]: "icon" === h,
                },
                p,
            );
        }, [p, _, h]);
    return _
        ? (0, r.jsx)("div", {
              ref: f ? b : void 0,
              className: y,
              children: a,
          })
        : (0, r.jsx)(c.P3F, {
              innerRef: f ? b : void 0,
              className: y,
              onClick: n,
              onContextMenu: m,
              "aria-label": B.intl.formatToPlainString(B.t["zLhr9+"], {
                  applicationName: g,
                  applicationDescription: E,
              }),
              children: (0, r.jsx)(c.Rny, { children: a }),
          });
}
function $(e) {
    let { application: t, imageStyle: n, children: a } = e,
        { name: s, iconURL: c } = i.useMemo(() => (0, D.sl)(t, { fakeAppIconURL: F }), [t]);
    return (0, r.jsx)(l.u, {
        __unsupportedReactNodeAsText: s,
        children: (0, r.jsxs)("div", {
            className: o()(Z.iconContainer, n),
            children: [
                (0, r.jsx)(k.Z, {
                    src: c,
                    className: Z.iconCard,
                    "aria-hidden": !0,
                    rendersPlaceholder: !0,
                }),
                a,
            ],
        }),
    });
}
function ee(e) {
    let {
            application: t,
            look: n,
            imageStyle: a,
            enableVideoBanner: l,
            disableBannerFadeIn: u,
            children: f,
            overrideImageUrl: _,
            showsPromoted: h,
        } = e,
        { iconURL: m, name: g, description: E } = i.useMemo(() => (0, D.sl)(t, { fakeAppIconURL: F }), [t]),
        b = i.useMemo(() => (null == E ? null : (0, L.ae)(E)), [E]),
        y = (0, I.ZP)(m, ""),
        [v, S] = i.useState(!1),
        T = i.useCallback(() => {
            !0 === l && S(!0);
        }, [l]),
        A = h || (0, D.lf)(t),
        C = "large_banner" === n || "medium_banner" === n,
        R = i.useCallback(() => S(!1), []),
        P = (0, s.e7)([p.Z, N.Z], () => p.Z.inDevModeForApplication(t.id) || N.Z.inTestModeForApplication(t.id), [
            t.id,
        ]),
        w = (0, D.WA)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C
                ? (0, r.jsxs)("div", {
                      onMouseEnter: T,
                      onFocus: T,
                      onMouseLeave: R,
                      onBlur: R,
                      className: o()(Z.bannerImageContainer, {
                          [Z.mediumBanner]: "medium_banner" === n,
                          [Z.largeBanner]: "large_banner" === n,
                      }),
                      children: [
                          (0, r.jsx)("span", {
                              className: a,
                              children: (0, r.jsx)(er, {
                                  application: t,
                                  fallbackColor: y,
                                  showVideo: v,
                                  disableFadeIn: u,
                                  overrideImageUrl: _,
                              }),
                          }),
                          P || A || w !== d.ww.NONE
                              ? (0, r.jsxs)("div", {
                                    className: Z.bannerUpperRightContainer,
                                    children: [
                                        A &&
                                            (0, r.jsx)("div", {
                                                className: Z.promotedLabelWrapperBanner,
                                                children: (0, r.jsx)(c.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "header-primary",
                                                    children: B.intl.string(B.t["/eVltv"]),
                                                }),
                                            }),
                                        P && (0, r.jsx)(et, {}),
                                        w !== d.ww.NONE && (0, r.jsx)(O.Z, { labelType: w }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", {
                              className: Z.bannerImageChildContainer,
                              children: f,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: o()(Z.appDetailsContainer, { [Z.appDetailsRowContainer]: "row" === n }),
                children: [
                    (0, r.jsx)(k.Z, {
                        src: m,
                        className: o()(Z.icon, { [Z.rowIcon]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.appDetails,
                        children: [
                            (0, r.jsxs)("div", {
                                className: Z.appDetailsHeaderContainer,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: g,
                                    }),
                                    !C && A
                                        ? (0, r.jsx)("div", {
                                              className: Z.promotedLabelWrapperNonBanner,
                                              children: (0, r.jsx)(c.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: B.intl.string(B.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(en, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                lineClamp: 1,
                                children: b,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: Z.rowDivider }) : null,
                ],
            }),
        ],
    });
}
function et() {
    return (0, r.jsx)(l.u, {
        text: B.intl.string(B.t.CfTySQ),
        children: (0, r.jsx)("div", {
            className: Z.devShelfBadge,
            children: (0, r.jsx)(R.Z, { className: Z.devShelfIcon }),
        }),
    });
}
function en(e) {
    let { application: t } = e,
        n = C.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, D.yJ)(t);
    if (null == i || !(0, D.BQ)(t)) return null;
    let a = (0, E.fD)(t, i);
    return null == a
        ? null
        : (0, r.jsx)(l.u, {
              __unsupportedReactNodeAsText: a,
              children: (0, r.jsx)("img", {
                  className: Z.staffBadge,
                  alt: a,
                  src: V,
              }),
          });
}
function er(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: s } = e;
    if (null != s)
        return (0, r.jsx)("img", {
            src: s,
            alt: (0, D.BQ)(t) ? t.name : "",
            className: o()(Z.bannerImage, { [Z.disableFadeIn]: a }),
        });
    if ((0, D.BQ)(t)) {
        if ((0, D.ye)(t))
            return (0, r.jsx)(ei, {
                application: t,
                showVideo: i,
                disableFadeIn: a,
            });
        if (null != t.bot)
            return (0, r.jsx)(ea, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: a,
            });
    }
    return (0, r.jsx)(eo, {
        fallbackColor: n,
        disableFadeIn: a,
    });
}
function ei(e) {
    let { application: t, showVideo: n, disableFadeIn: a } = e,
        s = (0, b.Z)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
        }),
        l = i.useMemo(() => {
            let e = (0, D.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, g.Z)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [c, u] = i.useState(n);
    i.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(Z.bannerImage, { [Z.disableFadeIn]: a });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && c
                ? (0, r.jsx)("div", {
                      className: Z.activityVideoContainer,
                      children: (0, r.jsx)("div", {
                          className: o()(Z.activityVideo, { [Z.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, r.jsx)(S.Z, {
                              src: l,
                              mediaLayoutType: G.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(y.Z, {
                imageBackground: s,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function ea(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, s.e7)([_.Z], () => _.Z.useReducedMotion),
        l = (0, P.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !a,
            size: 600,
        });
    return null == l
        ? (0, r.jsx)(eo, {
              fallbackColor: n,
              disableFadeIn: i,
          })
        : (0, r.jsx)("img", {
              src: l,
              alt: "",
              className: o()(Z.bannerImage, { [Z.disableFadeIn]: i }),
          });
}
function eo(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", {
        className: o()(Z.bannerImage, { [Z.disableFadeIn]: n }),
        style: { backgroundColor: t },
    });
}
function es(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: a, installOnDemand: o, location: s } = e,
        { pushHistory: l } = (0, x.hH)(),
        { friends: c } = (0, m.Z)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, v.yw)(U.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: w.Z.entrypoint(),
                        promotional_label: (0, D.dF)(t),
                        location: s,
                        query: a,
                        num_friends_who_play: c.length,
                    }),
                    l({
                        type: x.gc.APPLICATION,
                        application: t,
                        installOnDemand: o,
                        sectionName: n,
                    });
            },
            [t, o, s, l, a, r, n, c],
        ),
    };
}
function el(e) {
    let { onClickAppCard: t } = es(e);
    return (0, r.jsx)(Q, K(Y({}, e), { onClick: t }));
}
function ec(e) {
    var { context: t, application: n, location: a, sectionName: o, isOneClickCTA: l, fetchesApplication: u = !0 } = e,
        d = z(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
    if (!(0, D.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let f = i.useId(),
        [_, p, m] = (0, s.Wu)([h.ZP, T.Z], () => [
            h.ZP.isLaunchingActivity(),
            h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            T.Z.isLaunchingFrame(n.id),
        ]),
        g = (null != p && p.isLaunching && p.componentId === f) || m,
        {
            onActivityItemSelected: b,
            activityAction: y,
            buttonVariant: O,
            buttonText: v,
        } = (0, L.P7)({
            context: t,
            application: n,
            location: a,
            sectionName: o,
            launchingComponentId: f,
            fetchesApplication: u,
        });
    return y === E.JS.START || y === E.JS.JOIN
        ? l
            ? (0, r.jsx)(
                  Q,
                  K(Y({}, d), {
                      sectionName: o,
                      application: n,
                      onClick: b,
                      disabled: _ || m,
                      enableVideoBanner: !g,
                      children: g
                          ? (0, r.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: Z.spinner,
                            })
                          : null,
                  }),
              )
            : (0, r.jsx)(
                  el,
                  K(Y({}, d), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: a,
                  }),
              )
        : (0, r.jsx)(
              Q,
              K(Y({}, d), {
                  sectionName: o,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: Z.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, r.jsx)("div", {
                      className: Z.voiceLauncherAppCardContainer,
                      children: (0, r.jsx)(c.Button, {
                          type: "submit",
                          size: "md",
                          variant: O,
                          disabled: _ || m,
                          onClick: b,
                          "aria-label": B.intl.formatToPlainString(B.t["XjP/R+"], {
                              buttonText: v,
                              applicationName: n.name,
                          }),
                          loading: g,
                          text: v,
                      }),
                  }),
              }),
          );
}
