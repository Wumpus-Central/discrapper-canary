n.d(t, {
    o: () => v,
    t: () => m
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
    C = n(680089),
    h = n(592125),
    T = n(58468),
    I = n(77498),
    S = n(496675),
    g = n(306680),
    A = n(944486),
    p = n(9156),
    f = n(823379),
    N = n(540126),
    L = n(647086),
    P = n(231338);
let Z = [s.ZP, o.Z, d.ZP, c.Z, E.Z, C.Z, h.Z, I.Z, S.Z, g.ZP, A.Z, p.ZP];
function v() {
    let [e, t] = l.useState(() => m());
    return (
        l.useEffect(() => {
            let e = a().throttle(() => t(m()), 100);
            return Z.forEach((t) => t.addChangeListener(e)), () => Z.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function m() {
    let e = o.Z.getFavoriteChannels(),
        t = p.ZP.isGuildCollapsed(L._),
        n = A.Z.getChannelId(),
        l = h.Z.getChannel(n),
        i = A.Z.getVoiceChannelId(),
        s = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            l = h.Z.getChannel(n.id);
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
                if (!n.isPrivate() && !S.Z.can(P.Pl.VIEW_CHANNEL, n)) return null;
                let d = null != l && (l.id === n.id || i === n.id),
                    E = null != l && l.isThread() && l.parent_id === n.id,
                    C = null !== (u = d || E || !s ? c.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : c.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== u ? u : {},
                    h = (0, N.zR)(n, C, l, i, t),
                    I = T.Z.isCollapsed(n.id),
                    A = p.ZP.isChannelMuted(n.guild_id, n.id),
                    f = {
                        id: n.id,
                        record: n,
                        category: r,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: a().size(h),
                        isCollapsed: I,
                        isMuted: A,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, N.Bz)(n, I, !1)
                    };
                return d || E || g.ZP.getMentionCount(n.id) > 0 ? f : (t && A) || (s && (A || o || (0, _.vd)(n.type) || ((0, _.vc)(n.type) && !1 === g.ZP.hasUnread(n.id)))) ? null : f;
            })
            .filter(f.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let I = null,
        Z = {
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
        v = a()(e)
            .values()
            .filter((e) => e.type === r.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: l } = e,
                    i = o.Z.getCategoryRecord(n),
                    a = null !== (t = d[n]) && void 0 !== t ? t : [],
                    r = p.ZP.isChannelMuted(L._, n),
                    s = C.Z.isCollapsed(n),
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
        m = {
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
            (e[N.Fq] = 0), (e[N.wZ] = 0), (e[N.p2] = 0), (e[N.PB] = 0), (e[N.wd] = Z.channelList.length);
            for (let t = 0; t < v.length; t++) e[N.wF + t] = Math.max(1, v[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < N.wF) && 0 === t && 0 === v[e - N.wF].channelList.length,
        getCategoryFromSection: (e) => (e === N.wd ? Z : v[e - N.wF]),
        getNamedCategoryFromSection: (e) => v[e - N.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t]
                  };
        },
        getGuildActionSection: () => m,
        getChannelNoticeSection: () => D,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [Z, ...v];
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
            for (let t of [Z, ...v])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [Z, ...v]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
