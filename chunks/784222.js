n.d(t, {
    Bg: () => V,
    Ni: () => Z,
    YH: () => B,
    ld: () => U,
    rf: () => F
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
    _ = n(633302),
    p = n(806966),
    h = n(28546),
    g = n(357156),
    m = n(140465),
    E = n(125900),
    v = n(984933),
    b = n(430824),
    y = n(914010),
    O = n(771845),
    S = n(594174),
    I = n(176354),
    T = n(267642),
    N = n(111361),
    A = n(392552),
    C = n(543241),
    R = n(304852),
    P = n(199257),
    D = n(149203),
    w = n(185923),
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
function M(e) {
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
function k(e, t) {
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
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var U = (function (e) {
    return (e[(e.EMOJI = 0)] = 'EMOJI'), (e[(e.CREATE_EMOJI = 1)] = 'CREATE_EMOJI'), (e[(e.EXPAND_OR_COLLAPSE_EMOJIS = 2)] = 'EXPAND_OR_COLLAPSE_EMOJIS'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
})({});
let G = [w.Z5.DISALLOW_EXTERNAL, w.Z5.DISALLOW_CUSTOM],
    B = (e) => {
        let { channel: t, collapsedSections: n, includeCreateEmojiButton: i = !0, pickerIntention: l, emojiSearchResults: p, gridWidth: h, emojiPaddingHorizontal: x, emojiSpriteSize: k, shouldShowSoundmojiInEmojiPicker: U } = e,
            B = (0, s.e7)([c.ZP], () => c.ZP.categories),
            V = (0, s.e7)([b.Z], () => b.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]),
            F = null == t ? null : t.getGuildId(),
            Z = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(F), [F]),
            H = (0, C.NJ)(F),
            W = (0, C.wC)(F),
            Y = (0, C.q5)(F),
            { canSplitFrecencyList: K } = (0, d.S)({
                location: 'useEmojiGrid',
                autoTrackExposure: !0
            }),
            z = (0, f.p3)({
                location: 'useEmojiGrid',
                autoTrackExposure: !0
            });
        f.Xb.useExperiment({ location: 'useEmojiGrid' }, { autoTrackExposure: !0 });
        let { topEmojis: q, newlyAddedEmojis: Q } = (0, P.Z)(F, l),
            X = (0, s.Wu)([O.ZP], () => O.ZP.getFlattenedGuildIds(), []),
            J = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { canCreateExpressions: $ } = (0, g.XJ)(V),
            ee = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
            et = (0, N.I5)(ee),
            en = (0, m.B4)({ location: 'useEmojiGrid' }),
            er = Z.getCustomEmoji(),
            ei = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            eo = r.useMemo(() => o().groupBy(er, ei), [er]),
            { enabled: ea, treatment: es } = A.Z.useExperiment(
                { location: 'EmojiPicker' },
                {
                    autoTrackExposure: !0,
                    disable: !$
                }
            ),
            el = (0, E.g2)({ location: 'useEmojiGrid' });
        return r.useMemo(() => {
            let e = [],
                r = [],
                s = [],
                c = [],
                u = 0,
                d = 0;
            if (null != Z && null != h) {
                let f = Math.floor(h / (k + 2 * x)),
                    g = 3 * f,
                    m = (a, _) => {
                        let p = new Map(),
                            h = n.has(_.sectionId),
                            [m, E] = o().partition(a, (e) => {
                                let n = I.ZP.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: l
                                });
                                return p.set(e, n), !n;
                            }),
                            v = m.concat(E),
                            b = _.guild,
                            O = y.Z.getGuildId(),
                            S = _.sectionId === D.En.TOP_GUILD_EMOJI,
                            N = !S && null != b && O === b.id && v.length < (0, T.y4)(b),
                            R = S && v.length < f && !ea,
                            P = null != b && S && ea && es === A.B.WITH_TOP_LIST && eo[b.id].length < (0, T.y4)(b),
                            w = i && $ && null != b && (N || R || P);
                        w && P && v.length === f && v.shift();
                        let x = v.length > g && null != b && _.isNitroLocked,
                            U = x && !J.has(b.id);
                        U && v.splice(g - 1);
                        let G = ea && w && !h,
                            B = Math.ceil((w || x ? v.length + 1 : v.length) / f),
                            V = [];
                        for (let e = 0; e < B; e++) {
                            let t = 0 === e,
                                n = e * f - (G && e > 0 ? 1 : 0),
                                r = n + f - (G && t ? 1 : 0),
                                i = v.slice(n, r).map((e, n) => {
                                    var r, i;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: k,
                                        isDisabled: p.get(e),
                                        rowIndex: d,
                                        columnIndex: G && t ? n + 1 : n,
                                        visibleRowIndex: u,
                                        category: _.type,
                                        subCategory: _.sectionId === D.En.TOP_GUILD_EMOJI ? (0, C.IP)(q, Q, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : D.t0.NONE
                                    };
                                });
                            if (
                                (G &&
                                    t &&
                                    !h &&
                                    (i = [
                                        {
                                            type: 1,
                                            guildId: b.id,
                                            name: L.NW.string(L.t['Z/r7IS']),
                                            size: k,
                                            rowIndex: d,
                                            columnIndex: 0,
                                            visibleRowIndex: u
                                        },
                                        ...i
                                    ]),
                                V.push(i),
                                !h)
                            ) {
                                if (!ea && w && e === B - 1) {
                                    let t = V[e];
                                    t.push({
                                        type: 1,
                                        guildId: b.id,
                                        name: L.NW.string(L.t['Z/r7IS']),
                                        size: k,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u
                                    });
                                }
                                if (x && e === B - 1) {
                                    let t = V[e];
                                    t.push({
                                        type: 2,
                                        guildId: b.id,
                                        name: L.NW.string(L.t.NZI2Zm),
                                        size: k,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: u,
                                        sectionCollapsedToThreeRows: U
                                    });
                                }
                                c.push(i.length), s.push(i), u++;
                            }
                            d++;
                        }
                        let F = h ? 0 : B,
                            Z = j(M({}, _), { count: a.length });
                        r.push(Z), e.push(F);
                    };
                if (null != p)
                    0 !== p.unlocked.length &&
                        m(p.unlocked, {
                            type: D.En.SEARCH_RESULTS,
                            sectionId: D.En.SEARCH_RESULTS,
                            count: p.unlocked.length,
                            isNitroLocked: !1
                        }),
                        0 !== p.locked.length &&
                            m(p.locked, {
                                type: D.En.PREMIUM_UPSELL,
                                categoryId: D.UX.PREMIUM_UPSELL,
                                sectionId: D.En.PREMIUM_UPSELL,
                                count: p.locked.length,
                                isNitroLocked: !et
                            });
                else {
                    if (el && U) {
                        let t = [
                            {
                                type: 3,
                                rowIndex: d,
                                columnIndex: 0,
                                visibleRowIndex: u
                            }
                        ];
                        r.push({
                            type: D.En.SOUNDMOJI,
                            categoryId: D.UX.SOUNDMOJI,
                            sectionId: 'soundmoji',
                            count: t.length,
                            isNitroLocked: !1
                        });
                        let i = n.has(D.UX.SOUNDMOJI);
                        !i && (c.push(t.length), s.push(t), u++), e.push(+!i), d++;
                    }
                    for (let e of B)
                        if (e === D.UX.CUSTOM) {
                            let n = (n) => {
                                let r = eo[n];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !G.includes(
                                            I.ZP.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != t ? t : v.ZP.getDefaultChannel(n),
                                                intention: l
                                            })
                                        )
                                );
                                if (0 === i.length) return;
                                let o = b.Z.getGuild(n),
                                    s =
                                        en ||
                                        (!et &&
                                            I.ZP.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: t,
                                                intention: l
                                            }));
                                m(i, {
                                    categoryId: e,
                                    guild: o,
                                    type: D.En.GUILD,
                                    sectionId: null != o ? o.id : (0, a.Z)(),
                                    count: i.length,
                                    isNitroLocked: s
                                });
                            };
                            if ((null != V && n(V.id), (0, w.Gt)(l))) for (let e of X) (null == V || V.id !== e) && n(e);
                        } else if (e === D.UX.TOP_GUILD_EMOJI) {
                            if (null != V) {
                                let { allEmojis: t } = (0, R.J)({
                                    topEmojis: q,
                                    newlyAddedEmojis: Q
                                });
                                t.length > 0 &&
                                    m(t, {
                                        categoryId: e,
                                        guild: b.Z.getGuild(V.id),
                                        type: D.En.TOP_GUILD_EMOJI,
                                        sectionId: D.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1
                                    });
                            }
                        } else if (e === D.UX.RECENT) {
                            let n = (l === w.Hz.REACTION && (K || z) ? Y : W).filter(
                                (e) =>
                                    !I.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l
                                    })
                            );
                            m(n, {
                                categoryId: e,
                                type: D.En.RECENT,
                                sectionId: D.En.RECENT,
                                count: n.length,
                                isNitroLocked: !1
                            });
                        } else if (e === D.UX.FAVORITES) {
                            let n = H.filter(
                                (e) =>
                                    !I.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: l
                                    })
                            );
                            0 !== n.length &&
                                m(n, {
                                    categoryId: e,
                                    type: D.En.FAVORITES,
                                    sectionId: D.En.FAVORITES,
                                    count: n.length,
                                    isNitroLocked: !1
                                });
                        } else {
                            let t = _.ZP.getByCategory(e);
                            null != t &&
                                m(t, {
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
                columnCounts: c,
                emojiGrid: s,
                rowCountBySection: e,
                sectionDescriptors: r
            };
        }, [Z, h, k, x, p, n, ea, es, eo, i, $, J, t, l, q, Q, et, B, V, X, K, z, Y, W, H, en, el, U]);
    };
var V = (function (e) {
    return (e[(e.PREMIUM = 0)] = 'PREMIUM'), (e[(e.ROLE_SUBSCRIPTION = 1)] = 'ROLE_SUBSCRIPTION'), e;
})({});
let F = (e) => {
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
                '' !== n ? ((0, h.ql)(''), p.kJ.setActiveCategoryIndex(e)) : i(e);
            },
            [i, n]
        );
    };
