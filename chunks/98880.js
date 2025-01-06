t.d(n, {
    U4: function () {
        return i;
    },
    cG: function () {
        return J;
    },
    kA: function () {
        return Q;
    },
    qR: function () {
        return K;
    }
}),
    t(47120),
    t(411104);
var i,
    l,
    a = t(200651),
    o = t(192379),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(110924),
    p = t(607070),
    h = t(115130),
    f = t(317381),
    C = t(361213),
    v = t(542094),
    x = t(778569),
    _ = t(182906),
    N = t(367907),
    g = t(220082),
    A = t(70097),
    E = t(973616),
    b = t(695103),
    I = t(880448),
    P = t(768581),
    j = t(541099),
    y = t(783097),
    S = t(695676),
    T = t(176412),
    L = t(226026),
    R = t(570949),
    M = t(753972),
    Z = t(981631),
    k = t(217702),
    O = t(388032),
    U = t(330962),
    B = t(413097),
    w = t(969728);
function D(e) {
    var n;
    let { application: t, look: i = 'large_banner', onClick: l, imageStyle: o, enableVideoBanner: r = !0, children: s, sectionName: c, resultsPosition: d, sectionOverallPosition: u, tracksImpression: p = !0, disabled: h = !1 } = e,
        f = null !== (n = (0, m.Z)(h)) && void 0 !== n ? n : h;
    return (0, a.jsx)(H, {
        application: t,
        onClick: l,
        sectionName: c,
        resultsPosition: d,
        disabled: h,
        tracksImpression: p,
        look: i,
        sectionOverallPosition: u,
        children:
            'icon' === i
                ? (0, a.jsx)(V, {
                      application: t,
                      imageStyle: o,
                      children: s
                  })
                : (0, a.jsx)(W, {
                      application: t,
                      look: i,
                      imageStyle: o,
                      enableVideoBanner: r,
                      disableBannerFadeIn: f !== h,
                      children: s
                  })
    });
}
function H(e) {
    let { application: n, onClick: t, children: i, sectionName: l, resultsPosition: r, sectionOverallPosition: c, tracksImpression: m, disabled: p, containerStyle: h, look: f } = e,
        C = o.useCallback(
            (e) => {
                if ((0, y.BQ)(n)) {
                    let t = n instanceof E.ZP ? n : E.ZP.createFromServer(n);
                    (0, u.vq)(e, (e) =>
                        (0, a.jsx)(R.Z, {
                            application: t,
                            ...e
                        })
                    );
                }
            },
            [n]
        ),
        { name: v, description: x } = o.useMemo(() => (0, y.sl)(n, { fakeAppIconURL: B }), [n]),
        { trackItemImpressionRef: _ } = (0, L.Z)({
            applicationId: n.id,
            sectionName: l,
            sectionPosition: r,
            sectionOverallPosition: c
        }),
        N = o.useMemo(() => {
            let e = p ? U.containerDisabled : U.container;
            return s()(
                e,
                {
                    [U.containerBorderRadius]: 'row' !== f,
                    [U.rowContainer]: 'row' === f,
                    [U.iconCard]: 'icon' === f
                },
                h
            );
        }, [h, p, f]);
    return p
        ? (0, a.jsx)('div', {
              ref: m ? _ : void 0,
              className: N,
              children: i
          })
        : (0, a.jsx)(d.Clickable, {
              innerRef: m ? _ : void 0,
              className: N,
              onClick: t,
              onContextMenu: C,
              'aria-label': O.intl.formatToPlainString(O.t['zLhr9/'], {
                  applicationName: v,
                  applicationDescription: x
              }),
              children: (0, a.jsx)(d.FocusBlock, { children: i })
          });
}
function V(e) {
    let { application: n, imageStyle: t, children: i } = e,
        { name: l, iconURL: r } = o.useMemo(() => (0, y.sl)(n, { fakeAppIconURL: B }), [n]);
    return (0, a.jsx)(d.Tooltip, {
        tooltipContentClassName: U.tooltipContent,
        text: l,
        children: (e) => {
            let { ...n } = e;
            return (0, a.jsxs)('div', {
                className: s()(U.iconContainer, t),
                ...n,
                children: [
                    (0, a.jsx)(M.Z, {
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
function W(e) {
    let { application: n, look: t, imageStyle: i, enableVideoBanner: l, disableBannerFadeIn: r, children: u } = e,
        { iconURL: m, name: p, description: f } = o.useMemo(() => (0, y.sl)(n, { fakeAppIconURL: B }), [n]),
        C = o.useMemo(() => (null == f ? null : (0, T.ae)(f)), [f]),
        v = (0, g.ZP)(m, ''),
        [x, _] = o.useState(!1),
        N = o.useCallback(() => {
            !0 === l && _(!0);
        }, [l]),
        A = (0, y.lf)(n),
        E = 'large_banner' === t || 'medium_banner' === t,
        I = o.useCallback(() => _(!1), []),
        P = (0, c.e7)([h.Z, b.Z], () => h.Z.inDevModeForApplication(n.id) || b.Z.inTestModeForApplication(n.id), [n.id]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                onMouseEnter: N,
                onFocus: N,
                onMouseLeave: I,
                onBlur: I,
                className: s()(U.bannerImageContainer, {
                    [U.mediumBanner]: 'medium_banner' === t,
                    [U.largeBanner]: 'large_banner' === t
                }),
                children: [
                    (0, a.jsx)('span', {
                        className: i,
                        children: (0, a.jsx)(z, {
                            application: n,
                            fallbackColor: v,
                            showVideo: x,
                            disableFadeIn: r
                        })
                    }),
                    E
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  P || A
                                      ? (0, a.jsxs)('div', {
                                            className: U.bannerUpperRightContainer,
                                            children: [
                                                A &&
                                                    (0, a.jsx)('div', {
                                                        className: U.promotedLabelWrapperBanner,
                                                        children: (0, a.jsx)(d.Heading, {
                                                            variant: 'text-xxs/medium',
                                                            color: 'header-primary',
                                                            children: O.intl.string(O.t['/eVltr'])
                                                        })
                                                    }),
                                                P && (0, a.jsx)(F, {})
                                            ]
                                        })
                                      : null,
                                  (0, a.jsx)('div', {
                                      className: U.bannerImageChildContainer,
                                      children: u
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(U.appDetailsContainer, { [U.appDetailsRowContainer]: 'row' === t }),
                children: [
                    (0, a.jsx)(M.Z, {
                        src: m,
                        className: s()(U.icon, { [U.rowIcon]: 'row' === t }),
                        'aria-hidden': !0,
                        rendersPlaceholder: !0
                    }),
                    (0, a.jsxs)('div', {
                        className: U.appDetails,
                        children: [
                            (0, a.jsxs)('div', {
                                className: U.appDetailsHeaderContainer,
                                children: [
                                    (0, a.jsx)(d.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        lineClamp: 1,
                                        children: p
                                    }),
                                    !E && A
                                        ? (0, a.jsx)('div', {
                                              className: U.promotedLabelWrapperNonBanner,
                                              children: (0, a.jsx)(d.Text, {
                                                  variant: 'text-xxs/semibold',
                                                  color: 'text-muted',
                                                  children: O.intl.string(O.t['/eVltr'])
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(G, { application: n })
                                ]
                            }),
                            (0, a.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                lineClamp: 1,
                                children: C
                            })
                        ]
                    }),
                    'row' === t ? (0, a.jsx)('div', { className: U.rowDivider }) : null
                ]
            })
        ]
    });
}
function F() {
    return (0, a.jsx)(d.Tooltip, {
        text: O.intl.string(O.t.CfTySU),
        children: (e) =>
            (0, a.jsx)('div', {
                className: U.devShelfBadge,
                ...e,
                children: (0, a.jsx)(I.Z, { className: U.devShelfIcon })
            })
    });
}
function G(e) {
    let { application: n } = e,
        t = (0, y.yJ)(n);
    if (null == t || !(0, y.BQ)(n)) return null;
    let i = (0, v.fD)(n, t);
    return null == i
        ? null
        : (0, a.jsx)(d.Tooltip, {
              text: i,
              children: (e) =>
                  (0, a.jsx)('img', {
                      className: U.staffBadge,
                      alt: i,
                      src: w,
                      ...e
                  })
          });
}
function z(e) {
    let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: l } = e;
    if ((0, y.BQ)(n)) {
        if ((0, y.ye)(n))
            return (0, a.jsx)(Y, {
                application: n,
                showVideo: i,
                disableFadeIn: l
            });
        if (null != n.bot)
            return (0, a.jsx)(X, {
                bot: n.bot,
                fallbackColor: t,
                disableFadeIn: l
            });
    }
    return (0, a.jsx)(q, {
        fallbackColor: t,
        disableFadeIn: l
    });
}
function Y(e) {
    let { application: n, showVideo: t, disableFadeIn: i } = e,
        l = (0, x.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        r = o.useMemo(() => {
            let e = (0, y.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, C.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        [c, d] = o.useState(t);
    o.useEffect(() => {
        t && d(!0);
    }, [t]);
    let u = s()(U.bannerImage, { [U.disableFadeIn]: i });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != r && c
                ? (0, a.jsx)('div', {
                      className: U.activityVideoContainer,
                      children: (0, a.jsx)('div', {
                          className: s()(U.activityVideo, { [U.videoFadeOut]: !t }),
                          onAnimationEnd: () => (t ? null : d(!1)),
                          children: (0, a.jsx)(A.Z, {
                              src: r,
                              mediaLayoutType: k.hV.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0
                          })
                      })
                  })
                : null,
            (0, a.jsx)(_.Z, {
                imageBackground: l,
                applicationName: n.name,
                imageClassName: u,
                imageNotFoundClassName: u
            })
        ]
    });
}
function X(e) {
    let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
        l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        o = (0, P.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !l,
            size: 600
        });
    return null == o
        ? (0, a.jsx)(q, {
              fallbackColor: t,
              disableFadeIn: i
          })
        : (0, a.jsx)('img', {
              src: o,
              alt: '',
              className: s()(U.bannerImage, { [U.disableFadeIn]: i })
          });
}
function q(e) {
    let { fallbackColor: n, disableFadeIn: t } = e;
    return (0, a.jsx)('div', {
        className: s()(U.bannerImage, { [U.disableFadeIn]: t }),
        style: { backgroundColor: n }
    });
}
function J(e) {
    let { application: n, sectionName: t, resultsPosition: i, query: l, installOnDemand: a, location: r } = e,
        { pushHistory: s } = (0, S.hH)();
    return o.useCallback(
        (e) => {
            e.stopPropagation(),
                (0, N.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                    application_id: n.id,
                    section_name: t,
                    search_results_position: i,
                    source: j.Z.entrypoint(),
                    location: r,
                    query: l
                }),
                s({
                    type: S.gc.APPLICATION,
                    application: n,
                    installOnDemand: a,
                    sectionName: t
                });
        },
        [n, a, r, s, l, i, t]
    );
}
function Q(e) {
    let n = J(e);
    return (0, a.jsx)(D, {
        ...e,
        onClick: n
    });
}
function K(e) {
    let { channel: n, application: t, location: i, sectionName: l, isOneClickCTA: r, fetchesApplication: s = !0, ...u } = e;
    if (!(0, y.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
    let m = o.useId(),
        [p, h] = (0, c.Wu)([f.ZP], () => [f.ZP.isLaunchingActivity(), f.ZP.getLaunchState(t.id, n.id)]),
        C = null != h && h.isLaunching && h.componentId === m,
        {
            onActivityItemSelected: x,
            activityAction: _,
            buttonColor: N,
            buttonText: g
        } = (0, T.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: l,
            launchingComponentId: m,
            fetchesApplication: s
        });
    if (_ === v.JS.START || _ === v.JS.JOIN)
        return r
            ? (0, a.jsx)(D, {
                  ...u,
                  sectionName: l,
                  application: t,
                  onClick: x,
                  disabled: p,
                  enableVideoBanner: !C,
                  children: C
                      ? (0, a.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                            className: U.spinner
                        })
                      : null
              })
            : (0, a.jsx)(Q, {
                  ...u,
                  sectionName: l,
                  application: t,
                  location: i
              });
    return (0, a.jsx)(D, {
        ...u,
        sectionName: l,
        application: t,
        onClick: (e) => {
            e.stopPropagation();
        },
        imageStyle: U.darkenImage,
        enableVideoBanner: !1,
        disabled: !0,
        children: (0, a.jsx)('div', {
            className: U.voiceLauncherAppCardContainer,
            children: (0, a.jsx)(d.Button, {
                className: U.voiceLauncherAppCardButton,
                type: 'submit',
                size: d.Button.Sizes.LARGE,
                color: N,
                disabled: p,
                onClick: x,
                'aria-label': O.intl.formatToPlainString(O.t['XjP/R0'], {
                    buttonText: g,
                    applicationName: t.name
                }),
                submitting: C,
                children: g
            })
        })
    });
}
((l = i || (i = {})).ICON = 'icon'), (l.ROW = 'row'), (l.NO_BANNER = 'no_banner'), (l.MEDIUM_BANNER = 'medium_banner'), (l.LARGE_BANNER = 'large_banner');
