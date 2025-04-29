n.d(t, {
    H: () => v,
    T: () => x
}),
    n(388685);
var r = n(192379),
    i = n(442837),
    l = n(570140),
    o = n(662594),
    a = n(592125),
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
            guildId: j
        } = e,
        [O, E] = r.useState(!1),
        { requestId: I, entries: P, impressionCappedEntryIds: S, hasLeaderboardEntry: Z } = (0, m.Z)(v),
        N = (0, i.e7)([p.Z], () => p.Z.hidden),
        T = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        A = (0, i.e7)([a.Z], () => a.Z.getChannel(v)),
        w = (0, i.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        R = (0, h.E)(w),
        k = null != R && R && (null == A ? void 0 : A.isForumChannel()) === !1,
        [M, L, D, U] = r.useMemo(() => {
            let e;
            if (null == P || 0 === P.length || null == I || !k) return [t, n, x];
            let r = O ? P.length : Z ? 4 : 3,
                i = P.slice(0, r);
            e = N
                ? [{ type: o.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: o.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: I
                  }));
            let l = {
                id: _.G,
                type: o.so.CONTENT_INVENTORY_GROUP,
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
                                guild_id: j,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: O,
                expandedCount: P.length,
                feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [v, P, O, t, j, I, n, x, N, k, Z]),
        B = r.useRef(0),
        G = r.useRef(P),
        F = r.useRef(void 0),
        H = r.useRef({ impressionCappedEntryIds: S }),
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
            G.current = P;
        }, [P]),
        r.useEffect(() => {
            H.current = { impressionCappedEntryIds: S };
        }, [S]),
        r.useEffect(
            () => (
                (B.current = 0),
                (F.current = Date.now()),
                () => {
                    var e, t;
                    if (null == I || null == F.current || Date.now() - F.current < 3000) return;
                    let n = null != (t = null == (e = G.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, B.current);
                    !N &&
                        T &&
                        k &&
                        ((0, f.e)(y.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: I,
                            first_shown_at: F.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: v,
                            guild_id: j,
                            all_item_ids: n,
                            impression_capped_item_ids: [...H.current.impressionCappedEntryIds]
                        }),
                        (0, d.wm)('useInjectContentInventoryFeed') &&
                            l.Z.dispatch({
                                type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                itemIds: r
                            }));
                }
            ),
            [I, v, j, N, T, k]
        ),
        {
            groups: M,
            rows: L,
            version: D,
            updateMaxRowSeen: V
        }
    );
}
