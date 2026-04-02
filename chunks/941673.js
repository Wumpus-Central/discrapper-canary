"use strict";
n.d(t, { Z: () => U }), n(321073);
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
    y = n(871123),
    v = n(832163),
    N = n(44724),
    C = n(980094),
    R = n(421161),
    O = n(366523),
    b = n(652215),
    D = n(806931),
    L = n(788868),
    w = n(985018),
    M = n(170602);
function x(e) {
    let t = (0, o.bG)([A.A], () => (A.A.isConnected() ? A.A.getChannelId() : null)),
        [n, r] = i.useState([]);
    return (
        i.useEffect(() => {
            let n = null != t ? c.A.getParticipants(t) : [],
                i = [],
                s = new Set();
            for (let t of n)
                (!(0, D.Xw)(t) && !(0, D.Ay)(t)) ||
                    t.user.id === e ||
                    s.has(t.user.id) ||
                    (s.add(t.user.id), i.push(t));
            i.sort((e, t) => ((0, D.Ay)(e) && !(0, D.Ay)(t) ? -1 : (0, D.Ay)(t) && !(0, D.Ay)(e) ? 1 : 0)),
                r(i.map((e) => e.user));
        }, [t, e]),
        n
    );
}
function P(e, t, n) {
    let r = (0, _.A)(),
        s = x(e),
        l = (0, o.yK)([I.default], () => n?.map(I.default.getUser).filter(S.Vq) ?? [], [n]);
    return i.useMemo(
        () => a().uniqWith([...(null != t ? [t] : []), ...l, ...s, ...r], (e, t) => e.id === t.id),
        [t, l, s, r],
    );
}
function k(e) {
    let { handleClose: t, guild: n, sku: s } = e,
        a = i.useCallback(() => {
            (0, N.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = v.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(b.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, s.id)) ||
                ((0, l.s7G)(), (0, N.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: s.id, slug: s.slug }));
        }, [n.id, s.id, s.slug, t]);
    return (0, r.jsx)("div", {
        className: M.$O,
        children: (0, r.jsx)(l.QWc, {
            text: w.intl.string(w.t.ImioFL),
            onMouseDown: a,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let U = (e) => {
    let { handleStepChange: t, handleClose: n } = e,
        {
            customGiftMessage: i = "",
            setCustomGiftMessage: s,
            giftRecipient: a,
            emojiConfetti: c,
            soundEffect: _,
            setEmojiConfetti: A,
            setSoundEffect: S,
            giftingOrigin: v,
            additionalUserIds: N,
        } = (0, f.Pv)(),
        { selectedSkuId: D, application: x } = (0, p.P5)(),
        U = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        G = P(U?.id, a, N),
        F = (0, o.bG)([T.A], () => (null != D ? T.A.get(D) : null), [D]),
        V = (0, y.fq)(F),
        B = (0, y.xf)(F),
        H = (0, R.j)(F, { shouldFetchIfMissing: !0 }),
        j = async (e, t) => {},
        Y = () =>
            (0, r.jsx)(h.A, {
                onTextChange: (e) => s?.(e),
                pendingText: i,
                currentText: i,
                disableThemedBackground: !0,
                className: M.iX,
                innerClassName: M.pt,
            }),
        W = () =>
            null != a && (v === L.vQ.USER_PROFILE_WISHLIST || v === L.vQ.DM_CHANNEL_WISHLIST)
                ? (0, r.jsx)(E.Z, { giftRecipient: a })
                : (0, r.jsx)(d.A, { selectedSkuId: D, validateSelectedGift: j, recipients: G }),
        K = (e) => {
            null != S && S(null == e ? void 0 : e);
        },
        $ = () =>
            (0, r.jsxs)("div", {
                className: M.mT,
                children: [
                    null != V &&
                        (0, r.jsx)(O.A, {
                            containerClassName: M.T3,
                            cardImage: V,
                            cardBackgroundImage: B,
                            altText: F?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: M._T,
                        children: [
                            (0, r.jsx)(g.A, { sound: _, onSelect: K }),
                            (0, r.jsx)(m.A, { setEmojiConfetti: A, emojiConfetti: null == c ? void 0 : c }),
                        ],
                    }),
                ],
            }),
        z = () => {
            if (null == F) return null;
            let e = (0, y.p3)(F, b.lid.GIFT);
            return (0, r.jsxs)("div", {
                className: M.AN,
                children: [
                    (0, r.jsx)(l.zEo, { className: M.jr, children: w.intl.string(w.t.PpoJzt) }),
                    (0, r.jsxs)("div", {
                        className: M.Wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: M.Xb,
                                children:
                                    null != F &&
                                    null != V &&
                                    (0, r.jsx)(O.A, {
                                        containerClassName: M.Iy,
                                        cardImage: V,
                                        cardBackgroundImage: B,
                                        altText: F.name,
                                        shape: "square",
                                    }),
                            }),
                            (0, r.jsxs)("div", {
                                className: M.vz,
                                children: [
                                    null != x && (0, r.jsx)(C.Q, { application: x }),
                                    (0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: F.name }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, { variant: "text-md/semibold", children: e }),
                        ],
                    }),
                ],
            });
        },
        q = () => {
            let e = F?.orbsReward;
            return (0, r.jsxs)("div", {
                className: M.Tc,
                children: [
                    W(),
                    Y(),
                    z(),
                    null != F &&
                        (0, y.Ri)(F) &&
                        (0, r.jsx)(l.wx6, { type: "info", children: w.intl.string(w.t.lORYb6) }),
                    null != e &&
                        e > 0 &&
                        (0, r.jsx)(u.J, { Icon: l.Cp8, text: w.intl.format(w.t["ZV+aS9"], { orbCount: e }) }),
                    null != H && null != F && (0, r.jsx)(k, { handleClose: n, sku: F, guild: H }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: M.Du, children: [$(), q()] }),
        getLeftColumnComponent: $,
        getRightColumnComponent: q,
        onStepChange: t,
        onBackClick: n,
        disabled: null == a || a.id === U?.id || i.length > L.Jo,
    };
};
