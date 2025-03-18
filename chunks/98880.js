n.d(t, {
    U4: () => G,
    cG: () => en,
    kA: () => ei,
    qR: () => el
}),
    n(266796),
    n(789020),
    n(47120),
    n(411104);
var i,
    l = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(911969),
    p = n(110924),
    m = n(607070),
    h = n(115130),
    f = n(317381),
    v = n(361213),
    N = n(542094),
    x = n(778569),
    y = n(182906),
    b = n(556505),
    E = n(367907),
    j = n(220082),
    C = n(70097),
    g = n(973616),
    P = n(594174),
    A = n(695103),
    I = n(880448),
    _ = n(768581),
    O = n(541099),
    S = n(783097),
    T = n(695676),
    L = n(176412),
    R = n(226026),
    Z = n(570949),
    k = n(753972),
    M = n(981631),
    w = n(217702),
    W = n(388032),
    U = n(219954),
    D = n(413097),
    H = n(969728);
function V() {
    return (V =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function B(e) {
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
function F(e, t) {
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
var G = (((i = {}).ICON = 'icon'), (i.ROW = 'row'), (i.NO_BANNER = 'no_banner'), (i.MEDIUM_BANNER = 'medium_banner'), (i.LARGE_BANNER = 'large_banner'), i);
function z(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: r, imageStyle: o, enableVideoBanner: a = !0, children: s, sectionName: c, resultsPosition: u, sectionOverallPosition: d, tracksImpression: m = !0, disabled: h = !1, overrideImageUrl: f, showsPromoted: v } = e,
        N = null !== (t = (0, p.Z)(h)) && void 0 !== t ? t : h;
    return (0, l.jsx)(Y, {
        application: n,
        onClick: r,
        sectionName: c,
        resultsPosition: u,
        disabled: h,
        tracksImpression: m,
        look: i,
        sectionOverallPosition: d,
        children:
            'icon' === i
                ? (0, l.jsx)(q, {
                      application: n,
                      imageStyle: o,
                      children: s
                  })
                : (0, l.jsx)(X, {
                      application: n,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: a,
                      disableBannerFadeIn: N !== h,
                      overrideImageUrl: f,
                      showsPromoted: v,
                      children: s
                  })
    });
}
function Y(e) {
    let { application: t, onClick: n, children: i, sectionName: o, resultsPosition: s, sectionOverallPosition: d, tracksImpression: p, disabled: m, containerStyle: h, look: f } = e,
        v = r.useCallback(
            (e) => {
                if ((0, S.BQ)(t)) {
                    let n = t instanceof g.ZP ? t : g.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, l.jsx)(Z.Z, B({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: N, description: x } = r.useMemo(() => (0, S.sl)(t, { fakeAppIconURL: D }), [t]),
        { trackItemImpressionRef: y } = (0, R.Z)({
            applicationId: t.id,
            applicationFlags: (0, S.BQ)(t) ? t.flags : void 0,
            sectionName: o,
            sectionPosition: s,
            sectionOverallPosition: d
        }),
        b = r.useMemo(() => {
            let e = m ? U.containerDisabled : U.container;
            return a()(
                e,
                {
                    [U.containerBorderRadius]: 'row' !== f,
                    [U.rowContainer]: 'row' === f,
                    [U.iconCard]: 'icon' === f
                },
                h
            );
        }, [h, m, f]);
    return m
        ? (0, l.jsx)('div', {
              ref: p ? y : void 0,
              className: b,
              children: i
          })
        : (0, l.jsx)(c.P3F, {
              innerRef: p ? y : void 0,
              className: b,
              onClick: n,
              onContextMenu: v,
              'aria-label': W.NW.formatToPlainString(W.t['zLhr9/'], {
                  applicationName: N,
                  applicationDescription: x
              }),
              children: (0, l.jsx)(c.Rny, { children: i })
          });
}
function q(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: o, iconURL: s } = r.useMemo(() => (0, S.sl)(t, { fakeAppIconURL: D }), [t]);
    return (0, l.jsx)(c.ua7, {
        tooltipContentClassName: U.tooltipContent,
        text: o,
        children: (e) => {
            var t = V(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, l.jsxs)(
                'div',
                F(B({ className: a()(U.iconContainer, n) }, t), {
                    children: [
                        (0, l.jsx)(k.Z, {
                            src: s,
                            className: U.iconCard,
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
function X(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: o, disableBannerFadeIn: u, children: p, overrideImageUrl: m, showsPromoted: f } = e,
        { iconURL: v, name: N, description: x } = r.useMemo(() => (0, S.sl)(t, { fakeAppIconURL: D }), [t]),
        y = r.useMemo(() => (null == x ? null : (0, L.ae)(x)), [x]),
        E = (0, j.ZP)(v, ''),
        [C, g] = r.useState(!1),
        P = r.useCallback(() => {
            !0 === o && g(!0);
        }, [o]),
        I = f || (0, S.lf)(t),
        _ = 'large_banner' === n || 'medium_banner' === n,
        O = r.useCallback(() => g(!1), []),
        T = (0, s.e7)([h.Z, A.Z], () => h.Z.inDevModeForApplication(t.id) || A.Z.inTestModeForApplication(t.id), [t.id]),
        R = (0, S.WA)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            _
                ? (0, l.jsxs)('div', {
                      onMouseEnter: P,
                      onFocus: P,
                      onMouseLeave: O,
                      onBlur: O,
                      className: a()(U.bannerImageContainer, {
                          [U.mediumBanner]: 'medium_banner' === n,
                          [U.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, l.jsx)('span', {
                              className: i,
                              children: (0, l.jsx)(K, {
                                  application: t,
                                  fallbackColor: E,
                                  showVideo: C,
                                  disableFadeIn: u,
                                  overrideImageUrl: m
                              })
                          }),
                          T || I || R !== d.ww.NONE
                              ? (0, l.jsxs)('div', {
                                    className: U.bannerUpperRightContainer,
                                    children: [
                                        I &&
                                            (0, l.jsx)('div', {
                                                className: U.promotedLabelWrapperBanner,
                                                children: (0, l.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: W.NW.string(W.t['/eVltr'])
                                                })
                                            }),
                                        T && (0, l.jsx)(Q, {}),
                                        R !== d.ww.NONE && (0, l.jsx)(b.Z, { labelType: R })
                                    ]
                                })
                              : null,
                          (0, l.jsx)('div', {
                              className: U.bannerImageChildContainer,
                              children: p
                          })
                      ]
                  })
                : null,
            (0, l.jsxs)('div', {
                className: a()(U.appDetailsContainer, { [U.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, l.jsx)(k.Z, {
                        src: v,
                        className: a()(U.icon, { [U.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: U.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: U.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: N
                                    }),
                                    !_ && I
                                        ? (0, l.jsx)('div', {
                                              className: U.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: W.NW.string(W.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(J, { application: t })
                                ]
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: y
                            })
                        ]
                    }),
                    'row' === n ? (0, l.jsx)('div', { className: U.rowDivider }) : null
                ]
            })
        ]
    });
}
function Q() {
    return (0, l.jsx)(c.ua7, {
        text: W.NW.string(W.t.CfTySU),
        children: (e) => (0, l.jsx)('div', F(B({ className: U.devShelfBadge }, e), { children: (0, l.jsx)(I.Z, { className: U.devShelfIcon }) }))
    });
}
function J(e) {
    let { application: t } = e,
        n = P.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, S.yJ)(t);
    if (null == i || !(0, S.BQ)(t)) return null;
    let r = (0, N.fD)(t, i);
    return null == r
        ? null
        : (0, l.jsx)(c.ua7, {
              text: r,
              children: (e) =>
                  (0, l.jsx)(
                      'img',
                      B(
                          {
                              className: U.staffBadge,
                              alt: r,
                              src: H
                          },
                          e
                      )
                  )
          });
}
function K(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: r, overrideImageUrl: o } = e;
    if (null != o)
        return (0, l.jsx)('img', {
            src: o,
            alt: (0, S.BQ)(t) ? t.name : '',
            className: a()(U.bannerImage, { [U.disableFadeIn]: r })
        });
    if ((0, S.BQ)(t)) {
        if ((0, S.ye)(t))
            return (0, l.jsx)($, {
                application: t,
                showVideo: i,
                disableFadeIn: r
            });
        if (null != t.bot)
            return (0, l.jsx)(ee, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: r
            });
    }
    return (0, l.jsx)(et, {
        fallbackColor: n,
        disableFadeIn: r
    });
}
function $(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        o = (0, x.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        s = r.useMemo(() => {
            let e = (0, S.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, v.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, u] = r.useState(n);
    r.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = a()(U.bannerImage, { [U.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != s && c
                ? (0, l.jsx)('div', {
                      className: U.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: a()(U.activityVideo, { [U.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, l.jsx)(C.Z, {
                              src: s,
                              mediaLayoutType: w.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, l.jsx)(y.Z, {
                imageBackground: o,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d
            })
        ]
    });
}
function ee(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        r = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        o = (0, _.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !r,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(et, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: a()(U.bannerImage, { [U.disableFadeIn]: i })
          });
}
function et(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, l.jsx)('div', {
        className: a()(U.bannerImage, { [U.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function en(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: o, location: a } = e,
        { pushHistory: s } = (0, T.hH)();
    return r.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, E.yw)(M.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: t.id,
                    section_name: n,
                    search_results_position: i,
                    source: O.Z.entrypoint(),
                    location: a,
                    query: l
                }),
                s({
                    type: T.gc.APPLICATION,
                    application: t,
                    installOnDemand: o,
                    sectionName: n
                });
        },
        [t, o, a, s, l, i, n]
    );
}
function ei(e) {
    let t = en(e);
    return (0, l.jsx)(z, F(B({}, e), { onClick: t }));
}
function el(e) {
    var { context: t, application: n, location: i, sectionName: o, isOneClickCTA: a, fetchesApplication: u = !0 } = e,
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
                for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['context', 'application', 'location', 'sectionName', 'isOneClickCTA', 'fetchesApplication']);
    if (!(0, S.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let p = r.useId(),
        [m, h] = (0, s.Wu)([f.ZP], () => [f.ZP.isLaunchingActivity(), f.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        v = null != h && h.isLaunching && h.componentId === p,
        {
            onActivityItemSelected: x,
            activityAction: y,
            buttonColor: b,
            buttonText: E
        } = (0, L.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: o,
            launchingComponentId: p,
            fetchesApplication: u
        });
    return y === N.JS.START || y === N.JS.JOIN
        ? a
            ? (0, l.jsx)(
                  z,
                  F(B({}, d), {
                      sectionName: o,
                      application: n,
                      onClick: x,
                      disabled: m,
                      enableVideoBanner: !v,
                      children: v
                          ? (0, l.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: U.spinner
                            })
                          : null
                  })
              )
            : (0, l.jsx)(
                  ei,
                  F(B({}, d), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: i
                  })
              )
        : (0, l.jsx)(
              z,
              F(B({}, d), {
                  sectionName: o,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: U.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, l.jsx)('div', {
                      className: U.voiceLauncherAppCardContainer,
                      children: (0, l.jsx)(c.zxk, {
                          className: U.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: c.zxk.Sizes.LARGE,
                          color: b,
                          disabled: m,
                          onClick: x,
                          'aria-label': W.NW.formatToPlainString(W.t['XjP/R0'], {
                              buttonText: E,
                              applicationName: n.name
                          }),
                          submitting: v,
                          children: E
                      })
                  })
              })
          );
}
