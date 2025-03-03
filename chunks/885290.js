n.d(t, { Z: () => W });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(807582),
    f = n(813197),
    p = n(222062),
    m = n(530329),
    g = n(373230),
    b = n(72703),
    j = n(960291),
    x = n(782818),
    h = n(442552),
    y = n(430824),
    O = n(914010),
    v = n(594174),
    C = n(626135),
    A = n(267642),
    N = n(74538),
    E = n(621961),
    S = n(884858),
    P = n(981631),
    w = n(486324),
    T = n(869783),
    F = n(388032),
    _ = n(882061);
function R(e) {
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
        className: _.gifGrid,
        children: Z.map((e) =>
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
function k(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, A._p)(t),
        l = n.hasFeature(t);
    if (null == r) return;
    let a = (0, A.nW)(r);
    return l ? F.NW.formatToPlainString(F.t.u3L3TU, { levelName: a }) : F.NW.formatToPlainString(F.t['r/v25e'], { levelName: a });
}
function I(e) {
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
function U(e) {
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
                                    text: F.NW.string(F.t['5AFxuL']),
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
                (0, r.jsx)(I, {
                    guild: a,
                    guildFeature: l
                })
        ]
    });
}
function D(e) {
    let { label: t, uploadType: n, guild: l, maxFileSizeBytes: a, filters: o, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        d = (0, E.GY)(n),
        p = (0, E.C6)(n, { isGIF: !1 }),
        m = k({
            guildFeature: p,
            guild: l
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(_.option, _.imageUploadOption),
                    children: [
                        (0, r.jsx)(U, {
                            icon: (0, r.jsx)(s.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: p,
                            guild: l,
                            shouldShowPremiumIcon: d
                        }),
                        (0, r.jsx)(f.ZP, {
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
        d = k({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                className: _.option,
                onClick: l,
                'aria-label': F.NW.string(F.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: o,
                children: [
                    (0, r.jsx)(L, { shouldAnimate: a }),
                    (0, r.jsx)(U, {
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
function W(e) {
    let { transitionState: t, onClose: a, onComplete: i, uploadType: d, maxFileSizeBytes: f, showUpsellHeader: h, filters: A, analyticsLocation: E, analyticsLocations: Z = [], imageSpecifications: L, modalTitle: k = F.NW.string(F.t.DToW4e), uploadOptionTitle: I = F.NW.string(F.t['MsUY/f']) } = e,
        U = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        W = (0, o.e7)([O.Z], () => O.Z.getGuildId()),
        B = (0, o.e7)([y.Z], () => y.Z.getGuild(W)),
        H = (0, s.vRw)(),
        z = d === w.pC.AVATAR || d === w.pC.BANNER,
        G = !N.ZP.canUseAnimatedAvatar(U) && d === w.pC.AVATAR,
        V = (0, p.M)(!z),
        X = (0, g.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: q } = (0, u.ZP)(Z, c.Z.SELECT_IMAGE_MODAL),
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
                        let { default: l } = await Promise.all([n.e('59732'), n.e('71741')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                R(
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
        K = l.useCallback(() => {
            a(), (0, S.Z)(f);
        }, [f, a]),
        $ = l.useCallback(() => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            R(
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
    l.useEffect(() => {
        G &&
            C.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: q
            }),
            C.default.track(P.rMx.OPEN_MODAL, {
                type: P.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
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
                        children: k
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
                                'aria-label': F.NW.string(F.t.iBnqtb),
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(D, {
                                            label: I,
                                            uploadType: d,
                                            guild: B,
                                            handleOpenImageEditingModal: J,
                                            maxFileSizeBytes: f,
                                            filters: A,
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
                            null != L
                                ? (0, r.jsx)(s.Text, {
                                      className: _.imageSpecifications,
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
                                  (0, r.jsx)(x.Z, {
                                      onComplete: Y,
                                      onClose: a
                                  }),
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
