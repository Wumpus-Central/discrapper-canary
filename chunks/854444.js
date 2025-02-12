n.d(t, {
    o: () => m,
    t: () => P
}),
    n(47120),
    n(653041);
var l = n(192379),
    i = n(392711),
    a = n.n(i),
    r = n(524437),
    s = n(317381),
    o = n(853856),
    u = n(846787),
    d = n(924301),
    c = n(601070),
    E = n(569471),
    C = n(131704),
    h = n(680089),
    _ = n(592125),
    I = n(58468),
    g = n(77498),
    T = n(496675),
    S = n(306680),
    f = n(944486),
    A = n(9156),
    N = n(823379),
    p = n(540126),
    v = n(647086),
    L = n(231338);
let Z = [s.ZP, o.Z, d.ZP, c.Z, E.Z, h.Z, _.Z, g.Z, T.Z, S.ZP, f.Z, A.ZP];
function m() {
    let [e, t] = l.useState(() => P());
    return (
        l.useEffect(() => {
            let e = a().throttle(() => t(P()), 100);
            return Z.forEach((t) => t.addChangeListener(e)), () => Z.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function P() {
    let e = o.Z.getFavoriteChannels(),
        t = A.ZP.isGuildCollapsed(v._),
        n = f.Z.getChannelId(),
        l = _.Z.getChannel(n),
        i = f.Z.getVoiceChannelId(),
        s = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            l = _.Z.getChannel(n.id);
        if (null == l || n.type === r.Dd.CATEGORY) continue;
        let i = (0, u.r)(e, n, l);
        if (null == n.parentId || !(n.parentId in e)) {
            s.push(i);
            continue;
        }
        n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(i);
    }
    function E(n, r) {
        let { isCollapsed: s, isMuted: o } = r;
        return a()(n)
            .map((n) => {
                var u;
                if (!n.isPrivate() && !T.Z.can(L.Pl.VIEW_CHANNEL, n)) return null;
                let d = null != l && (l.id === n.id || i === n.id),
                    E = null != l && l.isThread() && l.parent_id === n.id,
                    h = null !== (u = d || E || !s ? c.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : c.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== u ? u : {},
                    _ = (0, p.zR)(n, h, l, i, t),
                    g = I.Z.isCollapsed(n.id),
                    f = A.ZP.isChannelMuted(n.guild_id, n.id),
                    N = {
                        id: n.id,
                        record: n,
                        category: r,
                        position: e[n.id].order,
                        threadIds: _,
                        threadCount: a().size(_),
                        isCollapsed: g,
                        isMuted: f,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, p.Bz)(n, g, !1)
                    };
                return d || E || S.ZP.getMentionCount(n.id) > 0 ? N : (t && f) || (s && (f || o || (0, C.vd)(n.type) || ((0, C.vc)(n.type) && !1 === S.ZP.hasUnread(n.id)))) ? null : N;
            })
            .filter(N.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let g = null,
        Z = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => s,
            getShownChannelIds: () => s.map((e) => e.id),
            getShownChannelAndThreadIds: () => s.map((e) => e.id),
            isEmpty: () => 0 === s.length,
            get channelList() {
                return null == g && (g = E(s, this)), g;
            }
        },
        m = a()(e)
            .values()
            .filter((e) => e.type === r.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: l } = e,
                    i = o.Z.getCategoryRecord(n),
                    a = null !== (t = d[n]) && void 0 !== t ? t : [],
                    r = A.ZP.isChannelMuted(v._, n),
                    s = h.Z.isCollapsed(n),
                    u = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
                    record: i,
                    id: n,
                    position: l,
                    getChannelRecords: () => a,
                    getShownChannelIds: () => a.map((e) => e.id),
                    getShownChannelAndThreadIds: () => a.map((e) => e.id),
                    isEmpty: () => 0 === a.length,
                    get channelList() {
                        return null == u && (u = E(a, this)), u;
                    }
                };
            })
            .value(),
        P = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        D = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: v._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[p.Fq] = 0), (e[p.wZ] = 0), (e[p.p2] = 0), (e[p.PB] = 0), (e[p.wd] = Z.channelList.length);
            for (let t = 0; t < m.length; t++) e[p.wF + t] = Math.max(1, m[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < p.wF) && 0 === t && 0 === m[e - p.wF].channelList.length,
        getCategoryFromSection: (e) => (e === p.wd ? Z : m[e - p.wF]),
        getNamedCategoryFromSection: (e) => m[e - p.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t]
                  };
        },
        getGuildActionSection: () => P,
        getChannelNoticeSection: () => D,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [Z, ...m];
            for (let n = 0; n < t.length; n++)
                for (let l = 0; l < t[n].channelList.length; l++)
                    if (t[n].channelList[l].id === e)
                        return [
                            {
                                section: n + p.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [Z, ...m])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = _.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [Z, ...m]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
