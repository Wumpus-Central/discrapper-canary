n.d(t, {
    o: () => N,
    t: () => A
}),
    n(47120),
    n(653041);
var l = n(192379),
    i = n(392711),
    a = n.n(i),
    o = n(524437),
    r = n(317381),
    s = n(853856),
    d = n(846787),
    u = n(924301),
    c = n(601070),
    h = n(569471),
    g = n(131704),
    f = n(680089),
    p = n(592125),
    C = n(58468),
    E = n(77498),
    v = n(496675),
    I = n(306680),
    Z = n(944486),
    T = n(9156),
    _ = n(823379),
    m = n(540126),
    P = n(647086),
    S = n(231338);
let L = [r.ZP, s.Z, u.ZP, c.Z, h.Z, f.Z, p.Z, E.Z, v.Z, I.ZP, Z.Z, T.ZP];
function N() {
    let [e, t] = l.useState(() => A());
    return (
        l.useEffect(() => {
            let e = a().throttle(() => t(A()), 100);
            return L.forEach((t) => t.addChangeListener(e)), () => L.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function A() {
    let e = s.Z.getFavoriteChannels(),
        t = T.ZP.isGuildCollapsed(P._),
        n = Z.Z.getChannelId(),
        l = p.Z.getChannel(n),
        i = Z.Z.getVoiceChannelId(),
        r = [],
        u = {};
    for (let t in e) {
        let n = e[t],
            l = p.Z.getChannel(n.id);
        if (null == l || n.type === o.Dd.CATEGORY) continue;
        let i = (0, d.r)(e, n, l);
        if (null == n.parentId || !(n.parentId in e)) {
            r.push(i);
            continue;
        }
        n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(i);
    }
    function h(n, o) {
        let { isCollapsed: r, isMuted: s } = o;
        return a()(n)
            .map((n) => {
                var d;
                if (!n.isPrivate() && !v.Z.can(S.Pl.VIEW_CHANNEL, n)) return null;
                let u = null != l && (l.id === n.id || i === n.id),
                    h = null != l && l.isThread() && l.parent_id === n.id,
                    f = null !== (d = u || h || !r ? c.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : c.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== d ? d : {},
                    p = (0, m.zR)(n, f, l, i, t),
                    E = C.Z.isCollapsed(n.id),
                    Z = T.ZP.isChannelMuted(n.guild_id, n.id),
                    _ = {
                        id: n.id,
                        record: n,
                        category: o,
                        position: e[n.id].order,
                        threadIds: p,
                        threadCount: a().size(p),
                        isCollapsed: E,
                        isMuted: Z,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, m.Bz)(n, E, !1)
                    };
                return u || h || I.ZP.getMentionCount(n.id) > 0 ? _ : (t && Z) || (r && (Z || s || (0, g.vd)(n.type) || ((0, g.vc)(n.type) && !1 === I.ZP.hasUnread(n.id)))) ? null : _;
            })
            .filter(_.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let E = null,
        L = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => r,
            getShownChannelIds: () => r.map((e) => e.id),
            getShownChannelAndThreadIds: () => r.map((e) => e.id),
            isEmpty: () => 0 === r.length,
            get channelList() {
                return null == E && (E = h(r, this)), E;
            }
        },
        N = a()(e)
            .values()
            .filter((e) => e.type === o.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: l } = e,
                    i = s.Z.getCategoryRecord(n),
                    a = null !== (t = u[n]) && void 0 !== t ? t : [],
                    o = T.ZP.isChannelMuted(P._, n),
                    r = f.Z.isCollapsed(n),
                    d = null;
                return {
                    isMuted: o,
                    isCollapsed: r,
                    record: i,
                    id: n,
                    position: l,
                    getChannelRecords: () => a,
                    getShownChannelIds: () => a.map((e) => e.id),
                    getShownChannelAndThreadIds: () => a.map((e) => e.id),
                    isEmpty: () => 0 === a.length,
                    get channelList() {
                        return null == d && (d = h(a, this)), d;
                    }
                };
            })
            .value(),
        A = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        R = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: P._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[m.Fq] = 0), (e[m.wZ] = 0), (e[m.p2] = 0), (e[m.PB] = 0), (e[m.wd] = L.channelList.length);
            for (let t = 0; t < N.length; t++) e[m.wF + t] = Math.max(1, N[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < m.wF) && 0 === t && 0 === N[e - m.wF].channelList.length,
        getCategoryFromSection: (e) => (e === m.wd ? L : N[e - m.wF]),
        getNamedCategoryFromSection: (e) => N[e - m.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t]
                  };
        },
        getGuildActionSection: () => A,
        getChannelNoticeSection: () => R,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [L, ...N];
            for (let n = 0; n < t.length; n++)
                for (let l = 0; l < t[n].channelList.length; l++)
                    if (t[n].channelList[l].id === e)
                        return [
                            {
                                section: n + m.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [L, ...N])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = p.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [L, ...N]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
