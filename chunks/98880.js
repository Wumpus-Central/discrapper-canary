(n.d(t, {
    U4: () => X,
    cG: () => el,
    kA: () => ec,
    qR: () => eu
}),
    n(953529),
    n(997841),
    n(388685),
    n(415506));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
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
    T = n(70097),
    S = n(973616),
    A = n(594174),
    N = n(695103),
    C = n(880448),
    w = n(768581),
    R = n(541099),
    P = n(783097),
    D = n(695676),
    L = n(176412),
    x = n(226026),
    k = n(570949),
    j = n(753972),
    M = n(981631),
    U = n(217702),
    G = n(388032),
    B = n(860901),
    Z = n(413097),
    F = n(969728);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function H() {
    return (H =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function Y(e) {
    if (null == e) throw TypeError('Cannot destructure ' + e);
    return e;
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            }));
    }
    return e;
}
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = $(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function $(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
var X = (function (e) {
    return ((e.ICON = 'icon'), (e.ROW = 'row'), (e.NO_BANNER = 'no_banner'), (e.MEDIUM_BANNER = 'medium_banner'), (e.LARGE_BANNER = 'large_banner'), e);
})({});
function Q(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: a, imageStyle: o, enableVideoBanner: s = !0, children: l, sectionName: c, resultsPosition: u, sectionOverallPosition: d, tracksImpression: _ = !0, disabled: p = !1, overrideImageUrl: h, showsPromoted: m } = e,
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
            'icon' === i
                ? (0, r.jsx)(ee, {
                      application: n,
                      imageStyle: o,
                      children: l
                  })
                : (0, r.jsx)(et, {
                      application: n,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: s,
                      disableBannerFadeIn: g !== p,
                      overrideImageUrl: h,
                      showsPromoted: m,
                      children: l
                  })
    });
}
function J(e) {
    let { application: t, onClick: n, children: a, sectionName: s, resultsPosition: l, sectionOverallPosition: d, tracksImpression: f, disabled: _, containerStyle: p, look: h } = e,
        m = i.useCallback(
            (e) => {
                if ((0, P.BQ)(t)) {
                    let n = t instanceof S.ZP ? t : S.ZP.createFromServer(t);
                    (0, u.vq)(e, (e) => (0, r.jsx)(k.Z, W({ application: n }, e)));
                }
            },
            [t]
        ),
        { name: g, description: E } = i.useMemo(() => (0, P.sl)(t, { fakeAppIconURL: Z }), [t]),
        { trackItemImpressionRef: b } = (0, x.Z)({
            applicationId: t.id,
            applicationFlags: (0, P.BQ)(t) ? t.flags : void 0,
            sectionName: s,
            sectionPosition: l,
            sectionOverallPosition: d,
            promotionalLabel: (0, P.dF)(t)
        }),
        y = i.useMemo(() => {
            let e = _ ? B.containerDisabled : B.container;
            return o()(
                e,
                {
                    [B.containerBorderRadius]: 'row' !== h,
                    [B.rowContainer]: 'row' === h,
                    [B.iconCard]: 'icon' === h
                },
                p
            );
        }, [p, _, h]);
    return _
        ? (0, r.jsx)('div', {
              ref: f ? b : void 0,
              className: y,
              children: a
          })
        : (0, r.jsx)(c.P3F, {
              innerRef: f ? b : void 0,
              className: y,
              onClick: n,
              onContextMenu: m,
              'aria-label': G.intl.formatToPlainString(G.t['zLhr9/'], {
                  applicationName: g,
                  applicationDescription: E
              }),
              children: (0, r.jsx)(c.Rny, { children: a })
          });
}
function ee(e) {
    let { application: t, imageStyle: n, children: a } = e,
        { name: s, iconURL: l } = i.useMemo(() => (0, P.sl)(t, { fakeAppIconURL: Z }), [t]);
    return (0, r.jsx)(c.ua7, {
        tooltipContentClassName: B.tooltipContent,
        text: s,
        children: (e) => {
            var t = H({}, Y(e));
            return (0, r.jsxs)(
                'div',
                z(W({ className: o()(B.iconContainer, n) }, t), {
                    children: [
                        (0, r.jsx)(j.Z, {
                            src: l,
                            className: B.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        a
                    ]
                })
            );
        }
    });
}
function et(e) {
    let { application: t, look: n, imageStyle: a, enableVideoBanner: l, disableBannerFadeIn: u, children: f, overrideImageUrl: _, showsPromoted: h } = e,
        { iconURL: m, name: g, description: E } = i.useMemo(() => (0, P.sl)(t, { fakeAppIconURL: Z }), [t]),
        b = i.useMemo(() => (null == E ? null : (0, L.ae)(E)), [E]),
        y = (0, I.ZP)(m, ''),
        [v, T] = i.useState(!1),
        S = i.useCallback(() => {
            !0 === l && T(!0);
        }, [l]),
        A = h || (0, P.lf)(t),
        C = 'large_banner' === n || 'medium_banner' === n,
        w = i.useCallback(() => T(!1), []),
        R = (0, s.e7)([p.Z, N.Z], () => p.Z.inDevModeForApplication(t.id) || N.Z.inTestModeForApplication(t.id), [t.id]),
        D = (0, P.WA)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C
                ? (0, r.jsxs)('div', {
                      onMouseEnter: S,
                      onFocus: S,
                      onMouseLeave: w,
                      onBlur: w,
                      className: o()(B.bannerImageContainer, {
                          [B.mediumBanner]: 'medium_banner' === n,
                          [B.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, r.jsx)('span', {
                              className: a,
                              children: (0, r.jsx)(ei, {
                                  application: t,
                                  fallbackColor: y,
                                  showVideo: v,
                                  disableFadeIn: u,
                                  overrideImageUrl: _
                              })
                          }),
                          R || A || D !== d.ww.NONE
                              ? (0, r.jsxs)('div', {
                                    className: B.bannerUpperRightContainer,
                                    children: [
                                        A &&
                                            (0, r.jsx)('div', {
                                                className: B.promotedLabelWrapperBanner,
                                                children: (0, r.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: G.intl.string(G.t['/eVltr'])
                                                })
                                            }),
                                        R && (0, r.jsx)(en, {}),
                                        D !== d.ww.NONE && (0, r.jsx)(O.Z, { labelType: D })
                                    ]
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: B.bannerImageChildContainer,
                              children: f
                          })
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: o()(B.appDetailsContainer, { [B.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, r.jsx)(j.Z, {
                        src: m,
                        className: o()(B.icon, { [B.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, r.jsxs)('div', {
                        className: B.appDetails,
                        children: [
                            (0, r.jsxs)('div', {
                                className: B.appDetailsHeaderContainer,
                                children: [
                                    (0, r.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: g
                                    }),
                                    !C && A
                                        ? (0, r.jsx)('div', {
                                              className: B.promotedLabelWrapperNonBanner,
                                              children: (0, r.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: G.intl.string(G.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(er, { application: t })
                                ]
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: b
                            })
                        ]
                    }),
                    'row' === n ? (0, r.jsx)('div', { className: B.rowDivider }) : null
                ]
            })
        ]
    });
}
function en() {
    return (0, r.jsx)(c.ua7, {
        text: G.intl.string(G.t.CfTySU),
        children: (e) => (0, r.jsx)('div', z(W({ className: B.devShelfBadge }, e), { children: (0, r.jsx)(C.Z, { className: B.devShelfIcon }) }))
    });
}
function er(e) {
    let { application: t } = e,
        n = A.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, P.yJ)(t);
    if (null == i || !(0, P.BQ)(t)) return null;
    let a = (0, E.fD)(t, i);
    return null == a
        ? null
        : (0, r.jsx)(c.ua7, {
              text: a,
              children: (e) =>
                  (0, r.jsx)(
                      'img',
                      W(
                          {
                              className: B.staffBadge,
                              alt: a,
                              src: F
                          },
                          e
                      )
                  )
          });
}
function ei(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: s } = e;
    if (null != s)
        return (0, r.jsx)('img', {
            src: s,
            alt: (0, P.BQ)(t) ? t.name : '',
            className: o()(B.bannerImage, { [B.disableFadeIn]: a })
        });
    if ((0, P.BQ)(t)) {
        if ((0, P.ye)(t))
            return (0, r.jsx)(ea, {
                application: t,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != t.bot)
            return (0, r.jsx)(eo, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: a
            });
    }
    return (0, r.jsx)(es, {
        fallbackColor: n,
        disableFadeIn: a
    });
}
function ea(e) {
    let { application: t, showVideo: n, disableFadeIn: a } = e,
        s = (0, b.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        l = i.useMemo(() => {
            let e = (0, P.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, g.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, u] = i.useState(n);
    i.useEffect(() => {
        n && u(!0);
    }, [n]);
    let d = o()(B.bannerImage, { [B.disableFadeIn]: a });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && c
                ? (0, r.jsx)('div', {
                      className: B.activityVideoContainer,
                      children: (0, r.jsx)('div', {
                          className: o()(B.activityVideo, { [B.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : u(!1)),
                          children: (0, r.jsx)(T.Z, {
                              src: l,
                              mediaLayoutType: U.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, r.jsx)(y.Z, {
                imageBackground: s,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d
            })
        ]
    });
}
function eo(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, s.e7)([_.Z], () => _.Z.useReducedMotion),
        l = (0, w.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !a,
            size: 600
        });
    return null == l
        ? (0, r.jsx)(es, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, r.jsx)('img', {
              src: l,
              alt: '',
              className: o()(B.bannerImage, { [B.disableFadeIn]: i })
          });
}
function es(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)('div', {
        className: o()(B.bannerImage, { [B.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function el(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: a, installOnDemand: o, location: s } = e,
        { pushHistory: l } = (0, D.hH)(),
        { friends: c } = (0, m.Z)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, v.yw)(M.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: R.Z.entrypoint(),
                        promotional_label: (0, P.dF)(t),
                        location: s,
                        query: a,
                        num_friends_who_play: c.length
                    }),
                    l({
                        type: D.gc.APPLICATION,
                        application: t,
                        installOnDemand: o,
                        sectionName: n
                    }));
            },
            [t, o, s, l, a, r, n, c]
        )
    };
}
function ec(e) {
    let { onClickAppCard: t } = el(e);
    return (0, r.jsx)(Q, z(W({}, e), { onClick: t }));
}
function eu(e) {
    var { context: t, application: n, location: a, sectionName: o, isOneClickCTA: u, fetchesApplication: d = !0 } = e,
        f = q(e, ['context', 'application', 'location', 'sectionName', 'isOneClickCTA', 'fetchesApplication']);
    if (!(0, P.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let _ = i.useId(),
        [p, m] = (0, s.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        g = null != m && m.isLaunching && m.componentId === _,
        {
            onActivityItemSelected: b,
            activityAction: y,
            buttonColor: O,
            buttonText: v
        } = (0, L.P7)({
            context: t,
            application: n,
            location: a,
            sectionName: o,
            launchingComponentId: _,
            fetchesApplication: d
        });
    return y === E.JS.START || y === E.JS.JOIN
        ? u
            ? (0, r.jsx)(
                  Q,
                  z(W({}, f), {
                      sectionName: o,
                      application: n,
                      onClick: b,
                      disabled: p,
                      enableVideoBanner: !g,
                      children: g
                          ? (0, r.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: B.spinner
                            })
                          : null
                  })
              )
            : (0, r.jsx)(
                  ec,
                  z(W({}, f), {
                      context: t,
                      sectionName: o,
                      application: n,
                      location: a
                  })
              )
        : (0, r.jsx)(
              Q,
              z(W({}, f), {
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
                      children: (0, r.jsx)(l.zx, {
                          className: B.voiceLauncherAppCardButton,
                          type: 'submit',
                          size: l.zx.Sizes.LARGE,
                          color: O,
                          disabled: p,
                          onClick: b,
                          'aria-label': G.intl.formatToPlainString(G.t['XjP/R0'], {
                              buttonText: v,
                              applicationName: n.name
                          }),
                          submitting: g,
                          children: v
                      })
                  })
              })
          );
}
