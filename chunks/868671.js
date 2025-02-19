n.d(t, {
    H: () => x,
    T: () => y
}),
    n(47120);
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
    C = n(981631),
    v = n(388032);
let y = 0;
function x(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: y },
            channelId: x,
            guildId: j
        } = e,
        [O, N] = r.useState(!1),
        { requestId: E, entries: P, impressionCappedEntryIds: I, hasLeaderboardEntry: S } = (0, m.Z)(x),
        Z = (0, i.e7)([p.Z], () => p.Z.hidden),
        T = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        A = (0, i.e7)([a.Z], () => a.Z.getChannel(x)),
        w = (0, i.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        R = (0, h.E)(w),
        k = null != R && R && (null == A ? void 0 : A.isForumChannel()) === !1,
        [M, L, D, W] = r.useMemo(() => {
            let e;
            if (null == P || 0 === P.length || null == E || !k) return [t, n, y];
            let r = O ? P.length : S ? 4 : 3,
                i = P.slice(0, r);
            e = Z
                ? [{ type: o.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: o.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: E
                  }));
            let l = {
                id: _.G,
                type: o.so.CONTENT_INVENTORY_GROUP,
                key: _.G,
                count: e.length,
                index: n.length,
                title: v.NW.string(v.t['6gwSFR']),
                onToggleExpand: () => {
                    N((e) => {
                        let t = !e;
                        return (
                            u.default.track(C.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: x,
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
        }, [x, P, O, t, j, E, n, y, Z, k, S]),
        U = r.useRef(0),
        B = r.useRef(P),
        F = r.useRef(),
        H = r.useRef({ impressionCappedEntryIds: I }),
        G = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / g.YN),
                    r = Math.min(null !== (t = null == W ? void 0 : W.length) && void 0 !== t ? t : 0, n);
                U.current = Math.max(U.current, r);
            },
            [W]
        );
    return (
        r.useEffect(() => {
            B.current = P;
        }, [P]),
        r.useEffect(() => {
            H.current = { impressionCappedEntryIds: I };
        }, [I]),
        r.useEffect(
            () => (
                (U.current = 0),
                (F.current = Date.now()),
                () => {
                    var e, t;
                    if (null == E || null == F.current || Date.now() - F.current < 3000) return;
                    let n = null !== (t = null === (e = B.current) || void 0 === e ? void 0 : e.map((e) => e.id)) && void 0 !== t ? t : [],
                        r = n.slice(0, U.current);
                    !Z &&
                        T &&
                        k &&
                        ((0, f.e)(C.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: E,
                            first_shown_at: F.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: x,
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
            [E, x, j, Z, T, k]
        ),
        {
            groups: M,
            rows: L,
            version: D,
            updateMaxRowSeen: G
        }
    );
}
