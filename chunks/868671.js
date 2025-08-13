n.d(t, {
    H: () => O,
    T: () => _,
}),
    n(388685);
var r = n(73800),
    i = n(442837),
    l = n(570140),
    a = n(439170),
    s = n(592125),
    o = n(430824),
    c = n(451478),
    u = n(626135),
    d = n(162461),
    h = n(71585),
    p = n(34586),
    f = n(69259),
    g = n(590026),
    m = n(178762),
    b = n(206583),
    y = n(809017),
    x = n(981631),
    j = n(388032);
let _ = 0;
function O(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: _ },
            channelId: O,
            guildId: v,
        } = e,
        [C, E] = r.useState(!1),
        { requestId: S, entries: I, impressionCappedEntryIds: Z, hasLeaderboardEntry: P } = (0, g.Z)(O),
        T = (0, i.e7)([h.Z], () => h.Z.hidden),
        N = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        R = (0, i.e7)([s.Z], () => s.Z.getChannel(O)),
        w = (0, i.e7)([o.Z], () => o.Z.getGuild(v), [v]),
        A = (0, p.E)(w),
        D = null != A && A && (null == R ? void 0 : R.isForumChannel()) === !1,
        [k, L, M, U] = r.useMemo(() => {
            let e;
            if (null == I || 0 === I.length || null == S || !D) return [t, n, _];
            let r = C ? I.length : P ? 4 : 3,
                i = I.slice(0, r);
            e = T
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : i.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: S,
                  }));
            let l = {
                id: y.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: y.G,
                count: e.length,
                index: n.length,
                title: j.intl.string(j.t["6gwSFR"]),
                onToggleExpand: () => {
                    E((e) => {
                        let t = !e;
                        return (
                            u.default.track(x.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: O,
                                guild_id: v,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                expanded: C,
                expandedCount: I.length,
                feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0),
            };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [O, I, C, t, v, S, n, _, T, D, P]),
        F = r.useRef(0),
        H = r.useRef(I),
        G = r.useRef(void 0),
        B = r.useRef({ impressionCappedEntryIds: Z }),
        W = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / m.YN),
                    r = Math.min(null != (t = null == U ? void 0 : U.length) ? t : 0, n);
                F.current = Math.max(F.current, r);
            },
            [U],
        );
    return (
        r.useEffect(() => {
            H.current = I;
        }, [I]),
        r.useEffect(() => {
            B.current = { impressionCappedEntryIds: Z };
        }, [Z]),
        r.useEffect(
            () => (
                (F.current = 0),
                (G.current = Date.now()),
                () => {
                    var e, t;
                    if (null == S || null == G.current || Date.now() - G.current < 3000) return;
                    let n = null != (t = null == (e = H.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, F.current);
                    !T &&
                        N &&
                        D &&
                        ((0, f.e)(x.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: S,
                            first_shown_at: G.current,
                            item_ids: r,
                            surface_type: b.Kd.GUILD_MEMBER_LIST,
                            channel_id: O,
                            guild_id: v,
                            all_item_ids: n,
                            impression_capped_item_ids: [...B.current.impressionCappedEntryIds],
                        }),
                        (0, d.wm)("useInjectContentInventoryFeed") &&
                            l.Z.dispatch({
                                type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
                                itemIds: r,
                            }));
                }
            ),
            [S, O, v, T, N, D],
        ),
        {
            groups: k,
            rows: L,
            version: M,
            updateMaxRowSeen: W,
        }
    );
}
