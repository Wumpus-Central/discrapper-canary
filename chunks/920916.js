n.d(t, {
    default: () => X,
    m: () => Q
}),
    n(457542),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(505266),
    l = n(979554),
    c = n(442837),
    u = n(481060),
    d = n(809206),
    _ = n(230711),
    f = n(607070),
    p = n(235400),
    h = n(204418),
    m = n(975298),
    g = n(583434),
    E = n(530618),
    b = n(454585),
    y = n(732389),
    O = n(164946),
    v = n(369111),
    I = n(25990),
    T = n(594174),
    S = n(960048),
    A = n(272008),
    N = n(113434),
    C = n(497505),
    R = n(918701),
    P = n(475595),
    w = n(566078),
    D = n(968435),
    L = n(114732),
    x = n(46140),
    M = n(981631),
    k = n(675654),
    j = n(474936),
    U = n(388032),
    G = n(335626);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H() {
    let e = I.Z.getAllPending(),
        t = (0, O.ED)(e);
    return (0, d.Mn)(t).finally(d.si);
}
function Y() {
    _.Z.open(M.oAB.PREMIUM, null, {});
}
function W(e) {
    let { product: t, isFetching: n } = (0, g.T)(e),
        {} = (0, v.Z)({}),
        r = i.useMemo(() => {
            if (null == t || n) return null;
            let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
            return null == e ? null : e;
        }, [t, n]),
        a = () => (null == r ? (S.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, d.cV)(r), H()));
    return [r, a];
}
function K(e) {
    var t;
    let { transitionState: n, onClose: a, quest: l, location: d, reward: _, decoration: p, onUseNow: h, preview: m } = e,
        g = i.useRef(null),
        [b, y] = i.useState(null),
        O = i.useRef(new s.qA()),
        v = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        I = (0, c.e7)([T.default], () => T.default.getCurrentUser()),
        S = (null == (t = l.userStatus) ? void 0 : t.claimedAt) != null,
        [N, R] = i.useState(!0 === m || S ? 'claimed' : 'loading');
    i.useEffect(() => {
        S ||
            !0 === m ||
            (0, A.QB)(l.id, C.y$.CROSS_PLATFORM, d)
                .then(() => R('claimed'))
                .catch(() => R('error'));
    }, [l, d, S, m]);
    let P = () => {
            R('applying'), h().finally(a);
        },
        w = !0 === m && null === p && (null == _ ? void 0 : _.skuId) !== '',
        D = null == p && !0 !== m,
        x = null == I || D || w || 'loading' === N,
        M = !v && !S && 'claimed' === N;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: y,
                className: G.confettiCanvas,
                environment: O.current
            }),
            (0, r.jsx)('div', {
                ref: g,
                children: (0, r.jsx)(u.Y0X, {
                    transitionState: n,
                    size: u.CgR.DYNAMIC,
                    className: o()(G.rootContainer, { [G.rootContainerLoading]: x }),
                    hideShadow: !0,
                    parentComponent: 'QuestsRewardCollectibleModal',
                    children:
                        'error' === N
                            ? (0, r.jsx)(L.Z, { onClose: a })
                            : x
                              ? (0, r.jsx)('div', {
                                    className: G.loadingIndicatorWrapper,
                                    children: (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE })
                                })
                              : (0, r.jsx)(q, {
                                    quest: l,
                                    user: I,
                                    decoration: p,
                                    isSaving: 'applying' === N,
                                    onClose: a,
                                    onConfirm: P
                                })
                })
            }),
            M &&
                (0, r.jsx)(E.Z, {
                    confettiTarget: g.current,
                    confettiCanvas: b,
                    sprites: k.CA,
                    colors: k.Br
                })
        ]
    });
}
function z(e) {
    let { quest: t } = e,
        n = i.useMemo(() => (0, P.fh)(t, P.eC.LOGO_TYPE, 'dark'), [t]),
        a = w.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[C.y$.CROSS_PLATFORM];
    return (0, r.jsxs)('div', {
        className: G.additionalRedemptionInstructions,
        children: [
            (0, r.jsx)('img', {
                src: n.url,
                alt: '',
                className: G.sponsorLogo
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: b.Z.parse(a, !1, { allowLinks: !0 })
            })
        ]
    });
}
function q(e) {
    let { quest: t, user: n, decoration: i, isSaving: a, onClose: o, onConfirm: s } = e,
        l = (0, P.fh)(t, P.eC.REWARD).url,
        c = (0, R.f$)(t.config),
        { fractionalState: d } = (0, m.Z)(),
        _ = d === j.a$.FP_ONLY,
        f = (0, N.Qy)(t.config),
        p = c && !_;
    return (0, r.jsxs)('div', {
        className: G.claimedRootContainer,
        children: [
            (0, r.jsxs)('div', {
                className: G.headerContainer,
                children: [
                    (0, r.jsx)(D.Z, {
                        quest: t,
                        dimensions: {
                            width: 528,
                            height: 148
                        },
                        className: G.headerBackground
                    }),
                    (0, r.jsx)('div', {
                        className: G.headerForeground,
                        children: (0, r.jsx)(u.olH, {
                            className: G.close,
                            withCircleBackground: !0,
                            onClick: o
                        })
                    })
                ]
            }),
            (0, r.jsx)(u.mzw, {
                separator: !1,
                children: (0, r.jsxs)('div', {
                    className: G.footerBody,
                    children: [
                        (0, r.jsx)('div', {
                            className: G.previewContainer,
                            children: (0, r.jsx)(h.Z, {
                                user: n,
                                guildId: null,
                                avatarDecorationOverride: i,
                                avatarSize: u.EFr.SIZE_152,
                                questPreviewRewardAssetUrl: l
                            })
                        }),
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            className: G.heading,
                            children: U.intl.string(U.t['0/Yz+f'])
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            className: G.text,
                            children: f
                        }),
                        (0, r.jsx)(u.zxk, {
                            submitting: a,
                            onClick: s,
                            children: U.intl.string(U.t.MAS7uL)
                        }),
                        (0, R.zK)(t, x.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(z, { quest: t }),
                        p &&
                            (0, r.jsx)(y.p, {
                                className: G.upsell,
                                upsellText: U.intl.format(U.t.VHXn7O, {
                                    onNitroClick: () => {
                                        Y(), o();
                                    }
                                }),
                                buttonAnalyticsObject: { section: M.jXE.PERMADECOS_MARKETING_UPSELL }
                            })
                    ]
                })
            })
        ]
    });
}
function X(e) {
    var t, n;
    let { quest: a, location: o, onClose: s, transitionState: l, preview: c } = e,
        u = i.useMemo(() => (0, R.xn)(a.config), [a]),
        [d, _] = W(null != (n = null == u ? void 0 : u.skuId) ? n : null);
    return null == u
        ? null
        : (null == (t = a.userStatus) ? void 0 : t.claimedAt) != null
          ? (0, r.jsx)(p.default, {
                transitionState: l,
                onCloseModal: H,
                onClose: s,
                analyticsLocations: [],
                initialSelectedDecoration: d
            })
          : (0, r.jsx)(K, {
                onClose: s,
                transitionState: l,
                quest: a,
                location: o,
                reward: u,
                decoration: d,
                onUseNow: _,
                preview: c
            });
}
function Q(e, t, i) {
    (0, u.ZDy)(async () => {
        let { default: a } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, r.jsx)(
                a,
                Z(V({}, n), {
                    quest: e,
                    location: t,
                    preview: i
                })
            );
    });
}
