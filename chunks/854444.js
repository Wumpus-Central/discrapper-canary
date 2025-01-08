t.d(n, {
    o: function () {
        return p;
    },
    t: function () {
        return D;
    }
}),
    t(47120),
    t(653041);
var l = t(192379),
    i = t(392711),
    u = t.n(i),
    a = t(524437),
    E = t(317381),
    r = t(853856),
    o = t(846787),
    d = t(924301),
    _ = t(601070),
    c = t(569471),
    C = t(131704),
    I = t(680089),
    s = t(592125),
    T = t(58468),
    A = t(77498),
    h = t(496675),
    S = t(306680),
    L = t(944486),
    N = t(9156),
    g = t(823379),
    f = t(540126),
    P = t(647086),
    R = t(231338);
let U = [E.ZP, r.Z, d.ZP, _.Z, c.Z, I.Z, s.Z, A.Z, h.Z, S.ZP, L.Z, N.ZP];
function p() {
    let [e, n] = l.useState(() => D());
    return (
        l.useEffect(() => {
            let e = u().throttle(() => n(D()), 100);
            return U.forEach((n) => n.addChangeListener(e)), () => U.forEach((n) => n.removeChangeListener(e));
        }, []),
        e
    );
}
function D() {
    let e = r.Z.getFavoriteChannels(),
        n = N.ZP.isGuildCollapsed(P._),
        t = L.Z.getChannelId(),
        l = s.Z.getChannel(t),
        i = L.Z.getVoiceChannelId(),
        E = [],
        d = {};
    for (let n in e) {
        let t = e[n],
            l = s.Z.getChannel(t.id);
        if (null == l || t.type === a.Dd.CATEGORY) continue;
        let i = (0, o.r)(e, t, l);
        if (null == t.parentId || !(t.parentId in e)) {
            E.push(i);
            continue;
        }
        !(t.parentId in d) && (d[t.parentId] = []), d[t.parentId].push(i);
    }
    function c(t, a) {
        let { isCollapsed: E, isMuted: r } = a;
        return u()(t)
            .map((t) => {
                var o;
                if (!t.isPrivate() && !h.Z.can(R.Pl.VIEW_CHANNEL, t)) return null;
                let d = null != l && (l.id === t.id || i === t.id),
                    c = null != l && l.isThread() && l.parent_id === t.id,
                    I = null !== (o = d || c || !E ? _.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id) : _.Z.getActiveJoinedUnreadThreadsForParent(t.guild_id, t.id)) && void 0 !== o ? o : {},
                    s = (0, f.zR)(t, I, l, i, n),
                    A = T.Z.isCollapsed(t.id),
                    L = N.ZP.isChannelMuted(t.guild_id, t.id),
                    g = {
                        id: t.id,
                        record: t,
                        category: a,
                        position: e[t.id].order,
                        threadIds: s,
                        threadCount: u().size(s),
                        isCollapsed: A,
                        isMuted: L,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, f.Bz)(t, A, !1)
                    };
                return d || c || S.ZP.getMentionCount(t.id) > 0 ? g : (n && L) || (E && (L || r || (0, C.vd)(t.type) || ((0, C.vc)(t.type) && !1 === S.ZP.hasUnread(t.id)))) ? null : g;
            })
            .filter(g.lm)
            .sortBy((e) => {
                let { record: n } = e;
                return n.isGuildVocal() ? n.position + 10000 : n.position;
            })
            .value();
    }
    let A = null,
        U = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => E,
            getShownChannelIds: () => E.map((e) => e.id),
            getShownChannelAndThreadIds: () => E.map((e) => e.id),
            isEmpty: () => 0 === E.length,
            get channelList() {
                return null == A && (A = c(E, this)), A;
            }
        },
        p = u()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var n;
                let { id: t, order: l } = e,
                    i = r.Z.getCategoryRecord(t),
                    u = null !== (n = d[t]) && void 0 !== n ? n : [],
                    a = N.ZP.isChannelMuted(P._, t),
                    E = I.Z.isCollapsed(t),
                    o = null;
                return {
                    isMuted: a,
                    isCollapsed: E,
                    record: i,
                    id: t,
                    position: l,
                    getChannelRecords: () => u,
                    getShownChannelIds: () => u.map((e) => e.id),
                    getShownChannelAndThreadIds: () => u.map((e) => e.id),
                    isEmpty: () => 0 === u.length,
                    get channelList() {
                        return null == o && (o = c(u, this)), o;
                    }
                };
            })
            .value(),
        D = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        O = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: P._,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[f.Fq] = 0), (e[f.wZ] = 0), (e[f.p2] = 0), (e[f.PB] = 0), (e[f.wd] = U.channelList.length);
            for (let n = 0; n < p.length; n++) e[f.wF + n] = Math.max(1, p[n].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, n) => !(e < f.wF) && 0 === n && 0 === p[e - f.wF].channelList.length,
        getCategoryFromSection: (e) => (e === f.wd ? U : p[e - f.wF]),
        getNamedCategoryFromSection: (e) => p[e - f.wF],
        getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
                ? null
                : {
                      category: t,
                      channel: t.channelList[n]
                  };
        },
        getGuildActionSection: () => D,
        getChannelNoticeSection: () => O,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let n = [U, ...p];
            for (let t = 0; t < n.length; t++)
                for (let l = 0; l < n[t].channelList.length; l++)
                    if (n[t].channelList[l].id === e)
                        return [
                            {
                                section: t + f.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let n of [U, ...p])
                for (let t of n.channelList)
                    for (let n of (e(t.record), t.threadIds)) {
                        let t = s.Z.getChannel(n);
                        null != t && e(t);
                    }
        },
        forEachChannel(e) {
            for (let n of [U, ...p]) for (let t of n.getChannelRecords()) e(t);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
