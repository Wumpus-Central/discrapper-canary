n.d(t, {
    U4: () => J,
    cG: () => ec,
    kA: () => eu,
    qR: () => ed,
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636977),
    l = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(239091),
    f = n(911969),
    p = n(110924),
    _ = n(607070),
    h = n(115130),
    m = n(317381),
    g = n(723163),
    E = n(361213),
    b = n(542094),
    y = n(778569),
    O = n(182906),
    v = n(556505),
    S = n(367907),
    I = n(220082),
    T = n(70097),
    C = n(591472),
    A = n(633181),
    N = n(973616),
    P = n(594174),
    w = n(695103),
    R = n(880448),
    D = n(768581),
    x = n(541099),
    L = n(783097),
    j = n(695676),
    M = n(176412),
    k = n(226026),
    U = n(570949),
    G = n(753972),
    Z = n(981631),
    F = n(217702),
    B = n(388032),
    V = n(279839),
    H = n(413097),
    Y = n(969728);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = X(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var J = (function (e) {
    return (
        (e.ICON = "icon"),
        (e.ROW = "row"),
        (e.NO_BANNER = "no_banner"),
        (e.MEDIUM_BANNER = "medium_banner"),
        (e.LARGE_BANNER = "large_banner"),
        e
    );
})({});
function $(e) {
    var t;
    let {
            application: n,
            look: i = "large_banner",
            onClick: a,
            imageStyle: o,
            enableVideoBanner: l = !0,
            children: c,
            sectionName: u,
            resultsPosition: d,
            sectionOverallPosition: f,
            tracksImpression: _ = !0,
            disabled: h = !1,
            overrideImageUrl: m,
            showsPromoted: g,
        } = e,
        E = null != (t = (0, p.Z)(h)) ? t : h;
    return (0, r.jsx)(ee, {
        application: n,
        onClick: a,
        sectionName: u,
        resultsPosition: d,
        disabled: h,
        tracksImpression: _,
        look: i,
        sectionOverallPosition: f,
        children: (0, r.jsx)(A.Z, {
            applicationId: n.id,
            questContent: s.j.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === i
                            ? (0, r.jsx)(et, {
                                  application: n,
                                  imageStyle: o,
                                  children: c,
                              })
                            : (0, r.jsx)(en, {
                                  application: n,
                                  look: i,
                                  imageStyle: o,
                                  enableVideoBanner: l,
                                  disableBannerFadeIn: E !== h,
                                  overrideImageUrl: m,
                                  showsPromoted: g,
                                  children: c,
                              }),
                }),
        }),
    });
}
function ee(e) {
    let {
            application: t,
            onClick: n,
            children: a,
            sectionName: s,
            resultsPosition: l,
            sectionOverallPosition: c,
            tracksImpression: f,
            disabled: p,
            containerStyle: _,
            look: h,
        } = e,
        m = i.useCallback(
            (e) => {
                if ((0, L.BQ)(t)) {
                    let n = t instanceof N.ZP ? t : N.ZP.createFromServer(t);
                    (0, d.vq)(e, (e) => (0, r.jsx)(U.Z, K({ application: n }, e)));
                }
            },
            [t],
        ),
        { name: g, description: E } = i.useMemo(() => (0, L.sl)(t, { fakeAppIconURL: H }), [t]),
        { trackItemImpressionRef: b } = (0, k.Z)({
            applicationId: t.id,
            applicationFlags: (0, L.BQ)(t) ? t.flags : void 0,
            sectionName: s,
            sectionPosition: l,
            sectionOverallPosition: c,
            promotionalLabel: (0, L.dF)(t),
        }),
        y = i.useMemo(() => {
            let e = p ? V.containerDisabled : V.container;
            return o()(
                e,
                {
                    [V.containerBorderRadius]: "row" !== h,
                    [V.rowContainer]: "row" === h,
                    [V.iconCard]: "icon" === h,
                },
                _,
            );
        }, [_, p, h]);
    return p
        ? (0, r.jsx)("div", {
              ref: f ? b : void 0,
              className: y,
              children: a,
          })
        : (0, r.jsx)(u.P3F, {
              innerRef: f ? b : void 0,
              className: y,
              onClick: n,
              onContextMenu: m,
              "aria-label": B.intl.formatToPlainString(B.t["zLhr9+"], {
                  applicationName: g,
                  applicationDescription: E,
              }),
              children: (0, r.jsx)(u.Rny, { children: a }),
          });
}
function et(e) {
    let { application: t, imageStyle: n, children: a } = e,
        { name: s, iconURL: l } = i.useMemo(() => (0, L.sl)(t, { fakeAppIconURL: H }), [t]);
    return (0, r.jsx)(c.u, {
        __unsupportedReactNodeAsText: s,
        children: (0, r.jsxs)("div", {
            className: o()(V.iconContainer, n),
            children: [
                (0, r.jsx)(G.Z, {
                    src: l,
                    className: V.iconCard,
                    "aria-hidden": !0,
                    rendersPlaceholder: !0,
                }),
                a,
            ],
        }),
    });
}
function en(e) {
    let {
            application: t,
            look: n,
            imageStyle: a,
            enableVideoBanner: s,
            disableBannerFadeIn: c,
            children: d,
            overrideImageUrl: p,
            showsPromoted: _,
        } = e,
        { iconURL: m, name: g, description: E } = i.useMemo(() => (0, L.sl)(t, { fakeAppIconURL: H }), [t]),
        b = i.useMemo(() => (null == E ? null : (0, M.ae)(E)), [E]),
        y = (0, I.ZP)(m, ""),
        [O, S] = i.useState(!1),
        T = i.useCallback(() => {
            !0 === s && S(!0);
        }, [s]),
        C = _ || (0, L.lf)(t),
        A = "large_banner" === n || "medium_banner" === n,
        N = i.useCallback(() => S(!1), []),
        P = (0, l.e7)([h.Z, w.Z], () => h.Z.inDevModeForApplication(t.id) || w.Z.inTestModeForApplication(t.id), [
            t.id,
        ]),
        R = (0, L.WA)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A
                ? (0, r.jsxs)("div", {
                      onMouseEnter: T,
                      onFocus: T,
                      onMouseLeave: N,
                      onBlur: N,
                      className: o()(V.bannerImageContainer, {
                          [V.mediumBanner]: "medium_banner" === n,
                          [V.largeBanner]: "large_banner" === n,
                      }),
                      children: [
                          (0, r.jsx)("span", {
                              className: a,
                              children: (0, r.jsx)(ea, {
                                  application: t,
                                  fallbackColor: y,
                                  showVideo: O,
                                  disableFadeIn: c,
                                  overrideImageUrl: p,
                              }),
                          }),
                          P || C || R !== f.ww.NONE
                              ? (0, r.jsxs)("div", {
                                    className: V.bannerUpperRightContainer,
                                    children: [
                                        C &&
                                            (0, r.jsx)("div", {
                                                className: V.promotedLabelWrapperBanner,
                                                children: (0, r.jsx)(u.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: B.intl.string(B.t["/eVltv"]),
                                                }),
                                            }),
                                        P && (0, r.jsx)(er, {}),
                                        R !== f.ww.NONE && (0, r.jsx)(v.Z, { labelType: R }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", {
                              className: V.bannerImageChildContainer,
                              children: d,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: o()(V.appDetailsContainer, { [V.appDetailsRowContainer]: "row" === n }),
                children: [
                    (0, r.jsx)(G.Z, {
                        src: m,
                        className: o()(V.icon, { [V.rowIcon]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: V.appDetails,
                        children: [
                            (0, r.jsxs)("div", {
                                className: V.appDetailsHeaderContainer,
                                children: [
                                    (0, r.jsx)(u.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: g,
                                    }),
                                    !A && C
                                        ? (0, r.jsx)("div", {
                                              className: V.promotedLabelWrapperNonBanner,
                                              children: (0, r.jsx)(u.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: B.intl.string(B.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(ei, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: b,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: V.rowDivider }) : null,
                ],
            }),
        ],
    });
}
function er() {
    return (0, r.jsx)(c.u, {
        text: B.intl.string(B.t.CfTySQ),
        children: (0, r.jsx)("div", {
            className: V.devShelfBadge,
            children: (0, r.jsx)(R.Z, { className: V.devShelfIcon }),
        }),
    });
}
function ei(e) {
    let { application: t } = e,
        n = P.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, L.yJ)(t);
    if (null == i || !(0, L.BQ)(t)) return null;
    let a = (0, b.fD)(t, i);
    return null == a
        ? null
        : (0, r.jsx)(c.u, {
              __unsupportedReactNodeAsText: a,
              children: (0, r.jsx)("img", {
                  className: V.staffBadge,
                  alt: a,
                  src: Y,
              }),
          });
}
function ea(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: s } = e;
    if (null != s)
        return (0, r.jsx)("img", {
            src: s,
            alt: (0, L.BQ)(t) ? t.name : "",
            className: o()(V.bannerImage, { [V.disableFadeIn]: a }),
        });
    if ((0, L.BQ)(t)) {
        if ((0, L.ye)(t))
            return (0, r.jsx)(eo, {
                application: t,
                showVideo: i,
                disableFadeIn: a,
            });
        if (null != t.bot)
            return (0, r.jsx)(es, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: a,
            });
    }
    return (0, r.jsx)(el, {
        fallbackColor: n,
        disableFadeIn: a,
    });
}
function eo(e) {
    let { application: t, showVideo: n, disableFadeIn: a } = e,
        s = (0, y.Z)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
            format: "webp",
        }),
        l = i.useMemo(() => {
            let e = (0, L.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, E.Z)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [c, u] = i.useState(n);
    i.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(V.bannerImage, { [V.disableFadeIn]: a });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && c
                ? (0, r.jsx)("div", {
                      className: V.activityVideoContainer,
                      children: (0, r.jsx)("div", {
                          className: o()(V.activityVideo, { [V.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, r.jsx)(T.Z, {
                              src: l,
                              mediaLayoutType: F.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(O.Z, {
                imageBackground: s,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function es(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        s = (0, D.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !a,
            size: 600,
        });
    return null == s
        ? (0, r.jsx)(el, {
              fallbackColor: n,
              disableFadeIn: i,
          })
        : (0, r.jsx)("img", {
              src: s,
              alt: "",
              className: o()(V.bannerImage, { [V.disableFadeIn]: i }),
          });
}
function el(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", {
        className: o()(V.bannerImage, { [V.disableFadeIn]: n }),
        style: { backgroundColor: t },
    });
}
function ec(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: a, installOnDemand: o, location: s } = e,
        { pushHistory: l } = (0, j.hH)(),
        { friends: c } = (0, g.Z)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, S.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: x.Z.entrypoint(),
                        promotional_label: (0, L.dF)(t),
                        location: s,
                        query: a,
                        num_friends_who_play: c.length,
                    }),
                    l({
                        type: j.gc.APPLICATION,
                        application: t,
                        installOnDemand: o,
                        sectionName: n,
                    });
            },
            [t, o, s, l, a, r, n, c],
        ),
    };
}
function eu(e) {
    let { onClickAppCard: t } = ec(e);
    return (0, r.jsx)($, q(K({}, e), { onClick: t }));
}
function ed(e) {
    var { context: t, application: n, location: a, sectionName: o, isOneClickCTA: s, fetchesApplication: c = !0 } = e,
        d = Q(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
    if (!(0, L.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let f = i.useId(),
        [p, _, h] = (0, l.Wu)([m.ZP, C.Z], () => [
            m.ZP.isLaunchingActivity(),
            m.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            C.Z.isLaunchingFrame(n.id),
        ]),
        g = (null != _ && _.isLaunching && _.componentId === f) || h,
        {
            onActivityItemSelected: E,
            activityAction: y,
            buttonVariant: O,
            buttonText: v,
        } = (0, M.P7)({
            context: t,
            application: n,
            location: a,
            sectionName: o,
            launchingComponentId: f,
            fetchesApplication: c,
        });
    return y === b.JS.START || y === b.JS.JOIN
        ? s
            ? (0, r.jsx)(
                  $,
                  q(K({}, d), {
                      sectionName: o,
                      application: n,
                      onClick: E,
                      disabled: p || h,
                      enableVideoBanner: !g,
                      children: g
                          ? (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                className: V.spinner,
                            })
                          : null,
                  }),
              )
            : (0, r.jsx)(
                  eu,
                  q(K({}, d), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: a,
                  }),
              )
        : (0, r.jsx)(
              $,
              q(K({}, d), {
                  sectionName: o,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: V.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, r.jsx)("div", {
                      className: V.voiceLauncherAppCardContainer,
                      children: (0, r.jsx)(u.Button, {
                          type: "submit",
                          size: "md",
                          variant: O,
                          disabled: p || h,
                          onClick: E,
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
