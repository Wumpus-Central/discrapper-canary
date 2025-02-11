n.d(l, { Z: () => U });
var i = n(200651),
    t = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(442837),
    r = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(807582),
    p = n(813197),
    x = n(222062),
    m = n(530329),
    g = n(442552),
    f = n(430824),
    h = n(914010),
    j = n(594174),
    C = n(626135),
    N = n(267642),
    v = n(74538),
    A = n(621961),
    E = n(884858),
    F = n(981631),
    _ = n(486324),
    b = n(869783),
    I = n(388032),
    L = n(755809);
let T = [
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
    let { shouldAnimate: l = !0 } = e;
    return (0, i.jsx)('div', {
        className: L.gifGrid,
        children: T.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: L.gif,
                    style: { backgroundImage: 'url('.concat(l ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function M(e) {
    let { guildFeature: l, guild: n } = e;
    if (null == l || null == n) return;
    let i = (0, N._p)(l),
        t = n.hasFeature(l);
    if (null == i) return;
    let s = (0, N.nW)(i);
    return t ? I.intl.formatToPlainString(I.t.u3L3TU, { levelName: s }) : I.intl.formatToPlainString(I.t['r/v25e'], { levelName: s });
}
function S(e) {
    let { guildFeature: l, guild: n } = e;
    return (0, i.jsx)('div', {
        className: L.boostingPill,
        children: (0, i.jsx)(u.Z, {
            guildFeature: l,
            guild: n,
            hideTooltip: !0
        })
    });
}
function P(e) {
    let { icon: l, label: n, guildFeature: t, guild: s, shouldShowPremiumIcon: o } = e,
        c = null != s && null != t;
    return (0, i.jsxs)('div', {
        className: a()(L.optionDescription, { [L.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, i.jsxs)('div', {
                className: L.optionIconAndLabel,
                children: [
                    l,
                    (0, i.jsxs)(r.Text, {
                        variant: 'text-sm/semibold',
                        className: L.optionLabelText,
                        children: [
                            o &&
                                (0, i.jsx)(r.DY3, {
                                    text: I.intl.string(I.t['5AFxuL']),
                                    children: (0, i.jsx)(r.SrA, {
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
                (0, i.jsx)(S, {
                    guild: s,
                    guildFeature: t
                })
        ]
    });
}
function Z(e) {
    let { label: l, uploadType: n, guild: t, maxFileSizeBytes: s, filters: o, handleOpenImageEditingModal: c, handleFileSizeError: d } = e,
        u = (0, A.GY)(n),
        x = (0, A.C6)(n, { isGIF: !1 }),
        m = M({
            guildFeature: x,
            guild: t
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.tEY, {
                within: !0,
                children: (0, i.jsxs)('div', {
                    className: a()(L.option, L.imageUploadOption),
                    children: [
                        (0, i.jsx)(P, {
                            icon: (0, i.jsx)(r.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: l,
                            guildFeature: x,
                            guild: t,
                            shouldShowPremiumIcon: u
                        }),
                        (0, i.jsx)(p.ZP, {
                            'aria-label': l,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: s,
                            onFileSizeError: d,
                            filters: o,
                            multiple: !1
                        })
                    ]
                })
            }),
            null != m && (0, i.jsx)(r.nn4, { children: m })
        ]
    });
}
function O(e) {
    let { uploadType: l, guild: n, handleOpenGIFPickerModal: t } = e,
        { shouldAnimate: s, onMouseEnter: a, onMouseLeave: o } = (0, g.Z)(),
        c = (0, A.Kq)(l),
        d = (0, A.C6)(l, { isGIF: !0 }),
        u = M({
            guildFeature: d,
            guild: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.P3F, {
                className: L.option,
                onClick: t,
                'aria-label': I.intl.string(I.t['xsC+//']),
                onMouseEnter: a,
                onMouseLeave: o,
                children: [
                    (0, i.jsx)(y, { shouldAnimate: s }),
                    (0, i.jsx)(P, {
                        icon: (0, i.jsx)(r.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: I.intl.string(I.t['xsC+//']),
                        guildFeature: d,
                        guild: n,
                        shouldShowPremiumIcon: c
                    })
                ]
            }),
            null != u && (0, i.jsx)(r.nn4, { children: u })
        ]
    });
}
function U(e) {
    let { transitionState: l, onClose: s, onComplete: a, uploadType: u, maxFileSizeBytes: p, showUpsellHeader: g, filters: N, analyticsLocation: A, analyticsLocations: T = [], imageSpecifications: y, modalTitle: M = I.intl.string(I.t.DToW4e), uploadOptionTitle: S = I.intl.string(I.t['MsUY/f']) } = e,
        P = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        U = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        k = (0, o.e7)([f.Z], () => f.Z.getGuild(U)),
        D = (0, r.vRw)(),
        w = u === _.pC.AVATAR || u === _.pC.BANNER,
        R = !v.ZP.canUseAnimatedAvatar(P) && u === _.pC.AVATAR,
        B = (0, x.M)(!w),
        { analyticsLocations: G } = (0, d.ZP)(T, c.Z.SELECT_IMAGE_MODAL),
        z = t.useCallback(
            function (e, l) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                s(), a(e, l, n);
            },
            [s, a]
        ),
        H = t.useCallback(
            (e, l) => {
                if (l.type === b.m.MP4) return z(e, l);
                (0, r.ZDy)(
                    async () => {
                        let { default: t } = await Promise.all([n.e('59732'), n.e('40787')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, i.jsx)(t, {
                                imgURI: e,
                                file: l,
                                onCrop: z,
                                uploadType: u,
                                showUpsellHeader: g,
                                analyticsPage: null == A ? void 0 : A.page,
                                ...n
                            });
                    },
                    { contextKey: D }
                );
            },
            [null == A ? void 0 : A.page, D, z, g, u]
        ),
        W = t.useCallback(() => {
            s(), (0, E.Z)(p);
        }, [p, s]),
        Y = t.useCallback(() => {
            (0, r.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (l) =>
                        (0, i.jsx)(e, {
                            uploadType: u,
                            onComplete: (e, l) => z(e, l, !0),
                            showUpsellHeader: g,
                            analyticsPage: null == A ? void 0 : A.page,
                            ...l
                        });
                },
                { contextKey: D }
            );
        }, [null == A ? void 0 : A.page, D, z, g, u]);
    return (
        t.useEffect(() => {
            R &&
                C.default.track(F.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: F.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location_stack: G
                }),
                C.default.track(F.rMx.OPEN_MODAL, {
                    type: F.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                    location: A,
                    location_stack: G
                });
        }, [R, A, G]),
        (0, i.jsxs)(r.Y0X, {
            className: L.modal,
            transitionState: l,
            size: r.CgR.DYNAMIC,
            children: [
                (0, i.jsxs)(r.xBx, {
                    className: L.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            children: M
                        }),
                        (0, i.jsx)(r.olH, {
                            onClick: s,
                            className: L.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)(r.hzk, {
                    className: L.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.imageSelectionSection,
                            children: [
                                (0, i.jsxs)('ul', {
                                    className: L.optionsList,
                                    'aria-label': I.intl.string(I.t.iBnqtb),
                                    children: [
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(Z, {
                                                label: S,
                                                uploadType: u,
                                                guild: k,
                                                handleOpenImageEditingModal: H,
                                                maxFileSizeBytes: p,
                                                filters: N,
                                                handleFileSizeError: W
                                            })
                                        }),
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(O, {
                                                uploadType: u,
                                                guild: k,
                                                handleOpenGIFPickerModal: Y
                                            })
                                        })
                                    ]
                                }),
                                null != y
                                    ? (0, i.jsx)(r.Text, {
                                          className: L.imageSpecifications,
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: y
                                      })
                                    : null
                            ]
                        }),
                        g &&
                            B &&
                            (0, i.jsx)(m.Z, {
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
