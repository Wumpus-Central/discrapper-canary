"use strict";
n.d(t, { Z: () => H }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    l = n(192308),
    u = n(123292),
    c = n(742158),
    d = n(834730),
    _ = n(683071),
    f = n(318254),
    p = n(262427),
    h = n(313961),
    E = n(94420),
    m = n(734925),
    g = n(765441),
    A = n(937008),
    I = n(156312),
    T = n(871181),
    S = n(238017),
    y = n(285719),
    N = n(650588),
    v = n(993046),
    C = n(383501),
    O = n(287809),
    R = n(67480),
    b = n(403362),
    D = n(871123),
    L = n(832163),
    w = n(44724),
    M = n(980094),
    P = n(421161),
    x = n(366523),
    k = n(652215),
    U = n(806931),
    G = n(788868),
    F = n(985018),
    V = n(107610);
function B(e) {
    let { handleClose: t, guild: n, sku: s } = e,
        a = i.useCallback(() => {
            (0, w.X)({ guildId: n.id });
        }, [n.id]),
        o = i.useCallback(() => {
            t();
            let e = L.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(k.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, s.id)) ||
                ((0, l.closeAllModals)(),
                (0, w.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: s.id, slug: s.slug }));
        }, [n.id, s.id, s.slug, t]);
    return (0, r.jsx)("div", {
        className: V.$O,
        children: (0, r.jsx)(u.Q, {
            text: F.intl.string(F.t.ImioFL),
            onMouseDown: a,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let H = (e) => {
    var t;
    let n,
        s,
        l,
        { handleStepChange: u, handleClose: L } = e,
        {
            customGiftMessage: w = "",
            setCustomGiftMessage: H,
            giftRecipient: j,
            emojiConfetti: Y,
            soundEffect: W,
            setEmojiConfetti: K,
            setSoundEffect: $,
            giftingOrigin: z,
            additionalUserIds: q,
        } = (0, A.Pv)(),
        X = (0, E.t4)((e) => e.selectedSkuId),
        { application: Q } = (0, I.P5)(),
        Z = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        J =
            ((t = Z?.id),
            (n = (0, g.A)()),
            (s = (function (e) {
                let t = (0, o.bG)([C.A], () => (C.A.isConnected() ? C.A.getChannelId() : null)),
                    [n, r] = i.useState([]);
                return (
                    i.useEffect(() => {
                        let n = null != t ? h.A.getParticipants(t) : [],
                            i = [],
                            s = new Set();
                        for (let t of n)
                            (!(0, U.Xw)(t) && !(0, U.Ay)(t)) ||
                                t.user.id === e ||
                                s.has(t.user.id) ||
                                (s.add(t.user.id), i.push(t));
                        i.sort((e, t) => ((0, U.Ay)(e) && !(0, U.Ay)(t) ? -1 : (0, U.Ay)(t) && !(0, U.Ay)(e) ? 1 : 0)),
                            r(i.map((e) => e.user));
                    }, [t, e]),
                    n
                );
            })(t)),
            (l = (0, o.yK)([O.default], () => q?.map(O.default.getUser).filter(b.Vq) ?? [], [q])),
            i.useMemo(
                () => a().uniqWith([...(null != j ? [j] : []), ...l, ...s, ...n], (e, t) => e.id === t.id),
                [j, l, s, n],
            )),
        ee = (0, o.bG)([R.A], () => (null != X ? R.A.get(X) : null), [X]),
        { normalPrice: et, discountedPrice: en } = (0, v.CD)({ sku: ee, priceSetAssignmentPurchaseType: k.lid.GIFT }),
        er = (0, D.fq)(ee),
        ei = (0, D.xf)(ee),
        es = (0, P.j)(ee, { shouldFetchIfMissing: !0 }),
        ea = async (e, t) => {},
        eo = (e) => {
            null != $ && $(null == e ? void 0 : e);
        },
        el = () =>
            (0, r.jsxs)("div", {
                className: V.mT,
                children: [
                    null != er &&
                        (0, r.jsx)(x.A, {
                            containerClassName: V.T3,
                            cardImage: er,
                            cardBackgroundImage: ei,
                            altText: ee?.name ?? "",
                            shape: "square",
                        }),
                    (0, r.jsxs)("div", {
                        className: V._T,
                        children: [
                            (0, r.jsx)(N.A, { sound: W, onSelect: eo }),
                            (0, r.jsx)(S.A, { setEmojiConfetti: K, emojiConfetti: null == Y ? void 0 : Y }),
                        ],
                    }),
                ],
            }),
        eu = () => {
            let e = ee?.orbsReward;
            return (0, r.jsxs)("div", {
                className: V.Tc,
                children: [
                    null != j && (z === G.vQ.USER_PROFILE_WISHLIST || z === G.vQ.DM_CHANNEL_WISHLIST)
                        ? (0, r.jsx)(y.Z, { giftRecipient: j })
                        : (0, r.jsx)(m.A, { selectedSkuId: X, validateSelectedGift: ea, recipients: J }),
                    (0, r.jsx)(T.A, {
                        onTextChange: (e) => H?.(e),
                        pendingText: w,
                        currentText: w,
                        disableThemedBackground: !0,
                        className: V.iX,
                        innerClassName: V.pt,
                    }),
                    null == ee
                        ? null
                        : (0, r.jsxs)("div", {
                              className: V.AN,
                              children: [
                                  (0, r.jsx)(c.z, { className: V.jr, children: F.intl.string(F.t.PpoJzt) }),
                                  (0, r.jsxs)("div", {
                                      className: V.Wx,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: V.Xb,
                                              children:
                                                  null != ee &&
                                                  null != er &&
                                                  (0, r.jsx)(x.A, {
                                                      containerClassName: V.Iy,
                                                      cardImage: er,
                                                      cardBackgroundImage: ei,
                                                      altText: ee.name,
                                                      shape: "square",
                                                  }),
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: V.vz,
                                              children: [
                                                  null != Q && (0, r.jsx)(M.Q, { application: Q }),
                                                  (0, r.jsx)(d.E, { variant: "text-sm/semibold", children: ee.name }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.E, { variant: "text-md/semibold", children: en ?? et }),
                                      ],
                                  }),
                              ],
                          }),
                    null != ee &&
                        (0, D.Ri)(ee) &&
                        (0, r.jsx)(_.w, { type: "info", children: F.intl.string(F.t.lORYb6) }),
                    null != e &&
                        e > 0 &&
                        (0, r.jsx)(p.J, { Icon: f.C, text: F.intl.format(F.t["ZV+aS9"], { orbCount: e }) }),
                    null != es && null != ee && (0, r.jsx)(B, { handleClose: L, sku: ee, guild: es }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, r.jsxs)("div", { className: V.Du, children: [el(), eu()] }),
        getLeftColumnComponent: el,
        getRightColumnComponent: eu,
        onStepChange: u,
        onBackClick: L,
        disabled: null == j || j.id === Z?.id || w.length > G.Jo,
    };
};
