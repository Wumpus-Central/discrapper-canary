n.d(t, { D: () => D, g: () => G }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(873298),
    o = n(933958),
    a = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(617710),
    h = n(698441),
    A = n(695633),
    E = n(152007),
    g = n(353202),
    C = n(95701),
    _ = n(924985),
    I = n(734057),
    T = n(945886),
    p = n(760751),
    S = n(576705),
    N = n(568548),
    L = n(309010),
    O = n(543465),
    m = n(403362),
    f = n(297469),
    R = n(349828),
    b = n(818348);
let v = 21552 == n.j ? [o.Ay, a.A, u.A, h.Ay, A.A, E.A, _.A, I.A, p.A, S.A, N.Ay, L.A, O.Ay] : null;
function U(e) {
    let { limit: t, includeLoading: n } = e,
        i = a.A.getFavoriteChannels(),
        l = [];
    for (let e in i) {
        if (l.length >= t) break;
        let s = i[e];
        if (
            s.type !== r.Ip.REFERENCE_ORIGINAL ||
            null == s.channelType ||
            !C.Le.has(s.channelType) ||
            null != I.A.getChannel(e)
        )
            continue;
        let o = g.A.getLoadState(e);
        "NOT_FOUND" !== o && (n || "LOADING" !== o) && l.push(e);
    }
    return l;
}
function D() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => G()),
        l = u.A.isConnected(),
        r = i.useMemo(() => G({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(G()), 100);
        return v.forEach((t) => t.addChangeListener(e)), () => v.forEach((t) => t.removeChangeListener(e));
    }, []),
        i.useEffect(() => {
            if (e && l) {
                let e;
                0 === (e = U({ limit: R.lj, includeLoading: !1 })).length ? Promise.resolve() : g.A.loadThreadsBulk(e);
            }
        }, [e, l]);
    let o = e ? t : r,
        a = e && U({ limit: 1, includeLoading: !0 }).length > 0,
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
            })(o) && !a;
    return { guildChannels: o, shouldShowEmptyState: c };
}
function G(e) {
    let t = e ?? a.A.getFavoriteChannels(),
        n = O.Ay.isGuildCollapsed(R.Vc),
        i = L.A.getChannelId(),
        l = I.A.getChannel(i),
        o = L.A.getVoiceChannelId(),
        u = [],
        h = {};
    for (let e in t) {
        let n = t[e],
            i = I.A.getChannel(n.id);
        if (null == i || n.type === r.Ip.CATEGORY) continue;
        let l = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== r.Ip.CATEGORY) {
            u.push(l);
            continue;
        }
        let s = n.parentId;
        s in h || (h[s] = []), h[s].push(l);
    }
    function E(e, i) {
        let { isCollapsed: r, isMuted: a } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !S.A.can(b.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || o === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !r
                            ? A.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : A.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    h = (0, f.wF)(e, u, l, o, n),
                    E = T.A.isCollapsed(e.id),
                    g = O.Ay.isChannelMuted(e.guild_id, e.id),
                    _ = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: h,
                        threadCount: s().size(h),
                        isCollapsed: E,
                        isMuted: g,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, f.go)(e, E, !1),
                    };
                return d || c || !s().isEmpty(u) || N.Ay.getMentionCount(e.id) > 0
                    ? _
                    : (n && g) ||
                        (r && (g || a || (0, C.gV)(e.type) || ((0, C.ig)(e.type) && !1 === N.Ay.hasUnread(e.id))))
                      ? null
                      : _;
            })
            .filter(m.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let g = null,
        p = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == g && (g = E(u, this)), g;
            },
        },
        v = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = a.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = h[n] ?? [],
                    s = O.Ay.isChannelMuted(R.Vc, n),
                    r = _.A.isCollapsed(n),
                    o = null;
                return {
                    isMuted: s,
                    isCollapsed: r,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == o && (o = E(l, this)), o;
                    },
                };
            })
            .filter((e) => null != e),
        U = 0;
    for (let e of [p, ...v]) for (let t of ((e.position = ++U), e.channelList)) t.position = ++U;
    let D = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: R.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[f.Xt] = 0), (e[f.PU] = 0), (e[f.HP] = 0), (e[f.yO] = 0), (e[f.bK] = p.channelList.length);
            for (let t = 0; t < v.length; t++) e[f.TF + t] = Math.max(1, v[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < f.TF) && 0 === t && 0 === v[e - f.TF].channelList.length,
        getCategoryFromSection: (e) => (e === f.bK ? p : v[e - f.TF]),
        getNamedCategoryFromSection: (e) => v[e - f.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => D,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [p, ...v];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + f.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [p, ...v])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [p, ...v]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
