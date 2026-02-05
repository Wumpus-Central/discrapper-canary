"use strict";
n.d(t, { ZR: () => H, gj: () => V }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(313961),
    c = n(734925),
    d = n(765441),
    _ = n(235986),
    f = n(937008),
    p = n(156312),
    h = n(166532),
    m = n(482132),
    g = n(871181),
    E = n(238017),
    A = n(683433),
    I = n(285719),
    T = n(650588),
    y = n(383501),
    S = n(287809),
    v = n(67480),
    C = n(403362),
    b = n(580630),
    N = n(871123),
    R = n(832163),
    O = n(44724),
    D = n(980094),
    L = n(421161),
    w = n(366523),
    x = n(652215),
    P = n(806931),
    M = n(788868),
    k = n(818348),
    U = n(985018),
    G = n(490669);
let V = {
    key: h.pn.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, r.jsx)(Y, { ...e }),
    options: { isLargeModal: !0, useBreadcrumbLabel: () => U.intl.string(U.t["W685+b"]) },
};
function F(e) {
    let t = (0, o.bG)([y.A], () => (y.A.isConnected() ? y.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? u.A.getParticipants(t) : [],
                i = [],
                a = new Set();
            for (let t of n)
                (!(0, P.Xw)(t) && !(0, P.Ay)(t)) ||
                    t.user.id === e ||
                    a.has(t.user.id) ||
                    (a.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, P.Ay)(e) && !(0, P.Ay)(t) ? -1 : (0, P.Ay)(t) && !(0, P.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function B(e, t, n) {
    let r = (0, d.A)(),
        a = F(e),
        l = (0, o.yK)([S.default], () => n?.map(S.default.getUser).filter(C.Vq) ?? [], [n]);
    return i.useMemo(
        () => s().uniqWith([...(null != t ? [t] : []), ...l, ...a, ...r], (e, t) => e.id === t.id),
        [t, l, a, r],
    );
}
function j(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: i = !1, disabled: a = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, p.P5)(),
        u = o ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Button, { onClick: () => t(u), disabled: a, loading: s, text: U.intl.string(U.t.XiOHRX) }),
            i ? (0, r.jsx)(A.A, { onClick: n }) : null,
        ],
    });
}
let H = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: a,
            giftRecipient: s,
            emojiConfetti: u,
            soundEffect: d,
            setEmojiConfetti: _,
            setSoundEffect: h,
            giftingOrigin: m,
            additionalUserIds: A,
        } = (0, f.Pv)(),
        { selectedSkuId: y, application: C } = (0, p.P5)(),
        R = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        O = B(R?.id, s, A),
        x = (0, o.bG)([v.A], () => (null != y ? v.A.get(y) : null), [y]),
        P = (0, N.fq)(x),
        V = (0, N.xf)(x),
        F = (0, L.j)(x, { shouldFetchIfMissing: !0 }),
        j = async (e, t) => {},
        H = () =>
            (0, r.jsx)(g.A, {
                onTextChange: (e) => a?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: G.iX,
                innerClassName: G.pt,
            }),
        Y = () =>
            null != s && (m === M.vQ.USER_PROFILE_WISHLIST || m === M.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(I.Z, { giftRecipient: s })
                : (0, r.jsx)(c.A, { selectedSkuId: y, validateSelectedGift: j, recipients: O }),
        K = (e) => {
            null != h && h(null == e ? void 0 : e);
        },
        z = () =>
            (0, r.jsxs)("div", {
                className: G.mT,
                children: [
                    null != P &&
                        (0, r.jsx)(w.A, {
                            containerClassName: G.T3,
                            cardImage: P,
                            cardBackgroundImage: V,
                            altText: x?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: G._T,
                        children: [
                            (0, r.jsx)(T.A, { sound: d, onSelect: K }),
                            (0, r.jsx)(E.A, { setEmojiConfetti: _, emojiConfetti: null == u ? void 0 : u }),
                        ],
                    }),
                ],
            }),
        $ = () => {
            if (null == x) return null;
            let e = (0, b.$g)(x.price?.amount ?? 0, x.price?.currency ?? k.Yr.USD);
            return (0, r.jsxs)("div", {
                className: G.AN,
                children: [
                    (0, r.jsx)(l.zEo, { className: G.jr, children: U.intl.string(U.t.PpoJzt) }),
                    (0, r.jsxs)("div", {
                        className: G.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: G.Xb,
                                children:
                                    null != x &&
                                    null != P &&
                                    (0, r.jsx)(w.A, {
                                        containerClassName: G.Iy,
                                        cardImage: P,
                                        cardBackgroundImage: V,
                                        altText: x.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: G.vz,
                                children: [
                                    null != C && (0, r.jsx)(D.Q, { application: C }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: x.name }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, { variant: "text-md/semibold", children: e }),
                        ],
                    }),
                ],
            });
        },
        q = () =>
            (0, r.jsxs)("div", {
                className: G.Tc,
                children: [
                    Y(),
                    H(),
                    $(),
                    null != F && null != x && (0, r.jsx)(W, { handleClose: n, sku: x, guild: F }),
                ],
            });
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: G.Du, children: [z(), q()] }),
        getLeftColumnComponent: z,
        getRightColumnComponent: q,
        onStepChange: t,
        onBackClick: n,
        disabled: null == s || s.id === R?.id || i.length > M.Jo,
    };
};
function Y(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            renderStepBody: i,
            onStepChange: a,
            onBackClick: s,
            disabled: o,
        } = H({ handleStepChange: t, handleClose: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.dZ, { children: i() }),
            (0, r.jsx)(m.UX, {
                children: (0, r.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    justify: _.A.Justify.BETWEEN,
                    align: _.A.Align.CENTER,
                    className: G.qr,
                    children: (0, r.jsx)(j, { onStepChange: a, onBackClick: s, disabled: o }),
                }),
            }),
        ],
    });
}
function W(e) {
    let { handleClose: t, guild: n, sku: a } = e,
        s = i.useCallback(() => {
            (0, O.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = R.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(x.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, a.id)) ||
                ((0, l.s7G)(), (0, O.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: a.id, slug: a.slug }));
        }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: G.$O,
        children: (0, r.jsx)(l.QWc, {
            text: n.id === (0, N.zf)() ? U.intl.string(U.t.nyIcya) : U.intl.string(U.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
