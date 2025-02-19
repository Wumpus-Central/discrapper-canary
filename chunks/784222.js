n.d(t, {
    Bg: () => G,
    Ni: () => Z,
    YH: () => U,
    ld: () => j,
    rf: () => B
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(772848),
    s = n(442837),
    l = n(80932),
    c = n(339085),
    u = n(906411),
    d = n(689789),
    f = n(407477),
    p = n(633302),
    _ = n(806966),
    h = n(28546),
    m = n(357156),
    g = n(140465),
    E = n(125900),
    v = n(984933),
    b = n(430824),
    y = n(914010),
    O = n(771845),
    S = n(594174),
    I = n(176354),
    T = n(111361),
    N = n(392552),
    A = n(543241),
    C = n(304852),
    R = n(199257),
    P = n(149203),
    w = n(185923),
    D = n(388032);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var j = (function (e) {
    return (e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
})({});
let U = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: i = !0, pickerIntention: l, emojiSearchResults: _, gridWidth: h, emojiPaddingHorizontal: x, emojiSpriteSize: M, shouldShowSoundmojiInEmojiPicker: j } = e,
        U = (0, s.e7)([c.ZP], () => c.ZP.categories),
        G = (0, s.e7)([b.Z], () => b.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        B = null == t ? null : t.getGuildId(),
        Z = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(B), [B]),
        F = (0, A.NJ)(B),
        V = (0, A.wC)(B),
        H = (0, A.q5)(B),
        { canSplitFrecencyList: W } = (0, d.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        Y = (0, f.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        });
    f.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
    let { topEmojis: K, newlyAddedEmojis: z } = (0, R.Z)(B, l),
        q = (0, s.Wu)([O.ZP], () => O.ZP.getFlattenedGuildIds(), []),
        Q = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: X } = (0, m.XJ)(G),
        J = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        $ = (0, T.I5)(J),
        ee = (0, g.B4)({ location: 'useEmojiGrid' }),
        et = Z.getCustomEmoji(),
        en = (e) => {
            if (e.type === u.B.GUILD) return e.guildId;
        },
        er = r.useMemo(() => o().groupBy(et, en), [et]),
        { enabled: ei, treatment: eo } = N.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !X
            }
        ),
        ea = (0, E.g2)({ location: 'useEmojiGrid' });
    return r.useMemo(() => {
        let e = [],
            r = [],
            s = [],
            c = [],
            u = 0,
            d = 0;
        if (null != Z && null != h) {
            let f = Math.floor(h / (M + 2 * x)),
                m = 3 * f,
                g = (a, p) => {
                    let _ = new Map(),
                        h = n.has(p.sectionId),
                        [g, E] = o().partition(a, (e) => {
                            let n = I.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: l
                            });
                            return _.set(e, n), !n;
                        }),
                        v = g.concat(E),
                        b = p.guild,
                        O = y.Z.getGuildId(),
                        S = p.sectionId === P.En.TOP_GUILD_EMOJI,
                        T = !S && null != b && O === b.id && v.length < b.getMaxEmojiSlots(),
                        C = S && v.length < f && !ei,
                        R = null != b && S && ei && eo === N.B.WITH_TOP_LIST && er[b.id].length < b.getMaxEmojiSlots(),
                        w = i && X && null != b && (T || C || R);
                    w && R && v.length === f && v.shift();
                    let x = v.length > m && null != b && p.isNitroLocked,
                        j = x && !Q.has(b.id);
                    j && v.splice(m - 1);
                    let U = ei && w && !h,
                        G = Math.ceil((w || x ? v.length + 1 : v.length) / f),
                        B = [];
                    for (let e = 0; e < G; e++) {
                        let t = 0 === e,
                            n = e * f - (U && e > 0 ? 1 : 0),
                            r = n + f - (U && t ? 1 : 0),
                            i = v.slice(n, r).map((e, n) => {
                                var r, i;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: M,
                                    isDisabled: _.get(e),
                                    rowIndex: d,
                                    columnIndex: U && t ? n + 1 : n,
                                    visibleRowIndex: u,
                                    category: p.type,
                                    subCategory: p.sectionId === P.En.TOP_GUILD_EMOJI ? (0, A.IP)(K, z, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : P.t0.NONE
                                };
                            });
                        if (
                            (U &&
                                t &&
                                !h &&
                                (i = [
                                    {
                                        type: 1,
                                        guildId: b.id,
                                        name: D.NW.string(D.t['Z/r7IS']),
                                        size: M,
                                        rowIndex: d,
                                        columnIndex: 0,
                                        visibleRowIndex: u
                                    },
                                    ...i
                                ]),
                            B.push(i),
                            !h)
                        ) {
                            if (!ei && w && e === G - 1) {
                                let t = B[e];
                                t.push({
                                    type: 1,
                                    guildId: b.id,
                                    name: D.NW.string(D.t['Z/r7IS']),
                                    size: M,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: u
                                });
                            }
                            if (x && e === G - 1) {
                                let t = B[e];
                                t.push({
                                    type: 2,
                                    guildId: b.id,
                                    name: D.NW.string(D.t.NZI2Zm),
                                    size: M,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: u,
                                    sectionCollapsedToThreeRows: j
                                });
                            }
                            c.push(i.length), s.push(i), u++;
                        }
                        d++;
                    }
                    let Z = h ? 0 : G,
                        F = k(L({}, p), { count: a.length });
                    r.push(F), e.push(Z);
                };
            if (null != _)
                0 !== _.unlocked.length &&
                    g(_.unlocked, {
                        type: P.En.SEARCH_RESULTS,
                        sectionId: P.En.SEARCH_RESULTS,
                        count: _.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== _.locked.length &&
                        g(_.locked, {
                            type: P.En.PREMIUM_UPSELL,
                            categoryId: P.UX.PREMIUM_UPSELL,
                            sectionId: P.En.PREMIUM_UPSELL,
                            count: _.locked.length,
                            isNitroLocked: !$
                        });
            else {
                if (ea && j) {
                    let t = [
                        {
                            type: 3,
                            rowIndex: d,
                            columnIndex: 0,
                            visibleRowIndex: u
                        }
                    ];
                    r.push({
                        type: P.En.SOUNDMOJI,
                        categoryId: P.UX.SOUNDMOJI,
                        sectionId: 'soundmoji',
                        count: t.length,
                        isNitroLocked: !1
                    });
                    let i = n.has(P.UX.SOUNDMOJI);
                    !i && (c.push(t.length), s.push(t), u++), e.push(+!i), d++;
                }
                for (let e of U)
                    if (e === P.UX.CUSTOM) {
                        let n = (n) => {
                            let r = er[n];
                            if (null == r) return;
                            let i = r.filter(
                                (e) =>
                                    I.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : v.ZP.getDefaultChannel(n),
                                        intention: l
                                    }) !== w.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === i.length) return;
                            let o = b.Z.getGuild(n),
                                s =
                                    ee ||
                                    (!$ &&
                                        I.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: i,
                                            channel: t,
                                            intention: l
                                        }));
                            g(i, {
                                categoryId: e,
                                guild: o,
                                type: P.En.GUILD,
                                sectionId: null != o ? o.id : (0, a.Z)(),
                                count: i.length,
                                isNitroLocked: s
                            });
                        };
                        if ((null != G && n(G.id), (0, w.Gt)(l))) for (let e of q) (null == G || G.id !== e) && n(e);
                    } else if (e === P.UX.TOP_GUILD_EMOJI) {
                        if (null != G) {
                            let { allEmojis: t } = (0, C.J)({
                                topEmojis: K,
                                newlyAddedEmojis: z
                            });
                            t.length > 0 &&
                                g(t, {
                                    categoryId: e,
                                    guild: b.Z.getGuild(G.id),
                                    type: P.En.TOP_GUILD_EMOJI,
                                    sectionId: P.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === P.UX.RECENT) {
                        let n = (l === w.Hz.REACTION && (W || Y) ? H : V).filter(
                            (e) =>
                                !I.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                })
                        );
                        g(n, {
                            categoryId: e,
                            type: P.En.RECENT,
                            sectionId: P.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === P.UX.FAVORITES) {
                        let n = F.filter(
                            (e) =>
                                !I.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                })
                        );
                        0 !== n.length &&
                            g(n, {
                                categoryId: e,
                                type: P.En.FAVORITES,
                                sectionId: P.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = p.ZP.getByCategory(e);
                        null != t &&
                            g(t, {
                                categoryId: e,
                                type: P.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
            }
        }
        return {
            columnCounts: c,
            emojiGrid: s,
            rowCountBySection: e,
            sectionDescriptors: r
        };
    }, [Z, h, M, x, _, n, ei, eo, er, i, X, Q, t, l, K, z, $, U, G, q, W, Y, H, V, F, ee, ea, j]);
};
var G = (function (e) {
    return (e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION'), e;
})({});
let B = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: i, setUpsellConfigs: o, emojiSelectAnalytics: a, trackEmojiFavorited: d } = e,
            f = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return r.useCallback(
            (e, r) => {
                switch (e.type) {
                    case 1:
                        i(void 0, r.isFinalSelection, r.isBurst);
                        return;
                    case 0: {
                        let { emoji: s } = e;
                        if (null == s) return;
                        let c = I.ZP.getEmojiUnavailableReason({
                            emoji: s,
                            channel: n,
                            intention: t
                        });
                        if (r.toggleFavorite) {
                            f.isFavoriteEmojiWithoutFetchingLatest(s) || null != c ? (0, l.Xe)(s) : (null == d || d(e), (0, l.$K)(s));
                            return;
                        }
                        if (c === w.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === w.Z5.PREMIUM_LOCKED) {
                            o({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (c === w.Z5.ROLE_SUBSCRIPTION_LOCKED && s.type === u.B.GUILD) {
                            o({
                                type: 1,
                                guildId: s.guildId,
                                emojiId: s.id
                            });
                            return;
                        }
                        if (c === w.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == a || a(e), i(s, r.isFinalSelection, r.isBurst);
                    }
                }
            },
            [n, t, i, o, f, a, d]
        );
    },
    Z = (e) => {
        let { emojiListRef: t } = e,
            n = (0, h.Iu)((e) => e.searchQuery),
            i = r.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return r.useCallback(
            (e) => {
                '' !== n ? ((0, h.ql)(''), _.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n]
        );
    };
