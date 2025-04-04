n.d(t, {
    default: () => X,
    m: () => J
}),
    n(773603),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(48026),
    l = n(979554),
    c = n(442837),
    u = n(481060),
    d = n(809206),
    f = n(230711),
    _ = n(607070),
    p = n(235400),
    h = n(204418),
    m = n(975298),
    g = n(583434),
    E = n(530618),
    b = n(70097),
    y = n(454585),
    v = n(781320),
    O = n(732389),
    I = n(164946),
    S = n(369111),
    T = n(25990),
    N = n(594174),
    A = n(960048),
    C = n(272008),
    R = n(113434),
    P = n(497505),
    w = n(918701),
    D = n(475595),
    L = n(566078),
    x = n(114732),
    M = n(46140),
    k = n(981631),
    j = n(675654),
    U = n(474936),
    G = n(388032),
    B = n(335626);
function F(e, t, n) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W() {
    let e = T.Z.getAllPending(),
        t = (0, I.ED)(e);
    return (0, d.Mn)(t).finally(d.si);
}
function Y() {
    f.Z.open(k.oAB.PREMIUM, null, {});
}
function K(e) {
    let { product: t, isFetching: n } = (0, g.T)(e),
        {} = (0, S.Z)({}),
        r = i.useMemo(() => {
            if (null == t || n) return null;
            let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
            return null == e ? null : e;
        }, [t, n]),
        o = () => (null == r ? (A.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, d.cV)(r), W()));
    return [r, o];
}
function z(e) {
    var t;
    let { transitionState: n, onClose: o, quest: l, location: d, reward: f, decoration: p, onUseNow: h, preview: m } = e,
        g = i.useRef(null),
        [b, y] = i.useState(null),
        v = i.useRef(new s.qA()),
        O = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
        I = (0, c.e7)([N.default], () => N.default.getCurrentUser()),
        S = i.useMemo(() => (0, D.fh)(l, D.eC.HERO), [l]),
        T = (null == (t = l.userStatus) ? void 0 : t.claimedAt) != null,
        [A, R] = i.useState(!0 === m || T ? 'claimed' : 'loading');
    i.useEffect(() => {
        T ||
            !0 === m ||
            (0, C.QB)(l.id, P.y$.CROSS_PLATFORM, d)
                .then(() => R('claimed'))
                .catch(() => R('error'));
    }, [l, d, T, m]);
    let w = () => {
            R('applying'), h().finally(o);
        },
        L = !0 === m && null === p && (null == f ? void 0 : f.skuId) !== '',
        M = null == p && !0 !== m,
        k = null == I || M || L || 'loading' === A,
        U = !O && !T && 'claimed' === A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.O_, {
                ref: y,
                className: B.confettiCanvas,
                environment: v.current
            }),
            (0, r.jsx)('div', {
                ref: g,
                children: (0, r.jsx)(u.Y0X, {
                    transitionState: n,
                    size: u.CgR.DYNAMIC,
                    className: a()(B.rootContainer, { [B.rootContainerLoading]: k }),
                    hideShadow: !0,
                    children:
                        'error' === A
                            ? (0, r.jsx)(x.Z, { onClose: o })
                            : k
                              ? (0, r.jsx)('div', {
                                    className: B.loadingIndicatorWrapper,
                                    children: (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE })
                                })
                              : (0, r.jsx)(Q, {
                                    quest: l,
                                    user: I,
                                    decoration: p,
                                    backgroundUrl: S.url,
                                    isSaving: 'applying' === A,
                                    onClose: o,
                                    onConfirm: w
                                })
                })
            }),
            U &&
                (0, r.jsx)(E.Z, {
                    confettiTarget: g.current,
                    confettiCanvas: b,
                    sprites: j.CA,
                    colors: j.Br
                })
        ]
    });
}
function q(e) {
    let { quest: t } = e,
        n = i.useMemo(() => (0, D.fh)(t, D.eC.LOGO_TYPE, 'dark'), [t]),
        o = L.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[P.y$.CROSS_PLATFORM];
    return (0, r.jsxs)('div', {
        className: B.additionalRedemptionInstructions,
        children: [
            (0, r.jsx)('img', {
                src: n.url,
                alt: '',
                className: B.sponsorLogo
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: y.Z.parse(o, !1, { allowLinks: !0 })
            })
        ]
    });
}
function Q(e) {
    let { quest: t, user: n, decoration: i, backgroundUrl: o, isSaving: a, onClose: s, onConfirm: l } = e,
        c = (0, D.fh)(t, D.eC.REWARD).url,
        d = (0, w.f$)(t.config),
        f = (0, v.r)({ location: 'ClaimedModalContent' }).enabled,
        { fractionalState: _ } = (0, m.Z)(),
        p = _ === U.a$.FP_ONLY,
        g = (0, R.Qy)(t.config),
        E = f && d && !p;
    return (0, r.jsxs)('div', {
        className: B.claimedRootContainer,
        children: [
            (0, r.jsxs)('div', {
                className: B.headerContainer,
                children: [
                    (0, r.jsx)(b.Z, {
                        className: B.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: o
                    }),
                    (0, r.jsx)('div', {
                        className: B.headerForeground,
                        children: (0, r.jsx)(u.olH, {
                            className: B.close,
                            withCircleBackground: !0,
                            onClick: s
                        })
                    })
                ]
            }),
            (0, r.jsx)(u.mzw, {
                separator: !1,
                children: (0, r.jsxs)('div', {
                    className: B.footerBody,
                    children: [
                        (0, r.jsx)('div', {
                            className: B.previewContainer,
                            children: (0, r.jsx)(h.Z, {
                                user: n,
                                guildId: null,
                                avatarDecorationOverride: i,
                                avatarSize: u.EFr.SIZE_152,
                                questPreviewRewardAssetUrl: c
                            })
                        }),
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            className: B.heading,
                            children: G.NW.string(G.t['0/Yz+f'])
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            className: B.text,
                            children: g
                        }),
                        (0, r.jsx)(u.zxk, {
                            submitting: a,
                            onClick: l,
                            children: G.NW.string(G.t.MAS7uL)
                        }),
                        (0, w.zK)(t, M.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(q, { quest: t }),
                        E &&
                            (0, r.jsx)(O.p, {
                                className: B.upsell,
                                upsellText: G.NW.format(G.t.VHXn7O, {
                                    onNitroClick: () => {
                                        Y(), s();
                                    }
                                }),
                                buttonAnalyticsObject: { section: k.jXE.PERMADECOS_MARKETING_UPSELL }
                            })
                    ]
                })
            })
        ]
    });
}
function X(e) {
    var t, n;
    let { quest: o, location: a, onClose: s, transitionState: l, preview: c } = e,
        u = i.useMemo(() => (0, w.xn)(o.config), [o]),
        [d, f] = K(null != (n = null == u ? void 0 : u.skuId) ? n : null);
    return null == u
        ? null
        : (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null
          ? (0, r.jsx)(p.default, {
                transitionState: l,
                onCloseModal: W,
                onClose: s,
                analyticsLocations: [],
                initialSelectedDecoration: d
            })
          : (0, r.jsx)(z, {
                onClose: s,
                transitionState: l,
                quest: o,
                location: a,
                reward: u,
                decoration: d,
                onUseNow: f,
                preview: c
            });
}
function J(e, t, i) {
    (0, u.ZDy)(async () => {
        let { default: o } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, r.jsx)(
                o,
                H(V({}, n), {
                    quest: e,
                    location: t,
                    preview: i
                })
            );
    });
}
