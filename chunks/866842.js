n.d(t, { D: () => G, g: () => U }), n(321073);
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(93055),
    _ = n(424345),
    c = n(698441),
    u = n(863005),
    A = n(152007),
    g = n(95701),
    I = n(924985),
    E = n(734057),
    h = n(945886),
    C = n(760751),
    p = n(576705),
    S = n(222823),
    m = n(309010),
    T = n(543465),
    f = n(403362),
    b = n(32603),
    L = n(349828),
    N = n(818348);
let O = 21552 == n.j ? [l.Ay, o.A, c.Ay, u.A, A.A, I.A, E.A, C.A, p.A, S.Ay, m.A, T.Ay] : null;
function G() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => U()),
        r = i.useMemo(() => U({}), []);
    return (
        i.useEffect(() => {
            let e = a().throttle(() => n(U()), 100);
            return O.forEach((t) => t.addChangeListener(e)), () => O.forEach((t) => t.removeChangeListener(e));
        }, []),
        e ? t : r
    );
}
function U(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = T.Ay.isGuildCollapsed(L.Vc),
        i = m.A.getChannelId(),
        r = E.A.getChannel(i),
        l = m.A.getVoiceChannelId(),
        d = [],
        c = {};
    for (let e in t) {
        let n = t[e],
            i = E.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, _.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            d.push(r);
            continue;
        }
        let a = n.parentId;
        a in c || (c[a] = []), c[a].push(r);
    }
    function A(e, i) {
        let { isCollapsed: s, isMuted: o } = i;
        return a()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(N.xB.VIEW_CHANNEL, e)) return null;
                let d = null != r && (r.id === e.id || l === e.id),
                    _ = null != r && r.isThread() && r.parent_id === e.id,
                    c =
                        (d || _ || !s
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    A = (0, b.wF)(e, c, r, l, n),
                    I = h.A.isCollapsed(e.id),
                    E = T.Ay.isChannelMuted(e.guild_id, e.id),
                    C = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: A,
                        threadCount: a().size(A),
                        isCollapsed: I,
                        isMuted: E,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, b.go)(e, I, !1),
                    };
                return d || _ || !a().isEmpty(c) || S.Ay.getMentionCount(e.id) > 0
                    ? C
                    : (n && E) ||
                        (s && (E || o || (0, g.gV)(e.type) || ((0, g.ig)(e.type) && !1 === S.Ay.hasUnread(e.id))))
                      ? null
                      : C;
            })
            .filter(f.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let C = null,
        O = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == C && (C = A(d, this)), C;
            },
        },
        G = a()(t)
            .values()
            .filter((e) => e.type === s.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                let { id: t, order: n } = e,
                    i = o.A.getCategoryRecord(t);
                if (null == i) return null;
                let r = c[t] ?? [],
                    a = T.Ay.isChannelMuted(L.Vc, t),
                    s = I.A.isCollapsed(t),
                    l = null;
                return {
                    isMuted: a,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == l && (l = A(r, this)), l;
                    },
                };
            })
            .filter((e) => null != e)
            .value(),
        U = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        y = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: L.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[b.Xt] = 0), (e[b.PU] = 0), (e[b.HP] = 0), (e[b.yO] = 0), (e[b.bK] = O.channelList.length);
            for (let t = 0; t < G.length; t++) e[b.TF + t] = Math.max(1, G[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < b.TF) && 0 === t && 0 === G[e - b.TF].channelList.length,
        getCategoryFromSection: (e) => (e === b.bK ? O : G[e - b.TF]),
        getNamedCategoryFromSection: (e) => G[e - b.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => U,
        getChannelNoticeSection: () => y,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [O, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + b.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [O, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = E.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [O, ...G]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
