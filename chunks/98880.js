n.d(t, {
    U4: () => z,
    cG: () => en,
    kA: () => ei,
    qR: () => er
}),
    n(266796),
    n(789020),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(442837),
    s = n(481060),
    u = n(239091),
    d = n(911969),
    p = n(110924),
    m = n(607070),
    f = n(115130),
    h = n(317381),
    b = n(361213),
    C = n(542094),
    _ = n(778569),
    x = n(182906),
    v = n(556505),
    y = n(367907),
    N = n(220082),
    g = n(70097),
    j = n(973616),
    P = n(594174),
    E = n(695103),
    A = n(880448),
    O = n(768581),
    I = n(541099),
    S = n(783097),
    T = n(695676),
    L = n(176412),
    R = n(226026),
    w = n(570949),
    k = n(753972),
    Z = n(981631),
    M = n(217702),
    D = n(388032),
    W = n(860901),
    U = n(413097),
    B = n(969728);
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
var z = (((i = {}).ICON = 'icon'), (i.ROW = 'row'), (i.NO_BANNER = 'no_banner'), (i.MEDIUM_BANNER = 'medium_banner'), (i.LARGE_BANNER = 'large_banner'), i);
function G(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: l, imageStyle: a, enableVideoBanner: o = !0, children: c, sectionName: s, resultsPosition: u, sectionOverallPosition: d, tracksImpression: m = !0, disabled: f = !1, overrideImageUrl: h, showsPromoted: b } = e,
        C = null != (t = (0, p.Z)(f)) ? t : f;
    return (0, r.jsx)(q, {
        application: n,
        onClick: l,
        sectionName: s,
        resultsPosition: u,
        disabled: f,
        tracksImpression: m,
        look: i,
        sectionOverallPosition: d,
        children:
            'icon' === i
                ? (0, r.jsx)(X, {
                      application: n,
                      imageStyle: a,
                      children: c
                  })
                : (0, r.jsx)(Y, {
                      application: n,
                      look: i,
                      imageStyle: a,
                      enableVideoBanner: o,
                      disableBannerFadeIn: C !== f,
                      overrideImageUrl: h,
                      showsPromoted: b,
                      children: c
                  })
    });
}
function q(e) {
    let { application: t, onClick: n, children: i, sectionName: a, resultsPosition: c, sectionOverallPosition: d, tracksImpression: p, disabled: m, containerStyle: f, look: h } = e,
        b = l.useCallback(
            (e) => {
                if ((0, S.BQ)(t)) {
                    let n = t instanceof j.ZP ? t : j.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, r.jsx)(w.Z, V({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: C, description: _ } = l.useMemo(() => (0, S.sl)(t, { fakeAppIconURL: U }), [t]),
        { trackItemImpressionRef: x } = (0, R.Z)({
            applicationId: t.id,
            applicationFlags: (0, S.BQ)(t) ? t.flags : void 0,
            sectionName: a,
            sectionPosition: c,
            sectionOverallPosition: d
        }),
        v = l.useMemo(() => {
            let e = m ? W.containerDisabled : W.container;
            return o()(
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
              ref: p ? x : void 0,
              className: v,
              children: i
          })
        : (0, r.jsx)(s.P3F, {
              innerRef: p ? x : void 0,
              className: v,
              onClick: n,
              onContextMenu: b,
              'aria-label': D.NW.formatToPlainString(D.t['zLhr9/'], {
                  applicationName: C,
                  applicationDescription: _
              }),
              children: (0, r.jsx)(s.Rny, { children: i })
          });
}
function X(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: a, iconURL: c } = l.useMemo(() => (0, S.sl)(t, { fakeAppIconURL: U }), [t]);
    return (0, r.jsx)(s.ua7, {
        tooltipContentClassName: W.tooltipContent,
        text: a,
        children: (e) => {
            var t = H(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, r.jsxs)(
                'div',
                F(V({ className: o()(W.iconContainer, n) }, t), {
                    children: [
                        (0, r.jsx)(k.Z, {
                            src: c,
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
function Y(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: a, disableBannerFadeIn: u, children: p, overrideImageUrl: m, showsPromoted: h } = e,
        { iconURL: b, name: C, description: _ } = l.useMemo(() => (0, S.sl)(t, { fakeAppIconURL: U }), [t]),
        x = l.useMemo(() => (null == _ ? null : (0, L.ae)(_)), [_]),
        y = (0, N.ZP)(b, ''),
        [g, j] = l.useState(!1),
        P = l.useCallback(() => {
            !0 === a && j(!0);
        }, [a]),
        A = h || (0, S.lf)(t),
        O = 'large_banner' === n || 'medium_banner' === n,
        I = l.useCallback(() => j(!1), []),
        T = (0, c.e7)([f.Z, E.Z], () => f.Z.inDevModeForApplication(t.id) || E.Z.inTestModeForApplication(t.id), [t.id]),
        R = (0, S.WA)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O
                ? (0, r.jsxs)('div', {
                      onMouseEnter: P,
                      onFocus: P,
                      onMouseLeave: I,
                      onBlur: I,
                      className: o()(W.bannerImageContainer, {
                          [W.mediumBanner]: 'medium_banner' === n,
                          [W.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, r.jsx)('span', {
                              className: i,
                              children: (0, r.jsx)(K, {
                                  application: t,
                                  fallbackColor: y,
                                  showVideo: g,
                                  disableFadeIn: u,
                                  overrideImageUrl: m
                              })
                          }),
                          T || A || R !== d.ww.NONE
                              ? (0, r.jsxs)('div', {
                                    className: W.bannerUpperRightContainer,
                                    children: [
                                        A &&
                                            (0, r.jsx)('div', {
                                                className: W.promotedLabelWrapperBanner,
                                                children: (0, r.jsx)(s.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: D.NW.string(D.t['/eVltr'])
                                                })
                                            }),
                                        T && (0, r.jsx)(Q, {}),
                                        R !== d.ww.NONE && (0, r.jsx)(v.Z, { labelType: R })
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
                className: o()(W.appDetailsContainer, { [W.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, r.jsx)(k.Z, {
                        src: b,
                        className: o()(W.icon, { [W.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: W.appDetails,
                        children: [
                            (0, r.jsxs)('div', {
                                className: W.appDetailsHeaderContainer,
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: C
                                    }),
                                    !O && A
                                        ? (0, r.jsx)('div', {
                                              className: W.promotedLabelWrapperNonBanner,
                                              children: (0, r.jsx)(s.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: D.NW.string(D.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(J, { application: t })
                                ]
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: x
                            })
                        ]
                    }),
                    'row' === n ? (0, r.jsx)('div', { className: W.rowDivider }) : null
                ]
            })
        ]
    });
}
function Q() {
    return (0, r.jsx)(s.ua7, {
        text: D.NW.string(D.t.CfTySU),
        children: (e) => (0, r.jsx)('div', F(V({ className: W.devShelfBadge }, e), { children: (0, r.jsx)(A.Z, { className: W.devShelfIcon }) }))
    });
}
function J(e) {
    let { application: t } = e,
        n = P.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, S.yJ)(t);
    if (null == i || !(0, S.BQ)(t)) return null;
    let l = (0, C.fD)(t, i);
    return null == l
        ? null
        : (0, r.jsx)(s.ua7, {
              text: l,
              children: (e) =>
                  (0, r.jsx)(
                      'img',
                      V(
                          {
                              className: W.staffBadge,
                              alt: l,
                              src: B
                          },
                          e
                      )
                  )
          });
}
function K(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: l, overrideImageUrl: a } = e;
    if (null != a)
        return (0, r.jsx)('img', {
            src: a,
            alt: (0, S.BQ)(t) ? t.name : '',
            className: o()(W.bannerImage, { [W.disableFadeIn]: l })
        });
    if ((0, S.BQ)(t)) {
        if ((0, S.ye)(t))
            return (0, r.jsx)($, {
                application: t,
                showVideo: i,
                disableFadeIn: l
            });
        if (null != t.bot)
            return (0, r.jsx)(ee, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: l
            });
    }
    return (0, r.jsx)(et, {
        fallbackColor: n,
        disableFadeIn: l
    });
}
function $(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        a = (0, _.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        c = l.useMemo(() => {
            let e = (0, S.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, b.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [s, u] = l.useState(n);
    l.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(W.bannerImage, { [W.disableFadeIn]: i });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != c && s
                ? (0, r.jsx)('div', {
                      className: W.activityVideoContainer,
                      children: (0, r.jsx)('div', {
                          className: o()(W.activityVideo, { [W.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, r.jsx)(g.Z, {
                              src: c,
                              mediaLayoutType: M.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, r.jsx)(x.Z, {
                imageBackground: a,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d
            })
        ]
    });
}
function ee(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        l = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        a = (0, O.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !l,
            size: 600
        });
    return null == a
        ? (0, r.jsx)(et, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, r.jsx)('img', {
              src: a,
              alt: '',
              className: o()(W.bannerImage, { [W.disableFadeIn]: i })
          });
}
function et(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)('div', {
        className: o()(W.bannerImage, { [W.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function en(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: r, installOnDemand: a, location: o } = e,
        { pushHistory: c } = (0, T.hH)();
    return l.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, y.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: t.id,
                    section_name: n,
                    search_results_position: i,
                    source: I.Z.entrypoint(),
                    location: o,
                    query: r
                }),
                c({
                    type: T.gc.APPLICATION,
                    application: t,
                    installOnDemand: a,
                    sectionName: n
                });
        },
        [t, a, o, c, r, i, n]
    );
}
function ei(e) {
    let t = en(e);
    return (0, r.jsx)(G, F(V({}, e), { onClick: t }));
}
function er(e) {
    var { context: t, application: n, location: i, sectionName: a, isOneClickCTA: o, fetchesApplication: u = !0 } = e,
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
    if (!(0, S.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let p = l.useId(),
        [m, f] = (0, c.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        b = null != f && f.isLaunching && f.componentId === p,
        {
            onActivityItemSelected: _,
            activityAction: x,
            buttonColor: v,
            buttonText: y
        } = (0, L.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: a,
            launchingComponentId: p,
            fetchesApplication: u
        });
    return x === C.JS.START || x === C.JS.JOIN
        ? o
            ? (0, r.jsx)(
                  G,
                  F(V({}, d), {
                      sectionName: a,
                      application: n,
                      onClick: _,
                      disabled: m,
                      enableVideoBanner: !b,
                      children: b
                          ? (0, r.jsx)(s.$jN, {
                                type: s.$jN.Type.PULSING_ELLIPSIS,
                                className: W.spinner
                            })
                          : null
                  })
              )
            : (0, r.jsx)(
                  ei,
                  F(V({}, d), {
                      context: t,
                      sectionName: a,
                      application: n,
                      location: i
                  })
              )
        : (0, r.jsx)(
              G,
              F(V({}, d), {
                  sectionName: a,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: W.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, r.jsx)('div', {
                      className: W.voiceLauncherAppCardContainer,
                      children: (0, r.jsx)(s.zxk, {
                          className: W.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: s.zxk.Sizes.LARGE,
                          color: v,
                          disabled: m,
                          onClick: _,
                          'aria-label': D.NW.formatToPlainString(D.t['XjP/R0'], {
                              buttonText: y,
                              applicationName: n.name
                          }),
                          submitting: b,
                          children: y
                      })
                  })
              })
          );
}
