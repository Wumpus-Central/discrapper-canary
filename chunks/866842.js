n.d(t, { D: () => R, g: () => v }), n(321073);
var i = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(873298),
    a = n(933958),
    o = n(181079),
    d = n(313281),
    c = n(424345),
    u = n(698441),
    A = n(695633),
    h = n(152007),
    E = n(95701),
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(760751),
    T = n(576705),
    p = n(222823),
    S = n(309010),
    N = n(543465),
    L = n(403362),
    m = n(297469),
    O = n(349828),
    f = n(818348);
let b = 21552 == n.j ? [a.Ay, o.A, u.Ay, A.A, h.A, g.A, C.A, I.A, T.A, p.Ay, S.A, N.Ay] : null;
function R() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => v()),
        l = i.useMemo(() => v({}), []);
    i.useEffect(() => {
        let e = r().throttle(() => n(v()), 100);
        return b.forEach((t) => t.addChangeListener(e)), () => b.forEach((t) => t.removeChangeListener(e));
    }, []);
    let s = e ? t : l,
        a = (function (e) {
            if (e.getSections().length > m.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(s);
    return { guildChannels: s, shouldShowEmptyState: a };
}
function v(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = N.Ay.isGuildCollapsed(O.Vc),
        i = S.A.getChannelId(),
        l = C.A.getChannel(i),
        a = S.A.getVoiceChannelId(),
        u = [],
        h = {};
    for (let e in t) {
        let n = t[e],
            i = C.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let l = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            u.push(l);
            continue;
        }
        let r = n.parentId;
        r in h || (h[r] = []), h[r].push(l);
    }
    function I(e, i) {
        let { isCollapsed: s, isMuted: o } = i;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !T.A.can(f.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || a === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !s
                            ? A.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : A.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    h = (0, m.wF)(e, u, l, a, n),
                    g = _.A.isCollapsed(e.id),
                    C = N.Ay.isChannelMuted(e.guild_id, e.id),
                    I = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: h,
                        threadCount: r().size(h),
                        isCollapsed: g,
                        isMuted: C,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, m.go)(e, g, !1),
                    };
                return d || c || !r().isEmpty(u) || p.Ay.getMentionCount(e.id) > 0
                    ? I
                    : (n && C) ||
                        (s && (C || o || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === p.Ay.hasUnread(e.id))))
                      ? null
                      : I;
            })
            .filter(L.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let b = null,
        R = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
                return null == b && (b = I(u, this)), b;
            },
        },
        v = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = o.A.getCategoryRecord(n);
                if (null == i) return null;
                let l = h[n] ?? [],
                    r = N.Ay.isChannelMuted(O.Vc, n),
                    s = g.A.isCollapsed(n),
                    a = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == a && (a = I(l, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        U = 0;
    for (let e of [R, ...v]) for (let t of ((e.position = ++U), e.channelList)) t.position = ++U;
    let D = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: O.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[m.Xt] = 0), (e[m.PU] = 0), (e[m.HP] = 0), (e[m.yO] = 0), (e[m.bK] = R.channelList.length);
            for (let t = 0; t < v.length; t++) e[m.TF + t] = Math.max(1, v[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < m.TF) && 0 === t && 0 === v[e - m.TF].channelList.length,
        getCategoryFromSection: (e) => (e === m.bK ? R : v[e - m.TF]),
        getNamedCategoryFromSection: (e) => v[e - m.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => D,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [R, ...v];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + m.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [R, ...v])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = C.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [R, ...v]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
