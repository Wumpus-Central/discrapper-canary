n.d(t, {
    H: () => x,
    T: () => j,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    l = n(570140),
    a = n(439170),
    s = n(592125),
    o = n(430824),
    c = n(451478),
    d = n(626135),
    u = n(162461),
    p = n(71585),
    h = n(34586),
    f = n(69259),
    g = n(590026),
    m = n(178762),
    b = n(206583),
    _ = n(809017),
    y = n(981631),
    O = n(388032);
let j = 0;
function x(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: j },
            channelId: x,
            guildId: v,
        } = e,
        [C, I] = r.useState(!1),
        { requestId: S, entries: E, impressionCappedEntryIds: Z } = (0, g.Z)(x),
        P = (0, i.e7)([p.Z], () => p.Z.hidden),
        T = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        N = (0, i.e7)([s.Z], () => s.Z.getChannel(x)),
        R = (0, i.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        w = (0, h.E)(R),
        A = null != w && w && (null == N ? void 0 : N.isForumChannel()) === !1,
        [D, L, M, k] = r.useMemo(() => {
            let e;
            if (null == E || 0 === E.length || null == S || !A) return [t, n, j];
            let r = C ? E.length : 3,
                i = E.slice(0, r);
            e = P
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
                title: O.intl.string(O.t["6gwSFY"]),
                onToggleExpand: () => {
                    I((e) => {
                        let t = !e;
                        return (
                            d.default.track(y.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: x,
                                guild_id: v,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                expanded: C,
                expandedCount: E.length,
                feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0),
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [x, E, C, t, v, S, n, j, P, A]),
        U = r.useRef(0),
        G = r.useRef(E),
        H = r.useRef(void 0),
        F = r.useRef({ impressionCappedEntryIds: Z }),
        B = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / m.YN),
                    r = Math.min(null != (t = null == k ? void 0 : k.length) ? t : 0, n);
                U.current = Math.max(U.current, r);
            },
            [k],
        );
    return (
        r.useEffect(() => {
            G.current = E;
        }, [E]),
        r.useEffect(() => {
            F.current = { impressionCappedEntryIds: Z };
        }, [Z]),
        r.useEffect(
            () => (
                (U.current = 0),
                (H.current = Date.now()),
                () => {
                    var e, t;
                    if (null == S || null == H.current || Date.now() - H.current < 3000) return;
                    let n = null != (t = null == (e = G.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, U.current);
                    !P &&
                        T &&
                        A &&
                        ((0, f.e)(y.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: S,
                            first_shown_at: H.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: x,
                            guild_id: v,
                            all_item_ids: n,
                            impression_capped_item_ids: [...F.current.impressionCappedEntryIds],
                        }),
                        (0, u.wm)("useInjectContentInventoryFeed") &&
                            l.Z.dispatch({
                                type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
                                itemIds: r,
                            }));
                }
            ),
            [S, x, v, P, T, A],
        ),
        {
            groups: D,
            rows: L,
            version: M,
            updateMaxRowSeen: B,
        }
    );
}
