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
    C = n(543241),
    A = n(304852),
    N = n(199257),
    P = n(149203),
    R = n(185923),
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
                w(e, t, n[t]);
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
        var t;
        let {
                channel: n,
                fallbackGuildId: i,
                collapsedSections: l,
                includeCreateEmojiButton: f = !0,
                pickerIntention: p,
                emojiSearchResults: w,
                gridWidth: L,
                emojiPaddingHorizontal: M,
                emojiSpriteSize: U,
                shouldShowSoundmojiInEmojiPicker: G,
                showOnlyUnicode: Z,
            } = e,
            B = (0, s.e7)([c.ZP], () => c.ZP.categories),
            F = r.useMemo(() => (Z ? d.ZP.getCategories() : B), [B, Z]),
            V = (0, s.e7)([E.Z], () => E.Z.getGuild(null == n ? void 0 : n.getGuildId()), [n]),
            H = null != (t = null == n ? void 0 : n.getGuildId()) ? t : i,
            Y = (0, s.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(H), [H]),
            W = (0, C.NJ)(H),
            K = (0, C.wC)(H),
            z = (0, C.q5)(H),
            { topEmojis: q, newlyAddedEmojis: Q } = (0, N.Z)(H, p),
            X = (0, s.Wu)([y.ZP], () => y.ZP.getFlattenedGuildIds(), []),
            J = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { canCreateExpressions: $ } = (0, _.XJ)(V),
            ee = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
            et = (0, I.I5)(ee),
            en = (0, m.B4)(),
            er = Y.getCustomEmoji(),
            ei = (e) => {
                if (e.type === u.B.GUILD) return e.guildId;
            },
            ea = r.useMemo(() => a().groupBy(er, ei), [er]),
            { enabled: eo, treatment: es } = T.Z.useExperiment(
                { location: "EmojiPicker" },
                {
                    autoTrackExposure: !0,
                    disable: !$,
                },
            ),
            el = (0, h.g2)({ location: "useEmojiGrid" });
        return r.useMemo(() => {
            let e = [],
                t = [],
                r = [],
                i = [],
                s = 0,
                c = 0;
            if (null != Y && null != L) {
                let u = Math.floor(L / (U + 2 * M)),
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
                            A = d.sectionId === P.En.TOP_GUILD_EMOJI,
                            N = !A && null != O && I === O.id && y.length < (0, S.y4)(O),
                            R = A && y.length < u && !eo,
                            w = null != O && A && eo && es === T.B.WITH_TOP_LIST && ea[O.id].length < (0, S.y4)(O),
                            L = f && $ && null != O && (N || R || w);
                        L && w && y.length === u && y.shift();
                        let M = y.length > _ && null != O && d.isNitroLocked,
                            k = M && !J.has(O.id);
                        if (k) {
                            let e = !eo && L;
                            y.splice(_ - (e ? 2 : 1));
                        }
                        let G = eo && L && !h,
                            Z = Math.ceil((L || M ? y.length + 1 : y.length) / u),
                            B = [];
                        for (let e = 0; e < Z; e++) {
                            let t = 0 === e,
                                n = e * u - (G && e > 0 ? 1 : 0),
                                a = n + u - (G && t ? 1 : 0),
                                o = y.slice(n, a).map((e, n) => {
                                    var r, i;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: U,
                                        isDisabled: m.get(e),
                                        rowIndex: c,
                                        columnIndex: G && t ? n + 1 : n,
                                        visibleRowIndex: s,
                                        category: d.type,
                                        subCategory:
                                            d.sectionId === P.En.TOP_GUILD_EMOJI
                                                ? (0, C.IP)(
                                                      q,
                                                      Q,
                                                      null != (i = null != (r = e.id) ? r : e.uniqueName) ? i : e.name,
                                                  )
                                                : P.t0.NONE,
                                    };
                                });
                            if (
                                (G &&
                                    t &&
                                    !h &&
                                    (o = [
                                        {
                                            type: 1,
                                            guildId: O.id,
                                            name: D.intl.string(D.t["Z/r7IS"]),
                                            size: U,
                                            rowIndex: c,
                                            columnIndex: 0,
                                            visibleRowIndex: s,
                                        },
                                        ...o,
                                    ]),
                                B.push(o),
                                !h)
                            ) {
                                if (!eo && L && e === Z - 1) {
                                    let t = B[e];
                                    t.push({
                                        type: 1,
                                        guildId: O.id,
                                        name: D.intl.string(D.t["Z/r7IS"]),
                                        size: U,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: s,
                                    });
                                }
                                if (M && e === Z - 1) {
                                    let t = B[e];
                                    t.push({
                                        type: 2,
                                        guildId: O.id,
                                        name: D.intl.string(D.t.NZI2Zk),
                                        size: U,
                                        rowIndex: e,
                                        columnIndex: t.length,
                                        visibleRowIndex: s,
                                        sectionCollapsedToThreeRows: k,
                                    });
                                }
                                i.push(o.length), r.push(o), s++;
                            }
                            c++;
                        }
                        let F = h ? 0 : Z,
                            V = j(x({}, d), { count: o.length });
                        t.push(V), e.push(F);
                    };
                if (null != w)
                    0 !== w.unlocked.length &&
                        m(w.unlocked, {
                            type: P.En.SEARCH_RESULTS,
                            sectionId: P.En.SEARCH_RESULTS,
                            count: w.unlocked.length,
                            isNitroLocked: !1,
                        }),
                        0 !== w.locked.length &&
                            m(w.locked, {
                                type: P.En.PREMIUM_UPSELL,
                                categoryId: P.UX.PREMIUM_UPSELL,
                                sectionId: P.En.PREMIUM_UPSELL,
                                count: w.locked.length,
                                isNitroLocked: !et,
                            });
                else {
                    if (el && G) {
                        let n = [
                            {
                                type: 3,
                                rowIndex: c,
                                columnIndex: 0,
                                visibleRowIndex: s,
                            },
                        ];
                        t.push({
                            type: P.En.SOUNDMOJI,
                            categoryId: P.UX.SOUNDMOJI,
                            sectionId: "soundmoji",
                            count: n.length,
                            isNitroLocked: !1,
                        });
                        let a = l.has(P.UX.SOUNDMOJI);
                        !a && (i.push(n.length), r.push(n), s++), e.push(+!a), c++;
                    }
                    for (let e of F)
                        if (e === P.UX.CUSTOM) {
                            let t = (t) => {
                                let r = ea[t];
                                if (null == r) return;
                                let i = r.filter(
                                    (e) =>
                                        !k.includes(
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
                                        en ||
                                        (!et &&
                                            v.ZP.isEmojiCategoryNitroLocked({
                                                categoryEmojis: i,
                                                channel: n,
                                                intention: p,
                                            }));
                                m(i, {
                                    categoryId: e,
                                    guild: a,
                                    type: P.En.GUILD,
                                    sectionId: null != a ? a.id : (0, o.Z)(),
                                    count: i.length,
                                    isNitroLocked: s,
                                });
                            };
                            if ((null != V && t(V.id), (0, R.Gt)(p)))
                                for (let e of X) (null == V || V.id !== e) && t(e);
                        } else if (e === P.UX.TOP_GUILD_EMOJI) {
                            if (null != V) {
                                let { allEmojis: t } = (0, A.J)({
                                    topEmojis: q,
                                    newlyAddedEmojis: Q,
                                });
                                t.length > 0 &&
                                    m(t, {
                                        categoryId: e,
                                        guild: E.Z.getGuild(V.id),
                                        type: P.En.TOP_GUILD_EMOJI,
                                        sectionId: P.En.TOP_GUILD_EMOJI,
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                            }
                        } else if (e === P.UX.RECENT) {
                            let t = (p === R.Hz.REACTION ? z : K).filter(
                                (e) =>
                                    !v.ZP.isEmojiFiltered({
                                        emoji: e,
                                        channel: n,
                                        intention: p,
                                    }),
                            );
                            m(t, {
                                categoryId: e,
                                type: P.En.RECENT,
                                sectionId: P.En.RECENT,
                                count: t.length,
                                isNitroLocked: !1,
                            });
                        } else if (e === P.UX.FAVORITES) {
                            let t = W.filter(
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
                                    type: P.En.FAVORITES,
                                    sectionId: P.En.FAVORITES,
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                        } else {
                            let t = d.ZP.getByCategory(e);
                            null != t &&
                                m(t, {
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
                columnCounts: i,
                emojiGrid: r,
                rowCountBySection: e,
                sectionDescriptors: t,
            };
        }, [Y, L, U, M, w, l, eo, es, ea, f, $, J, n, p, q, Q, et, F, V, X, z, K, W, en, el, G]);
    };
var G = (function (e) {
    return (e[(e.PREMIUM = 0)] = "PREMIUM"), (e[(e.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), e;
})({});
let Z = (e) => {
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
                        if (s === R.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (s === R.Z5.PREMIUM_LOCKED)
                            return void o({
                                type: 0,
                                emojiDescriptor: e,
                            });
                        if (s === R.Z5.ROLE_SUBSCRIPTION_LOCKED && i.type === u.B.GUILD)
                            return void o({
                                type: 1,
                                guildId: i.guildId,
                                emojiId: i.id,
                            });
                        if (s === R.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
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
