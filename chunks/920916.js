n.d(t, {
    default: () => Z,
    m: () => F
}),
    n(773603),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(119617),
    l = n(979554),
    u = n(442837),
    c = n(481060),
    d = n(809206),
    f = n(607070),
    _ = n(235400),
    p = n(204418),
    h = n(583434),
    m = n(530618),
    g = n(70097),
    E = n(454585),
    v = n(164946),
    y = n(369111),
    I = n(25990),
    T = n(594174),
    b = n(960048),
    S = n(272008),
    A = n(113434),
    N = n(497505),
    C = n(918701),
    R = n(475595),
    O = n(566078),
    D = n(114732),
    L = n(46140),
    x = n(675654),
    P = n(388032),
    w = n(332284);
function M() {
    let e = I.Z.getAllPending(),
        t = (0, v.ED)(e);
    return (0, d.Mn)(t).finally(d.si);
}
function k(e) {
    let { product: t, isFetching: n } = (0, h.T)(e),
        {} = (0, y.Z)({}),
        i = r.useMemo(() => {
            if (null == t || n) return null;
            let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
            return null == e ? null : e;
        }, [t, n]),
        a = () => (null == i ? (b.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, d.cV)(i), M()));
    return [i, a];
}
function U(e) {
    var t;
    let { transitionState: n, onClose: a, quest: l, location: d, reward: _, decoration: p, onUseNow: h, preview: g } = e,
        E = r.useRef(null),
        [v, y] = r.useState(null),
        I = r.useRef(new o.qA()),
        b = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        A = (0, u.e7)([T.default], () => T.default.getCurrentUser()),
        C = r.useMemo(() => (0, R.fh)(l, R.eC.HERO), [l]),
        O = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [L, P] = r.useState(!0 === g || O ? 'claimed' : 'loading');
    r.useEffect(() => {
        O ||
            !0 === g ||
            (0, S.QB)(l.id, N.y$.CROSS_PLATFORM, d)
                .then(() => P('claimed'))
                .catch(() => P('error'));
    }, [l, d, O, g]);
    let M = () => {
            P('applying'), h().finally(a);
        },
        k = !0 === g && null === p && (null == _ ? void 0 : _.skuId) !== '',
        U = null == p && !0 !== g,
        G = null == A || U || k || 'loading' === L,
        Z = !b && !O && 'claimed' === L;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.O_, {
                ref: y,
                className: w.confettiCanvas,
                environment: I.current
            }),
            (0, i.jsx)('div', {
                ref: E,
                children: (0, i.jsx)(c.Y0X, {
                    transitionState: n,
                    size: c.CgR.DYNAMIC,
                    className: s()(w.rootContainer, { [w.rootContainerLoading]: G }),
                    hideShadow: !0,
                    children:
                        'error' === L
                            ? (0, i.jsx)(D.Z, { onClose: a })
                            : G
                              ? (0, i.jsx)('div', {
                                    className: w.loadingIndicatorWrapper,
                                    children: (0, i.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE })
                                })
                              : (0, i.jsx)(B, {
                                    quest: l,
                                    user: A,
                                    decoration: p,
                                    backgroundUrl: C.url,
                                    isSaving: 'applying' === L,
                                    onClose: a,
                                    onConfirm: M
                                })
                })
            }),
            Z &&
                (0, i.jsx)(m.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: v,
                    sprites: x.CA,
                    colors: x.Br
                })
        ]
    });
}
function G(e) {
    let { quest: t } = e,
        n = r.useMemo(() => (0, R.fh)(t, R.eC.LOGO_TYPE, 'dark'), [t]),
        a = O.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[N.y$.CROSS_PLATFORM];
    return (0, i.jsxs)('div', {
        className: w.additionalRedemptionInstructions,
        children: [
            (0, i.jsx)('img', {
                src: n.url,
                alt: '',
                className: w.sponsorLogo
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: E.Z.parse(a, !1, { allowLinks: !0 })
            })
        ]
    });
}
function B(e) {
    let { quest: t, user: n, decoration: r, backgroundUrl: a, isSaving: s, onClose: o, onConfirm: l } = e,
        u = (0, R.fh)(t, R.eC.REWARD).url,
        d = (0, A.Qy)(t.config);
    return (0, i.jsxs)('div', {
        className: w.claimedRootContainer,
        children: [
            (0, i.jsxs)('div', {
                className: w.headerContainer,
                children: [
                    (0, i.jsx)(g.Z, {
                        className: w.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: a
                    }),
                    (0, i.jsx)('div', {
                        className: w.headerForeground,
                        children: (0, i.jsx)(c.olH, {
                            className: w.close,
                            withCircleBackground: !0,
                            onClick: o
                        })
                    })
                ]
            }),
            (0, i.jsx)(c.mzw, {
                separator: !1,
                children: (0, i.jsxs)('div', {
                    className: w.footerBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: w.previewContainer,
                            children: (0, i.jsx)(p.Z, {
                                user: n,
                                guildId: null,
                                avatarDecorationOverride: r,
                                avatarSize: c.EFr.SIZE_152,
                                questPreviewRewardAssetUrl: u
                            })
                        }),
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            className: w.heading,
                            children: P.intl.string(P.t['0/Yz+f'])
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            className: w.text,
                            children: d
                        }),
                        (0, i.jsx)(c.zxk, {
                            submitting: s,
                            onClick: l,
                            children: P.intl.string(P.t.MAS7uL)
                        }),
                        (0, C.zK)(t, L.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, i.jsx)(G, { quest: t })
                    ]
                })
            })
        ]
    });
}
function Z(e) {
    var t, n;
    let { quest: a, location: s, onClose: o, transitionState: l, preview: u } = e,
        c = r.useMemo(() => (0, C.xn)(a.config), [a]),
        [d, f] = k(null !== (n = null == c ? void 0 : c.skuId) && void 0 !== n ? n : null);
    return null == c
        ? null
        : (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null
          ? (0, i.jsx)(_.default, {
                transitionState: l,
                onCloseModal: M,
                onClose: o,
                analyticsLocations: [],
                initialSelectedDecoration: d
            })
          : (0, i.jsx)(U, {
                onClose: o,
                transitionState: l,
                quest: a,
                location: s,
                reward: c,
                decoration: d,
                onUseNow: f,
                preview: u
            });
}
function F(e, t, r) {
    (0, c.ZDy)(async () => {
        let { default: a } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, i.jsx)(a, {
                ...n,
                quest: e,
                location: t,
                preview: r
            });
    });
}
