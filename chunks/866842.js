"use strict";
n.d(t, { D: () => b, g: () => M }), n(321073);
var i = n(64700),
    r = n(435558),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(617710),
    _ = n(698441),
    E = n(695633),
    A = n(152007),
    h = n(353202),
    I = n(95701),
    f = n(924985),
    p = n(734057),
    T = n(945886),
    m = n(760751),
    g = n(576705),
    S = n(568548),
    N = n(309010),
    C = n(543465),
    R = n(403362),
    O = n(297469),
    L = n(349828),
    D = n(818348);
let y = [l.Ay, o.A, u.A, _.Ay, E.A, A.A, f.A, p.A, m.A, g.A, S.Ay, N.A, C.Ay];
function v(e) {
    let { limit: t, includeLoading: n } = e,
        i = o.A.getFavoriteChannels(),
        r = [];
    for (let e in i) {
        if (r.length >= t) break;
        let a = i[e];
        if (
            a.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == a.channelType ||
            !I.Le.has(a.channelType) ||
            null != p.A.getChannel(e)
        )
            continue;
        let l = h.A.getLoadState(e);
        "NOT_FOUND" !== l && (n || "LOADING" !== l) && r.push(e);
    }
    return r;
}
function b() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => M()),
        r = u.A.isConnected(),
        s = i.useMemo(() => M({}), []);
    i.useEffect(() => {
        let e = a().throttle(() => n(M()), 100);
        return y.forEach((t) => t.addChangeListener(e)), () => y.forEach((t) => t.removeChangeListener(e));
    }, []),
        i.useEffect(() => {
            if (e && r) {
                let e;
                0 === (e = v({ limit: L.lj, includeLoading: !1 })).length ? Promise.resolve() : h.A.loadThreadsBulk(e);
            }
        }, [e, r]);
    let l = e ? t : s,
        o = e && v({ limit: 1, includeLoading: !0 }).length > 0,
        c =
            (function (e) {
                if (e.getSections().length > O.TF) return !1;
                let t = !1;
                return (
                    e.forEachShownChannel(() => {
                        t = !0;
                    }),
                    !t
                );
            })(l) && !o;
    return { guildChannels: l, shouldShowEmptyState: c };
}
function M(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = C.Ay.isGuildCollapsed(L.Vc),
        i = N.A.getChannelId(),
        r = p.A.getChannel(i),
        l = N.A.getVoiceChannelId(),
        u = [],
        _ = {};
    for (let e in t) {
        let n = t[e],
            i = p.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            u.push(r);
            continue;
        }
        let a = n.parentId;
        a in _ || (_[a] = []), _[a].push(r);
    }
    function h(e, i) {
        let { isCollapsed: s, isMuted: o } = i;
        return a()(e)
            .map((e) => {
                if (!e.isPrivate() && !g.A.can(D.xB.VIEW_CHANNEL, e)) return null;
                let d = null != r && (r.id === e.id || l === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    u =
                        (d || c || !s
                            ? E.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : E.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    _ = (0, O.wF)(e, u, r, l, n),
                    h = T.A.isCollapsed(e.id),
                    f = e.isThread() ? A.A.isMuted(e.id) : C.Ay.isChannelMuted(e.guild_id, e.id),
                    p = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: _,
                        threadCount: a().size(_),
                        isCollapsed: h,
                        isMuted: f,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, O.go)(e, h, !1),
                    };
                return d || c || !a().isEmpty(u) || S.Ay.getMentionCount(e.id) > 0
                    ? p
                    : (n && f) ||
                        (s && (f || o || (0, I.gV)(e.type) || ((0, I.ig)(e.type) && !1 === S.Ay.hasUnread(e.id))))
                      ? null
                      : p;
            })
            .filter(R.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let m = null,
        y = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == m && (m = h(u, this)), m;
            },
        },
        v = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = o.A.getCategoryRecord(n);
                if (null == i) return null;
                let r = _[n] ?? [],
                    a = C.Ay.isChannelMuted(L.Vc, n),
                    s = f.A.isCollapsed(n),
                    l = null;
                return {
                    isMuted: a,
                    isCollapsed: s,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == l && (l = h(r, this)), l;
                    },
                };
            })
            .filter((e) => null != e),
        b = 0;
    for (let e of [y, ...v]) for (let t of ((e.position = ++b), e.channelList)) t.position = ++b;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        P = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: L.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[O.Xt] = 0), (e[O.PU] = 0), (e[O.HP] = 0), (e[O.yO] = 0), (e[O.bK] = y.channelList.length);
            for (let t = 0; t < v.length; t++) e[O.TF + t] = Math.max(1, v[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < O.TF) && 0 === t && 0 === v[e - O.TF].channelList.length,
        getCategoryFromSection: (e) => (e === O.bK ? y : v[e - O.TF]),
        getNamedCategoryFromSection: (e) => v[e - O.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => M,
        getChannelNoticeSection: () => P,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [y, ...v];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + O.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [y, ...v])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = p.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [y, ...v]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
