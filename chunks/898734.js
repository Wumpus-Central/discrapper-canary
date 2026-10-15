n.d(t, { A: () => nN });
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
    f = n(939249),
    p = n(315710),
    g = n(62010),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(666860),
    C = n(131607),
    A = n(660484),
    I = n(490035),
    b = n(636537),
    v = n(73153),
    N = n(626584),
    T = n(38405);
n(321073);
var j = n(770335);
let _ = { packs: [], packsById: {}, packIdByEmojiId: {}, fetchState: "NOT_FETCHED" },
    k = _;
class R extends d.Ay.Store {
    static displayName = "EmojiPackStore";
    getFetchState() {
        return k.fetchState;
    }
    getPacks() {
        return k.packs;
    }
    getPack(e) {
        return k.packsById[e];
    }
    getPackForEmoji(e) {
        let t = k.packIdByEmojiId[e];
        return null != t ? k.packsById[t] : void 0;
    }
    getEmoji(e) {
        return this.getPackForEmoji(e)?.emojis.find((t) => t.id === e);
    }
}
let O = new R(v.h, {
    LOGOUT: function () {
        k = _;
    },
    EMOJI_PACKS_FETCH_START: function () {
        if ("FETCHING" === k.fetchState) return !1;
        k = { ...k, fetchState: "FETCHING" };
    },
    EMOJI_PACKS_FETCH_SUCCESS: function (e) {
        let { packs: t } = e;
        k = {
            ...(function (e) {
                let t = [],
                    n = {},
                    l = {};
                for (let i of e) {
                    if (null != n[i.id]) continue;
                    let e = {
                        id: i.id,
                        name: i.name,
                        description: i.description,
                        available: i.available,
                        representativeEmojiId: i.representative_emoji_id,
                        emojis: i.emojis.map((e) => {
                            var t;
                            return (
                                (t = i.id),
                                {
                                    id: e.id,
                                    packId: t,
                                    name: e.name,
                                    animated: e.animated,
                                    require_colons: e.require_colons,
                                    available: e.available,
                                    managed: e.managed,
                                    roles: e.roles,
                                    type: j.i.PACK,
                                }
                            );
                        }),
                    };
                    for (let i of (t.push(e), (n[e.id] = e), e.emojis)) l[i.id] = e.id;
                }
                return { packs: t, packsById: n, packIdByEmojiId: l };
            })(t),
            fetchState: "FETCHED",
        };
    },
    EMOJI_PACKS_FETCH_FAIL: function () {
        k = { ...k, fetchState: "FAILED" };
    },
});
var L = n(652215);
let w = new N.A("EmojiPackActionCreators");
async function M() {
    if ("NOT_FETCHED" === O.getFetchState()) {
        v.h.dispatch({ type: "EMOJI_PACKS_FETCH_START" });
        try {
            let e = (await b.Bo.get({ url: L.Rsh.EMOJI_PACKS, rejectWithError: !0 })).body;
            (w.log("GET /emoji-packs response", JSON.stringify(e, null, 2)),
                v.h.dispatch({ type: "EMOJI_PACKS_FETCH_SUCCESS", packs: e }));
        } catch (e) {
            (e instanceof b.oh && 404 === e.status
                ? w.log("GET /emoji-packs returned 404: emoji packs are not enabled for this user")
                : e instanceof b.oh && e.status >= 400 && e.status < 500
                  ? w.warn(`GET /emoji-packs failed with status ${e.status}`)
                  : T.A.captureException(e),
                v.h.dispatch({ type: "EMOJI_PACKS_FETCH_FAIL" }));
        }
    }
}
var P = n(813703),
    D = n(750506),
    U = n(267102),
    V = n(926972),
    W = n(476254),
    F = n(256449),
    B = n(750385),
    K = n(649852),
    G = n.n(K),
    H = n(462180),
    z = n(319060),
    q = n(289873),
    $ = n(212245),
    Q = n(793574),
    Z = n(688810),
    J = n(850992),
    X = n(151271),
    Y = n(887695),
    ee = n(87719);
