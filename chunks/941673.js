"use strict";
n.d(t, { Z: () => V }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(313961),
    c = n(734925),
    d = n(765441),
    _ = n(937008),
    f = n(156312),
    h = n(871181),
    p = n(238017),
    g = n(285719),
    E = n(650588),
    A = n(383501),
    I = n(287809),
    T = n(67480),
    y = n(403362),
    S = n(580630),
    v = n(871123),
    C = n(832163),
    b = n(44724),
    N = n(980094),
    R = n(421161),
    O = n(204890),
    D = n(366523),
    L = n(652215),
    w = n(806931),
    x = n(788868),
    P = n(818348),
    M = n(985018),
    k = n(490669);
function U(e) {
    let t = (0, o.bG)([A.A], () => (A.A.isConnected() ? A.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? u.A.getParticipants(t) : [],
                i = [],
                a = new Set();
            for (let t of n)
                (!(0, w.Xw)(t) && !(0, w.Ay)(t)) ||
                    t.user.id === e ||
                    a.has(t.user.id) ||
                    (a.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, w.Ay)(e) && !(0, w.Ay)(t) ? -1 : (0, w.Ay)(t) && !(0, w.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function G(e, t, n) {
    let r = (0, d.A)(),
        a = U(e),
        l = (0, o.yK)([I.default], () => n?.map(I.default.getUser).filter(y.Vq) ?? [], [n]);
    return i.useMemo(
        () => s().uniqWith([...(null != t ? [t] : []), ...l, ...a, ...r], (e, t) => e.id === t.id),
        [t, l, a, r],
    );
}
function F(e) {
    let { handleClose: t, guild: n, sku: a } = e,
        s = i.useCallback(() => {
            (0, b.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = C.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(L.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, a.id)) ||
                ((0, l.s7G)(), (0, b.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: a.id, slug: a.slug }));
        }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: k.$O,
        children: (0, r.jsx)(l.QWc, {
            text: n.id === (0, v.zf)() ? M.intl.string(M.t.nyIcya) : M.intl.string(M.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let V = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: a,
            giftRecipient: s,
            emojiConfetti: u,
            soundEffect: d,
            setEmojiConfetti: A,
            setSoundEffect: y,
            giftingOrigin: C,
            additionalUserIds: b,
        } = (0, _.Pv)(),
        { selectedSkuId: L, application: w } = (0, f.P5)(),
        U = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        V = G(U?.id, s, b),
        B = (0, o.bG)([T.A], () => (null != L ? T.A.get(L) : null), [L]),
        j = (0, v.fq)(B),
        H = (0, v.xf)(B),
        Y = (0, R.j)(B, { shouldFetchIfMissing: !0 }),
        W = async (e, t) => {},
        K = () =>
            (0, r.jsx)(h.A, {
                onTextChange: (e) => a?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: k.iX,
                innerClassName: k.pt,
            }),
        $ = () =>
            null != s && (C === x.vQ.USER_PROFILE_WISHLIST || C === x.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(g.Z, { giftRecipient: s })
                : (0, r.jsx)(c.A, { selectedSkuId: L, validateSelectedGift: W, recipients: V }),
        z = (e) => {
            null != y && y(null == e ? void 0 : e);
        },
        q = () =>
            (0, r.jsxs)("div", {
                className: k.mT,
                children: [
                    null != j &&
                        (0, r.jsx)(D.A, {
                            containerClassName: k.T3,
                            cardImage: j,
                            cardBackgroundImage: H,
                            altText: B?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: k._T,
                        children: [
                            (0, r.jsx)(E.A, { sound: d, onSelect: z }),
                            (0, r.jsx)(p.A, { setEmojiConfetti: A, emojiConfetti: null == u ? void 0 : u }),
                        ],
                    }),
                ],
            }),
        X = () => {
            if (null == B) return null;
            let e = (0, S.$g)(B.price?.amount ?? 0, B.price?.currency ?? P.Yr.USD);
            return (0, r.jsxs)("div", {
                className: k.AN,
                children: [
                    (0, r.jsx)(l.zEo, { className: k.jr, children: M.intl.string(M.t.PpoJzt) }),
                    (0, r.jsxs)("div", {
                        className: k.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: k.Xb,
                                children:
                                    null != B &&
                                    null != j &&
                                    (0, r.jsx)(D.A, {
                                        containerClassName: k.Iy,
                                        cardImage: j,
                                        cardBackgroundImage: H,
                                        altText: B.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: k.vz,
                                children: [
                                    null != w && (0, r.jsx)(N.Q, { application: w }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: B.name }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, { variant: "text-md/semibold", children: e }),
                        ],
                    }),
                ],
            });
        },
        Z = () => {
            let e = B?.orbsReward;
            return (0, r.jsxs)("div", {
                className: k.Tc,
                children: [
                    $(),
                    K(),
                    X(),
                    null != e &&
                        e > 0 &&
                        (0, r.jsx)(O.J, { Icon: l.Cp8, text: M.intl.format(M.t["ZV+aS9"], { orbCount: e }) }),
                    null != Y && null != B && (0, r.jsx)(F, { handleClose: n, sku: B, guild: Y }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: k.Du, children: [q(), Z()] }),
        getLeftColumnComponent: q,
        getRightColumnComponent: Z,
        onStepChange: t,
        onBackClick: n,
        disabled: null == s || s.id === U?.id || i.length > x.Jo,
    };
};
