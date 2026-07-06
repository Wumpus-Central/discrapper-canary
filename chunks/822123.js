"use strict";
n.d(t, {
    C5: () => H,
    CQ: () => M,
    D6: () => Z,
    DA: () => X,
    EG: () => U,
    Fj: () => K,
    Nu: () => W,
    O7: () => q,
    QZ: () => $,
    V$: () => D,
    Wf: () => G,
    Wi: () => k,
    XI: () => z,
    _7: () => B,
    bo: () => V,
    sL: () => Y,
    ss: () => P,
    wT: () => Q,
    wt: () => j,
    xf: () => x,
    yB: () => F,
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
    E = n(711014),
    p = n(287809),
    m = n(174459),
    g = n(927813),
    A = n(690521),
    I = n(474090),
    T = n(818645),
    S = n(316884),
    N = n(732139),
    C = n(652215),
    y = n(307731),
    O = n(698279),
    R = n(202541),
    v = n(375708);
let b = /-/g;
function L(e) {
    switch (e) {
        case y.EmojiIntention.REACTION:
            return C.I4_.EMOJI_REACTION;
        case y.EmojiIntention.AUTO_SUGGESTION:
            return C.I4_.EMOJI_AUTO_SUGGESTION;
        default:
            return C.I4_.EMOJI;
    }
}
function D(e) {
    let { intention: t, location: n } = e,
        i = (0, s.A)().replace(b, "");
    d.Om.setAnalyticsId(i), o.Ay.trackWithMetadata(C.HAw.SEARCH_OPENED, { search_type: L(t), load_id: i, location: n });
}
function w(e) {
    return null != e && "" !== e ? { load_id: e } : {};
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, c.V)(n);
    let s = (0, y.isExternalEmojiAllowedForIntention)(e),
        o = K(n),
        u = $(n),
        d = z(n),
        { topEmojis: h, newlyAddedEmojis: m } = (0, S.A)(n, e),
        { allEmojis: g } = (0, T.A)({ topEmojis: h, newlyAddedEmojis: m }),
        C = (0, a.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
        O = (0, a.bG)([f.A], () => f.A.getGuild(n)?.name),
        R = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        b = (0, I.ki)(R),
        L = (0, _.Ym)({ location: "useEmojiCategories" });
    return i.useMemo(() => {
        let i = C.getGroupedCustomEmoji(),
            a = E.Ay.getFlattenedGuildIds(),
            c = [],
            _ = { type: N.s.SOUNDMOJI, name: v.intl.string(v.t.f0Ezmv), id: N.R2.SOUNDMOJI, isNitroLocked: !1 };
        function h(i) {
            return A.Ay.getEmojiUnavailableReasons({ categoryEmojis: i, channel: t, guildId: n, intention: e });
        }
        return (
            !(function (e, t) {
                for (let r of e) {
                    let e;
                    if ((t === N.s.GUILD && (e = f.A.getGuild(r)), null == e)) continue;
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
                        E = null;
                    t === N.s.GUILD &&
                        (E = {
                            type: N.s.GUILD,
                            guild: e,
                            isNitroLocked: !b && d && u === s.length,
                            emojis: s,
                            emojisDisabled: a,
                            emojisHidden: _,
                        }),
                        null != E && (e.id === n ? c.unshift(E) : c.push(E));
                }
            })(a, N.s.GUILD),
            l.Ay.categories.reduce(
                (t, i) => {
                    if (i === N.R2.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = h(g);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: N.s.TOP_GUILD_EMOJI,
                            id: i,
                            name: v.intl.formatToPlainString(v.t.W6Wi1X, { guildName: O }),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e,
                        });
                    } else if (i === N.R2.RECENT) {
                        let { emojisDisabled: n, emojisUnfiltered: r } = h(
                            [y.EmojiIntention.REACTION, y.EmojiIntention.DEFAULT_REACT_EMOJI].includes(e) ? u : o,
                        );
                        if (null == r || 0 === r.length) return t;
                        t.push({
                            type: N.s.RECENT,
                            id: i,
                            name: v.intl.string(v.t["5TvaSm"]),
                            isNitroLocked: !1,
                            emojis: r,
                            emojisDisabled: n,
                        });
                    } else if (i === N.R2.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = h(d);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: N.s.FAVORITES,
                            id: i,
                            name: v.intl.string(v.t.y3LQCG),
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
                L && r ? [_] : [],
            )
        );
    }, [C, t, n, e, b, g, O, u, o, d, s, L, r]);
}
function M() {
    return u.Ay.getCategories().map((e) => ({ type: N.s.UNICODE, id: e, name: e, isNitroLocked: !1 }));
}
function x(e) {
    let t = e?.getGuildId() != null;
    m.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: t ? C.liQ.GUILD_CHANNEL : C.liQ.DM_CHANNEL,
        location_section: null != e ? C.JJy.EMOJI_PICKER_POPOUT : C.JJy.CUSTOM_STATUS_MODAL,
    });
}
function U(e, t) {
    o.Ay.trackWithMetadata(C.HAw.SEARCH_STARTED, { search_type: L(t), location: e, ...w(d.Om.getAnalyticsId()) });
}
function k(e) {
    let { totalResults: t, numEmojiLocked: n, location: i, searchQuery: r, intention: s, loadId: a } = e;
    o.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_VIEWED, {
        search_type: L(s),
        total_results: t,
        num_results_locked: n,
        query: r,
        location: i,
        ...w(a),
    });
}
function G(e) {
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
        _ = L(a);
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
}
function V(e) {
    let { location: t, searchQuery: n, intention: i, loadId: r } = e;
    o.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_EMPTY, { search_type: L(i), query: n, location: t, ...w(r) });
}
function F(e) {
    let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
    o.Ay.trackWithMetadata(C.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
        expression_section: n?.toString(),
        newly_added_highlight: r,
        emoji_id: t.id,
        emoji_name: t.name,
        emoji_animated: t.animated,
        emoji_position: i,
    });
}
function B(e) {
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
            lockedReason: _,
            visibleRowIndex: h,
        } = e;
    switch (r) {
        case y.EmojiIntention.REACTION:
            t = c ? R.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : R.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            break;
        case y.EmojiIntention.STATUS:
            t = R.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            break;
        default:
            t = R.e.EMOJI_PICKER_EMOJI_CLICKED;
    }
    let f = n.uniqueName ?? n.name;
    o.Ay.trackWithMetadata(
        null != _ ? C.HAw.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED : C.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED,
        {
            type: t,
            location: i,
            expression_id: n.id,
            expression_name: f,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
            expression_picker_section: s,
            expression_section: a?.toString(),
            emoji_position: l,
            newly_added_highlight: u,
            is_burst: c,
            message_id: d,
            ...(null != _ && { locked_reason: y.EmojiDisabledReasons[_], visible_row_index: h }),
        },
    );
}
function H(e) {
    let { emoji: t, location: n } = e,
        i = t.uniqueName ?? t.name;
    o.Ay.trackWithMetadata(C.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: O.kx.EMOJI,
        expression_id: t.id,
        expression_name: i,
        expression_guild_id: t.guildId,
        is_custom: null != t.id,
        is_animated: t.animated,
    });
}
function j(e, t) {
    return e.type !== N.s.GUILD ? e.id : null != t ? t.name : "";
}
function W(e, t) {
    switch (e) {
        case N.R2.TOP_GUILD_EMOJI:
            return v.intl.formatToPlainString(v.t.W6Wi1X, { guildName: t });
        case N.R2.RECENT:
            return v.intl.string(v.t["5TvaSm"]);
        case N.R2.FAVORITES:
            return v.intl.string(v.t.y3LQCG);
        case N.R2.ACTIVITY:
            return v.intl.string(v.t.O783tR);
        case N.R2.FLAGS:
            return v.intl.string(v.t.vvaizu);
        case N.R2.FOOD:
            return v.intl.string(v.t.ldm9aY);
        case N.R2.NATURE:
            return v.intl.string(v.t.egIBDH);
        case N.R2.OBJECTS:
            return v.intl.string(v.t.gWm7Mk);
        case N.R2.PEOPLE:
            return v.intl.string(v.t.GX594D);
        case N.R2.SYMBOLS:
            return v.intl.string(v.t.QXMYAb);
        case N.R2.TRAVEL:
            return v.intl.string(v.t.w33hIP);
        case N.R2.PREMIUM_UPSELL:
            return v.intl.string(v.t.pAF6xE);
        case N.R2.SOUNDMOJI:
            return v.intl.string(v.t.f0Ezmv);
        default:
            return t ?? e;
    }
}
function Y(e, t, n, r) {
    i.useEffect(() => {
        h.bW.loadIfNecessary();
    }, []);
    let s = (0, y.isExternalEmojiAllowedForIntention)(n);
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
    if (null == n) return N.tm.NONE;
    let i = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        r = t.map((e) => e.id);
    return i.includes(n) ? N.tm.TOP_GUILD_EMOJI : r.includes(n) ? N.tm.NEWLY_ADDED_EMOJI : N.tm.NONE;
}
function Q(e, t) {
    return e === y.EmojiIntention.REACTION
        ? t
            ? v.intl.string(v.t["h7ES+n"])
            : v.intl.string(v.t["6any2A"])
        : v.intl.string(v.t.KgK5qg);
}
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
