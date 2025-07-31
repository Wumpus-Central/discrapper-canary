(n.d(t, {
    Bg: () => V,
    Ni: () => Z,
    YH: () => B,
    ld: () => U,
    rf: () => F
}),
    n(388685),
    n(539854));
var r = n(73800),
    i = n(392711),
    a = n.n(i),
    o = n(772848),
    s = n(442837),
    l = n(80932),
    c = n(339085),
    u = n(906411),
    d = n(689789),
    _ = n(407477),
    f = n(633302),
    p = n(806966),
    h = n(28546),
    m = n(357156),
    g = n(140465),
    E = n(125900),
    b = n(984933),
    y = n(430824),
    O = n(914010),
    v = n(771845),
    I = n(594174),
    T = n(176354),
    S = n(267642),
    A = n(111361),
    N = n(392552),
    C = n(543241),
    R = n(304852),
    P = n(199257),
    w = n(149203),
    D = n(185923),
    L = n(388032);
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
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function j(e, t) {
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
var U = (function (e) {
    return ((e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e);
})({});
let G = [D.Z5.DISALLOW_EXTERNAL, D.Z5.DISALLOW_CUSTOM],
    B = (e) => {
        let { channel: t, collapsedSections: n, includeCreateEmojiButton: i = !0, pickerIntention: l, emojiSearchResults: p, gridWidth: h, emojiPaddingHorizontal: x, emojiSpriteSize: M, shouldShowSoundmojiInEmojiPicker: U, showOnlyUnicode: B } = e,
            V = (0, s.e7)([c.ZP], () => c.ZP.categories),
            F = r.useMemo(() => (B ? f.ZP.getCategories() : V), [V, B]),
            Z = (0, s.e7)([y.Z], () => y.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
            H = null == t ? null : t.getGuildId(),
            Y = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(H), [H]),
            W = (0, C.NJ)(H),
            K = (0, C.wC)(H),
            z = (0, C.q5)(H),
            { canSplitFrecencyList: q } = (0, d.S)({
                location: 'useEmojiGrid',
                autoTrackExposure: !0
            }),
            X = (0, _.p3)({
                location: 'useEmojiGrid',
                autoTrackExposure: !0
            });
        _.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
        let { topEmojis: Q, newlyAddedEmojis: J } = (0, P.Z)(H, l),
            $ = (0, s.Wu)([v.ZP], () => v.ZP.getFlattenedGuildIds(), []),
            ee = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { canCreateExpressions: et } = (0, m.XJ)(Z),
            en = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
            er = (0, A.I5)(en),
            ei = (0, g.B4)(),
            ea = Y.getCustomEmoji(),
            eo = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            es = r.useMemo(() => a().groupBy(ea, eo), [ea]),
            { enabled: el, treatment: ec } = N.Z.useExperiment(
                { location: 'EmojiPicker' },
                {
                    autoTrackExposure: !0,
                    disable: !et
                }
            ),
            eu = (0, E.g2)({ location: 'useEmojiGrid' });
        return r.useMemo(() => {
            let e = [],
                r = [],
                s = [],
                c = [],
                u = 0,
                d = 0;
            if (null != Y && null != h) {
                let _ = Math.floor(h / (M + 2 * x)),
                    m = 3 * _,
                    g = (o, f) => {
                        let p = new Map(),
                            h = n.has(f.sectionId),
                            [g, E] = a().partition(o, (e) => {
                                let n = T.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                });
                                return (p.set(e, n), !n);
                            }),
                            b = g.concat(E),
                            y = f.guild,
                            v = O.Z.getGuildId(),
                            I = f.sectionId === w.En.TOP_GUILD_EMOJI,
                            A = !I && null != y && v === y.id && b.length < (0, S.y4)(y),
                            R = I && b.length < _ && !el,
                            P = null != y && I && el && ec === N.B.WITH_TOP_LIST && es[y.id].length < (0, S.y4)(y),
                            D = i && et && null != y && (A || R || P);
                        D && P && b.length === _ && b.shift();
                        let x = b.length > m && null != y && f.isNitroLocked,
                            U = x && !ee.has(y.id);
                        if (U) {
                            let e = !el && D;
                            b.splice(m - (e ? 2 : 1));
                        }
                        let G = el && D && !h,
                            B = Math.ceil((D || x ? b.length + 1 : b.length) / _),
                            V = [];
                        for (let e = 0; e < B; e++) {
                            let t = 0 === e,
                                n = e * _ - (G && e > 0 ? 1 : 0),
                                r = n + _ - (G && t ? 1 : 0),
                                i = b.slice(n, r).map((e, n) => {
                                    var r, i;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: M,
                                        isDisabled: p.get(e),
                                        rowIndex: d,
                                        columnIndex: G && t ? n + 1 : n,
                                        visibleRowIndex: u,
                                        category: f.type,
                                        subCategory: f.sectionId === w.En.TOP_GUILD_EMOJI ? (0, C.IP)(Q, J, null != (i = null != (r = e.id) ? r : e.uniqueName) ? i : e.name) : w.t0.NONE
                                    };
                                });
                            if (
                                (G &&
                                    t &&
                                    !h &&
                                    (i = [
                                        {
                                            type: 1,
                                            guildId: y.id,
                                            name: L.intl.string(L.t['Z/r7IS']),
                                            size: M,
                                            rowIndex: d,
                                            columnIndex: 0,
                                            visibleRowIndex: u
                                        },
                                        ...i
                                    ]),
                                V.push(i),
                                !h)
                            ) {
                                if (!el && D && e === B - 1) {
                                    let t = V[e];
                                    t.push({
                                        type: 1,
                                        guildId: y.id,
                                        name: L.intl.string(L.t['Z/r7IS']),
                                        size: M,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u
                                    });
                                }
                                if (x && e === B - 1) {
                                    let t = V[e];
                                    t.push({
                                        type: 2,
                                        guildId: y.id,
                                        name: L.intl.string(L.t.NZI2Zm),
                                        size: M,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: U
                                    });
                                }
                                (c.push(i.length), s.push(i), u++);
                            }
                            d++;
                        }
                        let F = h ? 0 : B,
                            Z = j(k({}, f), { count: o.length });
                        (r.push(Z), e.push(F));
                    };
                if (null != p)
                    (0 !== p.unlocked.length &&
                        g(p.unlocked, {
                            type: w.En.SEARCH_RESULTS,
                            sectionId: w.En.SEARCH_RESULTS,
                            count: p.unlocked.length,
                            isNitroLocked: !1
                        }),
                        0 !== p.locked.length &&
                            g(p.locked, {
                                type: w.En.PREMIUM_UPSELL,
                                categoryId: w.UX.PREMIUM_UPSELL,
                                sectionId: w.En.PREMIUM_UPSELL,
                                count: p.locked.length,
                                isNitroLocked: !er
                            }));
                else {
                    if (eu && U) {
                        let t = [
                            {
                                type: 3,
                                rowIndex: d,
                                columnIndex: 0,
                                visibleRowIndex: u
                            }
                        ];
                        r.push({
                            type: w.En.SOUNDMOJI,
                            categoryId: w.UX.SOUNDMOJI,
                            sectionId: 'soundmoji',
                            count: t.length,
                            isNitroLocked: !1
                        });
                        let i = n.has(w.UX.SOUNDMOJI);
                        (!i && (c.push(t.length), s.push(t), u++), e.push(+!i), d++);
                    }
                    for (let e of F)
                        if (e === w.UX.CUSTOM) {
                            let n = (n) => {
                                let r = es[n];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !G.includes(
                                            T.ZP.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != t ? t : b.ZP.getDefaultChannel(n),
                                                intention: l
                                            })
                                        )
                                );
                                if (0 === i.length) return;
                                let a = y.Z.getGuild(n),
                                    s =
                                        ei ||
                                        (!er &&
                                            T.ZP.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: t,
                                                intention: l
                                            }));
                                g(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: w.En.GUILD,
                                    sectionId: null != a ? a.id : (0, o.Z)(),
                                    count: i.length,
                                    isNitroLocked: s
                                });
                            };
                            if ((null != Z && n(Z.id), (0, D.Gt)(l))) for (let e of $) (null == Z || Z.id !== e) && n(e);
                        } else if (e === w.UX.TOP_GUILD_EMOJI) {
                            if (null != Z) {
                                let { allEmojis: t } = (0, R.J)({
                                    topEmojis: Q,
                                    newlyAddedEmojis: J
                                });
                                t.length > 0 &&
                                    g(t, {
                                        categoryId: e,
                                        guild: y.Z.getGuild(Z.id),
                                        type: w.En.TOP_GUILD_EMOJI,
                                        sectionId: w.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1
                                    });
                            }
                        } else if (e === w.UX.RECENT) {
                            let n = (l === D.Hz.REACTION && (q || X) ? z : K).filter(
                                (e) =>
                                    !T.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l
                                    })
                            );
                            g(n, {
                                categoryId: e,
                                type: w.En.RECENT,
                                sectionId: w.En.RECENT,
                                count: n.length,
                                isNitroLocked: !1
                            });
                        } else if (e === w.UX.FAVORITES) {
                            let n = W.filter(
                                (e) =>
                                    !T.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l
                                    })
                            );
                            0 !== n.length &&
                                g(n, {
                                    categoryId: e,
                                    type: w.En.FAVORITES,
                                    sectionId: w.En.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1
                                });
                        } else {
                            let t = f.ZP.getByCategory(e);
                            null != t &&
                                g(t, {
                                    categoryId: e,
                                    type: w.En.UNICODE,
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
        }, [Y, h, M, x, p, n, el, ec, es, i, et, ee, t, l, Q, J, er, F, Z, $, q, X, z, K, W, ei, eu, U]);
    };
