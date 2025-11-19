n.d(t, { n: () => m }), n(781311), n(642613), n(388685), n(539854);
var l = n(473749),
    r = n(658722),
    i = n.n(r),
    a = n(913527),
    s = n.n(a),
    c = n(442837),
    o = n(709054),
    u = n(435064),
    d = n(52436);
function p(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.id.localeCompare(t.id))
        : "descending" === t
          ? e.sort((e, t) => t.id.localeCompare(e.id))
          : e;
}
function m() {
    let e = (0, c.e7)([u.Z], () => u.Z.getClips()),
        t = (0, c.e7)([u.Z], () => u.Z.getPendingClips()),
        n = (0, d.f)();
    return l.useMemo(() => {
        let l = [...t, ...e],
            r = new Map(),
            a = [];
        for (let e of l) {
            let t = (function (e, t) {
                var n, l, r, a;
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let r = t.query.toLowerCase(),
                        a = null != e.name && i()(r, e.name.toLowerCase()),
                        s = i()(r, e.applicationName.toLowerCase()),
                        c =
                            (null == (n = e.activity) ? void 0 : n.state) != null &&
                            i()(r, e.activity.state.toLowerCase()),
                        o =
                            (null == (l = e.activity) ? void 0 : l.details) != null &&
                            i()(r, e.activity.details.toLowerCase());
                    if (!a && !s && !c && !o) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let n = null == (r = e.activity) ? void 0 : r.state,
                        l = null == (a = e.activity) ? void 0 : a.details;
                    if (n !== t.selectedActivity && l !== t.selectedActivity) return !1;
                }
                return (
                    (null === t.selectedYear || s()(o.default.extractTimestamp(e.id)).year() === t.selectedYear) && !0
                );
            })(e, n);
            if ((t && a.push(e), null == e.applicationId)) continue;
            let l = r.get(e.applicationId);
            null == l
                ? r.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipId: e.id,
                      name: e.applicationName,
                  })
                : (l.clips.push(e),
                  t && l.filteredClips.push(e),
                  e.id > l.mostRecentClipId && (l.mostRecentClipId = e.id));
        }
        let c = p(a, n.sortOrder),
            u = p(
                a.filter((e) => e.isFavorite),
                n.sortOrder,
            );
        return {
            clipsByGame: Array.from(r.entries())
                .map((e) => {
                    let [t, l] = e;
                    return {
                        applicationId: t,
                        name: l.name,
                        count: l.filteredClips.length,
                        mostRecentClipId: l.mostRecentClipId,
                        filteredClips: p(l.filteredClips, n.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
            allClips: l,
            filteredClips: c,
            favoriteClips: u,
        };
    }, [e, t, n]);
}
