n.d(t, {
    Bg: () => G,
    Ni: () => Z,
    YH: () => U,
    ld: () => j,
    rf: () => B,
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
    _ = n(28546),
    p = n(357156),
    h = n(140465),
    m = n(125900),
    g = n(984933),
    E = n(430824),
    b = n(914010),
    y = n(771845),
    O = n(594174),
    v = n(176354),
    I = n(267642),
    T = n(111361),
    S = n(392552),
    A = n(543241),
    C = n(304852),
    N = n(199257),
    R = n(149203),
    P = n(185923),
    D = n(388032);
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
function L(e) {
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
function M(e, t) {
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
let k = [P.Z5.DISALLOW_EXTERNAL, P.Z5.DISALLOW_CUSTOM],
    U = (e) => {
        let {
                channel: t,
                collapsedSections: n,
                includeCreateEmojiButton: i = !0,
                pickerIntention: l,
                emojiSearchResults: f,
                gridWidth: _,
                emojiPaddingHorizontal: w,
                emojiSpriteSize: x,
                shouldShowSoundmojiInEmojiPicker: j,
                showOnlyUnicode: U,
            } = e,
            G = (0, s.e7)([c.ZP], () => c.ZP.categories),
            B = r.useMemo(() => (U ? d.ZP.getCategories() : G), [G, U]),
            Z = (0, s.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
            F = null == t ? null : t.getGuildId(),
            V = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(F), [F]),
            H = (0, A.NJ)(F),
            Y = (0, A.wC)(F),
            W = (0, A.q5)(F),
            { topEmojis: K, newlyAddedEmojis: z } = (0, N.Z)(F, l),
            q = (0, s.Wu)([y.ZP], () => y.ZP.getFlattenedGuildIds(), []),
            X = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { canCreateExpressions: Q } = (0, p.XJ)(Z),
            J = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            $ = (0, T.I5)(J),
            ee = (0, h.B4)(),
            et = V.getCustomEmoji(),
            en = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            er = r.useMemo(() => a().groupBy(et, en), [et]),
            { enabled: ei, treatment: ea } = S.Z.useExperiment(
                { location: "EmojiPicker" },
                {
                    autoTrackExposure: !0,
                    disable: !Q,
                },
            ),
            eo = (0, m.g2)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                r = [],
                s = [],
                c = [],
                u = 0,
                p = 0;
            if (null != V && null != _) {
                let h = Math.floor(_ / (x + 2 * w)),
                    m = 3 * h,
                    y = (o, d) => {
                        let f = new Map(),
                            _ = n.has(d.sectionId),
                            [g, E] = a().partition(o, (e) => {
                                let n = v.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: l,
                                });
                                return f.set(e, n), !n;
                            }),
                            y = g.concat(E),
                            O = d.guild,
                            T = b.Z.getGuildId(),
                            C = d.sectionId === R.En.TOP_GUILD_EMOJI,
                            N = !C && null != O && T === O.id && y.length < (0, I.y4)(O),
                            P = C && y.length < h && !ei,
                            w = null != O && C && ei && ea === S.B.WITH_TOP_LIST && er[O.id].length < (0, I.y4)(O),
                            j = i && Q && null != O && (N || P || w);
                        j && w && y.length === h && y.shift();
                        let k = y.length > m && null != O && d.isNitroLocked,
                            U = k && !X.has(O.id);
                        if (U) {
                            let e = !ei && j;
                            y.splice(m - (e ? 2 : 1));
                        }
                        let G = ei && j && !_,
                            B = Math.ceil((j || k ? y.length + 1 : y.length) / h),
                            Z = [];
                        for (let e = 0; e < B; e++) {
                            let t = 0 === e,
                                n = e * h - (G && e > 0 ? 1 : 0),
                                r = n + h - (G && t ? 1 : 0),
                                i = y.slice(n, r).map((e, n) => {
                                    var r, i;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: x,
                                        isDisabled: f.get(e),
                                        rowIndex: p,
                                        columnIndex: G && t ? n + 1 : n,
                                        visibleRowIndex: u,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === R.En.TOP_GUILD_EMOJI
                                                ? (0, A.IP)(
                                                      K,
                                                      z,
                                                      null != (i = null != (r = e.id) ? r : e.uniqueName) ? i : e.name,
                                                  )
                                                : R.t0.NONE,
                                    };
                                });
                            if (
                                (G &&
                                    t &&
                                    !_ &&
                                    (i = [
                                        {
                                            type: 1,
                                            guildId: O.id,
                                            name: D.intl.string(D.t["Z/r7IS"]),
                                            size: x,
                                            rowIndex: p,
                                            columnIndex: 0,
                                            visibleRowIndex: u,
                                        },
                                        ...i,
                                    ]),
                                Z.push(i),
                                !_)
                            ) {
                                if (!ei && j && e === B - 1) {
                                    let t = Z[e];
                                    t.push({
                                        type: 1,
                                        guildId: O.id,
                                        name: D.intl.string(D.t["Z/r7IS"]),
                                        size: x,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                    });
                                }
                                if (k && e === B - 1) {
                                    let t = Z[e];
                                    t.push({
                                        type: 2,
                                        guildId: O.id,
                                        name: D.intl.string(D.t.NZI2Zk),
                                        size: x,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: U,
                                    });
                                }
                                c.push(i.length), s.push(i), u++;
                            }
                            p++;
                        }
                        let F = _ ? 0 : B,
                            V = M(L({}, d), { count: o.length });
                        r.push(V), e.push(F);
                    };
                if (null != f)
                    0 !== f.unlocked.length &&
                        y(f.unlocked, {
                            type: R.En.SEARCH_RESULTS,
                            sectionId: R.En.SEARCH_RESULTS,
                            count: f.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== f.locked.length &&
                            y(f.locked, {
                                type: R.En.PREMIUM_UPSELL,
                                categoryId: R.UX.PREMIUM_UPSELL,
                                sectionId: R.En.PREMIUM_UPSELL,
                                count: f.locked.length,
                                isNitroLocked: !$,
                            });
                else {
                    if (eo && j) {
                        let t = [
                            {
                                type: 3,
                                rowIndex: p,
                                columnIndex: 0,
                                visibleRowIndex: u,
                            },
                        ];
                        r.push({
                            type: R.En.SOUNDMOJI,
                            categoryId: R.UX.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let i = n.has(R.UX.SOUNDMOJI);
                        !i && (c.push(t.length), s.push(t), u++), e.push(+!i), p++;
                    }
                    for (let e of B)
                        if (e === R.UX.CUSTOM) {
                            let n = (n) => {
                                let r = er[n];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !k.includes(
                                            v.ZP.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != t ? t : g.ZP.getDefaultChannel(n),
                                                intention: l,
                                            }),
                                        ),
                                );
                                if (0 === i.length) return;
                                let a = E.Z.getGuild(n),
                                    s =
                                        ee ||
                                        (!$ &&
                                            v.ZP.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: t,
                                                intention: l,
                                            }));
                                y(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: R.En.GUILD,
                                    sectionId: null != a ? a.id : (0, o.Z)(),
                                    count: i.length,
                                    isNitroLocked: s,
                                });
                            };
                            if ((null != Z && n(Z.id), (0, P.Gt)(l)))
                                for (let e of q) (null == Z || Z.id !== e) && n(e);
                        } else if (e === R.UX.TOP_GUILD_EMOJI) {
                            if (null != Z) {
                                let { allEmojis: t } = (0, C.J)({
                                    topEmojis: K,
                                    newlyAddedEmojis: z,
                                });
                                t.length > 0 &&
                                    y(t, {
                                        categoryId: e,
                                        guild: E.Z.getGuild(Z.id),
                                        type: R.En.TOP_GUILD_EMOJI,
                                        sectionId: R.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === R.UX.RECENT) {
                            let n = (l === P.Hz.REACTION ? W : Y).filter(
                                (e) =>
                                    !v.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l,
                                    }),
                            );
                            y(n, {
                                categoryId: e,
                                type: R.En.RECENT,
                                sectionId: R.En.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === R.UX.FAVORITES) {
                            let n = H.filter(
                                (e) =>
                                    !v.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l,
                                    }),
                            );
                            0 !== n.length &&
                                y(n, {
                                    categoryId: e,
                                    type: R.En.FAVORITES,
                                    sectionId: R.En.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.ZP.getByCategory(e);
                            null != t &&
                                y(t, {
                                    categoryId: e,
                                    type: R.En.UNICODE,
                                    sectionId: e,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        }
                }
            }
            return {
                columnCounts: c,
                emojiGrid: s,
                rowCountBySection: e,
                sectionDescriptors: r,
            };
        }, [V, _, x, w, f, n, ei, ea, er, i, Q, X, t, l, K, z, $, B, Z, q, W, Y, H, ee, eo, j]);
    };
var G = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let B = (e) => {
        let {
                pickerIntention: t,
                selectedChannel: n,
                onSelectEmoji: i,
                setUpsellConfigs: a,
                emojiSelectAnalytics: o,
                trackEmojiFavorited: d,
            } = e,
            f = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return r.useCallback(
            (e, r) => {
                switch (e.type) {
                    case 1:
                        return void i({
                            emoji: void 0,
                            willClose: r.isFinalSelection,
                            isBurst: r.isBurst,
                        });
                    case 0: {
                        let { emoji: s } = e;
                        if (null == s) return;
                        let c = v.ZP.getEmojiUnavailableReason({
                            emoji: s,
                            channel: n,
                            intention: t,
                        });
                        if (r.toggleFavorite)
                            return void (f.isFavoriteEmojiWithoutFetchingLatest(s) || null != c
                                ? (0, l.Xe)(s)
                                : (null == d || d(e), (0, l.$K)(s)));
                        if (c === P.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === P.Z5.PREMIUM_LOCKED)
                            return void a({
                                type: 0,
                                emojiDescriptor: e,
                            });
                        if (c === P.Z5.ROLE_SUBSCRIPTION_LOCKED && s.type === u.B.GUILD)
                            return void a({
                                type: 1,
                                guildId: s.guildId,
                                emojiId: s.id,
                            });
                        if (c === P.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == o || o(e),
                            i({
                                emoji: s,
                                willClose: r.isFinalSelection,
                                isBurst: r.isBurst,
                            });
                    }
                }
            },
            [n, t, i, a, f, o, d],
        );
    },
    Z = (e) => {
        let { emojiListRef: t } = e,
            n = (0, _.Iu)((e) => e.searchQuery),
            i = r.useCallback(
                (e) => {
                    var n;
                    return null == (n = t.current) ? void 0 : n.scrollToSectionTop(e);
                },
                [t],
            );
        return r.useCallback(
            (e) => {
                "" !== n ? ((0, _.ql)(""), f.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n],
        );
    };
