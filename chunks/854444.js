n.d(t, {
    o: () => N,
    t: () => I
}),
    n(388685),
    n(539854);
var i = n(73800),
    r = n(392711),
    s = n.n(r),
    l = n(524437),
    a = n(317381),
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
    _ = n(496675),
    x = n(306680),
    E = n(944486),
    j = n(9156),
    C = n(823379),
    O = n(540126),
    S = n(647086),
    v = n(231338);
let T = 12633 == n.j ? [a.ZP, o.Z, d.ZP, u.Z, m.Z, g.Z, h.Z, b.Z, _.Z, x.ZP, E.Z, j.ZP] : null;
function N() {
    let [e, t] = i.useState(() => I());
    return (
        i.useEffect(() => {
            let e = s().throttle(() => t(I()), 100);
            return T.forEach((t) => t.addChangeListener(e)), () => T.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function I() {
    let e = o.Z.getFavoriteChannels(),
        t = j.ZP.isGuildCollapsed(S._),
        n = E.Z.getChannelId(),
        i = h.Z.getChannel(n),
        r = E.Z.getVoiceChannelId(),
        a = [],
        d = {};
    for (let t in e) {
        let n = e[t],
            i = h.Z.getChannel(n.id);
        if (null == i || n.type === l.Dd.CATEGORY) continue;
        let r = (0, c.r)(e, n, i);
        if (null == n.parentId || !(n.parentId in e)) {
            a.push(r);
            continue;
        }
        n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(r);
    }
    function m(n, l) {
        let { isCollapsed: a, isMuted: o } = l;
        return s()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !_.Z.can(v.Pl.VIEW_CHANNEL, n)) return null;
                let d = null != i && (i.id === n.id || r === n.id),
                    m = null != i && i.isThread() && i.parent_id === n.id,
                    g = null != (c = d || m || !a ? u.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : u.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
                    h = (0, O.zR)(n, g, i, r, t),
                    b = f.Z.isCollapsed(n.id),
                    E = j.ZP.isChannelMuted(n.guild_id, n.id),
                    C = {
                        id: n.id,
                        record: n,
                        category: l,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: s().size(h),
                        isCollapsed: b,
                        isMuted: E,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, O.Bz)(n, b, !1)
                    };
                return d || m || !s().isEmpty(g) || x.ZP.getMentionCount(n.id) > 0 ? C : (t && E) || (a && (E || o || (0, p.vd)(n.type) || ((0, p.vc)(n.type) && !1 === x.ZP.hasUnread(n.id)))) ? null : C;
            })
            .filter(C.lm)
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
            getChannelRecords: () => a,
            getShownChannelIds: () => a.map((e) => e.id),
            getShownChannelAndThreadIds: () => a.map((e) => e.id),
            isEmpty: () => 0 === a.length,
            get channelList() {
                return null == b && (b = m(a, this)), b;
            }
        },
        N = s()(e)
            .values()
            .filter((e) => e.type === l.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: i } = e,
                    r = o.Z.getCategoryRecord(n),
                    s = null != (t = d[n]) ? t : [],
                    l = j.ZP.isChannelMuted(S._, n),
                    a = g.Z.isCollapsed(n),
                    c = null;
                return {
                    isMuted: l,
                    isCollapsed: a,
                    record: r,
                    id: n,
                    position: i,
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
        id: S._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[O.Fq] = 0), (e[O.wZ] = 0), (e[O.p2] = 0), (e[O.PB] = 0), (e[O.wd] = T.channelList.length);
            for (let t = 0; t < N.length; t++) e[O.wF + t] = Math.max(1, N[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < O.wF) && 0 === t && 0 === N[e - O.wF].channelList.length,
        getCategoryFromSection: (e) => (e === O.wd ? T : N[e - O.wF]),
        getNamedCategoryFromSection: (e) => N[e - O.wF],
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
                                section: n + O.wd,
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
