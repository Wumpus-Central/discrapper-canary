"use strict";
n.d(t, {
    C5: () => x,
    CQ: () => D,
    D6: () => Y,
    DA: () => K,
    EG: () => b,
    Fj: () => B,
    Nu: () => V,
    O7: () => W,
    QZ: () => H,
    Wf: () => P,
    Wi: () => w,
    XI: () => j,
    _7: () => U,
    bo: () => k,
    sL: () => F,
    ss: () => v,
    wT: () => z,
    wt: () => G,
    xf: () => L,
    yB: () => M,
}),
    n(667532),
    n(321073),
    n(801541);
var i = n(64700),
    r = n(735438),
    s = n(889137),
    a = n(17928),
    o = n(58149),
    l = n(159273),
    d = n(7584),
    _ = n(17591),
    u = n(704591),
    c = n(594061),
    E = n(71393),
    h = n(711014),
    m = n(287809),
    f = n(954571),
    g = n(927813),
    p = n(690521),
    A = n(474090),
    I = n(818645),
    T = n(316884),
    S = n(732139),
    N = n(652215),
    C = n(307731),
    R = n(698279),
    O = n(788868),
    y = n(985018);
let v = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, _.V)(n);
        let s = (0, C.isExternalEmojiAllowedForIntention)(e),
            o = B(n),
            d = H(n),
            c = j(n),
            { topEmojis: f, newlyAddedEmojis: g } = (0, T.A)(n, e),
            { allEmojis: N } = (0, I.A)({ topEmojis: f, newlyAddedEmojis: g }),
            R = (0, a.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
            O = (0, a.bG)([E.A], () => E.A.getGuild(n)?.name),
            v = (0, a.bG)([m.default], () => m.default.getCurrentUser()),
            D = (0, A.ki)(v),
            L = (0, u.Ym)({ location: "useEmojiCategories" });
        return i.useMemo(() => {
            let i = R.getGroupedCustomEmoji(),
                a = h.Ay.getFlattenedGuildIds(),
                _ = [],
                u = { type: S.s.SOUNDMOJI, name: y.intl.string(y.t.f0Ezmv), id: S.R2.SOUNDMOJI, isNitroLocked: !1 },
                m = (i) => p.Ay.getEmojiUnavailableReasons({ categoryEmojis: i, channel: t, guildId: n, intention: e });
            return (
                ((e, t) => {
                    for (let r of e) {
                        let e;
                        if ((t === S.s.GUILD && (e = E.A.getGuild(r)), null == e)) continue;
                        let s = i.get(e.id);
                        if (null == s || 0 === s.length) continue;
                        let {
                            emojisDisabled: a,
                            emojisUnfiltered: o,
                            emojisPremiumLockedCount: d,
                            emojiNitroLocked: u,
                        } = m(s);
                        if (0 === o.length) continue;
                        let c = l.Ay.getHiddenEmojiIds(e.id),
                            h = null;
                        t === S.s.GUILD &&
                            (h = {
                                type: S.s.GUILD,
                                guild: e,
                                isNitroLocked: !D && u && d === s.length,
                                emojis: s,
                                emojisDisabled: a,
                                emojisHidden: c,
                            }),
                            null != h && (e.id === n ? _.unshift(h) : _.push(h));
                    }
                })(a, S.s.GUILD),
                l.Ay.categories.reduce(
                    (t, i) => {
                        if (i === S.R2.TOP_GUILD_EMOJI) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = m(N);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.s.TOP_GUILD_EMOJI,
                                id: i,
                                name: y.intl.formatToPlainString(y.t.W6Wi1X, { guildName: O }),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (i === S.R2.RECENT) {
                            let { emojisDisabled: n, emojisUnfiltered: r } = m(
                                [C.EmojiIntention.REACTION, C.EmojiIntention.DEFAULT_REACT_EMOJI].includes(e) ? d : o,
                            );
                            if (null == r || 0 === r.length) return t;
                            t.push({
                                type: S.s.RECENT,
                                id: i,
                                name: y.intl.string(y.t["5TvaSm"]),
                                isNitroLocked: !1,
                                emojis: r,
                                emojisDisabled: n,
                            });
                        } else if (i === S.R2.FAVORITES) {
                            let { emojisDisabled: e, emojisUnfiltered: n } = m(c);
                            if (null == n || 0 === n.length) return t;
                            t.push({
                                type: S.s.FAVORITES,
                                id: i,
                                name: y.intl.string(y.t.y3LQCG),
                                isNitroLocked: !1,
                                emojis: n,
                                emojisDisabled: e,
                            });
                        } else if (i === S.R2.CUSTOM) {
                            let e = _;
                            s || (e = _.filter((e) => e.type === S.s.GUILD && e.guild.id === n)), t.push(...e);
                        } else t.push({ type: S.s.UNICODE, id: i, name: i, isNitroLocked: !1 });
                        return t;
                    },
                    L && r ? [u] : [],
                )
            );
        }, [R, t, n, e, D, N, O, d, o, c, s, L, r]);
    },
    D = () => d.Ay.getCategories().map((e) => ({ type: S.s.UNICODE, id: e, name: e, isNitroLocked: !1 })),
    L = (e) => {
        let t = e?.getGuildId() != null;
        f.default.track(N.HAw.PREMIUM_PROMOTION_OPENED, {
            location_page: t ? N.liQ.GUILD_CHANNEL : N.liQ.DM_CHANNEL,
            location_section: null != e ? N.JJy.EMOJI_PICKER_POPOUT : N.JJy.CUSTOM_STATUS_MODAL,
        });
    },
    b = (e, t) => {
        o.Ay.trackWithMetadata(N.HAw.SEARCH_STARTED, {
            search_type: null != t && t === C.EmojiIntention.REACTION ? N.I4_.EMOJI_REACTION : N.I4_.EMOJI,
            location: e,
        });
    },
    w = (e, t, n, i, r) => {
        o.Ay.trackWithMetadata(N.HAw.SEARCH_RESULT_VIEWED, {
            search_type: null != r && r === C.EmojiIntention.REACTION ? N.I4_.EMOJI_REACTION : N.I4_.EMOJI,
            total_results: e,
            num_results_locked: t,
            query: i,
            location: n,
        });
    },
    P = (e) => {
        let {
                emoji: t,
                emojiSuggestions: n,
                searchQuery: i,
                isLocked: r,
                location: a,
                intention: l,
                index: d,
                messageId: _,
            } = e,
            u = t.uniqueName ?? t.name,
            c = (0, s.YW)(l)
                .with(C.EmojiIntention.REACTION, () => N.I4_.EMOJI_REACTION)
                .with(C.EmojiIntention.AUTO_SUGGESTION, () => N.I4_.EMOJI_AUTO_SUGGESTION)
                .otherwise(() => N.I4_.EMOJI);
        o.Ay.trackWithMetadata(N.HAw.SEARCH_RESULT_SELECTED, {
            search_type: c,
            location: a,
            expression_guild_id: t.guildId,
            emoji_id: t.id,
            emoji_name: u,
            is_custom: null != t.id,
            is_animated: t.animated,
            is_locked: r,
            query: i,
            index_num: d,
            load_id: n?.loadId,
            total_results: n?.results?.length,
            emoji_suggestion_ids: n?.results
                ?.map((e) => {
                    let { emoji: t } = e;
                    return t.id;
                })
                .filter((e) => null != e),
            message_id: _,
        });
    },
    k = (e, t) => {
        o.Ay.trackWithMetadata(N.HAw.SEARCH_RESULT_EMPTY, { search_type: N.I4_.EMOJI, query: t, location: e });
    },
    M = (e) => {
        let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
        o.Ay.trackWithMetadata(N.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
            expression_section: n?.toString(),
            newly_added_highlight: r,
            emoji_id: t.id,
            emoji_name: t.name,
            emoji_animated: t.animated,
            emoji_position: i,
        });
    },
    U = (e) => {
        let t,
            {
                emoji: n,
                location: i,
                pickerIntention: r,
                category: s,
                subCategory: a = S.tm.NONE,
                position: l,
                newlyAddedHighlight: d,
                isBurstReaction: _,
                messageId: u,
            } = e;
        switch (r) {
            case C.EmojiIntention.REACTION:
                t = _ ? O.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : O.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                break;
            case C.EmojiIntention.STATUS:
                t = O.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                break;
            default:
                t = O.e.EMOJI_PICKER_EMOJI_CLICKED;
        }
        let c = n.uniqueName ?? n.name;
        o.Ay.trackWithMetadata(N.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: t,
            location: i,
            expression_id: n.id,
            expression_name: c,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
            expression_picker_section: s,
            expression_section: a?.toString(),
            emoji_position: l,
            newly_added_highlight: d,
            is_burst: _,
            message_id: u,
        });
    },
    x = (e) => {
        let { emoji: t, location: n } = e,
            i = t.uniqueName ?? t.name;
        o.Ay.trackWithMetadata(N.HAw.EXPRESSION_FAVORITED, {
            location: n,
            expression_type: R.kx.EMOJI,
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
        o.Ay.trackWithMetadata(N.HAw.AUTO_SUGGEST_DISPLAYED, {
            suggestion_type: N.ndy.EMOJI,
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
let G = (e, t) => (e.type !== S.s.GUILD ? e.id : null != t ? t.name : ""),
    V = (e, t) => {
        switch (e) {
            case S.R2.TOP_GUILD_EMOJI:
                return y.intl.formatToPlainString(y.t.W6Wi1X, { guildName: t });
            case S.R2.RECENT:
                return y.intl.string(y.t["5TvaSm"]);
            case S.R2.FAVORITES:
                return y.intl.string(y.t.y3LQCG);
            case S.R2.ACTIVITY:
                return y.intl.string(y.t.O783tR);
            case S.R2.FLAGS:
                return y.intl.string(y.t.vvaizu);
            case S.R2.FOOD:
                return y.intl.string(y.t.ldm9aY);
            case S.R2.NATURE:
                return y.intl.string(y.t.egIBDH);
            case S.R2.OBJECTS:
                return y.intl.string(y.t.gWm7Mk);
            case S.R2.PEOPLE:
                return y.intl.string(y.t.GX594D);
            case S.R2.SYMBOLS:
                return y.intl.string(y.t.QXMYAb);
            case S.R2.TRAVEL:
                return y.intl.string(y.t.w33hIP);
            case S.R2.PREMIUM_UPSELL:
                return y.intl.string(y.t.pAF6xE);
            case S.R2.SOUNDMOJI:
                return y.intl.string(y.t.f0Ezmv);
            default:
                return t ?? e;
        }
    };
function F(e, t, n, r) {
    i.useEffect(() => {
        c.bW.loadIfNecessary();
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
function B(e) {
    return (
        i.useEffect(() => {
            c.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function H(e) {
    return (
        i.useEffect(() => {
            c.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () =>
            l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function j(e) {
    return (
        i.useEffect(() => {
            c.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function W(e, t) {
    return (
        i.useEffect(() => {
            c.bW.loadIfNecessary();
        }, []),
        (0, a.bG)(
            [l.Ay],
            () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function Y(e) {
    return (
        i.useEffect(() => {
            c.bW.loadIfNecessary();
        }, []),
        (0, a.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function K(e, t, n) {
    if (null == n) return S.tm.NONE;
    let i = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        r = t.map((e) => e.id);
    return i.includes(n) ? S.tm.TOP_GUILD_EMOJI : r.includes(n) ? S.tm.NEWLY_ADDED_EMOJI : S.tm.NONE;
}
function z(e, t) {
    return e === C.EmojiIntention.REACTION
        ? t
            ? y.intl.string(y.t["h7ES+n"])
            : y.intl.string(y.t["6any2A"])
        : y.intl.string(y.t.KgK5qg);
}
