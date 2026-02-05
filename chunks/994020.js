n.d(t, { g: () => v, x: () => R }), n(321073);
var i = n(64700),
    s = n(735438),
    r = n.n(s),
    a = n(873298),
    l = n(933958),
    o = n(181079),
    c = n(424345),
    d = n(698441),
    u = n(863005),
    _ = n(152007),
    m = n(95701),
    A = n(924985),
    g = n(734057),
    E = n(945886),
    h = n(760751),
    p = n(576705),
    C = n(222823),
    x = n(309010),
    T = n(543465),
    I = n(403362),
    S = n(32603),
    f = n(349828),
    N = n(818348);
let b = 21552 == n.j ? [l.Ay, o.A, d.Ay, u.A, _.A, A.A, g.A, h.A, p.A, C.Ay, x.A, T.Ay] : null;
function R() {
    let [e, t] = i.useState(() => v());
    return (
        i.useEffect(() => {
            let e = r().throttle(() => t(v()), 100);
            return b.forEach((t) => t.addChangeListener(e)), () => b.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function v() {
    let e = o.A.getFavoriteChannels(),
        t = T.Ay.isGuildCollapsed(f.V),
        n = x.A.getChannelId(),
        i = g.A.getChannel(n),
        s = x.A.getVoiceChannelId(),
        l = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            i = g.A.getChannel(n.id);
        if (null == i || n.type === a.Ip.CATEGORY) continue;
        let s = (0, c.K)(e, n, i);
        if (null == n.parentId || !(n.parentId in e)) {
            l.push(s);
            continue;
        }
        n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(s);
    }
    function _(n, a) {
        let { isCollapsed: l, isMuted: o } = a;
        return r()(n)
            .map((n) => {
                if (!n.isPrivate() && !p.A.can(N.xB.VIEW_CHANNEL, n)) return null;
                let c = null != i && (i.id === n.id || s === n.id),
                    d = null != i && i.isThread() && i.parent_id === n.id,
                    _ =
                        (c || d || !l
                            ? u.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ?? {},
                    A = (0, S.wF)(n, _, i, s, t),
                    g = E.A.isCollapsed(n.id),
                    h = T.Ay.isChannelMuted(n.guild_id, n.id),
                    x = {
                        id: n.id,
                        record: n,
                        category: a,
                        position: e[n.id].order,
                        threadIds: A,
                        threadCount: r().size(A),
                        isCollapsed: g,
                        isMuted: h,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, S.go)(n, g, !1),
                    };
                return c || d || !r().isEmpty(_) || C.Ay.getMentionCount(n.id) > 0
                    ? x
                    : (t && h) ||
                        (l && (h || o || (0, m.gV)(n.type) || ((0, m.ig)(n.type) && !1 === C.Ay.hasUnread(n.id))))
                      ? null
                      : x;
            })
            .filter(I.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let h = null,
        b = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => l,
            getShownChannelIds: () => l.map((e) => e.id),
            getShownChannelAndThreadIds: () => l.map((e) => e.id),
            isEmpty: () => 0 === l.length,
            get channelList() {
                return null == h && (h = _(l, this)), h;
            },
        },
        R = r()(e)
            .values()
            .filter((e) => e.type === a.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                let { id: t, order: n } = e,
                    i = o.A.getCategoryRecord(t),
                    s = d[t] ?? [],
                    r = T.Ay.isChannelMuted(f.V, t),
                    a = A.A.isCollapsed(t),
                    l = null;
                return {
                    isMuted: r,
                    isCollapsed: a,
                    record: i,
                    id: t,
                    position: n,
                    getChannelRecords: () => s,
                    getShownChannelIds: () => s.map((e) => e.id),
                    getShownChannelAndThreadIds: () => s.map((e) => e.id),
                    isEmpty: () => 0 === s.length,
                    get channelList() {
                        return null == l && (l = _(s, this)), l;
                    },
                };
            })
            .value(),
        v = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        O = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: f.V,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[S.Xt] = 0), (e[S.PU] = 0), (e[S.HP] = 0), (e[S.yO] = 0), (e[S.bK] = b.channelList.length);
            for (let t = 0; t < R.length; t++) e[S.TF + t] = Math.max(1, R[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < S.TF) && 0 === t && 0 === R[e - S.TF].channelList.length,
        getCategoryFromSection: (e) => (e === S.bK ? b : R[e - S.TF]),
        getNamedCategoryFromSection: (e) => R[e - S.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => v,
        getChannelNoticeSection: () => O,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [b, ...R];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + S.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [b, ...R])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [b, ...R]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
