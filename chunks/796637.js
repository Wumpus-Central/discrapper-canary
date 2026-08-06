n.d(t, { D: () => U, g: () => D }), n(321073);
var i = n(582128),
    l = n(435558),
    r = n.n(l),
    s = n(873298),
    a = n(933958),
    o = n(617710),
    d = n(698441),
    c = n(297469),
    u = n(863005),
    h = n(152007),
    A = n(353202),
    E = n(95701),
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(576705),
    T = n(568548),
    p = n(309010),
    N = n(543465),
    S = n(403362),
    L = n(181079),
    m = n(298358),
    f = n(774452),
    O = n(349828),
    b = n(818348);
let R = 21552 == n.j ? [a.Ay, L.A, o.A, d.Ay, u.A, h.A, g.A, C.A, I.A, T.Ay, p.Ay, N.Ay] : null;
function v(e) {
    let { limit: t, includeLoading: n } = e,
        i = L.A.getFavoriteChannels(),
        l = [];
    for (let e in i) {
        if (l.length >= t) break;
        let r = i[e];
        if (
            r.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == r.channelType ||
            !E.Le.has(r.channelType) ||
            null != C.A.getChannel(e)
        )
            continue;
        let a = A.A.getLoadState(e);
        "NOT_FOUND" !== a && (n || "LOADING" !== a) && l.push(e);
    }
    return l;
}
function U() {
    let { hasAccess: e } = (0, m.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => D()),
        l = o.A.isConnected(),
        s = i.useMemo(() => D({}), []);
    i.useEffect(() => {
        let e = r().throttle(() => n(D()), 100);
        return R.forEach((t) => t.addChangeListener(e)), () => R.forEach((t) => t.removeChangeListener(e));
    }, []),
        i.useEffect(() => {
            if (e && l) {
                let e;
                0 === (e = v({ limit: O.lj, includeLoading: !1 })).length ? Promise.resolve() : A.A.loadThreadsBulk(e);
            }
        }, [e, l]);
    let a = e ? t : s,
        d = e && v({ limit: 1, includeLoading: !0 }).length > 0,
        u = (function (e) {
            if (e.getSections().length > c.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(a);
    return { guildChannels: a, shouldShowEmptyState: u && !d, hasNoChannels: u };
}
function D(e) {
    let t = e ?? L.A.getFavoriteChannels(),
        n = N.Ay.isGuildCollapsed(O.Vc),
        i = p.Ay.getChannelId(),
        l = C.A.getChannel(i),
        a = p.Ay.getVoiceChannelId(),
        o = [],
        d = {};
    for (let e in t) {
        let n = t[e],
            i = C.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let l = (0, f.R)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            o.push(l);
            continue;
        }
        let r = n.parentId;
        r in d || (d[r] = []), d[r].push(l);
    }
    function A(e, i) {
        let { isCollapsed: s, isMuted: o } = i;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !I.A.can(b.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || a === e.id),
                    A = null != l && l.isThread() && l.parent_id === e.id,
                    g =
                        (d || A || !s
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    C = (0, c.wF)(e, g, l, a, n),
                    p = _.A.isCollapsed(e.id),
                    S = e.isThread() ? h.A.isMuted(e.id) : N.Ay.isChannelMuted(e.guild_id, e.id),
                    L = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: C,
                        threadCount: r().size(C),
                        isCollapsed: p,
                        isMuted: S,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, p, !1),
                    };
                return d || A || !r().isEmpty(g) || T.Ay.getMentionCount(e.id) > 0
                    ? L
                    : (n && S) ||
                        (s && (S || o || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : L;
            })
            .filter(S.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let R = null,
        v = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => o,
            getShownChannelIds: () => o.map((e) => e.id),
            getShownChannelAndThreadIds: () => o.map((e) => e.id),
            isEmpty: () => 0 === o.length,
            get channelList() {
                return null == R && (R = A(o, this)), R;
            },
        },
        U = (0, m.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = L.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = d[n] ?? [],
                    r = N.Ay.isChannelMuted(O.Vc, n),
                    s = g.A.isCollapsed(n),
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
                        return null == a && (a = A(l, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        D = 0;
    for (let e of [v, ...U]) for (let t of ((e.position = ++D), e.channelList)) t.position = ++D;
    let y = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: O.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[c.Xt] = 0), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = v.channelList.length);
            for (let t = 0; t < U.length; t++) e[c.TF + t] = Math.max(1, U[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === U[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? v : U[e - c.TF]),
        getNamedCategoryFromSection: (e) => U[e - c.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => y,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [v, ...U];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [v, ...U])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = C.A.getChannel(t);
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
