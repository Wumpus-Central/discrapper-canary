"use strict";
n.d(t, { D: () => v, g: () => b }), n(321073);
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(617710),
    d = n(698441),
    c = n(297469),
    u = n(695633),
    _ = n(152007),
    E = n(353202),
    A = n(95701),
    h = n(924985),
    I = n(734057),
    f = n(945886),
    p = n(576705),
    T = n(568548),
    m = n(309010),
    g = n(543465),
    S = n(403362),
    N = n(181079),
    C = n(298358),
    O = n(774452),
    R = n(349828),
    L = n(818348);
let D = [l.Ay, N.A, o.A, d.Ay, u.A, _.A, h.A, I.A, p.A, T.Ay, m.Ay, g.Ay];
function y(e) {
    let { limit: t, includeLoading: n } = e,
        i = N.A.getFavoriteChannels(),
        r = [];
    for (let e in i) {
        if (r.length >= t) break;
        let a = i[e];
        if (
            a.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == a.channelType ||
            !A.Le.has(a.channelType) ||
            null != I.A.getChannel(e)
        )
            continue;
        let l = E.A.getLoadState(e);
        "NOT_FOUND" !== l && (n || "LOADING" !== l) && r.push(e);
    }
    return r;
}
function v() {
    let { hasAccess: e } = (0, C.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => b()),
        r = o.A.isConnected(),
        s = i.useMemo(() => b({}), []);
    i.useEffect(() => {
        let e = a().throttle(() => n(b()), 100);
        return D.forEach((t) => t.addChangeListener(e)), () => D.forEach((t) => t.removeChangeListener(e));
    }, []),
        i.useEffect(() => {
            if (e && r) {
                let e;
                0 === (e = y({ limit: R.lj, includeLoading: !1 })).length ? Promise.resolve() : E.A.loadThreadsBulk(e);
            }
        }, [e, r]);
    let l = e ? t : s,
        d = e && y({ limit: 1, includeLoading: !0 }).length > 0,
        u = (function (e) {
            if (e.getSections().length > c.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(l);
    return { guildChannels: l, shouldShowEmptyState: u && !d, hasNoChannels: u };
}
function b(e) {
    let t = e ?? N.A.getFavoriteChannels(),
        n = g.Ay.isGuildCollapsed(R.Vc),
        i = m.Ay.getChannelId(),
        r = I.A.getChannel(i),
        l = m.Ay.getVoiceChannelId(),
        o = [],
        d = {};
    for (let e in t) {
        let n = t[e],
            i = I.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, O.R)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            o.push(r);
            continue;
        }
        let a = n.parentId;
        a in d || (d[a] = []), d[a].push(r);
    }
    function E(e, i) {
        let { isCollapsed: s, isMuted: o } = i;
        return a()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(L.xB.VIEW_CHANNEL, e)) return null;
                let d = null != r && (r.id === e.id || l === e.id),
                    E = null != r && r.isThread() && r.parent_id === e.id,
                    h =
                        (d || E || !s
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    I = (0, c.wF)(e, h, r, l, n),
                    m = f.A.isCollapsed(e.id),
                    S = e.isThread() ? _.A.isMuted(e.id) : g.Ay.isChannelMuted(e.guild_id, e.id),
                    N = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: I,
                        threadCount: a().size(I),
                        isCollapsed: m,
                        isMuted: S,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, m, !1),
                    };
                return d || E || !a().isEmpty(h) || T.Ay.getMentionCount(e.id) > 0
                    ? N
                    : (n && S) ||
                        (s && (S || o || (0, A.gV)(e.type) || ((0, A.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : N;
            })
            .filter(S.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let D = null,
        y = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => o,
            getShownChannelIds: () => o.map((e) => e.id),
            getShownChannelAndThreadIds: () => o.map((e) => e.id),
            isEmpty: () => 0 === o.length,
            get channelList() {
                return null == D && (D = E(o, this)), D;
            },
        },
        v = (0, C.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = N.A.getCategoryRecord(n);
                if (null == i) return null;
                let r = d[n] ?? [],
                    a = g.Ay.isChannelMuted(R.Vc, n),
                    s = h.A.isCollapsed(n),
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
                        return null == l && (l = E(r, this)), l;
                    },
                };
            })
            .filter((e) => null != e),
        b = 0;
    for (let e of [y, ...v]) for (let t of ((e.position = ++b), e.channelList)) t.position = ++b;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        P = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: R.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[c.Xt] = 0), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = y.channelList.length);
            for (let t = 0; t < v.length; t++) e[c.TF + t] = Math.max(1, v[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === v[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? y : v[e - c.TF]),
        getNamedCategoryFromSection: (e) => v[e - c.TF],
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
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [y, ...v])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
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
