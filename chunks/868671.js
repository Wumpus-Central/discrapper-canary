n.d(t, {
    H: () => I,
    T: () => v,
}),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(439170),
    s = n(592125),
    l = n(430824),
    c = n(451478),
    u = n(626135),
    d = n(162461),
    f = n(71585),
    p = n(34586),
    _ = n(69259),
    m = n(590026),
    h = n(178762),
    g = n(206583),
    E = n(809017),
    b = n(981631),
    y = n(388032);
let O = 3,
    v = 0,
    S = 3000;
function I(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: v },
            channelId: I,
            guildId: T,
        } = e,
        [C, A] = r.useState(!1),
        { requestId: N, entries: P, impressionCappedEntryIds: R } = (0, m.Z)(I),
        w = (0, i.e7)([f.Z], () => f.Z.hidden),
        D = (0, i.e7)([c.Z], () => c.Z.isFocused()),
        x = (0, i.e7)([s.Z], () => s.Z.getChannel(I)),
        L = (0, i.e7)([l.Z], () => l.Z.getGuild(T), [T]),
        j = (0, p.E)(L),
        M = null != j && j && (null == x ? void 0 : x.isForumChannel()) === !1,
        [k, U, G, Z] = r.useMemo(() => {
            let e;
            if (null == P || 0 === P.length || null == N || !M) return [t, n, v];
            let r = O,
                i = C ? P.length : r,
                a = P.slice(0, i);
            e = w
                ? [{ type: o.so.HIDDEN_CONTENT_INVENTORY }]
                : a.map((e) => ({
                      type: o.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: N,
                  }));
            let s = () => {
                    A((e) => {
                        let t = !e;
                        return (
                            u.default.track(b.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: I,
                                guild_id: T,
                                expanded: t,
                            }),
                            t
                        );
                    });
                },
                l = {
                    id: E.G,
                    type: o.so.CONTENT_INVENTORY_GROUP,
                    key: E.G,
                    count: e.length,
                    index: n.length,
                    title: y.intl.string(y.t["6gwSFY"]),
                    onToggleExpand: s,
                    expanded: C,
                    expandedCount: P.length,
                    feedHeight: e.map(h.iZ).reduce((e, t) => e + t, 0),
                };
            return [[l, ...t], [...n, l, ...e], Math.random(), e];
        }, [I, P, C, t, T, N, n, v, w, M]),
        F = r.useRef(0),
        B = r.useRef(P),
        V = r.useRef(void 0),
        H = r.useRef({ impressionCappedEntryIds: R }),
        Y = r.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / h.YN),
                    r = Math.min(null != (t = null == Z ? void 0 : Z.length) ? t : 0, n);
                F.current = Math.max(F.current, r);
            },
            [Z],
        );
    return (
        r.useEffect(() => {
            B.current = P;
        }, [P]),
        r.useEffect(() => {
            H.current = { impressionCappedEntryIds: R };
        }, [R]),
        r.useEffect(
            () => (
                (F.current = 0),
                (V.current = Date.now()),
                () => {
                    var e, t;
                    if (null == N || null == V.current || Date.now() - V.current < S) return;
                    let n = null != (t = null == (e = B.current) ? void 0 : e.map((e) => e.id)) ? t : [],
                        r = n.slice(0, F.current);
                    !w &&
                        D &&
                        M &&
                        ((0, _.e)(b.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: N,
                            first_shown_at: V.current,
                            item_ids: r,
                            surface_type: g.Kd.GUILD_MEMBER_LIST,
                            channel_id: I,
                            guild_id: T,
                            all_item_ids: n,
                            impression_capped_item_ids: [...H.current.impressionCappedEntryIds],
                        }),
                        (0, d.wm)("useInjectContentInventoryFeed") &&
                            a.Z.dispatch({
                                type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
                                itemIds: r,
                            }));
                }
            ),
            [N, I, T, w, D, M],
        ),
        {
            groups: k,
            rows: U,
            version: G,
            updateMaxRowSeen: Y,
        }
    );
}
