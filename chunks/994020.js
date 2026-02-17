n.d(t, { g: () => y, x: () => O }), n(321073);
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(424345),
    _ = n(698441),
    c = n(863005),
    u = n(152007),
    A = n(95701),
    E = n(924985),
    g = n(734057),
    I = n(945886),
    h = n(760751),
    p = n(576705),
    C = n(222823),
    m = n(309010),
    S = n(543465),
    b = n(403362),
    f = n(32603),
    T = n(349828),
    L = n(818348);
let N = 21552 == n.j ? [l.Ay, o.A, _.Ay, c.A, u.A, E.A, g.A, h.A, p.A, C.Ay, m.A, S.Ay] : null;
function O() {
    let [e, t] = i.useState(() => y());
    return (
        i.useEffect(() => {
            let e = a().throttle(() => t(y()), 100);
            return N.forEach((t) => t.addChangeListener(e)), () => N.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function y() {
    let e = o.A.getFavoriteChannels(),
        t = S.Ay.isGuildCollapsed(T.Vc),
        n = m.A.getChannelId(),
        i = g.A.getChannel(n),
        r = m.A.getVoiceChannelId(),
        l = [],
        _ = {};
    for (let t in e) {
        let n = e[t],
            i = g.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, d.K)(e, n, i);
        if (null == n.parentId || null == e[n.parentId] || e[n.parentId].type !== s.Ip.CATEGORY) {
            l.push(r);
            continue;
        }
        let a = n.parentId;
        a in _ || (_[a] = []), _[a].push(r);
    }
    function u(n, s) {
        let { isCollapsed: l, isMuted: o } = s;
        return a()(n)
            .map((n) => {
                if (!n.isPrivate() && !p.A.can(L.xB.VIEW_CHANNEL, n)) return null;
                let d = null != i && (i.id === n.id || r === n.id),
                    _ = null != i && i.isThread() && i.parent_id === n.id,
                    u =
                        (d || _ || !l
                            ? c.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id)
                            : c.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ?? {},
                    E = (0, f.wF)(n, u, i, r, t),
                    g = I.A.isCollapsed(n.id),
                    h = S.Ay.isChannelMuted(n.guild_id, n.id),
                    m = {
                        id: n.id,
                        record: n,
                        category: s,
                        position: e[n.id].order,
                        threadIds: E,
                        threadCount: a().size(E),
                        isCollapsed: g,
                        isMuted: h,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, f.go)(n, g, !1),
                    };
                return d || _ || !a().isEmpty(u) || C.Ay.getMentionCount(n.id) > 0
                    ? m
                    : (t && h) ||
                        (l && (h || o || (0, A.gV)(n.type) || ((0, A.ig)(n.type) && !1 === C.Ay.hasUnread(n.id))))
                      ? null
                      : m;
            })
            .filter(b.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let h = null,
        N = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => l,
            getShownChannelIds: () => l.map((e) => e.id),
            getShownChannelAndThreadIds: () => l.map((e) => e.id),
            isEmpty: () => 0 === l.length,
            get channelList() {
                return null == h && (h = u(l, this)), h;
            },
        },
        O = a()(e)
            .values()
            .filter((e) => e.type === s.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                let { id: t, order: n } = e,
                    i = o.A.getCategoryRecord(t);
                if (null == i) return null;
                let r = _[t] ?? [],
                    a = S.Ay.isChannelMuted(T.Vc, t),
                    s = E.A.isCollapsed(t),
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
                        return null == l && (l = u(r, this)), l;
                    },
                };
            })
            .filter((e) => null != e)
            .value(),
        y = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: T.Vc,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[f.Xt] = 0), (e[f.PU] = 0), (e[f.HP] = 0), (e[f.yO] = 0), (e[f.bK] = N.channelList.length);
            for (let t = 0; t < O.length; t++) e[f.TF + t] = Math.max(1, O[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < f.TF) && 0 === t && 0 === O[e - f.TF].channelList.length,
        getCategoryFromSection: (e) => (e === f.bK ? N : O[e - f.TF]),
        getNamedCategoryFromSection: (e) => O[e - f.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => y,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [N, ...O];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + f.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [N, ...O])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [N, ...O]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
