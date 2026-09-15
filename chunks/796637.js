(n.d(t, { D: () => U, g: () => D }), n(321073));
var i = n(582128),
    l = n(435558),
    r = n.n(l),
    s = n(873298),
    a = n(933958),
    o = n(597643),
    d = n(698441),
    c = n(297469),
    u = n(863005),
    A = n(152007),
    h = n(353202),
    E = n(95701),
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(576705),
    T = n(573163),
    p = n(309010),
    S = n(543465),
    N = n(403362),
    m = n(181079),
    L = n(93055),
    f = n(774452),
    O = n(349828),
    b = n(281405),
    R = n(818348);
let v = 221552 == n.j ? [a.Ay, m.A, o.A, d.Ay, u.A, A.A, g.A, C.A, I.A, T.Ay, p.Ay, S.Ay] : null;
function y(e) {
    let { limit: t, includeLoading: n } = e,
        i = m.A.getFavoriteChannels(),
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
        let a = h.A.getLoadState(e);
        "NOT_FOUND" !== a && (n || "LOADING" !== a) && l.push(e);
    }
    return l;
}
function U() {
    let { withSuggestionsNotice: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { hasAccess: t } = (0, L.TW)("FavoritesGuildChannelList"),
        [n, l] = i.useState(() => D(void 0, { withSuggestionsNotice: e })),
        s = o.A.isConnected(),
        a = i.useMemo(() => D({}), []);
    (i.useEffect(() => {
        function t() {
            l(D(void 0, { withSuggestionsNotice: e }));
        }
        t();
        let n = r().throttle(t, 100);
        return (
            v.forEach((e) => e.addChangeListener(n)),
            () => {
                (n.cancel(), v.forEach((e) => e.removeChangeListener(n)));
            }
        );
    }, [e]),
        i.useEffect(() => {
            if (t && s) {
                let e;
                0 === (e = y({ limit: O.lj, includeLoading: !1 })).length ? Promise.resolve() : h.A.loadThreadsBulk(e);
            }
        }, [t, s]));
    let d = t ? n : a,
        u = t && y({ limit: 1, includeLoading: !0 }).length > 0,
        A = (function (e) {
            if (e.getSections().length > c.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(d);
    return { guildChannels: d, shouldShowEmptyState: A && !u, hasNoChannels: A };
}
function D(e) {
    let { withSuggestionsNotice: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? m.A.getFavoriteChannels(),
        i = S.Ay.isGuildCollapsed(O.Vc),
        l = p.Ay.getChannelId(),
        a = C.A.getChannel(l),
        o = p.Ay.getVoiceChannelId(),
        d = [],
        h = {};
    for (let e in n) {
        let t = n[e],
            i = C.A.getChannel(t.id);
        if (null == i || t.type === s.Ip.CATEGORY) continue;
        let l = (0, f.R)(n, t, i);
        if (null == t.parentId || null == n[t.parentId] || n[t.parentId].type !== s.Ip.CATEGORY) {
            d.push(l);
            continue;
        }
        let r = t.parentId;
        (r in h || (h[r] = []), h[r].push(l));
    }
    function v(e, t) {
        let { isCollapsed: l, isMuted: s } = t;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !I.A.can(R.xB.VIEW_CHANNEL, e)) return null;
                let d = null != a && (a.id === e.id || o === e.id),
                    h = null != a && a.isThread() && a.parent_id === e.id,
                    g =
                        (d || h || !l
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    C = (0, c.wF)(e, g, a, o, i),
                    p = _.A.isCollapsed(e.id),
                    N = e.isThread() ? A.A.isMuted(e.id) : S.Ay.isChannelMuted(e.guild_id, e.id),
                    m = {
                        id: e.id,
                        record: e,
                        category: t,
                        position: n[e.id].order,
                        threadIds: C,
                        threadCount: r().size(C),
                        isCollapsed: p,
                        isMuted: N,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, p, !1),
                    };
                return d || h || !r().isEmpty(g) || T.Ay.getMentionCount(e.id) > 0
                    ? m
                    : (i && N) ||
                        (l && (N || s || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : m;
            })
            .filter(N.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let y = null,
        U = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return (null == y && (y = v(d, this)), y);
            },
        },
        D = (0, L.m_)(n)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: t } = e,
                    i = m.A.getCategoryRecord(t);
                if (null == i) return null;
                let l = h[t] ?? [],
                    r = S.Ay.isChannelMuted(O.Vc, t),
                    s = g.A.isCollapsed(t),
                    a = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n[t]?.order ?? 0,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return (null == a && (a = v(l, this)), a);
                    },
                };
            })
            .filter((e) => null != e),
        G = 0;
    for (let e of [U, ...D]) for (let t of ((e.position = ++G), e.channelList)) t.position = ++G;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        x = [];
    t && x.push(b.r.FAVORITES_SUGGESTIONS);
    let P = { isEmpty: () => 0 === x.length, getRows: () => x, getRow: (e) => x[e] ?? null };
    return {
        id: O.Vc,
        hideMutedChannels: i,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            ((e[c.Xt] = x.length), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = U.channelList.length));
            for (let t = 0; t < D.length; t++) e[c.TF + t] = Math.max(1, D[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === D[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? U : D[e - c.TF]),
        getNamedCategoryFromSection: (e) => D[e - c.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => M,
        getChannelNoticeSection: () => P,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [U, ...D];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [U, ...D])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = C.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [U, ...D]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
