n.d(t, {
    H: function () {
        return E;
    },
    T: function () {
        return I;
    }
}),
    n(47120),
    n(724458);
var i = n(192379),
    l = n(442837),
    r = n(570140),
    a = n(662594),
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
    C = n(206583),
    x = n(809017),
    v = n(981631),
    _ = n(388032);
let I = 0;
function E(e) {
    let {
            memberStoreProps: { groups: t, rows: n, version: I },
            channelId: E,
            guildId: b
        } = e,
        [Z, N] = i.useState(!1),
        { requestId: S, entries: T, impressionCappedEntryIds: j, hasLeaderboardEntry: A } = (0, f.Z)(E),
        y = (0, l.e7)([h.Z], () => h.Z.hidden),
        P = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        M = (0, l.e7)([s.Z], () => s.Z.getChannel(E)),
        R = (0, l.e7)([o.Z], () => o.Z.getGuild(b), [b]),
        L = (0, p.E)(R),
        k = null != L && L && (null == M ? void 0 : M.isForumChannel()) === !1,
        [O, D, w, B] = i.useMemo(() => {
            let e;
            if (null == T || 0 === T.length || null == S || !k) return [t, n, I];
            let i = Z ? T.length : A ? 4 : 3,
                l = T.slice(0, i);
            e = y
                ? [{ type: a.so.HIDDEN_CONTENT_INVENTORY }]
                : l.map((e) => ({
                      type: a.so.CONTENT_INVENTORY,
                      entry: e,
                      requestId: S
                  }));
            let r = {
                id: x.G,
                type: a.so.CONTENT_INVENTORY_GROUP,
                key: x.G,
                count: e.length,
                index: n.length,
                title: _.intl.string(_.t['6gwSFR']),
                onToggleExpand: () => {
                    N((e) => {
                        let t = !e;
                        return (
                            d.default.track(v.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                channel_id: E,
                                guild_id: b,
                                expanded: t
                            }),
                            t
                        );
                    });
                },
                expanded: Z,
                expandedCount: T.length,
                feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
            };
            return [[r, ...t], [...n, r, ...e], Math.random(), e];
        }, [E, T, Z, t, b, S, n, I, y, k, A]),
        U = i.useRef(0),
        H = i.useRef(T),
        G = i.useRef(),
        F = i.useRef({ impressionCappedEntryIds: j }),
        V = i.useCallback(
            (e) => {
                var t;
                let n = Math.floor(e / g.YN),
                    i = Math.min(null !== (t = null == B ? void 0 : B.length) && void 0 !== t ? t : 0, n);
                U.current = Math.max(U.current, i);
            },
            [B]
        );
    return (
        i.useEffect(() => {
            H.current = T;
        }, [T]),
        i.useEffect(() => {
            F.current = { impressionCappedEntryIds: j };
        }, [j]),
        i.useEffect(
            () => (
                (U.current = 0),
                (G.current = Date.now()),
                () => {
                    var e, t;
                    if (null == S || null == G.current || Date.now() - G.current < 3000) return;
                    let n = null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.map((e) => e.id)) && void 0 !== t ? t : [],
                        i = n.slice(0, U.current);
                    if (!y && !!P && !!k)
                        (0, m.e)(v.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                            request_id: S,
                            first_shown_at: G.current,
                            item_ids: i,
                            surface_type: C.Kd.GUILD_MEMBER_LIST,
                            channel_id: E,
                            guild_id: b,
                            all_item_ids: n,
                            impression_capped_item_ids: [...F.current.impressionCappedEntryIds]
                        }),
                            (0, u.wm)('useInjectContentInventoryFeed') &&
                                r.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
                                    itemIds: i
                                });
                }
            ),
            [S, E, b, y, P, k]
        ),
        {
            groups: O,
            rows: D,
            version: w,
            updateMaxRowSeen: V
        }
    );
}