let et = (0, n(945810).mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function en(e) {
    return et.useConfig({ location: e });
}
var el = n(732280),
    ei = n(885386),
    er = n(287809),
    es = n(174459),
    ea = n(240248),
    eo = n(196765),
    eu = n(121894);
let ec = Object.freeze({ showPremiumUpsell: !1 }),
    ed = (0, eo.v)((e) => ec);
function eh(e) {
    (0, eu.r)(() => ed.setState({ showPremiumUpsell: e }));
}
var em = n(891090),
    ef = n(194004),
    ep = n(788413),
    eg = n(60587),
    ex = n(27232),
    eE = n(406810),
    eS = n(866665),
    ey = n(797285),
    eC = n(713517),
    eA = n(724511),
    eI = n(88218),
    eb = n(941971),
    ev = n(71393),
    eN = n(378058),
    eT = n(148355),
    ej = n(361670);
function e_(e, t, n) {
    return e.stickers.filter((e) => (0, ej.W$)(e, t, n) !== ej.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
function ek(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.flatMap((e) => {
                      let l = (function (e, t, n) {
                          switch (e.type) {
                              case ef.Z2.FAVORITE:
                              case ef.Z2.RECENT: {
                                  let l = e_(e, t, n);
                                  return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                              }
                              case ef.Z2.GUILD: {
                                  var l;
                                  let i = e_(e, t, n);
                                  if (
                                      i.length > 0 &&
                                      ((l = { ...e, stickers: i }),
                                      l.type === ef.Z2.GUILD &&
                                          0 !== l.stickers.length &&
                                          l.stickers.every((e) => (0, ej.W$)(e, t, n) === ej.Ux.SENDABLE_WITH_PREMIUM))
                                  )
                                      return { ...e, stickers: i, isNitroLocked: !0 };
                                  return { ...e, isNitroLocked: !1 };
                              }
                              default:
                                  return { ...e, isNitroLocked: !1 };
                          }
                      })(e, t, n);
                      return null != l ? [l] : [];
                  })
                : e,
        [e, n, t, l],
    );
}
var eR = n(698279),
    eO = n(105292),
    eL = n(161975);
let ew = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eM = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eP = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eD = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eU = (0, ea.xI)(z.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eV = (0, ea.xI)(z.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eW = [ew, ew, ew, ew],
    eF = (eM + eP) * 2 + ew,
    eB = eU + 2 * eV;
function eK(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eC.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eL.a$,
                children: (0, l.jsx)(eb.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eG = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = J.bM.useStore((e) => e.activeCategoryIndex),
        c = ek(
            (0, F.pD)(n),
            (0, d.bG)([er.default], () => er.default.getCurrentUser()),
            n,
            en("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: p,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === ef.Z2.GUILD).length,
                t = e + +(c[0]?.type === ef.Z2.RECENT) + +(c[0]?.type === ef.Z2.FAVORITE),
                n = t * (eM + eP) - eP + eB;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === ef.Z2.PACK),
            };
        }, [c]);
    i.useLayoutEffect(() => {
        o(p >= 7);
    }, [p]);
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
                u = (0, $.p)(),
                c = (0, X.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === ef.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === ef.Z2.RECENT,
                            f = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eK, {
                                        ariaLabel: eO.intl.string(eO.t.y3LQCG),
                                        className: s()(eL._0, eL.dC, { [eL.k1]: e, [eL.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ex.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eL.AB,
                                            height: eD,
                                            width: eD,
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
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eK, {
                                        ariaLabel: eO.intl.string(eO.t.RxAmVC),
                                        className: s()(eL._0, eL.dC, eL.ls, { [eL.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(eE.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eL.AB,
                                            height: eD,
                                            width: eD,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let p = t === r,
                            g = !c && p,
                            x = n[r],
                            E = n[r + 1],
                            S = null != E && x.type === ef.Z2.GUILD && E.type !== ef.Z2.GUILD,
                            y = x.type === ef.Z2.PACK,
                            C = "",
                            A = null;
                        if (x.type === ef.Z2.GUILD || x.type === ef.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ev.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (C = e.name),
                                (A = (0, l.jsx)(eA.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = B.A.getStickerPack(x.id);
                            null != e &&
                                ((C = e.name),
                                (A = (0, l.jsx)(eT.A, {
                                    disableAnimation: !p || c,
                                    size: eM,
                                    sticker: (0, eN.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(eS.m, {
                                        position: "right",
                                        text: C,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eK, {
                                                ariaLabel: C,
                                                className: s()(eL._0, { [eL.ND]: y, [eL.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === ef.Z2.PACK &&
                                                        es.default.track(L.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eR.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: eL.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? eF : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eM + (null != i && l.type === ef.Z2.GUILD && i.type !== ef.Z2.GUILD ? eB : eP);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - eU < a);
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
    return (0, l.jsx)(eI.A, {
        className: eL.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: J.bM,
        listPadding: eW,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(f.D, {
                className: s()(eL.Fe, { [eL.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(ey.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eH = n(297264),
    ez = n(834730),
    eq = n(10392),
    e$ = n(82498),
    eQ = n(724651),
    eZ = n(811611),
    eJ = n(821609),
    eX = n(403581);
function eY(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eJ.$, {
        variant: "expressive",
        icon: eX.t,
        text: i ?? eO.intl.string(eO.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (es.default.track(L.HAw.OPEN_MODAL, {
                    type: L.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var e0 = n(823894),
    e1 = n(202541),
    e2 = n(768857);
function e5(e) {
    let { className: t, onClose: n } = e;
    (0, F.XQ)();
    let { analyticsLocations: r } = (0, Z.Ay)(Q.A.EMPTY_STATE),
        a = (0, d.yK)([B.A], () => e0.vX.map((e) => B.A.getStickerById(e)));
    i.useEffect(() => {
        (es.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, {
            type: e1.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: L.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eq.sq)(L.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, e$.uq)(e1.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, el.V)(),
        u = (0, eQ.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(e2.p$, t, { [e2.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eZ.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: e1.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? e1.pe.TIER_2,
                      children: eO.intl.string(eO.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eH.D, {
                              className: e2.wx,
                              variant: "heading-xl/semibold",
                              children: eO.intl.string(eO.t.HEm04J),
                          }),
                          (0, l.jsx)(ez.E, {
                              className: e2.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eO.intl.string(eO.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: e2.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(eT.A, { sticker: e, className: e2.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eY, { analyticsSection: L.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var e6 = n(404778),
    e8 = n(537652),
    e3 = n(962125),
    e7 = n(286509),
    e4 = n(414872),
    e9 = n(158045),
    te = n(631576),
    tt = n(369163),
    tn = n(123292),
    tl = n(631305),
    ti = n(468689),
    tr = n(931991),
    ts = n(473145),
    ta = n(625633),
    to = n(136123);
let tu = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, $.p)(),
        { analyticsLocations: c } = (0, Z.Ay)(),
        h = (0, d.bG)([ev.A], () => ev.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, tr.nr)(h),
        f = null != h && 0 === (0, ts.aG)(h.premiumTier) && !h.features.has(L.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, y.zV)(L.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: h?.id,
                channel_id: r?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [f, h, r, u, a, o, c, m]),
    null != h && m)
        ? f
            ? (0, l.jsxs)("div", {
                  className: s()(to.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(tt.v, { size: "md", color: "currentColor", className: to.Kk }),
                      (0, l.jsx)(ez.E, {
                          color: "interactive-text-default",
                          className: to.rf,
                          variant: "text-sm/normal",
                          children: eO.intl.format(eO.t.AXWla1, { count: (0, ts.aG)(L.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(tn.Q, {
                          variant: "primary",
                          text: eO.intl.string(eO.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, tl.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, ta.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(to.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(ey.t, {
                          size: "custom",
                          color: "currentColor",
                          className: to.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(ez.E, {
                          color: "interactive-text-default",
                          className: to.rf,
                          variant: "text-sm/normal",
                          children: eO.intl.string(eO.t.S83wgh),
                      }),
                      (0, l.jsx)(tn.Q, {
                          variant: "primary",
                          text: eO.intl.string(eO.t.bwNjug),
                          onClick: function () {
                              ((0, X.v8)(), ti.A.open(n, L.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var tc = n(240864),
    td = n(89366),
    th = n(202639);
let tm = (0, a.throttle)(
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
            { areOnlyNitroLockedSectionsVisible: o } = (0, tc.s)({
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
var tf = n(307301),
    tp = n(182922),
    tg = n(683522);
let tx = (0, ea.xI)(z.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tE = (0, ea.xI)(z.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    tS = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = J.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case ef.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case ef.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, eN.FD)(e) && !(0, eN.Xw)(e)) || (0, eN.Xw)(e)) {
                    let i = ev.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eO.intl.format(eO.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eA.A, { guild: i })));
                } else if ((0, eN.FD)(e)) {
                    let i = B.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eO.intl.format(eO.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(eT.A, { size: tE, sticker: (0, eN.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, eN.FD)(r) || (0, eN.Xw)(r)
                    ? (0, l.jsx)(eT.A, { isInteracting: !0, size: tx, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: tg.P,
                          children: (0, l.jsx)(tf.j, { size: "md", color: "currentColor", className: tg.K }),
                      });
        return (0, l.jsx)(tp.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, eN.FD)(r) || (0, eN.Xw)(r) ? a : null,
        });
    });
var ty = n(140735),
    tC = n(194261),
    tA = n(442433),
    tI = n(304072),
    tb = n(513902);
let tv = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: tb.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tC.LockIcon, { size: "xxs", color: "currentColor", className: tb.I }),
    });
};
var tN = n(777371);
let tT = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: r = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: p,
            onInspect: g,
            onSelect: x,
            rowIndex: E,
            stickerClassName: S,
            stickerDescriptors: y,
            stickerPadding: C,
            stickerSize: A,
            ownedStickerPacks: I,
            enlargeOnInteraction: b = !1,
            channel: v,
            currentUser: N,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: _ = !1,
        } = e,
        { location: k } = (0, $.p)(),
        R = A + 2 * C,
        O = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${R}px)`,
                height: R,
                paddingRight: t ? void 0 : R,
            }),
            [t, c, R],
        ),
        w = i.useMemo(() => ({ width: A, height: A, padding: C }), [C, A]),
        [M, P] = (0, tI.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tN.nM,
        style: O,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ef.op.STICKER && b && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: R, onFocus: O, ...D } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case ef.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...D,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tN.wP, S, { [tN.Kj]: u }),
                                innerRef: C,
                                tabIndex: R,
                                onFocus: O ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === ef.op.CREATE_STICKER &&
                                        (es.default.track(L.HAw.OPEN_MODAL, {
                                            type: L.JJy.CREATE_STICKER_MODAL,
                                            location: k,
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
                                style: w,
                                children: [
                                    !b && (0, l.jsx)("div", { className: tN.fw }),
                                    (0, l.jsx)("div", {
                                        className: tN.P0,
                                        children: (0, l.jsx)(tf.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tN.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(ez.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eO.intl.string(eO.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ef.op.STICKER: {
                    let a = (T ? (0, ej.W$)(e.sticker, N, v) : ej.Ux.SENDABLE) !== ej.Ux.SENDABLE,
                        o = j && a && !_,
                        m = !j && a,
                        g = t && null != I && (0, eN.FD)(e.sticker) && !I.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...D, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tN.yI, S, { [tN.PV]: u, [tN.TV]: M === e.sticker.id }),
                            innerRef: C,
                            tabIndex: R,
                            onFocus: O ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === ef.op.STICKER && !(0, eN.o1)(e.sticker.id) && P(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tA.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: w,
                            "data-type": eg.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(ty.A, { children: (0, eT.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !b && (0, l.jsx)("div", { className: tN.fw }),
                                        (0, l.jsx)(eT.A, {
                                            className: s()(tN.SI, {
                                                [tN.ot]:
                                                    b && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tN.Q$]: c,
                                                [tN.No]: m,
                                                [tN.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: b,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: A,
                                        }),
                                        g ? (0, l.jsx)(tv, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tN.MC,
                                                  children: (0, l.jsx)(tC.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tN.hz,
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
function tj(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, ej.W$)(t.sticker, n, l)) {
        case ej.Ux.SENDABLE:
            i(t);
            break;
        case ej.Ux.SENDABLE_WITH_PREMIUM:
            (es.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: L.JJy.STICKER_PICKER_UPSELL,
                location_object: L.ZSU.STICKER,
            }),
                eh(!0));
        case ej.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case ej.Ux.NONSENDABLE:
    }
}
var t_ = n(457231);
let tk = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tR = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tO = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tL = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tw = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tM = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tP = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tD = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tU = (0, ea.xI)(z.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tV = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tW = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tF = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tB = tV + 2 + tF,
    tK = tW + 2 + tF,
    tG = [tO, tw, tM, tP],
    tH = [tL, tw, tM, tP],
    tz = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tq = "sticker-search-nitro",
    t$ = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tQ(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: t_.yB,
        children: t$.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: t_.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(ez.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tZ(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tJ(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tX = function (e) {
    let {
            collapsedStickersCategories: t,
            gridWidth: n,
            filteredStickers: r,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            rowCount: f,
            rowCountBySection: p,
            stickersCategories: g,
            stickersGrid: x,
            channel: E,
            ref: S,
        } = e,
        y = i.useRef(!1),
        C = i.useRef(null),
        [A, I] = J.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], H.x),
        { analyticsLocations: b } = (0, Z.Ay)(Q.A.STICKER_PICKER),
        v = (0, X.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([B.A], () => B.A.getPremiumPacks()),
        T = (0, d.bG)([er.default], () => er.default.getCurrentUser()),
        j = e9.Ay.canUseCustomStickersEverywhere(T),
        [_, k] = i.useState(0),
        R = en("web.StickerPickerList"),
        O = i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
        w = ek(g, T, E, R),
        {
            renderRow: M,
            renderSection: P,
            renderSectionFooter: D,
            sectionFooterHeight: U,
            renderSectionHeader: V,
            sectionHeaderHeight: W,
        } = (function (e) {
            let {
                    collapsedStickersCategories: t,
                    gridWidth: n,
                    onSelectSticker: r,
                    getStickerItemProps: a,
                    getStickerRowProps: o,
                    gutterWidth: u,
                    inspectedStickerPosition: c,
                    isScrolling: d,
                    isUsingKeyboardNavigation: h,
                    stickersGrid: m,
                    stickersCategories: f,
                    filteredStickers: p,
                    ownedStickerPacks: g,
                    channel: x,
                    currentUser: E,
                    activeSectionIndex: S,
                    upsellRestyleEnabled: y,
                } = e,
                C = (0, $.p)(),
                { handleStickerInspect: A, handleSelect: I } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, $.p)(),
                        s = (0, X.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (J.bM.setActiveCategoryIndex(l),
                                J.bM.setInspectedExpressionPosition(n, t, eg.t.MOUSE_EVENT),
                                e.type === ef.op.STICKER && J.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== ef.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? L.ZSU.STICKER_PICKER_VIEW_ALL : L.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, ej.W$)(a, l, n) !== ej.Ux.SENDABLE
                                    ? tj({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, eN.o1)(a.id)
                                          ? (0, te.vr)(a.id)
                                          : ((0, em.Dt)({ sticker: a, location: { ...o, object: L.ZSU.STICKER } }),
                                            (0, te.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [b, v] = i.useState(!1),
                N = i.useCallback((e) => {
                    ei.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tZ(i, p)) || (null == p && f[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tT,
                                  {
                                      getStickerItemProps: a,
                                      getStickerRowProps: o,
                                      gutterWidth: u,
                                      inspectedStickerPosition: c,
                                      isScrolling: d,
                                      isUsingKeyboardNavigation: h,
                                      onInspect: A,
                                      onSelect: I,
                                      rowIndex: e,
                                      stickerClassName: t_.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tk ? tV : tW,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tR,
                                      ownedStickerPacks: g,
                                      isDisplayingIndividualStickers: !0,
                                      channel: x,
                                      currentUser: E,
                                      upsellRestyleEnabled: y,
                                      isSectionNitroLocked: r,
                                  },
                                  e,
                              )
                            : null;
                    },
                    [m, a, o, u, c, d, h, A, I, n, g, x, E, p, f, y],
                ),
                j = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
                    },
                    [f],
                ),
                _ = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                    },
                    [f],
                ),
                k = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = y && tZ(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && j(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [t_.cW]: r, [t_.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [p, f, y, j],
                ),
                R = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            es.default.track(L.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: C?.location,
                                tab: eR.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            N(l));
                    },
                    [C, t, N],
                ),
                O = i.useCallback(
                    (e) => {
                        let n = f[e];
                        if (null != p) {
                            let { sendable: n, sendableWithPremium: i } = p;
                            if (0 === e && n.length > 0) return null;
                            if (y && tZ(e, p)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    e7.A,
                                    {
                                        className: s()(t_.jH, t_.M0, { [t_.RA]: !n, [t_.sp]: n }),
                                        "aria-label": eO.intl.string(eO.t.pAF6xE),
                                        icon: (0, l.jsx)(eX.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tq),
                                        onClick: () => R(tq, { isStickerPack: !1 }),
                                        children: eO.intl.string(eO.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: t_.yF, children: (0, l.jsx)(e6.c, {}) }) : null,
                                    (0, l.jsx)(
                                        e7.A,
                                        {
                                            className: t_.jH,
                                            "aria-label": eO.intl.string(eO.t.wbfJFh),
                                            children: eO.intl.string(eO.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = f[e]?.isNitroLocked === !0,
                            r = s()(t_.jH, { [t_.M0]: y, [t_.RA]: i && S !== e, [t_.sp]: i && S === e });
                        switch (n.type) {
                            case ef.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    e7.A,
                                    {
                                        className: r,
                                        "aria-label": eO.intl.formatToPlainString(eO.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ex.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => R(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ef.Z2.RECENT:
                                return (0, l.jsx)(
                                    e7.A,
                                    {
                                        className: r,
                                        "aria-label": eO.intl.formatToPlainString(eO.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(eE.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => R(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ef.Z2.GUILD:
                            case ef.Z2.EMPTY_GUILD_UPSELL: {
                                let e = ev.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    e7.A,
                                    {
                                        className: r,
                                        "aria-label": eO.intl.formatToPlainString(eO.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eA.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => R(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case ef.Z2.PACK: {
                                let e = B.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    e7.A,
                                    {
                                        className: r,
                                        "aria-label": eO.intl.formatToPlainString(eO.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eT.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, eN.Id)(e),
                                        }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => R(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                        }
                    },
                    [S, t, p, f, R, y],
                ),
                w = i.useCallback(
                    (e) => {
                        if (null != p) {
                            let { sendable: t, sendableWithPremium: n } = p;
                            return 0 === e && t.length > 0
                                ? 0
                                : y && tZ(e, p)
                                  ? tU + 16
                                  : tU + (t.length > 0 && n.length > 0 ? tD : 0);
                        }
                        return tU + 16 * (f[e]?.isNitroLocked === !0);
                    },
                    [p, f, y],
                );
            return {
                renderRow: T,
                renderSection: k,
                renderSectionHeader: O,
                sectionHeaderHeight: w,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != p)
                            return y
                                ? tZ(e, p)
                                    ? (0, l.jsx)("div", { className: t_.pQ })
                                    : tJ(e, p)
                                      ? (0, l.jsx)(e4.Ay, { className: t_.$2 })
                                      : null
                                : null;
                        let n = f[e],
                            i = t.has(n.id),
                            r =
                                n.type !== ef.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          tu,
                                          {
                                              className: t_.Ij,
                                              guildId: n.id,
                                              channel: x,
                                              shouldTrackUpsellViewed: !b,
                                              setTrackedUpsellViewed: v,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            _(e)
                                ? (s = (0, l.jsx)(e4.Ay, { className: t_.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: t_.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, b, y, _, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return y ? (tZ(e, p) ? 33 : tJ(e, p) ? e4.kg : 0) : 0;
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== ef.Z2.EMPTY_GUILD_UPSELL || l || (i += tz),
                            _(e) ? (i += e4.kg) : j(e) && (i += 33),
                            i
                        );
                    },
                    [p, y, f, t, _, j],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: w,
            stickersGrid: x,
            isScrolling: y,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            inspectedStickerPosition: I,
            filteredStickers: r,
            ownedStickerPacks: O,
            channel: E,
            currentUser: T,
            activeSectionIndex: _,
            upsellRestyleEnabled: R,
        }),
        { onScroll: F, upsell: K } = (function (e) {
            let {
                    upsellRestyleEnabled: t,
                    canUseStickersEverywhere: n,
                    listRef: r,
                    searchQuery: s,
                    categories: a,
                    sectionHeaderHeight: o,
                    sectionFooterHeight: c,
                } = e,
                { location: d } = (0, $.p)(),
                { analyticsLocations: h } = (0, Z.Ay)(Q.A.STICKER_PICKER),
                [m, f] = i.useState(!1),
                p = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                g = i.useCallback(
                    (e) => {
                        t &&
                            tm({
                                listRef: r,
                                searchQuery: s,
                                nitroLockedSectionStates: p,
                                scrollTop: e,
                                sectionHeaderHeight: o,
                                sectionFooterHeight: c,
                                setShowUpsell: f,
                            });
                    },
                    [t, r, p, s, c, o],
                ),
                x = m && "" === s && t;
            if (
                (i.useEffect(() => {
                    !x ||
                        n ||
                        u.Fr ||
                        (es.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: e1.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eq.sq)(L.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, e$.uq)(e1.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = eO.intl.format(eO.t.eontIh, {
                    nitroTierName: (0, e9.Dd)(e1.PremiumTypes.TIER_2),
                    onClick: () => {
                        (es.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: L.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            eh(!0));
                    },
                }),
                S = (0, e9.LE)((0, td.qD)(), e1.pe.TIER_2) ?? eO.intl.string(eO.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(th.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: L.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: R,
            canUseStickersEverywhere: j,
            listRef: C,
            searchQuery: v,
            categories: w,
            sectionHeaderHeight: W,
            sectionFooterHeight: U,
        });
    i.useEffect(() => {
        R && F(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [R, F, p]);
    let G = (0, Y.Fk)({
            activeCategoryIndex: A,
            isScrolling: y,
            listRef: C,
            onActiveCategoryIndexChange: J.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: v,
        }),
        z = i.useCallback((e) => {
            let t = C.current?.getSectionDescriptors();
            null == t ||
                k(
                    Math.max(
                        t.findLastIndex((t) => t.offset.top <= e),
                        0,
                    ),
                );
        }, []);
    i.useLayoutEffect(() => {
        R && z(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [R, z, r, p]);
    let q = i.useCallback(
        (e) => {
            (G(e), R && z(e), F(e));
        },
        [G, F, z, R],
    );
    return (
        (0, Y.FV)({ searchQuery: v, activeCategoryIndex: A, listRef: C }),
        i.useImperativeHandle(
            S,
            () => ({
                scrollTo: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollTo(...t);
                },
                getRowDescriptors: () => C.current?.getRowDescriptors() ?? [],
                getSectionDescriptors: () => C.current?.getSectionDescriptors() ?? [],
                scrollToSectionTop: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollToSectionTop(...t);
                },
                scrollRowIntoView: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollRowIntoView(...t);
                },
                getScrollerNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.getScrollerNode(...t);
                },
                scrollIntoViewNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollIntoViewNode(...t);
                },
                getListDimensions: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                },
            }),
            [],
        ),
        (0, l.jsx)(Z.f5, {
            value: b,
            children: (0, l.jsxs)("div", {
                className: t_.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: t_.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(e8.A, {
                                      message: eO.intl.string(eO.t["zc+LQd"]),
                                      className: t_.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tQ, { onSuggestionClick: (e) => (0, X.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(e3.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tH : tG,
                                      onScroll: q,
                                      renderRow: M,
                                      renderSection: P,
                                      renderSectionHeader: V,
                                      renderSectionFooter: D,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > tk ? tB : tK,
                                      sectionHeaderHeight: W,
                                      sectionFooterHeight: U,
                                      stickyHeaders: !0,
                                      ref: C,
                                  }),
                            K,
                        ],
                    }),
                    (0, l.jsx)(tS, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tY = n(602034),
    t0 = n(683438),
    t1 = n(909802);
let t2 = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, F.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, X.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            H.x,
        ),
        d = J.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = J.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], H.x),
        f = i.useCallback(
            (e) => {
                (J.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    J.bM.setInspectedExpressionPosition(0, 0),
                    J.bM.setSearchPlaceholder(null),
                    (0, X.Ri)(e),
                    n.current?.scrollTo(0));
            },
            [n],
        ),
        p = i.useCallback(() => {
            f("");
        }, [f]);
    return (
        i.useImperativeHandle(s, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: t1.i,
            children: (0, l.jsx)(t0.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eO.intl.string(eO.t.dt5h1C) : eO.intl.string(eO.t["Pck/4U"])),
                onClear: p,
                onKeyDown: t,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": e0.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tY.Aq)(e0.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
var t5 = n(802842),
    t6 = n(330422),
    t8 = n(609178);
function t3(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, $.p)(),
        { analyticsLocations: i } = (0, Z.Ay)(Q.A.STICKER_PICKER),
        r = (0, X.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(t8.A, {
        title: eO.intl.string(eO.t.Eukdgl),
        description: eO.intl.string(eO.t.sMmd7s),
        analyticsLocationSection: L.JJy.STICKER_PICKER_UPSELL,
        onClose: () => eh(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: e1.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: L.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, e9.mH)(e9.Ay.getSkuIdForPremiumType(e1.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(t6.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var t7 = n(789645),
    t4 = n(964486),
    t9 = n(420136),
    ne = n(939383);
function nt() {
    return eh(!1);
}
function nn(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, Z.Ay)(Q.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (es.default.track(L.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: L.JJy.STICKER_PICKER_UPSELL,
            type: e1.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eq.sq)(L.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, e$.uq)(e1.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, t4.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, el.V)(),
        o = (0, eQ.O)(),
        u = a?.subscriptionTrial?.skuId === e1.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": eO.intl.string(eO.t.jJG1pl),
        className: s()(t9.VL, { [t9.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eZ.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: nt,
                      type: e1.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? e1.pe.TIER_2,
                      children: u
                          ? eO.intl.format(eO.t.MAGagw, {
                                planName: (0, e9.RH)(e1.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eO.intl.format(eO.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: t9.Tn, src: ne, alt: eO.intl.string(eO.t.do7AoM) }),
                          (0, l.jsx)(ez.E, {
                              className: t9.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eO.intl.string(eO.t.jJG1pl),
                          }),
                          (0, l.jsx)(ez.E, {
                              className: t9.GR,
                              variant: "text-md/normal",
                              children: eO.intl.format(eO.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eY, { analyticsSection: L.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: t9.kz,
                onClick: nt,
                "aria-label": eO.intl.string(eO.t.cpT0Cq),
                children: (0, l.jsx)(t7.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var nl = n(970099);
let ni = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    nr = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    ns = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    na = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    no = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    nu = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    nc = (0, ea.xI)(z.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    nd = nu + 2,
    nh = nc + 2,
    nm = G()(em.Qz, 200),
    nf = G()(em.HA, 200);
function np(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        u = en("web.StickerPicker"),
        { location: c } = (0, $.p)(),
        { analyticsLocations: h } = (0, Z.Ay)(Q.A.STICKER_PICKER),
        f = (0, el.V)()?.subscriptionTrial != null,
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        E = ed((e) => e.showPremiumUpsell),
        [S, y] = (0, X.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], H.x),
        C = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ec }));
    let A = (0, F.pD)(r),
        I = (0, d.bG)([er.default], () => er.default.getCurrentUser()),
        b = ek(A, I, r, u),
        v = 0 === b.filter((e) => e.type !== ef.Z2.EMPTY_GUILD_UPSELL).length,
        N = (0, Y.oV)({
            gridWrapperRef: p,
            containerWidth: t,
            showingEmptyState: v,
            listPaddingLeft: nr,
            listScrollbarWidth: 8,
        }),
        T = ei.tP.useSetting(),
        j = i.useMemo(() => new Set(T), [T]),
        _ = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        t5.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, ej.W$)(e, t, n);
                                r === ej.Ux.SENDABLE ? l.push(e) : r === ej.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(S, I, r),
            [S, I, r],
        ),
        k = (0, F.Gc)(),
        R = (0, F.UT)(),
        O = (0, d.cf)([B.A], () => B.A.getAllGuildStickers()),
        { sendable: w = [], sendableWithPremium: M = [] } = _ ?? {},
        P = w.length + M.length,
        D = i.useCallback(
            (e) => {
                ("" === S ? (0, em.ry)(e) : (0, em.nQ)(e, S, P), s(e.sticker, ef.D6.STICKER_PICKER));
            },
            [s, S, P],
        ),
        U = null != N && N > ni,
        {
            rowCount: V,
            rowCountBySection: W,
            stickersGrid: K,
            gutterWidth: G,
            columnCounts: z,
        } = (0, F._c)({
            filteredStickers: _,
            stickersCategories: b,
            collapsedStickersCategories: j,
            collapsePremiumSearchSection: u && j.has(tq),
            listWidth: N,
            listPaddingRight: ns,
            stickerNodeMargin: U ? na : no,
            stickerNodeWidth: U ? nd : nh,
        }),
        {
            getItemProps: q,
            getRowProps: et,
            gridContainerProps: ea,
            handleGridContainerKeyDown: eo,
            isUsingKeyboardNavigation: eu,
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
                u = (0, $.p)(),
                c = i.useCallback(
                    (e) => {
                        o(e, u);
                    },
                    [o, u],
                ),
                d = i.useCallback(
                    (e, t) => {
                        a(e, t, eg.t.GRID_NAVIGATOR_EVENT);
                    },
                    [a],
                ),
                {
                    gridDispatch: h,
                    getItemProps: m,
                    getRowProps: f,
                    gridContainerProps: p,
                    handleGridContainerKeyDown: g,
                    isUsingKeyboardNavigation: x,
                } = (0, Y.Ff)({
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
                                l !== eg.t.GRID_NAVIGATOR_EVENT && h({ type: ep.n.SET_FOCUSED_POSITION, x: t, y: n });
                            },
                        ),
                    [h, r],
                ),
                {
                    getItemProps: m,
                    getRowProps: f,
                    gridContainerProps: p,
                    handleGridContainerKeyDown: g,
                    isUsingKeyboardNavigation: x,
                }
            );
        })({
            columnCounts: z,
            stickersListRef: g,
            stickersGrid: K,
            onGridItemSelect: i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case ef.op.CREATE_STICKER:
                            (es.default.track(L.HAw.OPEN_MODAL, { type: L.JJy.CREATE_STICKER_MODAL, location: c }),
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
                        case ef.op.STICKER:
                            if (null == e.sticker) break;
                            tj({ descriptor: e, currentUser: I, channel: r, onSelect: D });
                    }
                },
                [c, I, r, D],
            ),
            store: J.bM,
            setInspectedStickerPosition: J.bM.setInspectedExpressionPosition,
            gridNavigatorId: e0.lq,
        });
    function ec() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = B.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != O &&
            [...O.values()].forEach((e) => {
                l += e.length;
            }),
            (0, em.p4)({
                containerWidth: t,
                favoriteStickers: k,
                frequentlyUsedStickers: R,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    (i.useEffect(
        () => () => {
            (J.bM.resetStoreState(), eh(!1));
        },
        [],
    ),
        i.useEffect(() => {
            ("" === C.current && "" !== S && (0, em.Fg)(), (C.current = S));
        }, [S]),
        i.useEffect(() => {
            0 === P ? nm(S) : nf(S, P, y);
        }, [S, P, y]),
        i.useLayoutEffect(() => {
            x.current?.focus();
        }, []));
    let ex = i.useCallback(() => {
        (a(),
            es.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, { location_section: L.JJy.STICKER_PICKER_UPSELL }),
            (0, ee.e)());
    }, [a]);
    return (0, l.jsxs)(Z.f5, {
        value: h,
        children: [
            !(f && v) &&
                (0, l.jsx)("div", {
                    className: nl.wx,
                    children: (0, l.jsx)(t2, { ref: x, onKeyDown: eo, stickersListRef: g, channel: r }),
                }),
            v
                ? (0, l.jsx)(e5, { className: nl.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: p,
                              className: nl.AD,
                              id: e0.lq,
                              ...ea,
                              children:
                                  null != N
                                      ? (0, l.jsx)(tX, {
                                            ref: g,
                                            collapsedStickersCategories: j,
                                            filteredStickers: _,
                                            getStickerItemProps: q,
                                            getStickerRowProps: et,
                                            gridWidth: N,
                                            gutterWidth: G,
                                            isUsingKeyboardNavigation: eu,
                                            onSelectSticker: D,
                                            rowCount: V,
                                            rowCountBySection: W,
                                            stickersCategories: b,
                                            stickersGrid: K,
                                            channel: r,
                                        })
                                      : null,
                          }),
                          (0, l.jsx)(eG, { stickersListRef: g, channel: r }),
                      ],
                  }),
            E && (u ? (0, l.jsx)(t3, { onUpsellClicked: a }) : (0, l.jsx)(nn, { onLearnMore: ex })),
        ],
    });
}
let ng = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, F.XQ)(),
        (0, l.jsx)("div", {
            className: nl.iE,
            id: e0.GX,
            "aria-labelledby": e0.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(q.y, { className: nl.Mz }) : (0, l.jsx)(np, { ...n, ref: t }),
        })
    );
};
var nx = n(964404),
    nE = n(712687),
    nS = n(625494),
    ny = n(49999),
    nC = n(732139),
    nA = n(307731),
    nI = n(818625);
let nb = 498 + nC.as.MEDIUM,
    nv = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(L.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, X.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nI.oi, nI.pc, { [nI.Mv]: t }),
        });
    }),
    nN = i.memo(function (e) {
        let t,
            {
                positionTargetRef: n,
                hideGifFavorites: r,
                onSelectGIF: a,
                onSelectEmoji: f,
                onSelectSticker: b,
                onSelectSound: v,
                channel: N,
                type: T,
                position: j,
                align: _,
                positionLayerClassName: k,
                closeOnModalOuterClick: R = !1,
                parentModalKey: O,
            } = e,
            w = i.useRef(null),
            K = i.useRef(!1),
            G = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: z, handleDrawerResizeHandleMouseDown: q } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([nx.Ay], () => nx.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eR.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eR.wp.MIN:
                                return 498;
                            case eR.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eR.wp.MAX : e <= 498 ? eR.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
                        },
                        [n, s],
                    ),
                    f = (0, S.A)({
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
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), f(e));
                            },
                            [t, f],
                        ),
                    }
                );
            })({
                positionContainerRef: w,
                drawerRef: H,
                orientation: "left" === _ ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            $ = (0, X.RQ)((e) => e.activeView),
            Q = (0, F.ZO)(N),
            { renderWindow: Z, windowDispatch: J } = i.useContext(U.Ay),
            Y = (0, d.bG)([B.A], () => !B.A.hasLoadedStickerPacks),
            ee = (0, V.tj)({ location: "expression_picker" }),
            [et, en] = i.useState(!1),
            el = (0, d.bG)([nE.A], () => nE.A.isOpen()),
            ei = null != O,
            er = (0, m.useIsModalAtTop)(O ?? ""),
            es = T.gifs?.allowSending && !u.Fr && null != a,
            ea = T.stickers?.allowSending && null != b,
            eo = !T.expressionPicker?.onlyEmojis && (es || ea),
            eu = eo && !et,
            ec =
                ((t = (0, I.H)("expression_picker")),
                i.useEffect(() => {
                    t && M();
                }, [t]),
                t),
            ed = i.useCallback(
                (e) => {
                    if ((!ei && (0, m.hasAnyModalOpen)()) || (ei && !(er && R)) || el || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eR.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === H.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, X.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && nS._.dispatchToLastSubscribed(L.jej.TEXTAREA_FOCUS);
                },
                [R, er, ei, el],
            ),
            eh = i.useCallback(() => {
                (0, X.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                $ === eR.kx.GIF && (0, X.v8)();
            }
            return (
                Z.addEventListener("mousedown", ed),
                Z.addEventListener("contextmenu", ed),
                J.subscribe(L.jej.POPOUT_CLOSE, eh),
                nS._.subscribe(L.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Z.removeEventListener("mousedown", ed),
                        Z.removeEventListener("contextmenu", ed),
                        J.unsubscribe(L.jej.POPOUT_CLOSE, eh),
                        nS._.unsubscribe(L.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [$, eh, ed, Z, J]),
            (0, p.tj)(w));
        let [em, ef] = (0, C.kn)(ee ? [h.M.SOUNDMOJI_BADGE] : []),
            [ep, eg] = i.useState(!1);
        (i.useEffect(() => {
            $ === eR.kx.SOUNDBOARD && eg(!0);
        }, [$]),
            i.useEffect(
                () => () => {
                    ep && ef(ny.i.TAKE_ACTION);
                },
                [ep, ef],
            ),
            i.useEffect(() => {
                (0, X.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ei && (0, m.hasAnyModalOpen)()) || (ei && !er)) && (0, X.v8)();
            }, [er, ei]),
            i.useEffect(() => {
                null != H.current &&
                    !K.current &&
                    ($ === eR.kx.EMOJI
                        ? G?.current?.onPickerOpen != null && (G?.current?.onPickerOpen(), (K.current = !0))
                        : $ === eR.kx.STICKER
                          ? G?.current?.onPickerOpen == null || Y || (G?.current?.onPickerOpen(), (K.current = !0))
                          : (y.Ay.trackWithMetadata(L.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: $,
                                badged: !1,
                            }),
                            (K.current = !0)));
            }));
        let ex = i.useCallback((e, t) => v?.(e, "emoji_picker", t), [v]),
            eE = i.useCallback((e, t) => v?.(e, "soundboard_picker", t), [v]),
            eS = T.soundmoji?.allowSending === !0 && null != v,
            ey = "left" === _ ? "right" : "left",
            eC = null != k ? k : "left" === _ ? nI.sj : nI.Jg,
            eA = es
                ? (0, l.jsx)(nv, {
                      id: nC.g9,
                      "aria-controls": nC.ni,
                      "aria-selected": $ === eR.kx.GIF,
                      isActive: $ === eR.kx.GIF,
                      viewType: eR.kx.GIF,
                      children: eO.intl.string(eO.t["6gUTsS"]),
                  })
                : null,
            eI = ea
                ? (0, l.jsx)(nv, {
                      id: e0.LD,
                      "aria-controls": e0.GX,
                      "aria-selected": $ === eR.kx.STICKER,
                      isActive: $ === eR.kx.STICKER,
                      autoFocus: !Q,
                      viewType: eR.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nI.dG, children: eO.intl.string(eO.t.nf1s3u) }),
                  })
                : null,
            eb = (0, l.jsx)(nv, {
                id: nC.k1,
                "aria-controls": nC.Do,
                "aria-selected": $ === eR.kx.EMOJI,
                isActive: $ === eR.kx.EMOJI,
                viewType: eR.kx.EMOJI,
                children: eO.intl.string(eO.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: L.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(D.nE, {
                className: s()(nI.T8, eC),
                targetRef: n,
                position: j,
                align: _,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nI.V6, { [nI.D0]: !eo }),
                        ref: w,
                        role: "dialog",
                        "aria-label": eO.intl.string(eO.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nI.jP,
                                  style: { width: null == z ? void 0 : z, [_]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: nI.Di, onMouseDown: q, style: { [ey]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(nI.FG, { [nI.$D]: et }),
                                          children: [
                                              eu
                                                  ? (0, l.jsx)("nav", {
                                                        className: nI.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nI.CT,
                                                            role: "tablist",
                                                            "aria-label": eO.intl.string(eO.t["2j4Vgd"]),
                                                            children: [
                                                                eA,
                                                                eI,
                                                                eb,
                                                                ee &&
                                                                    eS &&
                                                                    (0, l.jsx)(nv, {
                                                                        id: nC.N6,
                                                                        "aria-controls": nC.AA,
                                                                        "aria-selected": $ === eR.kx.SOUNDBOARD,
                                                                        isActive: $ === eR.kx.SOUNDBOARD,
                                                                        viewType: eR.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nI.sd,
                                                                            children: [
                                                                                eO.intl.string(eO.t.EHlAMc),
                                                                                null != em &&
                                                                                    (0, l.jsx)(g.E, {
                                                                                        type: "new",
                                                                                        variant: "primary",
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              $ === eR.kx.STICKER && ea
                                                  ? (0, l.jsx)(ng, {
                                                        isLoading: Y,
                                                        channel: N,
                                                        containerWidth: z,
                                                        onSelectSticker: b,
                                                        closePopout: eh,
                                                        ref: (e) => {
                                                            G.current = e;
                                                        },
                                                    })
                                                  : null,
                                              $ === eR.kx.GIF && es
                                                  ? (0, l.jsx)(P.A, {
                                                        onSelectGIF: a,
                                                        hideFavorites: r,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              $ === eR.kx.EMOJI || T.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: N,
                                                        containerWidth: z,
                                                        emojiSize: null != z && z < nb ? nC.as.MEDIUM : nC.as.LARGE,
                                                        pickerIntention:
                                                            T.expressionPicker?.emojiIntention ??
                                                            nA.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == N || null != N.guild_id,
                                                        closePopout: eh,
                                                        onSelectEmoji: f,
                                                        onSelectSoundmoji: ex,
                                                        ref: (e) => {
                                                            G.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            T.soundmoji?.allowSending === !0,
                                                        isViewingEmojiPacks: et,
                                                        onViewEmojiPacksChange: ec ? en : void 0,
                                                    })
                                                  : null,
                                              $ === eR.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nI.z,
                                                        children: (0, l.jsx)(W.A, {
                                                            guildId: N.guild_id,
                                                            channel: N,
                                                            containerWidth: z,
                                                            onClose: eh,
                                                            onSelect: eE,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nI.BG, children: e }),
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
