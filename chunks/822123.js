"use strict";
n.d(t, {
    C5: () => H,
    CQ: () => P,
    D6: () => Z,
    DA: () => X,
    EG: () => U,
    Fj: () => K,
    Nu: () => Y,
    O7: () => q,
    QZ: () => z,
    V$: () => L,
    Wf: () => G,
    Wi: () => k,
    XI: () => $,
    _7: () => B,
    bo: () => F,
    sL: () => W,
    ss: () => M,
    wT: () => Q,
    wt: () => j,
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
    f = n(594061),
    h = n(71393),
    p = n(711014),
    E = n(287809),
    m = n(174459),
    g = n(927813),
    A = n(690521),
    I = n(474090),
    T = n(818645),
    S = n(316884),
    N = n(732139),
    y = n(652215),
    C = n(307731),
    v = n(698279),
    O = n(788868),
    R = n(375708);
let b = /-/g;
function D(e) {
    switch (e) {
        case C.EmojiIntention.REACTION:
            return y.I4_.EMOJI_REACTION;
        case C.EmojiIntention.AUTO_SUGGESTION:
            return y.I4_.EMOJI_AUTO_SUGGESTION;
        default:
            return y.I4_.EMOJI;
    }
}
function L(e) {
    let { intention: t, location: n } = e,
        i = (0, s.A)().replace(b, "");
    d.Om.setAnalyticsId(i), o.Ay.trackWithMetadata(y.HAw.SEARCH_OPENED, { search_type: D(t), load_id: i, location: n });
}
function w(e) {
    return null != e && "" !== e ? { load_id: e } : {};
}
let M = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, c.V)(n);
        let s = (0, C.isExternalEmojiAllowedForIntention)(e),
            o = K(n),
            u = z(n),
            d = $(n),
            { topEmojis: f, newlyAddedEmojis: m } = (0, S.A)(n, e),
            { allEmojis: g } = (0, T.A)({ topEmojis: f, newlyAddedEmojis: m }),
            y = (0, a.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            v = (0, a.bG)([h.A], () => h.A.getGuild(n)?.name),
            O = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
            b = (0, I.ki)(O),
            D = (0, _.Ym)({ location: "useEmojiCategories" });
        return i.useMemo(() => {
            let i = y.getGroupedCustomEmoji(),
                a = p.Ay.getFlattenedGuildIds(),
                c = [],
                _ = { type: N.s.SOUNDMOJI, name: R.intl.string(R.t.f0Ezmv), id: N.R2.SOUNDMOJI, isNitroLocked: !1 },
                f = (i) => A.Ay.getEmojiUnavailableReasons({ categoryEmojis: i, channel: t, guildId: n, intention: e });
            return (
                ((e, t) => {
                    for (let r of e) {
                        let e;
                        if ((t === N.s.GUILD && (e = h.A.getGuild(r)), null == e)) continue;
                        let s = i.get(e.id);
                        if (null == s || 0 === s.length) continue;
                        let {
                            emojisDisabled: a,
                            emojisUnfiltered: o,
                            emojisPremiumLockedCount: u,
                            emojiNitroLocked: d,
                        } = f(s);
                        if (0 === o.length) continue;
                        let _ = l.Ay.getHiddenEmojiIds(e.id),
                            p = null;
                        t === N.s.GUILD &&
                            (p = {
                                type: N.s.GUILD,
                                guild: e,
                                isNitroLocked: !b && d && u === s.length,
                                emojis: s,
                                emojisDisabled: a,
                                emojisHidden: _,
                            }),
                            null != p && (e.id === n ? c.unshift(p) : c.push(p));
                    }
                })(a, N.s.GUILD),
                l.Ay.categories.reduce(
                    (t, i) => {
                        if (i === N.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = f(g);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: N.s.TOP_GUILD_EMOJI,
                                id: i,
                                name: R.intl.formatToPlainString(R.t.W6Wi1X, { guildName: v }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (i === N.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: r } = f(
                                [C.EmojiIntention.REACTION, C.EmojiIntention.DEFAULT_REACT_EMOJI].includes(e) ? u : o,
                            );
                            if (null == r || 0 === r.length) return t;
                            t.push({
                                type: N.s.RECENT,
                                id: i,
                                name: R.intl.string(R.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: r,
                                emojisDisabled: n,
                            });
                        } else if (i === N.R2.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = f(d);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: N.s.FAVORITES,
                                id: i,
                                name: R.intl.string(R.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (i === N.R2.CUSTOM) {
                            let e = c;
                            s || (e = c.filter((e) => e.type === N.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else t.push({ type: N.s.UNICODE, id: i, name: i, isNitroLocked: !1 });
                        return t;
                    },
                    D && r ? [_] : [],
                )
            );
        }, [y, t, n, e, b, g, v, u, o, d, s, D, r]);
    },
    P = () => u.Ay.getCategories().map((e) => ({ type: N.s.UNICODE, id: e, name: e, isNitroLocked: !1 })),
    x = (e) => {
        let t = e?.getGuildId() != null;
        m.default.track(y.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? y.liQ.GUILD_CHANNEL : y.liQ.DM_CHANNEL,
            location_section: null != e ? y.JJy.EMOJI_PICKER_POPOUT : y.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    U = (e, t) => {
        o.Ay.trackWithMetadata(y.HAw.SEARCH_STARTED, { search_type: D(t), location: e, ...w(d.Om.getAnalyticsId()) });
    },
    k = (e) => {
        let { totalResults: t, numEmojiLocked: n, location: i, searchQuery: r, intention: s, loadId: a } = e;
        o.Ay.trackWithMetadata(y.HAw.SEARCH_RESULT_VIEWED, {
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
        o.Ay.trackWithMetadata(y.HAw.SEARCH_RESULT_SELECTED, {
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
        o.Ay.trackWithMetadata(y.HAw.SEARCH_RESULT_EMPTY, { search_type: D(i), query: n, location: t, ...w(r) });
    },
    V = (e) => {
        let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
        o.Ay.trackWithMetadata(y.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
                subCategory: a = N.tm.NONE,
                position: l,
                newlyAddedHighlight: u,
                isBurstReaction: c,
                messageId: d,
            } = e;
        switch (r) {
            case C.EmojiIntention.REACTION:
                t = c ? O.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : O.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case C.EmojiIntention.STATUS:
                t = O.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                t = O.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = n.uniqueName ?? n.name;
        o.Ay.trackWithMetadata(y.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
    H = (e) => {
        let { emoji: t, location: n } = e,
            i = t.uniqueName ?? t.name;
        o.Ay.trackWithMetadata(y.HAw.EXPRESSION_FAVORITED, {
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
        o.Ay.trackWithMetadata(y.HAw.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: y.ndy.EMOJI,
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
let j = (e, t) => (e.type !== N.s.GUILD ? e.id : null != t ? t.name : ""),
    Y = (e, t) => {
        switch (e) {
            case N.R2.TOP_GUILD_EMOJI:
                return R.intl.formatToPlainString(R.t.W6Wi1X, { guildName: t });
            case N.R2.RECENT:
                return R.intl.string(R.t["5TvaSm"]);
            case N.R2.FAVORITES:
                return R.intl.string(R.t.y3LQCG);
            case N.R2.ACTIVITY:
                return R.intl.string(R.t.O783tR);
            case N.R2.FLAGS:
                return R.intl.string(R.t.vvaizu);
            case N.R2.FOOD:
                return R.intl.string(R.t.ldm9aY);
            case N.R2.NATURE:
                return R.intl.string(R.t.egIBDH);
            case N.R2.OBJECTS:
                return R.intl.string(R.t.gWm7Mk);
            case N.R2.PEOPLE:
                return R.intl.string(R.t.GX594D);
            case N.R2.SYMBOLS:
                return R.intl.string(R.t.QXMYAb);
            case N.R2.TRAVEL:
                return R.intl.string(R.t.w33hIP);
            case N.R2.PREMIUM_UPSELL:
                return R.intl.string(R.t.pAF6xE);
            case N.R2.SOUNDMOJI:
                return R.intl.string(R.t.f0Ezmv);
            default:
                return t ?? e;
        }
    };
function W(e, t, n, r) {
    i.useEffect(() => {
        f.bW.loadIfNecessary();
    }, []);
    let s = (0, C.isExternalEmojiAllowedForIntention)(n);
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
            f.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function z(e) {
    return (
        i.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function $(e) {
    return (
        i.useEffect(() => {
            f.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function q(e, t) {
    return (
        i.useEffect(() => {
            f.bW.loadIfNecessary();
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
            f.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function X(e, t, n) {
    if (null == n) return N.tm.NONE;
    let i = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        r = t.map((e) => e.id);
    return i.includes(n) ? N.tm.TOP_GUILD_EMOJI : r.includes(n) ? N.tm.NEWLY_ADDED_EMOJI : N.tm.NONE;
}
function Q(e, t) {
    return e === C.EmojiIntention.REACTION
        ? t
            ? R.intl.string(R.t["h7ES+n"])
            : R.intl.string(R.t["6any2A"])
        : R.intl.string(R.t.KgK5qg);
}
