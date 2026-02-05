"use strict";
n.d(t, { Z: () => G }), n(321073);
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
    p = n(871181),
    h = n(238017),
    m = n(285719),
    g = n(650588),
    E = n(383501),
    A = n(287809),
    I = n(67480),
    T = n(403362),
    y = n(580630),
    S = n(871123),
    v = n(832163),
    C = n(44724),
    b = n(980094),
    N = n(421161),
    R = n(366523),
    O = n(652215),
    D = n(806931),
    L = n(788868),
    w = n(818348),
    x = n(985018),
    P = n(490669);
function M(e) {
    let t = (0, o.bG)([E.A], () => (E.A.isConnected() ? E.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? u.A.getParticipants(t) : [],
                i = [],
                a = new Set();
            for (let t of n)
                (!(0, D.Xw)(t) && !(0, D.Ay)(t)) ||
                    t.user.id === e ||
                    a.has(t.user.id) ||
                    (a.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, D.Ay)(e) && !(0, D.Ay)(t) ? -1 : (0, D.Ay)(t) && !(0, D.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function k(e, t, n) {
    let r = (0, d.A)(),
        a = M(e),
        l = (0, o.yK)([A.default], () => n?.map(A.default.getUser).filter(T.Vq) ?? [], [n]);
    return i.useMemo(
        () => s().uniqWith([...(null != t ? [t] : []), ...l, ...a, ...r], (e, t) => e.id === t.id),
        [t, l, a, r],
    );
}
function U(e) {
    let { handleClose: t, guild: n, sku: a } = e,
        s = i.useCallback(() => {
            (0, C.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = v.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(O.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, a.id)) ||
                ((0, l.s7G)(), (0, C.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: a.id, slug: a.slug }));
        }, [n.id, a.id, a.slug, t]);
    return (0, r.jsx)("div", {
        className: P.$O,
        children: (0, r.jsx)(l.QWc, {
            text: n.id === (0, S.zf)() ? x.intl.string(x.t.nyIcya) : x.intl.string(x.t.ImioFL),
            onMouseDown: s,
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
            setCustomGiftMessage: a,
            giftRecipient: s,
            emojiConfetti: u,
            soundEffect: d,
            setEmojiConfetti: E,
            setSoundEffect: T,
            giftingOrigin: v,
            additionalUserIds: C,
        } = (0, _.Pv)(),
        { selectedSkuId: O, application: D } = (0, f.P5)(),
        M = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        G = k(M?.id, s, C),
        V = (0, o.bG)([I.A], () => (null != O ? I.A.get(O) : null), [O]),
        F = (0, S.fq)(V),
        B = (0, S.xf)(V),
        j = (0, N.j)(V, { shouldFetchIfMissing: !0 }),
        H = async (e, t) => {},
        Y = () =>
            (0, r.jsx)(p.A, {
                onTextChange: (e) => a?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: P.iX,
                innerClassName: P.pt,
            }),
        W = () =>
            null != s && (v === L.vQ.USER_PROFILE_WISHLIST || v === L.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(m.Z, { giftRecipient: s })
                : (0, r.jsx)(c.A, { selectedSkuId: O, validateSelectedGift: H, recipients: G }),
        K = (e) => {
            null != T && T(null == e ? void 0 : e);
        },
        z = () =>
            (0, r.jsxs)("div", {
                className: P.mT,
                children: [
                    null != F &&
                        (0, r.jsx)(R.A, {
                            containerClassName: P.T3,
                            cardImage: F,
                            cardBackgroundImage: B,
                            altText: V?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: P._T,
                        children: [
                            (0, r.jsx)(g.A, { sound: d, onSelect: K }),
                            (0, r.jsx)(h.A, { setEmojiConfetti: E, emojiConfetti: null == u ? void 0 : u }),
                        ],
                    }),
                ],
            }),
        $ = () => {
            if (null == V) return null;
            let e = (0, y.$g)(V.price?.amount ?? 0, V.price?.currency ?? w.Yr.USD);
            return (0, r.jsxs)("div", {
                className: P.AN,
                children: [
                    (0, r.jsx)(l.zEo, { className: P.jr, children: x.intl.string(x.t.PpoJzt) }),
                    (0, r.jsxs)("div", {
                        className: P.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: P.Xb,
                                children:
                                    null != V &&
                                    null != F &&
                                    (0, r.jsx)(R.A, {
                                        containerClassName: P.Iy,
                                        cardImage: F,
                                        cardBackgroundImage: B,
                                        altText: V.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.vz,
                                children: [
                                    null != D && (0, r.jsx)(b.Q, { application: D }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: V.name }),
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
                className: P.Tc,
                children: [
                    W(),
                    Y(),
                    $(),
                    null != j && null != V && (0, r.jsx)(U, { handleClose: n, sku: V, guild: j }),
                ],
            });
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: P.Du, children: [z(), q()] }),
        getLeftColumnComponent: z,
        getRightColumnComponent: q,
        onStepChange: t,
        onBackClick: n,
        disabled: null == s || s.id === M?.id || i.length > L.Jo,
    };
};
