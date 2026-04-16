"use strict";
n.d(t, { Z: () => F }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(262427),
    c = n(313961),
    d = n(94420),
    _ = n(734925),
    f = n(765441),
    p = n(937008),
    h = n(156312),
    m = n(871181),
    E = n(238017),
    g = n(285719),
    A = n(650588),
    I = n(993046),
    T = n(383501),
    S = n(287809),
    y = n(67480),
    v = n(403362),
    N = n(871123),
    C = n(832163),
    R = n(44724),
    O = n(980094),
    b = n(421161),
    D = n(366523),
    L = n(652215),
    w = n(806931),
    M = n(788868),
    P = n(985018),
    x = n(107610);
function k(e) {
    let t = (0, o.bG)([T.A], () => (T.A.isConnected() ? T.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? c.A.getParticipants(t) : [],
                i = [],
                s = new Set();
            for (let t of n)
                (!(0, w.Xw)(t) && !(0, w.Ay)(t)) ||
                    t.user.id === e ||
                    s.has(t.user.id) ||
                    (s.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, w.Ay)(e) && !(0, w.Ay)(t) ? -1 : (0, w.Ay)(t) && !(0, w.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function U(e, t, n) {
    let r = (0, f.A)(),
        s = k(e),
        l = (0, o.yK)([S.default], () => n?.map(S.default.getUser).filter(v.Vq) ?? [], [n]);
    return i.useMemo(
        () => a().uniqWith([...(null != t ? [t] : []), ...l, ...s, ...r], (e, t) => e.id === t.id),
        [t, l, s, r],
    );
}
function G(e) {
    let { handleClose: t, guild: n, sku: s } = e,
        a = i.useCallback(() => {
            (0, R.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = C.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(L.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, s.id)) ||
                ((0, l.s7G)(), (0, R.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: s.id, slug: s.slug }));
        }, [n.id, s.id, s.slug, t]);
    return (0, r.jsx)("div", {
        className: x.$O,
        children: (0, r.jsx)(l.QWc, {
            text: P.intl.string(P.t.ImioFL),
            onMouseDown: a,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let F = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: s,
            giftRecipient: a,
            emojiConfetti: c,
            soundEffect: f,
            setEmojiConfetti: T,
            setSoundEffect: v,
            giftingOrigin: C,
            additionalUserIds: R,
        } = (0, p.Pv)(),
        w = (0, d.t4)((e) => e.selectedSkuId),
        { application: k } = (0, h.P5)(),
        F = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        V = U(F?.id, a, R),
        B = (0, o.bG)([y.A], () => (null != w ? y.A.get(w) : null), [w]),
        { normalPrice: H, discountedPrice: j } = (0, I.ou)({ sku: B, priceSetAssignmentPurchaseType: L.lid.GIFT }),
        Y = (0, N.fq)(B),
        W = (0, N.xf)(B),
        K = (0, b.j)(B, { shouldFetchIfMissing: !0 }),
        $ = async (e, t) => {},
        z = () =>
            (0, r.jsx)(m.A, {
                onTextChange: (e) => s?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: x.iX,
                innerClassName: x.pt,
            }),
        q = () =>
            null != a && (C === M.vQ.USER_PROFILE_WISHLIST || C === M.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(g.Z, { giftRecipient: a })
                : (0, r.jsx)(_.A, { selectedSkuId: w, validateSelectedGift: $, recipients: V }),
        Z = (e) => {
            null != v && v(null == e ? void 0 : e);
        },
        X = () =>
            (0, r.jsxs)("div", {
                className: x.mT,
                children: [
                    null != Y &&
                        (0, r.jsx)(D.A, {
                            containerClassName: x.T3,
                            cardImage: Y,
                            cardBackgroundImage: W,
                            altText: B?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: x._T,
                        children: [
                            (0, r.jsx)(A.A, { sound: f, onSelect: Z }),
                            (0, r.jsx)(E.A, { setEmojiConfetti: T, emojiConfetti: null == c ? void 0 : c }),
                        ],
                    }),
                ],
            }),
        Q = () => {
            if (null == B) return null;
            let e = j ?? H;
            return (0, r.jsxs)("div", {
                className: x.AN,
                children: [
                    (0, r.jsx)(l.zEo, { className: x.jr, children: P.intl.string(P.t.PpoJzt) }),
                    (0, r.jsxs)("div", {
                        className: x.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: x.Xb,
                                children:
                                    null != B &&
                                    null != Y &&
                                    (0, r.jsx)(D.A, {
                                        containerClassName: x.Iy,
                                        cardImage: Y,
                                        cardBackgroundImage: W,
                                        altText: B.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: x.vz,
                                children: [
                                    null != k && (0, r.jsx)(O.Q, { application: k }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: B.name }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, { variant: "text-md/semibold", children: e }),
                        ],
                    }),
                ],
            });
        },
        J = () => {
            let e = B?.orbsReward;
            return (0, r.jsxs)("div", {
                className: x.Tc,
                children: [
                    q(),
                    z(),
                    Q(),
                    null != B &&
                        (0, N.Ri)(B) &&
                        (0, r.jsx)(l.wx6, { type: "info", children: P.intl.string(P.t.lORYb6) }),
                    null != e &&
                        e > 0 &&
                        (0, r.jsx)(u.J, { Icon: l.Cp8, text: P.intl.format(P.t["ZV+aS9"], { orbCount: e }) }),
                    null != K && null != B && (0, r.jsx)(G, { handleClose: n, sku: B, guild: K }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: x.Du, children: [X(), J()] }),
        getLeftColumnComponent: X,
        getRightColumnComponent: J,
        onStepChange: t,
        onBackClick: n,
        disabled: null == a || a.id === F?.id || i.length > M.Jo,
    };
};
