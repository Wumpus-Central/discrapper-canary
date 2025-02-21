n.d(t, { Z: () => U });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(807582),
    f = n(813197),
    p = n(222062),
    m = n(530329),
    g = n(373230),
    x = n(72703),
    b = n(782818),
    h = n(442552),
    j = n(430824),
    v = n(914010),
    y = n(594174),
    O = n(626135),
    C = n(267642),
    A = n(74538),
    N = n(621961),
    E = n(884858),
    S = n(981631),
    w = n(486324),
    P = n(869783),
    T = n(388032),
    _ = n(849348);
function F(e) {
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
let R = [
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
function I(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)('div', {
        className: _.gifGrid,
        children: R.map((e) =>
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
function Z(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, C._p)(t),
        a = n.hasFeature(t);
    if (null == r) return;
    let l = (0, C.nW)(r);
    return a ? T.NW.formatToPlainString(T.t.u3L3TU, { levelName: l }) : T.NW.formatToPlainString(T.t['r/v25e'], { levelName: l });
}
function D(e) {
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
function L(e) {
    let { icon: t, label: n, guildFeature: a, guild: l, shouldShowPremiumIcon: o } = e,
        c = null != l && null != a;
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
                        className: _.optionLabelText,
                        children: [
                            o &&
                                (0, r.jsx)(s.DY3, {
                                    text: T.NW.string(T.t['5AFxuL']),
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
                (0, r.jsx)(D, {
                    guild: l,
                    guildFeature: a
                })
        ]
    });
}
function k(e) {
    let { label: t, uploadType: n, guild: a, maxFileSizeBytes: l, filters: o, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        d = (0, N.GY)(n),
        p = (0, N.C6)(n, { isGIF: !1 }),
        m = Z({
            guildFeature: p,
            guild: a
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(_.option, _.imageUploadOption),
                    children: [
                        (0, r.jsx)(L, {
                            icon: (0, r.jsx)(s.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: p,
                            guild: a,
                            shouldShowPremiumIcon: d
                        }),
                        (0, r.jsx)(f.ZP, {
                            'aria-label': t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: l,
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
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: o } = (0, h.Z)(),
        c = (0, N.Kq)(t),
        u = (0, N.C6)(t, { isGIF: !0 }),
        d = Z({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                className: _.option,
                onClick: a,
                'aria-label': T.NW.string(T.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: o,
                children: [
                    (0, r.jsx)(I, { shouldAnimate: l }),
                    (0, r.jsx)(L, {
                        icon: (0, r.jsx)(s.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: T.NW.string(T.t['xsC+//']),
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
    let { transitionState: t, onClose: l, onComplete: i, uploadType: d, maxFileSizeBytes: f, showUpsellHeader: h, filters: C, analyticsLocation: N, analyticsLocations: R = [], imageSpecifications: I, modalTitle: Z = T.NW.string(T.t.DToW4e), uploadOptionTitle: D = T.NW.string(T.t['MsUY/f']) } = e,
        L = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        U = (0, o.e7)([v.Z], () => v.Z.getGuildId()),
        W = (0, o.e7)([j.Z], () => j.Z.getGuild(U)),
        B = (0, s.vRw)(),
        H = d === w.pC.AVATAR || d === w.pC.BANNER,
        V = !A.ZP.canUseAnimatedAvatar(L) && d === w.pC.AVATAR,
        G = (0, p.M)(!H),
        z = (0, g.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: q } = (0, u.ZP)(R, c.Z.SELECT_IMAGE_MODAL),
        X = a.useCallback(
            (e) => {
                let { assetOrigin: t = x.q.NEW_ASSET, imageUri: n, file: r, originalAsset: a, isFromTenor: o = !1 } = e;
                l(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: a,
                        isFromTenor: o
                    });
            },
            [l, i]
        ),
        Y = a.useCallback(
            (e, t) => {
                if (t.type === P.m.MP4)
                    return X({
                        imageUri: e,
                        file: t
                    });
                (0, s.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e('59732'), n.e('64642')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                a,
                                F(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: X,
                                        uploadType: d,
                                        showUpsellHeader: h,
                                        analyticsPage: null == N ? void 0 : N.page
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: B }
                );
            },
            [null == N ? void 0 : N.page, B, X, h, d]
        ),
        $ = a.useCallback(() => {
            l(), (0, E.Z)(f);
        }, [f, l]),
        J = a.useCallback(() => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(
                                {
                                    uploadType: d,
                                    onComplete: (e) => {
                                        let { imageUri: t, file: n } = e;
                                        return X({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0
                                        });
                                    },
                                    showUpsellHeader: h,
                                    analyticsPage: null == N ? void 0 : N.page
                                },
                                t
                            )
                        );
                },
                { contextKey: B }
            );
        }, [null == N ? void 0 : N.page, B, X, h, d]);
    return (
        a.useEffect(() => {
            V &&
                O.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location_stack: q
                }),
                O.default.track(S.rMx.OPEN_MODAL, {
                    type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location: N,
                    location_stack: q
                });
        }, [V, N, q]),
        (0, r.jsxs)(s.Y0X, {
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
                            children: Z
                        }),
                        (0, r.jsx)(s.olH, {
                            onClick: l,
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
                                    'aria-label': T.NW.string(T.t.iBnqtb),
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(k, {
                                                label: D,
                                                uploadType: d,
                                                guild: W,
                                                handleOpenImageEditingModal: Y,
                                                maxFileSizeBytes: f,
                                                filters: C,
                                                handleFileSizeError: $
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(M, {
                                                uploadType: d,
                                                guild: W,
                                                handleOpenGIFPickerModal: J
                                            })
                                        })
                                    ]
                                }),
                                null != I
                                    ? (0, r.jsx)(s.Text, {
                                          className: _.imageSpecifications,
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: I
                                      })
                                    : null
                            ]
                        }),
                        d === w.pC.AVATAR && z
                            ? (0, r.jsx)(b.Z, {
                                  className: _.recentAvatarsSection,
                                  onComplete: X,
                                  onClose: l
                              })
                            : h &&
                              G &&
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
        })
    );
}
