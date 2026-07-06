"use strict";
n.d(t, { D: () => D, g: () => w }), n(321073);
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
    E = n(353202),
    p = n(95701),
    m = n(924985),
    g = n(734057),
    A = n(945886),
    I = n(760751),
    T = n(576705),
    S = n(568548),
    N = n(309010),
    C = n(543465),
    y = n(403362),
    O = n(297469),
    R = n(349828),
    v = n(818348);
let b = [o.Ay, l.A, d.A, _.Ay, h.A, f.A, m.A, g.A, I.A, T.A, S.Ay, N.A, C.Ay];
function L(e) {
    let { limit: t, includeLoading: n } = e,
        i = l.A.getFavoriteChannels(),
        r = [];
    for (let e in i) {
        if (r.length >= t) break;
        let s = i[e];
        if (
            s.type !== a.Ip.REFERENCE_ORIGINAL ||
            null == s.channelType ||
            !p.Le.has(s.channelType) ||
            null != g.A.getChannel(e)
        )
            continue;
        let o = E.A.getLoadState(e);
        "NOT_FOUND" !== o && (n || "LOADING" !== o) && r.push(e);
    }
    return r;
}
function D() {
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
                0 === (e = L({ limit: R.lj, includeLoading: !1 })).length ? Promise.resolve() : E.A.loadThreadsBulk(e);
            }
        }, [e, r]);
    let o = e ? t : a,
        l = e && L({ limit: 1, includeLoading: !0 }).length > 0,
        c =
            (function (e) {
                if (e.getSections().length > O.TF) return !1;
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
        i = N.A.getChannelId(),
        r = g.A.getChannel(i),
        o = N.A.getVoiceChannelId(),
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
                if (!e.isPrivate() && !T.A.can(v.xB.VIEW_CHANNEL, e)) return null;
                let u = null != r && (r.id === e.id || o === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    d =
                        (u || c || !a
                            ? h.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : h.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    _ = (0, O.wF)(e, d, r, o, n),
                    f = A.A.isCollapsed(e.id),
                    E = C.Ay.isChannelMuted(e.guild_id, e.id),
                    m = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: _,
                        threadCount: s().size(_),
                        isCollapsed: f,
                        isMuted: E,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, O.go)(e, f, !1),
                    };
                return u || c || !s().isEmpty(d) || S.Ay.getMentionCount(e.id) > 0
                    ? m
                    : (n && E) ||
                        (a && (E || l || (0, p.gV)(e.type) || ((0, p.ig)(e.type) && !1 === S.Ay.hasUnread(e.id))))
                      ? null
                      : m;
            })
            .filter(y.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let E = null,
        I = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == E && (E = f(d, this)), E;
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
        L = 0;
    for (let e of [I, ...b]) for (let t of ((e.position = ++L), e.channelList)) t.position = ++L;
    let D = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        w = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: R.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[O.Xt] = 0), (e[O.PU] = 0), (e[O.HP] = 0), (e[O.yO] = 0), (e[O.bK] = I.channelList.length);
            for (let t = 0; t < b.length; t++) e[O.TF + t] = Math.max(1, b[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < O.TF) && 0 === t && 0 === b[e - O.TF].channelList.length,
        getCategoryFromSection: (e) => (e === O.bK ? I : b[e - O.TF]),
        getNamedCategoryFromSection: (e) => b[e - O.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => D,
        getChannelNoticeSection: () => w,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [I, ...b];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + O.bK, row: i }];
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
