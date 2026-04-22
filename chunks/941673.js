n.d(t, { Z: () => B }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(192308),
    u = n(123292),
    d = n(742158),
    c = n(834730),
    C = n(683071),
    p = n(318254),
    m = n(262427),
    E = n(313961),
    A = n(94420),
    h = n(734925),
    f = n(765441),
    _ = n(937008),
    g = n(156312),
    T = n(871181),
    x = n(238017),
    S = n(285719),
    I = n(650588),
    O = n(993046),
    y = n(383501),
    N = n(287809),
    R = n(67480),
    v = n(403362),
    P = n(871123),
    b = n(832163),
    L = n(44724),
    k = n(980094),
    j = n(421161),
    U = n(366523),
    M = n(652215),
    w = n(806931),
    F = n(788868),
    D = n(985018),
    H = n(107610);
function G(e) {
    let { handleClose: t, guild: n, sku: i } = e,
        s = r.useCallback(() => {
            (0, L.X)({ guildId: n.id });
        }, [n.id]),
        a = r.useCallback(() => {
            t();
            let e = b.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(M.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, i.id)) ||
                ((0, o.closeAllModals)(),
                (0, L.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: i.id, slug: i.slug }));
        }, [n.id, i.id, i.slug, t]);
    return (0, l.jsx)("div", {
        className: H.$O,
        children: (0, l.jsx)(u.Q, {
            text: D.intl.string(D.t.ImioFL),
            onMouseDown: s,
            onClick: a,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let B = (e) => {
    var t;
    let n,
        i,
        o,
        { handleStepChange: u, handleClose: b } = e,
        {
            customGiftMessage: L = "",
            setCustomGiftMessage: B,
            giftRecipient: K,
            emojiConfetti: V,
            soundEffect: W,
            setEmojiConfetti: Y,
            setSoundEffect: z,
            giftingOrigin: Z,
            additionalUserIds: q,
        } = (0, _.Pv)(),
        Q = (0, A.t4)((e) => e.selectedSkuId),
        { application: X } = (0, g.P5)(),
        J = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        $ =
            ((t = J?.id),
            (n = (0, f.A)()),
            (i = (function (e) {
                let t = (0, a.bG)([y.A], () => (y.A.isConnected() ? y.A.getChannelId() : null)),
                    [n, l] = r.useState([]);
                return (
                    r.useEffect(() => {
                        let n = null != t ? E.A.getParticipants(t) : [],
                            r = [],
                            i = new Set();
                        for (let t of n)
                            (!(0, w.Xw)(t) && !(0, w.Ay)(t)) ||
                                t.user.id === e ||
                                i.has(t.user.id) ||
                                (i.add(t.user.id), r.push(t));
                        r.sort((e, t) => ((0, w.Ay)(e) && !(0, w.Ay)(t) ? -1 : (0, w.Ay)(t) && !(0, w.Ay)(e) ? 1 : 0)),
                            l(r.map((e) => e.user));
                    }, [t, e]),
                    n
                );
            })(t)),
            (o = (0, a.yK)([N.default], () => q?.map(N.default.getUser).filter(v.Vq) ?? [], [q])),
            r.useMemo(
                () => s().uniqWith([...(null != K ? [K] : []), ...o, ...i, ...n], (e, t) => e.id === t.id),
                [K, o, i, n],
            )),
        ee = (0, a.bG)([R.A], () => (null != Q ? R.A.get(Q) : null), [Q]),
        { normalPrice: et, discountedPrice: en } = (0, O.CD)({ sku: ee, priceSetAssignmentPurchaseType: M.lid.GIFT }),
        el = (0, P.fq)(ee),
        er = (0, P.xf)(ee),
        ei = (0, j.j)(ee, { shouldFetchIfMissing: !0 }),
        es = async (e, t) => {},
        ea = (e) => {
            null != z && z(null == e ? void 0 : e);
        },
        eo = () =>
            (0, l.jsxs)("div", {
                className: H.mT,
                children: [
                    null != el &&
                        (0, l.jsx)(U.A, {
                            containerClassName: H.T3,
                            cardImage: el,
                            cardBackgroundImage: er,
                            altText: ee?.name ?? "",
                            shape: "square",
                        }),
                    (0, l.jsxs)("div", {
                        className: H._T,
                        children: [
                            (0, l.jsx)(I.A, { sound: W, onSelect: ea }),
                            (0, l.jsx)(x.A, { setEmojiConfetti: Y, emojiConfetti: null == V ? void 0 : V }),
                        ],
                    }),
                ],
            }),
        eu = () => {
            let e = ee?.orbsReward;
            return (0, l.jsxs)("div", {
                className: H.Tc,
                children: [
                    null != K && (Z === F.vQ.USER_PROFILE_WISHLIST || Z === F.vQ.DM_CHANNEL_WISHLIST)
                        ? (0, l.jsx)(S.Z, { giftRecipient: K })
                        : (0, l.jsx)(h.A, { selectedSkuId: Q, validateSelectedGift: es, recipients: $ }),
                    (0, l.jsx)(T.A, {
                        onTextChange: (e) => B?.(e),
                        pendingText: L,
                        currentText: L,
                        disableThemedBackground: !0,
                        className: H.iX,
                        innerClassName: H.pt,
                    }),
                    null == ee
                        ? null
                        : (0, l.jsxs)("div", {
                              className: H.AN,
                              children: [
                                  (0, l.jsx)(d.z, { className: H.jr, children: D.intl.string(D.t.PpoJzt) }),
                                  (0, l.jsxs)("div", {
                                      className: H.Wx,
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: H.Xb,
                                              children:
                                                  null != ee &&
                                                  null != el &&
                                                  (0, l.jsx)(U.A, {
                                                      containerClassName: H.Iy,
                                                      cardImage: el,
                                                      cardBackgroundImage: er,
                                                      altText: ee.name,
                                                      shape: "square",
                                                  }),
                                          }),
                                          (0, l.jsxs)("div", {
                                              className: H.vz,
                                              children: [
                                                  null != X && (0, l.jsx)(k.Q, { application: X }),
                                                  (0, l.jsx)(c.E, { variant: "text-sm/semibold", children: ee.name }),
                                              ],
                                          }),
                                          (0, l.jsx)(c.E, { variant: "text-md/semibold", children: en ?? et }),
                                      ],
                                  }),
                              ],
                          }),
                    null != ee &&
                        (0, P.Ri)(ee) &&
                        (0, l.jsx)(C.w, { type: "info", children: D.intl.string(D.t.lORYb6) }),
                    null != e &&
                        e > 0 &&
                        (0, l.jsx)(m.J, { Icon: p.C, text: D.intl.format(D.t["ZV+aS9"], { orbCount: e }) }),
                    null != ei && null != ee && (0, l.jsx)(G, { handleClose: b, sku: ee, guild: ei }),
                ],
            });
        };
    return {
        renderStepBody: () => (0, l.jsxs)("div", { className: H.Du, children: [eo(), eu()] }),
        getLeftColumnComponent: eo,
        getRightColumnComponent: eu,
        onStepChange: u,
        onBackClick: b,
        disabled: null == K || K.id === J?.id || L.length > F.Jo,
    };
};
