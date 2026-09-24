(n.d(t, { D: () => D, g: () => y }), n(321073));
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
    C = n(924985),
    g = n(734057),
    _ = n(945886),
    T = n(576705),
    I = n(573163),
    p = n(309010),
    N = n(543465),
    S = n(403362),
    f = n(181079),
    m = n(93055),
    O = n(774452),
    L = n(349828),
    b = n(281405),
    v = n(818348);
let R = 221552 == n.j ? [a.Ay, f.A, o.A, d.Ay, u.A, A.A, C.A, g.A, T.A, I.Ay, p.Ay, N.Ay] : null;
function U(e) {
    let { limit: t, includeLoading: n } = e,
        i = f.A.getFavoriteChannels(),
        l = [];
    for (let e in i) {
        if (l.length >= t) break;
        let r = i[e];
        if (
            r.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == r.channelType ||
            !E.Le.has(r.channelType) ||
            null != g.A.getChannel(e)
        )
            continue;
        let a = h.A.getLoadState(e);
        "NOT_FOUND" !== a && (n || "LOADING" !== a) && l.push(e);
    }
    return l;
}
function D() {
    let { withSuggestionsNotice: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { hasAccess: t } = (0, m.TW)("FavoritesGuildChannelList"),
        [n, l] = i.useState(() => y(void 0, { withSuggestionsNotice: e })),
        s = o.A.isConnected(),
        a = i.useMemo(() => y({}), []);
    (i.useEffect(() => {
        function t() {
            l(y(void 0, { withSuggestionsNotice: e }));
        }
        t();
        let n = r().throttle(t, 100);
        return (
            R.forEach((e) => e.addChangeListener(n)),
            () => {
                (n.cancel(), R.forEach((e) => e.removeChangeListener(n)));
            }
        );
    }, [e]),
        i.useEffect(() => {
            if (t && s) {
                let e;
                0 === (e = U({ limit: L.lj, includeLoading: !1 })).length ? Promise.resolve() : h.A.loadThreadsBulk(e);
            }
        }, [t, s]));
    let d = t ? n : a,
        u = t && U({ limit: 1, includeLoading: !0 }).length > 0,
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
function y(e) {
    let { withSuggestionsNotice: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? f.A.getFavoriteChannels(),
        i = N.Ay.isGuildCollapsed(L.Vc),
        l = p.Ay.getChannelId(),
        a = g.A.getChannel(l),
        o = p.Ay.getVoiceChannelId(),
        d = [],
        h = {};
    for (let e in n) {
        let t = n[e],
            i = g.A.getChannel(t.id);
        if (null == i || t.type === s.Ip.CATEGORY) continue;
        let l = (0, O.R)(n, t, i);
        if (null == t.parentId || null == n[t.parentId] || n[t.parentId].type !== s.Ip.CATEGORY) {
            d.push(l);
            continue;
        }
        let r = t.parentId;
        (r in h || (h[r] = []), h[r].push(l));
    }
    function R(e, t) {
        let { isCollapsed: l, isMuted: s } = t;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !T.A.can(v.xB.VIEW_CHANNEL, e)) return null;
                let d = null != a && (a.id === e.id || o === e.id),
                    h = null != a && a.isThread() && a.parent_id === e.id,
                    C =
                        (d || h || !l
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    g = (0, c.wF)(e, C, a, o, i),
                    p = _.A.isCollapsed(e.id),
                    S = e.isThread() ? A.A.isMuted(e.id) : N.Ay.isChannelMuted(e.guild_id, e.id),
                    f = {
                        id: e.id,
                        record: e,
                        category: t,
                        position: n[e.id].order,
                        threadIds: g,
                        threadCount: r().size(g),
                        isCollapsed: p,
                        isMuted: S,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, p, !1),
                    };
                return d || h || !r().isEmpty(C) || I.Ay.getMentionCount(e.id) > 0
                    ? f
                    : (i && S) ||
                        (l && (S || s || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === I.Ay.hasUnread(e.id))))
                      ? null
                      : f;
            })
            .filter(S.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let U = null,
        D = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return (null == U && (U = R(d, this)), U);
            },
        },
        y = (0, m.m_)(n)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: t } = e,
                    i = f.A.getCategoryRecord(t);
                if (null == i) return null;
                let l = h[t] ?? [],
                    r = N.Ay.isChannelMuted(L.Vc, t),
                    s = C.A.isCollapsed(t),
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
                        return (null == a && (a = R(l, this)), a);
                    },
                };
            })
            .filter((e) => null != e),
        G = 0;
    for (let e of [D, ...y]) for (let t of ((e.position = ++G), e.channelList)) t.position = ++G;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        P = [];
    t && P.push(b.r.FAVORITES_SUGGESTIONS);
    let x = { isEmpty: () => 0 === P.length, getRows: () => P, getRow: (e) => P[e] ?? null };
    return {
        id: L.Vc,
        hideMutedChannels: i,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            ((e[c.Xt] = P.length), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = D.channelList.length));
            for (let t = 0; t < y.length; t++) e[c.TF + t] = Math.max(1, y[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === y[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? D : y[e - c.TF]),
        getNamedCategoryFromSection: (e) => y[e - c.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => M,
        getChannelNoticeSection: () => x,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [D, ...y];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [D, ...y])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [D, ...y]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
