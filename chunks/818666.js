n.d(t, { A: () => nd });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(621466),
    d = n(17928),
    h = n(554146),
    m = n(192308),
    p = n(939249),
    f = n(315710),
    g = n(812993),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(95561),
    C = n(131607),
    A = n(267889),
    b = n(813703),
    I = n(750506),
    v = n(267102),
    N = n(926972),
    T = n(511558),
    j = n(256449),
    k = n(750385),
    _ = n(649852),
    R = n.n(_),
    w = n(462180),
    O = n(319060),
    L = n(289873),
    P = n(212245),
    M = n(793574),
    D = n(688810),
    V = n(850992),
    U = n(151271),
    W = n(887695),
    F = n(87719),
    B = n(945810);
let K = (0, B.mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function G(e) {
    return K.useConfig({ location: e });
}
var H = n(732280),
    z = n(885386),
    q = n(287809),
    Q = n(174459),
    $ = n(240248),
    Z = n(196765),
    X = n(121894);
let J = Object.freeze({ showPremiumUpsell: !1 }),
    Y = (0, Z.v)((e) => J);
function ee(e) {
    (0, X.r)(() => Y.setState({ showPremiumUpsell: e }));
}
var et = n(891090),
    en = n(194004),
    el = n(788413),
    ei = n(60587),
    er = n(27232),
    es = n(406810),
    ea = n(866665),
    eo = n(797285),
    eu = n(713517),
    ec = n(724511),
    ed = n(88218),
    eh = n(941971),
    em = n(71393),
    ep = n(378058),
    ef = n(148355),
    eg = n(361670);
function ex(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.map((e) => ({
                      ...e,
                      isNitroLocked:
                          e.type === en.Z2.GUILD &&
                          0 !== e.stickers.length &&
                          e.stickers.every((e) => (0, eg.W$)(e, t, n) === eg.Ux.SENDABLE_WITH_PREMIUM),
                  }))
                : e,
        [e, n, t, l],
    );
}
var eE = n(652215),
    eS = n(698279),
    ey = n(375708),
    eC = n(161975);
