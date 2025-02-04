n.d(t, {
    U4: () => D,
    cG: () => Q,
    kA: () => J,
    qR: () => K
}),
    n(47120),
    n(411104);
var i,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    r = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(110924),
    m = n(607070),
    p = n(115130),
    h = n(317381),
    v = n(361213),
    x = n(542094),
    f = n(778569),
    N = n(182906),
    C = n(367907),
    E = n(220082),
    A = n(70097),
    I = n(973616),
    _ = n(695103),
    g = n(880448),
    P = n(768581),
    j = n(541099),
    y = n(783097),
    T = n(695676),
    S = n(176412),
    b = n(226026),
    L = n(570949),
    R = n(753972),
    M = n(981631),
    Z = n(217702),
    O = n(388032),
    k = n(330962),
    U = n(413097),
    H = n(969728),
    D = (((i = {}).ICON = 'icon'), (i.ROW = 'row'), (i.NO_BANNER = 'no_banner'), (i.MEDIUM_BANNER = 'medium_banner'), (i.LARGE_BANNER = 'large_banner'), i);
function w(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: a, imageStyle: o, enableVideoBanner: s = !0, children: r, sectionName: c, resultsPosition: d, sectionOverallPosition: m, tracksImpression: p = !0, disabled: h = !1, overrideImageUrl: v, showsPromoted: x } = e,
        f = null !== (t = (0, u.Z)(h)) && void 0 !== t ? t : h;
    return (0, l.jsx)(V, {
        application: n,
        onClick: a,
        sectionName: c,
        resultsPosition: d,
        disabled: h,
        tracksImpression: p,
        look: i,
        sectionOverallPosition: m,
        children:
            'icon' === i
                ? (0, l.jsx)(B, {
                      application: n,
                      imageStyle: o,
                      children: r
                  })
                : (0, l.jsx)(W, {
                      application: n,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: s,
                      disableBannerFadeIn: f !== h,
                      overrideImageUrl: v,
                      showsPromoted: x,
                      children: r
                  })
    });
}
function V(e) {
    let { application: t, onClick: n, children: i, sectionName: o, resultsPosition: r, sectionOverallPosition: u, tracksImpression: m, disabled: p, containerStyle: h, look: v } = e,
        x = a.useCallback(
            (e) => {
                if ((0, y.BQ)(t)) {
                    let n = t instanceof I.ZP ? t : I.ZP.createFromServer(t);
                    (0, d.vq)(e, (e) =>
                        (0, l.jsx)(L.Z, {
                            application: n,
                            ...e
                        })
                    );
                }
            },
            [t]
        ),
        { name: f, description: N } = a.useMemo(() => (0, y.sl)(t, { fakeAppIconURL: U }), [t]),
        { trackItemImpressionRef: C } = (0, b.Z)({
            applicationId: t.id,
            sectionName: o,
            sectionPosition: r,
            sectionOverallPosition: u
        }),
        E = a.useMemo(() => {
            let e = p ? k.containerDisabled : k.container;
            return s()(
                e,
                {
                    [k.containerBorderRadius]: 'row' !== v,
                    [k.rowContainer]: 'row' === v,
                    [k.iconCard]: 'icon' === v
                },
                h
            );
        }, [h, p, v]);
    return p
        ? (0, l.jsx)('div', {
              ref: m ? C : void 0,
              className: E,
              children: i
          })
        : (0, l.jsx)(c.P3F, {
              innerRef: m ? C : void 0,
              className: E,
              onClick: n,
              onContextMenu: x,
              'aria-label': O.intl.formatToPlainString(O.t['zLhr9/'], {
                  applicationName: f,
                  applicationDescription: N
              }),
              children: (0, l.jsx)(c.Rny, { children: i })
          });
}
function B(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: o, iconURL: r } = a.useMemo(() => (0, y.sl)(t, { fakeAppIconURL: U }), [t]);
    return (0, l.jsx)(c.ua7, {
        tooltipContentClassName: k.tooltipContent,
        text: o,
        children: (e) => {
            let { ...t } = e;
            return (0, l.jsxs)('div', {
                className: s()(k.iconContainer, n),
                ...t,
                children: [
                    (0, l.jsx)(R.Z, {
                        src: r,
                        className: k.iconCard,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    i
                ]
            });
        }
    });
}
function W(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: o, disableBannerFadeIn: d, children: u, overrideImageUrl: m, showsPromoted: h } = e,
        { iconURL: v, name: x, description: f } = a.useMemo(() => (0, y.sl)(t, { fakeAppIconURL: U }), [t]),
        N = a.useMemo(() => (null == f ? null : (0, S.ae)(f)), [f]),
        C = (0, E.ZP)(v, ''),
        [A, I] = a.useState(!1),
        g = a.useCallback(() => {
            !0 === o && I(!0);
        }, [o]),
        P = h || (0, y.lf)(t),
        j = 'large_banner' === n || 'medium_banner' === n,
        T = a.useCallback(() => I(!1), []),
        b = (0, r.e7)([p.Z, _.Z], () => p.Z.inDevModeForApplication(t.id) || _.Z.inTestModeForApplication(t.id), [t.id]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j
                ? (0, l.jsxs)('div', {
                      onMouseEnter: g,
                      onFocus: g,
                      onMouseLeave: T,
                      onBlur: T,
                      className: s()(k.bannerImageContainer, {
                          [k.mediumBanner]: 'medium_banner' === n,
                          [k.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, l.jsx)('span', {
                              className: i,
                              children: (0, l.jsx)(z, {
                                  application: t,
                                  fallbackColor: C,
                                  showVideo: A,
                                  disableFadeIn: d,
                                  overrideImageUrl: m
                              })
                          }),
                          b || P
                              ? (0, l.jsxs)('div', {
                                    className: k.bannerUpperRightContainer,
                                    children: [
                                        P &&
                                            (0, l.jsx)('div', {
                                                className: k.promotedLabelWrapperBanner,
                                                children: (0, l.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: O.intl.string(O.t['/eVltr'])
                                                })
                                            }),
                                        b && (0, l.jsx)(F, {})
                                    ]
                                })
                              : null,
                          (0, l.jsx)('div', {
                              className: k.bannerImageChildContainer,
                              children: u
                          })
                      ]
                  })
                : null,
            (0, l.jsxs)('div', {
                className: s()(k.appDetailsContainer, { [k.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, l.jsx)(R.Z, {
                        src: v,
                        className: s()(k.icon, { [k.rowIcon]: 'row' === n }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, l.jsxs)('div', {
                        className: k.appDetails,
                        children: [
                            (0, l.jsxs)('div', {
                                className: k.appDetailsHeaderContainer,
                                children: [
                                    (0, l.jsx)(c.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: x
                                    }),
                                    !j && P
                                        ? (0, l.jsx)('div', {
                                              className: k.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: O.intl.string(O.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(G, { application: t })
                                ]
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: N
                            })
                        ]
                    }),
                    'row' === n ? (0, l.jsx)('div', { className: k.rowDivider }) : null
                ]
            })
        ]
    });
}
function F() {
    return (0, l.jsx)(c.ua7, {
        text: O.intl.string(O.t.CfTySU),
        children: (e) =>
            (0, l.jsx)('div', {
                className: k.devShelfBadge,
                ...e,
                children: (0, l.jsx)(g.Z, { className: k.devShelfIcon })
            })
    });
}
function G(e) {
    let { application: t } = e,
        n = (0, y.yJ)(t);
    if (null == n || !(0, y.BQ)(t)) return null;
    let i = (0, x.fD)(t, n);
    return null == i
        ? null
        : (0, l.jsx)(c.ua7, {
              text: i,
              children: (e) =>
                  (0, l.jsx)('img', {
                      className: k.staffBadge,
                      alt: i,
                      src: H,
                      ...e
                  })
          });
}
function z(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: o } = e;
    if (null != o)
        return (0, l.jsx)('img', {
            src: o,
            alt: (0, y.BQ)(t) ? t.name : '',
            className: s()(k.bannerImage, { [k.disableFadeIn]: a })
        });
    if ((0, y.BQ)(t)) {
        if ((0, y.ye)(t))
            return (0, l.jsx)(Y, {
                application: t,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != t.bot)
            return (0, l.jsx)(X, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(q, {
        fallbackColor: n,
        disableFadeIn: a
    });
}
function Y(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        o = (0, f.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = a.useMemo(() => {
            let e = (0, y.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, v.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, d] = a.useState(n);
    a.useEffect(() => {
        n && d(!0);
    }, [n]);
    let u = s()(k.bannerImage, { [k.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && c
                ? (0, l.jsx)('div', {
                      className: k.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: s()(k.activityVideo, { [k.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : d(!1)),
                          children: (0, l.jsx)(A.Z, {
                              src: r,
                              mediaLayoutType: Z.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, l.jsx)(N.Z, {
                imageBackground: o,
                applicationName: t.name,
                imageClassName: u,
                imageNotFoundClassName: u
            })
        ]
    });
}
function X(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, r.e7)([m.Z], () => m.Z.useReducedMotion),
        o = (0, P.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(q, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(k.bannerImage, { [k.disableFadeIn]: i })
          });
}
function q(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, l.jsx)('div', {
        className: s()(k.bannerImage, { [k.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function Q(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: o, location: s } = e,
        { pushHistory: r } = (0, T.hH)();
    return a.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, C.yw)(M.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: t.id,
                    section_name: n,
                    search_results_position: i,
                    source: j.Z.entrypoint(),
                    location: s,
                    query: l
                }),
                r({
                    type: T.gc.APPLICATION,
                    application: t,
                    installOnDemand: o,
                    sectionName: n
                });
        },
        [t, o, s, r, l, i, n]
    );
}
function J(e) {
    let t = Q(e);
    return (0, l.jsx)(w, {
        ...e,
        onClick: t
    });
}
function K(e) {
    let { context: t, application: n, location: i, sectionName: o, isOneClickCTA: s, fetchesApplication: d = !0, ...u } = e;
    if (!(0, y.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let m = a.useId(),
        [p, v] = (0, r.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        f = null != v && v.isLaunching && v.componentId === m,
        {
            onActivityItemSelected: N,
            activityAction: C,
            buttonColor: E,
            buttonText: A
        } = (0, S.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: o,
            launchingComponentId: m,
            fetchesApplication: d
        });
    return C === x.JS.START || C === x.JS.JOIN
        ? s
            ? (0, l.jsx)(w, {
                  ...u,
                  sectionName: o,
                  application: n,
                  onClick: N,
                  disabled: p,
                  enableVideoBanner: !f,
                  children: f
                      ? (0, l.jsx)(c.$jN, {
                            type: c.$jN.Type.PULSING_ELLIPSIS,
                            className: k.spinner
                        })
                      : null
              })
            : (0, l.jsx)(J, {
                  ...u,
                  context: t,
                  sectionName: o,
                  application: n,
                  location: i
              })
        : (0, l.jsx)(w, {
              ...u,
              sectionName: o,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: k.darkenImage,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, l.jsx)('div', {
                  className: k.voiceLauncherAppCardContainer,
                  children: (0, l.jsx)(c.zxk, {
                      className: k.voiceLauncherAppCardButton,
                      type: 'submit',
                      size: c.zxk.Sizes.LARGE,
                      color: E,
                      disabled: p,
                      onClick: N,
                      'aria-label': O.intl.formatToPlainString(O.t['XjP/R0'], {
                          buttonText: A,
                          applicationName: n.name
                      }),
                      submitting: f,
                      children: A
                  })
              })
          });
}
