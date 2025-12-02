n.d(t, {
    Bg: () => G,
    Ni: () => B,
    YH: () => U,
    ld: () => M,
    rf: () => Z,
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
    T = n(392552),
    A = n(543241),
    C = n(304852),
    N = n(199257),
    P = n(149203),
    R = n(185923),
    w = n(388032);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var M = (function (e) {
    return (
        (e[(e.EMOJI = 0)] = "EMOJI"),
        (e[(e.CREATE_EMOJI = 1)] = "CREATE_EMOJI"),
        (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (e[(e.SOUNDMOJI = 3)] = "SOUNDMOJI"),
        e
    );
})({});
let k = [R.Z5.DISALLOW_EXTERNAL, R.Z5.DISALLOW_CUSTOM],
    U = (e) => {
        let {
                channel: t,
                collapsedSections: n,
                includeCreateEmojiButton: i = !0,
                pickerIntention: l,
                emojiSearchResults: f,
                gridWidth: p,
                emojiPaddingHorizontal: D,
                emojiSpriteSize: L,
                shouldShowSoundmojiInEmojiPicker: M,
                showOnlyUnicode: U,
            } = e,
            G = (0, s.e7)([c.ZP], () => c.ZP.categories),
            Z = r.useMemo(() => (U ? d.ZP.getCategories() : G), [G, U]),
            B = (0, s.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
            F = null == t ? null : t.getGuildId(),
            V = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(F), [F]),
            H = (0, A.NJ)(F),
            Y = (0, A.wC)(F),
            W = (0, A.q5)(F),
            { topEmojis: K, newlyAddedEmojis: z } = (0, N.Z)(F, l),
            q = (0, s.Wu)([y.ZP], () => y.ZP.getFlattenedGuildIds(), []),
            X = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { canCreateExpressions: Q } = (0, _.XJ)(B),
            J = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            $ = (0, I.I5)(J),
            ee = (0, m.B4)(),
            et = V.getCustomEmoji(),
            en = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            er = r.useMemo(() => a().groupBy(et, en), [et]),
            { enabled: ei, treatment: ea } = T.Z.useExperiment(
                { location: "EmojiPicker" },
                {
                    autoTrackExposure: !0,
                    disable: !Q,
                },
            ),
            eo = (0, h.g2)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                r = [],
                s = [],
                c = [],
                u = 0,
                _ = 0;
            if (null != V && null != p) {
                let m = Math.floor(p / (L + 2 * D)),
                    h = 3 * m,
                    y = (o, d) => {
                        let f = new Map(),
                            p = n.has(d.sectionId),
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
                            I = b.Z.getGuildId(),
                            C = d.sectionId === P.En.TOP_GUILD_EMOJI,
                            N = !C && null != O && I === O.id && y.length < (0, S.y4)(O),
                            R = C && y.length < m && !ei,
                            D = null != O && C && ei && ea === T.B.WITH_TOP_LIST && er[O.id].length < (0, S.y4)(O),
                            M = i && Q && null != O && (N || R || D);
                        M && D && y.length === m && y.shift();
                        let k = y.length > h && null != O && d.isNitroLocked,
                            U = k && !X.has(O.id);
                        if (U) {
                            let e = !ei && M;
                            y.splice(h - (e ? 2 : 1));
                        }
                        let G = ei && M && !p,
                            Z = Math.ceil((M || k ? y.length + 1 : y.length) / m),
                            B = [];
                        for (let e = 0; e < Z; e++) {
                            let t = 0 === e,
                                n = e * m - (G && e > 0 ? 1 : 0),
                                r = n + m - (G && t ? 1 : 0),
                                i = y.slice(n, r).map((e, n) => {
                                    var r, i;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: L,
                                        isDisabled: f.get(e),
                                        rowIndex: _,
                                        columnIndex: G && t ? n + 1 : n,
                                        visibleRowIndex: u,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === P.En.TOP_GUILD_EMOJI
                                                ? (0, A.IP)(
                                                      K,
                                                      z,
                                                      null != (i = null != (r = e.id) ? r : e.uniqueName) ? i : e.name,
                                                  )
                                                : P.t0.NONE,
                                    };
                                });
                            if (
                                (G &&
                                    t &&
                                    !p &&
                                    (i = [
                                        {
                                            type: 1,
                                            guildId: O.id,
                                            name: w.intl.string(w.t["Z/r7IS"]),
                                            size: L,
                                            rowIndex: _,
                                            columnIndex: 0,
                                            visibleRowIndex: u,
                                        },
                                        ...i,
                                    ]),
                                B.push(i),
                                !p)
                            ) {
                                if (!ei && M && e === Z - 1) {
                                    let t = B[e];
                                    t.push({
                                        type: 1,
                                        guildId: O.id,
                                        name: w.intl.string(w.t["Z/r7IS"]),
                                        size: L,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                    });
                                }
                                if (k && e === Z - 1) {
                                    let t = B[e];
                                    t.push({
                                        type: 2,
                                        guildId: O.id,
                                        name: w.intl.string(w.t.NZI2Zk),
                                        size: L,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: U,
                                    });
                                }
                                c.push(i.length), s.push(i), u++;
                            }
                            _++;
                        }
                        let F = p ? 0 : Z,
                            V = j(x({}, d), { count: o.length });
                        r.push(V), e.push(F);
                    };
                if (null != f)
                    0 !== f.unlocked.length &&
                        y(f.unlocked, {
                            type: P.En.SEARCH_RESULTS,
                            sectionId: P.En.SEARCH_RESULTS,
                            count: f.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== f.locked.length &&
                            y(f.locked, {
                                type: P.En.PREMIUM_UPSELL,
                                categoryId: P.UX.PREMIUM_UPSELL,
                                sectionId: P.En.PREMIUM_UPSELL,
                                count: f.locked.length,
                                isNitroLocked: !$,
                            });
                else {
                    if (eo && M) {
                        let t = [
                            {
                                type: 3,
                                rowIndex: _,
                                columnIndex: 0,
                                visibleRowIndex: u,
                            },
                        ];
                        r.push({
                            type: P.En.SOUNDMOJI,
                            categoryId: P.UX.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: t.length,
                            isNitroLocked: !1,
                        });
                        let i = n.has(P.UX.SOUNDMOJI);
                        !i && (c.push(t.length), s.push(t), u++), e.push(+!i), _++;
                    }
                    for (let e of Z)
                        if (e === P.UX.CUSTOM) {
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
                                    type: P.En.GUILD,
                                    sectionId: null != a ? a.id : (0, o.Z)(),
                                    count: i.length,
                                    isNitroLocked: s,
                                });
                            };
                            if ((null != B && n(B.id), (0, R.Gt)(l)))
                                for (let e of q) (null == B || B.id !== e) && n(e);
                        } else if (e === P.UX.TOP_GUILD_EMOJI) {
                            if (null != B) {
                                let { allEmojis: t } = (0, C.J)({
                                    topEmojis: K,
                                    newlyAddedEmojis: z,
                                });
                                t.length > 0 &&
                                    y(t, {
                                        categoryId: e,
                                        guild: E.Z.getGuild(B.id),
                                        type: P.En.TOP_GUILD_EMOJI,
                                        sectionId: P.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === P.UX.RECENT) {
                            let n = (l === R.Hz.REACTION ? W : Y).filter(
                                (e) =>
                                    !v.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l,
                                    }),
                            );
                            y(n, {
                                categoryId: e,
                                type: P.En.RECENT,
                                sectionId: P.En.RECENT,
                                count: n.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === P.UX.FAVORITES) {
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
                                    type: P.En.FAVORITES,
                                    sectionId: P.En.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.ZP.getByCategory(e);
                            null != t &&
                                y(t, {
                                    categoryId: e,
                                    type: P.En.UNICODE,
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
        }, [V, p, L, D, f, n, ei, ea, er, i, Q, X, t, l, K, z, $, Z, B, q, W, Y, H, ee, eo, M]);
    };
var G = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let Z = (e) => {
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
                        if (c === R.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === R.Z5.PREMIUM_LOCKED)
                            return void a({
                                type: 0,
                                emojiDescriptor: e,
                            });
                        if (c === R.Z5.ROLE_SUBSCRIPTION_LOCKED && s.type === u.B.GUILD)
                            return void a({
                                type: 1,
                                guildId: s.guildId,
                                emojiId: s.id,
                            });
                        if (c === R.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
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
    B = (e) => {
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
