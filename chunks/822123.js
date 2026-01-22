n.d(t, {
    C5: () => k,
    CQ: () => R,
    D6: () => W,
    DA: () => K,
    EG: () => P,
    Fj: () => F,
    Nu: () => G,
    O7: () => Y,
    QZ: () => B,
    Wf: () => x,
    Wi: () => D,
    XI: () => H,
    _7: () => M,
    bo: () => L,
    sL: () => V,
    ss: () => N,
    wT: () => z,
    wt: () => U,
    xf: () => w,
    yB: () => j,
}),
    n(667532),
    n(321073),
    n(896048),
    n(801541),
    n(747238),
    n(812715);
var r = n(64700),
    i = n(735438),
    a = n(889137),
    s = n(311907),
    o = n(58149),
    l = n(508675),
    c = n(7584),
    u = n(17591),
    d = n(704591),
    f = n(594061),
    p = n(71393),
    _ = n(711014),
    h = n(287809),
    m = n(954571),
    g = n(927813),
    E = n(690521),
    b = n(474090),
    y = n(818645),
    O = n(316884),
    A = n(732139),
    v = n(652215),
    S = n(307731),
    I = n(698279),
    T = n(788868),
    C = n(985018);
let N = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, u.V)(n);
        let a = (0, S.Re)(e),
            o = F(n),
            c = B(n),
            f = H(n),
            { topEmojis: m, newlyAddedEmojis: g } = (0, O.A)(n, e),
            { allEmojis: v } = (0, y.A)({
                topEmojis: m,
                newlyAddedEmojis: g,
            }),
            I = (0, s.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            T = (0, s.bG)([p.A], () => {
                var e;
                return null == (e = p.A.getGuild(n)) ? void 0 : e.name;
            }),
            N = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
            R = (0, b.ki)(N),
            w = (0, d.Ym)({
                location: "useEmojiCategories",
            });
        return r.useMemo(() => {
            let r = I.getGroupedCustomEmoji(),
                s = _.Ay.getFlattenedGuildIds(),
                u = [],
                d = {
                    type: A.s.SOUNDMOJI,
                    name: C.intl.string(C.t.f0Ezmv),
                    id: A.R2.SOUNDMOJI,
                    isNitroLocked: !1,
                },
                h = (r) =>
                    E.Ay.getEmojiUnavailableReasons({
                        categoryEmojis: r,
                        channel: t,
                        guildId: n,
                        intention: e,
                    });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === A.s.GUILD && (e = p.A.getGuild(i)), null == e)) continue;
                        let a = null == r ? void 0 : r[e.id];
                        if (null == a || 0 === a.length) continue;
                        let {
                            emojisDisabled: s,
                            emojisUnfiltered: o,
                            emojisPremiumLockedCount: l,
                            emojiNitroLocked: c,
                        } = h(a);
                        if (0 === o.length) continue;
                        let d = null;
                        t === A.s.GUILD &&
                            (d = {
                                type: A.s.GUILD,
                                guild: e,
                                isNitroLocked: !R && c && l === a.length,
                                emojis: a,
                                emojisDisabled: s,
                            }),
                            null != d && (e.id === n ? u.unshift(d) : u.push(d));
                    }
                })(s, A.s.GUILD),
                l.Ay.categories.reduce(
                    (t, r) => {
                        if (r === A.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(v);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: A.s.TOP_GUILD_EMOJI,
                                id: r,
                                name: C.intl.formatToPlainString(C.t.W6Wi1X, {
                                    guildName: T,
                                }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === A.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = h(
                                [S.b_.REACTION, S.b_.DEFAULT_REACT_EMOJI].includes(e) ? c : o,
                            );
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: A.s.RECENT,
                                id: r,
                                name: C.intl.string(C.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n,
                            });
                        } else if (r === A.R2.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(f);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: A.s.FAVORITES,
                                id: r,
                                name: C.intl.string(C.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === A.R2.CUSTOM) {
                            let e = u;
                            a || (e = u.filter((e) => e.type === A.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else
                            t.push({
                                type: A.s.UNICODE,
                                id: r,
                                name: r,
                                isNitroLocked: !1,
                            });
                        return t;
                    },
                    w && i ? [d] : [],
                )
            );
        }, [I, t, n, e, R, v, T, c, o, f, a, w, i]);
    },
    R = () =>
        c.Ay.getCategories().map((e) => ({
            type: A.s.UNICODE,
            id: e,
            name: e,
            isNitroLocked: !1,
        })),
    w = (e) => {
        let t = (null == e ? void 0 : e.getGuildId()) != null;
        m.default.track(v.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? v.liQ.GUILD_CHANNEL : v.liQ.DM_CHANNEL,
            location_section: null != e ? v.JJy.EMOJI_PICKER_POPOUT : v.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    P = (e, t) => {
        o.Ay.trackWithMetadata(v.HAw.SEARCH_STARTED, {
            search_type: null != t && t === S.b_.REACTION ? v.I4_.EMOJI_REACTION : v.I4_.EMOJI,
            location: e,
        });
    },
    D = (e, t, n, r, i) => {
        o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === S.b_.REACTION ? v.I4_.EMOJI_REACTION : v.I4_.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n,
        });
    },
    x = (e) => {
        var t, n, r;
        let { emoji: i, emojiSuggestions: s, searchQuery: l, isLocked: c, location: u, intention: d, index: f } = e,
            p = null != (t = i.uniqueName) ? t : i.name,
            _ = (0, a.YW)(d)
                .with(S.b_.REACTION, () => v.I4_.EMOJI_REACTION)
                .with(S.b_.AUTO_SUGGESTION, () => v.I4_.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => v.I4_.EMOJI);
        o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_SELECTED, {
            search_type: _,
            location: u,
            expression_guild_id: i.guildId,
            emoji_id: i.id,
            emoji_name: p,
            is_custom: null != i.id,
            is_animated: i.animated,
            is_locked: c,
            query: l,
            index_num: f,
            load_id: null == s ? void 0 : s.loadId,
            total_results: null == s || null == (n = s.results) ? void 0 : n.length,
            emoji_suggestion_ids:
                null == s || null == (r = s.results)
                    ? void 0
                    : r
                          .map((e) => {
                              let { emoji: t } = e;
                              return t.id;
                          })
                          .filter((e) => null != e),
        });
    },
    L = (e, t) => {
        o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_EMPTY, {
            search_type: v.I4_.EMOJI,
            query: t,
            location: e,
        });
    },
    j = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        o.Ay.trackWithMetadata(v.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: null == n ? void 0 : n.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r,
        });
    },
    M = (e) => {
        var t;
        let n,
            {
                emoji: r,
                location: i,
                pickerIntention: a,
                category: s,
                subCategory: l = A.tm.NONE,
                position: c,
                newlyAddedHighlight: u,
                isBurstReaction: d,
            } = e;
        switch (a) {
            case S.b_.REACTION:
                n = d ? T.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : T.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case S.b_.STATUS:
                n = T.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                n = T.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let f = null != (t = r.uniqueName) ? t : r.name;
        o.Ay.trackWithMetadata(v.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: n,
            location: i,
            expression_id: r.id,
            expression_name: f,
            expression_guild_id: r.guildId,
            is_custom: null != r.id,
            is_animated: r.animated,
            expression_picker_section: s,
            expression_section: null == l ? void 0 : l.toString(),
            emoji_position: c,
            newly_added_highlight: u,
            is_burst: d,
        });
    },
    k = (e) => {
        var t;
        let { emoji: n, location: r } = e,
            i = null != (t = n.uniqueName) ? t : n.name;
        o.Ay.trackWithMetadata(v.HAw.EXPRESSION_FAVORITED, {
            location: r,
            expression_type: I.kx.EMOJI,
            expression_id: n.id,
            expression_name: i,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
        });
    };
