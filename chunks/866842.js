"use strict";
n.d(t, { D: () => O, g: () => b }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(873298),
    o = n(933958),
    l = n(181079),
    u = n(313281),
    c = n(424345),
    d = n(698441),
    _ = n(695633),
    h = n(152007),
    f = n(95701),
    p = n(924985),
    E = n(734057),
    m = n(945886),
    g = n(760751),
    A = n(576705),
    I = n(222823),
    T = n(309010),
    S = n(543465),
    y = n(403362),
    C = n(297469),
    N = n(349828),
    v = n(818348);
let R = [o.Ay, l.A, d.Ay, _.A, h.A, p.A, E.A, g.A, A.A, I.Ay, T.A, S.Ay];
function O() {
    let { hasAccess: e } = (0, u.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => b()),
        r = i.useMemo(() => b({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(b()), 100);
        return R.forEach((t) => t.addChangeListener(e)), () => R.forEach((t) => t.removeChangeListener(e));
    }, []);
    let a = e ? t : r,
        o = (function (e) {
            if (e.getSections().length > C.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(a);
    return { guildChannels: a, shouldShowEmptyState: o };
}
function b(e) {
    let t = e ?? l.A.getFavoriteChannels(),
        n = S.Ay.isGuildCollapsed(N.Vc),
        i = T.A.getChannelId(),
        r = E.A.getChannel(i),
        o = T.A.getVoiceChannelId(),
        d = [],
        h = {};
    for (let e in t) {
        let n = t[e],
            i = E.A.getChannel(n.id);
        if (null == i || n.type === a.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== a.Ip.CATEGORY) {
            d.push(r);
            continue;
        }
        let s = n.parentId;
        s in h || (h[s] = []), h[s].push(r);
    }
    function g(e, i) {
        let { isCollapsed: a, isMuted: l } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !A.A.can(v.xB.VIEW_CHANNEL, e)) return null;
                let u = null != r && (r.id === e.id || o === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    d =
                        (u || c || !a
                            ? _.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : _.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    h = (0, C.wF)(e, d, r, o, n),
                    p = m.A.isCollapsed(e.id),
                    E = S.Ay.isChannelMuted(e.guild_id, e.id),
                    g = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: h,
                        threadCount: s().size(h),
                        isCollapsed: p,
                        isMuted: E,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, C.go)(e, p, !1),
                    };
                return u || c || !s().isEmpty(d) || I.Ay.getMentionCount(e.id) > 0
                    ? g
                    : (n && E) ||
                        (a && (E || l || (0, f.gV)(e.type) || ((0, f.ig)(e.type) && !1 === I.Ay.hasUnread(e.id))))
                      ? null
                      : g;
            })
            .filter(y.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let R = null,
        O = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == R && (R = g(d, this)), R;
            },
        },
        b = (0, u.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = l.A.getCategoryRecord(n);
                if (null == i) return null;
                let r = h[n] ?? [],
                    s = S.Ay.isChannelMuted(N.Vc, n),
                    a = p.A.isCollapsed(n),
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
                        return null == o && (o = g(r, this)), o;
                    },
                };
            })
            .filter((e) => null != e),
        D = 0;
    for (let e of [O, ...b]) for (let t of ((e.position = ++D), e.channelList)) t.position = ++D;
    let L = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        w = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: N.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[C.Xt] = 0), (e[C.PU] = 0), (e[C.HP] = 0), (e[C.yO] = 0), (e[C.bK] = O.channelList.length);
            for (let t = 0; t < b.length; t++) e[C.TF + t] = Math.max(1, b[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < C.TF) && 0 === t && 0 === b[e - C.TF].channelList.length,
        getCategoryFromSection: (e) => (e === C.bK ? O : b[e - C.TF]),
        getNamedCategoryFromSection: (e) => b[e - C.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => L,
        getChannelNoticeSection: () => w,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [O, ...b];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + C.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [O, ...b])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = E.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [O, ...b]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
