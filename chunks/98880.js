n.d(t, {
    U4: () => G,
    cG: () => ei,
    kA: () => er,
    qR: () => el
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var i,
    r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    c = n(442837),
    s = n(481060),
    u = n(239091),
    d = n(911969),
    p = n(110924),
    m = n(607070),
    f = n(115130),
    h = n(317381),
    b = n(723163),
    _ = n(361213),
    C = n(542094),
    v = n(778569),
    x = n(182906),
    y = n(556505),
    g = n(367907),
    N = n(220082),
    j = n(70097),
    P = n(973616),
    E = n(594174),
    A = n(695103),
    I = n(880448),
    O = n(768581),
    S = n(541099),
    T = n(783097),
    L = n(695676),
    R = n(176412),
    w = n(226026),
    Z = n(570949),
    k = n(753972),
    M = n(981631),
    D = n(217702),
    U = n(388032),
    B = n(860901),
    H = n(413097),
    V = n(969728);
function W() {
    return (W =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function F(e) {
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
function z(e, t) {
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
function q(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: l, imageStyle: o, enableVideoBanner: a = !0, children: c, sectionName: s, resultsPosition: u, sectionOverallPosition: d, tracksImpression: m = !0, disabled: f = !1, overrideImageUrl: h, showsPromoted: b } = e,
        _ = null != (t = (0, p.Z)(f)) ? t : f;
    return (0, r.jsx)(Y, {
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
                      imageStyle: o,
                      children: c
                  })
                : (0, r.jsx)(Q, {
                      application: n,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: a,
                      disableBannerFadeIn: _ !== f,
                      overrideImageUrl: h,
                      showsPromoted: b,
                      children: c
                  })
    });
}
function Y(e) {
    let { application: t, onClick: n, children: i, sectionName: o, resultsPosition: c, sectionOverallPosition: d, tracksImpression: p, disabled: m, containerStyle: f, look: h } = e,
        b = l.useCallback(
            (e) => {
                if ((0, T.BQ)(t)) {
                    let n = t instanceof P.ZP ? t : P.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, r.jsx)(Z.Z, F({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: _, description: C } = l.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: H }), [t]),
        { trackItemImpressionRef: v } = (0, w.Z)({
            applicationId: t.id,
            applicationFlags: (0, T.BQ)(t) ? t.flags : void 0,
            sectionName: o,
            sectionPosition: c,
            sectionOverallPosition: d,
            promotionalLabel: (0, T.dF)(t)
        }),
        x = l.useMemo(() => {
            let e = m ? B.containerDisabled : B.container;
            return a()(
                e,
                {
                    [B.containerBorderRadius]: 'row' !== h,
                    [B.rowContainer]: 'row' === h,
                    [B.iconCard]: 'icon' === h
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
        : (0, r.jsx)(s.P3F, {
              innerRef: p ? v : void 0,
              className: x,
              onClick: n,
              onContextMenu: b,
              'aria-label': U.intl.formatToPlainString(U.t['zLhr9/'], {
                  applicationName: _,
                  applicationDescription: C
              }),
              children: (0, r.jsx)(s.Rny, { children: i })
          });
}
function X(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: o, iconURL: c } = l.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: H }), [t]);
    return (0, r.jsx)(s.ua7, {
        tooltipContentClassName: B.tooltipContent,
        text: o,
        children: (e) => {
            var t = W(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, r.jsxs)(
                'div',
                z(F({ className: a()(B.iconContainer, n) }, t), {
                    children: [
                        (0, r.jsx)(k.Z, {
                            src: c,
                            className: B.iconCard,
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
function Q(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: o, disableBannerFadeIn: u, children: p, overrideImageUrl: m, showsPromoted: h } = e,
        { iconURL: b, name: _, description: C } = l.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: H }), [t]),
        v = l.useMemo(() => (null == C ? null : (0, R.ae)(C)), [C]),
        x = (0, N.ZP)(b, ''),
        [g, j] = l.useState(!1),
        P = l.useCallback(() => {
            !0 === o && j(!0);
        }, [o]),
        E = h || (0, T.lf)(t),
        I = 'large_banner' === n || 'medium_banner' === n,
        O = l.useCallback(() => j(!1), []),
        S = (0, c.e7)([f.Z, A.Z], () => f.Z.inDevModeForApplication(t.id) || A.Z.inTestModeForApplication(t.id), [t.id]),
        L = (0, T.WA)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            I
                ? (0, r.jsxs)('div', {
                      onMouseEnter: P,
                      onFocus: P,
                      onMouseLeave: O,
                      onBlur: O,
                      className: a()(B.bannerImageContainer, {
                          [B.mediumBanner]: 'medium_banner' === n,
                          [B.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, r.jsx)('span', {
                              className: i,
                              children: (0, r.jsx)($, {
                                  application: t,
                                  fallbackColor: x,
                                  showVideo: g,
                                  disableFadeIn: u,
                                  overrideImageUrl: m
                              })
                          }),
                          S || E || L !== d.ww.NONE
                              ? (0, r.jsxs)('div', {
                                    className: B.bannerUpperRightContainer,
                                    children: [
                                        E &&
                                            (0, r.jsx)('div', {
                                                className: B.promotedLabelWrapperBanner,
                                                children: (0, r.jsx)(s.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: U.intl.string(U.t['/eVltr'])
                                                })
                                            }),
                                        S && (0, r.jsx)(J, {}),
                                        L !== d.ww.NONE && (0, r.jsx)(y.Z, { labelType: L })
                                    ]
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: B.bannerImageChildContainer,
                              children: p
                          })
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: a()(B.appDetailsContainer, { [B.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, r.jsx)(k.Z, {
                        src: b,
                        className: a()(B.icon, { [B.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: B.appDetails,
                        children: [
                            (0, r.jsxs)('div', {
                                className: B.appDetailsHeaderContainer,
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: _
                                    }),
                                    !I && E
                                        ? (0, r.jsx)('div', {
                                              className: B.promotedLabelWrapperNonBanner,
                                              children: (0, r.jsx)(s.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: U.intl.string(U.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(K, { application: t })
                                ]
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: v
                            })
                        ]
                    }),
                    'row' === n ? (0, r.jsx)('div', { className: B.rowDivider }) : null
                ]
            })
        ]
    });
}
function J() {
    return (0, r.jsx)(s.ua7, {
        text: U.intl.string(U.t.CfTySU),
        children: (e) => (0, r.jsx)('div', z(F({ className: B.devShelfBadge }, e), { children: (0, r.jsx)(I.Z, { className: B.devShelfIcon }) }))
    });
}
function K(e) {
    let { application: t } = e,
        n = E.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, T.yJ)(t);
    if (null == i || !(0, T.BQ)(t)) return null;
    let l = (0, C.fD)(t, i);
    return null == l
        ? null
        : (0, r.jsx)(s.ua7, {
              text: l,
              children: (e) =>
                  (0, r.jsx)(
                      'img',
                      F(
                          {
                              className: B.staffBadge,
                              alt: l,
                              src: V
                          },
                          e
                      )
                  )
          });
}
function $(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: l, overrideImageUrl: o } = e;
    if (null != o)
        return (0, r.jsx)('img', {
            src: o,
            alt: (0, T.BQ)(t) ? t.name : '',
            className: a()(B.bannerImage, { [B.disableFadeIn]: l })
        });
    if ((0, T.BQ)(t)) {
        if ((0, T.ye)(t))
            return (0, r.jsx)(ee, {
                application: t,
                showVideo: i,
                disableFadeIn: l
            });
        if (null != t.bot)
            return (0, r.jsx)(et, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: l
            });
    }
    return (0, r.jsx)(en, {
        fallbackColor: n,
        disableFadeIn: l
    });
}
function ee(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        o = (0, v.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        c = l.useMemo(() => {
            let e = (0, T.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, _.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [s, u] = l.useState(n);
    l.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = a()(B.bannerImage, { [B.disableFadeIn]: i });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != c && s
                ? (0, r.jsx)('div', {
                      className: B.activityVideoContainer,
                      children: (0, r.jsx)('div', {
                          className: a()(B.activityVideo, { [B.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, r.jsx)(j.Z, {
                              src: c,
                              mediaLayoutType: D.hV.MOSAIC,
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
function et(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        l = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        o = (0, O.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !l,
            size: 600
        });
    return null == o
        ? (0, r.jsx)(en, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, r.jsx)('img', {
              src: o,
              alt: '',
              className: a()(B.bannerImage, { [B.disableFadeIn]: i })
          });
}
function en(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)('div', {
        className: a()(B.bannerImage, { [B.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function ei(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: r, installOnDemand: o, location: a } = e,
        { pushHistory: c } = (0, L.hH)(),
        { friends: s } = (0, b.Z)(t);
    return {
        onClickAppCard: l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, g.yw)(M.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: i,
                        source: S.Z.entrypoint(),
                        promotional_label: (0, T.dF)(t),
                        location: a,
                        query: r,
                        num_friends_who_play: s.length
                    }),
                    c({
                        type: L.gc.APPLICATION,
                        application: t,
                        installOnDemand: o,
                        sectionName: n
                    });
            },
            [t, o, a, c, r, i, n, s]
        )
    };
}
function er(e) {
    let { onClickAppCard: t } = ei(e);
    return (0, r.jsx)(q, z(F({}, e), { onClick: t }));
}
function el(e) {
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
    if (!(0, T.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let p = l.useId(),
        [m, f] = (0, c.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        b = null != f && f.isLaunching && f.componentId === p,
        {
            onActivityItemSelected: _,
            activityAction: v,
            buttonColor: x,
            buttonText: y
        } = (0, R.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: o,
            launchingComponentId: p,
            fetchesApplication: u
        });
    return v === C.JS.START || v === C.JS.JOIN
        ? a
            ? (0, r.jsx)(
                  q,
                  z(F({}, d), {
                      sectionName: o,
                      application: n,
                      onClick: _,
                      disabled: m,
                      enableVideoBanner: !b,
                      children: b
                          ? (0, r.jsx)(s.$jN, {
                                type: s.$jN.Type.PULSING_ELLIPSIS,
                                className: B.spinner
                            })
                          : null
                  })
              )
            : (0, r.jsx)(
                  er,
                  z(F({}, d), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: i
                  })
              )
        : (0, r.jsx)(
              q,
              z(F({}, d), {
                  sectionName: o,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: B.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, r.jsx)('div', {
                      className: B.voiceLauncherAppCardContainer,
                      children: (0, r.jsx)(s.zxk, {
                          className: B.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: s.zxk.Sizes.LARGE,
                          color: x,
                          disabled: m,
                          onClick: _,
                          'aria-label': U.intl.formatToPlainString(U.t['XjP/R0'], {
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