var V = (function (e) {
    return ((e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION'), e);
})({});
let F = (e) => {
        let { pickerIntention: t, selectedChannel: n, onSelectEmoji: i, setUpsellConfigs: a, emojiSelectAnalytics: o, trackEmojiFavorited: d } = e,
            _ = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
        return r.useCallback(
            (e, r) => {
                switch (e.type) {
                    case 1:
                        return void i({
                            emoji: void 0,
                            willClose: r.isFinalSelection,
                            isBurst: r.isBurst
                        });
                    case 0: {
                        let { emoji: s } = e;
                        if (null == s) return;
                        let c = T.ZP.getEmojiUnavailableReason({
                            emoji: s,
                            channel: n,
                            intention: t
                        });
                        if (r.toggleFavorite) return void (_.isFavoriteEmojiWithoutFetchingLatest(s) || null != c ? (0, l.Xe)(s) : (null == d || d(e), (0, l.$K)(s)));
                        if (c === D.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === D.Z5.PREMIUM_LOCKED)
                            return void a({
                                type: 0,
                                emojiDescriptor: e
                            });
                        if (c === D.Z5.ROLE_SUBSCRIPTION_LOCKED && s.type === u.B.GUILD)
                            return void a({
                                type: 1,
                                guildId: s.guildId,
                                emojiId: s.id
                            });
                        if (c === D.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        (null == o || o(e),
                            i({
                                emoji: s,
                                willClose: r.isFinalSelection,
                                isBurst: r.isBurst
                            }));
                    }
                }
            },
            [n, t, i, a, _, o, d]
        );
    },
    Z = (e) => {
        let { emojiListRef: t } = e,
            n = (0, h.Iu)((e) => e.searchQuery),
            i = r.useCallback(
                (e) => {
                    var n;
                    return null == (n = t.current) ? void 0 : n.scrollToSectionTop(e);
                },
                [t]
            );
        return r.useCallback(
            (e) => {
                '' !== n ? ((0, h.ql)(''), p.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n]
        );
    };
