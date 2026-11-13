n(321073);
var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(225123),
    d = n(698441),
    c = n(791513),
    u = n(863005),
    _ = n(152007),
    E = n(353202),
    A = n(95701),
    f = n(924985),
    h = n(734057),
    I = n(945886),
    p = n(71393),
    m = n(576705),
    g = n(218461),
    T = n(309010),
    S = n(543465),
    N = n(403362),
    C = n(181079),
    O = n(266599),
    R = n(93055),
    L = n(774452);
n(349828);
var y = n(281405),
    D = n(818348);
let b = [l.Ay, C.A, o.A, p.A, d.Ay, u.A, _.A, f.A, h.A, m.A, g.Ay, T.Ay, S.Ay];
function v(e) {
    let { limit: t, includeLoading: n } = e,
        i = C.A.getFavoriteChannels(),
        r = [];
    for (let e in i) {
        if (r.length >= t) break;
        let a = i[e];
        if (
            a.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == a.channelType ||
            !A.Le.has(a.channelType) ||
            null != h.A.getChannel(e)
        )
            continue;
        let l = E.A.getLoadState(e);
        "NOT_FOUND" !== l && (n || "LOADING" !== l) && r.push(e);
    }
    return r;
}
function P(e) {
    let { withSuggestionsNotice: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? C.A.getFavoriteChannels(),
        i = new Set((0, O.PG)(n)),
        r = S.Ay.isGuildCollapsed("373"),
        l = T.Ay.getChannelId(),
        o = h.A.getChannel(l),
        d = T.Ay.getVoiceChannelId(),
        E = [],
        p = {};
    for (let e in n) {
        let t = n[e],
            i = h.A.getChannel(t.id);
        if (null == i || t.type === s.Ip.CATEGORY) continue;
        let r = (0, L.R)(n, t, i);
        if (null == t.parentId || null == n[t.parentId] || n[t.parentId].type !== s.Ip.CATEGORY) {
            E.push(r);
            continue;
        }
        let a = t.parentId;
        (a in p || (p[a] = []), p[a].push(r));
    }
    function b(e, t) {
        let { isCollapsed: i, isMuted: s } = t;
        return a()(e)
            .map((e) => {
                if (!e.isPrivate() && !m.A.can(D.xB.VIEW_CHANNEL, e)) return null;
                let l = null != o && (o.id === e.id || d === e.id),
                    E = null != o && o.isThread() && o.parent_id === e.id,
                    f =
                        (l || E || !i
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    h = (0, c.wF)(e, f, o, d, r),
                    p = I.A.isCollapsed(e.id),
                    T = e.isThread() ? _.A.isMuted(e.id) : S.Ay.isChannelMuted(e.guild_id, e.id),
                    N = {
                        id: e.id,
                        record: e,
                        category: t,
                        position: n[e.id].order,
                        threadIds: h,
                        threadCount: a().size(h),
                        isCollapsed: p,
                        isMuted: T,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, p, !1),
                    };
                return l || E || !a().isEmpty(f) || g.Ay.getMentionCount(e.id) > 0
                    ? N
                    : (r && T) ||
                        (i && (T || s || (0, A.gV)(e.type) || ((0, A.ig)(e.type) && !1 === g.Ay.hasUnread(e.id))))
                      ? null
                      : N;
            })
            .filter(N.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let v = null,
        P = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => E,
            getShownChannelIds: () => E.map((e) => e.id),
            getShownChannelAndThreadIds: () => E.map((e) => e.id),
            isEmpty: () => 0 === E.length,
            get channelList() {
                return (null == v && (v = b(E, this)), v);
            },
        },
        M = (0, R.m_)(n)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: t } = e,
                    i = C.A.getCategoryRecord(t);
                if (null == i) return null;
                let r = p[t] ?? [],
                    a = S.Ay.isChannelMuted("373", t),
                    s = f.A.isCollapsed(t),
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
                        return (null == l && (l = b(r, this)), l);
                    },
                };
            })
            .filter((e) => null != e),
        U = 0;
    for (let e of [P, ...M]) for (let t of ((e.position = ++U), e.channelList)) t.position = ++U;
    let w = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = [];
    t && G.push(y.r.FAVORITES_SUGGESTIONS);
    let x = { isEmpty: () => 0 === G.length, getRows: () => G, getRow: (e) => G[e] ?? null };
    return {
        id: "373",
        hideMutedChannels: r,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            ((e[0] = G.length), (e[1] = 0), (e[2] = 0), (e[3] = 0), (e[4] = P.channelList.length));
            for (let t = 0; t < M.length; t++) e[5 + t] = Math.max(1, M[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < 5) && 0 === t && 0 === M[e - 5].channelList.length,
        getCategoryFromSection: (e) => (4 === e ? P : M[e - 5]),
        getNamedCategoryFromSection: (e) => M[e - 5],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => w,
        getChannelNoticeSection: () => x,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            if (null == e) return [];
            let t = [],
                n = [],
                r = [],
                a = [P, ...M];
            for (let s = 0; s < a.length; s++) {
                let l = a[s],
                    o = s > 0 ? M[s - 1] : null,
                    d = null != o && i.has(o.id),
                    c = s + 4;
                for (let i = 0; i < l.channelList.length; i++) {
                    let a = l.channelList[i];
                    if (a.id === e) {
                        (d ? r : t).push({ section: c, row: i });
                        continue;
                    }
                    let s = a.threadIds.indexOf(e);
                    s >= 0 && n.push({ section: c, row: i, threadOffset: s });
                }
            }
            return [...t, ...n, ...r];
        },
        forEachShownChannel(e) {
            for (let t of [P, ...M])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [P, ...M]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
n.d(
    t,
    {},
    {
        D: function () {
            let { withSuggestionsNotice: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [t, n] = i.useState(() => P(void 0, { withSuggestionsNotice: e })),
                r = o.A.isConnected();
            (i.useEffect(() => {
                function t() {
                    n(P(void 0, { withSuggestionsNotice: e }));
                }
                t();
                let i = a().throttle(t, 100);
                return (
                    b.forEach((e) => e.addChangeListener(i)),
                    () => {
                        (i.cancel(), b.forEach((e) => e.removeChangeListener(i)));
                    }
                );
            }, [e]),
                i.useEffect(() => {
                    if (r) {
                        let e;
                        0 === (e = v({ limit: 200, includeLoading: !1 })).length
                            ? Promise.resolve()
                            : E.A.loadThreadsBulk(e);
                    }
                }, [r]));
            let s = v({ limit: 1, includeLoading: !0 }).length > 0,
                l = (function (e) {
                    if (e.getSections().length > 5) return !1;
                    let t = !1;
                    return (
                        e.forEachShownChannel(() => {
                            t = !0;
                        }),
                        !t
                    );
                })(t);
            return { guildChannels: t, shouldShowEmptyState: l && !s, hasNoChannels: l };
        },
        g: P,
    },
);
