n.d(t, {
    g: () => N,
    x: () => C,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(873298),
    o = n(933958),
    l = n(181079),
    c = n(424345),
    u = n(698441),
    d = n(863005),
    f = n(152007),
    p = n(95701),
    _ = n(924985),
    h = n(734057),
    m = n(945886),
    g = n(760751),
    E = n(576705),
    b = n(222823),
    y = n(309010),
    O = n(543465),
    A = n(403362),
    v = n(32603),
    S = n(349828),
    I = n(818348);
let T = [o.Ay, l.A, u.Ay, d.A, f.A, _.A, h.A, g.A, E.A, b.Ay, y.A, O.Ay];
function C() {
    let [e, t] = r.useState(() => N());
    return (
        r.useEffect(() => {
            let e = a().throttle(() => t(N()), 100);
            return T.forEach((t) => t.addChangeListener(e)), () => T.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function N() {
    let e = l.A.getFavoriteChannels(),
        t = O.Ay.isGuildCollapsed(S.V),
        n = y.A.getChannelId(),
        r = h.A.getChannel(n),
        i = y.A.getVoiceChannelId(),
        o = [],
        u = {};
    for (let t in e) {
        let n = e[t],
            r = h.A.getChannel(n.id);
        if (null == r || n.type === s.Ip.CATEGORY) continue;
        let i = (0, c.K)(e, n, r);
        if (null == n.parentId || !(n.parentId in e)) {
            o.push(i);
            continue;
        }
        n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(i);
    }
    function f(n, s) {
        let { isCollapsed: o, isMuted: l } = s;
        return a()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !E.A.can(I.xB.VIEW_CHANNEL, n)) return null;
                let u = null != r && (r.id === n.id || i === n.id),
                    f = null != r && r.isThread() && r.parent_id === n.id,
                    _ =
                        null !=
                        (c =
                            u || f || !o
                                ? d.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id)
                                : d.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id))
                            ? c
                            : {},
                    h = (0, v.wF)(n, _, r, i, t),
                    g = m.A.isCollapsed(n.id),
                    y = O.Ay.isChannelMuted(n.guild_id, n.id),
                    A = {
                        id: n.id,
                        record: n,
                        category: s,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: a().size(h),
                        isCollapsed: g,
                        isMuted: y,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, v.go)(n, g, !1),
                    };
                return u || f || !a().isEmpty(_) || b.Ay.getMentionCount(n.id) > 0
                    ? A
                    : (t && y) ||
                        (o && (y || l || (0, p.gV)(n.type) || ((0, p.ig)(n.type) && !1 === b.Ay.hasUnread(n.id))))
                      ? null
                      : A;
            })
            .filter(A.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let g = null,
        T = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => o,
            getShownChannelIds: () => o.map((e) => e.id),
            getShownChannelAndThreadIds: () => o.map((e) => e.id),
            isEmpty: () => 0 === o.length,
            get channelList() {
                return null == g && (g = f(o, this)), g;
            },
        },
        C = a()(e)
            .values()
            .filter((e) => e.type === s.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: r } = e,
                    i = l.A.getCategoryRecord(n),
                    a = null != (t = u[n]) ? t : [],
                    s = O.Ay.isChannelMuted(S.V, n),
                    o = _.A.isCollapsed(n),
                    c = null;
                return {
                    isMuted: s,
                    isCollapsed: o,
                    record: i,
                    id: n,
                    position: r,
                    getChannelRecords: () => a,
                    getShownChannelIds: () => a.map((e) => e.id),
                    getShownChannelAndThreadIds: () => a.map((e) => e.id),
                    isEmpty: () => 0 === a.length,
                    get channelList() {
                        return null == c && (c = f(a, this)), c;
                    },
                };
            })
            .value(),
        N = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        },
        R = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        };
    return {
        id: S.V,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[v.Xt] = 0), (e[v.PU] = 0), (e[v.HP] = 0), (e[v.yO] = 0), (e[v.bK] = T.channelList.length);
            for (let t = 0; t < C.length; t++) e[v.TF + t] = Math.max(1, C[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < v.TF) && 0 === t && 0 === C[e - v.TF].channelList.length,
        getCategoryFromSection: (e) => (e === v.bK ? T : C[e - v.TF]),
        getNamedCategoryFromSection: (e) => C[e - v.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t],
                  };
        },
        getGuildActionSection: () => N,
        getChannelNoticeSection: () => R,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [T, ...C];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e)
                        return [
                            {
                                section: n + v.bK,
                                row: r,
                            },
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [T, ...C])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [T, ...C]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
