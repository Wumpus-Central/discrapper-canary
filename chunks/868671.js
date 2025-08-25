n.d(t, {
    H: () => v,
    T: () => x,
}),
    n(388685);
var r = n(647438),
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
            guildId: O,
        } = e,
        [j, E] = r.useState(!1),
        { requestId: S, entries: I, impressionCappedEntryIds: P } = (0, m.Z)(v),
        Z = (0, i.e7)([p.Z], () => p.Z.hidden),
        T = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        N = (0, i.e7)([o.Z], () => o.Z.getChannel(v)),
        A = (0, i.e7)([s.Z], () => s.Z.getGuild(O), [O]),
        w = (0, h.E)(A),
        R = null != w && w && (null == N ? void 0 : N.isForumChannel()) === !1,
        [M, D, L, k] = r.useMemo(() => {
            let e;
            if (null == I || 0 === I.length || null == S || !R) return [t, n, x];
            let r = j ? I.length : 3,
                i = I.slice(0, r);
            e = Z
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: S,
                  }));
            let l = {
                id: _.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: _.G,
                count: e.length,
                index: n.length,
                title: C.intl.string(C.t["6gwSFR"]),
                onToggleExpand: () => {
                    E((e) => {
                        let t = !e;
                        return (
                            u.default.track(y.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: v,
                                guild_id: O,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                expanded: j,
                expandedCount: I.length,
                feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0),
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [v, I, j, t, O, S, n, x, Z, R]),
        U = r.useRef(0),
        B = r.useRef(I),
        F = r.useRef(void 0),
        G = r.useRef({ impressionCappedEntryIds: P }),
        H = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / g.YN),
                    r = Math.min(null != (t = null == k ? void 0 : k.length) ? t : 0, n);
                U.current = Math.max(U.current, r);
            },
            [k],
        );
    return (
        r.useEffect(() => {
            B.current = I;
        }, [I]),
        r.useEffect(() => {
            G.current = { impressionCappedEntryIds: P };
        }, [P]),
        r.useEffect(
            () => (
                (U.current = 0),
                (F.current = Date.now()),
                () => {
                    var e, t;
                    if (null == S || null == F.current || Date.now() - F.current < 3000) return;
                    let n = null != (t = null == (e = B.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, U.current);
                    !Z &&
                        T &&
                        R &&
                        ((0, f.e)(y.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: S,
                            first_shown_at: F.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: v,
                            guild_id: O,
                            all_item_ids: n,
                            impression_capped_item_ids: [...G.current.impressionCappedEntryIds],
                        }),
                        (0, d.wm)("useInjectContentInventoryFeed") &&
                            l.Z.dispatch({
                                type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
                                itemIds: r,
                            }));
                }
            ),
            [S, v, O, Z, T, R],
        ),
        {
            groups: M,
            rows: D,
            version: L,
            updateMaxRowSeen: H,
        }
    );
}
