n.d(t, {
    U4: () => w,
    cG: () => J,
    kA: () => K,
    qR: () => $
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
    _ = n(594174),
    g = n(695103),
    P = n(880448),
    j = n(768581),
    y = n(541099),
    T = n(783097),
    S = n(695676),
    b = n(176412),
    L = n(226026),
    R = n(570949),
    M = n(753972),
    Z = n(981631),
    O = n(217702),
    k = n(388032),
    U = n(330962),
    H = n(413097),
    D = n(969728),
    w = (((i = {}).ICON = 'icon'), (i.ROW = 'row'), (i.NO_BANNER = 'no_banner'), (i.MEDIUM_BANNER = 'medium_banner'), (i.LARGE_BANNER = 'large_banner'), i);
function V(e) {
    var t;
    let { application: n, look: i = 'large_banner', onClick: a, imageStyle: o, enableVideoBanner: s = !0, children: r, sectionName: c, resultsPosition: d, sectionOverallPosition: m, tracksImpression: p = !0, disabled: h = !1, overrideImageUrl: v, showsPromoted: x } = e,
        f = null !== (t = (0, u.Z)(h)) && void 0 !== t ? t : h;
    return (0, l.jsx)(B, {
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
                ? (0, l.jsx)(W, {
                      application: n,
                      imageStyle: o,
                      children: r
                  })
                : (0, l.jsx)(F, {
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
function B(e) {
    let { application: t, onClick: n, children: i, sectionName: o, resultsPosition: r, sectionOverallPosition: u, tracksImpression: m, disabled: p, containerStyle: h, look: v } = e,
        x = a.useCallback(
            (e) => {
                if ((0, T.BQ)(t)) {
                    let n = t instanceof I.ZP ? t : I.ZP.createFromServer(t);
                    (0, d.vq)(e, (e) =>
                        (0, l.jsx)(R.Z, {
                            application: n,
                            ...e
                        })
                    );
                }
            },
            [t]
        ),
        { name: f, description: N } = a.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: H }), [t]),
        { trackItemImpressionRef: C } = (0, L.Z)({
            applicationId: t.id,
            sectionName: o,
            sectionPosition: r,
            sectionOverallPosition: u
        }),
        E = a.useMemo(() => {
            let e = p ? U.containerDisabled : U.container;
            return s()(
                e,
                {
                    [U.containerBorderRadius]: 'row' !== v,
                    [U.rowContainer]: 'row' === v,
                    [U.iconCard]: 'icon' === v
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
              'aria-label': k.intl.formatToPlainString(k.t['zLhr9/'], {
                  applicationName: f,
                  applicationDescription: N
              }),
              children: (0, l.jsx)(c.Rny, { children: i })
          });
}
function W(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: o, iconURL: r } = a.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: H }), [t]);
    return (0, l.jsx)(c.ua7, {
        tooltipContentClassName: U.tooltipContent,
        text: o,
        children: (e) => {
            let { ...t } = e;
            return (0, l.jsxs)('div', {
                className: s()(U.iconContainer, n),
                ...t,
                children: [
                    (0, l.jsx)(M.Z, {
                        src: r,
                        className: U.iconCard,
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    i
                ]
            });
        }
    });
}
function F(e) {
    let { application: t, look: n, imageStyle: i, enableVideoBanner: o, disableBannerFadeIn: d, children: u, overrideImageUrl: m, showsPromoted: h } = e,
        { iconURL: v, name: x, description: f } = a.useMemo(() => (0, T.sl)(t, { fakeAppIconURL: H }), [t]),
        N = a.useMemo(() => (null == f ? null : (0, b.ae)(f)), [f]),
        C = (0, E.ZP)(v, ''),
        [A, I] = a.useState(!1),
        _ = a.useCallback(() => {
            !0 === o && I(!0);
        }, [o]),
        P = h || (0, T.lf)(t),
        j = 'large_banner' === n || 'medium_banner' === n,
        y = a.useCallback(() => I(!1), []),
        S = (0, r.e7)([p.Z, g.Z], () => p.Z.inDevModeForApplication(t.id) || g.Z.inTestModeForApplication(t.id), [t.id]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j
                ? (0, l.jsxs)('div', {
                      onMouseEnter: _,
                      onFocus: _,
                      onMouseLeave: y,
                      onBlur: y,
                      className: s()(U.bannerImageContainer, {
                          [U.mediumBanner]: 'medium_banner' === n,
                          [U.largeBanner]: 'large_banner' === n
                      }),
                      children: [
                          (0, l.jsx)('span', {
                              className: i,
                              children: (0, l.jsx)(Y, {
                                  application: t,
                                  fallbackColor: C,
                                  showVideo: A,
                                  disableFadeIn: d,
                                  overrideImageUrl: m
                              })
                          }),
                          S || P
                              ? (0, l.jsxs)('div', {
                                    className: U.bannerUpperRightContainer,
                                    children: [
                                        P &&
                                            (0, l.jsx)('div', {
                                                className: U.promotedLabelWrapperBanner,
                                                children: (0, l.jsx)(c.X6q, {
                                                    variant: 'text-xxs/medium',
                                                    color: 'header-primary',
                                                    children: k.intl.string(k.t['/eVltr'])
                                                })
                                            }),
                                        S && (0, l.jsx)(G, {})
                                    ]
                                })
                              : null,
                          (0, l.jsx)('div', {
                              className: U.bannerImageChildContainer,
                              children: u
                          })
                      ]
                  })
                : null,
            (0, l.jsxs)('div', {
                className: s()(U.appDetailsContainer, { [U.appDetailsRowContainer]: 'row' === n }),
                children: [
                    (0, l.jsx)(M.Z, {
                        src: v,
                        className: s()(U.icon, { [U.rowIcon]: 'row' === n }),
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
                                        children: x
                                    }),
                                    !j && P
                                        ? (0, l.jsx)('div', {
                                              className: U.promotedLabelWrapperNonBanner,
                                              children: (0, l.jsx)(c.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: k.intl.string(k.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, l.jsx)(z, { application: t })
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
                    'row' === n ? (0, l.jsx)('div', { className: U.rowDivider }) : null
                ]
            })
        ]
    });
}
function G() {
    return (0, l.jsx)(c.ua7, {
        text: k.intl.string(k.t.CfTySU),
        children: (e) =>
            (0, l.jsx)('div', {
                className: U.devShelfBadge,
                ...e,
                children: (0, l.jsx)(P.Z, { className: U.devShelfIcon })
            })
    });
}
function z(e) {
    let { application: t } = e,
        n = _.default.getCurrentUser();
    if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
    let i = (0, T.yJ)(t);
    if (null == i || !(0, T.BQ)(t)) return null;
    let a = (0, x.fD)(t, i);
    return null == a
        ? null
        : (0, l.jsx)(c.ua7, {
              text: a,
              children: (e) =>
                  (0, l.jsx)('img', {
                      className: U.staffBadge,
                      alt: a,
                      src: D,
                      ...e
                  })
          });
}
function Y(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: o } = e;
    if (null != o)
        return (0, l.jsx)('img', {
            src: o,
            alt: (0, T.BQ)(t) ? t.name : '',
            className: s()(U.bannerImage, { [U.disableFadeIn]: a })
        });
    if ((0, T.BQ)(t)) {
        if ((0, T.ye)(t))
            return (0, l.jsx)(X, {
                application: t,
                showVideo: i,
                disableFadeIn: a
            });
        if (null != t.bot)
            return (0, l.jsx)(q, {
                bot: t.bot,
                fallbackColor: n,
                disableFadeIn: a
            });
    }
    return (0, l.jsx)(Q, {
        fallbackColor: n,
        disableFadeIn: a
    });
}
function X(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        o = (0, f.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = a.useMemo(() => {
            let e = (0, T.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, v.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        [c, d] = a.useState(n);
    a.useEffect(() => {
        n && d(!0);
    }, [n]);
    let u = s()(U.bannerImage, { [U.disableFadeIn]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r && c
                ? (0, l.jsx)('div', {
                      className: U.activityVideoContainer,
                      children: (0, l.jsx)('div', {
                          className: s()(U.activityVideo, { [U.videoFadeOut]: !n }),
                          onAnimationEnd: () => (n ? null : d(!1)),
                          children: (0, l.jsx)(A.Z, {
                              src: r,
                              mediaLayoutType: O.hV.MOSAIC,
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
function q(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, r.e7)([m.Z], () => m.Z.useReducedMotion),
        o = (0, j.aN)({
            id: t.id,
            banner: t.banner,
            canAnimate: !a,
            size: 600
        });
    return null == o
        ? (0, l.jsx)(Q, {
              fallbackColor: n,
              disableFadeIn: i
          })
        : (0, l.jsx)('img', {
              src: o,
              alt: '',
              className: s()(U.bannerImage, { [U.disableFadeIn]: i })
          });
}
function Q(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, l.jsx)('div', {
        className: s()(U.bannerImage, { [U.disableFadeIn]: n }),
        style: { backgroundColor: t }
    });
}
function J(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: o, location: s } = e,
        { pushHistory: r } = (0, S.hH)();
    return a.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, C.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: t.id,
                    section_name: n,
                    search_results_position: i,
                    source: y.Z.entrypoint(),
                    location: s,
                    query: l
                }),
                r({
                    type: S.gc.APPLICATION,
                    application: t,
                    installOnDemand: o,
                    sectionName: n
                });
        },
        [t, o, s, r, l, i, n]
    );
}
function K(e) {
    let t = J(e);
    return (0, l.jsx)(V, {
        ...e,
        onClick: t
    });
}
function $(e) {
    let { context: t, application: n, location: i, sectionName: o, isOneClickCTA: s, fetchesApplication: d = !0, ...u } = e;
    if (!(0, T.BQ)(n)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let m = a.useId(),
        [p, v] = (0, r.Wu)([h.ZP], () => [h.ZP.isLaunchingActivity(), h.ZP.getLaunchState(n.id, 'channel' === t.type ? t.channel.id : void 0)]),
        f = null != v && v.isLaunching && v.componentId === m,
        {
            onActivityItemSelected: N,
            activityAction: C,
            buttonColor: E,
            buttonText: A
        } = (0, b.P7)({
            context: t,
            application: n,
            location: i,
            sectionName: o,
            launchingComponentId: m,
            fetchesApplication: d
        });
    return C === x.JS.START || C === x.JS.JOIN
        ? s
            ? (0, l.jsx)(V, {
                  ...u,
                  sectionName: o,
                  application: n,
                  onClick: N,
                  disabled: p,
                  enableVideoBanner: !f,
                  children: f
                      ? (0, l.jsx)(c.$jN, {
                            type: c.$jN.Type.PULSING_ELLIPSIS,
                            className: U.spinner
                        })
                      : null
              })
            : (0, l.jsx)(K, {
                  ...u,
                  context: t,
                  sectionName: o,
                  application: n,
                  location: i
              })
        : (0, l.jsx)(V, {
              ...u,
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
                      color: E,
                      disabled: p,
                      onClick: N,
                      'aria-label': k.intl.formatToPlainString(k.t['XjP/R0'], {
                          buttonText: A,
                          applicationName: n.name
                      }),
                      submitting: f,
                      children: A
                  })
              })
          });
}
