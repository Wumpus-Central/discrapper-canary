n.d(t, {
    Bg: () => j,
    Ni: () => k,
    YH: () => L,
    ld: () => D,
    rf: () => M,
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
    _ = n(140465),
    m = n(125900),
    h = n(984933),
    g = n(430824),
    E = n(771845),
    b = n(594174),
    y = n(176354),
    O = n(111361),
    v = n(543241),
    S = n(304852),
    I = n(199257),
    T = n(149203),
    C = n(185923),
    A = n(388032);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var D = (function (e) {
    return (
        (e[(e.EMOJI = 0)] = "EMOJI"),
        (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (e[(e.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        e
    );
})({});
let x = [C.Z5.DISALLOW_EXTERNAL, C.Z5.DISALLOW_CUSTOM],
    L = (e) => {
        var t;
        let {
                channel: n,
                fallbackGuildId: i,
                collapsedSections: l,
                pickerIntention: f,
                emojiSearchResults: p,
                gridWidth: N,
                emojiPaddingHorizontal: R,
                emojiSpriteSize: D,
                shouldShowSoundmojiInEmojiPicker: L,
                showOnlyUnicode: j,
            } = e,
            M = (0, s.e7)([c.ZP], () => c.ZP.categories),
            k = r.useMemo(() => (j ? d.ZP.getCategories() : M), [M, j]),
            U = (0, s.e7)([g.Z], () => g.Z.getGuild(null == n ? void 0 : n.getGuildId()), [n]),
            G = null != (t = null == n ? void 0 : n.getGuildId()) ? t : i,
            Z = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(G), [G]),
            F = (0, v.NJ)(G),
            B = (0, v.wC)(G),
            V = (0, v.q5)(G),
            { topEmojis: H, newlyAddedEmojis: Y } = (0, I.Z)(G, f),
            W = (0, s.Wu)([E.ZP], () => E.ZP.getFlattenedGuildIds(), []),
            K = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            z = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
            q = (0, O.I5)(z),
            Q = (0, _.B4)(),
            X = Z.getCustomEmoji(),
            J = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            $ = r.useMemo(() => a().groupBy(X, J), [X]),
            ee = (0, m.g2)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                t = [],
                r = [],
                i = [],
                s = 0,
                c = 0;
            if (null != Z && null != N) {
                let u = Math.floor(N / (D + 2 * R)),
                    _ = 3 * u,
                    m = (o, d) => {
                        let p = new Map(),
                            m = l.has(d.sectionId),
                            [h, g] = a().partition(o, (e) => {
                                let t = y.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: n,
                                    intention: f,
                                });
                                return p.set(e, t), !t;
                            }),
                            E = h.concat(g),
                            b = d.guild,
                            O = E.length > _ && null != b && d.isNitroLocked,
                            S = O && !K.has(b.id);
                        S && E.splice(_ - 1);
                        let I = Math.ceil((O ? E.length + 1 : E.length) / u),
                            C = [];
                        for (let e = 0; e < I; e++) {
                            let t = e * u,
                                n = t + u,
                                a = E.slice(t, n).map((e, t) => {
                                    var n, r;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: D,
                                        isDisabled: p.get(e),
                                        rowIndex: c,
                                        columnIndex: t,
                                        visibleRowIndex: s,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === T.En.TOP_GUILD_EMOJI
                                                ? (0, v.IP)(
                                                      H,
                                                      Y,
                                                      null != (r = null != (n = e.id) ? n : e.uniqueName) ? r : e.name,
                                                  )
                                                : T.t0.NONE,
                                    };
                                });
                            if ((C.push(a), !m)) {
                                if (O && e === I - 1) {
                                    let t = C[e];
                                    t.push({
                                        type: 1,
                                        guildId: b.id,
                                        name: A.intl.string(A.t.NZI2Zk),
                                        size: D,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: s,
                                        sectionCollapsedToThreeRows: S,
                                    });
                                }
                                i.push(a.length), r.push(a), s++;
                            }
                            c++;
                        }
                        let N = m ? 0 : I,
                            R = w(P({}, d), { count: o.length });
                        t.push(R), e.push(N);
                    };
                if (null != p)
                    0 !== p.unlocked.length &&
                        m(p.unlocked, {
                            type: T.En.SEARCH_RESULTS,
                            sectionId: T.En.SEARCH_RESULTS,
                            count: p.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== p.locked.length &&
                            m(p.locked, {
                                type: T.En.PREMIUM_UPSELL,
                                categoryId: T.UX.PREMIUM_UPSELL,
                                sectionId: T.En.PREMIUM_UPSELL,
                                count: p.locked.length,
                                isNitroLocked: !q,
                            });
                else {
                    if (ee && L) {
                        let n = [
                            {
                                type: 2,
                                rowIndex: c,
                                columnIndex: 0,
                                visibleRowIndex: s,
                            },
                        ];
                        t.push({
                            type: T.En.SOUNDMOJI,
                            categoryId: T.UX.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: n.length,
                            isNitroLocked: !1,
                        });
                        let a = l.has(T.UX.SOUNDMOJI);
                        !a && (i.push(n.length), r.push(n), s++), e.push(+!a), c++;
                    }
                    for (let e of k)
                        if (e === T.UX.CUSTOM) {
                            let t = (t) => {
                                let r = $[t];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !x.includes(
                                            y.ZP.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != n ? n : h.ZP.getDefaultChannel(t),
                                                intention: f,
                                            }),
                                        ),
                                );
                                if (0 === i.length) return;
                                let a = g.Z.getGuild(t),
                                    s =
                                        Q ||
                                        (!q &&
                                            y.ZP.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: n,
                                                intention: f,
                                            }));
                                m(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: T.En.GUILD,
                                    sectionId: null != a ? a.id : (0, o.Z)(),
                                    count: i.length,
                                    isNitroLocked: s,
                                });
                            };
                            if ((null != U && t(U.id), (0, C.Gt)(f)))
                                for (let e of W) (null == U || U.id !== e) && t(e);
                        } else if (e === T.UX.TOP_GUILD_EMOJI) {
                            if (null != U) {
                                let { allEmojis: t } = (0, S.J)({
                                    topEmojis: H,
                                    newlyAddedEmojis: Y,
                                });
                                t.length > 0 &&
                                    m(t, {
                                        categoryId: e,
                                        guild: g.Z.getGuild(U.id),
                                        type: T.En.TOP_GUILD_EMOJI,
                                        sectionId: T.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === T.UX.RECENT) {
                            let t = (f === C.Hz.REACTION ? V : B).filter(
                                (e) =>
                                    !y.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: f,
                                    }),
                            );
                            m(t, {
                                categoryId: e,
                                type: T.En.RECENT,
                                sectionId: T.En.RECENT,
                                count: t.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === T.UX.FAVORITES) {
                            let t = F.filter(
                                (e) =>
                                    !y.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: f,
                                    }),
                            );
                            0 !== t.length &&
                                m(t, {
                                    categoryId: e,
                                    type: T.En.FAVORITES,
                                    sectionId: T.En.FAVORITES,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.ZP.getByCategory(e);
                            null != t &&
                                m(t, {
                                    categoryId: e,
                                    type: T.En.UNICODE,
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
        }, [Z, N, D, R, p, l, $, K, n, f, H, Y, q, k, U, W, V, B, F, Q, ee, L]);
    };
var j = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let M = (e) => {
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
                if (0 === e.type) {
                    let { emoji: i } = e;
                    if (null == i) return;
                    let s = y.ZP.getEmojiUnavailableReason({
                        emoji: i,
                        channel: n,
                        intention: t,
                    });
                    if (r.toggleFavorite)
                        return void (p.isFavoriteEmojiWithoutFetchingLatest(i) || null != s
                            ? (0, l.Xe)(i)
                            : (null == f || f(e), (0, l.$K)(i)));
                    if (s !== C.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                        if (s === C.Z5.PREMIUM_LOCKED)
                            return void o({
                                type: 0,
                                emojiDescriptor: e,
                            });
                        if (s === C.Z5.ROLE_SUBSCRIPTION_LOCKED && i.type === u.B.GUILD)
                            return void o({
                                type: 1,
                                guildId: i.guildId,
                                emojiId: i.id,
                            });
                        s !== C.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                            (null == d || d(e),
                            a({
                                emoji: i,
                                willClose: r.isFinalSelection,
                                isBurst: r.isBurst,
                            }));
                    }
                }
            },
            [n, t, a, o, p, d, f],
        );
    },
    k = (e) => {
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
