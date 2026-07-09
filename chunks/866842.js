n.d(t, { D: () => D, g: () => G }), n(321073);
var i = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(873298),
    a = n(933958),
    o = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(617710),
    A = n(698441),
    E = n(695633),
    h = n(152007),
    C = n(353202),
    g = n(95701),
    _ = n(924985),
    I = n(734057),
    T = n(945886),
    N = n(760751),
    p = n(576705),
    S = n(568548),
    L = n(309010),
    m = n(543465),
    O = n(403362),
    f = n(297469),
    b = n(349828),
    R = n(818348);
let v = 21552 == n.j ? [a.Ay, o.A, u.A, A.Ay, E.A, h.A, _.A, I.A, N.A, p.A, S.Ay, L.A, m.Ay] : null;
function U(e) {
    let { limit: t, includeLoading: n } = e,
        i = o.A.getFavoriteChannels(),
        l = [];
    for (let e in i) {
        if (l.length >= t) break;
        let r = i[e];
        if (
            r.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == r.channelType ||
            !g.Le.has(r.channelType) ||
            null != I.A.getChannel(e)
        )
            continue;
        let a = C.A.getLoadState(e);
        "NOT_FOUND" !== a && (n || "LOADING" !== a) && l.push(e);
    }
    return l;
}
function D() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => G()),
        l = u.A.isConnected(),
        s = i.useMemo(() => G({}), []);
    i.useEffect(() => {
        let e = r().throttle(() => n(G()), 100);
        return v.forEach((t) => t.addChangeListener(e)), () => v.forEach((t) => t.removeChangeListener(e));
    }, []),
        i.useEffect(() => {
            if (e && l) {
                let e;
                0 === (e = U({ limit: b.lj, includeLoading: !1 })).length ? Promise.resolve() : C.A.loadThreadsBulk(e);
            }
        }, [e, l]);
    let a = e ? t : s,
        o = e && U({ limit: 1, includeLoading: !0 }).length > 0,
        c =
            (function (e) {
                if (e.getSections().length > f.TF) return !1;
                let t = !1;
                return (
                    e.forEachShownChannel(() => {
                        t = !0;
                    }),
                    !t
                );
            })(a) && !o;
    return { guildChannels: a, shouldShowEmptyState: c };
}
function G(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = m.Ay.isGuildCollapsed(b.Vc),
        i = L.A.getChannelId(),
        l = I.A.getChannel(i),
        a = L.A.getVoiceChannelId(),
        u = [],
        A = {};
    for (let e in t) {
        let n = t[e],
            i = I.A.getChannel(n.id);
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
        let { isCollapsed: s, isMuted: o } = i;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(R.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || a === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !s
                            ? E.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : E.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    A = (0, f.wF)(e, u, l, a, n),
                    C = T.A.isCollapsed(e.id),
                    _ = e.isThread() ? h.A.isMuted(e.id) : m.Ay.isChannelMuted(e.guild_id, e.id),
                    I = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: A,
                        threadCount: r().size(A),
                        isCollapsed: C,
                        isMuted: _,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, f.go)(e, C, !1),
                    };
                return d || c || !r().isEmpty(u) || S.Ay.getMentionCount(e.id) > 0
                    ? I
                    : (n && _) ||
                        (s && (_ || o || (0, g.gV)(e.type) || ((0, g.ig)(e.type) && !1 === S.Ay.hasUnread(e.id))))
                      ? null
                      : I;
            })
            .filter(O.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let N = null,
        v = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == N && (N = C(u, this)), N;
            },
        },
        U = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = o.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = A[n] ?? [],
                    r = m.Ay.isChannelMuted(b.Vc, n),
                    s = _.A.isCollapsed(n),
                    a = null;
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
                        return null == a && (a = C(l, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        D = 0;
    for (let e of [v, ...U]) for (let t of ((e.position = ++D), e.channelList)) t.position = ++D;
    let G = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        M = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: b.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[f.Xt] = 0), (e[f.PU] = 0), (e[f.HP] = 0), (e[f.yO] = 0), (e[f.bK] = v.channelList.length);
            for (let t = 0; t < U.length; t++) e[f.TF + t] = Math.max(1, U[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < f.TF) && 0 === t && 0 === U[e - f.TF].channelList.length,
        getCategoryFromSection: (e) => (e === f.bK ? v : U[e - f.TF]),
        getNamedCategoryFromSection: (e) => U[e - f.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => G,
        getChannelNoticeSection: () => M,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [v, ...U];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + f.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [v, ...U])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [v, ...U]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
