n.d(t, {
    U4: () => z,
    cG: () => ei,
    kA: () => er,
    qR: () => ea,
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var l,
    i = n(951288),
    r = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(911969),
    p = n(110924),
    m = n(607070),
    f = n(115130),
    h = n(317381),
    v = n(723163),
    y = n(361213),
    x = n(542094),
    b = n(778569),
    g = n(182906),
    j = n(556505),
    N = n(367907),
    C = n(220082),
    E = n(70097),
    P = n(591472),
    O = n(973616),
    A = n(594174),
    _ = n(695103),
    I = n(880448),
    S = n(768581),
    T = n(541099),
    L = n(783097),
    R = n(695676),
    Z = n(176412),
    w = n(226026),
    k = n(570949),
    M = n(753972),
    U = n(981631),
    D = n(217702),
    H = n(388032),
    V = n(992878),
    B = n(413097),
    W = n(969728);
function F() {
    return (F =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
            }
            return e;
        }).apply(this, arguments);
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var z =
    (((l = {}).ICON = "icon"),
    (l.ROW = "row"),
    (l.NO_BANNER = "no_banner"),
    (l.MEDIUM_BANNER = "medium_banner"),
    (l.LARGE_BANNER = "large_banner"),
    l);
function Y(e) {
    var t;
    let {
            application: n,
            look: l = "large_banner",
            onClick: r,
            imageStyle: a,
            enableVideoBanner: o = !0,
            children: s,
            sectionName: c,
            resultsPosition: u,
            sectionOverallPosition: d,
            tracksImpression: m = !0,
            disabled: f = !1,
            overrideImageUrl: h,
            showsPromoted: v,
        } = e,
        y = null != (t = (0, p.Z)(f)) ? t : f;
    return (0, i.jsx)(X, {
        application: n,
        onClick: r,
        sectionName: c,
        resultsPosition: u,
        disabled: f,
        tracksImpression: m,
        look: l,
        sectionOverallPosition: d,
        children:
            "icon" === l
                ? (0, i.jsx)(Q, {
                      application: n,
                      imageStyle: a,
                      children: s,
                  })
                : (0, i.jsx)(J, {
                      application: n,
                      look: l,
                      imageStyle: a,
                      enableVideoBanner: o,
                      disableBannerFadeIn: y !== f,
                      overrideImageUrl: h,
                      showsPromoted: v,
                      children: s,
                  }),
    });
}
function X(e) {
    let {
            application: t,
            onClick: n,
            children: l,
            sectionName: a,
            resultsPosition: s,
            sectionOverallPosition: d,
            tracksImpression: p,
            disabled: m,
            containerStyle: f,
            look: h,
        } = e,
        v = r.useCallback(
            (e) => {
                if ((0, L.BQ)(t)) {
                    let n = t instanceof O.ZP ? t : O.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, i.jsx)(k.Z, G({ application: n }, e)));
                }
            },
            [t],
        ),
        { name: y, description: x } = r.useMemo(() => (0, L.sl)(t, { fakeAppIconURL: B }), [t]),
        { trackItemImpressionRef: b } = (0, w.Z)({
            applicationId: t.id,
            applicationFlags: (0, L.BQ)(t) ? t.flags : void 0,
            sectionName: a,
            sectionPosition: s,
            sectionOverallPosition: d,
            promotionalLabel: (0, L.dF)(t),
        }),
        g = r.useMemo(() => {
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
        ? (0, i.jsx)("div", {
              ref: p ? b : void 0,
              className: g,
              children: l,
          })
        : (0, i.jsx)(c.P3F, {
              innerRef: p ? b : void 0,
              className: g,
              onClick: n,
              onContextMenu: v,
              "aria-label": H.intl.formatToPlainString(H.t["zLhr9/"], {
                  applicationName: y,
                  applicationDescription: x,
              }),
              children: (0, i.jsx)(c.Rny, { children: l }),
          });
}
function Q(e) {
    let { application: t, imageStyle: n, children: l } = e,
        { name: a, iconURL: s } = r.useMemo(() => (0, L.sl)(t, { fakeAppIconURL: B }), [t]);
    return (0, i.jsx)(c.ua7, {
        tooltipContentClassName: V.tooltipContent,
        text: a,
        children: (e) => {
            var t = F(
                {},
                (function (e) {
                    if (null == e) throw TypeError("Cannot destructure " + e);
                    return e;
                })(e),
            );
            return (0, i.jsxs)(
                "div",
                q(G({ className: o()(V.iconContainer, n) }, t), {
                    children: [
                        (0, i.jsx)(M.Z, {
                            src: s,
                            className: V.iconCard,
                            "aria-hidden": !0,
                            rendersPlaceholder: !0,
                        }),
                        l,
                    ],
                }),
            );
        },
    });
}
function J(e) {
    let {
            application: t,
            look: n,
            imageStyle: l,
            enableVideoBanner: a,
            disableBannerFadeIn: u,
            children: p,
            overrideImageUrl: m,
            showsPromoted: h,
        } = e,
        { iconURL: v, name: y, description: x } = r.useMemo(() => (0, L.sl)(t, { fakeAppIconURL: B }), [t]),
        b = r.useMemo(() => (null == x ? null : (0, Z.ae)(x)), [x]),
        g = (0, C.ZP)(v, ""),
        [N, E] = r.useState(!1),
        P = r.useCallback(() => {
            !0 === a && E(!0);
        }, [a]),
        O = h || (0, L.lf)(t),
        A = "large_banner" === n || "medium_banner" === n,
        I = r.useCallback(() => E(!1), []),
        S = (0, s.e7)([f.Z, _.Z], () => f.Z.inDevModeForApplication(t.id) || _.Z.inTestModeForApplication(t.id), [
            t.id,
        ]),
        T = (0, L.WA)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            A
                ? (0, i.jsxs)("div", {
                      onMouseEnter: P,
                      onFocus: P,
                      onMouseLeave: I,
                      onBlur: I,
                      className: o()(V.bannerImageContainer, {
                          [V.mediumBanner]: "medium_banner" === n,
                          [V.largeBanner]: "large_banner" === n,
                      }),
                      children: [
                          (0, i.jsx)("span", {
                              className: l,
                              children: (0, i.jsx)(ee, {
                                  application: t,
                                  fallbackColor: g,
                                  showVideo: N,
                                  disableFadeIn: u,
                                  overrideImageUrl: m,
                              }),
                          }),
                          S || O || T !== d.ww.NONE
                              ? (0, i.jsxs)("div", {
                                    className: V.bannerUpperRightContainer,
                                    children: [
                                        O &&
                                            (0, i.jsx)("div", {
                                                className: V.promotedLabelWrapperBanner,
                                                children: (0, i.jsx)(c.X6q, {
                                                    variant: "text-xxs/medium",
                                                    color: "header-primary",
                                                    children: H.intl.string(H.t["/eVltr"]),
                                                }),
                                            }),
                                        S && (0, i.jsx)(K, {}),
                                        T !== d.ww.NONE && (0, i.jsx)(j.Z, { labelType: T }),
                                    ],
                                })
                              : null,
                          (0, i.jsx)("div", {
                              className: V.bannerImageChildContainer,
                              children: p,
                          }),
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: o()(V.appDetailsContainer, { [V.appDetailsRowContainer]: "row" === n }),
                children: [
                    (0, i.jsx)(M.Z, {
                        src: v,
                        className: o()(V.icon, { [V.rowIcon]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, i.jsxs)("div", {
                        className: V.appDetails,
                        children: [
                            (0, i.jsxs)("div", {
                                className: V.appDetailsHeaderContainer,
                                children: [
                                    (0, i.jsx)(c.X6q, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: y,
                                    }),
                                    !A && O
                                        ? (0, i.jsx)("div", {
                                              className: V.promotedLabelWrapperNonBanner,
                                              children: (0, i.jsx)(c.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: H.intl.string(H.t["/eVltr"]),
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)($, { application: t }),
                                ],
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-secondary",
                                lineClamp: 1,
                                children: b,
                            }),
                        ],
                    }),
                    "row" === n ? (0, i.jsx)("div", { className: V.rowDivider }) : null,
                ],
            }),
        ],
    });
}
function K() {
    return (0, i.jsx)(c.ua7, {
        text: H.intl.string(H.t.CfTySU),
        children: (e) =>
            (0, i.jsx)(
                "div",
                q(G({ className: V.devShelfBadge }, e), { children: (0, i.jsx)(I.Z, { className: V.devShelfIcon }) }),
            ),
    });
}
function $(e) {
    let { application: t } = e,
        n = A.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let l = (0, L.yJ)(t);
    if (null == l || !(0, L.BQ)(t)) return null;
    let r = (0, x.fD)(t, l);
    return null == r
        ? null
        : (0, i.jsx)(c.ua7, {
              text: r,
              children: (e) =>
                  (0, i.jsx)(
                      "img",
                      G(
                          {
                              className: V.staffBadge,
                              alt: r,
                              src: W,
                          },
                          e,
                      ),
                  ),
          });
}
function ee(e) {
    let { application: t, fallbackColor: n, showVideo: l, disableFadeIn: r, overrideImageUrl: a } = e;
    if (null != a)
        return (0, i.jsx)("img", {
            src: a,
            alt: (0, L.BQ)(t) ? t.name : "",
            className: o()(V.bannerImage, { [V.disableFadeIn]: r }),
        });
    if ((0, L.BQ)(t)) {
        if ((0, L.ye)(t))
            return (0, i.jsx)(et, {
                application: t,
                showVideo: l,
                disableFadeIn: r,
            });
        if (null != t.bot)
            return (0, i.jsx)(en, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: r,
            });
    }
    return (0, i.jsx)(el, {
        fallbackColor: n,
        disableFadeIn: r,
    });
}
function et(e) {
    let { application: t, showVideo: n, disableFadeIn: l } = e,
        a = (0, b.Z)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
        }),
        s = r.useMemo(() => {
            let e = (0, L.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, y.Z)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [c, u] = r.useState(n);
    r.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(V.bannerImage, { [V.disableFadeIn]: l });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != s && c
                ? (0, i.jsx)("div", {
                      className: V.activityVideoContainer,
                      children: (0, i.jsx)("div", {
                          className: o()(V.activityVideo, { [V.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, i.jsx)(E.Z, {
                              src: s,
                              mediaLayoutType: D.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, i.jsx)(g.Z, {
                imageBackground: a,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function en(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: l } = e,
        r = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        a = (0, S.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !r,
            size: 600,
        });
    return null == a
        ? (0, i.jsx)(el, {
              fallbackColor: n,
              disableFadeIn: l,
          })
        : (0, i.jsx)("img", {
              src: a,
              alt: "",
              className: o()(V.bannerImage, { [V.disableFadeIn]: l }),
          });
}
function el(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, i.jsx)("div", {
        className: o()(V.bannerImage, { [V.disableFadeIn]: n }),
        style: { backgroundColor: t },
    });
}
function ei(e) {
    let { application: t, sectionName: n, resultsPosition: l, query: i, installOnDemand: a, location: o } = e,
        { pushHistory: s } = (0, R.hH)(),
        { friends: c } = (0, v.Z)(t);
    return {
        onClickAppCard: r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, N.yw)(U.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: l,
                        source: T.Z.entrypoint(),
                        promotional_label: (0, L.dF)(t),
                        location: o,
                        query: i,
                        num_friends_who_play: c.length,
                    }),
                    s({
                        type: R.gc.APPLICATION,
                        application: t,
                        installOnDemand: a,
                        sectionName: n,
                    });
            },
            [t, a, o, s, i, l, n, c],
        ),
    };
}
function er(e) {
    let { onClickAppCard: t } = ei(e);
    return (0, i.jsx)(Y, q(G({}, e), { onClick: t }));
}
function ea(e) {
    var { context: t, application: n, location: l, sectionName: a, isOneClickCTA: o, fetchesApplication: u = !0 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
    if (!(0, L.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let p = r.useId(),
        [m, f, v] = (0, s.Wu)([h.ZP, P.Z], () => [
            h.ZP.isLaunchingActivity(),
            h.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            P.Z.isLaunchingFrame(n.id),
        ]),
        y = (null != f && f.isLaunching && f.componentId === p) || v,
        {
            onActivityItemSelected: b,
            activityAction: g,
            buttonVariant: j,
            buttonText: N,
        } = (0, Z.P7)({
            context: t,
            application: n,
            location: l,
            sectionName: a,
            launchingComponentId: p,
            fetchesApplication: u,
        });
    return g === x.JS.START || g === x.JS.JOIN
        ? o
            ? (0, i.jsx)(
                  Y,
                  q(G({}, d), {
                      sectionName: a,
                      application: n,
                      onClick: b,
                      disabled: m || v,
                      enableVideoBanner: !y,
                      children: y
                          ? (0, i.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: V.spinner,
                            })
                          : null,
                  }),
              )
            : (0, i.jsx)(
                  er,
                  q(G({}, d), {
                      context: t,
                      sectionName: a,
                      application: n,
                      location: l,
                  }),
              )
        : (0, i.jsx)(
              Y,
              q(G({}, d), {
                  sectionName: a,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: V.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, i.jsx)("div", {
                      className: V.voiceLauncherAppCardContainer,
                      children: (0, i.jsx)(c.zxk, {
                          type: "submit",
                          size: "md",
                          variant: j,
                          disabled: m || v,
                          onClick: b,
                          "aria-label": H.intl.formatToPlainString(H.t["XjP/R0"], {
                              buttonText: N,
                              applicationName: n.name,
                          }),
                          loading: y,
                          text: N,
                      }),
                  }),
              }),
          );
}
