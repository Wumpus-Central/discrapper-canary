n.d(t, {
    o: () => C,
    t: () => N,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(524437),
    s = n(317381),
    l = n(853856),
    c = n(846787),
    u = n(924301),
    d = n(601070),
    f = n(569471),
    _ = n(131704),
    p = n(680089),
    h = n(592125),
    m = n(58468),
    g = n(77498),
    E = n(496675),
    b = n(306680),
    y = n(944486),
    O = n(9156),
    v = n(823379),
    I = n(540126),
    T = n(647086),
    S = n(231338);
let A = [s.ZP, l.Z, u.ZP, d.Z, f.Z, p.Z, h.Z, g.Z, E.Z, b.ZP, y.Z, O.ZP];
function C() {
    let [e, t] = r.useState(() => N());
    return (
        r.useEffect(() => {
            let e = a().throttle(() => t(N()), 100);
            return A.forEach((t) => t.addChangeListener(e)), () => A.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function N() {
    let e = l.Z.getFavoriteChannels(),
        t = O.ZP.isGuildCollapsed(T._),
        n = y.Z.getChannelId(),
        r = h.Z.getChannel(n),
        i = y.Z.getVoiceChannelId(),
        s = [],
        u = {};
    for (let t in e) {
        let n = e[t],
            r = h.Z.getChannel(n.id);
        if (null == r || n.type === o.Dd.CATEGORY) continue;
        let i = (0, c.r)(e, n, r);
        if (null == n.parentId || !(n.parentId in e)) {
            s.push(i);
            continue;
        }
        n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(i);
    }
    function f(n, o) {
        let { isCollapsed: s, isMuted: l } = o;
        return a()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !E.Z.can(S.Pl.VIEW_CHANNEL, n)) return null;
                let u = null != r && (r.id === n.id || i === n.id),
                    f = null != r && r.isThread() && r.parent_id === n.id,
                    p =
                        null !=
                        (c =
                            u || f || !s
                                ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id)
                                : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id))
                            ? c
                            : {},
                    h = (0, I.zR)(n, p, r, i, t),
                    g = m.Z.isCollapsed(n.id),
                    y = O.ZP.isChannelMuted(n.guild_id, n.id),
                    v = {
                        id: n.id,
                        record: n,
                        category: o,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: a().size(h),
                        isCollapsed: g,
                        isMuted: y,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, I.Bz)(n, g, !1),
                    };
                return u || f || !a().isEmpty(p) || b.ZP.getMentionCount(n.id) > 0
                    ? v
                    : (t && y) ||
                        (s && (y || l || (0, _.vd)(n.type) || ((0, _.vc)(n.type) && !1 === b.ZP.hasUnread(n.id))))
                      ? null
                      : v;
            })
            .filter(v.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let g = null,
        A = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => s,
            getShownChannelIds: () => s.map((e) => e.id),
            getShownChannelAndThreadIds: () => s.map((e) => e.id),
            isEmpty: () => 0 === s.length,
            get channelList() {
                return null == g && (g = f(s, this)), g;
            },
        },
        C = a()(e)
            .values()
            .filter((e) => e.type === o.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: r } = e,
                    i = l.Z.getCategoryRecord(n),
                    a = null != (t = u[n]) ? t : [],
                    o = O.ZP.isChannelMuted(T._, n),
                    s = p.Z.isCollapsed(n),
                    c = null;
                return {
                    isMuted: o,
                    isCollapsed: s,
                    record: i,
                    id: n,
                    position: r,
                    getChannelRecords: () => a,
                    getShownChannelIds: () => a.map((e) => e.id),
                    getShownChannelAndThreadIds: () => a.map((e) => e.id),
                    isEmpty: () => 0 === a.length,
                    get channelList() {
                        return null == c && (c = f(a, this)), c;
                    },
                };
            })
            .value(),
        N = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        },
        R = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        };
    return {
        id: T._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[I.Fq] = 0), (e[I.wZ] = 0), (e[I.p2] = 0), (e[I.PB] = 0), (e[I.wd] = A.channelList.length);
            for (let t = 0; t < C.length; t++) e[I.wF + t] = Math.max(1, C[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < I.wF) && 0 === t && 0 === C[e - I.wF].channelList.length,
        getCategoryFromSection: (e) => (e === I.wd ? A : C[e - I.wF]),
        getNamedCategoryFromSection: (e) => C[e - I.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t],
                  };
        },
        getGuildActionSection: () => N,
        getChannelNoticeSection: () => R,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [A, ...C];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e)
                        return [
                            {
                                section: n + I.wd,
                                row: r,
                            },
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [A, ...C])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [A, ...C]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
