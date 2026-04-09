"use strict";
n.d(t, { Z: () => G }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(262427),
    c = n(313961),
    d = n(734925),
    _ = n(765441),
    f = n(937008),
    p = n(156312),
    h = n(871181),
    m = n(238017),
    E = n(285719),
    g = n(650588),
    A = n(993046),
    I = n(383501),
    T = n(287809),
    S = n(67480),
    y = n(403362),
    v = n(871123),
    N = n(832163),
    C = n(44724),
    R = n(980094),
    O = n(421161),
    b = n(366523),
    D = n(652215),
    L = n(806931),
    w = n(788868),
    M = n(985018),
    x = n(24999);
function P(e) {
    let t = (0, o.bG)([I.A], () => (I.A.isConnected() ? I.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? c.A.getParticipants(t) : [],
                i = [],
                s = new Set();
            for (let t of n)
                (!(0, L.Xw)(t) && !(0, L.Ay)(t)) ||
                    t.user.id === e ||
                    s.has(t.user.id) ||
                    (s.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, L.Ay)(e) && !(0, L.Ay)(t) ? -1 : (0, L.Ay)(t) && !(0, L.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function k(e, t, n) {
    let r = (0, _.A)(),
        s = P(e),
        l = (0, o.yK)([T.default], () => n?.map(T.default.getUser).filter(y.Vq) ?? [], [n]);
    return i.useMemo(
        () => a().uniqWith([...(null != t ? [t] : []), ...l, ...s, ...r], (e, t) => e.id === t.id),
        [t, l, s, r],
    );
}
function U(e) {
    let { handleClose: t, guild: n, sku: s } = e,
        a = i.useCallback(() => {
            (0, C.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = N.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(D.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, s.id)) ||
                ((0, l.s7G)(), (0, C.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: s.id, slug: s.slug }));
        }, [n.id, s.id, s.slug, t]);
    return (0, r.jsx)("div", {
        className: x.$O,
        children: (0, r.jsx)(l.QWc, {
            text: M.intl.string(M.t.ImioFL),
            onMouseDown: a,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let G = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: s,
            giftRecipient: a,
            emojiConfetti: c,
            soundEffect: _,
            setEmojiConfetti: I,
            setSoundEffect: y,
            giftingOrigin: N,
            additionalUserIds: C,
        } = (0, f.Pv)(),
        { selectedSkuId: L, application: P } = (0, p.P5)(),
        G = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        F = k(G?.id, a, C),
        V = (0, o.bG)([S.A], () => (null != L ? S.A.get(L) : null), [L]),
        { normalPrice: B, discountedPrice: H } = (0, A.ou)({ sku: V, priceSetAssignmentPurchaseType: D.lid.GIFT }),
        j = (0, v.fq)(V),
        Y = (0, v.xf)(V),
        W = (0, O.j)(V, { shouldFetchIfMissing: !0 }),
        K = async (e, t) => {},
        $ = () =>
            (0, r.jsx)(h.A, {
                onTextChange: (e) => s?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: x.iX,
                innerClassName: x.pt,
            }),
        z = () =>
            null != a && (N === w.vQ.USER_PROFILE_WISHLIST || N === w.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(E.Z, { giftRecipient: a })
                : (0, r.jsx)(d.A, { selectedSkuId: L, validateSelectedGift: K, recipients: F }),
        q = (e) => {
            null != y && y(null == e ? void 0 : e);
        },
        Z = () =>
            (0, r.jsxs)("div", {
                className: x.mT,
                children: [
                    null != j &&
                        (0, r.jsx)(b.A, {
                            containerClassName: x.T3,
                            cardImage: j,
                            cardBackgroundImage: Y,
                            altText: V?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: x._T,
                        children: [
                            (0, r.jsx)(g.A, { sound: _, onSelect: q }),
                            (0, r.jsx)(m.A, { setEmojiConfetti: I, emojiConfetti: null == c ? void 0 : c }),
                        ],
                    }),
                ],
            }),
        X = () => {
            if (null == V) return null;
            let e = H ?? B;
            return (0, r.jsxs)("div", {
                className: x.AN,
                children: [
                    (0, r.jsx)(l.zEo, { className: x.jr, children: M.intl.string(M.t.PpoJzt) }),
                    (0, r.jsxs)("div", {
                        className: x.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: x.Xb,
                                children:
                                    null != V &&
                                    null != j &&
                                    (0, r.jsx)(b.A, {
                                        containerClassName: x.Iy,
                                        cardImage: j,
                                        cardBackgroundImage: Y,
                                        altText: V.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: x.vz,
                                children: [
                                    null != P && (0, r.jsx)(R.Q, { application: P }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: V.name }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, { variant: "text-md/semibold", children: e }),
                        ],
                    }),
                ],
            });
        },
        Q = () => {
            let e = V?.orbsReward;
            return (0, r.jsxs)("div", {
                className: x.Tc,
                children: [
                    z(),
                    $(),
                    X(),
                    null != V &&
                        (0, v.Ri)(V) &&
                        (0, r.jsx)(l.wx6, { type: "info", children: M.intl.string(M.t.lORYb6) }),
                    null != e &&
                        e > 0 &&
                        (0, r.jsx)(u.J, { Icon: l.Cp8, text: M.intl.format(M.t["ZV+aS9"], { orbCount: e }) }),
                    null != W && null != V && (0, r.jsx)(U, { handleClose: n, sku: V, guild: W }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: x.Du, children: [Z(), Q()] }),
        getLeftColumnComponent: Z,
        getRightColumnComponent: Q,
        onStepChange: t,
        onBackClick: n,
        disabled: null == a || a.id === G?.id || i.length > w.Jo,
    };
};
