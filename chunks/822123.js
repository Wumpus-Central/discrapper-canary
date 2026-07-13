"use strict";
n.d(t, {
    C5: () => H,
    CQ: () => U,
    D6: () => Z,
    DA: () => X,
    EG: () => G,
    Fj: () => K,
    Nu: () => W,
    O7: () => q,
    QZ: () => $,
    V$: () => b,
    Wf: () => k,
    Wi: () => x,
    XI: () => z,
    _7: () => B,
    bo: () => F,
    sL: () => Y,
    ss: () => P,
    wT: () => Q,
    wt: () => j,
    xf: () => w,
    yB: () => V,
}),
    n(667532),
    n(321073);
var i = n(64700),
    r = n(735438),
    a = n(132500),
    s = n(17928),
    l = n(95561),
    o = n(159273),
    d = n(7584),
    c = n(17591),
    u = n(850992),
    _ = n(926972),
    E = n(594061),
    A = n(71393),
    h = n(711014),
    I = n(287809),
    f = n(174459),
    p = n(927813),
    T = n(690521),
    m = n(474090),
    g = n(818645),
    S = n(316884),
    N = n(732139),
    C = n(652215),
    O = n(307731),
    R = n(698279),
    L = n(202541),
    D = n(375708);
let y = /-/g;
function v(e) {
    switch (e) {
        case O.EmojiIntention.REACTION:
            return C.I4_.EMOJI_REACTION;
        case O.EmojiIntention.AUTO_SUGGESTION:
            return C.I4_.EMOJI_AUTO_SUGGESTION;
        default:
            return C.I4_.EMOJI;
    }
}
function b(e) {
    let { intention: t, location: n } = e,
        i = (0, a.A)().replace(y, "");
    u.Om.setAnalyticsId(i), l.Ay.trackWithMetadata(C.HAw.SEARCH_OPENED, { search_type: v(t), load_id: i, location: n });
}
function M(e) {
    return null != e && "" !== e ? { load_id: e } : {};
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.getGuildId(),
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, c.V)(n);
    let a = (0, O.isExternalEmojiAllowedForIntention)(e),
        l = K(n),
        d = $(n),
        u = z(n),
        { topEmojis: E, newlyAddedEmojis: f } = (0, S.A)(n, e),
        { allEmojis: p } = (0, g.A)({ topEmojis: E, newlyAddedEmojis: f }),
        C = (0, s.bG)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(n), [n]),
        R = (0, s.bG)([A.A], () => A.A.getGuild(n)?.name),
        L = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
        y = (0, m.ki)(L),
        v = (0, _.Ym)({ location: "useEmojiCategories" });
    return i.useMemo(() => {
        let i = C.getGroupedCustomEmoji(),
            s = h.Ay.getFlattenedGuildIds(),
            c = [],
            _ = { type: N.s.SOUNDMOJI, name: D.intl.string(D.t.f0Ezmv), id: N.R2.SOUNDMOJI, isNitroLocked: !1 };
        function E(i) {
            return T.Ay.getEmojiUnavailableReasons({ categoryEmojis: i, channel: t, guildId: n, intention: e });
        }
        return (
            !(function (e, t) {
                for (let r of e) {
                    let e;
                    if ((t === N.s.GUILD && (e = A.A.getGuild(r)), null == e)) continue;
                    let a = i.get(e.id);
                    if (null == a || 0 === a.length) continue;
                    let {
                        emojisDisabled: s,
                        emojisUnfiltered: l,
                        emojisPremiumLockedCount: d,
                        emojiNitroLocked: u,
                    } = E(a);
                    if (0 === l.length) continue;
                    let _ = o.Ay.getHiddenEmojiIds(e.id),
                        h = null;
                    t === N.s.GUILD &&
                        (h = {
                            type: N.s.GUILD,
                            guild: e,
                            isNitroLocked: !y && u && d === a.length,
                            emojis: a,
                            emojisDisabled: s,
                            emojisHidden: _,
                        }),
                        null != h && (e.id === n ? c.unshift(h) : c.push(h));
                }
            })(s, N.s.GUILD),
            o.Ay.categories.reduce(
                (t, i) => {
                    if (i === N.R2.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = E(p);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: N.s.TOP_GUILD_EMOJI,
                            id: i,
                            name: D.intl.formatToPlainString(D.t.W6Wi1X, { guildName: R }),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e,
                        });
                    } else if (i === N.R2.RECENT) {
                        let { emojisDisabled: n, emojisUnfiltered: r } = E(
                            [O.EmojiIntention.REACTION, O.EmojiIntention.DEFAULT_REACT_EMOJI].includes(e) ? d : l,
                        );
                        if (null == r || 0 === r.length) return t;
                        t.push({
                            type: N.s.RECENT,
                            id: i,
                            name: D.intl.string(D.t["5TvaSm"]),
                            isNitroLocked: !1,
                            emojis: r,
                            emojisDisabled: n,
                        });
                    } else if (i === N.R2.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = E(u);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: N.s.FAVORITES,
                            id: i,
                            name: D.intl.string(D.t.y3LQCG),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e,
                        });
                    } else if (i === N.R2.CUSTOM) {
                        let e = c;
                        a || (e = c.filter((e) => (e.type === N.s.GUILD ? e.guild.id === n : (e.type, !1)))),
                            t.push(...e);
                    } else t.push({ type: N.s.UNICODE, id: i, name: i, isNitroLocked: !1 });
                    return t;
                },
                v && r ? [_] : [],
            )
        );
    }, [C, t, n, e, y, p, R, d, l, u, a, v, r]);
}
function U() {
    return d.Ay.getCategories().map((e) => ({ type: N.s.UNICODE, id: e, name: e, isNitroLocked: !1 }));
}
function w(e) {
    let t = e?.getGuildId() != null;
    f.default.track(C.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: t ? C.liQ.GUILD_CHANNEL : C.liQ.DM_CHANNEL,
        location_section: null != e ? C.JJy.EMOJI_PICKER_POPOUT : C.JJy.CUSTOM_STATUS_MODAL,
    });
}
function G(e, t) {
    l.Ay.trackWithMetadata(C.HAw.SEARCH_STARTED, { search_type: v(t), location: e, ...M(u.Om.getAnalyticsId()) });
}
function x(e) {
    let { totalResults: t, numEmojiLocked: n, location: i, searchQuery: r, intention: a, loadId: s } = e;
    l.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_VIEWED, {
        search_type: v(a),
        total_results: t,
        num_results_locked: n,
        query: r,
        location: i,
        ...M(s),
    });
}
function k(e) {
    let {
            emoji: t,
            emojiSuggestions: n,
            searchQuery: i,
            isLocked: r,
            location: a,
            intention: s,
            index: o,
            messageId: d,
        } = e,
        c = t.uniqueName ?? t.name,
        _ = v(s);
    l.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_SELECTED, {
        search_type: _,
        location: a,
        expression_guild_id: t.guildId,
        emoji_id: t.id,
        emoji_name: c,
        is_custom: null != t.id,
        is_animated: t.animated,
        is_locked: r,
        query: i,
        index_num: o,
        ...M(n?.loadId ?? u.Om.getAnalyticsId()),
        total_results: n?.results?.length,
        emoji_suggestion_ids: n?.results
            ?.map((e) => {
                let { emoji: t } = e;
                return t.id;
            })
            .filter((e) => null != e),
        message_id: d,
    });
}
function F(e) {
    let { location: t, searchQuery: n, intention: i, loadId: r } = e;
    l.Ay.trackWithMetadata(C.HAw.SEARCH_RESULT_EMPTY, { search_type: v(i), query: n, location: t, ...M(r) });
}
function V(e) {
    let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
    l.Ay.trackWithMetadata(C.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
            category: a,
            subCategory: s = N.tm.NONE,
            position: o,
            newlyAddedHighlight: d,
            isBurstReaction: c,
            messageId: u,
            lockedReason: _,
            visibleRowIndex: E,
        } = e;
    switch (r) {
        case O.EmojiIntention.REACTION:
            t = c ? L.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : L.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            break;
        case O.EmojiIntention.STATUS:
            t = L.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            break;
        default:
            t = L.e.EMOJI_PICKER_EMOJI_CLICKED;
    }
    let A = n.uniqueName ?? n.name;
    l.Ay.trackWithMetadata(
        null != _ ? C.HAw.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED : C.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED,
        {
            type: t,
            location: i,
            expression_id: n.id,
            expression_name: A,
            expression_guild_id: n.guildId,
            is_custom: null != n.id,
            is_animated: n.animated,
            expression_picker_section: a,
            expression_section: s?.toString(),
            emoji_position: o,
            newly_added_highlight: d,
            is_burst: c,
            message_id: u,
            ...(null != _ && { locked_reason: O.EmojiDisabledReasons[_], visible_row_index: E }),
        },
    );
}
function H(e) {
    let { emoji: t, location: n } = e,
        i = t.uniqueName ?? t.name;
    l.Ay.trackWithMetadata(C.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: R.kx.EMOJI,
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
            return D.intl.formatToPlainString(D.t.W6Wi1X, { guildName: t });
        case N.R2.RECENT:
            return D.intl.string(D.t["5TvaSm"]);
        case N.R2.FAVORITES:
            return D.intl.string(D.t.y3LQCG);
        case N.R2.ACTIVITY:
            return D.intl.string(D.t.O783tR);
        case N.R2.FLAGS:
            return D.intl.string(D.t.vvaizu);
        case N.R2.FOOD:
            return D.intl.string(D.t.ldm9aY);
        case N.R2.NATURE:
            return D.intl.string(D.t.egIBDH);
        case N.R2.OBJECTS:
            return D.intl.string(D.t.gWm7Mk);
        case N.R2.PEOPLE:
            return D.intl.string(D.t.GX594D);
        case N.R2.SYMBOLS:
            return D.intl.string(D.t.QXMYAb);
        case N.R2.TRAVEL:
            return D.intl.string(D.t.w33hIP);
        case N.R2.PREMIUM_UPSELL:
            return D.intl.string(D.t.pAF6xE);
        case N.R2.SOUNDMOJI:
            return D.intl.string(D.t.f0Ezmv);
        default:
            return t ?? e;
    }
}
function Y(e, t, n, r) {
    i.useEffect(() => {
        E.bW.loadIfNecessary();
    }, []);
    let a = (0, O.isExternalEmojiAllowedForIntention)(n);
    return (0, s.bG)(
        [o.Ay],
        () => {
            let i = e.replace(/^:/, "").replace(/:$/, "");
            return "" === i
                ? null
                : o.Ay.searchWithoutFetchingLatest({
                      channel: t,
                      query: i,
                      count: 0,
                      intention: n,
                      includeExternalGuilds: a,
                      showOnlyUnicode: r,
                  });
        },
        [e, t, n, a, r],
        s.My,
    );
}
function K(e) {
    return (
        i.useEffect(() => {
            E.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function $(e) {
    return (
        i.useEffect(() => {
            E.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () =>
            o.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function z(e) {
    return (
        i.useEffect(() => {
            E.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function q(e, t) {
    return (
        i.useEffect(() => {
            E.bW.loadIfNecessary();
        }, []),
        (0, s.bG)(
            [o.Ay],
            () => null != t && o.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function Z(e) {
    return (
        i.useEffect(() => {
            E.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function X(e, t, n) {
    if (null == n) return N.tm.NONE;
    let i = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        r = t.map((e) => e.id);
    return i.includes(n) ? N.tm.TOP_GUILD_EMOJI : r.includes(n) ? N.tm.NEWLY_ADDED_EMOJI : N.tm.NONE;
}
function Q(e, t) {
    return e === O.EmojiIntention.REACTION
        ? t
            ? D.intl.string(D.t["h7ES+n"])
            : D.intl.string(D.t["6any2A"])
        : D.intl.string(D.t.KgK5qg);
}
(0, r.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        l.Ay.trackWithMetadata(C.HAw.AUTO_SUGGEST_DISPLAYED, {
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
    p.A.Millis.HALF_SECOND,
    { leading: !1, trailing: !0 },
);
