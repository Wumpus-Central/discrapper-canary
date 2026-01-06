n.d(t, {
    Bg: () => U,
    Ni: () => Z,
    YH: () => k,
    ld: () => j,
    rf: () => G,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(772848),
    s = n(442837),
    l = n(80932),
    c = n(339085),
    u = n(906411),
    d = n(633302),
    f = n(806966),
    p = n(28546),
    _ = n(357156),
    m = n(140465),
    h = n(125900),
    g = n(984933),
    E = n(430824),
    b = n(914010),
    y = n(771845),
    O = n(594174),
    v = n(176354),
    S = n(267642),
    I = n(111361),
    T = n(543241),
    C = n(304852),
    A = n(199257),
    N = n(149203),
    P = n(185923),
    R = n(388032);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var j = (function (e) {
    return (
        (e[(e.EMOJI = 0)] = "EMOJI"),
        (e[(e.CREATE_EMOJI = 1)] = "CREATE_EMOJI"),
        (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (e[(e.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        e
    );
})({});
let M = [P.Z5.DISALLOW_EXTERNAL, P.Z5.DISALLOW_CUSTOM],
    k = (e) => {
        var t;
        let {
                channel: n,
                fallbackGuildId: i,
                collapsedSections: l,
                includeCreateEmojiButton: f = !0,
                pickerIntention: p,
                emojiSearchResults: w,
                gridWidth: x,
                emojiPaddingHorizontal: j,
                emojiSpriteSize: k,
                shouldShowSoundmojiInEmojiPicker: U,
                showOnlyUnicode: G,
            } = e,
            Z = (0, s.e7)([c.ZP], () => c.ZP.categories),
            F = r.useMemo(() => (G ? d.ZP.getCategories() : Z), [Z, G]),
            B = (0, s.e7)([E.Z], () => E.Z.getGuild(null == n ? void 0 : n.getGuildId()), [n]),
            V = null != (t = null == n ? void 0 : n.getGuildId()) ? t : i,
            H = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(V), [V]),
            Y = (0, T.NJ)(V),
            W = (0, T.wC)(V),
            K = (0, T.q5)(V),
            { topEmojis: z, newlyAddedEmojis: q } = (0, A.Z)(V, p),
            Q = (0, s.Wu)([y.ZP], () => y.ZP.getFlattenedGuildIds(), []),
            X = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { canCreateExpressions: J } = (0, _.XJ)(B),
            $ = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            ee = (0, I.I5)($),
            et = (0, m.B4)(),
            en = H.getCustomEmoji(),
            er = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            ei = r.useMemo(() => a().groupBy(en, er), [en]),
            ea = (0, h.g2)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                t = [],
                r = [],
                i = [],
                s = 0,
                c = 0;
            if (null != H && null != x) {
                let u = Math.floor(x / (k + 2 * j)),
                    _ = 3 * u,
                    m = (o, d) => {
                        let m = new Map(),
                            h = l.has(d.sectionId),
                            [g, E] = a().partition(o, (e) => {
                                let t = v.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: n,
                                    intention: p,
                                });
                                return m.set(e, t), !t;
                            }),
                            y = g.concat(E),
                            O = d.guild,
                            I = b.Z.getGuildId(),
                            C = d.sectionId === N.En.TOP_GUILD_EMOJI,
                            A = !C && null != O && I === O.id && y.length < (0, S.y4)(O),
                            P = C && y.length < u,
                            w = f && J && null != O && (A || P),
                            x = y.length > _ && null != O && d.isNitroLocked,
                            j = x && !X.has(O.id);
                        j && y.splice(_ - (w ? 2 : 1));
                        let M = Math.ceil((w || x ? y.length + 1 : y.length) / u),
                            U = [];
                        for (let e = 0; e < M; e++) {
                            let t = e * u,
                                n = t + u,
                                a = y.slice(t, n).map((e, t) => {
                                    var n, r;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: k,
                                        isDisabled: m.get(e),
                                        rowIndex: c,
                                        columnIndex: t,
                                        visibleRowIndex: s,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === N.En.TOP_GUILD_EMOJI
                                                ? (0, T.IP)(
                                                      z,
                                                      q,
                                                      null != (r = null != (n = e.id) ? n : e.uniqueName) ? r : e.name,
                                                  )
                                                : N.t0.NONE,
                                    };
                                });
                            if ((U.push(a), !h)) {
                                if (w && e === M - 1) {
                                    let t = U[e];
                                    t.push({
                                        type: 1,
                                        guildId: O.id,
                                        name: R.intl.string(R.t["Z/r7IS"]),
                                        size: k,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: s,
                                    });
                                }
                                if (x && e === M - 1) {
                                    let t = U[e];
                                    t.push({
                                        type: 2,
                                        guildId: O.id,
                                        name: R.intl.string(R.t.NZI2Zk),
                                        size: k,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: s,
                                        sectionCollapsedToThreeRows: j,
                                    });
                                }
                                i.push(a.length), r.push(a), s++;
                            }
                            c++;
                        }
                        let G = h ? 0 : M,
                            Z = L(D({}, d), { count: o.length });
                        t.push(Z), e.push(G);
                    };
                if (null != w)
                    0 !== w.unlocked.length &&
                        m(w.unlocked, {
                            type: N.En.SEARCH_RESULTS,
                            sectionId: N.En.SEARCH_RESULTS,
                            count: w.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== w.locked.length &&
                            m(w.locked, {
                                type: N.En.PREMIUM_UPSELL,
                                categoryId: N.UX.PREMIUM_UPSELL,
                                sectionId: N.En.PREMIUM_UPSELL,
                                count: w.locked.length,
                                isNitroLocked: !ee,
                            });
                else {
                    if (ea && U) {
                        let n = [
                            {
                                type: 3,
                                rowIndex: c,
                                columnIndex: 0,
                                visibleRowIndex: s,
                            },
                        ];
                        t.push({
                            type: N.En.SOUNDMOJI,
                            categoryId: N.UX.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: n.length,
                            isNitroLocked: !1,
                        });
                        let a = l.has(N.UX.SOUNDMOJI);
                        !a && (i.push(n.length), r.push(n), s++), e.push(+!a), c++;
                    }
                    for (let e of F)
                        if (e === N.UX.CUSTOM) {
                            let t = (t) => {
                                let r = ei[t];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !M.includes(
                                            v.ZP.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != n ? n : g.ZP.getDefaultChannel(t),
                                                intention: p,
                                            }),
                                        ),
                                );
                                if (0 === i.length) return;
                                let a = E.Z.getGuild(t),
                                    s =
                                        et ||
                                        (!ee &&
                                            v.ZP.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: n,
                                                intention: p,
                                            }));
                                m(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: N.En.GUILD,
                                    sectionId: null != a ? a.id : (0, o.Z)(),
                                    count: i.length,
                                    isNitroLocked: s,
                                });
                            };
                            if ((null != B && t(B.id), (0, P.Gt)(p)))
                                for (let e of Q) (null == B || B.id !== e) && t(e);
                        } else if (e === N.UX.TOP_GUILD_EMOJI) {
                            if (null != B) {
                                let { allEmojis: t } = (0, C.J)({
                                    topEmojis: z,
                                    newlyAddedEmojis: q,
                                });
                                t.length > 0 &&
                                    m(t, {
                                        categoryId: e,
                                        guild: E.Z.getGuild(B.id),
                                        type: N.En.TOP_GUILD_EMOJI,
                                        sectionId: N.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === N.UX.RECENT) {
                            let t = (p === P.Hz.REACTION ? K : W).filter(
                                (e) =>
                                    !v.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: p,
                                    }),
                            );
                            m(t, {
                                categoryId: e,
                                type: N.En.RECENT,
                                sectionId: N.En.RECENT,
                                count: t.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === N.UX.FAVORITES) {
                            let t = Y.filter(
                                (e) =>
                                    !v.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: p,
                                    }),
                            );
                            0 !== t.length &&
                                m(t, {
                                    categoryId: e,
                                    type: N.En.FAVORITES,
                                    sectionId: N.En.FAVORITES,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.ZP.getByCategory(e);
                            null != t &&
                                m(t, {
                                    categoryId: e,
                                    type: N.En.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return {
                columnCounts: i,
                emojiGrid: r,
                rowCountBySection: e,
                sectionDescriptors: t,
            };
        }, [H, x, k, j, w, l, ei, f, J, X, n, p, z, q, ee, F, B, Q, K, W, Y, et, ea, U]);
    };
var U = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let G = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                fallbackGuildId: i,
                onSelectEmoji: a,
                setUpsellConfigs: o,
                emojiSelectAnalytics: d,
                trackEmojiFavorited: f,
            } = e,
            p = (0, s.e7)([c.ZP], () => {
                var e;
                return c.ZP.getDisambiguatedEmojiContext(null != (e = null == n ? void 0 : n.getGuildId()) ? e : i);
            }, [i, n]);
        return r.useCallback(
            (e, r) => {
                switch (e.type) {
                    case 1:
                        return void a({
                            emoji: void 0,
                            willClose: r.isFinalSelection,
                            isBurst: r.isBurst,
                        });
                    case 0: {
                        let { emoji: i } = e;
                        if (null == i) return;
                        let s = v.ZP.getEmojiUnavailableReason({
                            emoji: i,
                            channel: n,
                            intention: t,
                        });
                        if (r.toggleFavorite)
                            return void (p.isFavoriteEmojiWithoutFetchingLatest(i) || null != s
                                ? (0, l.Xe)(i)
                                : (null == f || f(e), (0, l.$K)(i)));
                        if (s === P.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (s === P.Z5.PREMIUM_LOCKED)
                            return void o({
                                type: 0,
                                emojiDescriptor: e,
                            });
                        if (s === P.Z5.ROLE_SUBSCRIPTION_LOCKED && i.type === u.B.GUILD)
                            return void o({
                                type: 1,
                                guildId: i.guildId,
                                emojiId: i.id,
                            });
                        if (s === P.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == d || d(e),
                            a({
                                emoji: i,
                                willClose: r.isFinalSelection,
                                isBurst: r.isBurst,
                            });
                    }
                }
            },
            [n, t, a, o, p, d, f],
        );
    },
    Z = (e) => {
        let { emojiListRef: t } = e,
            n = (0, p.Iu)((e) => e.searchQuery),
            i = r.useCallback(
                (e) => {
                    var n;
                    return null == (n = t.current) ? void 0 : n.scrollToSectionTop(e);
                },
                [t],
            );
        return r.useCallback(
            (e) => {
                "" !== n ? ((0, p.ql)(""), f.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n],
        );
    };
