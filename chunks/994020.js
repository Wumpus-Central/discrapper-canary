n.d(t, {
    g: () => v,
    x: () => j,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(873298),
    a = n(933958),
    o = n(181079),
    c = n(424345),
    d = n(698441),
    u = n(863005),
    _ = n(152007),
    p = n(95701),
    m = n(924985),
    g = n(734057),
    A = n(945886),
    f = n(760751),
    h = n(576705),
    b = n(222823),
    E = n(309010),
    x = n(543465),
    O = n(403362),
    C = n(32603),
    I = n(349828),
    T = n(818348);
let S = 21552 == n.j ? [a.Ay, o.A, d.Ay, u.A, _.A, m.A, g.A, f.A, h.A, b.Ay, E.A, x.Ay] : null;

function j() {
    let [e, t] = r.useState(() => v());
    return (
        r.useEffect(() => {
            let e = l().throttle(() => t(v()), 100);
            return S.forEach((t) => t.addChangeListener(e)), () => S.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}

function v() {
    let e = o.A.getFavoriteChannels(),
        t = x.Ay.isGuildCollapsed(I.V),
        n = E.A.getChannelId(),
        r = g.A.getChannel(n),
        i = E.A.getVoiceChannelId(),
        a = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            r = g.A.getChannel(n.id);
        if (null == r || n.type === s.Ip.CATEGORY) continue;
        let i = (0, c.K)(e, n, r);
        if (null == n.parentId || !(n.parentId in e)) {
            a.push(i);
            continue;
        }
        n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(i);
    }

    function _(n, s) {
        let { isCollapsed: a, isMuted: o } = s;
        return l()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !h.A.can(T.xB.VIEW_CHANNEL, n)) return null;
                let d = null != r && (r.id === n.id || i === n.id),
                    _ = null != r && r.isThread() && r.parent_id === n.id,
                    m =
                        null !=
                        (c =
                            d || _ || !a
                                ? u.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id)
                                : u.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id))
                            ? c
                            : {},
                    g = (0, C.wF)(n, m, r, i, t),
                    f = A.A.isCollapsed(n.id),
                    E = x.Ay.isChannelMuted(n.guild_id, n.id),
                    O = {
                        id: n.id,
                        record: n,
                        category: s,
                        position: e[n.id].order,
                        threadIds: g,
                        threadCount: l().size(g),
                        isCollapsed: f,
                        isMuted: E,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, C.go)(n, f, !1),
                    };
                return d || _ || !l().isEmpty(m) || b.Ay.getMentionCount(n.id) > 0
                    ? O
                    : (t && E) ||
                        (a && (E || o || (0, p.gV)(n.type) || ((0, p.ig)(n.type) && !1 === b.Ay.hasUnread(n.id))))
                      ? null
                      : O;
            })
            .filter(O.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let f = null,
        S = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => a,
            getShownChannelIds: () => a.map((e) => e.id),
            getShownChannelAndThreadIds: () => a.map((e) => e.id),
            isEmpty: () => 0 === a.length,
            get channelList() {
                return null == f && (f = _(a, this)), f;
            },
        },
        j = l()(e)
            .values()
            .filter((e) => e.type === s.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: r } = e,
                    i = o.A.getCategoryRecord(n),
                    l = null != (t = d[n]) ? t : [],
                    s = x.Ay.isChannelMuted(I.V, n),
                    a = m.A.isCollapsed(n),
                    c = null;
                return {
                    isMuted: s,
                    isCollapsed: a,
                    record: i,
                    id: n,
                    position: r,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == c && (c = _(l, this)), c;
                    },
                };
            })
            .value(),
        v = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        },
        N = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        };
    return {
        id: I.V,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[C.Xt] = 0), (e[C.PU] = 0), (e[C.HP] = 0), (e[C.yO] = 0), (e[C.bK] = S.channelList.length);
            for (let t = 0; t < j.length; t++) e[C.TF + t] = Math.max(1, j[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < C.TF) && 0 === t && 0 === j[e - C.TF].channelList.length,
        getCategoryFromSection: (e) => (e === C.bK ? S : j[e - C.TF]),
        getNamedCategoryFromSection: (e) => j[e - C.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t],
                  };
        },
        getGuildActionSection: () => v,
        getChannelNoticeSection: () => N,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [S, ...j];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e)
                        return [
                            {
                                section: n + C.bK,
                                row: r,
                            },
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [S, ...j])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [S, ...j]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