let eA = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eb = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eI = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    ev = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eN = (0, $.xI)(O.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eT = (0, $.xI)(O.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ej = [eA, eA, eA, eA],
    ek = (eb + eI) * 2 + eA,
    e_ = eN + 2 * eT;
function eR(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eu.A)(o);
    return (0, l.jsxs)(p.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eC.a$,
                children: (0, l.jsx)(eh.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let ew = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = V.bM.useStore((e) => e.activeCategoryIndex),
        c = ex(
            (0, j.pD)(n),
            (0, d.bG)([q.default], () => q.default.getCurrentUser()),
            n,
            G("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: f,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === en.Z2.GUILD).length,
                t = e + +(c[0]?.type === en.Z2.RECENT) + +(c[0]?.type === en.Z2.FAVORITE),
                n = t * (eb + eI) - eI + e_;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === en.Z2.PACK),
            };
        }, [c]);
    i.useLayoutEffect(() => {
        o(f >= 7);
    }, [f]);
    let {
            renderCategoryListItem: x,
            rowHeight: E,
            onScroll: S,
        } = (function (e) {
            let {
                    activeIndex: t,
                    stickerPickerCategories: n,
                    categoryListRef: r,
                    firstStandardStickerCategoryOffsetTop: a,
                    setShouldRenderShortcut: o,
                } = e,
                u = (0, P.p)(),
                c = (0, U.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === en.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === en.Z2.RECENT,
                            p = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": p,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eR, {
                                        ariaLabel: ey.intl.string(ey.t.y3LQCG),
                                        className: s()(eC._0, eC.dC, { [eC.k1]: e, [eC.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(er.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eC.AB,
                                            height: ev,
                                            width: ev,
                                        }),
                                    }),
                                },
                                "favorites",
                            );
                        }
                        if (r === h && m) {
                            let e = !c && t === h;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": p,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eR, {
                                        ariaLabel: ey.intl.string(ey.t.RxAmVC),
                                        className: s()(eC._0, eC.dC, eC.ls, { [eC.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(es.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eC.AB,
                                            height: ev,
                                            width: ev,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let f = t === r,
                            g = !c && f,
                            x = n[r],
                            E = n[r + 1],
                            S = null != E && x.type === en.Z2.GUILD && E.type !== en.Z2.GUILD,
                            y = x.type === en.Z2.PACK,
                            C = "",
                            A = null;
                        if (x.type === en.Z2.GUILD || x.type === en.Z2.EMPTY_GUILD_UPSELL) {
                            let e = em.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (C = e.name),
                                (A = (0, l.jsx)(ec.A, { guild: e, isSelected: f, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = k.A.getStickerPack(x.id);
                            null != e &&
                                ((C = e.name),
                                (A = (0, l.jsx)(ef.A, {
                                    disableAnimation: !f || c,
                                    size: eb,
                                    sticker: (0, ep.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(ea.m, {
                                        position: "right",
                                        text: C,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": p,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eR, {
                                                ariaLabel: C,
                                                className: s()(eC._0, { [eC.ND]: y, [eC.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === en.Z2.PACK &&
                                                        Q.default.track(eE.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eS.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: eC.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? ek : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eb + (null != i && l.type === en.Z2.GUILD && i.type !== en.Z2.GUILD ? e_ : eI);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - eN < a);
                    },
                    [a, r, o],
                ),
            };
        })({
            activeIndex: u,
            stickerPickerCategories: c,
            categoryListRef: r,
            firstStandardStickerCategoryOffsetTop: m,
            setShouldRenderShortcut: o,
        }),
        y = i.useCallback(
            (e) => {
                (e(h), r.current?.scrollTo(m));
            },
            [h, m],
        );
    return (0, l.jsx)(ed.A, {
        className: eC.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: V.bM,
        listPadding: ej,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(p.D, {
                className: s()(eC.Fe, { [eC.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(eo.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eO = n(297264),
    eL = n(834730),
    eP = n(10392),
    eM = n(82498),
    eD = n(724651),
    eV = n(811611),
    eU = n(821609),
    eW = n(403581);
function eF(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eU.$, {
        variant: "expressive",
        icon: eW.t,
        text: i ?? ey.intl.string(ey.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (Q.default.track(eE.HAw.OPEN_MODAL, {
                    type: eE.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, m.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("71169"),
                        n.e("331584"),
                        n.e("532039"),
                        n.e("353274"),
                    ]).then(n.bind(n, 397313));
                    return (t) => (0, l.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var eB = n(823894),
    eK = n(202541),
    eG = n(768857);
function eH(e) {
    let { className: t, onClose: n } = e;
    (0, j.XQ)();
    let { analyticsLocations: r } = (0, D.Ay)(M.A.EMPTY_STATE),
        a = (0, d.yK)([k.A], () => eB.vX.map((e) => k.A.getStickerById(e)));
    i.useEffect(() => {
        (Q.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eK.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eE.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eP.sq)(eE.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eM.uq)(eK.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, H.V)(),
        u = (0, eD.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(eG.p$, t, { [eG.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eV.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eK.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eK.pe.TIER_2,
                      children: ey.intl.string(ey.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eO.D, {
                              className: eG.wx,
                              variant: "heading-xl/semibold",
                              children: ey.intl.string(ey.t.HEm04J),
                          }),
                          (0, l.jsx)(eL.E, {
                              className: eG.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ey.intl.string(ey.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eG.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ef.A, { sticker: e, className: eG.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eF, { analyticsSection: eE.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var ez = n(404778),
    eq = n(537652),
    eQ = n(962125),
    e$ = n(286509),
    eZ = n(414872),
    eX = n(158045),
    eJ = n(631576),
    eY = n(369163),
    e0 = n(123292),
    e1 = n(631305),
    e2 = n(468689),
    e5 = n(931991),
    e8 = n(473145),
    e3 = n(625633),
    e6 = n(136123);
let e7 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, P.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([em.A], () => em.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e5.nr)(h),
        p = null != h && 0 === (0, e8.aG)(h.premiumTier) && !h.features.has(eE.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            p &&
            a &&
            ((0, y.zV)(eE.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: h?.id,
                channel_id: r?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [p, h, r, u, a, o, c, m]),
    null != h && m)
        ? p
            ? (0, l.jsxs)("div", {
                  className: s()(e6.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eY.v, { size: "md", color: "currentColor", className: e6.Kk }),
                      (0, l.jsx)(eL.E, {
                          color: "interactive-text-default",
                          className: e6.rf,
                          variant: "text-sm/normal",
                          children: ey.intl.format(ey.t.AXWla1, { count: (0, e8.aG)(eE.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e0.Q, {
                          variant: "primary",
                          text: ey.intl.string(ey.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e1.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e3.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(e6.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eo.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e6.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eL.E, {
                          color: "interactive-text-default",
                          className: e6.rf,
                          variant: "text-sm/normal",
                          children: ey.intl.string(ey.t.S83wgh),
                      }),
                      (0, l.jsx)(e0.Q, {
                          variant: "primary",
                          text: ey.intl.string(ey.t.bwNjug),
                          onClick: function () {
                              ((0, U.v8)(), e2.default.open(n, eE.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e4 = n(240864),
    e9 = n(89366),
    te = n(202639);
let tt = (0, a.throttle)(
    function (e) {
        let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
                setShowUpsell: a,
            } = e,
            { areOnlyNitroLockedSectionsVisible: o } = (0, e4.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
            });
        a(o);
    },
    300,
    { leading: !1, trailing: !0 },
);
var tn = n(307301),
    tl = n(182922),
    ti = n(683522);
let tr = (0, $.xI)(O.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    ts = (0, $.xI)(O.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    ta = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = V.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case en.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case en.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, ep.FD)(e) && !(0, ep.Xw)(e)) || (0, ep.Xw)(e)) {
                    let i = em.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = ey.intl.format(ey.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ec.A, { guild: i })));
                } else if ((0, ep.FD)(e)) {
                    let i = k.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = ey.intl.format(ey.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ef.A, { size: ts, sticker: (0, ep.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, ep.FD)(r) || (0, ep.Xw)(r)
                    ? (0, l.jsx)(ef.A, { isInteracting: !0, size: tr, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: ti.P,
                          children: (0, l.jsx)(tn.j, { size: "md", color: "currentColor", className: ti.K }),
                      });
        return (0, l.jsx)(tl.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, ep.FD)(r) || (0, ep.Xw)(r) ? a : null,
        });
    });
var to = n(140735),
    tu = n(194261),
    tc = n(442433),
    td = n(304072),
    th = n(513902);
let tm = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: th.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tu.LockIcon, { size: "xxs", color: "currentColor", className: th.I }),
    });
};
var tp = n(777371);
let tf = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: r = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: f,
            onInspect: g,
            onSelect: x,
            rowIndex: E,
            stickerClassName: S,
            stickerDescriptors: y,
            stickerPadding: C,
            stickerSize: A,
            ownedStickerPacks: b,
            enlargeOnInteraction: I = !1,
            channel: v,
            currentUser: N,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: _ } = (0, P.p)(),
        R = A + 2 * C,
        w = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${R}px)`,
                height: R,
                paddingRight: t ? void 0 : R,
            }),
            [t, c, R],
        ),
        O = i.useMemo(() => ({ width: A, height: A, padding: C }), [C, A]),
        [L, M] = (0, td.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tp.nM,
        style: w,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === en.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || f?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: R, onFocus: w, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case en.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(p.D, {
                                "aria-label": e.name,
                                className: s()(tp.wP, S, { [tp.Kj]: u }),
                                innerRef: C,
                                tabIndex: R,
                                onFocus: w ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === en.op.CREATE_STICKER &&
                                        (Q.default.track(eE.HAw.OPEN_MODAL, {
                                            type: eE.JJy.CREATE_STICKER_MODAL,
                                            location: _,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("860350"),
                                                n.e("142753"),
                                                n.e("207998"),
                                                n.e("179652"),
                                                n.e("689827"),
                                                n.e("268582"),
                                                n.e("883952"),
                                                n.e("66580"),
                                                n.e("480436"),
                                                n.e("50342"),
                                                n.e("420643"),
                                                n.e("98913"),
                                                n.e("429143"),
                                            ]).then(n.bind(n, 445002));
                                            return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: O,
                                children: [
                                    !I && (0, l.jsx)("div", { className: tp.fw }),
                                    (0, l.jsx)("div", {
                                        className: tp.P0,
                                        children: (0, l.jsx)(tn.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tp.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eL.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: ey.intl.string(ey.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case en.op.STICKER: {
                    let a = (T ? (0, eg.W$)(e.sticker, N, v) : eg.Ux.SENDABLE) !== eg.Ux.SENDABLE,
                        o = j && a && !k,
                        m = !j && a,
                        g = t && null != b && (0, ep.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(p.D, {
                            className: s()(tp.yI, S, { [tp.PV]: u, [tp.TV]: L === e.sticker.id }),
                            innerRef: C,
                            tabIndex: R,
                            onFocus: w ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || f?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === en.op.STICKER && !(0, ep.o1)(e.sticker.id) && M(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tc.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: O,
                            "data-type": ei.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(to.A, { children: (0, ef.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !I && (0, l.jsx)("div", { className: tp.fw }),
                                        (0, l.jsx)(ef.A, {
                                            className: s()(tp.SI, {
                                                [tp.ot]:
                                                    I && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tp.Q$]: c,
                                                [tp.No]: m,
                                                [tp.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: I,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: A,
                                        }),
                                        g ? (0, l.jsx)(tm, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tp.MC,
                                                  children: (0, l.jsx)(tu.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tp.hz,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            }
        }),
    });
});
function tg(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eg.W$)(t.sticker, n, l)) {
        case eg.Ux.SENDABLE:
            i(t);
            break;
        case eg.Ux.SENDABLE_WITH_PREMIUM:
            (Q.default.track(eE.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: eE.JJy.STICKER_PICKER_UPSELL,
                location_object: eE.ZSU.STICKER,
            }),
                ee(!0));
        case eg.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eg.Ux.NONSENDABLE:
    }
}
var tx = n(457231);
let tE = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tS = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ty = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tC = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tA = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tb = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tI = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tv = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tN = (0, $.xI)(O.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tT = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tj = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tk = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t_ = [ty, tA, tb, tI],
    tR = [tC, tA, tb, tI],
    tw = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tO = "sticker-search-nitro",
    tL = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tP(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tx.yB,
        children: tL.map((e) =>
            (0, l.jsx)(
                p.D,
                {
                    className: tx.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eL.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tM(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tD(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tV = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: r,
                filteredStickers: a,
                getStickerItemProps: o,
                getStickerRowProps: c,
                gutterWidth: h,
                stickerPadding: m,
                isUsingKeyboardNavigation: p,
                onSelectSticker: f,
                rowCount: g,
                rowCountBySection: x,
                stickersCategories: E,
                stickersGrid: S,
                channel: y,
            } = e,
            C = tT + 2 * m,
            A = i.useRef(!1),
            b = i.useRef(null),
            [I, v] = V.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], w.x),
            { analyticsLocations: N } = (0, D.Ay)(M.A.STICKER_PICKER),
            T = (0, U.RQ)((e) => e.searchQuery),
            j = (0, d.bG)([k.A], () => k.A.getPremiumPacks()),
            _ = (0, d.bG)([q.default], () => q.default.getCurrentUser()),
            R = eX.Ay.canUseCustomStickersEverywhere(_),
            [O, L] = i.useState(0),
            F = G("web.StickerPickerList"),
            B = i.useMemo(() => new Set(j.map((e) => e.id)), [j]),
            K = ex(E, _, y, F),
            {
                renderRow: H,
                renderSection: $,
                renderSectionFooter: Z,
                sectionFooterHeight: X,
                renderSectionHeader: J,
                sectionHeaderHeight: Y,
            } = (function (e) {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: r,
                        onSelectSticker: a,
                        getStickerItemProps: o,
                        getStickerRowProps: u,
                        gutterWidth: c,
                        inspectedStickerPosition: d,
                        isScrolling: h,
                        isUsingKeyboardNavigation: m,
                        stickersGrid: p,
                        stickersCategories: f,
                        filteredStickers: g,
                        ownedStickerPacks: x,
                        channel: E,
                        currentUser: S,
                        activeSectionIndex: y,
                        upsellRestyleEnabled: C,
                    } = e,
                    A = (0, P.p)(),
                    { handleStickerInspect: b, handleSelect: I } = (function (e) {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            r = (0, P.p)(),
                            s = (0, U.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: i.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                                (V.bM.setActiveCategoryIndex(l),
                                    V.bM.setInspectedExpressionPosition(n, t, ei.t.MOUSE_EVENT),
                                    e.type === en.op.STICKER && V.bM.setSearchPlaceholder(e.sticker.name));
                            }, []),
                            handleSelect: i.useCallback(
                                (e, i) => {
                                    if (e.type !== en.op.STICKER) return;
                                    let { sticker: a } = e;
                                    if (null == a) return;
                                    let o = {
                                        ...r.location,
                                        object:
                                            "" === s ? eE.ZSU.STICKER_PICKER_VIEW_ALL : eE.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    (0, eg.W$)(a, l, n) !== eg.Ux.SENDABLE
                                        ? tg({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                        : i
                                          ? (0, ep.o1)(a.id)
                                              ? (0, eJ.vr)(a.id)
                                              : ((0, et.Dt)({ sticker: a, location: { ...o, object: eE.ZSU.STICKER } }),
                                                (0, eJ.uK)(a.id))
                                          : t(e);
                                },
                                [r.location, s, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: a, channel: E, currentUser: S }),
                    [v, N] = i.useState(!1),
                    T = i.useCallback((e) => {
                        z.tP.updateSetting(Array.from(e));
                    }, []),
                    j = i.useCallback(
                        (e) => {
                            let t = p[e],
                                i = t?.[0]?.gridSectionIndex,
                                s = null != i && ((C && tM(i, g)) || (null == g && f[i]?.isNitroLocked === !0));
                            return null != t
                                ? (0, l.jsx)(
                                      tf,
                                      {
                                          getStickerItemProps: o,
                                          getStickerRowProps: u,
                                          gutterWidth: c,
                                          inspectedStickerPosition: d,
                                          isScrolling: h,
                                          isUsingKeyboardNavigation: m,
                                          onInspect: b,
                                          onSelect: I,
                                          rowIndex: e,
                                          stickerClassName: tx.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > tE ? tT : tj,
                                          stickerPadding: r,
                                          preferAnimation: n <= tS,
                                          ownedStickerPacks: x,
                                          isDisplayingIndividualStickers: !0,
                                          channel: E,
                                          currentUser: S,
                                          upsellRestyleEnabled: C,
                                          isSectionNitroLocked: s,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [p, o, u, c, d, h, m, b, I, n, r, x, E, S, g, f, C],
                    ),
                    _ = i.useCallback(
                        (e) => {
                            let t = f[e],
                                n = f[e + 1];
                            return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
                        },
                        [f],
                    ),
                    R = i.useCallback(
                        (e) => {
                            let t = f[e],
                                n = f[e + 1];
                            return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                        },
                        [f],
                    ),
                    w = i.useCallback(
                        (e, t) => {
                            let n = f[e],
                                i = C && tM(e, g),
                                r = i || (null == g && n?.isNitroLocked === !0),
                                a = i || (null == g && _(e));
                            return null == g || r
                                ? (0, l.jsx)(
                                      "div",
                                      { role: "rowgroup", className: s()({ [tx.cW]: r, [tx.fV]: a }), children: t },
                                      e,
                                  )
                                : t;
                        },
                        [g, f, C, _],
                    ),
                    O = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            (i ? l.delete(e) : l.add(e),
                                Q.default.track(eE.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: A?.location,
                                    tab: eS.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                T(l));
                        },
                        [A, t, T],
                    ),
                    L = i.useCallback(
                        (e) => {
                            let n = f[e];
                            if (null != g) {
                                let { sendable: n, sendableWithPremium: i } = g;
                                if (0 === e && n.length > 0) return null;
                                if (C && tM(e, g)) {
                                    let n = y === e;
                                    return (0, l.jsx)(
                                        e$.A,
                                        {
                                            className: s()(tx.jH, tx.M0, { [tx.RA]: !n, [tx.sp]: n }),
                                            "aria-label": ey.intl.string(ey.t.pAF6xE),
                                            icon: (0, l.jsx)(eW.t, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(tO),
                                            onClick: () => O(tO, { isStickerPack: !1 }),
                                            children: ey.intl.string(ey.t.pAF6xE),
                                        },
                                        "stickers-available-with-nitro-header",
                                    );
                                }
                                let r = n.length > 0 && i.length > 0;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        r
                                            ? (0, l.jsx)("div", { className: tx.yF, children: (0, l.jsx)(ez.c, {}) })
                                            : null,
                                        (0, l.jsx)(
                                            e$.A,
                                            {
                                                className: tx.jH,
                                                "aria-label": ey.intl.string(ey.t.wbfJFh),
                                                children: ey.intl.string(ey.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            let i = f[e]?.isNitroLocked === !0,
                                r = s()(tx.jH, { [tx.M0]: C, [tx.RA]: i && y !== e, [tx.sp]: i && y === e });
                            switch (n.type) {
                                case en.Z2.FAVORITE:
                                    return (0, l.jsx)(
                                        e$.A,
                                        {
                                            className: r,
                                            "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(er.StarIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => O(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case en.Z2.RECENT:
                                    return (0, l.jsx)(
                                        e$.A,
                                        {
                                            className: r,
                                            "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(es.ClockIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => O(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case en.Z2.GUILD:
                                case en.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = em.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        e$.A,
                                        {
                                            className: r,
                                            "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ec.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => O(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case en.Z2.PACK: {
                                    let e = k.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        e$.A,
                                        {
                                            className: r,
                                            "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ef.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, ep.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => O(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [y, t, g, f, O, C],
                    ),
                    M = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0
                                    ? 0
                                    : C && tM(e, g)
                                      ? tN
                                      : tN + (t.length > 0 && n.length > 0 ? tv : 0);
                            }
                            return tN;
                        },
                        [g, C],
                    );
                return {
                    renderRow: j,
                    renderSection: w,
                    renderSectionHeader: L,
                    sectionHeaderHeight: M,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            if (null != g)
                                return C
                                    ? tM(e, g)
                                        ? (0, l.jsx)("div", { className: tx.pQ })
                                        : tD(e, g)
                                          ? (0, l.jsx)(eZ.Ay, { className: tx.$2 })
                                          : null
                                    : null;
                            let n = f[e],
                                i = t.has(n.id),
                                r =
                                    n.type !== en.Z2.EMPTY_GUILD_UPSELL || i
                                        ? null
                                        : (0, l.jsx)(
                                              e7,
                                              {
                                                  className: tx.Ij,
                                                  guildId: n.id,
                                                  channel: E,
                                                  shouldTrackUpsellViewed: !v,
                                                  setTrackedUpsellViewed: N,
                                              },
                                              `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                          ),
                                s = null;
                            return (
                                R(e)
                                    ? (s = (0, l.jsx)(eZ.Ay, { className: tx.$2 }))
                                    : _(e) && (s = (0, l.jsx)("div", { className: tx.pQ })),
                                null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                            );
                        },
                        [f, t, g, E, v, C, R, _],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            if (null != g) return C ? (tM(e, g) ? 33 : tD(e, g) ? eZ.kg : 0) : 0;
                            let n = f[e],
                                l = t.has(n.id),
                                i = 0;
                            return (
                                n.type !== en.Z2.EMPTY_GUILD_UPSELL || l || (i += tw),
                                R(e) ? (i += eZ.kg) : _(e) && (i += 33),
                                i
                            );
                        },
                        [g, C, f, t, R, _],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: r,
                stickerPadding: m,
                stickersCategories: K,
                stickersGrid: S,
                isScrolling: A,
                isUsingKeyboardNavigation: p,
                onSelectSticker: f,
                getStickerItemProps: o,
                getStickerRowProps: c,
                gutterWidth: h,
                inspectedStickerPosition: v,
                filteredStickers: a,
                ownedStickerPacks: B,
                channel: y,
                currentUser: _,
                activeSectionIndex: O,
                upsellRestyleEnabled: F,
            }),
            { onScroll: el, upsell: ea } = (function (e) {
                let {
                        upsellRestyleEnabled: t,
                        canUseStickersEverywhere: n,
                        listRef: r,
                        searchQuery: s,
                        categories: a,
                        sectionHeaderHeight: o,
                        sectionFooterHeight: c,
                    } = e,
                    { location: d } = (0, P.p)(),
                    { analyticsLocations: h } = (0, D.Ay)(M.A.STICKER_PICKER),
                    [m, p] = i.useState(!1),
                    f = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                    g = i.useCallback(
                        (e) => {
                            t &&
                                tt({
                                    listRef: r,
                                    searchQuery: s,
                                    nitroLockedSectionStates: f,
                                    scrollTop: e,
                                    sectionHeaderHeight: o,
                                    sectionFooterHeight: c,
                                    setShowUpsell: p,
                                });
                        },
                        [t, r, f, s, c, o],
                    ),
                    x = m && "" === s && t;
                if (
                    (i.useEffect(() => {
                        !x ||
                            n ||
                            u.Fr ||
                            (Q.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, {
                                type: eK.e.STICKER_PICKER_FLOATING_UPSELL,
                                location: d,
                                location_stack: h,
                            }),
                            (0, eP.sq)(eE.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                                (0, eM.uq)(eK.e.STICKER_PICKER_FLOATING_UPSELL),
                            ));
                    }, [d, h, n, x]),
                    !t || n || u.Fr)
                )
                    return { onScroll: g, upsell: null };
                let E = ey.intl.format(ey.t.eontIh, {
                        nitroTierName: (0, eX.Dd)(eK.PremiumTypes.TIER_2),
                        onClick: () => {
                            (Q.default.track(eE.HAw.PREMIUM_PROMOTION_OPENED, {
                                location_section: eE.JJy.STICKER_PICKER_FLOATING_UPSELL,
                            }),
                                ee(!0));
                        },
                    }),
                    S = (0, eX.LE)((0, e9.qD)(), eK.pe.TIER_2) ?? ey.intl.string(ey.t.BmJkbd);
                return {
                    onScroll: g,
                    upsell: (0, l.jsx)(te.d, {
                        showUpsell: x,
                        text: E,
                        button: S,
                        buttonAnalyticsObject: { section: eE.JJy.STICKER_PICKER_FLOATING_UPSELL },
                    }),
                };
            })({
                upsellRestyleEnabled: F,
                canUseStickersEverywhere: R,
                listRef: b,
                searchQuery: T,
                categories: K,
                sectionHeaderHeight: Y,
                sectionFooterHeight: X,
            });
        i.useEffect(() => {
            F && el(b.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [F, el, x]);
        let eo = (0, W.Fk)({
                activeCategoryIndex: I,
                isScrolling: A,
                listRef: b,
                onActiveCategoryIndexChange: V.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: T,
            }),
            eu = i.useCallback((e) => {
                let t = b.current?.getSectionDescriptors();
                null == t ||
                    L(
                        Math.max(
                            t.findLastIndex((t) => t.offset.top <= e),
                            0,
                        ),
                    );
            }, []);
        i.useLayoutEffect(() => {
            F && eu(b.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [F, eu, a, x]);
        let ed = i.useCallback(
            (e) => {
                (eo(e), F && eu(e), el(e));
            },
            [eo, el, eu, F],
        );
        return (
            (0, W.FV)({ searchQuery: T, activeCategoryIndex: I, listRef: b }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => b.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => b.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsx)(D.f5, {
                value: N,
                children: (0, l.jsxs)("div", {
                    className: tx.iE,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tx.AD,
                            children: [
                                null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                                    ? (0, l.jsx)(eq.A, {
                                          message: ey.intl.string(ey.t["zc+LQd"]),
                                          className: tx.__invalid_noSearchResultsContainer,
                                          suggestions: (0, l.jsx)(tP, { onSuggestionClick: (e) => (0, U.Ri)(e, !0) }),
                                      })
                                    : (0, l.jsx)(eQ.A, {
                                          role: "none presentation",
                                          listPadding: null != a ? tR : t_,
                                          onScroll: ed,
                                          renderRow: H,
                                          renderSection: $,
                                          renderSectionHeader: J,
                                          renderSectionFooter: Z,
                                          rowCount: g,
                                          rowCountBySection: x,
                                          rowHeight: r > tE ? C + tk : tj + 2 * m + tk,
                                          sectionHeaderHeight: Y,
                                          sectionFooterHeight: X,
                                          stickyHeaders: !0,
                                          ref: b,
                                      }),
                                ea,
                            ],
                        }),
                        (0, l.jsx)(ta, { stickersGrid: S }),
                    ],
                }),
            })
        );
    }),
    tU = (0, B.mj)({
        name: "2026-02-sticker-padding",
        kind: "user",
        defaultConfig: { padding: 2 },
        variations: { 1: { padding: 1 } },
    });
var tW = n(602034),
    tF = n(683438),
    tB = n(909802);
let tK = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: r, channel: s } = e,
        a = (0, j.ZO)(s),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, U.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            w.x,
        ),
        d = V.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = V.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], w.x),
        p = i.useCallback(
            (e) => {
                (V.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    V.bM.setInspectedExpressionPosition(0, 0),
                    V.bM.setSearchPlaceholder(null),
                    (0, U.Ri)(e),
                    r.current?.scrollTo(0));
            },
            [r],
        ),
        f = i.useCallback(() => {
            p("");
        }, [p]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: tB.i,
            children: (0, l.jsx)(tF.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? ey.intl.string(ey.t.dt5h1C) : ey.intl.string(ey.t["Pck/4U"])),
                onClear: f,
                onKeyDown: n,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eB.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tW.Aq)(eB.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tG = n(802842),
    tH = n(330422),
    tz = n(609178);
function tq(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, P.p)(),
        { analyticsLocations: i } = (0, D.Ay)(M.A.STICKER_PICKER),
        r = (0, U.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tz.A, {
        title: ey.intl.string(ey.t.Eukdgl),
        description: ey.intl.string(ey.t.sMmd7s),
        analyticsLocationSection: eE.JJy.STICKER_PICKER_UPSELL,
        onClose: () => ee(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eK.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: eE.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eX.mH)(eX.Ay.getSkuIdForPremiumType(eK.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tH.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tQ = n(789645),
    t$ = n(964486),
    tZ = n(420136),
    tX = n(939383);
function tJ() {
    return ee(!1);
}
function tY(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(M.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (Q.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eE.JJy.STICKER_PICKER_UPSELL,
            type: eK.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eP.sq)(eE.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eM.uq)(eK.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, t$.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, H.V)(),
        o = (0, eD.O)(),
        u = a?.subscriptionTrial?.skuId === eK.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": ey.intl.string(ey.t.jJG1pl),
        className: s()(tZ.VL, { [tZ.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eV.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tJ,
                      type: eK.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eK.pe.TIER_2,
                      children: u
                          ? ey.intl.format(ey.t.MAGagw, {
                                planName: (0, eX.RH)(eK.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : ey.intl.format(ey.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tZ.Tn, src: tX, alt: ey.intl.string(ey.t.do7AoM) }),
                          (0, l.jsx)(eL.E, {
                              className: tZ.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: ey.intl.string(ey.t.jJG1pl),
                          }),
                          (0, l.jsx)(eL.E, {
                              className: tZ.GR,
                              variant: "text-md/normal",
                              children: ey.intl.format(ey.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eF, { analyticsSection: eE.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(p.D, {
                className: tZ.kz,
                onClick: tJ,
                "aria-label": ey.intl.string(ey.t.cpT0Cq),
                children: (0, l.jsx)(tQ.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t0 = n(970099);
let t1 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t2 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t5 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t8 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t3 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t6 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    t7 = (0, $.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    t4 = R()(et.Qz, 200),
    t9 = R()(et.HA, 200),
    ne = i.forwardRef(function (e, t) {
        let { containerWidth: r, channel: s, onSelectSticker: a, closePopout: o } = e,
            u = tU.useConfig({ location: "StickerPicker" }).padding,
            c = G("web.StickerPicker"),
            { location: h } = (0, P.p)(),
            { analyticsLocations: p } = (0, D.Ay)(M.A.STICKER_PICKER),
            f = (0, H.V)()?.subscriptionTrial != null,
            g = i.useRef(null),
            x = i.useRef(null),
            E = i.useRef(null),
            S = Y((e) => e.showPremiumUpsell),
            [y, C] = (0, U.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], w.x),
            A = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let b = (0, j.pD)(s),
            I = 0 === b.filter((e) => e.type !== en.Z2.EMPTY_GUILD_UPSELL).length,
            v = (0, W.oV)({
                gridWrapperRef: g,
                containerWidth: r,
                showingEmptyState: I,
                listPaddingLeft: t2,
                listScrollbarWidth: 8,
            }),
            N = z.tP.useSetting(),
            T = i.useMemo(() => new Set(N), [N]),
            _ = (0, d.bG)([q.default], () => q.default.getCurrentUser()),
            R = i.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            tG.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let r = (0, eg.W$)(e, t, n);
                                    r === eg.Ux.SENDABLE ? l.push(e) : r === eg.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                                }),
                            { sendable: l, sendableWithPremium: i }
                        );
                    })(y, _, s),
                [y, _, s],
            ),
            O = (0, j.Gc)(),
            L = (0, j.UT)(),
            B = (0, d.cf)([k.A], () => k.A.getAllGuildStickers()),
            { sendable: K = [], sendableWithPremium: $ = [] } = R ?? {},
            Z = K.length + $.length,
            X = i.useCallback(
                (e) => {
                    ("" === y ? (0, et.ry)(e) : (0, et.nQ)(e, y, Z), a(e.sticker, en.D6.STICKER_PICKER));
                },
                [a, y, Z],
            ),
            J = null != v && v > t1,
            {
                rowCount: ee,
                rowCountBySection: er,
                stickersGrid: es,
                gutterWidth: ea,
                columnCounts: eo,
            } = (0, j._c)({
                filteredStickers: R,
                stickersCategories: b,
                collapsedStickersCategories: T,
                collapsePremiumSearchSection: c && T.has(tO),
                listWidth: v,
                listPaddingRight: t5,
                stickerNodeMargin: J ? t8 : t3,
                stickerNodeWidth: J ? t6 + 2 * u : t7 + 2 * u,
            }),
            {
                getItemProps: eu,
                getRowProps: ec,
                gridContainerProps: ed,
                handleGridContainerKeyDown: eh,
                isUsingKeyboardNavigation: em,
            } = (function (e) {
                let {
                        columnCounts: t,
                        stickersGrid: n,
                        stickersListRef: l,
                        store: r,
                        gridNavigatorId: s,
                        setInspectedStickerPosition: a,
                        onGridItemSelect: o,
                    } = e,
                    u = (0, P.p)(),
                    c = i.useCallback(
                        (e) => {
                            o(e, u);
                        },
                        [o, u],
                    ),
                    d = i.useCallback(
                        (e, t) => {
                            a(e, t, ei.t.GRID_NAVIGATOR_EVENT);
                        },
                        [a],
                    ),
                    {
                        gridDispatch: h,
                        getItemProps: m,
                        getRowProps: p,
                        gridContainerProps: f,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    } = (0, W.Ff)({
                        columnCounts: t,
                        gridNavigatorId: s,
                        itemGrid: n,
                        itemList: l,
                        onGridNavigatorItemSelect: c,
                        onGridNavigatorPositionChange: d,
                    });
                return (
                    i.useEffect(
                        () =>
                            r.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: l } = e;
                                    l !== ei.t.GRID_NAVIGATOR_EVENT &&
                                        h({ type: el.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [h, r],
                    ),
                    {
                        getItemProps: m,
                        getRowProps: p,
                        gridContainerProps: f,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    }
                );
            })({
                columnCounts: eo,
                stickersListRef: x,
                stickersGrid: es,
                onGridItemSelect: i.useCallback(
                    (e, t) => {
                        let { location: i } = t;
                        switch (e.type) {
                            case en.op.CREATE_STICKER:
                                (Q.default.track(eE.HAw.OPEN_MODAL, { type: eE.JJy.CREATE_STICKER_MODAL, location: h }),
                                    (0, m.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("860350"),
                                            n.e("142753"),
                                            n.e("207998"),
                                            n.e("179652"),
                                            n.e("689827"),
                                            n.e("268582"),
                                            n.e("883952"),
                                            n.e("66580"),
                                            n.e("480436"),
                                            n.e("50342"),
                                            n.e("420643"),
                                            n.e("98913"),
                                            n.e("429143"),
                                        ]).then(n.bind(n, 445002));
                                        return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                    }));
                                break;
                            case en.op.STICKER:
                                if (null == e.sticker) break;
                                tg({ descriptor: e, currentUser: _, channel: s, onSelect: X });
                        }
                    },
                    [h, _, s, X],
                ),
                store: V.bM,
                setInspectedStickerPosition: V.bM.setInspectedExpressionPosition,
                gridNavigatorId: eB.lq,
            });
        function ep() {
            let e = s.getGuildId(),
                t = [];
            null !== e && (t = k.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            (null != B &&
                [...B.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, et.p4)({
                    containerWidth: r,
                    favoriteStickers: O,
                    frequentlyUsedStickers: L,
                    guildStickers: t,
                    stickersTotal: n,
                }));
        }
        (i.useEffect(() => V.bM.resetStoreState, []),
            i.useEffect(() => {
                ("" === A.current && "" !== y && (0, et.Fg)(), (A.current = y));
            }, [y]),
            i.useEffect(() => {
                0 === Z ? t4(y) : t9(y, Z, C);
            }, [y, Z, C]),
            i.useLayoutEffect(() => {
                E.current?.focus();
            }, []));
        let ef = i.useCallback(() => {
            (o(),
                Q.default.track(eE.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eE.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)());
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: p,
            children: [
                !(f && I) &&
                    (0, l.jsx)("div", {
                        className: t0.wx,
                        children: (0, l.jsx)(tK, { ref: E, onKeyDown: eh, stickersListRef: x, channel: s }),
                    }),
                I
                    ? (0, l.jsx)(eH, { className: t0.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: g,
                                  className: t0.AD,
                                  id: eB.lq,
                                  ...ed,
                                  children:
                                      null != v
                                          ? (0, l.jsx)(tV, {
                                                ref: x,
                                                collapsedStickersCategories: T,
                                                filteredStickers: R,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: v,
                                                gutterWidth: ea,
                                                stickerPadding: u,
                                                isUsingKeyboardNavigation: em,
                                                onSelectSticker: X,
                                                rowCount: ee,
                                                rowCountBySection: er,
                                                stickersCategories: b,
                                                stickersGrid: es,
                                                channel: s,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(ew, { stickersListRef: x, channel: s }),
                          ],
                      }),
                S && (c ? (0, l.jsx)(tq, { onUpsellClicked: o }) : (0, l.jsx)(tY, { onLearnMore: ef })),
            ],
        });
    }),
    nt = i.forwardRef(function (e, t) {
        return (
            (0, j.XQ)(),
            (0, l.jsx)("div", {
                className: t0.iE,
                id: eB.GX,
                "aria-labelledby": eB.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(L.y, { className: t0.Mz }) : (0, l.jsx)(ne, { ...e, ref: t }),
            })
        );
    });
var nn = n(742023),
    nl = n(712687),
    ni = n(625494),
    nr = n(49999),
    ns = n(732139),
    na = n(307731),
    no = n(818625);
let nu = 498 + ns.as.MEDIUM,
    nc = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(p.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(eE.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, U.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, no.oi, no.pc, { [no.Mv]: t }),
        });
    }),
    nd = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: r,
                onSelectEmoji: a,
                onSelectSticker: p,
                onSelectSound: _,
                channel: R,
                type: w,
                position: O,
                align: L,
                positionLayerClassName: P,
                closeOnModalOuterClick: M = !1,
                parentModalKey: D,
            } = e,
            V = i.useRef(null),
            W = i.useRef(!1),
            F = i.useRef(null),
            B = i.useRef(null),
            { drawerWidth: K, handleDrawerResizeHandleMouseDown: G } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([nn.Ay], () => nn.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eS.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eS.wp.MIN:
                                return 498;
                            case eS.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eS.wp.MAX : e <= 498 ? eS.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
                        },
                        [n, s],
                    ),
                    p = (0, S.A)({
                        initialElementDimension: h,
                        maxDimension: s,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: m,
                        orientation: l,
                    });
                return (
                    i.useEffect(() => {
                        let e = o().debounce(() => {
                            null != t.current && a(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    i.useLayoutEffect(() => {
                        null != t.current && a(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: h,
                        handleDrawerResizeHandleMouseDown: i.useCallback(
                            (e) => {
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), p(e));
                            },
                            [t, p],
                        ),
                    }
                );
            })({
                positionContainerRef: V,
                drawerRef: B,
                orientation: "left" === L ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            H = (0, U.RQ)((e) => e.activeView),
            z = (0, j.ZO)(R),
            { renderWindow: q, windowDispatch: Q } = i.useContext(v.Ay),
            $ = (0, d.bG)([k.A], () => !k.A.hasLoadedStickerPacks),
            Z = (0, N.tj)({ location: "expression_picker" }),
            X = (0, d.bG)([nl.A], () => nl.A.isOpen()),
            J = null != D,
            Y = (0, m.useIsModalAtTop)(D ?? ""),
            ee = w.gifs?.allowSending && !u.Fr && null != r,
            et = w.stickers?.allowSending && null != p,
            en = !w.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!J && (0, m.hasAnyModalOpen)()) || (J && !(Y && M)) || X || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eS.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === B.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, U.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && ni._.dispatchToLastSubscribed(eE.jej.TEXTAREA_FOCUS);
                },
                [M, Y, J, X],
            ),
            ei = i.useCallback(() => {
                (0, U.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                H === eS.kx.GIF && (0, U.v8)();
            }
            return (
                q.addEventListener("mousedown", el),
                q.addEventListener("contextmenu", el),
                Q.subscribe(eE.jej.POPOUT_CLOSE, ei),
                ni._.subscribe(eE.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (q.removeEventListener("mousedown", el),
                        q.removeEventListener("contextmenu", el),
                        Q.unsubscribe(eE.jej.POPOUT_CLOSE, ei),
                        ni._.unsubscribe(eE.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [H, ei, el, q, Q]),
            (0, f.tj)(V));
        let [er, es] = (0, C.kn)(Z ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        (i.useEffect(() => {
            H === eS.kx.SOUNDBOARD && eo(!0);
        }, [H]),
            i.useEffect(
                () => () => {
                    ea && es(nr.i.TAKE_ACTION);
                },
                [ea, es],
            ),
            i.useEffect(() => {
                (0, U.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!J && (0, m.hasAnyModalOpen)()) || (J && !Y)) && (0, U.v8)();
            }, [Y, J]),
            i.useEffect(() => {
                null != B.current &&
                    !W.current &&
                    (H === eS.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (W.current = !0))
                        : H === eS.kx.STICKER
                          ? F?.current?.onPickerOpen == null || $ || (F?.current?.onPickerOpen(), (W.current = !0))
                          : (y.Ay.trackWithMetadata(eE.HAw.EXPRESSION_PICKER_OPENED, {
                                width: B.current.offsetWidth,
                                tab: H,
                                badged: !1,
                            }),
                            (W.current = !0)));
            }));
        let eu = i.useCallback((e, t) => _?.(e, "emoji_picker", t), [_]),
            ec = i.useCallback((e, t) => _?.(e, "soundboard_picker", t), [_]),
            ed = w.soundmoji?.allowSending === !0 && null != _,
            eh = "left" === L ? "right" : "left",
            em = null != P ? P : "left" === L ? no.sj : no.Jg,
            ep = ee
                ? (0, l.jsx)(nc, {
                      id: ns.g9,
                      "aria-controls": ns.ni,
                      "aria-selected": H === eS.kx.GIF,
                      isActive: H === eS.kx.GIF,
                      viewType: eS.kx.GIF,
                      children: ey.intl.string(ey.t["6gUTsS"]),
                  })
                : null,
            ef = et
                ? (0, l.jsx)(nc, {
                      id: eB.LD,
                      "aria-controls": eB.GX,
                      "aria-selected": H === eS.kx.STICKER,
                      isActive: H === eS.kx.STICKER,
                      autoFocus: !z,
                      viewType: eS.kx.STICKER,
                      children: (0, l.jsx)("div", { className: no.dG, children: ey.intl.string(ey.t.nf1s3u) }),
                  })
                : null,
            eg = (0, l.jsx)(nc, {
                id: ns.k1,
                "aria-controls": ns.Do,
                "aria-selected": H === eS.kx.EMOJI,
                isActive: H === eS.kx.EMOJI,
                viewType: eS.kx.EMOJI,
                children: ey.intl.string(ey.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: eE.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(I.nE, {
                className: s()(no.T8, em),
                targetRef: t,
                position: O,
                align: L,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(no.V6, { [no.D0]: !en }),
                        ref: V,
                        role: "dialog",
                        "aria-label": ey.intl.string(ey.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: no.jP,
                                  style: { width: null == K ? void 0 : K, [L]: 0 },
                                  ref: B,
                                  children: [
                                      (0, l.jsx)("div", { className: no.Di, onMouseDown: G, style: { [eh]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: no.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: no.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: no.CT,
                                                            role: "tablist",
                                                            "aria-label": ey.intl.string(ey.t["2j4Vgd"]),
                                                            children: [
                                                                ep,
                                                                ef,
                                                                eg,
                                                                Z &&
                                                                    ed &&
                                                                    (0, l.jsx)(nc, {
                                                                        id: ns.N6,
                                                                        "aria-controls": ns.AA,
                                                                        "aria-selected": H === eS.kx.SOUNDBOARD,
                                                                        isActive: H === eS.kx.SOUNDBOARD,
                                                                        viewType: eS.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: no.sd,
                                                                            children: [
                                                                                ey.intl.string(ey.t.EHlAMc),
                                                                                null != er &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: ey.intl.string(
                                                                                            ey.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              H === eS.kx.STICKER && et
                                                  ? (0, l.jsx)(nt, {
                                                        isLoading: $,
                                                        channel: R,
                                                        containerWidth: K,
                                                        onSelectSticker: p,
                                                        closePopout: ei,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                    })
                                                  : null,
                                              H === eS.kx.GIF && ee
                                                  ? (0, l.jsx)(b.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              H === eS.kx.EMOJI || w.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: R,
                                                        containerWidth: K,
                                                        emojiSize: null != K && K < nu ? ns.as.MEDIUM : ns.as.LARGE,
                                                        pickerIntention:
                                                            w.expressionPicker?.emojiIntention ??
                                                            na.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == R || null != R.guild_id,
                                                        closePopout: ei,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: eu,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            w.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              H === eS.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: no.z,
                                                        children: (0, l.jsx)(T.A, {
                                                            guildId: R.guild_id,
                                                            channel: R,
                                                            containerWidth: K,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: no.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  ],
                              })
                            : null,
                    });
                },
            }),
        });
    });
