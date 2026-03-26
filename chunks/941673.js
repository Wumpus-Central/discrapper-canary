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
    d = n(734925),
    _ = n(765441),
    f = n(937008),
    p = n(156312),
    h = n(871181),
    m = n(238017),
    E = n(285719),
    g = n(650588),
    A = n(383501),
    I = n(287809),
    T = n(67480),
    S = n(403362),
    y = n(580630),
    v = n(871123),
    N = n(832163),
    C = n(44724),
    R = n(980094),
    O = n(421161),
    b = n(366523),
    D = n(652215),
    L = n(806931),
    w = n(788868),
    M = n(818348),
    x = n(985018),
    P = n(170602);
function k(e) {
    let t = (0, o.bG)([A.A], () => (A.A.isConnected() ? A.A.getChannelId() : null)),
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
function U(e, t, n) {
    let r = (0, _.A)(),
        s = k(e),
        l = (0, o.yK)([I.default], () => n?.map(I.default.getUser).filter(S.Vq) ?? [], [n]);
    return i.useMemo(
        () => a().uniqWith([...(null != t ? [t] : []), ...l, ...s, ...r], (e, t) => e.id === t.id),
        [t, l, s, r],
    );
}
function G(e) {
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
        className: P.$O,
        children: (0, r.jsx)(l.QWc, {
            text: x.intl.string(x.t.ImioFL),
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
            soundEffect: _,
            setEmojiConfetti: A,
            setSoundEffect: S,
            giftingOrigin: N,
            additionalUserIds: C,
        } = (0, f.Pv)(),
        { selectedSkuId: D, application: L } = (0, p.P5)(),
        k = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        F = U(k?.id, a, C),
        V = (0, o.bG)([T.A], () => (null != D ? T.A.get(D) : null), [D]),
        B = (0, v.fq)(V),
        H = (0, v.xf)(V),
        j = (0, O.j)(V, { shouldFetchIfMissing: !0 }),
        Y = async (e, t) => {},
        W = () =>
            (0, r.jsx)(h.A, {
                onTextChange: (e) => s?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: P.iX,
                innerClassName: P.pt,
            }),
        K = () =>
            null != a && (N === w.vQ.USER_PROFILE_WISHLIST || N === w.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(E.Z, { giftRecipient: a })
                : (0, r.jsx)(d.A, { selectedSkuId: D, validateSelectedGift: Y, recipients: F }),
        $ = (e) => {
            null != S && S(null == e ? void 0 : e);
        },
        z = () =>
            (0, r.jsxs)("div", {
                className: P.mT,
                children: [
                    null != B &&
                        (0, r.jsx)(b.A, {
                            containerClassName: P.T3,
                            cardImage: B,
                            cardBackgroundImage: H,
                            altText: V?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: P._T,
                        children: [
                            (0, r.jsx)(g.A, { sound: _, onSelect: $ }),
                            (0, r.jsx)(m.A, { setEmojiConfetti: A, emojiConfetti: null == c ? void 0 : c }),
                        ],
                    }),
                ],
            }),
        q = () => {
            if (null == V) return null;
            let e = (0, y.$g)(V.price?.amount ?? 0, V.price?.currency ?? M.Yr.USD);
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
                                    null != B &&
                                    (0, r.jsx)(b.A, {
                                        containerClassName: P.Iy,
                                        cardImage: B,
                                        cardBackgroundImage: H,
                                        altText: V.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: P.vz,
                                children: [
                                    null != L && (0, r.jsx)(R.Q, { application: L }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: V.name }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, { variant: "text-md/semibold", children: e }),
                        ],
                    }),
                ],
            });
        },
        Z = () => {
            let e = V?.orbsReward;
            return (0, r.jsxs)("div", {
                className: P.Tc,
                children: [
                    K(),
                    W(),
                    q(),
                    null != e &&
                        e > 0 &&
                        (0, r.jsx)(u.J, { Icon: l.Cp8, text: x.intl.format(x.t["ZV+aS9"], { orbCount: e }) }),
                    null != j && null != V && (0, r.jsx)(G, { handleClose: n, sku: V, guild: j }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: P.Du, children: [z(), Z()] }),
        getLeftColumnComponent: z,
        getRightColumnComponent: Z,
        onStepChange: t,
        onBackClick: n,
        disabled: null == a || a.id === k?.id || i.length > w.Jo,
    };
};
