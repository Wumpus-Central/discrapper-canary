t.d(n, {
    o: function () {
        return D;
    },
    t: function () {
        return U;
    }
}),
    t(47120),
    t(653041);
var l = t(192379),
    i = t(392711),
    r = t.n(i),
    a = t(524437),
    u = t(317381),
    o = t(853856),
    d = t(846787),
    E = t(924301),
    _ = t(601070),
    c = t(569471),
    s = t(131704),
    C = t(680089),
    T = t(592125),
    I = t(58468),
    h = t(77498),
    A = t(496675),
    S = t(306680),
    L = t(944486),
    g = t(9156),
    f = t(823379),
    N = t(540126),
    p = t(647086),
    P = t(231338);
let R = [u.ZP, o.Z, E.ZP, _.Z, c.Z, C.Z, T.Z, h.Z, A.Z, S.ZP, L.Z, g.ZP];
function D() {
    let [e, n] = l.useState(() => U());
    return (
        l.useEffect(() => {
            let e = r().throttle(() => n(U()), 100);
            return R.forEach((n) => n.addChangeListener(e)), () => R.forEach((n) => n.removeChangeListener(e));
        }, []),
        e
    );
}
function U() {
    let e = o.Z.getFavoriteChannels(),
        n = g.ZP.isGuildCollapsed(p._),
        t = L.Z.getChannelId(),
        l = T.Z.getChannel(t),
        i = L.Z.getVoiceChannelId(),
        u = [],
        E = {};
    for (let n in e) {
        let t = e[n],
            l = T.Z.getChannel(t.id);
        if (null == l || t.type === a.Dd.CATEGORY) continue;
        let i = (0, d.r)(e, t, l);
        if (null == t.parentId || !(t.parentId in e)) {
            u.push(i);
            continue;
        }
        !(t.parentId in E) && (E[t.parentId] = []), E[t.parentId].push(i);
    }
    function c(t, a) {
        let { isCollapsed: u, isMuted: o } = a;
        return r()(t)
            .map((t) => {
                var d;
                if (!t.isPrivate() && !A.Z.can(P.Pl.VIEW_CHANNEL, t)) return null;
                let E = null != l && (l.id === t.id || i === t.id),
                    c = null != l && l.isThread() && l.parent_id === t.id,
                    C = null !== (d = E || c || !u ? _.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id) : _.Z.getActiveJoinedUnreadThreadsForParent(t.guild_id, t.id)) && void 0 !== d ? d : {},
                    T = (0, N.zR)(t, C, l, i, n),
                    h = I.Z.isCollapsed(t.id),
                    L = g.ZP.isChannelMuted(t.guild_id, t.id),
                    f = {
                        id: t.id,
                        record: t,
                        category: a,
                        position: e[t.id].order,
                        threadIds: T,
                        threadCount: r().size(T),
                        isCollapsed: h,
                        isMuted: L,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, N.Bz)(t, h, !1)
                    };
                return E || c || S.ZP.getMentionCount(t.id) > 0 ? f : (n && L) || (u && (L || o || (0, s.vd)(t.type) || ((0, s.vc)(t.type) && !1 === S.ZP.hasUnread(t.id)))) ? null : f;
            })
            .filter(f.lm)
            .sortBy((e) => {
                let { record: n } = e;
                return n.isGuildVocal() ? n.position + 10000 : n.position;
            })
            .value();
    }
    let h = null,
        R = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == h && (h = c(u, this)), h;
            }
        },
        D = r()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var n;
                let { id: t, order: l } = e,
                    i = o.Z.getCategoryRecord(t),
                    r = null !== (n = E[t]) && void 0 !== n ? n : [],
                    a = g.ZP.isChannelMuted(p._, t),
                    u = C.Z.isCollapsed(t),
                    d = null;
                return {
                    isMuted: a,
                    isCollapsed: u,
                    record: i,
                    id: t,
                    position: l,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == d && (d = c(r, this)), d;
                    }
                };
            })
            .value(),
        U = {
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
        id: p._,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[N.Fq] = 0), (e[N.wZ] = 0), (e[N.p2] = 0), (e[N.PB] = 0), (e[N.wd] = R.channelList.length);
            for (let n = 0; n < D.length; n++) e[N.wF + n] = Math.max(1, D[n].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, n) => !(e < N.wF) && 0 === n && 0 === D[e - N.wF].channelList.length,
        getCategoryFromSection: (e) => (e === N.wd ? R : D[e - N.wF]),
        getNamedCategoryFromSection: (e) => D[e - N.wF],
        getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
                ? null
                : {
                      category: t,
                      channel: t.channelList[n]
                  };
        },
        getGuildActionSection: () => U,
        getChannelNoticeSection: () => O,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let n = [R, ...D];
            for (let t = 0; t < n.length; t++)
                for (let l = 0; l < n[t].channelList.length; l++)
                    if (n[t].channelList[l].id === e)
                        return [
                            {
                                section: t + N.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let n of [R, ...D])
                for (let t of n.channelList)
                    for (let n of (e(t.record), t.threadIds)) {
                        let t = T.Z.getChannel(n);
                        null != t && e(t);
                    }
        },
        forEachChannel(e) {
            for (let n of [R, ...D]) for (let t of n.getChannelRecords()) e(t);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
