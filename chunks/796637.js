"use strict";
n.d(t, { D: () => b, g: () => M }), n(321073);
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(617710),
    d = n(698441),
    c = n(297469),
    u = n(863005),
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
    C = n(313281),
    O = n(774452),
    R = n(349828),
    L = n(281405),
    D = n(818348);
let y = [l.Ay, N.A, o.A, d.Ay, u.A, _.A, h.A, I.A, p.A, T.Ay, m.Ay, g.Ay];
function v(e) {
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
function b() {
    let { withUpsellNotice: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { hasAccess: t, canUpsellFavoriteLimit: n } = (0, C.TW)("FavoritesGuildChannelList"),
        r = e && n,
        [s, l] = i.useState(() => M(void 0, { withUpsellNotice: r })),
        d = o.A.isConnected(),
        u = i.useMemo(() => M({}), []);
    i.useEffect(() => {
        function e() {
            l(M(void 0, { withUpsellNotice: r }));
        }
        e();
        let t = a().throttle(e, 100);
        return y.forEach((e) => e.addChangeListener(t)), () => y.forEach((e) => e.removeChangeListener(t));
    }, [r]),
        i.useEffect(() => {
            if (t && d) {
                let e;
                0 === (e = v({ limit: R.lj, includeLoading: !1 })).length ? Promise.resolve() : E.A.loadThreadsBulk(e);
            }
        }, [t, d]);
    let _ = t ? s : u,
        A = t && v({ limit: 1, includeLoading: !0 }).length > 0,
        h = (function (e) {
            if (e.getSections().length > c.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(_);
    return { guildChannels: _, shouldShowEmptyState: h && !A, hasNoChannels: h };
}
function M(e) {
    let { withUpsellNotice: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? N.A.getFavoriteChannels(),
        i = g.Ay.isGuildCollapsed(R.Vc),
        r = m.Ay.getChannelId(),
        l = I.A.getChannel(r),
        o = m.Ay.getVoiceChannelId(),
        d = [],
        E = {};
    for (let e in n) {
        let t = n[e],
            i = I.A.getChannel(t.id);
        if (null == i || t.type === s.Ip.CATEGORY) continue;
        let r = (0, O.R)(n, t, i);
        if (null == t.parentId || null == n[t.parentId] || n[t.parentId].type !== s.Ip.CATEGORY) {
            d.push(r);
            continue;
        }
        let a = t.parentId;
        a in E || (E[a] = []), E[a].push(r);
    }
    function y(e, t) {
        let { isCollapsed: r, isMuted: s } = t;
        return a()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(D.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || o === e.id),
                    E = null != l && l.isThread() && l.parent_id === e.id,
                    h =
                        (d || E || !r
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    I = (0, c.wF)(e, h, l, o, i),
                    m = f.A.isCollapsed(e.id),
                    S = e.isThread() ? _.A.isMuted(e.id) : g.Ay.isChannelMuted(e.guild_id, e.id),
                    N = {
                        id: e.id,
                        record: e,
                        category: t,
                        position: n[e.id].order,
                        threadIds: I,
                        threadCount: a().size(I),
                        isCollapsed: m,
                        isMuted: S,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, m, !1),
                    };
                return d || E || !a().isEmpty(h) || T.Ay.getMentionCount(e.id) > 0
                    ? N
                    : (i && S) ||
                        (r && (S || s || (0, A.gV)(e.type) || ((0, A.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : N;
            })
            .filter(S.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let v = null,
        b = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == v && (v = y(d, this)), v;
            },
        },
        M = (0, C.m_)(n)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: t } = e,
                    i = N.A.getCategoryRecord(t);
                if (null == i) return null;
                let r = E[t] ?? [],
                    a = g.Ay.isChannelMuted(R.Vc, t),
                    s = h.A.isCollapsed(t),
                    l = null;
                return {
                    isMuted: a,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n[t]?.order ?? 0,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == l && (l = y(r, this)), l;
                    },
                };
            })
            .filter((e) => null != e),
        P = 0;
    for (let e of [b, ...M]) for (let t of ((e.position = ++P), e.channelList)) t.position = ++P;
    let U = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        w = t ? [L.r.FAVORITES_UPSELL] : [],
        G = { isEmpty: () => 0 === w.length, getRows: () => w, getRow: (e) => w[e] ?? null };
    return {
        id: R.Vc,
        hideMutedChannels: i,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[c.Xt] = w.length), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = b.channelList.length);
            for (let t = 0; t < M.length; t++) e[c.TF + t] = Math.max(1, M[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === M[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? b : M[e - c.TF]),
        getNamedCategoryFromSection: (e) => M[e - c.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => U,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [b, ...M];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [b, ...M])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [b, ...M]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
