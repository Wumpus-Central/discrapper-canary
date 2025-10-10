n.d(t, {
    H: () => O,
    T: () => x,
}),
    n(388685);
var r = n(647438),
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
    y = n(809017),
    _ = n(981631),
    j = n(388032);
let x = 0;
function O(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: x },
            channelId: O,
            guildId: v,
        } = e,
        [C, I] = r.useState(!1),
        { requestId: E, entries: S, impressionCappedEntryIds: Z } = (0, g.Z)(O),
        T = (0, i.e7)([p.Z], () => p.Z.hidden),
        P = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        N = (0, i.e7)([s.Z], () => s.Z.getChannel(O)),
        R = (0, i.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        w = (0, h.E)(R),
        A = null != w && w && (null == N ? void 0 : N.isForumChannel()) === !1,
        [D, L, M, k] = r.useMemo(() => {
            let e;
            if (null == S || 0 === S.length || null == E || !A) return [t, n, x];
            let r = C ? S.length : 3,
                i = S.slice(0, r);
            e = T
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: E,
                  }));
            let l = {
                id: y.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: y.G,
                count: e.length,
                index: n.length,
                title: j.intl.string(j.t["6gwSFR"]),
                onToggleExpand: () => {
                    I((e) => {
                        let t = !e;
                        return (
                            d.default.track(_.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: O,
                                guild_id: v,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                expanded: C,
                expandedCount: S.length,
                feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0),
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [O, S, C, t, v, E, n, x, T, A]),
        U = r.useRef(0),
        G = r.useRef(S),
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
            G.current = S;
        }, [S]),
        r.useEffect(() => {
            F.current = { impressionCappedEntryIds: Z };
        }, [Z]),
        r.useEffect(
            () => (
                (U.current = 0),
                (H.current = Date.now()),
                () => {
                    var e, t;
                    if (null == E || null == H.current || Date.now() - H.current < 3000) return;
                    let n = null != (t = null == (e = G.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, U.current);
                    !T &&
                        P &&
                        A &&
                        ((0, f.e)(_.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: E,
                            first_shown_at: H.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: O,
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
            [E, O, v, T, P, A],
        ),
        {
            groups: D,
            rows: L,
            version: M,
            updateMaxRowSeen: B,
        }
    );
}
