(n.d(t, {
    H: () => v,
    T: () => x
}),
    n(388685));
var r = n(73800),
    i = n(442837),
    l = n(570140),
    a = n(439170),
    o = n(592125),
    s = n(430824),
    c = n(451478),
    u = n(626135),
    d = n(162461),
    p = n(71585),
    h = n(34586),
    f = n(69259),
    m = n(590026),
    g = n(178762),
    b = n(206583),
    _ = n(809017),
    y = n(981631),
    C = n(388032);
let x = 0;
function v(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: x },
            channelId: v,
            guildId: O
        } = e,
        [j, E] = r.useState(!1),
        { requestId: S, entries: P, impressionCappedEntryIds: I, hasLeaderboardEntry: Z } = (0, m.Z)(v),
        N = (0, i.e7)([p.Z], () => p.Z.hidden),
        T = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        A = (0, i.e7)([o.Z], () => o.Z.getChannel(v)),
        w = (0, i.e7)([s.Z], () => s.Z.getGuild(O), [O]),
        R = (0, h.E)(w),
        M = null != R && R && (null == A ? void 0 : A.isForumChannel()) === !1,
        [D, L, k, U] = r.useMemo(() => {
            let e;
            if (null == P || 0 === P.length || null == S || !M) return [t, n, x];
            let r = j ? P.length : Z ? 4 : 3,
                i = P.slice(0, r);
            e = N
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: S
                  }));
            let l = {
                id: _.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: _.G,
                count: e.length,
                index: n.length,
                title: C.intl.string(C.t['6gwSFR']),
                onToggleExpand: () => {
                    E((e) => {
                        let t = !e;
                        return (
                            u.default.track(y.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: v,
                                guild_id: O,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: j,
                expandedCount: P.length,
                feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [v, P, j, t, O, S, n, x, N, M, Z]),
        B = r.useRef(0),
        F = r.useRef(P),
        H = r.useRef(void 0),
        G = r.useRef({ impressionCappedEntryIds: I }),
        V = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / g.YN),
                    r = Math.min(null != (t = null == U ? void 0 : U.length) ? t : 0, n);
                B.current = Math.max(B.current, r);
            },
            [U]
        );
    return (
        r.useEffect(() => {
            F.current = P;
        }, [P]),
        r.useEffect(() => {
            G.current = { impressionCappedEntryIds: I };
        }, [I]),
        r.useEffect(
            () => (
                (B.current = 0),
                (H.current = Date.now()),
                () => {
                    var e, t;
                    if (null == S || null == H.current || Date.now() - H.current < 3000) return;
                    let n = null != (t = null == (e = F.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, B.current);
                    !N &&
                        T &&
                        M &&
                        ((0, f.e)(y.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: S,
                            first_shown_at: H.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: v,
                            guild_id: O,
                            all_item_ids: n,
                            impression_capped_item_ids: [...G.current.impressionCappedEntryIds]
                        }),
                        (0, d.wm)('useInjectContentInventoryFeed') &&
                            l.Z.dispatch({
                                type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                itemIds: r
                            }));
                }
            ),
            [S, v, O, N, T, M]
        ),
        {
            groups: D,
            rows: L,
            version: k,
            updateMaxRowSeen: V
        }
    );
}
