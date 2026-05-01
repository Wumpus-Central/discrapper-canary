n.d(t, { D: () => L, g: () => R }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(873298),
    a = n(933958),
    o = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(698441),
    h = n(695633),
    g = n(152007),
    A = n(95701),
    E = n(924985),
    p = n(734057),
    I = n(945886),
    C = n(760751),
    m = n(576705),
    _ = n(222823),
    b = n(309010),
    N = n(543465),
    v = n(403362),
    f = n(32603),
    T = n(349828),
    S = n(818348);
let O = 21552 == n.j ? [a.Ay, o.A, u.Ay, h.A, g.A, E.A, p.A, C.A, m.A, _.Ay, b.A, N.Ay] : null;
function L() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => R()),
        l = i.useMemo(() => R({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(R()), 100);
        return O.forEach((t) => t.addChangeListener(e)), () => O.forEach((t) => t.removeChangeListener(e));
    }, []);
    let r = e ? t : l,
        a = (function (e) {
            if (e.getSections().length > f.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(r);
    return { guildChannels: r, shouldShowEmptyState: a };
}
function R(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = N.Ay.isGuildCollapsed(T.Vc),
        i = b.A.getChannelId(),
        l = p.A.getChannel(i),
        a = b.A.getVoiceChannelId(),
        u = [],
        g = {};
    for (let e in t) {
        let n = t[e],
            i = p.A.getChannel(n.id);
        if (null == i || n.type === r.Ip.CATEGORY) continue;
        let l = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== r.Ip.CATEGORY) {
            u.push(l);
            continue;
        }
        let s = n.parentId;
        s in g || (g[s] = []), g[s].push(l);
    }
    function C(e, i) {
        let { isCollapsed: r, isMuted: o } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !m.A.can(S.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || a === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !r
                            ? h.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : h.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    g = (0, f.wF)(e, u, l, a, n),
                    E = I.A.isCollapsed(e.id),
                    p = N.Ay.isChannelMuted(e.guild_id, e.id),
                    C = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: g,
                        threadCount: s().size(g),
                        isCollapsed: E,
                        isMuted: p,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, f.go)(e, E, !1),
                    };
                return d || c || !s().isEmpty(u) || _.Ay.getMentionCount(e.id) > 0
                    ? C
                    : (n && p) ||
                        (r && (p || o || (0, A.gV)(e.type) || ((0, A.ig)(e.type) && !1 === _.Ay.hasUnread(e.id))))
                      ? null
                      : C;
            })
            .filter(v.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let O = null,
        L = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == O && (O = C(u, this)), O;
            },
        },
        R = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = o.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = g[n] ?? [],
                    s = N.Ay.isChannelMuted(T.Vc, n),
                    r = E.A.isCollapsed(n),
                    a = null;
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
                        return null == a && (a = C(l, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        M = 0;
    for (let e of [L, ...R]) for (let t of ((e.position = ++M), e.channelList)) t.position = ++M;
    let y = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: T.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[f.Xt] = 0), (e[f.PU] = 0), (e[f.HP] = 0), (e[f.yO] = 0), (e[f.bK] = L.channelList.length);
            for (let t = 0; t < R.length; t++) e[f.TF + t] = Math.max(1, R[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < f.TF) && 0 === t && 0 === R[e - f.TF].channelList.length,
        getCategoryFromSection: (e) => (e === f.bK ? L : R[e - f.TF]),
        getNamedCategoryFromSection: (e) => R[e - f.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => y,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [L, ...R];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + f.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [L, ...R])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = p.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [L, ...R]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