(0, i.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        o.Ay.trackWithMetadata(v.HAw.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: v.ndy.EMOJI,
            suggestion_quantity: t.results.length,
            custom_quantity: t.results.filter((e) => {
                let { emoji: t } = e;
                return null != t.id;
            }).length,
            load_id: t.loadId,
            location: n,
        });
    },
    g.A.Millis.HALF_SECOND,
    {
        leading: !1,
        trailing: !0,
    },
);
let U = (e, t) => (e.type !== A.s.GUILD ? e.id : null != t ? t.name : ""),
    G = (e, t) => {
        switch (e) {
            case A.R2.TOP_GUILD_EMOJI:
                return C.intl.formatToPlainString(C.t.W6Wi1X, {
                    guildName: t,
                });
            case A.R2.RECENT:
                return C.intl.string(C.t["5TvaSm"]);
            case A.R2.FAVORITES:
                return C.intl.string(C.t.y3LQCG);
            case A.R2.ACTIVITY:
                return C.intl.string(C.t.O783tR);
            case A.R2.FLAGS:
                return C.intl.string(C.t.vvaizu);
            case A.R2.FOOD:
                return C.intl.string(C.t.ldm9aY);
            case A.R2.NATURE:
                return C.intl.string(C.t.egIBDH);
            case A.R2.OBJECTS:
                return C.intl.string(C.t.gWm7Mk);
            case A.R2.PEOPLE:
                return C.intl.string(C.t.GX594D);
            case A.R2.SYMBOLS:
                return C.intl.string(C.t.QXMYAb);
            case A.R2.TRAVEL:
                return C.intl.string(C.t.w33hIP);
            case A.R2.PREMIUM_UPSELL:
                return C.intl.string(C.t.pAF6xE);
            case A.R2.SOUNDMOJI:
                return C.intl.string(C.t.f0Ezmv);
            default:
                return null != t ? t : e;
        }
    };

function V(e, t, n, i) {
    r.useEffect(() => {
        f.bW.loadIfNecessary();
    }, []);
    let a = (0, S.Re)(n);
    return (0, s.bG)(
        [l.Ay],
        () => {
            let r = e.replace(/^:/, "").replace(/:$/, "");
            return "" === r
                ? null
                : l.Ay.searchWithoutFetchingLatest({
                      channel: t,
                      query: r,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: a,
                      showOnlyUnicode: i,
                  });
        },
        [e, t, n, a, i],
        s.My,
    );
}

function F(e) {
    return (
        r.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}

function B(e) {
    return (
        r.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}

function H(e) {
    return (
        r.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}

function Y(e, t) {
    return (
        r.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, s.bG)(
            [l.Ay],
            () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}

function W(e) {
    return (
        r.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}

function K(e, t, n) {
    if (null == n) return A.tm.NONE;
    let r = e.map((e) => {
            var t, n;
            return null != (t = null != (n = e.id) ? n : e.uniqueName) ? t : e.name;
        }),
        i = t.map((e) => e.id);
    return r.includes(n) ? A.tm.TOP_GUILD_EMOJI : i.includes(n) ? A.tm.NEWLY_ADDED_EMOJI : A.tm.NONE;
}

function z(e, t) {
    return e === S.b_.REACTION
        ? t
            ? C.intl.string(C.t["h7ES+n"])
            : C.intl.string(C.t["6any2A"])
        : C.intl.string(C.t.KgK5qg);
}
