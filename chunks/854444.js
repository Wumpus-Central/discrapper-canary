(n.d(t, {
    o: () => N,
    t: () => I
}),
    n(388685),
    n(539854));
var i = n(73800),
    r = n(392711),
    s = n.n(r),
    a = n(524437),
    l = n(317381),
    o = n(853856),
    c = n(846787),
    d = n(924301),
    u = n(601070),
    m = n(569471),
    p = n(131704),
    g = n(680089),
    h = n(592125),
    f = n(58468),
    b = n(77498),
    x = n(496675),
    _ = n(306680),
    j = n(944486),
    O = n(9156),
    E = n(823379),
    C = n(540126),
    v = n(647086),
    S = n(231338);
let T = 12633 == n.j ? [l.ZP, o.Z, d.ZP, u.Z, m.Z, g.Z, h.Z, b.Z, x.Z, _.ZP, j.Z, O.ZP] : null;
function N() {
    let [e, t] = i.useState(() => I());
    return (
        i.useEffect(() => {
            let e = s().throttle(() => t(I()), 100);
            return (T.forEach((t) => t.addChangeListener(e)), () => T.forEach((t) => t.removeChangeListener(e)));
        }, []),
        e
    );
}
function I() {
    let e = o.Z.getFavoriteChannels(),
        t = O.ZP.isGuildCollapsed(v._),
        n = j.Z.getChannelId(),
        i = h.Z.getChannel(n),
        r = j.Z.getVoiceChannelId(),
        l = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            i = h.Z.getChannel(n.id);
        if (null == i || n.type === a.Dd.CATEGORY) continue;
        let r = (0, c.r)(e, n, i);
        if (null == n.parentId || !(n.parentId in e)) {
            l.push(r);
            continue;
        }
        (n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(r));
    }
    function m(n, a) {
        let { isCollapsed: l, isMuted: o } = a;
        return s()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !x.Z.can(S.Pl.VIEW_CHANNEL, n)) return null;
                let d = null != i && (i.id === n.id || r === n.id),
                    m = null != i && i.isThread() && i.parent_id === n.id,
                    g = null != (c = d || m || !l ? u.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : u.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
                    h = (0, C.zR)(n, g, i, r, t),
                    b = f.Z.isCollapsed(n.id),
                    j = O.ZP.isChannelMuted(n.guild_id, n.id),
                    E = {
                        id: n.id,
                        record: n,
                        category: a,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: s().size(h),
                        isCollapsed: b,
                        isMuted: j,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, C.Bz)(n, b, !1)
                    };
                return d || m || !s().isEmpty(g) || _.ZP.getMentionCount(n.id) > 0 ? E : (t && j) || (l && (j || o || (0, p.vd)(n.type) || ((0, p.vc)(n.type) && !1 === _.ZP.hasUnread(n.id)))) ? null : E;
            })
            .filter(E.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let b = null,
        T = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => l,
            getShownChannelIds: () => l.map((e) => e.id),
            getShownChannelAndThreadIds: () => l.map((e) => e.id),
            isEmpty: () => 0 === l.length,
            get channelList() {
                return (null == b && (b = m(l, this)), b);
            }
        },
        N = s()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: i } = e,
                    r = o.Z.getCategoryRecord(n),
                    s = null != (t = d[n]) ? t : [],
                    a = O.ZP.isChannelMuted(v._, n),
                    l = g.Z.isCollapsed(n),
                    c = null;
                return {
                    isMuted: a,
                    isCollapsed: l,
                    record: r,
                    id: n,
                    position: i,
                    getChannelRecords: () => s,
                    getShownChannelIds: () => s.map((e) => e.id),
                    getShownChannelAndThreadIds: () => s.map((e) => e.id),
                    isEmpty: () => 0 === s.length,
                    get channelList() {
                        return (null == c && (c = m(s, this)), c);
                    }
                };
            })
            .value(),
        I = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        y = {
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
            ((e[C.Fq] = 0), (e[C.wZ] = 0), (e[C.p2] = 0), (e[C.PB] = 0), (e[C.wd] = T.channelList.length));
            for (let t = 0; t < N.length; t++) e[C.wF + t] = Math.max(1, N[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < C.wF) && 0 === t && 0 === N[e - C.wF].channelList.length,
        getCategoryFromSection: (e) => (e === C.wd ? T : N[e - C.wF]),
        getNamedCategoryFromSection: (e) => N[e - C.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t]
                  };
        },
        getGuildActionSection: () => I,
        getChannelNoticeSection: () => y,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [T, ...N];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e)
                        return [
                            {
                                section: n + C.wd,
                                row: i
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [T, ...N])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [T, ...N]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
