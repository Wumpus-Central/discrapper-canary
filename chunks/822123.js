"use strict";
n.d(t, {
    C5: () => U,
    CQ: () => O,
    D6: () => W,
    DA: () => K,
    EG: () => L,
    Fj: () => B,
    Nu: () => V,
    O7: () => Y,
    QZ: () => j,
    Wf: () => x,
    Wi: () => w,
    XI: () => H,
    _7: () => k,
    bo: () => P,
    sL: () => F,
    ss: () => R,
    wT: () => z,
    wt: () => G,
    xf: () => D,
    yB: () => M,
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
    p = n(711014),
    h = n(287809),
    m = n(954571),
    g = n(927813),
    E = n(690521),
    A = n(474090),
    I = n(818645),
    T = n(316884),
    y = n(732139),
    S = n(652215),
    v = n(307731),
    C = n(698279),
    b = n(788868),
    N = n(985018);
let R = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, c.V)(n);
        let a = (0, v.Re)(e),
            o = B(n),
            u = j(n),
            _ = H(n),
            { topEmojis: m, newlyAddedEmojis: g } = (0, T.A)(n, e),
            { allEmojis: S } = (0, I.A)({ topEmojis: m, newlyAddedEmojis: g }),
            C = (0, s.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            b = (0, s.bG)([f.A], () => f.A.getGuild(n)?.name),
            R = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
            O = (0, A.ki)(R),
            D = (0, d.Ym)({ location: "useEmojiCategories" });
        return r.useMemo(() => {
            let r = C.getGroupedCustomEmoji(),
                s = p.Ay.getFlattenedGuildIds(),
                c = [],
                d = { type: y.s.SOUNDMOJI, name: N.intl.string(N.t.f0Ezmv), id: y.R2.SOUNDMOJI, isNitroLocked: !1 },
                h = (r) => E.Ay.getEmojiUnavailableReasons({ categoryEmojis: r, channel: t, guildId: n, intention: e });
            return (
                ((e, t) => {
                    for (let i of e) {
                        let e;
                        if ((t === y.s.GUILD && (e = f.A.getGuild(i)), null == e)) continue;
                        let a = r?.[e.id];
                        if (null == a || 0 === a.length) continue;
                        let {
                            emojisDisabled: s,
                            emojisUnfiltered: o,
                            emojisPremiumLockedCount: l,
                            emojiNitroLocked: u,
                        } = h(a);
                        if (0 === o.length) continue;
                        let d = null;
                        t === y.s.GUILD &&
                            (d = {
                                type: y.s.GUILD,
                                guild: e,
                                isNitroLocked: !O && u && l === a.length,
                                emojis: a,
                                emojisDisabled: s,
                            }),
                            null != d && (e.id === n ? c.unshift(d) : c.push(d));
                    }
                })(s, y.s.GUILD),
                l.Ay.categories.reduce(
                    (t, r) => {
                        if (r === y.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(S);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: y.s.TOP_GUILD_EMOJI,
                                id: r,
                                name: N.intl.formatToPlainString(N.t.W6Wi1X, { guildName: b }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === y.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: i } = h(
                                [v.b_.REACTION, v.b_.DEFAULT_REACT_EMOJI].includes(e) ? u : o,
                            );
                            if (null == i || 0 === i.length) return t;
                            t.push({
                                type: y.s.RECENT,
                                id: r,
                                name: N.intl.string(N.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: i,
                                emojisDisabled: n,
                            });
                        } else if (r === y.R2.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = h(_);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: y.s.FAVORITES,
                                id: r,
                                name: N.intl.string(N.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (r === y.R2.CUSTOM) {
                            let e = c;
                            a || (e = c.filter((e) => e.type === y.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else t.push({ type: y.s.UNICODE, id: r, name: r, isNitroLocked: !1 });
                        return t;
                    },
                    D && i ? [d] : [],
                )
            );
        }, [C, t, n, e, O, S, b, u, o, _, a, D, i]);
    },
    O = () => u.Ay.getCategories().map((e) => ({ type: y.s.UNICODE, id: e, name: e, isNitroLocked: !1 })),
    D = (e) => {
        let t = e?.getGuildId() != null;
        m.default.track(S.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? S.liQ.GUILD_CHANNEL : S.liQ.DM_CHANNEL,
            location_section: null != e ? S.JJy.EMOJI_PICKER_POPOUT : S.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    L = (e, t) => {
        o.Ay.trackWithMetadata(S.HAw.SEARCH_STARTED, {
            search_type: null != t && t === v.b_.REACTION ? S.I4_.EMOJI_REACTION : S.I4_.EMOJI,
            location: e,
        });
    },
    w = (e, t, n, r, i) => {
        o.Ay.trackWithMetadata(S.HAw.SEARCH_RESULT_VIEWED, {
            search_type: null != i && i === v.b_.REACTION ? S.I4_.EMOJI_REACTION : S.I4_.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: r,
            location: n,
        });
    },
    x = (e) => {
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
                .with(v.b_.REACTION, () => S.I4_.EMOJI_REACTION)
                .with(v.b_.AUTO_SUGGESTION, () => S.I4_.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => S.I4_.EMOJI);
        o.Ay.trackWithMetadata(S.HAw.SEARCH_RESULT_SELECTED, {
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
    P = (e, t) => {
        o.Ay.trackWithMetadata(S.HAw.SEARCH_RESULT_EMPTY, { search_type: S.I4_.EMOJI, query: t, location: e });
    },
    M = (e) => {
        let { emoji: t, subCategory: n, position: r, newlyAddedHighlight: i } = e;
        o.Ay.trackWithMetadata(S.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
                category: a,
                subCategory: s = y.tm.NONE,
                position: l,
                newlyAddedHighlight: u,
                isBurstReaction: c,
                messageId: d,
            } = e;
        switch (i) {
            case v.b_.REACTION:
                t = c ? b.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : b.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case v.b_.STATUS:
                t = b.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                t = b.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let _ = n.uniqueName ?? n.name;
        o.Ay.trackWithMetadata(S.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
    U = (e) => {
        let { emoji: t, location: n } = e,
            r = t.uniqueName ?? t.name;
        o.Ay.trackWithMetadata(S.HAw.EXPRESSION_FAVORITED, {
            location: n,
            expression_type: C.kx.EMOJI,
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
        o.Ay.trackWithMetadata(S.HAw.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: S.ndy.EMOJI,
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
let G = (e, t) => (e.type !== y.s.GUILD ? e.id : null != t ? t.name : ""),
    V = (e, t) => {
        switch (e) {
            case y.R2.TOP_GUILD_EMOJI:
                return N.intl.formatToPlainString(N.t.W6Wi1X, { guildName: t });
            case y.R2.RECENT:
                return N.intl.string(N.t["5TvaSm"]);
            case y.R2.FAVORITES:
                return N.intl.string(N.t.y3LQCG);
            case y.R2.ACTIVITY:
                return N.intl.string(N.t.O783tR);
            case y.R2.FLAGS:
                return N.intl.string(N.t.vvaizu);
            case y.R2.FOOD:
                return N.intl.string(N.t.ldm9aY);
            case y.R2.NATURE:
                return N.intl.string(N.t.egIBDH);
            case y.R2.OBJECTS:
                return N.intl.string(N.t.gWm7Mk);
            case y.R2.PEOPLE:
                return N.intl.string(N.t.GX594D);
            case y.R2.SYMBOLS:
                return N.intl.string(N.t.QXMYAb);
            case y.R2.TRAVEL:
                return N.intl.string(N.t.w33hIP);
            case y.R2.PREMIUM_UPSELL:
                return N.intl.string(N.t.pAF6xE);
            case y.R2.SOUNDMOJI:
                return N.intl.string(N.t.f0Ezmv);
            default:
                return t ?? e;
        }
    };
function F(e, t, n, i) {
    r.useEffect(() => {
        _.bW.loadIfNecessary();
    }, []);
    let a = (0, v.Re)(n);
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
function B(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function j(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function H(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function Y(e, t) {
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
function W(e) {
    return (
        r.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function K(e, t, n) {
    if (null == n) return y.tm.NONE;
    let r = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        i = t.map((e) => e.id);
    return r.includes(n) ? y.tm.TOP_GUILD_EMOJI : i.includes(n) ? y.tm.NEWLY_ADDED_EMOJI : y.tm.NONE;
}
function z(e, t) {
    return e === v.b_.REACTION
        ? t
            ? N.intl.string(N.t["h7ES+n"])
            : N.intl.string(N.t["6any2A"])
        : N.intl.string(N.t.KgK5qg);
}
