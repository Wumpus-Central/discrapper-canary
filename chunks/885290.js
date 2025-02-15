n.d(t, { Z: () => O });
var l = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    r = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(807582),
    m = n(813197),
    p = n(222062),
    x = n(530329),
    f = n(373230),
    g = n(782818),
    h = n(442552),
    C = n(430824),
    A = n(914010),
    j = n(594174),
    v = n(626135),
    N = n(267642),
    E = n(74538),
    T = n(621961),
    F = n(884858),
    _ = n(981631),
    S = n(486324),
    b = n(869783),
    R = n(388032),
    Z = n(370222);
let y = [
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
function w(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, l.jsx)('div', {
        className: Z.gifGrid,
        children: y.map((e) =>
            (0, l.jsx)(
                'div',
                {
                    className: Z.gif,
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
    let l = (0, N._p)(t),
        a = n.hasFeature(t);
    if (null == l) return;
    let i = (0, N.nW)(l);
    return a ? R.intl.formatToPlainString(R.t.u3L3TU, { levelName: i }) : R.intl.formatToPlainString(R.t['r/v25e'], { levelName: i });
}
function L(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, l.jsx)('div', {
        className: Z.boostingPill,
        children: (0, l.jsx)(u.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function M(e) {
    let { icon: t, label: n, guildFeature: a, guild: i, shouldShowPremiumIcon: r } = e,
        c = null != i && null != a;
    return (0, l.jsxs)('div', {
        className: s()(Z.optionDescription, { [Z.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, l.jsxs)('div', {
                className: Z.optionIconAndLabel,
                children: [
                    t,
                    (0, l.jsxs)(o.Text, {
                        variant: 'text-sm/semibold',
                        className: Z.optionLabelText,
                        children: [
                            r &&
                                (0, l.jsx)(o.DY3, {
                                    text: R.intl.string(R.t['5AFxuL']),
                                    children: (0, l.jsx)(o.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: Z.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, l.jsx)(L, {
                    guild: i,
                    guildFeature: a
                })
        ]
    });
}
function P(e) {
    let { label: t, uploadType: n, guild: a, maxFileSizeBytes: i, filters: r, handleOpenImageEditingModal: c, handleFileSizeError: d } = e,
        u = (0, T.GY)(n),
        p = (0, T.C6)(n, { isGIF: !1 }),
        x = I({
            guildFeature: p,
            guild: a
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.tEY, {
                within: !0,
                children: (0, l.jsxs)('div', {
                    className: s()(Z.option, Z.imageUploadOption),
                    children: [
                        (0, l.jsx)(M, {
                            icon: (0, l.jsx)(o.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: p,
                            guild: a,
                            shouldShowPremiumIcon: u
                        }),
                        (0, l.jsx)(m.ZP, {
                            'aria-label': t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: i,
                            onFileSizeError: d,
                            filters: r,
                            multiple: !1
                        })
                    ]
                })
            }),
            null != x && (0, l.jsx)(o.nn4, { children: x })
        ]
    });
}
function U(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: i, onMouseEnter: s, onMouseLeave: r } = (0, h.Z)(),
        c = (0, T.Kq)(t),
        d = (0, T.C6)(t, { isGIF: !0 }),
        u = I({
            guildFeature: d,
            guild: n
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.P3F, {
                className: Z.option,
                onClick: a,
                'aria-label': R.intl.string(R.t['xsC+//']),
                onMouseEnter: s,
                onMouseLeave: r,
                children: [
                    (0, l.jsx)(w, { shouldAnimate: i }),
                    (0, l.jsx)(M, {
                        icon: (0, l.jsx)(o.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: R.intl.string(R.t['xsC+//']),
                        guildFeature: d,
                        guild: n,
                        shouldShowPremiumIcon: c
                    })
                ]
            }),
            null != u && (0, l.jsx)(o.nn4, { children: u })
        ]
    });
}
function O(e) {
    let { transitionState: t, onClose: i, onComplete: s, uploadType: u, maxFileSizeBytes: m, showUpsellHeader: h, filters: N, analyticsLocation: T, analyticsLocations: y = [], imageSpecifications: w, modalTitle: I = R.intl.string(R.t.DToW4e), uploadOptionTitle: L = R.intl.string(R.t['MsUY/f']) } = e,
        M = (0, r.e7)([j.default], () => j.default.getCurrentUser()),
        O = (0, r.e7)([A.Z], () => A.Z.getGuildId()),
        k = (0, r.e7)([C.Z], () => C.Z.getGuild(O)),
        D = (0, o.vRw)(),
        B = u === S.pC.AVATAR || u === S.pC.BANNER,
        G = !E.ZP.canUseAnimatedAvatar(M) && u === S.pC.AVATAR,
        H = (0, p.M)(!B),
        z = (0, f.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: V } = (0, d.ZP)(y, c.Z.SELECT_IMAGE_MODAL),
        W = a.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                i(), s(e, t, n);
            },
            [i, s]
        ),
        q = a.useCallback(
            (e, t) => {
                if (t.type === b.m.MP4) return W(e, t);
                (0, o.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e('59732'), n.e('27952')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, l.jsx)(a, {
                                imgURI: e,
                                file: t,
                                onCrop: W,
                                uploadType: u,
                                showUpsellHeader: h,
                                analyticsPage: null == T ? void 0 : T.page,
                                ...n
                            });
                    },
                    { contextKey: D }
                );
            },
            [null == T ? void 0 : T.page, D, W, h, u]
        ),
        Y = a.useCallback(() => {
            i(), (0, F.Z)(m);
        }, [m, i]),
        X = a.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, l.jsx)(e, {
                            uploadType: u,
                            onComplete: (e, t) => W(e, t, !0),
                            showUpsellHeader: h,
                            analyticsPage: null == T ? void 0 : T.page,
                            ...t
                        });
                },
                { contextKey: D }
            );
        }, [null == T ? void 0 : T.page, D, W, h, u]);
    return (
        a.useEffect(() => {
            G &&
                v.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: _.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location_stack: V
                }),
                v.default.track(_.rMx.OPEN_MODAL, {
                    type: _.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location: T,
                    location_stack: V
                });
        }, [G, T, V]),
        (0, l.jsxs)(o.Y0X, {
            transitionState: t,
            size: o.CgR.DYNAMIC,
            className: Z.modal,
            children: [
                (0, l.jsxs)(o.xBx, {
                    className: Z.modalHeader,
                    separator: !1,
                    children: [
                        (0, l.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: I
                        }),
                        (0, l.jsx)(o.olH, {
                            onClick: i,
                            className: Z.modalCloseButton
                        })
                    ]
                }),
                (0, l.jsxs)(o.hzk, {
                    className: Z.modalContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: Z.imageSelectionSection,
                            children: [
                                (0, l.jsxs)('ul', {
                                    className: Z.optionsList,
                                    'aria-label': R.intl.string(R.t.iBnqtb),
                                    children: [
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(P, {
                                                label: L,
                                                uploadType: u,
                                                guild: k,
                                                handleOpenImageEditingModal: q,
                                                maxFileSizeBytes: m,
                                                filters: N,
                                                handleFileSizeError: Y
                                            })
                                        }),
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(U, {
                                                uploadType: u,
                                                guild: k,
                                                handleOpenGIFPickerModal: X
                                            })
                                        })
                                    ]
                                }),
                                null != w
                                    ? (0, l.jsx)(o.Text, {
                                          className: Z.imageSpecifications,
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: w
                                      })
                                    : null
                            ]
                        }),
                        u === S.pC.AVATAR && z
                            ? (0, l.jsx)(g.Z, {
                                  className: Z.recentAvatarsSection,
                                  onComplete: W,
                                  onClose: i
                              })
                            : h &&
                              H &&
                              (0, l.jsx)(x.Z, {
                                  uploadType: u,
                                  showUpsell: !0,
                                  position: 'inline',
                                  showShadow: !1,
                                  className: Z.premiumUpsell
                              })
                    ]
                })
            ]
        })
    );
}
