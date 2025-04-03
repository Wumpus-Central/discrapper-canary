n.d(t, {
    o: () => v,
    t: () => P
}),
    n(47120),
    n(653041);
var r = n(192379),
    l = n(392711),
    i = n.n(l),
    o = n(524437),
    a = n(317381),
    s = n(853856),
    c = n(846787),
    u = n(924301),
    d = n(601070),
    E = n(569471),
    f = n(131704),
    p = n(680089),
    h = n(592125),
    C = n(58468),
    _ = n(77498),
    O = n(496675),
    g = n(306680),
    S = n(944486),
    I = n(9156),
    T = n(823379),
    b = n(540126),
    N = n(647086),
    m = n(231338);
let A = [a.ZP, s.Z, u.ZP, d.Z, E.Z, p.Z, h.Z, _.Z, O.Z, g.ZP, S.Z, I.ZP];
function v() {
    let [e, t] = r.useState(() => P());
    return (
        r.useEffect(() => {
            let e = i().throttle(() => t(P()), 100);
            return A.forEach((t) => t.addChangeListener(e)), () => A.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function P() {
    let e = s.Z.getFavoriteChannels(),
        t = I.ZP.isGuildCollapsed(N._),
        n = S.Z.getChannelId(),
        r = h.Z.getChannel(n),
        l = S.Z.getVoiceChannelId(),
        a = [],
        u = {};
    for (let t in e) {
        let n = e[t],
            r = h.Z.getChannel(n.id);
        if (null == r || n.type === o.Dd.CATEGORY) continue;
        let l = (0, c.r)(e, n, r);
        if (null == n.parentId || !(n.parentId in e)) {
            a.push(l);
            continue;
        }
        n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(l);
    }
    function E(n, o) {
        let { isCollapsed: a, isMuted: s } = o;
        return i()(n)
            .map((n) => {
                var c;
                if (!n.isPrivate() && !O.Z.can(m.Pl.VIEW_CHANNEL, n)) return null;
                let u = null != r && (r.id === n.id || l === n.id),
                    E = null != r && r.isThread() && r.parent_id === n.id,
                    p = null != (c = u || E || !a ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
                    h = (0, b.zR)(n, p, r, l, t),
                    _ = C.Z.isCollapsed(n.id),
                    S = I.ZP.isChannelMuted(n.guild_id, n.id),
                    T = {
                        id: n.id,
                        record: n,
                        category: o,
                        position: e[n.id].order,
                        threadIds: h,
                        threadCount: i().size(h),
                        isCollapsed: _,
                        isMuted: S,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, b.Bz)(n, _, !1)
                    };
                return u || E || !i().isEmpty(p) || g.ZP.getMentionCount(n.id) > 0 ? T : (t && S) || (a && (S || s || (0, f.vd)(n.type) || ((0, f.vc)(n.type) && !1 === g.ZP.hasUnread(n.id)))) ? null : T;
            })
            .filter(T.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let _ = null,
        A = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => a,
            getShownChannelIds: () => a.map((e) => e.id),
            getShownChannelAndThreadIds: () => a.map((e) => e.id),
            isEmpty: () => 0 === a.length,
            get channelList() {
                return null == _ && (_ = E(a, this)), _;
            }
        },
        v = i()(e)
            .values()
            .filter((e) => e.type === o.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: r } = e,
                    l = s.Z.getCategoryRecord(n),
                    i = null != (t = u[n]) ? t : [],
                    o = I.ZP.isChannelMuted(N._, n),
                    a = p.Z.isCollapsed(n),
                    c = null;
                return {
                    isMuted: o,
                    isCollapsed: a,
                    record: l,
                    id: n,
                    position: r,
                    getChannelRecords: () => i,
                    getShownChannelIds: () => i.map((e) => e.id),
                    getShownChannelAndThreadIds: () => i.map((e) => e.id),
                    isEmpty: () => 0 === i.length,
                    get channelList() {
                        return null == c && (c = E(i, this)), c;
                    }
                };
            })
            .value(),
        P = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        y = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: N._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[b.Fq] = 0), (e[b.wZ] = 0), (e[b.p2] = 0), (e[b.PB] = 0), (e[b.wd] = A.channelList.length);
            for (let t = 0; t < v.length; t++) e[b.wF + t] = Math.max(1, v[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < b.wF) && 0 === t && 0 === v[e - b.wF].channelList.length,
        getCategoryFromSection: (e) => (e === b.wd ? A : v[e - b.wF]),
        getNamedCategoryFromSection: (e) => v[e - b.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t]
                  };
        },
        getGuildActionSection: () => P,
        getChannelNoticeSection: () => y,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [A, ...v];
            for (let n = 0; n < t.length; n++)
                for (let r = 0; r < t[n].channelList.length; r++)
                    if (t[n].channelList[r].id === e)
                        return [
                            {
                                section: n + b.wd,
                                row: r
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [A, ...v])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = h.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [A, ...v]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
