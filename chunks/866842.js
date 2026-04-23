n.d(t, { D: () => G, g: () => R }), n(321073);
var i = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(873298),
    o = n(933958),
    a = n(181079),
    d = n(93055),
    c = n(424345),
    u = n(698441),
    _ = n(863005),
    A = n(152007),
    E = n(95701),
    I = n(924985),
    h = n(734057),
    g = n(945886),
    C = n(760751),
    p = n(576705),
    S = n(222823),
    T = n(309010),
    N = n(543465),
    b = n(403362),
    L = n(32603),
    f = n(349828),
    m = n(818348);
let O = 21552 == n.j ? [o.Ay, a.A, u.Ay, _.A, A.A, I.A, h.A, C.A, p.A, S.Ay, T.A, N.Ay] : null;
function G() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => R()),
        l = i.useMemo(() => R({}), []);
    i.useEffect(() => {
        let e = r().throttle(() => n(R()), 100);
        return O.forEach((t) => t.addChangeListener(e)), () => O.forEach((t) => t.removeChangeListener(e));
    }, []);
    let s = e ? t : l,
        o = (function (e) {
            if (e.getSections().length > L.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(s);
    return { guildChannels: s, shouldShowEmptyState: o };
}
function R(e) {
    let t = e ?? a.A.getFavoriteChannels(),
        n = N.Ay.isGuildCollapsed(f.Vc),
        i = T.A.getChannelId(),
        l = h.A.getChannel(i),
        o = T.A.getVoiceChannelId(),
        u = [],
        A = {};
    for (let e in t) {
        let n = t[e],
            i = h.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let l = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            u.push(l);
            continue;
        }
        let r = n.parentId;
        r in A || (A[r] = []), A[r].push(l);
    }
    function C(e, i) {
        let { isCollapsed: s, isMuted: a } = i;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(m.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || o === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !s
                            ? _.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : _.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    A = (0, L.wF)(e, u, l, o, n),
                    I = g.A.isCollapsed(e.id),
                    h = N.Ay.isChannelMuted(e.guild_id, e.id),
                    C = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: A,
                        threadCount: r().size(A),
                        isCollapsed: I,
                        isMuted: h,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, L.go)(e, I, !1),
                    };
                return d || c || !r().isEmpty(u) || S.Ay.getMentionCount(e.id) > 0
                    ? C
                    : (n && h) ||
                        (s && (h || a || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === S.Ay.hasUnread(e.id))))
                      ? null
                      : C;
            })
            .filter(b.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let O = null,
        G = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == O && (O = C(u, this)), O;
            },
        },
        R = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = a.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = A[n] ?? [],
                    r = N.Ay.isChannelMuted(f.Vc, n),
                    s = I.A.isCollapsed(n),
                    o = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
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
        U = 0;
    for (let e of [G, ...R]) for (let t of ((e.position = ++U), e.channelList)) t.position = ++U;
    let D = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        y = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: f.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[L.Xt] = 0), (e[L.PU] = 0), (e[L.HP] = 0), (e[L.yO] = 0), (e[L.bK] = G.channelList.length);
            for (let t = 0; t < R.length; t++) e[L.TF + t] = Math.max(1, R[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < L.TF) && 0 === t && 0 === R[e - L.TF].channelList.length,
        getCategoryFromSection: (e) => (e === L.bK ? G : R[e - L.TF]),
        getNamedCategoryFromSection: (e) => R[e - L.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => D,
        getChannelNoticeSection: () => y,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [G, ...R];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + L.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [G, ...R])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.A.getChannel(t);
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
