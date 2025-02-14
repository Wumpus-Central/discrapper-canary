n.d(t, {
    o: () => Z,
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
    _ = n(131704),
    h = n(680089),
    C = n(592125),
    T = n(58468),
    I = n(77498),
    g = n(496675),
    S = n(306680),
    f = n(944486),
    p = n(9156),
    A = n(823379),
    N = n(540126),
    L = n(647086),
    v = n(231338);
let m = [s.ZP, o.Z, d.ZP, c.Z, E.Z, h.Z, C.Z, I.Z, g.Z, S.ZP, f.Z, p.ZP];
function Z() {
    let [e, t] = l.useState(() => P());
    return (
        l.useEffect(() => {
            let e = a().throttle(() => t(P()), 100);
            return m.forEach((t) => t.addChangeListener(e)), () => m.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function P() {
    let e = o.Z.getFavoriteChannels(),
        t = p.ZP.isGuildCollapsed(L._),
        n = f.Z.getChannelId(),
        l = C.Z.getChannel(n),
        i = f.Z.getVoiceChannelId(),
        s = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            l = C.Z.getChannel(n.id);
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
                if (!n.isPrivate() && !g.Z.can(v.Pl.VIEW_CHANNEL, n)) return null;
                let d = null != l && (l.id === n.id || i === n.id),
                    E = null != l && l.isThread() && l.parent_id === n.id,
                    h = null !== (u = d || E || !s ? c.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : c.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== u ? u : {},
                    C = (0, N.zR)(n, h, l, i, t),
                    I = T.Z.isCollapsed(n.id),
                    f = p.ZP.isChannelMuted(n.guild_id, n.id),
                    A = {
                        id: n.id,
                        record: n,
                        category: r,
                        position: e[n.id].order,
                        threadIds: C,
                        threadCount: a().size(C),
                        isCollapsed: I,
                        isMuted: f,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, N.Bz)(n, I, !1)
                    };
                return d || E || S.ZP.getMentionCount(n.id) > 0 ? A : (t && f) || (s && (f || o || (0, _.vd)(n.type) || ((0, _.vc)(n.type) && !1 === S.ZP.hasUnread(n.id)))) ? null : A;
            })
            .filter(A.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let I = null,
        m = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => s,
            getShownChannelIds: () => s.map((e) => e.id),
            getShownChannelAndThreadIds: () => s.map((e) => e.id),
            isEmpty: () => 0 === s.length,
            get channelList() {
                return null == I && (I = E(s, this)), I;
            }
        },
        Z = a()(e)
            .values()
            .filter((e) => e.type === r.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: l } = e,
                    i = o.Z.getCategoryRecord(n),
                    a = null !== (t = d[n]) && void 0 !== t ? t : [],
                    r = p.ZP.isChannelMuted(L._, n),
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
        id: L._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[N.Fq] = 0), (e[N.wZ] = 0), (e[N.p2] = 0), (e[N.PB] = 0), (e[N.wd] = m.channelList.length);
            for (let t = 0; t < Z.length; t++) e[N.wF + t] = Math.max(1, Z[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < N.wF) && 0 === t && 0 === Z[e - N.wF].channelList.length,
        getCategoryFromSection: (e) => (e === N.wd ? m : Z[e - N.wF]),
        getNamedCategoryFromSection: (e) => Z[e - N.wF],
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
            let t = [m, ...Z];
            for (let n = 0; n < t.length; n++)
                for (let l = 0; l < t[n].channelList.length; l++)
                    if (t[n].channelList[l].id === e)
                        return [
                            {
                                section: n + N.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [m, ...Z])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = C.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [m, ...Z]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
