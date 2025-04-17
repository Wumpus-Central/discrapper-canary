n.d(t, {
    o: () => T,
    t: () => I
}),
    n(388685),
    n(539854);
var r = n(192379),
    i = n(392711),
    s = n.n(i),
    a = n(524437),
    l = n(317381),
    o = n(853856),
    c = n(846787),
    d = n(924301),
    u = n(601070),
    m = n(569471),
    g = n(131704),
    p = n(680089),
    h = n(592125),
    f = n(58468),
    b = n(77498),
    _ = n(496675),
    N = n(306680),
    x = n(944486),
    E = n(9156),
    j = n(823379),
    C = n(540126),
    O = n(647086),
    S = n(231338);
let v = 12633 == n.j ? [l.ZP, o.Z, d.ZP, u.Z, m.Z, p.Z, h.Z, b.Z, _.Z, N.ZP, x.Z, E.ZP] : null;
function T() {
    let [e, t] = r.useState(() => I());
    return (
        r.useEffect(() => {
            let e = s().throttle(() => t(I()), 100);
            return v.forEach((t) => t.addChangeListener(e)), () => v.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function I() {
    let e = o.Z.getFavoriteChannels(),
        t = E.ZP.isGuildCollapsed(O._),
        n = x.Z.getChannelId(),
        r = h.Z.getChannel(n),
        i = x.Z.getVoiceChannelId(),
        l = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            r = h.Z.getChannel(n.id);
        if (null == r || n.type === a.Dd.CATEGORY) continue;
        let i = (0, c.r)(e, n, r);
        if (null == n.parentId || !(n.parentId in e)) {
            l.push(i);
            continue;
        }
        n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(i);
    }
    function m(n, a) {
        let { isCollapsed: l, isMuted: o } = a;
        return s()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !_.Z.can(S.Pl.VIEW_CHANNEL, n)) return null;
                let d = null != r && (r.id === n.id || i === n.id),
                    m = null != r && r.isThread() && r.parent_id === n.id,
                    p = null != (c = d || m || !l ? u.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : u.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
                    h = (0, C.zR)(n, p, r, i, t),
                    b = f.Z.isCollapsed(n.id),
                    x = E.ZP.isChannelMuted(n.guild_id, n.id),
                    j = {
                        id: n.id,
                        record: n,
                        category: a,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: s().size(h),
                        isCollapsed: b,
                        isMuted: x,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, C.Bz)(n, b, !1)
                    };
                return d || m || !s().isEmpty(p) || N.ZP.getMentionCount(n.id) > 0 ? j : (t && x) || (l && (x || o || (0, g.vd)(n.type) || ((0, g.vc)(n.type) && !1 === N.ZP.hasUnread(n.id)))) ? null : j;
            })
            .filter(j.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let b = null,
        v = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => l,
            getShownChannelIds: () => l.map((e) => e.id),
            getShownChannelAndThreadIds: () => l.map((e) => e.id),
            isEmpty: () => 0 === l.length,
            get channelList() {
                return null == b && (b = m(l, this)), b;
            }
        },
        T = s()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: r } = e,
                    i = o.Z.getCategoryRecord(n),
                    s = null != (t = d[n]) ? t : [],
                    a = E.ZP.isChannelMuted(O._, n),
                    l = p.Z.isCollapsed(n),
                    c = null;
                return {
                    isMuted: a,
                    isCollapsed: l,
                    record: i,
                    id: n,
                    position: r,
                    getChannelRecords: () => s,
                    getShownChannelIds: () => s.map((e) => e.id),
                    getShownChannelAndThreadIds: () => s.map((e) => e.id),
                    isEmpty: () => 0 === s.length,
                    get channelList() {
                        return null == c && (c = m(s, this)), c;
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
        id: O._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[C.Fq] = 0), (e[C.wZ] = 0), (e[C.p2] = 0), (e[C.PB] = 0), (e[C.wd] = v.channelList.length);
            for (let t = 0; t < T.length; t++) e[C.wF + t] = Math.max(1, T[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < C.wF) && 0 === t && 0 === T[e - C.wF].channelList.length,
        getCategoryFromSection: (e) => (e === C.wd ? v : T[e - C.wF]),
        getNamedCategoryFromSection: (e) => T[e - C.wF],
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
            let t = [v, ...T];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e)
                        return [
                            {
                                section: n + C.wd,
                                row: r
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [v, ...T])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [v, ...T]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
