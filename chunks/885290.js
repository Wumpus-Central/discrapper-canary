n.d(t, { Z: () => M });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(807582),
    p = n(813197),
    f = n(222062),
    m = n(530329),
    g = n(373230),
    j = n(72703),
    b = n(960291),
    x = n(782818),
    h = n(442552),
    y = n(430824),
    O = n(914010),
    v = n(594174),
    N = n(626135),
    A = n(267642),
    C = n(74538),
    E = n(621961),
    P = n(884858),
    S = n(981631),
    w = n(486324),
    T = n(869783),
    F = n(388032),
    R = n(882061);
function _(e) {
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
let Z = [
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
function L(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)('div', {
        className: R.gifGrid,
        children: Z.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: R.gif,
                    style: { backgroundImage: 'url('.concat(t ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function D(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, A._p)(t),
        a = n.hasFeature(t);
    if (null == r) return;
    let l = (0, A.nW)(r);
    return a ? F.NW.formatToPlainString(F.t.u3L3TU, { levelName: l }) : F.NW.formatToPlainString(F.t['r/v25e'], { levelName: l });
}
function I(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)('div', {
        className: R.boostingPill,
        children: (0, r.jsx)(d.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function k(e) {
    let { icon: t, label: n, guildFeature: a, guild: l, shouldShowPremiumIcon: o } = e,
        c = null != l && null != a;
    return (0, r.jsxs)('div', {
        className: i()(R.optionDescription, { [R.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, r.jsxs)('div', {
                className: R.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/semibold',
                        className: i()(R.optionLabelText, { [R.hasPremiumIcon]: o }),
                        children: [
                            o &&
                                (0, r.jsx)(s.DY3, {
                                    text: F.NW.string(F.t['5AFxuL']),
                                    children: (0, r.jsx)(s.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: R.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsx)(I, {
                    guild: l,
                    guildFeature: a
                })
        ]
    });
}
function U(e) {
    let { label: t, uploadType: n, guild: a, maxFileSizeBytes: l, filters: o, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        d = (0, E.GY)(n),
        f = (0, E.C6)(n, { isGIF: !1 }),
        m = D({
            guildFeature: f,
            guild: a
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(R.option, R.imageUploadOption),
                    children: [
                        (0, r.jsx)(k, {
                            icon: (0, r.jsx)(s.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: f,
                            guild: a,
                            shouldShowPremiumIcon: d
                        }),
                        (0, r.jsx)(p.ZP, {
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
function W(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: o } = (0, h.Z)(),
        c = (0, E.Kq)(t),
        u = (0, E.C6)(t, { isGIF: !0 }),
        d = D({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                className: R.option,
                onClick: a,
                'aria-label': F.NW.string(F.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: o,
                children: [
                    (0, r.jsx)(L, { shouldAnimate: l }),
                    (0, r.jsx)(k, {
                        icon: (0, r.jsx)(s.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: F.NW.string(F.t['xsC+//']),
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
function M(e) {
    let { transitionState: t, onClose: l, onComplete: i, uploadType: d, maxFileSizeBytes: p, showUpsellHeader: h, filters: A, analyticsLocation: E, analyticsLocations: Z = [], imageSpecifications: L, modalTitle: D = F.NW.string(F.t.DToW4e), uploadOptionTitle: I = F.NW.string(F.t['MsUY/f']) } = e,
        k = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        M = (0, o.e7)([O.Z], () => O.Z.getGuildId()),
        B = (0, o.e7)([y.Z], () => y.Z.getGuild(M)),
        H = (0, s.vRw)(),
        z = d === w.pC.AVATAR || d === w.pC.BANNER,
        G = !C.ZP.canUseAnimatedAvatar(k) && d === w.pC.AVATAR,
        V = (0, f.M)(!z),
        X = (0, g.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: q } = (0, u.ZP)(Z, c.Z.SELECT_IMAGE_MODAL),
        Y = a.useCallback(
            (e) => {
                let { assetOrigin: t = j.q.NEW_ASSET, imageUri: n, file: r, originalAsset: a, isFromTenor: o = !1 } = e;
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
        J = a.useCallback(
            (e, t) => {
                if (t.type === T.m.MP4)
                    return Y({
                        imageUri: e,
                        file: t
                    });
                (0, s.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e('59732'), n.e('71741')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                a,
                                _(
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
                    { contextKey: H }
                );
            },
            [null == E ? void 0 : E.page, H, Y, h, d]
        ),
        K = a.useCallback(() => {
            (0, P.Z)(p);
        }, [p]),
        $ = a.useCallback(() => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            _(
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
                { contextKey: H }
            );
        }, [null == E ? void 0 : E.page, H, Y, h, d]);
    a.useEffect(() => {
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
        className: R.modal,
        children: [
            (0, r.jsxs)(s.xBx, {
                className: R.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: D
                    }),
                    (0, r.jsx)(s.olH, {
                        onClick: l,
                        className: R.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                className: R.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.imageSelectionSection,
                        children: [
                            (0, r.jsxs)('ul', {
                                className: R.optionsList,
                                'aria-label': F.NW.string(F.t.iBnqtb),
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(U, {
                                            label: I,
                                            uploadType: d,
                                            guild: B,
                                            handleOpenImageEditingModal: J,
                                            maxFileSizeBytes: p,
                                            filters: A,
                                            handleFileSizeError: K
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(W, {
                                            uploadType: d,
                                            guild: B,
                                            handleOpenGIFPickerModal: $
                                        })
                                    })
                                ]
                            }),
                            null != L
                                ? (0, r.jsx)(s.Text, {
                                      className: R.imageSpecifications,
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: L
                                  })
                                : null
                        ]
                    }),
                    ee
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(x.Z, { onComplete: Y }),
                                  Q &&
                                      (0, r.jsx)(b.Z, {
                                          className: R.premiumUpsell,
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
                              className: R.premiumUpsell
                          })
                ]
            })
        ]
    });
}
