r.r(n),
    r.d(n, {
        default: function () {
            return j;
        },
        openCollectibleRewardModal: function () {
            return H;
        }
    });
var i = r(773603);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(119617),
    d = r(979554),
    f = r(442837),
    p = r(481060),
    h = r(809206),
    _ = r(607070),
    m = r(235400),
    g = r(204418),
    E = r(583434),
    v = r(530618),
    y = r(70097),
    b = r(454585),
    I = r(164946),
    T = r(369111),
    S = r(25990),
    A = r(594174),
    C = r(960048),
    N = r(272008),
    R = r(113434),
    O = r(497505),
    D = r(918701),
    L = r(475595),
    x = r(566078),
    w = r(114732),
    P = r(46140),
    M = r(675654),
    k = r(388032),
    U = r(144143);
function B() {
    let e = S.Z.getAllPending(),
        n = (0, I.ED)(e);
    return (0, h.Mn)(n).finally(h.si);
}
function G(e) {
    let { product: n, isFetching: r } = (0, E.T)(e),
        {} = (0, T.Z)({}),
        i = s.useMemo(() => {
            if (null == n || r) return null;
            let e = n.items.find((e) => e.type === d.Z.AVATAR_DECORATION);
            return null == e ? null : e;
        }, [n, r]),
        a = () => (null == i ? (C.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, h.cV)(i), B()));
    return [i, a];
}
function Z(e) {
    var n;
    let { transitionState: r, onClose: i, quest: a, location: l, reward: d, decoration: h, onUseNow: m, preview: g } = e,
        E = s.useRef(null),
        [y, b] = s.useState(null),
        I = s.useRef(new c.qA()),
        T = (0, f.e7)([_.Z], () => _.Z.useReducedMotion),
        S = (0, f.e7)([A.default], () => A.default.getCurrentUser()),
        C = s.useMemo(() => (0, L.fh)(a, L.eC.HERO), [a]),
        R = (null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        [D, x] = s.useState(!0 === g || R ? 'claimed' : 'loading');
    s.useEffect(() => {
        !R &&
            !0 !== g &&
            (0, N.QB)(a.id, O.y$.CROSS_PLATFORM, l)
                .then(() => x('claimed'))
                .catch(() => x('error'));
    }, [a, l, R, g]);
    let P = () => {
            x('applying'), m().finally(i);
        },
        k = !0 === g && null === h && (null == d ? void 0 : d.skuId) !== '',
        B = null == h && !0 !== g,
        G = null == S || B || k || 'loading' === D,
        Z = !T && !R && 'claimed' === D;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(c.O_, {
                ref: b,
                className: U.confettiCanvas,
                environment: I.current
            }),
            (0, o.jsx)('div', {
                ref: E,
                children: (0, o.jsx)(p.ModalRoot, {
                    transitionState: r,
                    size: p.ModalSize.DYNAMIC,
                    className: u()(U.rootContainer, { [U.rootContainerLoading]: G }),
                    hideShadow: !0,
                    children:
                        'error' === D
                            ? (0, o.jsx)(w.Z, { onClose: i })
                            : G
                              ? (0, o.jsx)('div', {
                                    className: U.loadingIndicatorWrapper,
                                    children: (0, o.jsx)(p.Spinner, { type: p.Spinner.Type.SPINNING_CIRCLE })
                                })
                              : (0, o.jsx)(V, {
                                    quest: a,
                                    user: S,
                                    decoration: h,
                                    backgroundUrl: C.url,
                                    isSaving: 'applying' === D,
                                    onClose: i,
                                    onConfirm: P
                                })
                })
            }),
            Z &&
                (0, o.jsx)(v.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: y,
                    sprites: M.CA,
                    colors: M.Br
                })
        ]
    });
}
function F(e) {
    let { quest: n } = e,
        r = s.useMemo(() => (0, L.fh)(n, L.eC.LOGO_TYPE, 'dark'), [n]),
        i = x.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[O.y$.CROSS_PLATFORM];
    return (0, o.jsxs)('div', {
        className: U.additionalRedemptionInstructions,
        children: [
            (0, o.jsx)('img', {
                src: r.url,
                alt: '',
                className: U.sponsorLogo
            }),
            (0, o.jsx)(p.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: b.Z.parse(i, !1, { allowLinks: !0 })
            })
        ]
    });
}
function V(e) {
    let { quest: n, user: r, decoration: i, backgroundUrl: a, isSaving: s, onClose: l, onConfirm: u } = e,
        c = (0, L.fh)(n, L.eC.REWARD).url,
        d = (0, R.Qy)(n.config);
    return (0, o.jsxs)('div', {
        className: U.claimedRootContainer,
        children: [
            (0, o.jsxs)('div', {
                className: U.headerContainer,
                children: [
                    (0, o.jsx)(y.Z, {
                        className: U.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: a
                    }),
                    (0, o.jsx)('div', {
                        className: U.headerForeground,
                        children: (0, o.jsx)(p.ModalCloseButton, {
                            className: U.close,
                            withCircleBackground: !0,
                            onClick: l
                        })
                    })
                ]
            }),
            (0, o.jsx)(p.ModalFooter, {
                separator: !1,
                children: (0, o.jsxs)('div', {
                    className: U.footerBody,
                    children: [
                        (0, o.jsx)('div', {
                            className: U.previewContainer,
                            children: (0, o.jsx)(g.Z, {
                                user: r,
                                guildId: null,
                                avatarDecorationOverride: i,
                                avatarSize: p.AvatarSizes.SIZE_152,
                                questPreviewRewardAssetUrl: c
                            })
                        }),
                        (0, o.jsx)(p.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            className: U.heading,
                            children: k.intl.string(k.t['0/Yz+f'])
                        }),
                        (0, o.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            className: U.text,
                            children: d
                        }),
                        (0, o.jsx)(p.Button, {
                            submitting: s,
                            onClick: u,
                            children: k.intl.string(k.t.MAS7uL)
                        }),
                        (0, D.zK)(n, P.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, o.jsx)(F, { quest: n })
                    ]
                })
            })
        ]
    });
}
function j(e) {
    var n, r;
    let { quest: i, location: a, onClose: l, transitionState: u, preview: c } = e,
        d = s.useMemo(() => (0, D.xn)(i.config), [i]),
        [f, p] = G(null !== (r = null == d ? void 0 : d.skuId) && void 0 !== r ? r : null);
    return null == d
        ? null
        : (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null
          ? (0, o.jsx)(m.default, {
                transitionState: u,
                onCloseModal: B,
                onClose: l,
                analyticsLocations: [],
                initialSelectedDecoration: f
            })
          : (0, o.jsx)(Z, {
                onClose: l,
                transitionState: u,
                quest: i,
                location: a,
                reward: d,
                decoration: f,
                onUseNow: p,
                preview: c
            });
}
function H(e, n, i) {
    (0, p.openModalLazy)(async () => {
        let { default: a } = await Promise.resolve().then(r.bind(r, 920916));
        return (r) =>
            (0, o.jsx)(a, {
                ...r,
                quest: e,
                location: n,
                preview: i
            });
    });
}
