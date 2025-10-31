n.d(t, {
    U4: () => z,
    cG: () => el,
    kA: () => er,
    qR: () => ea,
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var i,
    l = n(951288),
    r = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(239091),
    p = n(911969),
    m = n(110924),
    f = n(607070),
    h = n(115130),
    v = n(317381),
    y = n(723163),
    g = n(361213),
    x = n(542094),
    b = n(778569),
    N = n(182906),
    j = n(556505),
    C = n(367907),
    E = n(220082),
    P = n(70097),
    A = n(591472),
    _ = n(973616),
    O = n(594174),
    I = n(695103),
    S = n(880448),
    T = n(768581),
    L = n(541099),
    R = n(783097),
    Z = n(695676),
    w = n(176412),
    k = n(226026),
    M = n(570949),
    U = n(753972),
    D = n(981631),
    H = n(217702),
    B = n(388032),
    V = n(992878),
    W = n(413097),
    F = n(969728);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var z =
    (((i = {}).ICON = "icon"),
    (i.ROW = "row"),
    (i.NO_BANNER = "no_banner"),
    (i.MEDIUM_BANNER = "medium_banner"),
    (i.LARGE_BANNER = "large_banner"),
    i);
function q(e) {
    var t;
    let {
            application: n,
            look: i = "large_banner",
            onClick: r,
            imageStyle: a,
            enableVideoBanner: o = !0,
            children: s,
            sectionName: c,
            resultsPosition: u,
            sectionOverallPosition: d,
            tracksImpression: p = !0,
            disabled: f = !1,
            overrideImageUrl: h,
            showsPromoted: v,
        } = e,
        y = null != (t = (0, m.Z)(f)) ? t : f;
    return (0, l.jsx)(Q, {
        application: n,
        onClick: r,
        sectionName: c,
        resultsPosition: u,
        disabled: f,
        tracksImpression: p,
        look: i,
        sectionOverallPosition: d,
        children:
            "icon" === i
                ? (0, l.jsx)(X, {
                      application: n,
                      imageStyle: a,
                      children: s,
                  })
                : (0, l.jsx)(J, {
                      application: n,
                      look: i,
                      imageStyle: a,
                      enableVideoBanner: o,
                      disableBannerFadeIn: y !== f,
                      overrideImageUrl: h,
                      showsPromoted: v,
                      children: s,
                  }),
    });
}
function Q(e) {
    let {
            application: t,
            onClick: n,
            children: i,
            sectionName: a,
            resultsPosition: s,
            sectionOverallPosition: c,
            tracksImpression: p,
            disabled: m,
            containerStyle: f,
            look: h,
        } = e,
        v = r.useCallback(
            (e) => {
                if ((0, R.BQ)(t)) {
                    let n = t instanceof _.ZP ? t : _.ZP.createFromServer(t);
                    (0, d.vq)(e, (e) => (0, l.jsx)(M.Z, G({ application: n }, e)));
                }
            },
            [t],
        ),
        { name: y, description: g } = r.useMemo(() => (0, R.sl)(t, { fakeAppIconURL: W }), [t]),
        { trackItemImpressionRef: x } = (0, k.Z)({
            applicationId: t.id,
            applicationFlags: (0, R.BQ)(t) ? t.flags : void 0,
            sectionName: a,
            sectionPosition: s,
            sectionOverallPosition: c,
            promotionalLabel: (0, R.dF)(t),
        }),
        b = r.useMemo(() => {
            let e = m ? V.containerDisabled : V.container;
            return o()(
                e,
                {
                    [V.containerBorderRadius]: "row" !== h,
                    [V.rowContainer]: "row" === h,
                    [V.iconCard]: "icon" === h,
                },
                f,
            );
        }, [f, m, h]);
    return m
        ? (0, l.jsx)("div", {
              ref: p ? x : void 0,
              className: b,
              children: i,
          })
        : (0, l.jsx)(u.P3F, {
              innerRef: p ? x : void 0,
              className: b,
              onClick: n,
              onContextMenu: v,
              "aria-label": B.intl.formatToPlainString(B.t["zLhr9+"], {
                  applicationName: y,
                  applicationDescription: g,
              }),
              children: (0, l.jsx)(u.Rny, { children: i }),
          });
}
function X(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: a, iconURL: s } = r.useMemo(() => (0, R.sl)(t, { fakeAppIconURL: W }), [t]);
    return (0, l.jsx)(c.u, {
        __unsupportedReactNodeAsText: a,
        children: (0, l.jsxs)("div", {
            className: o()(V.iconContainer, n),
            children: [
                (0, l.jsx)(U.Z, {
                    src: s,
                    className: V.iconCard,
                    "aria-hidden": !0,
                    rendersPlaceholder: !0,
                }),
                i,
            ],
        }),
    });
}
function J(e) {
    let {
            application: t,
            look: n,
            imageStyle: i,
            enableVideoBanner: a,
            disableBannerFadeIn: c,
            children: d,
            overrideImageUrl: m,
            showsPromoted: f,
        } = e,
        { iconURL: v, name: y, description: g } = r.useMemo(() => (0, R.sl)(t, { fakeAppIconURL: W }), [t]),
        x = r.useMemo(() => (null == g ? null : (0, w.ae)(g)), [g]),
        b = (0, E.ZP)(v, ""),
        [N, C] = r.useState(!1),
        P = r.useCallback(() => {
            !0 === a && C(!0);
        }, [a]),
        A = f || (0, R.lf)(t),
        _ = "large_banner" === n || "medium_banner" === n,
        O = r.useCallback(() => C(!1), []),
        S = (0, s.e7)([h.Z, I.Z], () => h.Z.inDevModeForApplication(t.id) || I.Z.inTestModeForApplication(t.id), [
            t.id,
        ]),
        T = (0, R.WA)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            _
                ? (0, l.jsxs)("div", {
                      onMouseEnter: P,
                      onFocus: P,
                      onMouseLeave: O,
                      onBlur: O,
                      className: o()(V.bannerImageContainer, {
                          [V.mediumBanner]: "medium_banner" === n,
                          [V.largeBanner]: "large_banner" === n,
                      }),
                      children: [
                          (0, l.jsx)("span", {
                              className: i,
                              children: (0, l.jsx)(ee, {
                                  application: t,
                                  fallbackColor: b,
                                  showVideo: N,
                                  disableFadeIn: c,
                                  overrideImageUrl: m,
                              }),
                          }),
                          S || A || T !== p.ww.NONE
                              ? (0, l.jsxs)("div", {
                                    className: V.bannerUpperRightContainer,
                                    children: [
                                        A &&
                                            (0, l.jsx)("div", {
                                                className: V.promotedLabelWrapperBanner,
                                                children: (0, l.jsx)(u.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "header-primary",
                                                    children: B.intl.string(B.t["/eVltv"]),
                                                }),
                                            }),
                                        S && (0, l.jsx)(K, {}),
                                        T !== p.ww.NONE && (0, l.jsx)(j.Z, { labelType: T }),
                                    ],
                                })
                              : null,
                          (0, l.jsx)("div", {
                              className: V.bannerImageChildContainer,
                              children: d,
                          }),
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: o()(V.appDetailsContainer, { [V.appDetailsRowContainer]: "row" === n }),
                children: [
                    (0, l.jsx)(U.Z, {
                        src: v,
                        className: o()(V.icon, { [V.rowIcon]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, l.jsxs)("div", {
                        className: V.appDetails,
                        children: [
                            (0, l.jsxs)("div", {
                                className: V.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(u.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: y,
                                    }),
                                    !_ && A
                                        ? (0, l.jsx)("div", {
                                              className: V.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(u.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: B.intl.string(B.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)($, { application: t }),
                                ],
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                lineClamp: 1,
                                children: x,
                            }),
                        ],
                    }),
                    "row" === n ? (0, l.jsx)("div", { className: V.rowDivider }) : null,
                ],
            }),
        ],
    });
}
function K() {
    return (0, l.jsx)(c.u, {
        text: B.intl.string(B.t.CfTySQ),
        children: (0, l.jsx)("div", {
            className: V.devShelfBadge,
            children: (0, l.jsx)(S.Z, { className: V.devShelfIcon }),
        }),
    });
}
function $(e) {
    let { application: t } = e,
        n = O.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, R.yJ)(t);
    if (null == i || !(0, R.BQ)(t)) return null;
    let r = (0, x.fD)(t, i);
    return null == r
        ? null
        : (0, l.jsx)(c.u, {
              __unsupportedReactNodeAsText: r,
              children: (0, l.jsx)("img", {
                  className: V.staffBadge,
                  alt: r,
                  src: F,
              }),
          });
}
function ee(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: r, overrideImageUrl: a } = e;
    if (null != a)
        return (0, l.jsx)("img", {
            src: a,
            alt: (0, R.BQ)(t) ? t.name : "",
            className: o()(V.bannerImage, { [V.disableFadeIn]: r }),
        });
    if ((0, R.BQ)(t)) {
        if ((0, R.ye)(t))
            return (0, l.jsx)(et, {
                application: t,
                showVideo: i,
                disableFadeIn: r,
            });
        if (null != t.bot)
            return (0, l.jsx)(en, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: r,
            });
    }
    return (0, l.jsx)(ei, {
        fallbackColor: n,
        disableFadeIn: r,
    });
}
function et(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        a = (0, b.Z)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
        }),
        s = r.useMemo(() => {
            let e = (0, R.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, g.Z)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [c, u] = r.useState(n);
    r.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(V.bannerImage, { [V.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != s && c
                ? (0, l.jsx)("div", {
                      className: V.activityVideoContainer,
                      children: (0, l.jsx)("div", {
                          className: o()(V.activityVideo, { [V.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, l.jsx)(P.Z, {
                              src: s,
                              mediaLayoutType: H.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, l.jsx)(N.Z, {
                imageBackground: a,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function en(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        r = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        a = (0, T.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !r,
            size: 600,
        });
    return null == a
        ? (0, l.jsx)(ei, {
              fallbackColor: n,
              disableFadeIn: i,
          })
        : (0, l.jsx)("img", {
              src: a,
              alt: "",
              className: o()(V.bannerImage, { [V.disableFadeIn]: i }),
          });
}
function ei(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, l.jsx)("div", {
        className: o()(V.bannerImage, { [V.disableFadeIn]: n }),
        style: { backgroundColor: t },
    });
}
function el(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: a, location: o } = e,
        { pushHistory: s } = (0, Z.hH)(),
        { friends: c } = (0, y.Z)(t);
    return {
        onClickAppCard: r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, C.yw)(D.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: i,
                        source: L.Z.entrypoint(),
                        promotional_label: (0, R.dF)(t),
                        location: o,
                        query: l,
                        num_friends_who_play: c.length,
                    }),
                    s({
                        type: Z.gc.APPLICATION,
                        application: t,
                        installOnDemand: a,
                        sectionName: n,
                    });
            },
            [t, a, o, s, l, i, n, c],
        ),
    };
}
function er(e) {
    let { onClickAppCard: t } = el(e);
    return (0, l.jsx)(q, Y(G({}, e), { onClick: t }));
}
function ea(e) {
    var { context: t, application: n, location: i, sectionName: a, isOneClickCTA: o, fetchesApplication: c = !0 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
    if (!(0, R.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let p = r.useId(),
        [m, f, h] = (0, s.Wu)([v.ZP, A.Z], () => [
            v.ZP.isLaunchingActivity(),
            v.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            A.Z.isLaunchingFrame(n.id),
        ]),
        y = (null != f && f.isLaunching && f.componentId === p) || h,
        {
            onActivityItemSelected: g,
            activityAction: b,
            buttonVariant: N,
            buttonText: j,
        } = (0, w.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: a,
            launchingComponentId: p,
            fetchesApplication: c,
        });
    return b === x.JS.START || b === x.JS.JOIN
        ? o
            ? (0, l.jsx)(
                  q,
                  Y(G({}, d), {
                      sectionName: a,
                      application: n,
                      onClick: g,
                      disabled: m || h,
                      enableVideoBanner: !y,
                      children: y
                          ? (0, l.jsx)(u.$jN, {
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                className: V.spinner,
                            })
                          : null,
                  }),
              )
            : (0, l.jsx)(
                  er,
                  Y(G({}, d), {
                      context: t,
                      sectionName: a,
                      application: n,
                      location: i,
                  }),
              )
        : (0, l.jsx)(
              q,
              Y(G({}, d), {
                  sectionName: a,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: V.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, l.jsx)("div", {
                      className: V.voiceLauncherAppCardContainer,
                      children: (0, l.jsx)(u.Button, {
                          type: "submit",
                          size: "md",
                          variant: N,
                          disabled: m || h,
                          onClick: g,
                          "aria-label": B.intl.formatToPlainString(B.t["XjP/R+"], {
                              buttonText: j,
                              applicationName: n.name,
                          }),
                          loading: y,
                          text: j,
                      }),
                  }),
              }),
          );
}
