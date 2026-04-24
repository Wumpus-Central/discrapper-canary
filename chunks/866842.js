n.d(t, { D: () => y, g: () => G }), n(321073);
var i = n(64700),
    s = n(735438),
    l = n.n(s),
    r = n(873298),
    a = n(933958),
    o = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(698441),
    A = n(695633),
    g = n(152007),
    h = n(95701),
    E = n(924985),
    p = n(734057),
    I = n(945886),
    _ = n(760751),
    C = n(576705),
    b = n(222823),
    S = n(309010),
    m = n(543465),
    N = n(403362),
    T = n(285114),
    f = n(349828),
    O = n(818348);
let L = 21552 == n.j ? [a.Ay, o.A, u.Ay, A.A, g.A, E.A, p.A, _.A, C.A, b.Ay, S.A, m.Ay] : null;
function y() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => G()),
        s = i.useMemo(() => G({}), []);
    i.useEffect(() => {
        let e = l().throttle(() => n(G()), 100);
        return L.forEach((t) => t.addChangeListener(e)), () => L.forEach((t) => t.removeChangeListener(e));
    }, []);
    let r = e ? t : s,
        a = (function (e) {
            if (e.getSections().length > T.TF) return !1;
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
function G(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = m.Ay.isGuildCollapsed(f.Vc),
        i = S.A.getChannelId(),
        s = p.A.getChannel(i),
        a = S.A.getVoiceChannelId(),
        u = [],
        g = {};
    for (let e in t) {
        let n = t[e],
            i = p.A.getChannel(n.id);
        if (null == i || n.type === r.Ip.CATEGORY) continue;
        let s = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== r.Ip.CATEGORY) {
            u.push(s);
            continue;
        }
        let l = n.parentId;
        l in g || (g[l] = []), g[l].push(s);
    }
    function _(e, i) {
        let { isCollapsed: r, isMuted: o } = i;
        return l()(e)
            .map((e) => {
                if (!e.isPrivate() && !C.A.can(O.xB.VIEW_CHANNEL, e)) return null;
                let d = null != s && (s.id === e.id || a === e.id),
                    c = null != s && s.isThread() && s.parent_id === e.id,
                    u =
                        (d || c || !r
                            ? A.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : A.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    g = (0, T.wF)(e, u, s, a, n),
                    E = I.A.isCollapsed(e.id),
                    p = m.Ay.isChannelMuted(e.guild_id, e.id),
                    _ = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: g,
                        threadCount: l().size(g),
                        isCollapsed: E,
                        isMuted: p,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, T.go)(e, E, !1),
                    };
                return d || c || !l().isEmpty(u) || b.Ay.getMentionCount(e.id) > 0
                    ? _
                    : (n && p) ||
                        (r && (p || o || (0, h.gV)(e.type) || ((0, h.ig)(e.type) && !1 === b.Ay.hasUnread(e.id))))
                      ? null
                      : _;
            })
            .filter(N.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let L = null,
        y = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == L && (L = _(u, this)), L;
            },
        },
        G = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = o.A.getCategoryRecord(n);
                if (null == i) return null;
                let s = g[n] ?? [],
                    l = m.Ay.isChannelMuted(f.Vc, n),
                    r = E.A.isCollapsed(n),
                    a = null;
                return {
                    isMuted: l,
                    isCollapsed: r,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => s,
                    getShownChannelIds: () => s.map((e) => e.id),
                    getShownChannelAndThreadIds: () => s.map((e) => e.id),
                    isEmpty: () => 0 === s.length,
                    get channelList() {
                        return null == a && (a = _(s, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        R = 0;
    for (let e of [y, ...G]) for (let t of ((e.position = ++R), e.channelList)) t.position = ++R;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        v = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: f.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[T.Xt] = 0), (e[T.PU] = 0), (e[T.HP] = 0), (e[T.yO] = 0), (e[T.bK] = y.channelList.length);
            for (let t = 0; t < G.length; t++) e[T.TF + t] = Math.max(1, G[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < T.TF) && 0 === t && 0 === G[e - T.TF].channelList.length,
        getCategoryFromSection: (e) => (e === T.bK ? y : G[e - T.TF]),
        getNamedCategoryFromSection: (e) => G[e - T.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => M,
        getChannelNoticeSection: () => v,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [y, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + T.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [y, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = p.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [y, ...G]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
