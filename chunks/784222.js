n.d(t, {
    Bg: () => M,
    Ni: () => U,
    YH: () => w,
    ld: () => P,
    rf: () => k
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(772848),
    o = n(442837),
    l = n(80932),
    u = n(339085),
    c = n(906411),
    d = n(689789),
    f = n(407477),
    _ = n(633302),
    p = n(806966),
    h = n(28546),
    m = n(357156),
    g = n(140465),
    E = n(125900),
    v = n(984933),
    y = n(430824),
    I = n(914010),
    b = n(771845),
    T = n(594174),
    S = n(176354),
    A = n(111361),
    N = n(392552),
    C = n(543241),
    R = n(304852),
    O = n(199257),
    D = n(149203),
    x = n(185923),
    L = n(388032),
    P = (function (e) {
        return (e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
    })({});
let w = (e) => {
    let { channel: t, collapsedSections: n, includeCreateEmojiButton: r = !0, pickerIntention: l, emojiSearchResults: p, gridWidth: h, emojiPaddingHorizontal: P, emojiSpriteSize: w, shouldShowSoundmojiInEmojiPicker: M } = e,
        k = (0, o.e7)([u.ZP], () => u.ZP.categories),
        U = (0, o.e7)([y.Z], () => y.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
        G = null == t ? null : t.getGuildId(),
        B = (0, o.e7)([u.ZP], () => u.ZP.getDisambiguatedEmojiContext(G), [G]),
        Z = (0, C.NJ)(G),
        F = (0, C.wC)(G),
        V = (0, C.q5)(G),
        { canSplitFrecencyList: j } = (0, d.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        H = (0, f.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        });
    f.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
    let { topEmojis: Y, newlyAddedEmojis: W } = (0, O.Z)(G, l),
        K = (0, o.Wu)([b.ZP], () => b.ZP.getFlattenedGuildIds(), []),
        z = (0, o.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: q } = (0, m.XJ)(U),
        Q = (0, o.e7)([T.default], () => T.default.getCurrentUser()),
        X = (0, A.I5)(Q),
        J = (0, g.B4)({ location: 'useEmojiGrid' }),
        $ = B.getCustomEmoji(),
        ee = (e) => {
            if (e.type === c.B.GUILD) return e.guildId;
        },
        et = i.useMemo(() => a().groupBy($, ee), [$]),
        { enabled: en, treatment: ei } = N.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !q
            }
        ),
        er = (0, E.g2)({ location: 'useEmojiGrid' });
    return i.useMemo(() => {
        let e = [],
            i = [],
            o = [],
            u = [],
            c = 0,
            d = 0;
        if (null != B && null != h) {
            let f = Math.floor(h / (w + 2 * P)),
                m = 3 * f,
                g = (s, _) => {
                    let p = new Map(),
                        h = n.has(_.sectionId),
                        [g, E] = a().partition(s, (e) => {
                            let n = S.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: t,
                                intention: l
                            });
                            return p.set(e, n), !n;
                        }),
                        v = g.concat(E),
                        y = _.guild,
                        b = I.Z.getGuildId(),
                        T = _.sectionId === D.En.TOP_GUILD_EMOJI,
                        A = !T && null != y && b === y.id && v.length < y.getMaxEmojiSlots(),
                        R = T && v.length < f && !en,
                        O = null != y && T && en && ei === N.B.WITH_TOP_LIST && et[y.id].length < y.getMaxEmojiSlots(),
                        x = r && q && null != y && (A || R || O);
                    x && O && v.length === f && v.shift();
                    let P = v.length > m && null != y && _.isNitroLocked,
                        M = P && !z.has(y.id);
                    M && v.splice(m - 1);
                    let k = en && x && !h,
                        U = Math.ceil((x || P ? v.length + 1 : v.length) / f),
                        G = [];
                    for (let e = 0; e < U; e++) {
                        let t = 0 === e,
                            n = e * f - (k && e > 0 ? 1 : 0),
                            i = n + f - (k && t ? 1 : 0),
                            r = v.slice(n, i).map((e, n) => {
                                var i, r;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: w,
                                    isDisabled: p.get(e),
                                    rowIndex: d,
                                    columnIndex: k && t ? n + 1 : n,
                                    visibleRowIndex: c,
                                    category: _.type,
                                    subCategory: _.sectionId === D.En.TOP_GUILD_EMOJI ? (0, C.IP)(Y, W, null !== (r = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== r ? r : e.name) : D.t0.NONE
                                };
                            });
                        if (
                            (k &&
                                t &&
                                !h &&
                                (r = [
                                    {
                                        type: 1,
                                        guildId: y.id,
                                        name: L.intl.string(L.t['Z/r7IS']),
                                        size: w,
                                        rowIndex: d,
                                        columnIndex: 0,
                                        visibleRowIndex: c
                                    },
                                    ...r
                                ]),
                            G.push(r),
                            !h)
                        ) {
                            if (!en && x && e === U - 1) {
                                let t = G[e];
                                t.push({
                                    type: 1,
                                    guildId: y.id,
                                    name: L.intl.string(L.t['Z/r7IS']),
                                    size: w,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: c
                                });
                            }
                            if (P && e === U - 1) {
                                let t = G[e];
                                t.push({
                                    type: 2,
                                    guildId: y.id,
                                    name: L.intl.string(L.t.NZI2Zm),
                                    size: w,
                                    rowIndex: e,
                                    columnIndex: t.length,
                                    visibleRowIndex: c,
                                    sectionCollapsedToThreeRows: M
                                });
                            }
                            u.push(r.length), o.push(r), c++;
                        }
                        d++;
                    }
                    let B = h ? 0 : U,
                        Z = {
                            ..._,
                            count: s.length
                        };
                    i.push(Z), e.push(B);
                };
            if (null != p)
                0 !== p.unlocked.length &&
                    g(p.unlocked, {
                        type: D.En.SEARCH_RESULTS,
                        sectionId: D.En.SEARCH_RESULTS,
                        count: p.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== p.locked.length &&
                        g(p.locked, {
                            type: D.En.PREMIUM_UPSELL,
                            categoryId: D.UX.PREMIUM_UPSELL,
                            sectionId: D.En.PREMIUM_UPSELL,
                            count: p.locked.length,
                            isNitroLocked: !X
                        });
            else {
                if (er && M) {
                    let t = [
                        {
                            type: 3,
                            rowIndex: d,
                            columnIndex: 0,
                            visibleRowIndex: c
                        }
                    ];
                    i.push({
                        type: D.En.SOUNDMOJI,
                        categoryId: D.UX.SOUNDMOJI,
                        sectionId: 'soundmoji',
                        count: t.length,
                        isNitroLocked: !1
                    });
                    let r = n.has(D.UX.SOUNDMOJI);
                    !r && (u.push(t.length), o.push(t), c++), e.push(r ? 0 : 1), d++;
                }
                for (let e of k)
                    if (e === D.UX.CUSTOM) {
                        let n = (n) => {
                            let i = et[n];
                            if (null == i) return;
                            let r = i.filter(
                                (e) =>
                                    S.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != t ? t : v.ZP.getDefaultChannel(n),
                                        intention: l
                                    }) !== x.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === r.length) return;
                            let a = y.Z.getGuild(n),
                                o =
                                    J ||
                                    (!X &&
                                        S.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: r,
                                            channel: t,
                                            intention: l
                                        }));
                            g(r, {
                                categoryId: e,
                                guild: a,
                                type: D.En.GUILD,
                                sectionId: null != a ? a.id : (0, s.Z)(),
                                count: r.length,
                                isNitroLocked: o
                            });
                        };
                        if ((null != U && n(U.id), (0, x.Gt)(l))) for (let e of K) (null == U || U.id !== e) && n(e);
                    } else if (e === D.UX.TOP_GUILD_EMOJI) {
                        if (null != U) {
                            let { allEmojis: t } = (0, R.J)({
                                topEmojis: Y,
                                newlyAddedEmojis: W
                            });
                            t.length > 0 &&
                                g(t, {
                                    categoryId: e,
                                    guild: y.Z.getGuild(U.id),
                                    type: D.En.TOP_GUILD_EMOJI,
                                    sectionId: D.En.TOP_GUILD_EMOJI,
                                    count: t.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === D.UX.RECENT) {
                        let n = (l === x.Hz.REACTION && (j || H) ? V : F).filter(
                            (e) =>
                                !S.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                })
                        );
                        g(n, {
                            categoryId: e,
                            type: D.En.RECENT,
                            sectionId: D.En.RECENT,
                            count: n.length,
                            isNitroLocked: !1
                        });
                    } else if (e === D.UX.FAVORITES) {
                        let n = Z.filter(
                            (e) =>
                                !S.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                })
                        );
                        0 !== n.length &&
                            g(n, {
                                categoryId: e,
                                type: D.En.FAVORITES,
                                sectionId: D.En.FAVORITES,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let t = _.ZP.getByCategory(e);
                        null != t &&
                            g(t, {
                                categoryId: e,
                                type: D.En.UNICODE,
                                sectionId: e,
                                count: t.length,
                                isNitroLocked: !1
                            });
                    }
            }
        }
        return {
            columnCounts: u,
            emojiGrid: o,
            rowCountBySection: e,
            sectionDescriptors: i
        };
    }, [B, h, w, P, p, n, en, ei, et, r, q, z, t, l, Y, W, X, k, U, K, j, H, V, F, Z, J, er, M]);
};
var M = (function (e) {
    return (e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION'), e;
})({});
let k = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: r, setUpsellConfigs: a, emojiSelectAnalytics: s, trackEmojiFavorited: d } = e,
            f = (0, o.e7)([u.ZP], () => u.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return i.useCallback(
            (e, i) => {
                switch (e.type) {
                    case 1:
                        r(void 0, i.isFinalSelection, i.isBurst);
                        return;
                    case 0: {
                        let { emoji: o } = e;
                        if (null == o) return;
                        let u = S.ZP.getEmojiUnavailableReason({
                            emoji: o,
                            channel: n,
                            intention: t
                        });
                        if (i.toggleFavorite) {
                            f.isFavoriteEmojiWithoutFetchingLatest(o) || null != u ? (0, l.Xe)(o) : (null == d || d(e), (0, l.$K)(o));
                            return;
                        }
                        if (u === x.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (u === x.Z5.PREMIUM_LOCKED) {
                            a({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (u === x.Z5.ROLE_SUBSCRIPTION_LOCKED && o.type === c.B.GUILD) {
                            a({
                                type: 1,
                                guildId: o.guildId,
                                emojiId: o.id
                            });
                            return;
                        }
                        if (u === x.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == s || s(e), r(o, i.isFinalSelection, i.isBurst);
                    }
                }
            },
            [n, t, r, a, f, s, d]
        );
    },
    U = (e) => {
        let { emojiListRef: t } = e,
            n = (0, h.Iu)((e) => e.searchQuery),
            r = i.useCallback(
                (e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return i.useCallback(
            (e) => {
                '' !== n ? ((0, h.ql)(''), p.kJ.setActiveCategoryIndex(e)) : r(e);
            },
            [r, n]
        );
    };
