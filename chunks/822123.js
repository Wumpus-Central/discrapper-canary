(n.d(t, {
    C5: () => V,
    CQ: () => M,
    D6: () => X,
    DA: () => q,
    EG: () => w,
    Fj: () => Y,
    Nu: () => j,
    O7: () => z,
    QZ: () => K,
    V$: () => v,
    Wf: () => x,
    Wi: () => G,
    XI: () => $,
    _7: () => B,
    bo: () => k,
    sL: () => W,
    ss: () => P,
    wT: () => Z,
    wt: () => H,
    xf: () => U,
    yB: () => F,
}),
    n(667532),
    n(321073));
var i = n(582128),
    r = n(435558),
    a = n(132500),
    s = n(17928),
    l = n(666860),
    o = n(236285),
    d = n(7584),
    c = n(17591),
    u = n(850992),
    _ = n(594061),
    E = n(71393),
    A = n(711014),
    h = n(287809),
    f = n(174459),
    I = n(927813),
    p = n(690521),
    T = n(474090),
    m = n(818645),
    g = n(316884),
    S = n(732139),
    N = n(652215),
    C = n(307731),
    O = n(698279),
    R = n(202541),
    L = n(105292);
let y = /-/g;
function D(e) {
    switch (e) {
        case C.EmojiIntention.REACTION:
            return N.I4_.EMOJI_REACTION;
        case C.EmojiIntention.AUTO_SUGGESTION:
            return N.I4_.EMOJI_AUTO_SUGGESTION;
        default:
            return N.I4_.EMOJI;
    }
}
function v(e) {
    let { intention: t, location: n } = e,
        i = (0, a.A)().replace(y, "");
    (u.Om.setAnalyticsId(i),
        l.Ay.trackWithMetadata(N.HAw.SEARCH_OPENED, { search_type: D(t), load_id: i, location: n }));
}
function b(e) {
    return null != e && "" !== e ? { load_id: e } : {};
}
function P(e, t) {
    let {
        guildId: n = t?.getGuildId(),
        bypassPremiumEmojiEntitlement: r = !1,
        suggestedEmojis: a,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, c.V)(n);
    let l = (0, C.isExternalEmojiAllowedForIntention)(e),
        d = Y(n),
        u = K(n),
        _ = $(n),
        { topEmojis: f, newlyAddedEmojis: I } = (0, g.A)(n, e),
        { allEmojis: N } = (0, m.A)({ topEmojis: f, newlyAddedEmojis: I }),
        O = (0, s.bG)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(n), [n]),
        R = (0, s.bG)([E.A], () => E.A.getGuild(n)?.name),
        y = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        D = (0, T.ki)(y),
        v = i.useMemo(() => {
            let i = O.getGroupedCustomEmoji(),
                a = A.Ay.getFlattenedGuildIds(),
                s = [];
            function c(i) {
                return p.Ay.getEmojiUnavailableReasons({
                    categoryEmojis: i,
                    channel: t,
                    guildId: n,
                    intention: e,
                    bypassPremiumEmojiEntitlement: r,
                });
            }
            return (
                !(function (e, t) {
                    for (let r of e) {
                        let e;
                        if ((t === S.s.GUILD && (e = E.A.getGuild(r)), null == e)) continue;
                        let a = i.get(e.id);
                        if (null == a || 0 === a.length) continue;
                        let {
                            emojisDisabled: l,
                            emojisUnfiltered: d,
                            emojisPremiumLockedCount: u,
                            emojiNitroLocked: _,
                        } = c(a);
                        if (0 === d.length) continue;
                        let A = o.Ay.getHiddenEmojiIds(e.id),
                            h = null;
                        (t === S.s.GUILD &&
                            (h = {
                                type: S.s.GUILD,
                                guild: e,
                                isNitroLocked: !D && _ && u === a.length,
                                emojis: a,
                                emojisDisabled: l,
                                emojisHidden: A,
                            }),
                            null != h && (e.id === n ? s.unshift(h) : s.push(h)));
                    }
                })(a, S.s.GUILD),
                o.Ay.categories.reduce((t, i) => {
                    if (i === S.R2.TOP_GUILD_EMOJI) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = c(N);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: S.s.TOP_GUILD_EMOJI,
                            id: i,
                            name: L.intl.formatToPlainString(L.t.W6Wi1X, { guildName: R }),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e,
                        });
                    } else if (i === S.R2.RECENT) {
                        let { emojisDisabled: n, emojisUnfiltered: r } = c(
                            [C.EmojiIntention.REACTION, C.EmojiIntention.DEFAULT_REACT_EMOJI].includes(e) ? u : d,
                        );
                        if (null == r || 0 === r.length) return t;
                        t.push({
                            type: S.s.RECENT,
                            id: i,
                            name: L.intl.string(L.t["5TvaSm"]),
                            isNitroLocked: !1,
                            emojis: r,
                            emojisDisabled: n,
                        });
                    } else if (i === S.R2.FAVORITES) {
                        let { emojisDisabled: e, emojisUnfiltered: n } = c(_);
                        if (null == n || 0 === n.length) return t;
                        t.push({
                            type: S.s.FAVORITES,
                            id: i,
                            name: L.intl.string(L.t.y3LQCG),
                            isNitroLocked: !1,
                            emojis: n,
                            emojisDisabled: e,
                        });
                    } else if (i === S.R2.CUSTOM) {
                        let e = s;
                        (l || (e = s.filter((e) => (e.type === S.s.GUILD ? e.guild.id === n : (e.type, !1)))),
                            t.push(...e));
                    } else t.push({ type: S.s.UNICODE, id: i, name: i, isNitroLocked: !1 });
                    return t;
                }, [])
            );
        }, [O, t, n, e, D, N, R, u, d, _, l, r]),
        b = i.useMemo(() => {
            if (e !== C.EmojiIntention.CHAT || null == a) return null;
            let { unlocked: t, locked: n } = a;
            if (0 === t.length && 0 === n.length) return null;
            let i = new Set();
            for (let e of n) null != e.id && i.add(e.id);
            return {
                type: S.s.SUGGESTED,
                id: S.R2.SUGGESTED,
                name: L.intl.string(L.t.YUcvdQ),
                isNitroLocked: !1,
                emojis: [...t, ...n],
                emojisDisabled: i,
            };
        }, [e, a]);
    return null != b ? [b, ...v] : v;
}
function M() {
    return d.Ay.getCategories().map((e) => ({ type: S.s.UNICODE, id: e, name: e, isNitroLocked: !1 }));
}
function U(e) {
    let t = e?.getGuildId() != null;
    f.default.track(N.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: t ? N.liQ.GUILD_CHANNEL : N.liQ.DM_CHANNEL,
        location_section: null != e ? N.JJy.EMOJI_PICKER_POPOUT : N.JJy.CUSTOM_STATUS_MODAL,
    });
}
function w(e, t) {
    l.Ay.trackWithMetadata(N.HAw.SEARCH_STARTED, { search_type: D(t), location: e, ...b(u.Om.getAnalyticsId()) });
}
function G(e) {
    let { totalResults: t, numEmojiLocked: n, location: i, searchQuery: r, intention: a, loadId: s } = e;
    l.Ay.trackWithMetadata(N.HAw.SEARCH_RESULT_VIEWED, {
        search_type: D(a),
        total_results: t,
        num_results_locked: n,
        query: r,
        location: i,
        ...b(s),
    });
}
function x(e) {
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
        _ = D(s);
    l.Ay.trackWithMetadata(N.HAw.SEARCH_RESULT_SELECTED, {
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
        ...b(n?.loadId ?? u.Om.getAnalyticsId()),
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
function k(e) {
    let { location: t, searchQuery: n, intention: i, loadId: r } = e;
    l.Ay.trackWithMetadata(N.HAw.SEARCH_RESULT_EMPTY, { search_type: D(i), query: n, location: t, ...b(r) });
}
function F(e) {
    let { emoji: t, subCategory: n, position: i, newlyAddedHighlight: r } = e;
    l.Ay.trackWithMetadata(N.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
            subCategory: s = S.tm.NONE,
            position: o,
            newlyAddedHighlight: d,
            isBurstReaction: c,
            messageId: u,
            lockedReason: _,
            visibleRowIndex: E,
        } = e;
    switch (r) {
        case C.EmojiIntention.REACTION:
            t = c ? R.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : R.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            break;
        case C.EmojiIntention.STATUS:
            t = R.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            break;
        default:
            t = R.e.EMOJI_PICKER_EMOJI_CLICKED;
    }
    let A = n.uniqueName ?? n.name;
    l.Ay.trackWithMetadata(
        null != _ ? N.HAw.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED : N.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED,
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
            ...(null != _ && { locked_reason: C.EmojiDisabledReasons[_], visible_row_index: E }),
        },
    );
}
function V(e) {
    let { emoji: t, location: n } = e,
        i = t.uniqueName ?? t.name;
    l.Ay.trackWithMetadata(N.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: O.kx.EMOJI,
        expression_id: t.id,
        expression_name: i,
        expression_guild_id: t.guildId,
        is_custom: null != t.id,
        is_animated: t.animated,
    });
}
function H(e, t) {
    return e.type !== S.s.GUILD ? e.id : null != t ? t.name : "";
}
function j(e, t) {
    switch (e) {
        case S.R2.TOP_GUILD_EMOJI:
            return L.intl.formatToPlainString(L.t.W6Wi1X, { guildName: t });
        case S.R2.RECENT:
            return L.intl.string(L.t["5TvaSm"]);
        case S.R2.FAVORITES:
            return L.intl.string(L.t.y3LQCG);
        case S.R2.ACTIVITY:
            return L.intl.string(L.t.O783tR);
        case S.R2.FLAGS:
            return L.intl.string(L.t.vvaizu);
        case S.R2.FOOD:
            return L.intl.string(L.t.ldm9aY);
        case S.R2.NATURE:
            return L.intl.string(L.t.egIBDH);
        case S.R2.OBJECTS:
            return L.intl.string(L.t.gWm7Mk);
        case S.R2.PEOPLE:
            return L.intl.string(L.t.GX594D);
        case S.R2.SYMBOLS:
            return L.intl.string(L.t.QXMYAb);
        case S.R2.TRAVEL:
            return L.intl.string(L.t.w33hIP);
        case S.R2.PREMIUM_UPSELL:
            return L.intl.string(L.t.pAF6xE);
        default:
            return t ?? e;
    }
}
function W(e, t, n, r) {
    i.useEffect(() => {
        _.bW.loadIfNecessary();
    }, []);
    let a = (0, C.isExternalEmojiAllowedForIntention)(n);
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
function Y(e) {
    return (
        i.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
    );
}
function K(e) {
    return (
        i.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () =>
            o.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
        )
    );
}
function $(e) {
    return (
        i.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
    );
}
function z(e, t) {
    return (
        i.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.bG)(
            [o.Ay],
            () => null != t && o.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t),
        )
    );
}
function X(e) {
    return (
        i.useEffect(() => {
            _.bW.loadIfNecessary();
        }, []),
        (0, s.yK)([o.Ay], () => o.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
    );
}
function q(e, t, n) {
    if (null == n) return S.tm.NONE;
    let i = e.map((e) => e.id ?? e.uniqueName ?? e.name),
        r = t.map((e) => e.id);
    return i.includes(n) ? S.tm.TOP_GUILD_EMOJI : r.includes(n) ? S.tm.NEWLY_ADDED_EMOJI : S.tm.NONE;
}
function Z(e, t) {
    return e === C.EmojiIntention.REACTION
        ? t
            ? L.intl.string(L.t["h7ES+n"])
            : L.intl.string(L.t["6any2A"])
        : L.intl.string(L.t.KgK5qg);
}
(0, r.throttle)(
    (e) => {
        let { emojiSuggestions: t, analyticsLocation: n } = e;
        l.Ay.trackWithMetadata(N.HAw.AUTO_SUGGEST_DISPLAYED, {
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
    I.A.Millis.HALF_SECOND,
    { leading: !1, trailing: !0 },
);
