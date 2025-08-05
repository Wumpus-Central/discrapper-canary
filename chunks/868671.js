(n.d(t, {
    H: () => x,
    T: () => O
}),
    n(388685));
var r = n(73800),
    i = n(442837),
    l = n(570140),
    a = n(439170),
    s = n(592125),
    o = n(430824),
    c = n(451478),
    d = n(626135),
    u = n(162461),
    h = n(71585),
    p = n(34586),
    f = n(69259),
    g = n(590026),
    m = n(178762),
    b = n(206583),
    _ = n(809017),
    y = n(981631),
    j = n(388032);
let O = 0;
function x(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: O },
            channelId: x,
            guildId: v
        } = e,
        [C, E] = r.useState(!1),
        { requestId: Z, entries: I, impressionCappedEntryIds: S, hasLeaderboardEntry: P } = (0, g.Z)(x),
        T = (0, i.e7)([h.Z], () => h.Z.hidden),
        N = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        w = (0, i.e7)([s.Z], () => s.Z.getChannel(x)),
        R = (0, i.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        A = (0, p.E)(R),
        D = null != A && A && (null == w ? void 0 : w.isForumChannel()) === !1,
        [L, M, k, U] = r.useMemo(() => {
            let e;
            if (null == I || 0 === I.length || null == Z || !D) return [t, n, O];
            let r = C ? I.length : P ? 4 : 3,
                i = I.slice(0, r);
            e = T
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: Z
                  }));
            let l = {
                id: _.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: _.G,
                count: e.length,
                index: n.length,
                title: j.intl.string(j.t['6gwSFR']),
                onToggleExpand: () => {
                    E((e) => {
                        let t = !e;
                        return (
                            d.default.track(y.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: x,
                                guild_id: v,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: C,
                expandedCount: I.length,
                feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0)
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [x, I, C, t, v, Z, n, O, T, D, P]),
        G = r.useRef(0),
        F = r.useRef(I),
        B = r.useRef(void 0),
        H = r.useRef({ impressionCappedEntryIds: S }),
        z = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / m.YN),
                    r = Math.min(null != (t = null == U ? void 0 : U.length) ? t : 0, n);
                G.current = Math.max(G.current, r);
            },
            [U]
        );
    return (
        r.useEffect(() => {
            F.current = I;
        }, [I]),
        r.useEffect(() => {
            H.current = { impressionCappedEntryIds: S };
        }, [S]),
        r.useEffect(
            () => (
                (G.current = 0),
                (B.current = Date.now()),
                () => {
                    var e, t;
                    if (null == Z || null == B.current || Date.now() - B.current < 3000) return;
                    let n = null != (t = null == (e = F.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, G.current);
                    !T &&
                        N &&
                        D &&
                        ((0, f.e)(y.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: Z,
                            first_shown_at: B.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: x,
                            guild_id: v,
                            all_item_ids: n,
                            impression_capped_item_ids: [...H.current.impressionCappedEntryIds]
                        }),
                        (0, u.wm)('useInjectContentInventoryFeed') &&
                            l.Z.dispatch({
                                type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                itemIds: r
                            }));
                }
            ),
            [Z, x, v, T, N, D]
        ),
        {
            groups: L,
            rows: M,
            version: k,
            updateMaxRowSeen: z
        }
    );
}
