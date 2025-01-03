r.r(n),
    r.d(n, {
        default: function () {
            return V;
        },
        openCollectibleRewardModal: function () {
            return j;
        }
    });
var i = r(773603);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(119617),
    d = r(979554),
    f = r(442837),
    _ = r(481060),
    h = r(809206),
    p = r(607070),
    m = r(235400),
    g = r(204418),
    E = r(583434),
    v = r(530618),
    I = r(70097),
    T = r(454585),
    b = r(164946),
    y = r(369111),
    S = r(25990),
    A = r(594174),
    N = r(960048),
    C = r(272008),
    R = r(497505),
    O = r(918701),
    D = r(475595),
    L = r(566078),
    x = r(114732),
    w = r(46140),
    P = r(675654),
    M = r(388032),
    k = r(144143);
function U() {
    let e = S.Z.getAllPending(),
        n = (0, b.ED)(e);
    return (0, h.Mn)(n).finally(h.si);
}
function B(e) {
    let { product: n, isFetching: r } = (0, E.T)(e),
        {} = (0, y.Z)({}),
        i = o.useMemo(() => {
            if (null == n || r) return null;
            let e = n.items.find((e) => e.type === d.Z.AVATAR_DECORATION);
            return null == e ? null : e;
        }, [n, r]),
        a = () => (null == i ? (N.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, h.cV)(i), U()));
    return [i, a];
}
function G(e) {
    var n;
    let { transitionState: r, onClose: i, quest: a, location: l, reward: d, decoration: h, onUseNow: m, preview: g } = e,
        E = o.useRef(null),
        [I, T] = o.useState(null),
        b = o.useRef(new c.qA()),
        y = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
        S = (0, f.e7)([A.default], () => A.default.getCurrentUser()),
        N = o.useMemo(() => (0, D.fh)(a, D.eC.HERO), [a]),
        O = (null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
        [L, w] = o.useState(!0 === g || O ? 'claimed' : 'loading');
    o.useEffect(() => {
        !O &&
            !0 !== g &&
            (0, C.QB)(a.id, R.y$.CROSS_PLATFORM, l)
                .then(() => w('claimed'))
                .catch(() => w('error'));
    }, [a, l, O, g]);
    let M = () => {
            w('applying'), m().finally(i);
        },
        U = !0 === g && null === h && (null == d ? void 0 : d.skuId) !== '',
        B = null == h && !0 !== g,
        G = null == S || B || U || 'loading' === L,
        Z = !y && !O && 'claimed' === L;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(c.O_, {
                ref: T,
                className: k.confettiCanvas,
                environment: b.current
            }),
            (0, s.jsx)('div', {
                ref: E,
                children: (0, s.jsx)(_.ModalRoot, {
                    transitionState: r,
                    size: _.ModalSize.DYNAMIC,
                    className: u()(k.rootContainer, { [k.rootContainerLoading]: G }),
                    hideShadow: !0,
                    children:
                        'error' === L
                            ? (0, s.jsx)(x.Z, { onClose: i })
                            : G
                              ? (0, s.jsx)('div', {
                                    className: k.loadingIndicatorWrapper,
                                    children: (0, s.jsx)(_.Spinner, { type: _.Spinner.Type.SPINNING_CIRCLE })
                                })
                              : (0, s.jsx)(F, {
                                    quest: a,
                                    user: S,
                                    decoration: h,
                                    decorationName: d.messages.name,
                                    backgroundUrl: N.url,
                                    isSaving: 'applying' === L,
                                    onClose: i,
                                    onConfirm: M
                                })
                })
            }),
            Z &&
                (0, s.jsx)(v.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: I,
                    sprites: P.CA,
                    colors: P.Br
                })
        ]
    });
}
function Z(e) {
    let { quest: n } = e,
        r = o.useMemo(() => (0, D.fh)(n, D.eC.LOGO_TYPE, 'dark'), [n]),
        i = L.r.build(n.config).defaultRewardRedemptionInstructionsByPlatform[R.y$.CROSS_PLATFORM];
    return (0, s.jsxs)('div', {
        className: k.additionalRedemptionInstructions,
        children: [
            (0, s.jsx)('img', {
                src: r.url,
                alt: '',
                className: k.sponsorLogo
            }),
            (0, s.jsx)(_.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: T.Z.parse(i, !1, { allowLinks: !0 })
            })
        ]
    });
}
function F(e) {
    let { quest: n, user: r, decoration: i, decorationName: a, backgroundUrl: o, isSaving: l, onClose: u, onConfirm: c } = e,
        d = (0, O.Kr)(n.config),
        f = (0, D.fh)(n, D.eC.REWARD).url,
        h =
            null == d
                ? M.intl.formatToPlainString(M.t.l9uXLy, { decorationName: a })
                : M.intl.formatToPlainString(M.t.tTlItr, {
                      decorationName: a,
                      duration: d
                  });
    return (0, s.jsxs)('div', {
        className: k.claimedRootContainer,
        children: [
            (0, s.jsxs)('div', {
                className: k.headerContainer,
                children: [
                    (0, s.jsx)(I.Z, {
                        className: k.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: o
                    }),
                    (0, s.jsx)('div', {
                        className: k.headerForeground,
                        children: (0, s.jsx)(_.ModalCloseButton, {
                            className: k.close,
                            withCircleBackground: !0,
                            onClick: u
                        })
                    })
                ]
            }),
            (0, s.jsx)(_.ModalFooter, {
                separator: !1,
                children: (0, s.jsxs)('div', {
                    className: k.footerBody,
                    children: [
                        (0, s.jsx)('div', {
                            className: k.previewContainer,
                            children: (0, s.jsx)(g.Z, {
                                user: r,
                                guildId: null,
                                avatarDecorationOverride: i,
                                avatarSize: _.AvatarSizes.SIZE_152,
                                questPreviewRewardAssetUrl: f
                            })
                        }),
                        (0, s.jsx)(_.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'header-primary',
                            className: k.heading,
                            children: M.intl.string(M.t['0/Yz+f'])
                        }),
                        (0, s.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            className: k.text,
                            children: h
                        }),
                        (0, s.jsx)(_.Button, {
                            submitting: l,
                            onClick: c,
                            children: M.intl.string(M.t.MAS7uL)
                        }),
                        (0, O.zK)(n, w.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, s.jsx)(Z, { quest: n })
                    ]
                })
            })
        ]
    });
}
function V(e) {
    var n, r;
    let { quest: i, location: a, onClose: l, transitionState: u, preview: c } = e,
        d = o.useMemo(() => (0, O.xn)(i.config), [i]),
        [f, _] = B(null !== (r = null == d ? void 0 : d.skuId) && void 0 !== r ? r : null);
    return null == d
        ? null
        : (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null
          ? (0, s.jsx)(m.default, {
                transitionState: u,
                onCloseModal: U,
                onClose: l,
                analyticsLocations: [],
                initialSelectedDecoration: f
            })
          : (0, s.jsx)(G, {
                onClose: l,
                transitionState: u,
                quest: i,
                location: a,
                reward: d,
                decoration: f,
                onUseNow: _,
                preview: c
            });
}
function j(e, n, i) {
    (0, _.openModalLazy)(async () => {
        let { default: a } = await Promise.resolve().then(r.bind(r, 920916));
        return (r) =>
            (0, s.jsx)(a, {
                ...r,
                quest: e,
                location: n,
                preview: i
            });
    });
}
