n.d(t, { Z: () => U });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(807582),
    p = n(813197),
    f = n(222062),
    m = n(530329),
    g = n(373230),
    b = n(72703),
    j = n(960291),
    x = n(782818),
    h = n(442552),
    y = n(430824),
    O = n(914010),
    v = n(594174),
    N = n(626135),
    C = n(267642),
    A = n(74538),
    E = n(621961),
    P = n(884858),
    S = n(981631),
    w = n(486324),
    T = n(869783),
    R = n(388032),
    _ = n(756926);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let F = [
    {
        gif: n(495682),
        png: n(458060)
    },
    {
        gif: n(842786),
        png: n(460790)
    },
    {
        gif: n(578831),
        png: n(642193)
    },
    {
        gif: n(145908),
        png: n(690695)
    }
];
function Z(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)('div', {
        className: _.gifGrid,
        children: F.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: _.gif,
                    style: { backgroundImage: 'url('.concat(t ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function I(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, C._p)(t),
        l = n.hasFeature(t);
    if (null == r) return;
    let a = (0, C.nW)(r);
    return l ? R.NW.formatToPlainString(R.t.u3L3TU, { levelName: a }) : R.NW.formatToPlainString(R.t['r/v25e'], { levelName: a });
}
function L(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)('div', {
        className: _.boostingPill,
        children: (0, r.jsx)(d.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function D(e) {
    let { icon: t, label: n, guildFeature: l, guild: a, shouldShowPremiumIcon: o } = e,
        c = null != a && null != l;
    return (0, r.jsxs)('div', {
        className: i()(_.optionDescription, { [_.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, r.jsxs)('div', {
                className: _.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/semibold',
                        className: i()(_.optionLabelText, { [_.hasPremiumIcon]: o }),
                        children: [
                            o &&
                                (0, r.jsx)(s.DY3, {
                                    text: R.NW.string(R.t['5AFxuL']),
                                    children: (0, r.jsx)(s.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: _.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsx)(L, {
                    guild: a,
                    guildFeature: l
                })
        ]
    });
}
function W(e) {
    let { label: t, uploadType: n, guild: l, maxFileSizeBytes: a, filters: o, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        d = (0, E.GY)(n),
        f = (0, E.C6)(n, { isGIF: !1 }),
        m = I({
            guildFeature: f,
            guild: l
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(_.option, _.imageUploadOption),
                    children: [
                        (0, r.jsx)(D, {
                            icon: (0, r.jsx)(s.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: f,
                            guild: l,
                            shouldShowPremiumIcon: d
                        }),
                        (0, r.jsx)(p.ZP, {
                            'aria-label': t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: a,
                            onFileSizeError: u,
                            filters: o,
                            multiple: !1
                        })
                    ]
                })
            }),
            null != m && (0, r.jsx)(s.nn4, { children: m })
        ]
    });
}
function M(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: a, onMouseEnter: i, onMouseLeave: o } = (0, h.Z)(),
        c = (0, E.Kq)(t),
        u = (0, E.C6)(t, { isGIF: !0 }),
        d = I({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                className: _.option,
                onClick: l,
                'aria-label': R.NW.string(R.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: o,
                children: [
                    (0, r.jsx)(Z, { shouldAnimate: a }),
                    (0, r.jsx)(D, {
                        icon: (0, r.jsx)(s.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: R.NW.string(R.t['xsC+//']),
                        guildFeature: u,
                        guild: n,
                        shouldShowPremiumIcon: c
                    })
                ]
            }),
            null != d && (0, r.jsx)(s.nn4, { children: d })
        ]
    });
}
function U(e) {
    let { transitionState: t, onClose: a, onComplete: i, uploadType: d, maxFileSizeBytes: p, showUpsellHeader: h, filters: C, analyticsLocation: E, analyticsLocations: F = [], imageSpecifications: Z, modalTitle: I = R.NW.string(R.t.DToW4e), uploadOptionTitle: L = R.NW.string(R.t['MsUY/f']) } = e,
        D = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        U = (0, o.e7)([O.Z], () => O.Z.getGuildId()),
        B = (0, o.e7)([y.Z], () => y.Z.getGuild(U)),
        z = (0, s.vRw)(),
        H = d === w.pC.AVATAR || d === w.pC.BANNER,
        G = !A.ZP.canUseAnimatedAvatar(D) && d === w.pC.AVATAR,
        V = (0, f.M)(!H),
        X = (0, g.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: q } = (0, u.ZP)(F, c.Z.SELECT_IMAGE_MODAL),
        Y = l.useCallback(
            (e) => {
                let { assetOrigin: t = b.q.NEW_ASSET, imageUri: n, file: r, originalAsset: l, isFromTenor: o = !1 } = e;
                a(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: l,
                        isFromTenor: o
                    });
            },
            [a, i]
        ),
        J = l.useCallback(
            (e, t) => {
                if (t.type === T.m.MP4)
                    return Y({
                        imageUri: e,
                        file: t
                    });
                (0, s.ZDy)(
                    async () => {
                        let { default: l } = await Promise.all([n.e('59732'), n.e('58989')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                k(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: Y,
                                        uploadType: d,
                                        showUpsellHeader: h,
                                        analyticsPage: null == E ? void 0 : E.page
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: z }
                );
            },
            [null == E ? void 0 : E.page, z, Y, h, d]
        ),
        K = l.useCallback(() => {
            (0, P.Z)(p);
        }, [p]),
        $ = l.useCallback(() => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            k(
                                {
                                    uploadType: d,
                                    onComplete: (e) => {
                                        let { imageUri: t, file: n } = e;
                                        return Y({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0
                                        });
                                    },
                                    showUpsellHeader: h,
                                    analyticsPage: null == E ? void 0 : E.page
                                },
                                t
                            )
                        );
                },
                { contextKey: z }
            );
        }, [null == E ? void 0 : E.page, z, Y, h, d]);
    l.useEffect(() => {
        G &&
            N.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: q
            }),
            N.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: E,
                location_stack: q,
                upload_type: d
            });
    }, [G, E, q, d]);
    let Q = h && V,
        ee = d === w.pC.AVATAR && X;
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.DYNAMIC,
        className: _.modal,
        children: [
            (0, r.jsxs)(s.xBx, {
                className: _.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: I
                    }),
                    (0, r.jsx)(s.olH, {
                        onClick: a,
                        className: _.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                className: _.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.imageSelectionSection,
                        children: [
                            (0, r.jsxs)('ul', {
                                className: _.optionsList,
                                'aria-label': R.NW.string(R.t.iBnqtb),
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(W, {
                                            label: L,
                                            uploadType: d,
                                            guild: B,
                                            handleOpenImageEditingModal: J,
                                            maxFileSizeBytes: p,
                                            filters: C,
                                            handleFileSizeError: K
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(M, {
                                            uploadType: d,
                                            guild: B,
                                            handleOpenGIFPickerModal: $
                                        })
                                    })
                                ]
                            }),
                            null != Z
                                ? (0, r.jsx)(s.Text, {
                                      className: _.imageSpecifications,
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: Z
                                  })
                                : null
                        ]
                    }),
                    ee
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(x.Z, { onComplete: Y }),
                                  Q &&
                                      (0, r.jsx)(j.Z, {
                                          className: _.premiumUpsell,
                                          showUpsell: !0,
                                          position: 'inline',
                                          showShadow: !1
                                      })
                              ]
                          })
                        : Q &&
                          (0, r.jsx)(m.Z, {
                              uploadType: d,
                              showUpsell: !0,
                              position: 'inline',
                              showShadow: !1,
                              className: _.premiumUpsell
                          })
                ]
            })
        ]
    });
}
