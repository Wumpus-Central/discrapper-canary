n.d(t, {
    U4: () => z,
    cG: () => el,
    kA: () => ei,
    qR: () => er
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506);
var l,
    i = n(255367),
    r = n(73800),
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
    P = n(973616),
    O = n(594174),
    A = n(695103),
    I = n(880448),
    _ = n(768581),
    S = n(541099),
    T = n(783097),
    L = n(695676),
    R = n(176412),
    Z = n(226026),
    w = n(570949),
    k = n(753972),
    M = n(981631),
    U = n(217702),
    D = n(388032),
    H = n(860901),
    V = n(413097),
    B = n(969728);
function W() {
    return (W =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
            }
            return e;
        }).apply(this, arguments);
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function G(e, t) {
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
var z = (((l = {}).ICON = 'icon'), (l.ROW = 'row'), (l.NO_BANNER = 'no_banner'), (l.MEDIUM_BANNER = 'medium_banner'), (l.LARGE_BANNER = 'large_banner'), l);
function q(e) {
    var t;
    let { application: n, look: l = 'large_banner', onClick: r, imageStyle: a, enableVideoBanner: o = !0, children: s, sectionName: c, resultsPosition: u, sectionOverallPosition: d, tracksImpression: m = !0, disabled: f = !1, overrideImageUrl: h, showsPromoted: v } = e,
        y = null != (t = (0, p.Z)(f)) ? t : f;
    return (0, i.jsx)(Y, {
        application: n,
        onClick: r,
        sectionName: c,
        resultsPosition: u,
        disabled: f,
        tracksImpression: m,
        look: l,
        sectionOverallPosition: d,
        children:
            'icon' === l
                ? (0, i.jsx)(X, {
                      application: n,
                      imageStyle: a,
                      children: s
                  })
                : (0, i.jsx)(Q, {
                      application: n,
                      look: l,
                      imageStyle: a,
                      enableVideoBanner: o,
                      disableBannerFadeIn: y !== f,
                      overrideImageUrl: h,
                      showsPromoted: v,
                      children: s
                  })
    });
}
function Y(e) {
    let { application: t, onClick: n, children: l, sectionName: a, resultsPosition: s, sectionOverallPosition: d, tracksImpression: p, disabled: m, containerStyle: f, look: h } = e,
        v = r.useCallback(
            (e) => {
                if ((0, T.BQ)(t)) {
                    let n = t instanceof P.ZP ? t : P.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, i.jsx)(w.Z, F({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: y, description: x } = r.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: V }), [t]),
        { trackItemImpressionRef: b } = (0, Z.Z)({
            applicationId: t.id,
            applicationFlags: (0, T.BQ)(t) ? t.flags : void 0,
            sectionName: a,
            sectionPosition: s,
            sectionOverallPosition: d,
            promotionalLabel: (0, T.dF)(t)
        }),
        g = r.useMemo(() => {
            let e = m ? H.containerDisabled : H.container;
            return o()(
                e,
                {
                    [H.containerBorderRadius]: 'row' !== h,
                    [H.rowContainer]: 'row' === h,
                    [H.iconCard]: 'icon' === h
                },
                f
            );
        }, [f, m, h]);
    return m
        ? (0, i.jsx)('div', {
              ref: p ? b : void 0,
              className: g,
              children: l
          })
        : (0, i.jsx)(c.P3F, {
              innerRef: p ? b : void 0,
              className: g,
              onClick: n,
              onContextMenu: v,
              'aria-label': D.intl.formatToPlainString(D.t['zLhr9/'], {
                  applicationName: y,
                  applicationDescription: x
              }),
              children: (0, i.jsx)(c.Rny, { children: l })
          });
}
function X(e) {
    let { application: t, imageStyle: n, children: l } = e,
        { name: a, iconURL: s } = r.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: V }), [t]);
    return (0, i.jsx)(c.ua7, {
        tooltipContentClassName: H.tooltipContent,
        text: a,
        children: (e) => {
            var t = W(
                {},
                (function (e) {
                    if (null == e) throw TypeError('Cannot destructure ' + e);
                    return e;
                })(e)
            );
            return (0, i.jsxs)(
                'div',
                G(F({ className: o()(H.iconContainer, n) }, t), {
                    children: [
                        (0, i.jsx)(k.Z, {
                            src: s,
                            className: H.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        l
                    ]
                })
            );
        }
    });
}
function Q(e) {
    let { application: t, look: n, imageStyle: l, enableVideoBanner: a, disableBannerFadeIn: u, children: p, overrideImageUrl: m, showsPromoted: h } = e,
        { iconURL: v, name: y, description: x } = r.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: V }), [t]),
        b = r.useMemo(() => (null == x ? null : (0, R.ae)(x)), [x]),
        g = (0, C.ZP)(v, ''),
        [N, E] = r.useState(!1),
        P = r.useCallback(() => {
            !0 === a && E(!0);
        }, [a]),
        O = h || (0, T.lf)(t),
        I = 'large_banner' === n || 'medium_banner' === n,
        _ = r.useCallback(() => E(!1), []),
        S = (0, s.e7)([f.Z, A.Z], () => f.Z.inDevModeForApplication(t.id) || A.Z.inTestModeForApplication(t.id), [t.id]),
        L = (0, T.WA)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            I
                ? (0, i.jsxs)('div', {
                      onMouseEnter: P,
                      onFocus: P,
                      onMouseLeave: _,
                      onBlur: _,
                      className: o()(H.bannerImageContainer, {
                          [H.mediumBanner]: 'medium_banner' === n,
                          [H.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, i.jsx)('span', {
                              className: l,
                              children: (0, i.jsx)($, {
                                  application: t,
                                  fallbackColor: g,
                                  showVideo: N,
                                  disableFadeIn: u,
                                  overrideImageUrl: m
                              })
                          }),
                          S || O || L !== d.ww.NONE
                              ? (0, i.jsxs)('div', {
                                    className: H.bannerUpperRightContainer,
                                    children: [
                                        O &&
                                            (0, i.jsx)('div', {
                                                className: H.promotedLabelWrapperBanner,
                                                children: (0, i.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: D.intl.string(D.t['/eVltr'])
                                                })
                                            }),
                                        S && (0, i.jsx)(J, {}),
                                        L !== d.ww.NONE && (0, i.jsx)(j.Z, { labelType: L })
                                    ]
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: H.bannerImageChildContainer,
                              children: p
                          })
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: o()(H.appDetailsContainer, { [H.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, i.jsx)(k.Z, {
                        src: v,
                        className: o()(H.icon, { [H.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, i.jsxs)('div', {
                        className: H.appDetails,
                        children: [
                            (0, i.jsxs)('div', {
                                className: H.appDetailsHeaderContainer,
                                children: [
                                    (0, i.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: y
                                    }),
                                    !I && O
                                        ? (0, i.jsx)('div', {
                                              className: H.promotedLabelWrapperNonBanner,
                                              children: (0, i.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: D.intl.string(D.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)(K, { application: t })
                                ]
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: b
                            })
                        ]
                    }),
                    'row' === n ? (0, i.jsx)('div', { className: H.rowDivider }) : null
                ]
            })
        ]
    });
}
function J() {
    return (0, i.jsx)(c.ua7, {
        text: D.intl.string(D.t.CfTySU),
        children: (e) => (0, i.jsx)('div', G(F({ className: H.devShelfBadge }, e), { children: (0, i.jsx)(I.Z, { className: H.devShelfIcon }) }))
    });
}
function K(e) {
    let { application: t } = e,
        n = O.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let l = (0, T.yJ)(t);
    if (null == l || !(0, T.BQ)(t)) return null;
    let r = (0, x.fD)(t, l);
    return null == r
        ? null
        : (0, i.jsx)(c.ua7, {
              text: r,
              children: (e) =>
                  (0, i.jsx)(
                      'img',
                      F(
                          {
                              className: H.staffBadge,
                              alt: r,
                              src: B
                          },
                          e
                      )
                  )
          });
}
function $(e) {
    let { application: t, fallbackColor: n, showVideo: l, disableFadeIn: r, overrideImageUrl: a } = e;
    if (null != a)
        return (0, i.jsx)('img', {
            src: a,
            alt: (0, T.BQ)(t) ? t.name : '',
            className: o()(H.bannerImage, { [H.disableFadeIn]: r })
        });
    if ((0, T.BQ)(t)) {
        if ((0, T.ye)(t))
            return (0, i.jsx)(ee, {
                application: t,
                showVideo: l,
                disableFadeIn: r
            });
        if (null != t.bot)
            return (0, i.jsx)(et, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: r
            });
    }
    return (0, i.jsx)(en, {
        fallbackColor: n,
        disableFadeIn: r
    });
}
function ee(e) {
    let { application: t, showVideo: n, disableFadeIn: l } = e,
        a = (0, b.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        s = r.useMemo(() => {
            let e = (0, T.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, y.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, u] = r.useState(n);
    r.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(H.bannerImage, { [H.disableFadeIn]: l });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != s && c
                ? (0, i.jsx)('div', {
                      className: H.activityVideoContainer,
                      children: (0, i.jsx)('div', {
                          className: o()(H.activityVideo, { [H.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, i.jsx)(E.Z, {
                              src: s,
                              mediaLayoutType: U.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, i.jsx)(g.Z, {
                imageBackground: a,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d
            })
        ]
    });
}
function et(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: l } = e,
        r = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        a = (0, _.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !r,
            size: 600
        });
    return null == a
        ? (0, i.jsx)(en, {
              fallbackColor: n,
              disableFadeIn: l
          })
        : (0, i.jsx)('img', {
              src: a,
              alt: '',
              className: o()(H.bannerImage, { [H.disableFadeIn]: l })
          });
}
function en(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, i.jsx)('div', {
        className: o()(H.bannerImage, { [H.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function el(e) {
    let { application: t, sectionName: n, resultsPosition: l, query: i, installOnDemand: a, location: o } = e,
        { pushHistory: s } = (0, L.hH)(),
        { friends: c } = (0, v.Z)(t);
    return {
        onClickAppCard: r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, N.yw)(M.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: l,
                        source: S.Z.entrypoint(),
                        promotional_label: (0, T.dF)(t),
                        location: o,
                        query: i,
                        num_friends_who_play: c.length
                    }),
                    s({
                        type: L.gc.APPLICATION,
                        application: t,
                        installOnDemand: a,
                        sectionName: n
                    });
            },
            [t, a, o, s, i, l, n, c]
        )
    };
}
function ei(e) {
    let { onClickAppCard: t } = el(e);
    return (0, i.jsx)(q, G(F({}, e), { onClick: t }));
}
function er(e) {
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
                for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['context', 'application', 'location', 'sectionName', 'isOneClickCTA', 'fetchesApplication']);
    if (!(0, T.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let p = r.useId(),
        [m, f] = (0, s.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        v = null != f && f.isLaunching && f.componentId === p,
        {
            onActivityItemSelected: y,
            activityAction: b,
            buttonColor: g,
            buttonText: j
        } = (0, R.P7)({
            context: t,
            application: n,
            location: l,
            sectionName: a,
            launchingComponentId: p,
            fetchesApplication: u
        });
    return b === x.JS.START || b === x.JS.JOIN
        ? o
            ? (0, i.jsx)(
                  q,
                  G(F({}, d), {
                      sectionName: a,
                      application: n,
                      onClick: y,
                      disabled: m,
                      enableVideoBanner: !v,
                      children: v
                          ? (0, i.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: H.spinner
                            })
                          : null
                  })
              )
            : (0, i.jsx)(
                  ei,
                  G(F({}, d), {
                      context: t,
                      sectionName: a,
                      application: n,
                      location: l
                  })
              )
        : (0, i.jsx)(
              q,
              G(F({}, d), {
                  sectionName: a,
                  application: n,
                  onClick: (e) => {
                      e.stopPropagation();
                  },
                  imageStyle: H.darkenImage,
                  enableVideoBanner: !1,
                  disabled: !0,
                  children: (0, i.jsx)('div', {
                      className: H.voiceLauncherAppCardContainer,
                      children: (0, i.jsx)(c.zxk, {
                          className: H.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: c.zxk.Sizes.LARGE,
                          color: g,
                          disabled: m,
                          onClick: y,
                          'aria-label': D.intl.formatToPlainString(D.t['XjP/R0'], {
                              buttonText: j,
                              applicationName: n.name
                          }),
                          submitting: v,
                          children: j
                      })
                  })
              })
          );
}
