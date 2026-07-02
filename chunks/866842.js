"use strict";
n.d(t, { D: () => L, g: () => w }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(873298),
    o = n(933958),
    l = n(181079),
    u = n(313281),
    c = n(424345),
    d = n(617710),
    _ = n(698441),
    h = n(695633),
    f = n(152007),
    p = n(353202),
    E = n(95701),
    m = n(924985),
    g = n(734057),
    A = n(945886),
    I = n(760751),
    T = n(576705),
    S = n(568548),
    y = n(309010),
    C = n(543465),
    N = n(403362),
    v = n(297469),
    R = n(349828),
    O = n(818348);
let b = [o.Ay, l.A, d.A, _.Ay, h.A, f.A, m.A, g.A, I.A, T.A, S.Ay, y.A, C.Ay];
function D(e) {
    let { limit: t, includeLoading: n } = e,
        i = l.A.getFavoriteChannels(),
        r = [];
    for (let e in i) {
        if (r.length >= t) break;
        let s = i[e];
        if (
            s.type !== a.Ip.REFERENCE_ORIGINAL ||
            null == s.channelType ||
            !E.Le.has(s.channelType) ||
            null != g.A.getChannel(e)
        )
            continue;
        let o = p.A.getLoadState(e);
        "NOT_FOUND" !== o && (n || "LOADING" !== o) && r.push(e);
    }
    return r;
}
function L() {
    let { hasAccess: e } = (0, u.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => w()),
        r = d.A.isConnected(),
        a = i.useMemo(() => w({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(w()), 100);
        return b.forEach((t) => t.addChangeListener(e)), () => b.forEach((t) => t.removeChangeListener(e));
    }, []),
        i.useEffect(() => {
            if (e && r) {
                let e;
                0 === (e = D({ limit: R.lj, includeLoading: !1 })).length ? Promise.resolve() : p.A.loadThreadsBulk(e);
            }
        }, [e, r]);
    let o = e ? t : a,
        l = e && D({ limit: 1, includeLoading: !0 }).length > 0,
        c =
            (function (e) {
                if (e.getSections().length > v.TF) return !1;
                let t = !1;
                return (
                    e.forEachShownChannel(() => {
                        t = !0;
                    }),
                    !t
                );
            })(o) && !l;
    return { guildChannels: o, shouldShowEmptyState: c };
}
function w(e) {
    let t = e ?? l.A.getFavoriteChannels(),
        n = C.Ay.isGuildCollapsed(R.Vc),
        i = y.A.getChannelId(),
        r = g.A.getChannel(i),
        o = y.A.getVoiceChannelId(),
        d = [],
        _ = {};
    for (let e in t) {
        let n = t[e],
            i = g.A.getChannel(n.id);
        if (null == i || n.type === a.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== a.Ip.CATEGORY) {
            d.push(r);
            continue;
        }
        let s = n.parentId;
        s in _ || (_[s] = []), _[s].push(r);
    }
    function f(e, i) {
        let { isCollapsed: a, isMuted: l } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !T.A.can(O.xB.VIEW_CHANNEL, e)) return null;
                let u = null != r && (r.id === e.id || o === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    d =
                        (u || c || !a
                            ? h.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : h.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    _ = (0, v.wF)(e, d, r, o, n),
                    f = A.A.isCollapsed(e.id),
                    p = C.Ay.isChannelMuted(e.guild_id, e.id),
                    m = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: _,
                        threadCount: s().size(_),
                        isCollapsed: f,
                        isMuted: p,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, v.go)(e, f, !1),
                    };
                return u || c || !s().isEmpty(d) || S.Ay.getMentionCount(e.id) > 0
                    ? m
                    : (n && p) ||
                        (a && (p || l || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === S.Ay.hasUnread(e.id))))
                      ? null
                      : m;
            })
            .filter(N.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let p = null,
        I = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == p && (p = f(d, this)), p;
            },
        },
        b = (0, u.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = l.A.getCategoryRecord(n);
                if (null == i) return null;
                let r = _[n] ?? [],
                    s = C.Ay.isChannelMuted(R.Vc, n),
                    a = m.A.isCollapsed(n),
                    o = null;
                return {
                    isMuted: s,
                    isCollapsed: a,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == o && (o = f(r, this)), o;
                    },
                };
            })
            .filter((e) => null != e),
        D = 0;
    for (let e of [I, ...b]) for (let t of ((e.position = ++D), e.channelList)) t.position = ++D;
    let L = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        w = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: R.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[v.Xt] = 0), (e[v.PU] = 0), (e[v.HP] = 0), (e[v.yO] = 0), (e[v.bK] = I.channelList.length);
            for (let t = 0; t < b.length; t++) e[v.TF + t] = Math.max(1, b[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < v.TF) && 0 === t && 0 === b[e - v.TF].channelList.length,
        getCategoryFromSection: (e) => (e === v.bK ? I : b[e - v.TF]),
        getNamedCategoryFromSection: (e) => b[e - v.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => L,
        getChannelNoticeSection: () => w,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [I, ...b];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + v.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [I, ...b])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [I, ...b]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
