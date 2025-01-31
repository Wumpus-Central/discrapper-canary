n.d(t, {
    H: () => I,
    T: () => E
}),
    n(47120),
    n(724458);
var i = n(192379),
    l = n(442837),
    a = n(570140),
    r = n(662594),
    s = n(592125),
    o = n(430824),
    c = n(451478),
    d = n(626135),
    u = n(162461),
    h = n(71585),
    p = n(34586),
    m = n(69259),
    f = n(590026),
    g = n(178762),
    _ = n(206583),
    C = n(809017),
    x = n(981631),
    v = n(388032);
let E = 0;
function I(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: E },
            channelId: I,
            guildId: b
        } = e,
        [Z, N] = i.useState(!1),
        { requestId: T, entries: S, impressionCappedEntryIds: j, hasLeaderboardEntry: A } = (0, f.Z)(I),
        y = (0, l.e7)([h.Z], () => h.Z.hidden),
        P = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        R = (0, l.e7)([s.Z], () => s.Z.getChannel(I)),
        M = (0, l.e7)([o.Z], () => o.Z.getGuild(b), [b]),
        L = (0, p.E)(M),
        k = null != L && L && (null == R ? void 0 : R.isForumChannel()) === !1,
        [O, D, w, U] = i.useMemo(() => {
            let e;
            if (null == S || 0 === S.length || null == T || !k) return [t, n, E];
            let i = Z ? S.length : A ? 4 : 3,
                l = S.slice(0, i);
            e = y
                ? [{ type: r.so.HIDDEN_CONTENT_INVENTORY }]
                : l.map((e) => ({
                      type: r.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: T
                  }));
            let a = {
                id: C.G,
                type: r.so.CONTENT_INVENTORY_GROUP,
                key: C.G,
                count: e.length,
                index: n.length,
                title: v.intl.string(v.t['6gwSFR']),
                onToggleExpand: () => {
                    N((e) => {
                        let t = !e;
                        return (
                            d.default.track(x.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: I,
                                guild_id: b,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: Z,
                expandedCount: S.length,
                feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
            };
            return [[a, ...t], [...n, a, ...e], Math.random(), e];
        }, [I, S, Z, t, b, T, n, E, y, k, A]),
        B = i.useRef(0),
        F = i.useRef(S),
        H = i.useRef(),
        G = i.useRef({ impressionCappedEntryIds: j }),
        V = i.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / g.YN),
                    i = Math.min(null !== (t = null == U ? void 0 : U.length) && void 0 !== t ? t : 0, n);
                B.current = Math.max(B.current, i);
            },
            [U]
        );
    return (
        i.useEffect(() => {
            F.current = S;
        }, [S]),
        i.useEffect(() => {
            G.current = { impressionCappedEntryIds: j };
        }, [j]),
        i.useEffect(
            () => (
                (B.current = 0),
                (H.current = Date.now()),
                () => {
                    var e, t;
                    if (null == T || null == H.current || Date.now() - H.current < 3000) return;
                    let n = null !== (t = null === (e = F.current) || void 0 === e ? void 0 : e.map((e) => e.id)) && void 0 !== t ? t : [],
                        i = n.slice(0, B.current);
                    !y &&
                        P &&
                        k &&
                        ((0, m.e)(x.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: T,
                            first_shown_at: H.current,
                            item_ids: i,
                            surface_type: _.Kd.GUILD_MEMBER_LIST,
                            channel_id: I,
                            guild_id: b,
                            all_item_ids: n,
                            impression_capped_item_ids: [...G.current.impressionCappedEntryIds]
                        }),
                        (0, u.wm)('useInjectContentInventoryFeed') &&
                            a.Z.dispatch({
                                type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                itemIds: i
                            }));
                }
            ),
            [T, I, b, y, P, k]
        ),
        {
            groups: O,
            rows: D,
            version: w,
            updateMaxRowSeen: V
        }
    );
}
