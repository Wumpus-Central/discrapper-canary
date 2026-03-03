"use strict";
n.d(t, {
    C5: () => U,
    CQ: () => b,
    D6: () => W,
    DA: () => K,
    EG: () => L,
    Fj: () => B,
    Nu: () => F,
    O7: () => Y,
    QZ: () => H,
    Wf: () => M,
    Wi: () => w,
    XI: () => j,
    _7: () => k,
    bo: () => x,
    sL: () => V,
    ss: () => O,
    wT: () => $,
    wt: () => G,
    xf: () => D,
    yB: () => P,
}),
    n(667532),
    n(321073),
    n(801541);
var r = n(64700),
    i = n(735438),
    s = n(889137),
    a = n(311907),
    o = n(58149),
    l = n(508675),
    u = n(7584),
    c = n(17591),
    d = n(704591),
    _ = n(594061),
    f = n(71393),
    p = n(711014),
    h = n(287809),
    m = n(954571),
    E = n(927813),
    g = n(690521),
    A = n(474090),
    I = n(818645),
    T = n(316884),
    S = n(732139),
    y = n(652215),
    v = n(307731),
    N = n(698279),
    C = n(788868),
    R = n(985018);
let O = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, c.V)(n);
        let s = (0, v.Re)(e),
            o = B(n),
            u = H(n),
            _ = j(n),
            { topEmojis: m, newlyAddedEmojis: E } = (0, T.A)(n, e),
            { allEmojis: y } = (0, I.A)({ topEmojis: m, newlyAddedEmojis: E }),
            N = (0, a.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            C = (0, a.bG)([f.A], () => f.A.getGuild(n)?.name),
            O = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
            b = (0, A.ki)(O),
            D = (0, d.Ym)({ location: "useEmojiCategories" });
        return r.useMemo(() => {
            let r = N.getGroupedCustomEmoji(),
                a = p.Ay.getFlattenedGuildIds(),
                c = [],
                d = { type: S.s.SOUNDMOJI, name: R.intl.string(R.t.f0Ezmv), id: S.R2.SOUNDMOJI, isNitroLocked: !1 },
                h = (r) => g.Ay.getEmojiUnavailableReasons({ categoryEmojis: r, channel: t, guildId: n, intention: e });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === S.s.GUILD && (e = f.A.getGuild(i)), null == e)) continue;
                        let s = r.get(e.id);
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
                        t === S.s.GUILD &&
                            (p = {
                                type: S.s.GUILD,
                                guild: e,
                                isNitroLocked: !b && d && u === s.length,
                                emojis: s,
                                emojisDisabled: a,
                                emojisHidden: _,
                            }),
                            null != p && (e.id === n ? c.unshift(p) : c.push(p));
                    }
                })(a, S.s.GUILD),
                l.Ay.categories.reduce(
                    (t, r) => {
                        if (r === S.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(y);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.s.TOP_GUILD_EMOJI,
                                id: r,
                                name: R.intl.formatToPlainString(R.t.W6Wi1X, { guildName: C }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === S.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = h(
                                [v.b_.REACTION, v.b_.DEFAULT_REACT_EMOJI].includes(e) ? u : o,
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
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(_);
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
                            s || (e = c.filter((e) => e.type === S.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else t.push({ type: S.s.UNICODE, id: r, name: r, isNitroLocked: !1 });
                        return t;
                    },
                    D && i ? [d] : [],
                )
            );
        }, [N, t, n, e, b, y, C, u, o, _, s, D, i]);
    },
    b = () => u.Ay.getCategories().map((e) => ({ type: S.s.UNICODE, id: e, name: e, isNitroLocked: !1 })),
    D = (e) => {
        let t = e?.getGuildId() != null;
        m.default.track(y.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? y.liQ.GUILD_CHANNEL : y.liQ.DM_CHANNEL,
            location_section: null != e ? y.JJy.EMOJI_PICKER_POPOUT : y.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    L = (e, t) => {
        o.Ay.trackWithMetadata(y.HAw.SEARCH_STARTED, {
            search_type: null != t && t === v.b_.REACTION ? y.I4_.EMOJI_REACTION : y.I4_.EMOJI,
            location: e,
        });
    },
    w = (e, t, n, r, i) => {
        o.Ay.trackWithMetadata(y.HAw.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === v.b_.REACTION ? y.I4_.EMOJI_REACTION : y.I4_.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n,
        });
    },
    M = (e) => {
        let {
                emoji: t,
                emojiSuggestions: n,
                searchQuery: r,
                isLocked: i,
                location: a,
                intention: l,
                index: u,
                messageId: c,
            } = e,
            d = t.uniqueName ?? t.name,
            _ = (0, s.YW)(l)
                .with(v.b_.REACTION, () => y.I4_.EMOJI_REACTION)
                .with(v.b_.AUTO_SUGGESTION, () => y.I4_.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => y.I4_.EMOJI);
        o.Ay.trackWithMetadata(y.HAw.SEARCH_RESULT_SELECTED, {
            search_type: _,
            location: a,
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
    x = (e, t) => {
        o.Ay.trackWithMetadata(y.HAw.SEARCH_RESULT_EMPTY, { search_type: y.I4_.EMOJI, query: t, location: e });
    },
    P = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        o.Ay.trackWithMetadata(y.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: n?.toString(),
            newly_added_highlight: i,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: r,
        });
    },
    k = (e) => {
        let t,
            {
                emoji: n,
                location: r,
                pickerIntention: i,
                category: s,
                subCategory: a = S.tm.NONE,
                position: l,
                newlyAddedHighlight: u,
                isBurstReaction: c,
                messageId: d,
            } = e;
        switch (i) {
            case v.b_.REACTION:
                t = c ? C.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case v.b_.STATUS:
                t = C.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                t = C.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = n.uniqueName ?? n.name;
        o.Ay.trackWithMetadata(y.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: t,
            location: r,
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
    U = (e) => {
        let { emoji: t, location: n } = e,
            r = t.uniqueName ?? t.name;
        o.Ay.trackWithMetadata(y.HAw.EXPRESSION_FAVORITED, {
            location: n,
            expression_type: N.kx.EMOJI,
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
    E.A.Millis.HALF_SECOND,
    { leading: !1, trailing: !0 },
);
let G = (e, t) => (e.type !== S.s.GUILD ? e.id : null != t ? t.name : ""),
    F = (e, t) => {
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
function V(e, t, n, i) {
    r.useEffect(() => {
        _.bW.loadIfNecessary();
    }, []);
    let s = (0, v.Re)(n);
    return (0, a.bG)(
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
                      includeExternalGuilds: s,
                      showOnlyUnicode: i,
                  });
        },
        [e, t, n, s, i],
        a.My,
    );
}
function B(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function j(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function Y(e, t) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, a.bG)(
            [l.Ay],
            () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function W(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function K(e, t, n) {
    if (null == n) return S.tm.NONE;
    let r = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        i = t.map((e) => e.id);
    return r.includes(n) ? S.tm.TOP_GUILD_EMOJI : i.includes(n) ? S.tm.NEWLY_ADDED_EMOJI : S.tm.NONE;
}
function $(e, t) {
    return e === v.b_.REACTION
        ? t
            ? R.intl.string(R.t["h7ES+n"])
            : R.intl.string(R.t["6any2A"])
        : R.intl.string(R.t.KgK5qg);
}
