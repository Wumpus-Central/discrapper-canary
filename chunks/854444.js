n.d(t, {
    o: () => A,
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
    p = n(131704),
    _ = n(680089),
    m = n(592125),
    h = n(58468),
    g = n(77498),
    E = n(496675),
    b = n(306680),
    y = n(944486),
    O = n(9156),
    v = n(823379),
    S = n(540126),
    I = n(647086),
    T = n(231338);
let C = [s.ZP, l.Z, u.ZP, d.Z, f.Z, _.Z, m.Z, g.Z, E.Z, b.ZP, y.Z, O.ZP];
function A() {
    let [e, t] = r.useState(() => N());
    return (
        r.useEffect(() => {
            let e = a().throttle(() => t(N()), 100);
            return C.forEach((t) => t.addChangeListener(e)), () => C.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function N() {
    let e = l.Z.getFavoriteChannels(),
        t = O.ZP.isGuildCollapsed(I._),
        n = y.Z.getChannelId(),
        r = m.Z.getChannel(n),
        i = y.Z.getVoiceChannelId(),
        s = [],
        u = {};
    for (let t in e) {
        let n = e[t],
            r = m.Z.getChannel(n.id);
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
                if (!n.isPrivate() && !E.Z.can(T.Pl.VIEW_CHANNEL, n)) return null;
                let u = null != r && (r.id === n.id || i === n.id),
                    f = null != r && r.isThread() && r.parent_id === n.id,
                    _ =
                        null !=
                        (c =
                            u || f || !s
                                ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id)
                                : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id))
                            ? c
                            : {},
                    m = (0, S.zR)(n, _, r, i, t),
                    g = h.Z.isCollapsed(n.id),
                    y = O.ZP.isChannelMuted(n.guild_id, n.id),
                    v = {
                        id: n.id,
                        record: n,
                        category: o,
                        position: e[n.id].order,
                        threadIds: m,
                        threadCount: a().size(m),
                        isCollapsed: g,
                        isMuted: y,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, S.Bz)(n, g, !1),
                    };
                return u || f || !a().isEmpty(_) || b.ZP.getMentionCount(n.id) > 0
                    ? v
                    : (t && y) ||
                        (s && (y || l || (0, p.vd)(n.type) || ((0, p.vc)(n.type) && !1 === b.ZP.hasUnread(n.id))))
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
        C = {
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
        A = a()(e)
            .values()
            .filter((e) => e.type === o.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: r } = e,
                    i = l.Z.getCategoryRecord(n),
                    a = null != (t = u[n]) ? t : [],
                    o = O.ZP.isChannelMuted(I._, n),
                    s = _.Z.isCollapsed(n),
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
        P = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null,
        };
    return {
        id: I._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[S.Fq] = 0), (e[S.wZ] = 0), (e[S.p2] = 0), (e[S.PB] = 0), (e[S.wd] = C.channelList.length);
            for (let t = 0; t < A.length; t++) e[S.wF + t] = Math.max(1, A[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < S.wF) && 0 === t && 0 === A[e - S.wF].channelList.length,
        getCategoryFromSection: (e) => (e === S.wd ? C : A[e - S.wF]),
        getNamedCategoryFromSection: (e) => A[e - S.wF],
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
        getChannelNoticeSection: () => P,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [C, ...A];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e)
                        return [
                            {
                                section: n + S.wd,
                                row: r,
                            },
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [C, ...A])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = m.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [C, ...A]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
