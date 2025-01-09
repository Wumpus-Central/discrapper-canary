r.d(n, {
    Bg: function () {
        return s;
    },
    Ni: function () {
        return F;
    },
    YH: function () {
        return G;
    },
    ld: function () {
        return i;
    },
    rf: function () {
        return Z;
    }
});
var i,
    a,
    s,
    o = r(47120);
var l = r(653041);
var u = r(192379),
    c = r(392711),
    d = r.n(c),
    f = r(772848),
    _ = r(442837),
    h = r(80932),
    p = r(339085),
    m = r(906411),
    g = r(689789),
    E = r(407477),
    v = r(633302),
    I = r(806966),
    T = r(28546),
    b = r(357156),
    y = r(140465),
    S = r(125900),
    A = r(984933),
    N = r(430824),
    C = r(914010),
    R = r(771845),
    O = r(594174),
    D = r(176354),
    L = r(111361),
    x = r(392552),
    w = r(543241),
    P = r(304852),
    M = r(199257),
    k = r(149203),
    U = r(185923),
    B = r(388032);
!(function (e) {
    (e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI');
})(i || (i = {})),
    !(function (e) {
        (e[(e.SECTION_HEADING = 0)] = 'SECTION_HEADING'), (e[(e.SECTION_ROW = 1)] = 'SECTION_ROW');
    })(a || (a = {}));
let G = (e) => {
    let { channel: n, collapsedSections: r, includeCreateEmojiButton: i = !0, pickerIntention: a, emojiSearchResults: s, gridWidth: o, emojiPaddingHorizontal: l, emojiSpriteSize: c, shouldShowSoundmojiInEmojiPicker: h } = e,
        I = (0, _.e7)([p.ZP], () => p.ZP.categories),
        T = (0, _.e7)([N.Z], () => N.Z.getGuild(null == n ? void 0 : n.getGuildId()), [n]),
        G = null == n ? null : n.getGuildId(),
        Z = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(G), [G]),
        F = (0, w.NJ)(G),
        V = (0, w.wC)(G),
        j = (0, w.q5)(G),
        { canSplitFrecencyList: H } = (0, g.S)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        }),
        Y = (0, E.p3)({
            location: 'useEmojiGrid',
            autoTrackExposure: !0
        });
    E.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
    let { topEmojis: W, newlyAddedEmojis: K } = (0, M.Z)(G, a),
        z = (0, _.Wu)([R.ZP], () => R.ZP.getFlattenedGuildIds(), []),
        q = (0, _.e7)([p.ZP], () => p.ZP.expandedSectionsByGuildIds),
        { canCreateExpressions: Q } = (0, b.XJ)(T),
        X = (0, _.e7)([O.default], () => O.default.getCurrentUser()),
        J = (0, L.I5)(X),
        $ = (0, y.B4)({ location: 'useEmojiGrid' }),
        ee = Z.getCustomEmoji(),
        et = (e) => {
            if (e.type === m.B.GUILD) return e.guildId;
        },
        en = u.useMemo(() => d().groupBy(ee, et), [ee]),
        { enabled: er, treatment: ei } = x.Z.useExperiment(
            { location: 'EmojiPicker' },
            {
                autoTrackExposure: !0,
                disable: !Q
            }
        ),
        ea = (0, S.g2)({ location: 'useEmojiGrid' });
    return u.useMemo(() => {
        let e = [],
            u = [],
            _ = [],
            p = [],
            m = 0,
            g = 0;
        if (null != Z && null != o) {
            let E = Math.floor(o / (c + 2 * l)),
                b = 3 * E,
                y = (s, o) => {
                    let l = new Map(),
                        f = r.has(o.sectionId),
                        [h, v] = d().partition(s, (e) => {
                            let r = D.ZP.isEmojiDisabled({
                                emoji: e,
                                channel: n,
                                intention: a
                            });
                            return l.set(e, r), !r;
                        }),
                        I = h.concat(v),
                        T = o.guild,
                        y = C.Z.getGuildId(),
                        S = o.sectionId === k.En.TOP_GUILD_EMOJI,
                        A = !S && null != T && y === T.id && I.length < T.getMaxEmojiSlots(),
                        N = S && I.length < E && !er,
                        R = null != T && S && er && ei === x.B.WITH_TOP_LIST && en[T.id].length < T.getMaxEmojiSlots(),
                        O = i && Q && null != T && (A || N || R);
                    O && R && I.length === E && I.shift();
                    let L = I.length > b && null != T && o.isNitroLocked,
                        P = L && !q.has(T.id);
                    P && I.splice(b - 1);
                    let M = er && O && !f,
                        U = Math.ceil((O || L ? I.length + 1 : I.length) / E),
                        G = [];
                    for (let e = 0; e < U; e++) {
                        let n = 0 === e,
                            r = e * E - (M && e > 0 ? 1 : 0),
                            i = r + E - (M && n ? 1 : 0),
                            a = I.slice(r, i).map((e, r) => {
                                var i, a;
                                return {
                                    type: 0,
                                    emoji: e,
                                    size: c,
                                    isDisabled: l.get(e),
                                    rowIndex: g,
                                    columnIndex: M && n ? r + 1 : r,
                                    visibleRowIndex: m,
                                    category: o.type,
                                    subCategory: o.sectionId === k.En.TOP_GUILD_EMOJI ? (0, w.IP)(W, K, null !== (a = null !== (i = e.id) && void 0 !== i ? i : e.uniqueName) && void 0 !== a ? a : e.name) : k.t0.NONE
                                };
                            });
                        if (
                            (M &&
                                n &&
                                !f &&
                                (a = [
                                    {
                                        type: 1,
                                        guildId: T.id,
                                        name: B.intl.string(B.t['Z/r7IS']),
                                        size: c,
                                        rowIndex: g,
                                        columnIndex: 0,
                                        visibleRowIndex: m
                                    },
                                    ...a
                                ]),
                            G.push(a),
                            !f)
                        ) {
                            if (!er && O && e === U - 1) {
                                let n = G[e];
                                n.push({
                                    type: 1,
                                    guildId: T.id,
                                    name: B.intl.string(B.t['Z/r7IS']),
                                    size: c,
                                    rowIndex: e,
                                    columnIndex: n.length,
                                    visibleRowIndex: m
                                });
                            }
                            if (L && e === U - 1) {
                                let n = G[e];
                                n.push({
                                    type: 2,
                                    guildId: T.id,
                                    name: B.intl.string(B.t.NZI2Zm),
                                    size: c,
                                    rowIndex: e,
                                    columnIndex: n.length,
                                    visibleRowIndex: m,
                                    sectionCollapsedToThreeRows: P
                                });
                            }
                            p.push(a.length), _.push(a), m++;
                        }
                        g++;
                    }
                    let Z = f ? 0 : U,
                        F = {
                            ...o,
                            count: s.length
                        };
                    u.push(F), e.push(Z);
                };
            if (null != s)
                0 !== s.unlocked.length &&
                    y(s.unlocked, {
                        type: k.En.SEARCH_RESULTS,
                        sectionId: k.En.SEARCH_RESULTS,
                        count: s.unlocked.length,
                        isNitroLocked: !1
                    }),
                    0 !== s.locked.length &&
                        y(s.locked, {
                            type: k.En.PREMIUM_UPSELL,
                            categoryId: k.UX.PREMIUM_UPSELL,
                            sectionId: k.En.PREMIUM_UPSELL,
                            count: s.locked.length,
                            isNitroLocked: !J
                        });
            else {
                if (ea && h) {
                    let n = [
                        {
                            type: 3,
                            rowIndex: g,
                            columnIndex: 0,
                            visibleRowIndex: m
                        }
                    ];
                    u.push({
                        type: k.En.SOUNDMOJI,
                        categoryId: k.UX.SOUNDMOJI,
                        sectionId: 'soundmoji',
                        count: n.length,
                        isNitroLocked: !1
                    });
                    let i = r.has(k.UX.SOUNDMOJI);
                    !i && (p.push(n.length), _.push(n), m++), e.push(i ? 0 : 1), g++;
                }
                for (let e of I)
                    if (e === k.UX.CUSTOM) {
                        let r = (r) => {
                            let i = en[r];
                            if (null == i) return;
                            let s = i.filter(
                                (e) =>
                                    D.ZP.getEmojiUnavailableReason({
                                        emoji: e,
                                        channel: null != n ? n : A.ZP.getDefaultChannel(r),
                                        intention: a
                                    }) !== U.Z5.DISALLOW_EXTERNAL
                            );
                            if (0 === s.length) return;
                            let o = N.Z.getGuild(r),
                                l =
                                    $ ||
                                    (!J &&
                                        D.ZP.isEmojiCategoryNitroLocked({
                                            categoryEmojis: s,
                                            channel: n,
                                            intention: a
                                        }));
                            y(s, {
                                categoryId: e,
                                guild: o,
                                type: k.En.GUILD,
                                sectionId: null != o ? o.id : (0, f.Z)(),
                                count: s.length,
                                isNitroLocked: l
                            });
                        };
                        if ((null != T && r(T.id), (0, U.Gt)(a))) for (let e of z) (null == T || T.id !== e) && r(e);
                    } else if (e === k.UX.TOP_GUILD_EMOJI) {
                        if (null != T) {
                            let { allEmojis: n } = (0, P.J)({
                                topEmojis: W,
                                newlyAddedEmojis: K
                            });
                            n.length > 0 &&
                                y(n, {
                                    categoryId: e,
                                    guild: N.Z.getGuild(T.id),
                                    type: k.En.TOP_GUILD_EMOJI,
                                    sectionId: k.En.TOP_GUILD_EMOJI,
                                    count: n.length,
                                    isNitroLocked: !1
                                });
                        }
                    } else if (e === k.UX.RECENT) {
                        let r = (a === U.Hz.REACTION && (H || Y) ? j : V).filter(
                            (e) =>
                                !D.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: n,
                                    intention: a
                                })
                        );
                        y(r, {
                            categoryId: e,
                            type: k.En.RECENT,
                            sectionId: k.En.RECENT,
                            count: r.length,
                            isNitroLocked: !1
                        });
                    } else if (e === k.UX.FAVORITES) {
                        let r = F.filter(
                            (e) =>
                                !D.ZP.isEmojiFiltered({
                                    emoji: e,
                                    channel: n,
                                    intention: a
                                })
                        );
                        0 !== r.length &&
                            y(r, {
                                categoryId: e,
                                type: k.En.FAVORITES,
                                sectionId: k.En.FAVORITES,
                                count: r.length,
                                isNitroLocked: !1
                            });
                    } else {
                        let n = v.ZP.getByCategory(e);
                        null != n &&
                            y(n, {
                                categoryId: e,
                                type: k.En.UNICODE,
                                sectionId: e,
                                count: n.length,
                                isNitroLocked: !1
                            });
                    }
            }
        }
        return {
            columnCounts: p,
            emojiGrid: _,
            rowCountBySection: e,
            sectionDescriptors: u
        };
    }, [Z, o, c, l, s, r, er, ei, en, i, Q, q, n, a, W, K, J, I, T, z, H, Y, j, V, F, $, ea, h]);
};
!(function (e) {
    (e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION');
})(s || (s = {}));
let Z = (e) => {
        let { pickerIntention: n, selectedChannel: r, onSelectEmoji: i, setUpsellConfigs: a, emojiSelectAnalytics: s, trackEmojiFavorited: o } = e,
            l = (0, _.e7)([p.ZP], () => p.ZP.getDisambiguatedEmojiContext(null == r ? void 0 : r.getGuildId()), [r]);
        return u.useCallback(
            (e, u) => {
                switch (e.type) {
                    case 1:
                        i(void 0, u.isFinalSelection, u.isBurst);
                        return;
                    case 0: {
                        let { emoji: c } = e;
                        if (null == c) return;
                        let d = D.ZP.getEmojiUnavailableReason({
                            emoji: c,
                            channel: r,
                            intention: n
                        });
                        if (u.toggleFavorite) {
                            l.isFavoriteEmojiWithoutFetchingLatest(c) || null != d ? (0, h.Xe)(c) : (null == o || o(e), (0, h.$K)(c));
                            return;
                        }
                        if (d === U.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (d === U.Z5.PREMIUM_LOCKED) {
                            a({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return;
                        }
                        if (d === U.Z5.ROLE_SUBSCRIPTION_LOCKED && c.type === m.B.GUILD) {
                            a({
                                type: 1,
                                guildId: c.guildId,
                                emojiId: c.id
                            });
                            return;
                        }
                        if (d === U.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == s || s(e), i(c, u.isFinalSelection, u.isBurst);
                    }
                }
            },
            [r, n, i, a, l, s, o]
        );
    },
    F = (e) => {
        let { emojiListRef: n } = e,
            r = (0, T.Iu)((e) => e.searchQuery),
            i = u.useCallback(
                (e) => {
                    var r;
                    return null === (r = n.current) || void 0 === r ? void 0 : r.scrollToSectionTop(e);
                },
                [n]
            );
        return u.useCallback(
            (e) => {
                '' !== r ? ((0, T.ql)(''), I.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, r]
        );
    };
