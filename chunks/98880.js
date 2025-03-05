n.d(t, {
    U4: () => F,
    cG: () => et,
    kA: () => en,
    qR: () => ei
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
    d = n(110924),
    p = n(607070),
    m = n(115130),
    h = n(317381),
    f = n(361213),
    v = n(542094),
    N = n(778569),
    x = n(182906),
    y = n(556505),
    b = n(367907),
    E = n(220082),
    j = n(70097),
    C = n(973616),
    g = n(594174),
    P = n(695103),
    A = n(880448),
    I = n(768581),
    _ = n(541099),
    O = n(783097),
    S = n(695676),
    T = n(176412),
    L = n(226026),
    R = n(570949),
    Z = n(753972),
    k = n(981631),
    M = n(217702),
    w = n(388032),
    W = n(219954),
    U = n(413097),
    D = n(969728);
function H() {
    return (H =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function V(e) {
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
function B(e, t) {
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
var F = (((i = {}).ICON = 'icon'), (i.ROW = 'row'), (i.NO_BANNER = 'no_banner'), (i.MEDIUM_BANNER = 'medium_banner'), (i.LARGE_BANNER = 'large_banner'), i);
function G(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: r, imageStyle: o, enableVideoBanner: a = !0, children: s, sectionName: c, resultsPosition: u, sectionOverallPosition: p, tracksImpression: m = !0, disabled: h = !1, overrideImageUrl: f, showsPromoted: v } = e,
        N = null !== (t = (0, d.Z)(h)) && void 0 !== t ? t : h;
    return (0, l.jsx)(z, {
        application: n,
        onClick: r,
        sectionName: c,
        resultsPosition: u,
        disabled: h,
        tracksImpression: m,
        look: i,
        sectionOverallPosition: p,
        children:
            'icon' === i
                ? (0, l.jsx)(Y, {
                      application: n,
                      imageStyle: o,
                      children: s
                  })
                : (0, l.jsx)(q, {
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
function z(e) {
    let { application: t, onClick: n, children: i, sectionName: o, resultsPosition: s, sectionOverallPosition: d, tracksImpression: p, disabled: m, containerStyle: h, look: f } = e,
        v = r.useCallback(
            (e) => {
                if ((0, O.BQ)(t)) {
                    let n = t instanceof C.ZP ? t : C.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, l.jsx)(R.Z, V({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: N, description: x } = r.useMemo(() => (0, O.sl)(t, { fakeAppIconURL: U }), [t]),
        { trackItemImpressionRef: y } = (0, L.Z)({
            applicationId: t.id,
            applicationFlags: (0, O.BQ)(t) ? t.flags : void 0,
            sectionName: o,
            sectionPosition: s,
            sectionOverallPosition: d
        }),
        b = r.useMemo(() => {
            let e = m ? W.containerDisabled : W.container;
            return a()(
                e,
                {
                    [W.containerBorderRadius]: 'row' !== f,
                    [W.rowContainer]: 'row' === f,
                    [W.iconCard]: 'icon' === f
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
              'aria-label': w.NW.formatToPlainString(w.t['zLhr9/'], {
                  applicationName: N,
                  applicationDescription: x
              }),
              children: (0, l.jsx)(c.Rny, { children: i })
          });
}
function Y(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: o, iconURL: s } = r.useMemo(() => (0, O.sl)(t, { fakeAppIconURL: U }), [t]);
    return (0, l.jsx)(c.ua7, {
        tooltipContentClassName: W.tooltipContent,
        text: o,
        children: (e) => {
            var t = H(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, l.jsxs)(
                'div',
                B(V({ className: a()(W.iconContainer, n) }, t), {
                    children: [
                        (0, l.jsx)(Z.Z, {
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
function q(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: o, disableBannerFadeIn: u, children: d, overrideImageUrl: p, showsPromoted: h } = e,
        { iconURL: f, name: v, description: N } = r.useMemo(() => (0, O.sl)(t, { fakeAppIconURL: U }), [t]),
        x = r.useMemo(() => (null == N ? null : (0, T.ae)(N)), [N]),
        b = (0, E.ZP)(f, ''),
        [j, C] = r.useState(!1),
        g = r.useCallback(() => {
            !0 === o && C(!0);
        }, [o]),
        A = h || (0, O.lf)(t),
        I = 'large_banner' === n || 'medium_banner' === n,
        _ = r.useCallback(() => C(!1), []),
        S = (0, s.e7)([m.Z, P.Z], () => m.Z.inDevModeForApplication(t.id) || P.Z.inTestModeForApplication(t.id), [t.id]),
        L = (0, O.WA)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            I
                ? (0, l.jsxs)('div', {
                      onMouseEnter: g,
                      onFocus: g,
                      onMouseLeave: _,
                      onBlur: _,
                      className: a()(W.bannerImageContainer, {
                          [W.mediumBanner]: 'medium_banner' === n,
                          [W.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, l.jsx)('span', {
                              className: i,
                              children: (0, l.jsx)(J, {
                                  application: t,
                                  fallbackColor: b,
                                  showVideo: j,
                                  disableFadeIn: u,
                                  overrideImageUrl: p
                              })
                          }),
                          S || A || L
                              ? (0, l.jsxs)('div', {
                                    className: W.bannerUpperRightContainer,
                                    children: [
                                        A &&
                                            (0, l.jsx)('div', {
                                                className: W.promotedLabelWrapperBanner,
                                                children: (0, l.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: w.NW.string(w.t['/eVltr'])
                                                })
                                            }),
                                        S && (0, l.jsx)(X, {}),
                                        L &&
                                            (0, l.jsx)(y.Z, {
                                                name: (0, O.$d)(t),
                                                labelType: L
                                            })
                                    ]
                                })
                              : null,
                          (0, l.jsx)('div', {
                              className: W.bannerImageChildContainer,
                              children: d
                          })
                      ]
                  })
                : null,
            (0, l.jsxs)('div', {
                className: a()(W.appDetailsContainer, { [W.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, l.jsx)(Z.Z, {
                        src: f,
                        className: a()(W.icon, { [W.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: W.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: W.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: v
                                    }),
                                    !I && A
                                        ? (0, l.jsx)('div', {
                                              className: W.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: w.NW.string(w.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(Q, { application: t })
                                ]
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: x
                            })
                        ]
                    }),
                    'row' === n ? (0, l.jsx)('div', { className: W.rowDivider }) : null
                ]
            })
        ]
    });
}
function X() {
    return (0, l.jsx)(c.ua7, {
        text: w.NW.string(w.t.CfTySU),
        children: (e) => (0, l.jsx)('div', B(V({ className: W.devShelfBadge }, e), { children: (0, l.jsx)(A.Z, { className: W.devShelfIcon }) }))
    });
}
function Q(e) {
    let { application: t } = e,
        n = g.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, O.yJ)(t);
    if (null == i || !(0, O.BQ)(t)) return null;
    let r = (0, v.fD)(t, i);
    return null == r
        ? null
        : (0, l.jsx)(c.ua7, {
              text: r,
              children: (e) =>
                  (0, l.jsx)(
                      'img',
                      V(
                          {
                              className: W.staffBadge,
                              alt: r,
                              src: D
                          },
                          e
                      )
                  )
          });
}
function J(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: r, overrideImageUrl: o } = e;
    if (null != o)
        return (0, l.jsx)('img', {
            src: o,
            alt: (0, O.BQ)(t) ? t.name : '',
            className: a()(W.bannerImage, { [W.disableFadeIn]: r })
        });
    if ((0, O.BQ)(t)) {
        if ((0, O.ye)(t))
            return (0, l.jsx)(K, {
                application: t,
                showVideo: i,
                disableFadeIn: r
            });
        if (null != t.bot)
            return (0, l.jsx)($, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: r
            });
    }
    return (0, l.jsx)(ee, {
        fallbackColor: n,
        disableFadeIn: r
    });
}
function K(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        o = (0, N.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        s = r.useMemo(() => {
            let e = (0, O.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, f.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, u] = r.useState(n);
    r.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = a()(W.bannerImage, { [W.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != s && c
                ? (0, l.jsx)('div', {
                      className: W.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: a()(W.activityVideo, { [W.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, l.jsx)(j.Z, {
                              src: s,
                              mediaLayoutType: M.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, l.jsx)(x.Z, {
                imageBackground: o,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d
            })
        ]
    });
}
function $(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        r = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, I.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !r,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(ee, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: a()(W.bannerImage, { [W.disableFadeIn]: i })
          });
}
function ee(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, l.jsx)('div', {
        className: a()(W.bannerImage, { [W.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function et(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: o, location: a } = e,
        { pushHistory: s } = (0, S.hH)();
    return r.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, b.yw)(k.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: t.id,
                    section_name: n,
                    search_results_position: i,
                    source: _.Z.entrypoint(),
                    location: a,
                    query: l
                }),
                s({
                    type: S.gc.APPLICATION,
                    application: t,
                    installOnDemand: o,
                    sectionName: n
                });
        },
        [t, o, a, s, l, i, n]
    );
}
function en(e) {
    let t = et(e);
    return (0, l.jsx)(G, B(V({}, e), { onClick: t }));
}
function ei(e) {
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
    if (!(0, O.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let p = r.useId(),
        [m, f] = (0, s.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        N = null != f && f.isLaunching && f.componentId === p,
        {
            onActivityItemSelected: x,
            activityAction: y,
            buttonColor: b,
            buttonText: E
        } = (0, T.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: o,
            launchingComponentId: p,
            fetchesApplication: u
        });
    return y === v.JS.START || y === v.JS.JOIN
        ? a
            ? (0, l.jsx)(
                  G,
                  B(V({}, d), {
                      sectionName: o,
                      application: n,
                      onClick: x,
                      disabled: m,
                      enableVideoBanner: !N,
                      children: N
                          ? (0, l.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: W.spinner
                            })
                          : null
                  })
              )
            : (0, l.jsx)(
                  en,
                  B(V({}, d), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: i
                  })
              )
        : (0, l.jsx)(
              G,
              B(V({}, d), {
                  sectionName: o,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: W.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, l.jsx)('div', {
                      className: W.voiceLauncherAppCardContainer,
                      children: (0, l.jsx)(c.zxk, {
                          className: W.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: c.zxk.Sizes.LARGE,
                          color: b,
                          disabled: m,
                          onClick: x,
                          'aria-label': w.NW.formatToPlainString(w.t['XjP/R0'], {
                              buttonText: E,
                              applicationName: n.name
                          }),
                          submitting: N,
                          children: E
                      })
                  })
              })
          );
}
