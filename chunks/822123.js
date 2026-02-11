"use strict";
n.d(t, {
    C5: () => G,
    CQ: () => D,
    D6: () => K,
    DA: () => $,
    EG: () => w,
    Fj: () => j,
    Nu: () => V,
    O7: () => W,
    QZ: () => H,
    Wf: () => P,
    Wi: () => x,
    XI: () => Y,
    _7: () => U,
    bo: () => M,
    sL: () => B,
    ss: () => O,
    wT: () => z,
    wt: () => F,
    xf: () => L,
    yB: () => k,
}),
    n(667532),
    n(321073),
    n(801541);
var r = n(64700),
    i = n(735438),
    a = n(889137),
    s = n(311907),
    o = n(58149),
    l = n(508675),
    u = n(7584),
    c = n(17591),
    d = n(704591),
    _ = n(594061),
    f = n(71393),
    h = n(711014),
    p = n(287809),
    g = n(954571),
    E = n(927813),
    A = n(690521),
    I = n(474090),
    T = n(818645),
    y = n(316884),
    S = n(732139),
    v = n(652215),
    C = n(307731),
    b = n(698279),
    N = n(788868),
    R = n(985018);
let O = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, c.V)(n);
        let a = (0, C.Re)(e),
            o = j(n),
            u = H(n),
            _ = Y(n),
            { topEmojis: g, newlyAddedEmojis: E } = (0, y.A)(n, e),
            { allEmojis: v } = (0, T.A)({ topEmojis: g, newlyAddedEmojis: E }),
            b = (0, s.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            N = (0, s.bG)([f.A], () => f.A.getGuild(n)?.name),
            O = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
            D = (0, I.ki)(O),
            L = (0, d.Ym)({ location: "useEmojiCategories" });
        return r.useMemo(() => {
            let r = b.getGroupedCustomEmoji(),
                s = h.Ay.getFlattenedGuildIds(),
                c = [],
                d = { type: S.s.SOUNDMOJI, name: R.intl.string(R.t.f0Ezmv), id: S.R2.SOUNDMOJI, isNitroLocked: !1 },
                p = (r) => A.Ay.getEmojiUnavailableReasons({ categoryEmojis: r, channel: t, guildId: n, intention: e });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === S.s.GUILD && (e = f.A.getGuild(i)), null == e)) continue;
                        let a = r?.[e.id];
                        if (null == a || 0 === a.length) continue;
                        let {
                            emojisDisabled: s,
                            emojisUnfiltered: o,
                            emojisPremiumLockedCount: u,
                            emojiNitroLocked: d,
                        } = p(a);
                        if (0 === o.length) continue;
                        let _ = l.Ay.getHiddenEmojiIds(e.id),
                            h = null;
                        t === S.s.GUILD &&
                            (h = {
                                type: S.s.GUILD,
                                guild: e,
                                isNitroLocked: !D && d && u === a.length,
                                emojis: a,
                                emojisDisabled: s,
                                emojisHidden: _,
                            }),
                            null != h && (e.id === n ? c.unshift(h) : c.push(h));
                    }
                })(s, S.s.GUILD),
                l.Ay.categories.reduce(
                    (t, r) => {
                        if (r === S.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = p(v);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.s.TOP_GUILD_EMOJI,
                                id: r,
                                name: R.intl.formatToPlainString(R.t.W6Wi1X, { guildName: N }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === S.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = p(
                                [C.b_.REACTION, C.b_.DEFAULT_REACT_EMOJI].includes(e) ? u : o,
                            );
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: S.s.RECENT,
                                id: r,
                                name: R.intl.string(R.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n,
                            });
                        } else if (r === S.R2.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = p(_);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.s.FAVORITES,
                                id: r,
                                name: R.intl.string(R.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === S.R2.CUSTOM) {
                            let e = c;
                            a || (e = c.filter((e) => e.type === S.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else t.push({ type: S.s.UNICODE, id: r, name: r, isNitroLocked: !1 });
                        return t;
                    },
                    L && i ? [d] : [],
                )
            );
        }, [b, t, n, e, D, v, N, u, o, _, a, L, i]);
    },
    D = () => u.Ay.getCategories().map((e) => ({ type: S.s.UNICODE, id: e, name: e, isNitroLocked: !1 })),
    L = (e) => {
        let t = e?.getGuildId() != null;
        g.default.track(v.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? v.liQ.GUILD_CHANNEL : v.liQ.DM_CHANNEL,
            location_section: null != e ? v.JJy.EMOJI_PICKER_POPOUT : v.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    w = (e, t) => {
        o.Ay.trackWithMetadata(v.HAw.SEARCH_STARTED, {
            search_type: null != t && t === C.b_.REACTION ? v.I4_.EMOJI_REACTION : v.I4_.EMOJI,
            location: e,
        });
    },
    x = (e, t, n, r, i) => {
        o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === C.b_.REACTION ? v.I4_.EMOJI_REACTION : v.I4_.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n,
        });
    },
    P = (e) => {
        let {
                emoji: t,
                emojiSuggestions: n,
                searchQuery: r,
                isLocked: i,
                location: s,
                intention: l,
                index: u,
                messageId: c,
            } = e,
            d = t.uniqueName ?? t.name,
            _ = (0, a.YW)(l)
                .with(C.b_.REACTION, () => v.I4_.EMOJI_REACTION)
                .with(C.b_.AUTO_SUGGESTION, () => v.I4_.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => v.I4_.EMOJI);
        o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_SELECTED, {
            search_type: _,
            location: s,
            expression_guild_id: t.guildId,
            emoji_id: t.id,
            emoji_name: d,
            is_custom: null != t.id,
            is_animated: t.animated,
            is_locked: i,
            query: r,
            index_num: u,
            load_id: n?.loadId,
            total_results: n?.results?.length,
            emoji_suggestion_ids: n?.results
                ?.map((e) => {
                    let { emoji: t } = e;
                    return t.id;
                })
                .filter((e) => null != e),
            message_id: c,
        });
    },
    M = (e, t) => {
        o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_EMPTY, { search_type: v.I4_.EMOJI, query: t, location: e });
    },
    k = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        o.Ay.trackWithMetadata(v.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: n?.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r,
        });
    },
    U = (e) => {
        let t,
            {
                emoji: n,
                location: r,
                pickerIntention: i,
                category: a,
                subCategory: s = S.tm.NONE,
                position: l,
                newlyAddedHighlight: u,
                isBurstReaction: c,
                messageId: d,
            } = e;
        switch (i) {
            case C.b_.REACTION:
                t = c ? N.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : N.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case C.b_.STATUS:
                t = N.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                t = N.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = n.uniqueName ?? n.name;
        o.Ay.trackWithMetadata(v.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: t,
            location: r,
            expression_id: n.id,
            expression_name: _,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
            expression_picker_section: a,
            expression_section: s?.toString(),
            emoji_position: l,
            newly_added_highlight: u,
            is_burst: c,
            message_id: d,
        });
    },
    G = (e) => {
        let { emoji: t, location: n } = e,
            r = t.uniqueName ?? t.name;
        o.Ay.trackWithMetadata(v.HAw.EXPRESSION_FAVORITED, {
            location: n,
            expression_type: b.kx.EMOJI,
            expression_id: t.id,
            expression_name: r,
            expression_guild_id: t.guildId,
            is_custom: null != t.id,
            is_animated: t.animated,
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
    E.A.Millis.HALF_SECOND,
    { leading: !1, trailing: !0 },
);
let F = (e, t) => (e.type !== S.s.GUILD ? e.id : null != t ? t.name : ""),
    V = (e, t) => {
        switch (e) {
            case S.R2.TOP_GUILD_EMOJI:
                return R.intl.formatToPlainString(R.t.W6Wi1X, { guildName: t });
            case S.R2.RECENT:
                return R.intl.string(R.t["5TvaSm"]);
            case S.R2.FAVORITES:
                return R.intl.string(R.t.y3LQCG);
            case S.R2.ACTIVITY:
                return R.intl.string(R.t.O783tR);
            case S.R2.FLAGS:
                return R.intl.string(R.t.vvaizu);
            case S.R2.FOOD:
                return R.intl.string(R.t.ldm9aY);
            case S.R2.NATURE:
                return R.intl.string(R.t.egIBDH);
            case S.R2.OBJECTS:
                return R.intl.string(R.t.gWm7Mk);
            case S.R2.PEOPLE:
                return R.intl.string(R.t.GX594D);
            case S.R2.SYMBOLS:
                return R.intl.string(R.t.QXMYAb);
            case S.R2.TRAVEL:
                return R.intl.string(R.t.w33hIP);
            case S.R2.PREMIUM_UPSELL:
                return R.intl.string(R.t.pAF6xE);
            case S.R2.SOUNDMOJI:
                return R.intl.string(R.t.f0Ezmv);
            default:
                return t ?? e;
        }
    };
function B(e, t, n, i) {
    r.useEffect(() => {
        _.bW.loadIfNecessary();
    }, []);
    let a = (0, C.Re)(n);
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
function j(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function Y(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function W(e, t) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.bG)(
            [l.Ay],
            () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function K(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function $(e, t, n) {
    if (null == n) return S.tm.NONE;
    let r = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        i = t.map((e) => e.id);
    return r.includes(n) ? S.tm.TOP_GUILD_EMOJI : i.includes(n) ? S.tm.NEWLY_ADDED_EMOJI : S.tm.NONE;
}
function z(e, t) {
    return e === C.b_.REACTION
        ? t
            ? R.intl.string(R.t["h7ES+n"])
            : R.intl.string(R.t["6any2A"])
        : R.intl.string(R.t.KgK5qg);
}
