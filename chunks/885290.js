n.d(t, { Z: () => M });
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
    x = n(782818),
    h = n(442552),
    b = n(430824),
    j = n(914010),
    v = n(594174),
    y = n(626135),
    O = n(267642),
    C = n(74538),
    N = n(621961),
    A = n(884858),
    E = n(981631),
    w = n(486324),
    P = n(869783),
    S = n(388032),
    T = n(849348);
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
let _ = [
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
function R(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)('div', {
        className: T.gifGrid,
        children: _.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: T.gif,
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
    let r = (0, O._p)(t),
        l = n.hasFeature(t);
    if (null == r) return;
    let a = (0, O.nW)(r);
    return l ? S.NW.formatToPlainString(S.t.u3L3TU, { levelName: a }) : S.NW.formatToPlainString(S.t['r/v25e'], { levelName: a });
}
function I(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)('div', {
        className: T.boostingPill,
        children: (0, r.jsx)(d.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function L(e) {
    let { icon: t, label: n, guildFeature: l, guild: a, shouldShowPremiumIcon: o } = e,
        c = null != a && null != l;
    return (0, r.jsxs)('div', {
        className: i()(T.optionDescription, { [T.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, r.jsxs)('div', {
                className: T.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/semibold',
                        className: T.optionLabelText,
                        children: [
                            o &&
                                (0, r.jsx)(s.DY3, {
                                    text: S.NW.string(S.t['5AFxuL']),
                                    children: (0, r.jsx)(s.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: T.premiumWheel
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
function k(e) {
    let { label: t, uploadType: n, guild: l, maxFileSizeBytes: a, filters: o, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        d = (0, N.GY)(n),
        p = (0, N.C6)(n, { isGIF: !1 }),
        m = Z({
            guildFeature: p,
            guild: l
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(T.option, T.imageUploadOption),
                    children: [
                        (0, r.jsx)(L, {
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
function D(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: a, onMouseEnter: i, onMouseLeave: o } = (0, h.Z)(),
        c = (0, N.Kq)(t),
        u = (0, N.C6)(t, { isGIF: !0 }),
        d = Z({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                className: T.option,
                onClick: l,
                'aria-label': S.NW.string(S.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: o,
                children: [
                    (0, r.jsx)(R, { shouldAnimate: a }),
                    (0, r.jsx)(L, {
                        icon: (0, r.jsx)(s.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: S.NW.string(S.t['xsC+//']),
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
    let { transitionState: t, onClose: a, onComplete: i, uploadType: d, maxFileSizeBytes: f, showUpsellHeader: h, filters: O, analyticsLocation: N, analyticsLocations: _ = [], imageSpecifications: R, modalTitle: Z = S.NW.string(S.t.DToW4e), uploadOptionTitle: I = S.NW.string(S.t['MsUY/f']) } = e,
        L = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        M = (0, o.e7)([j.Z], () => j.Z.getGuildId()),
        U = (0, o.e7)([b.Z], () => b.Z.getGuild(M)),
        W = (0, s.vRw)(),
        B = d === w.pC.AVATAR || d === w.pC.BANNER,
        H = !C.ZP.canUseAnimatedAvatar(L) && d === w.pC.AVATAR,
        G = (0, p.M)(!B),
        z = (0, g.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: V } = (0, u.ZP)(_, c.Z.SELECT_IMAGE_MODAL),
        q = l.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                a(), i(e, t, n);
            },
            [a, i]
        ),
        X = l.useCallback(
            (e, t) => {
                if (t.type === P.m.MP4) return q(e, t);
                (0, s.ZDy)(
                    async () => {
                        let { default: l } = await Promise.all([n.e('59732'), n.e('64642')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                F(
                                    {
                                        imgURI: e,
                                        file: t,
                                        onCrop: q,
                                        uploadType: d,
                                        showUpsellHeader: h,
                                        analyticsPage: null == N ? void 0 : N.page
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: W }
                );
            },
            [null == N ? void 0 : N.page, W, q, h, d]
        ),
        Y = l.useCallback(() => {
            a(), (0, A.Z)(f);
        }, [f, a]),
        $ = l.useCallback(() => {
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(
                                {
                                    uploadType: d,
                                    onComplete: (e, t) => q(e, t, !0),
                                    showUpsellHeader: h,
                                    analyticsPage: null == N ? void 0 : N.page
                                },
                                t
                            )
                        );
                },
                { contextKey: W }
            );
        }, [null == N ? void 0 : N.page, W, q, h, d]);
    return (
        l.useEffect(() => {
            H &&
                y.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: E.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location_stack: V
                }),
                y.default.track(E.rMx.OPEN_MODAL, {
                    type: E.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location: N,
                    location_stack: V
                });
        }, [H, N, V]),
        (0, r.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.DYNAMIC,
            className: T.modal,
            children: [
                (0, r.jsxs)(s.xBx, {
                    className: T.modalHeader,
                    separator: !1,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            children: Z
                        }),
                        (0, r.jsx)(s.olH, {
                            onClick: a,
                            className: T.modalCloseButton
                        })
                    ]
                }),
                (0, r.jsxs)(s.hzk, {
                    className: T.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.imageSelectionSection,
                            children: [
                                (0, r.jsxs)('ul', {
                                    className: T.optionsList,
                                    'aria-label': S.NW.string(S.t.iBnqtb),
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(k, {
                                                label: I,
                                                uploadType: d,
                                                guild: U,
                                                handleOpenImageEditingModal: X,
                                                maxFileSizeBytes: f,
                                                filters: O,
                                                handleFileSizeError: Y
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)(D, {
                                                uploadType: d,
                                                guild: U,
                                                handleOpenGIFPickerModal: $
                                            })
                                        })
                                    ]
                                }),
                                null != R
                                    ? (0, r.jsx)(s.Text, {
                                          className: T.imageSpecifications,
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: R
                                      })
                                    : null
                            ]
                        }),
                        d === w.pC.AVATAR && z
                            ? (0, r.jsx)(x.Z, {
                                  className: T.recentAvatarsSection,
                                  onComplete: q,
                                  onClose: a
                              })
                            : h &&
                              G &&
                              (0, r.jsx)(m.Z, {
                                  uploadType: d,
                                  showUpsell: !0,
                                  position: 'inline',
                                  showShadow: !1,
                                  className: T.premiumUpsell
                              })
                    ]
                })
            ]
        })
    );
}
