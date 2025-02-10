n.d(l, { Z: () => k }), n(47120);
var i = n(200651),
    t = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(442837),
    r = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(807582),
    x = n(813197),
    p = n(222062),
    m = n(530329),
    g = n(430824),
    f = n(914010),
    h = n(594174),
    j = n(451478),
    C = n(626135),
    N = n(267642),
    v = n(74538),
    A = n(621961),
    E = n(884858),
    F = n(981631),
    b = n(486324),
    _ = n(869783),
    L = n(388032),
    I = n(755809);
let S = [
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
function T(e) {
    let { shouldAnimate: l = !0 } = e,
        [n, s] = t.useState(!1);
    return (0, i.jsx)('div', {
        className: I.gifGrid,
        onMouseMove: () => s(!0),
        onMouseLeave: () => s(!1),
        children: S.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: I.gif,
                    style: { backgroundImage: 'url('.concat(l || n ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function y(e) {
    let { guildFeature: l, guild: n } = e;
    if (null == l || null == n) return;
    let i = (0, N._p)(l),
        t = n.hasFeature(l);
    if (null == i) return;
    let s = (0, N.nW)(i);
    return t ? L.intl.formatToPlainString(L.t.u3L3TU, { levelName: s }) : L.intl.formatToPlainString(L.t['r/v25e'], { levelName: s });
}
function M(e) {
    let { guildFeature: l, guild: n } = e;
    return (0, i.jsx)('div', {
        className: I.boostingPill,
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
        className: a()(I.optionDescription, { [I.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, i.jsxs)('div', {
                className: I.optionIconAndLabel,
                children: [
                    l,
                    (0, i.jsxs)(r.Text, {
                        variant: 'text-sm/semibold',
                        className: I.optionLabelText,
                        children: [
                            o &&
                                (0, i.jsx)(r.DY3, {
                                    text: L.intl.string(L.t['5AFxuL']),
                                    children: (0, i.jsx)(r.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: I.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, i.jsx)(M, {
                    guild: s,
                    guildFeature: t
                })
        ]
    });
}
function Z(e) {
    let { label: l, uploadType: n, guild: t, maxFileSizeBytes: s, filters: a, handleOpenImageEditingModal: o, handleFileSizeError: c } = e,
        d = (0, A.GY)(n),
        u = (0, A.C6)(n, { isGIF: !1 }),
        p = y({
            guildFeature: u,
            guild: t
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.tEY, {
                within: !0,
                children: (0, i.jsxs)('div', {
                    className: I.option,
                    children: [
                        (0, i.jsx)(P, {
                            icon: (0, i.jsx)(r.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: l,
                            guildFeature: u,
                            guild: t,
                            shouldShowPremiumIcon: d
                        }),
                        (0, i.jsx)(x.ZP, {
                            'aria-label': l,
                            tabIndex: 0,
                            onChange: o,
                            maxFileSizeBytes: s,
                            onFileSizeError: c,
                            filters: a,
                            multiple: !1
                        })
                    ]
                })
            }),
            null != p && (0, i.jsx)(r.nn4, { children: p })
        ]
    });
}
function O(e) {
    let { uploadType: l, guild: n, handleOpenGIFPickerModal: s } = e,
        a = (0, o.e7)([j.Z], () => j.Z.isFocused()),
        { reducedMotion: c } = t.useContext(r.Sfi),
        d = (0, A.Kq)(l),
        u = (0, A.C6)(l, { isGIF: !0 }),
        x = y({
            guildFeature: u,
            guild: n
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.P3F, {
                className: I.option,
                onClick: s,
                'aria-label': L.intl.string(L.t['xsC+//']),
                children: [
                    (0, i.jsx)(T, { shouldAnimate: a && !c.enabled }),
                    (0, i.jsx)(P, {
                        icon: (0, i.jsx)(r.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: L.intl.string(L.t['xsC+//']),
                        guildFeature: u,
                        guild: n,
                        shouldShowPremiumIcon: d
                    })
                ]
            }),
            null != x && (0, i.jsx)(r.nn4, { children: x })
        ]
    });
}
function k(e) {
    let { transitionState: l, onClose: s, onComplete: a, uploadType: u, maxFileSizeBytes: x, showUpsellHeader: j, filters: N, analyticsLocation: A, analyticsLocations: S = [], imageSpecifications: T, modalTitle: y = L.intl.string(L.t.DToW4e), uploadOptionTitle: M = L.intl.string(L.t['MsUY/f']) } = e,
        P = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        k = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        U = (0, o.e7)([g.Z], () => g.Z.getGuild(k)),
        w = (0, r.vRw)(),
        D = u === b.pC.AVATAR || u === b.pC.BANNER,
        R = !v.ZP.canUseAnimatedAvatar(P) && u === b.pC.AVATAR,
        B = (0, p.M)(!D),
        { analyticsLocations: G } = (0, d.ZP)(S, c.Z.SELECT_IMAGE_MODAL),
        z = t.useCallback(
            function (e, l) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                s(), a(e, l, n);
            },
            [s, a]
        ),
        H = t.useCallback(
            (e, l) => {
                if (l.type === _.m.MP4) return z(e, l);
                (0, r.ZDy)(
                    async () => {
                        let { default: t } = await Promise.all([n.e('59732'), n.e('17011')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, i.jsx)(t, {
                                imgURI: e,
                                file: l,
                                onCrop: z,
                                uploadType: u,
                                showUpsellHeader: j,
                                analyticsPage: null == A ? void 0 : A.page,
                                ...n
                            });
                    },
                    { contextKey: w }
                );
            },
            [null == A ? void 0 : A.page, w, z, j, u]
        ),
        W = t.useCallback(() => {
            s(), (0, E.Z)(x);
        }, [x, s]),
        Y = t.useCallback(() => {
            (0, r.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (l) =>
                        (0, i.jsx)(e, {
                            uploadType: u,
                            onComplete: (e, l) => z(e, l, !0),
                            showUpsellHeader: j,
                            analyticsPage: null == A ? void 0 : A.page,
                            ...l
                        });
                },
                { contextKey: w }
            );
        }, [null == A ? void 0 : A.page, w, z, j, u]);
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
            transitionState: l,
            size: r.CgR.SMALL,
            children: [
                (0, i.jsxs)(r.xBx, {
                    className: I.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: y
                        }),
                        (0, i.jsx)(r.olH, {
                            onClick: s,
                            className: I.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)(r.hzk, {
                    className: I.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: I.imageSelectionSection,
                            children: [
                                (0, i.jsxs)('ul', {
                                    className: I.optionsList,
                                    'aria-label': L.intl.string(L.t.iBnqtb),
                                    children: [
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(Z, {
                                                label: M,
                                                uploadType: u,
                                                guild: U,
                                                handleOpenImageEditingModal: H,
                                                maxFileSizeBytes: x,
                                                filters: N,
                                                handleFileSizeError: W
                                            })
                                        }),
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(O, {
                                                uploadType: u,
                                                guild: U,
                                                handleOpenGIFPickerModal: Y
                                            })
                                        })
                                    ]
                                }),
                                null != T
                                    ? (0, i.jsx)(r.Text, {
                                          className: I.imageSpecifications,
                                          variant: 'text-sm/normal',
                                          color: 'text-muted',
                                          children: T
                                      })
                                    : null
                            ]
                        }),
                        j &&
                            B &&
                            (0, i.jsx)(m.Z, {
                                uploadType: u,
                                showUpsell: !0,
                                position: 'inline',
                                showShadow: !1,
                                className: I.premiumUpsell
                            })
                    ]
                })
            ]
        })
    );
}
