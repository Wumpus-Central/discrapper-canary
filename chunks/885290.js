n.d(t, { Z: () => U });
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
    x = n(222062),
    p = n(530329),
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
    Z = n(388032),
    L = n(370222);
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
function y(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, l.jsx)('div', {
        className: L.gifGrid,
        children: R.map((e) =>
            (0, l.jsx)(
                'div',
                {
                    className: L.gif,
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
    return a ? Z.intl.formatToPlainString(Z.t.u3L3TU, { levelName: i }) : Z.intl.formatToPlainString(Z.t['r/v25e'], { levelName: i });
}
function M(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, l.jsx)('div', {
        className: L.boostingPill,
        children: (0, l.jsx)(u.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function w(e) {
    let { icon: t, label: n, guildFeature: a, guild: i, shouldShowPremiumIcon: r } = e,
        c = null != i && null != a;
    return (0, l.jsxs)('div', {
        className: s()(L.optionDescription, { [L.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, l.jsxs)('div', {
                className: L.optionIconAndLabel,
                children: [
                    t,
                    (0, l.jsxs)(o.Text, {
                        variant: 'text-sm/semibold',
                        className: L.optionLabelText,
                        children: [
                            r &&
                                (0, l.jsx)(o.DY3, {
                                    text: Z.intl.string(Z.t['5AFxuL']),
                                    children: (0, l.jsx)(o.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: L.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, l.jsx)(M, {
                    guild: i,
                    guildFeature: a
                })
        ]
    });
}
function P(e) {
    let { label: t, uploadType: n, guild: a, maxFileSizeBytes: i, filters: r, handleOpenImageEditingModal: c, handleFileSizeError: d } = e,
        u = (0, T.GY)(n),
        x = (0, T.C6)(n, { isGIF: !1 }),
        p = I({
            guildFeature: x,
            guild: a
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.tEY, {
                within: !0,
                children: (0, l.jsxs)('div', {
                    className: s()(L.option, L.imageUploadOption),
                    children: [
                        (0, l.jsx)(w, {
                            icon: (0, l.jsx)(o.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: x,
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
            null != p && (0, l.jsx)(o.nn4, { children: p })
        ]
    });
}
function O(e) {
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
                className: L.option,
                onClick: a,
                'aria-label': Z.intl.string(Z.t['xsC+//']),
                onMouseEnter: s,
                onMouseLeave: r,
                children: [
                    (0, l.jsx)(y, { shouldAnimate: i }),
                    (0, l.jsx)(w, {
                        icon: (0, l.jsx)(o.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: Z.intl.string(Z.t['xsC+//']),
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
function U(e) {
    let { transitionState: t, onClose: i, onComplete: s, uploadType: u, maxFileSizeBytes: m, showUpsellHeader: h, filters: N, analyticsLocation: T, analyticsLocations: R = [], imageSpecifications: y, modalTitle: I = Z.intl.string(Z.t.DToW4e), uploadOptionTitle: M = Z.intl.string(Z.t['MsUY/f']) } = e,
        w = (0, r.e7)([j.default], () => j.default.getCurrentUser()),
        U = (0, r.e7)([A.Z], () => A.Z.getGuildId()),
        k = (0, r.e7)([C.Z], () => C.Z.getGuild(U)),
        D = (0, o.vRw)(),
        B = u === S.pC.AVATAR || u === S.pC.BANNER,
        G = !E.ZP.canUseAnimatedAvatar(w) && u === S.pC.AVATAR,
        H = (0, x.M)(!B),
        z = (0, f.Tq)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: V } = (0, d.ZP)(R, c.Z.SELECT_IMAGE_MODAL),
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
            className: L.modal,
            children: [
                (0, l.jsxs)(o.xBx, {
                    className: L.modalHeader,
                    separator: !1,
                    children: [
                        (0, l.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: I
                        }),
                        (0, l.jsx)(o.olH, {
                            onClick: i,
                            className: L.modalCloseButton
                        })
                    ]
                }),
                (0, l.jsxs)(o.hzk, {
                    className: L.modalContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: L.imageSelectionSection,
                            children: [
                                (0, l.jsxs)('ul', {
                                    className: L.optionsList,
                                    'aria-label': Z.intl.string(Z.t.iBnqtb),
                                    children: [
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(P, {
                                                label: M,
                                                uploadType: u,
                                                guild: k,
                                                handleOpenImageEditingModal: q,
                                                maxFileSizeBytes: m,
                                                filters: N,
                                                handleFileSizeError: Y
                                            })
                                        }),
                                        (0, l.jsx)('li', {
                                            children: (0, l.jsx)(O, {
                                                uploadType: u,
                                                guild: k,
                                                handleOpenGIFPickerModal: X
                                            })
                                        })
                                    ]
                                }),
                                null != y
                                    ? (0, l.jsx)(o.Text, {
                                          className: L.imageSpecifications,
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: y
                                      })
                                    : null
                            ]
                        }),
                        u === S.pC.AVATAR && z
                            ? (0, l.jsx)(g.Z, {
                                  className: L.recentAvatarsSection,
                                  onClose: i
                              })
                            : h &&
                              H &&
                              (0, l.jsx)(p.Z, {
                                  uploadType: u,
                                  showUpsell: !0,
                                  position: 'inline',
                                  showShadow: !1,
                                  className: L.premiumUpsell
                              })
                    ]
                })
            ]
        })
    );
}
