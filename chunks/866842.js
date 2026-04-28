n.d(t, { D: () => G, g: () => R }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(873298),
    o = n(933958),
    a = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(698441),
    g = n(695633),
    A = n(152007),
    h = n(95701),
    E = n(924985),
    I = n(734057),
    p = n(945886),
    C = n(760751),
    b = n(576705),
    _ = n(222823),
    N = n(309010),
    m = n(543465),
    S = n(403362),
    T = n(32603),
    O = n(349828),
    L = n(818348);
let f = 21552 == n.j ? [o.Ay, a.A, u.Ay, g.A, A.A, E.A, I.A, C.A, b.A, _.Ay, N.A, m.Ay] : null;
function G() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => R()),
        l = i.useMemo(() => R({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(R()), 100);
        return f.forEach((t) => t.addChangeListener(e)), () => f.forEach((t) => t.removeChangeListener(e));
    }, []);
    let r = e ? t : l,
        o = (function (e) {
            if (e.getSections().length > T.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(r);
    return { guildChannels: r, shouldShowEmptyState: o };
}
function R(e) {
    let t = e ?? a.A.getFavoriteChannels(),
        n = m.Ay.isGuildCollapsed(O.Vc),
        i = N.A.getChannelId(),
        l = I.A.getChannel(i),
        o = N.A.getVoiceChannelId(),
        u = [],
        A = {};
    for (let e in t) {
        let n = t[e],
            i = I.A.getChannel(n.id);
        if (null == i || n.type === r.Ip.CATEGORY) continue;
        let l = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== r.Ip.CATEGORY) {
            u.push(l);
            continue;
        }
        let s = n.parentId;
        s in A || (A[s] = []), A[s].push(l);
    }
    function C(e, i) {
        let { isCollapsed: r, isMuted: a } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !b.A.can(L.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || o === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !r
                            ? g.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : g.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    A = (0, T.wF)(e, u, l, o, n),
                    E = p.A.isCollapsed(e.id),
                    I = m.Ay.isChannelMuted(e.guild_id, e.id),
                    C = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: A,
                        threadCount: s().size(A),
                        isCollapsed: E,
                        isMuted: I,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, T.go)(e, E, !1),
                    };
                return d || c || !s().isEmpty(u) || _.Ay.getMentionCount(e.id) > 0
                    ? C
                    : (n && I) ||
                        (r && (I || a || (0, h.gV)(e.type) || ((0, h.ig)(e.type) && !1 === _.Ay.hasUnread(e.id))))
                      ? null
                      : C;
            })
            .filter(S.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let f = null,
        G = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == f && (f = C(u, this)), f;
            },
        },
        R = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = a.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = A[n] ?? [],
                    s = m.Ay.isChannelMuted(O.Vc, n),
                    r = E.A.isCollapsed(n),
                    o = null;
                return {
                    isMuted: s,
                    isCollapsed: r,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == o && (o = C(l, this)), o;
                    },
                };
            })
            .filter((e) => null != e),
        M = 0;
    for (let e of [G, ...R]) for (let t of ((e.position = ++M), e.channelList)) t.position = ++M;
    let y = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        x = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: O.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[T.Xt] = 0), (e[T.PU] = 0), (e[T.HP] = 0), (e[T.yO] = 0), (e[T.bK] = G.channelList.length);
            for (let t = 0; t < R.length; t++) e[T.TF + t] = Math.max(1, R[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < T.TF) && 0 === t && 0 === R[e - T.TF].channelList.length,
        getCategoryFromSection: (e) => (e === T.bK ? G : R[e - T.TF]),
        getNamedCategoryFromSection: (e) => R[e - T.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => y,
        getChannelNoticeSection: () => x,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [G, ...R];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + T.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [G, ...R])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [G, ...R]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
