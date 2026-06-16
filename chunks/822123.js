"use strict";
n.d(t, {
    C5: () => j,
    CQ: () => P,
    D6: () => Z,
    DA: () => X,
    EG: () => k,
    Fj: () => K,
    Nu: () => Y,
    O7: () => q,
    QZ: () => $,
    V$: () => L,
    Wf: () => G,
    Wi: () => U,
    XI: () => z,
    _7: () => B,
    bo: () => F,
    sL: () => W,
    ss: () => M,
    wT: () => Q,
    wt: () => H,
    xf: () => x,
    yB: () => V,
}),
    n(667532),
    n(321073);
var i = n(64700),
    r = n(735438),
    s = n(835245),
    a = n(17928),
    o = n(95561),
    l = n(159273),
    u = n(7584),
    c = n(17591),
    d = n(850992),
    _ = n(926972),
    h = n(594061),
    f = n(71393),
    p = n(711014),
    E = n(287809),
    m = n(174459),
    g = n(927813),
    A = n(690521),
    I = n(474090),
    T = n(818645),
    S = n(316884),
    y = n(732139),
    C = n(652215),
    N = n(307731),
    v = n(698279),
    R = n(788868),
    O = n(375708);
let b = /-/g;
function D(e) {
    switch (e) {
        case N.EmojiIntention.REACTION:
            return C.I4_.EMOJI_REACTION;
        case N.EmojiIntention.AUTO_SUGGESTION:
            return C.I4_.EMOJI_AUTO_SUGGESTION;
        default:
            return C.I4_.EMOJI;
    }
}
function L(e) {
    let { intention: t, location: n } = e,
        i = (0, s.A)().replace(b, "");
    d.Om.setAnalyticsId(i), o.Ay.trackWithMetadata(C.HAw.SEARCH_OPENED, { search_type: D(t), load_id: i, location: n });
}
function w(e) {
    return null != e && "" !== e ? { load_id: e } : {};
}
let M = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, c.V)(n);
        let s = (0, N.isExternalEmojiAllowedForIntention)(e),
            o = K(n),
            u = $(n),
            d = z(n),
            { topEmojis: h, newlyAddedEmojis: m } = (0, S.A)(n, e),
            { allEmojis: g } = (0, T.A)({ topEmojis: h, newlyAddedEmojis: m }),
            C = (0, a.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            v = (0, a.bG)([f.A], () => f.A.getGuild(n)?.name),
            R = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
            b = (0, I.ki)(R),
            D = (0, _.Ym)({ location: "useEmojiCategories" });
        return i.useMemo(() => {
            let i = C.getGroupedCustomEmoji(),
                a = p.Ay.getFlattenedGuildIds(),
                c = [],
                _ = { type: y.s.SOUNDMOJI, name: O.intl.string(O.t.f0Ezmv), id: y.R2.SOUNDMOJI, isNitroLocked: !1 },
                h = (i) => A.Ay.getEmojiUnavailableReasons({ categoryEmojis: i, channel: t, guildId: n, intention: e });
            return (
                ((e, t) => {
                    for (let r of e) {
                        let e;
                        if ((t === y.s.GUILD && (e = f.A.getGuild(r)), null == e)) continue;
                        let s = i.get(e.id);
                        if (null == s || 0 === s.length) continue;
                        let {
                            emojisDisabled: a,
                            emojisUnfiltered: o,
                            emojisPremiumLockedCount: u,
                            emojiNitroLocked: d,
                        } = h(s);
                        if (0 === o.length) continue;
                        let _ = l.Ay.getHiddenEmojiIds(e.id),
                            p = null;
                        t === y.s.GUILD &&
                            (p = {
                                type: y.s.GUILD,
                                guild: e,
                                isNitroLocked: !b && d && u === s.length,
                                emojis: s,
                                emojisDisabled: a,
                                emojisHidden: _,
                            }),
                            null != p && (e.id === n ? c.unshift(p) : c.push(p));
                    }
                })(a, y.s.GUILD),
                l.Ay.categories.reduce(
                    (t, i) => {
                        if (i === y.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(g);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: y.s.TOP_GUILD_EMOJI,
                                id: i,
                                name: O.intl.formatToPlainString(O.t.W6Wi1X, { guildName: v }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (i === y.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: r } = h(
                                [N.EmojiIntention.REACTION, N.EmojiIntention.DEFAULT_REACT_EMOJI].includes(e) ? u : o,
                            );
                            if (null == r || 0 === r.length) return t;
                            t.push({
                                type: y.s.RECENT,
                                id: i,
                                name: O.intl.string(O.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: r,
                                emojisDisabled: n,
                            });
                        } else if (i === y.R2.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(d);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: y.s.FAVORITES,
                                id: i,
                                name: O.intl.string(O.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (i === y.R2.CUSTOM) {
                            let e = c;
                            s || (e = c.filter((e) => e.type === y.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else t.push({ type: y.s.UNICODE, id: i, name: i, isNitroLocked: !1 });
                        return t;
                    },
                    D && r ? [_] : [],
                )
            );
        }, [C, t, n, e, b, g, v, u, o, d, s, D, r]);
    },
    P = () => u.Ay.getCategories().map((e) => ({ type: y.s.UNICODE, id: e, name: e, isNitroLocked: !1 })),
    x = (e) => {
        let t = e?.getGuildId() != null;
        m.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? C.liQ.GUILD_CHANNEL : C.liQ.DM_CHANNEL,
            location_section: null != e ? C.JJy.EMOJI_PICKER_POPOUT : C.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    k = (e, t) => {
        o.Ay.trackWithMetadata(C.HAw.SEARCH_STARTED, { search_type: D(t), location: e, ...w(d.Om.getAnalyticsId()) });
    },
    U = (e) => {
        let { totalResults: t, numEmojiLocked: n, location: i, searchQuery: r, intention: s, loadId: a } = e;
        o.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_VIEWED, {
            search_type: D(s),
            total_results: t,
            num_results_locked: n,
            query: r,
            location: i,
            ...w(a),
        });
    },
    G = (e) => {
        let {
                emoji: t,
                emojiSuggestions: n,
                searchQuery: i,
                isLocked: r,
                location: s,
                intention: a,
                index: l,
                messageId: u,
            } = e,
            c = t.uniqueName ?? t.name,
            _ = D(a);
        o.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_SELECTED, {
            search_type: _,
            location: s,
            expression_guild_id: t.guildId,
            emoji_id: t.id,
            emoji_name: c,
            is_custom: null != t.id,
            is_animated: t.animated,
            is_locked: r,
            query: i,
            index_num: l,
            ...w(n?.loadId ?? d.Om.getAnalyticsId()),
            total_results: n?.results?.length,
            emoji_suggestion_ids: n?.results
                ?.map((e) => {
                    let { emoji: t } = e;
                    return t.id;
                })
                .filter((e) => null != e),
            message_id: u,
        });
    },
    F = (e) => {
        let { location: t, searchQuery: n, intention: i, loadId: r } = e;
        o.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_EMPTY, { search_type: D(i), query: n, location: t, ...w(r) });
    },
    V = (e) => {
        let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
        o.Ay.trackWithMetadata(C.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: n?.toString(),
            newly_added_highlight: r,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: i,
        });
    },
    B = (e) => {
        let t,
            {
                emoji: n,
                location: i,
                pickerIntention: r,
                category: s,
                subCategory: a = y.tm.NONE,
                position: l,
                newlyAddedHighlight: u,
                isBurstReaction: c,
                messageId: d,
            } = e;
        switch (r) {
            case N.EmojiIntention.REACTION:
                t = c ? R.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : R.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case N.EmojiIntention.STATUS:
                t = R.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                t = R.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = n.uniqueName ?? n.name;
        o.Ay.trackWithMetadata(C.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: t,
            location: i,
            expression_id: n.id,
            expression_name: _,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
            expression_picker_section: s,
            expression_section: a?.toString(),
            emoji_position: l,
            newly_added_highlight: u,
            is_burst: c,
            message_id: d,
        });
    },
    j = (e) => {
        let { emoji: t, location: n } = e,
            i = t.uniqueName ?? t.name;
        o.Ay.trackWithMetadata(C.HAw.EXPRESSION_FAVORITED, {
            location: n,
            expression_type: v.kx.EMOJI,
            expression_id: t.id,
            expression_name: i,
            expression_guild_id: t.guildId,
            is_custom: null != t.id,
            is_animated: t.animated,
        });
    };
(0, r.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        o.Ay.trackWithMetadata(C.HAw.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: C.ndy.EMOJI,
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
    { leading: !1, trailing: !0 },
);
let H = (e, t) => (e.type !== y.s.GUILD ? e.id : null != t ? t.name : ""),
    Y = (e, t) => {
        switch (e) {
            case y.R2.TOP_GUILD_EMOJI:
                return O.intl.formatToPlainString(O.t.W6Wi1X, { guildName: t });
            case y.R2.RECENT:
                return O.intl.string(O.t["5TvaSm"]);
            case y.R2.FAVORITES:
                return O.intl.string(O.t.y3LQCG);
            case y.R2.ACTIVITY:
                return O.intl.string(O.t.O783tR);
            case y.R2.FLAGS:
                return O.intl.string(O.t.vvaizu);
            case y.R2.FOOD:
                return O.intl.string(O.t.ldm9aY);
            case y.R2.NATURE:
                return O.intl.string(O.t.egIBDH);
            case y.R2.OBJECTS:
                return O.intl.string(O.t.gWm7Mk);
            case y.R2.PEOPLE:
                return O.intl.string(O.t.GX594D);
            case y.R2.SYMBOLS:
                return O.intl.string(O.t.QXMYAb);
            case y.R2.TRAVEL:
                return O.intl.string(O.t.w33hIP);
            case y.R2.PREMIUM_UPSELL:
                return O.intl.string(O.t.pAF6xE);
            case y.R2.SOUNDMOJI:
                return O.intl.string(O.t.f0Ezmv);
            default:
                return t ?? e;
        }
    };
function W(e, t, n, r) {
    i.useEffect(() => {
        h.bW.loadIfNecessary();
    }, []);
    let s = (0, N.isExternalEmojiAllowedForIntention)(n);
    return (0, a.bG)(
        [l.Ay],
        () => {
            let i = e.replace(/^:/, "").replace(/:$/, "");
            return "" === i
                ? null
                : l.Ay.searchWithoutFetchingLatest({
                      channel: t,
                      query: i,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: s,
                      showOnlyUnicode: r,
                  });
        },
        [e, t, n, s, r],
        a.My,
    );
}
function K(e) {
    return (
        i.useEffect(() => {
            h.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function $(e) {
    return (
        i.useEffect(() => {
            h.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function z(e) {
    return (
        i.useEffect(() => {
            h.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function q(e, t) {
    return (
        i.useEffect(() => {
            h.bW.loadIfNecessary();
        }, []),
        (0, a.bG)(
            [l.Ay],
            () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function Z(e) {
    return (
        i.useEffect(() => {
            h.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function X(e, t, n) {
    if (null == n) return y.tm.NONE;
    let i = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        r = t.map((e) => e.id);
    return i.includes(n) ? y.tm.TOP_GUILD_EMOJI : r.includes(n) ? y.tm.NEWLY_ADDED_EMOJI : y.tm.NONE;
}
function Q(e, t) {
    return e === N.EmojiIntention.REACTION
        ? t
            ? O.intl.string(O.t["h7ES+n"])
            : O.intl.string(O.t["6any2A"])
        : O.intl.string(O.t.KgK5qg);
}
