n.d(t, {
    ZR: () => W,
    gj: () => F,
}),
    n(896048),
    n(321073),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(313961),
    u = n(734925),
    d = n(765441),
    f = n(235986),
    p = n(937008),
    _ = n(156312),
    h = n(166532),
    m = n(482132),
    g = n(871181),
    E = n(238017),
    b = n(683433),
    y = n(285719),
    O = n(650588),
    A = n(383501),
    v = n(287809),
    S = n(67480),
    I = n(403362),
    T = n(580630),
    C = n(871123),
    N = n(832163),
    R = n(44724),
    w = n(980094),
    P = n(421161),
    D = n(366523),
    x = n(652215),
    L = n(806931),
    j = n(788868),
    M = n(818348),
    k = n(985018),
    U = n(490669);

function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
let F = {
    key: h.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(K, V({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => k.intl.string(k.t["W685+b"]),
    },
};

function B(e) {
    let t = (0, o.bG)([A.A], () => (A.A.isConnected() ? A.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? c.A.getParticipants(t) : [],
                i = [],
                a = new Set();
            for (let t of n)
                (!(0, L.Xw)(t) && !(0, L.Ay)(t)) ||
                    t.user.id === e ||
                    a.has(t.user.id) ||
                    (a.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, L.Ay)(e) && !(0, L.Ay)(t) ? -1 : (0, L.Ay)(t) && !(0, L.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}

function H(e, t, n) {
    let r = (0, d.A)(),
        a = B(e),
        l = (0, o.yK)([v.default], () => {
            var e;
            return null != (e = null == n ? void 0 : n.map(v.default.getUser).filter(I.Vq)) ? e : [];
        }, [n]);
    return i.useMemo(
        () => s().uniqWith([...(null != t ? [t] : []), ...l, ...a, ...r], (e, t) => e.id === t.id),
        [t, l, a, r],
    );
}

function Y(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: a = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, _.P5)(),
        c = o ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Button, {
                onClick: () => t(c),
                disabled: a,
                loading: s,
                text: k.intl.string(k.t.XiOHRX),
            }),
            i
                ? (0, r.jsx)(b.A, {
                      onClick: n,
                  })
                : null,
        ],
    });
}
let W = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: a,
            giftRecipient: s,
            emojiConfetti: c,
            soundEffect: d,
            setEmojiConfetti: f,
            setSoundEffect: h,
            giftingOrigin: m,
            additionalUserIds: b,
        } = (0, p.Pv)(),
        { selectedSkuId: A, application: I } = (0, _.P5)(),
        N = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        R = H(null == N ? void 0 : N.id, s, b),
        x = (0, o.bG)([S.A], () => (null != A ? S.A.get(A) : null), [A]),
        L = (0, C.fq)(x),
        G = (0, C.xf)(x),
        V = (0, P.j)(x, {
            shouldFetchIfMissing: !0,
        }),
        F = async (e, t) => {},
        B = () =>
            (0, r.jsx)(g.A, {
                onTextChange: (e) => (null == a ? void 0 : a(e)),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: U.iX,
                innerClassName: U.pt,
            }),
        Y = () =>
            null != s && (m === j.vQ.USER_PROFILE_WISHLIST || m === j.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(y.Z, {
                      giftRecipient: s,
                  })
                : (0, r.jsx)(u.A, {
                      selectedSkuId: A,
                      validateSelectedGift: F,
                      recipients: R,
                  }),
        W = (e) => {
            null != h && h(null == e ? void 0 : e);
        },
        K = () => {
            var e;
            return (0, r.jsxs)("div", {
                className: U.mT,
                children: [
                    null != L &&
                        (0, r.jsx)(D.A, {
                            containerClassName: U.T3,
                            cardImage: L,
                            cardBackgroundImage: G,
                            altText: null != (e = null == x ? void 0 : x.name) ? e : "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: U._T,
                        children: [
                            (0, r.jsx)(O.A, {
                                sound: d,
                                onSelect: W,
                            }),
                            (0, r.jsx)(E.A, {
                                setEmojiConfetti: f,
                                emojiConfetti: null == c ? void 0 : c,
                            }),
                        ],
                    }),
                ],
            });
        },
        q = () => {
            var e, t, n, i;
            if (null == x) return null;
            let a = (0, T.$g)(
                null != (e = null == (n = x.price) ? void 0 : n.amount) ? e : 0,
                null != (t = null == (i = x.price) ? void 0 : i.currency) ? t : M.Yr.USD,
            );
            return (0, r.jsxs)("div", {
                className: U.AN,
                children: [
                    (0, r.jsx)(l.zEo, {
                        className: U.jr,
                        children: k.intl.string(k.t.PpoJzt),
                    }),
                    (0, r.jsxs)("div", {
                        className: U.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: U.Xb,
                                children:
                                    null != x &&
                                    null != L &&
                                    (0, r.jsx)(D.A, {
                                        containerClassName: U.Iy,
                                        cardImage: L,
                                        cardBackgroundImage: G,
                                        altText: x.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: U.vz,
                                children: [
                                    null != I &&
                                        (0, r.jsx)(w.Q, {
                                            application: I,
                                        }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        children: x.name,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                children: a,
                            }),
                        ],
                    }),
                ],
            });
        },
        X = () =>
            (0, r.jsxs)("div", {
                className: U.Tc,
                children: [
                    Y(),
                    B(),
                    q(),
                    null != V &&
                        null != x &&
                        (0, r.jsx)(z, {
                            handleClose: n,
                            sku: x,
                            guild: V,
                        }),
                ],
            });
    return {
        renderStepBody: () =>
            (0, r.jsxs)("div", {
                className: U.Du,
                children: [K(), X()],
            }),
        getLeftColumnComponent: K,
        getRightColumnComponent: X,
        onStepChange: t,
        onBackClick: n,
        disabled: null == s || s.id === (null == N ? void 0 : N.id) || i.length > j.Jo,
    };
};

function K(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderStepBody: i,
            onStepChange: a,
            onBackClick: s,
            disabled: o,
        } = W({
            handleStepChange: t,
            handleClose: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.dZ, {
                children: i(),
            }),
            (0, r.jsx)(m.UX, {
                children: (0, r.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    justify: f.A.Justify.BETWEEN,
                    align: f.A.Align.CENTER,
                    className: U.qr,
                    children: (0, r.jsx)(Y, {
                        onStepChange: a,
                        onBackClick: s,
                        disabled: o,
                    }),
                }),
            }),
        ],
    });
}

function z(e) {
    let { handleClose: t, guild: n, sku: a } = e,
        s = i.useCallback(() => {
            (0, R.X)({
                guildId: n.id,
            });
        }, [n.id]),
        o = i.useCallback(() => {
            var e;
            t();
            let r = null == (e = N.A.getStorefrontState(n.id)) ? void 0 : e.activePage;
            window.location.pathname.includes(x.BVt.CHANNELS_GAME_SHOP(n.id, null != r ? r : 0, a.id)) ||
                ((0, l.s7G)(),
                (0, R.default)({
                    guildId: n.id,
                    pageIndex: null != r ? r : 0,
                    skuId: a.id,
                    slug: a.slug,
                }));
        }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: U.$O,
        children: (0, r.jsx)(l.QWc, {
            text: n.id === (0, C.zf)() ? k.intl.string(k.t.nyIcya) : k.intl.string(k.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
