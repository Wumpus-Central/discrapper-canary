n.d(t, {
    U4: () => q,
    cG: () => el,
    kA: () => eo,
    qR: () => ea
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var i,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(911969),
    p = n(110924),
    m = n(607070),
    f = n(115130),
    h = n(317381),
    b = n(723163),
    _ = n(361213),
    y = n(542094),
    v = n(778569),
    x = n(182906),
    C = n(556505),
    g = n(367907),
    j = n(220082),
    P = n(70097),
    N = n(973616),
    O = n(594174),
    E = n(695103),
    A = n(880448),
    I = n(768581),
    S = n(573188),
    T = n(541099),
    w = n(783097),
    L = n(695676),
    R = n(176412),
    Z = n(226026),
    k = n(570949),
    M = n(753972),
    D = n(635753),
    B = n(981631),
    U = n(217702),
    H = n(388032),
    W = n(860901),
    V = n(413097),
    F = n(969728);
function G() {
    return (G =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function X(e, t) {
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
var q = (((i = {}).ICON = 'icon'), (i.ROW = 'row'), (i.NO_BANNER = 'no_banner'), (i.MEDIUM_BANNER = 'medium_banner'), (i.LARGE_BANNER = 'large_banner'), i);
function Y(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: l, imageStyle: o, enableVideoBanner: a = !0, children: s, sectionName: c, resultsPosition: u, sectionOverallPosition: d, tracksImpression: m = !0, disabled: f = !1, overrideImageUrl: h, showsPromoted: b, onClickAppCardFriends: _ } = e,
        y = null != (t = (0, p.Z)(f)) ? t : f;
    return (0, r.jsx)(Q, {
        application: n,
        onClick: l,
        sectionName: c,
        resultsPosition: u,
        disabled: f,
        tracksImpression: m,
        look: i,
        sectionOverallPosition: d,
        children:
            'icon' === i
                ? (0, r.jsx)(J, {
                      application: n,
                      imageStyle: o,
                      children: s
                  })
                : (0, r.jsx)(K, {
                      application: n,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: a,
                      disableBannerFadeIn: y !== f,
                      overrideImageUrl: h,
                      showsPromoted: b,
                      onClickAppCardFriends: _,
                      children: s
                  })
    });
}
function Q(e) {
    let { application: t, onClick: n, children: i, sectionName: o, resultsPosition: s, sectionOverallPosition: d, tracksImpression: p, disabled: m, containerStyle: f, look: h } = e,
        b = l.useCallback(
            (e) => {
                if ((0, w.BQ)(t)) {
                    let n = t instanceof N.ZP ? t : N.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, r.jsx)(k.Z, z({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: _, description: y } = l.useMemo(() => (0, w.sl)(t, { fakeAppIconURL: V }), [t]),
        { trackItemImpressionRef: v } = (0, Z.Z)({
            applicationId: t.id,
            applicationFlags: (0, w.BQ)(t) ? t.flags : void 0,
            sectionName: o,
            sectionPosition: s,
            sectionOverallPosition: d,
            promotionalLabel: (0, w.dF)(t)
        }),
        x = l.useMemo(() => {
            let e = m ? W.containerDisabled : W.container;
            return a()(
                e,
                {
                    [W.containerBorderRadius]: 'row' !== h,
                    [W.rowContainer]: 'row' === h,
                    [W.iconCard]: 'icon' === h
                },
                f
            );
        }, [f, m, h]);
    return m
        ? (0, r.jsx)('div', {
              ref: p ? v : void 0,
              className: x,
              children: i
          })
        : (0, r.jsx)(c.P3F, {
              innerRef: p ? v : void 0,
              className: x,
              onClick: n,
              onContextMenu: b,
              'aria-label': H.intl.formatToPlainString(H.t['zLhr9/'], {
                  applicationName: _,
                  applicationDescription: y
              }),
              children: (0, r.jsx)(c.Rny, { children: i })
          });
}
function J(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: o, iconURL: s } = l.useMemo(() => (0, w.sl)(t, { fakeAppIconURL: V }), [t]);
    return (0, r.jsx)(c.ua7, {
        tooltipContentClassName: W.tooltipContent,
        text: o,
        children: (e) => {
            var t = G(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, r.jsxs)(
                'div',
                X(z({ className: a()(W.iconContainer, n) }, t), {
                    children: [
                        (0, r.jsx)(M.Z, {
                            src: s,
                            className: W.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        i
                    ]
                })
            );
        }
    });
}
function K(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: o, disableBannerFadeIn: u, children: p, overrideImageUrl: m, showsPromoted: h, onClickAppCardFriends: _ } = e,
        { iconURL: y, name: v, description: x } = l.useMemo(() => (0, w.sl)(t, { fakeAppIconURL: V }), [t]),
        g = l.useMemo(() => (null == x ? null : (0, R.ae)(x)), [x]),
        P = (0, j.ZP)(y, ''),
        [N, O] = l.useState(!1),
        A = l.useCallback(() => {
            !0 === o && O(!0);
        }, [o]),
        I = h || (0, w.lf)(t),
        T = 'large_banner' === n || 'medium_banner' === n,
        L = l.useCallback(() => O(!1), []),
        Z = (0, s.e7)([f.Z, E.Z], () => f.Z.inDevModeForApplication(t.id) || E.Z.inTestModeForApplication(t.id), [t.id]),
        k = (0, w.WA)(t),
        { enabled: B } = S.X.useExperiment({ location: 'AppLauncherAppCard' }, { autoTrackExposure: !0 }),
        { friends: U } = (0, b.Z)(t),
        F = B && (0, w.ye)(t) && U.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            T
                ? (0, r.jsxs)('div', {
                      onMouseEnter: A,
                      onFocus: A,
                      onMouseLeave: L,
                      onBlur: L,
                      className: a()(W.bannerImageContainer, {
                          [W.mediumBanner]: 'medium_banner' === n,
                          [W.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, r.jsx)('span', {
                              className: i,
                              children: (0, r.jsx)(et, {
                                  application: t,
                                  fallbackColor: P,
                                  showVideo: N,
                                  disableFadeIn: u,
                                  overrideImageUrl: m
                              })
                          }),
                          Z || I || k !== d.ww.NONE
                              ? (0, r.jsxs)('div', {
                                    className: W.bannerUpperRightContainer,
                                    children: [
                                        I &&
                                            (0, r.jsx)('div', {
                                                className: W.promotedLabelWrapperBanner,
                                                children: (0, r.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: H.intl.string(H.t['/eVltr'])
                                                })
                                            }),
                                        Z && (0, r.jsx)($, {}),
                                        k !== d.ww.NONE && (0, r.jsx)(C.Z, { labelType: k })
                                    ]
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: W.bannerImageChildContainer,
                              children: p
                          })
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: a()(W.appDetailsContainer, { [W.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, r.jsx)(M.Z, {
                        src: y,
                        className: a()(W.icon, { [W.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: W.appDetails,
                        children: [
                            (0, r.jsxs)('div', {
                                className: W.appDetailsHeaderContainer,
                                children: [
                                    (0, r.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: v
                                    }),
                                    !T && I
                                        ? (0, r.jsx)('div', {
                                              className: W.promotedLabelWrapperNonBanner,
                                              children: (0, r.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: H.intl.string(H.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(ee, { application: t })
                                ]
                            }),
                            F
                                ? (0, r.jsx)(D.Z, {
                                      friends: U,
                                      onClick: _,
                                      shortText: !0,
                                      className: W.friendsWhoPlayHover
                                  })
                                : (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-secondary',
                                      lineClamp: 1,
                                      children: g
                                  })
                        ]
                    }),
                    'row' === n ? (0, r.jsx)('div', { className: W.rowDivider }) : null
                ]
            })
        ]
    });
}
function $() {
    return (0, r.jsx)(c.ua7, {
        text: H.intl.string(H.t.CfTySU),
        children: (e) => (0, r.jsx)('div', X(z({ className: W.devShelfBadge }, e), { children: (0, r.jsx)(A.Z, { className: W.devShelfIcon }) }))
    });
}
function ee(e) {
    let { application: t } = e,
        n = O.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, w.yJ)(t);
    if (null == i || !(0, w.BQ)(t)) return null;
    let l = (0, y.fD)(t, i);
    return null == l
        ? null
        : (0, r.jsx)(c.ua7, {
              text: l,
              children: (e) =>
                  (0, r.jsx)(
                      'img',
                      z(
                          {
                              className: W.staffBadge,
                              alt: l,
                              src: F
                          },
                          e
                      )
                  )
          });
}
function et(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: l, overrideImageUrl: o } = e;
    if (null != o)
        return (0, r.jsx)('img', {
            src: o,
            alt: (0, w.BQ)(t) ? t.name : '',
            className: a()(W.bannerImage, { [W.disableFadeIn]: l })
        });
    if ((0, w.BQ)(t)) {
        if ((0, w.ye)(t))
            return (0, r.jsx)(en, {
                application: t,
                showVideo: i,
                disableFadeIn: l
            });
        if (null != t.bot)
            return (0, r.jsx)(ei, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: l
            });
    }
    return (0, r.jsx)(er, {
        fallbackColor: n,
        disableFadeIn: l
    });
}
function en(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        o = (0, v.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        s = l.useMemo(() => {
            let e = (0, w.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, _.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, u] = l.useState(n);
    l.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = a()(W.bannerImage, { [W.disableFadeIn]: i });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s && c
                ? (0, r.jsx)('div', {
                      className: W.activityVideoContainer,
                      children: (0, r.jsx)('div', {
                          className: a()(W.activityVideo, { [W.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, r.jsx)(P.Z, {
                              src: s,
                              mediaLayoutType: U.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, r.jsx)(x.Z, {
                imageBackground: o,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d
            })
        ]
    });
}
function ei(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        l = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        o = (0, I.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !l,
            size: 600
        });
    return null == o
        ? (0, r.jsx)(er, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, r.jsx)('img', {
              src: o,
              alt: '',
              className: a()(W.bannerImage, { [W.disableFadeIn]: i })
          });
}
function er(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)('div', {
        className: a()(W.bannerImage, { [W.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function el(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: r, installOnDemand: o, location: a } = e,
        { pushHistory: s } = (0, L.hH)(),
        { friends: c } = (0, b.Z)(t),
        u = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, g.yw)(B.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: i,
                        source: T.Z.entrypoint(),
                        promotional_label: (0, w.dF)(t),
                        location: a,
                        query: r,
                        num_friends_who_play: c.length
                    }),
                    s({
                        type: L.gc.APPLICATION,
                        application: t,
                        installOnDemand: o,
                        sectionName: n
                    });
            },
            [t, o, a, s, r, i, n, c]
        ),
        d = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, g.yw)(B.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: i,
                        source: T.Z.entrypoint(),
                        promotional_label: (0, w.dF)(t),
                        location: a,
                        query: r,
                        num_friends_who_play: c.length,
                        tab_id: 'friends'
                    }),
                    s({
                        type: L.gc.APPLICATION,
                        application: t,
                        installOnDemand: o,
                        sectionName: n,
                        showFriendsTab: !0
                    });
            },
            [t, o, a, s, r, i, n, c]
        );
    return {
        onClickAppCard: u,
        onClickAppCardFriends: d
    };
}
function eo(e) {
    let { onClickAppCard: t, onClickAppCardFriends: n } = el(e);
    return (0, r.jsx)(
        Y,
        X(z({}, e), {
            onClick: t,
            onClickAppCardFriends: n
        })
    );
}
function ea(e) {
    var { context: t, application: n, location: i, sectionName: o, isOneClickCTA: a, fetchesApplication: u = !0 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['context', 'application', 'location', 'sectionName', 'isOneClickCTA', 'fetchesApplication']);
    if (!(0, w.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let p = l.useId(),
        [m, f] = (0, s.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        b = null != f && f.isLaunching && f.componentId === p,
        {
            onActivityItemSelected: _,
            activityAction: v,
            buttonColor: x,
            buttonText: C
        } = (0, R.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: o,
            launchingComponentId: p,
            fetchesApplication: u
        });
    return v === y.JS.START || v === y.JS.JOIN
        ? a
            ? (0, r.jsx)(
                  Y,
                  X(z({}, d), {
                      sectionName: o,
                      application: n,
                      onClick: _,
                      onClickAppCardFriends: _,
                      disabled: m,
                      enableVideoBanner: !b,
                      children: b
                          ? (0, r.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: W.spinner
                            })
                          : null
                  })
              )
            : (0, r.jsx)(
                  eo,
                  X(z({}, d), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: i
                  })
              )
        : (0, r.jsx)(
              Y,
              X(z({}, d), {
                  sectionName: o,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: W.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, r.jsx)('div', {
                      className: W.voiceLauncherAppCardContainer,
                      children: (0, r.jsx)(c.zxk, {
                          className: W.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: c.zxk.Sizes.LARGE,
                          color: x,
                          disabled: m,
                          onClick: _,
                          'aria-label': H.intl.formatToPlainString(H.t['XjP/R0'], {
                              buttonText: C,
                              applicationName: n.name
                          }),
                          submitting: b,
                          children: C
                      })
                  })
              })
          );
}
