n.d(t, { transitionToGlobalDiscovery: () => h }), n(896048), n(680155), n(323874), n(14289), n(35956), n(65821);
var r = n(310419),
    i = n(965660),
    a = n(601193),
    s = n(545986),
    o = n(976860),
    l = n(287809),
    c = n(954571),
    u = n(726845),
    d = n(488995),
    f = n(652215),
    p = n(435220),
    _ = n(324580);
function h(e) {
    var t, n, g;
    let E = e.tab;
    switch ((u.A.setState({ selectedTab: E }), E)) {
        case d.GlobalDiscoveryTab.SERVERS:
            let b = e.selectedServersTab;
            return (
                null != b
                    ? a.A.setState({
                          selectedTab: b,
                          entrypoint: null != (t = e.entrypoint) ? t : _.J8.UNKNOWN,
                      })
                    : a.A.setState({ entrypoint: null != (n = e.entrypoint) ? n : _.J8.UNKNOWN }),
                (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
        case d.GlobalDiscoveryTab.APPS:
            if (null != e.newSessionState) {
                let t = (0, i.YP)(),
                    { guildId: n, entrypoint: a } = e.newSessionState;
                if (
                    (r.h.setState({
                        sessionId: t,
                        guildId: null != n ? n : null,
                        entrypoint: a,
                        trackedOpenedFromExternalEntrypoint: !1,
                    }),
                    c.default.track(f.HAw.APP_DIRECTORY_OPENED, {
                        source: null == a ? void 0 : a.name,
                        session_id: t,
                        guild_id: n,
                        user_id: null == (g = l.default.getCurrentUser()) ? void 0 : g.id,
                    }),
                    e.newSessionState.restorePreviousView)
                )
                    return h(m());
            }
            if (null != e.applicationId) {
                if (e.section === p.GlobalDiscoveryAppsSections.STORE)
                    if (null != e.skuId)
                        return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e.applicationId, e.skuId));
                    else
                        return (0, o.pX)(
                            f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                e.applicationId,
                                p.GlobalDiscoveryAppsSections.STORE,
                            ),
                        );
                return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId));
            }
            if (null != e.query) {
                let t = new URLSearchParams();
                return (
                    "" !== e.query && t.set("q", e.query),
                    null != e.categoryId && t.set("category_id", e.categoryId.toString()),
                    null != e.page && t.set("page", e.page.toString()),
                    (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { search: t.toString() })
                );
            }
            if (null != e.categoryId) return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()));
            else return (0, o.pX)(f.BVt.GLOBAL_DISCOVERY_APPS);
        case d.GlobalDiscoveryTab.QUESTS:
            return (0, s.navigateToQuestHome)({
                fromContent: e.questContent,
                questId: e.questId,
                forceDiscoveryQuestHomeRoute: !0,
            });
        default:
            throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(E));
    }
}
function m() {
    let { lastItem: e } = r.tS.getState();
    if (null != e)
        switch (e.type) {
            case r.ev.APPLICATION:
                return {
                    tab: d.GlobalDiscoveryTab.APPS,
                    applicationId: e.applicationId,
                    section: e.section,
                };
            case r.ev.CATEGORY:
                return {
                    tab: d.GlobalDiscoveryTab.APPS,
                    categoryId: Number(e.categoryId),
                };
            case r.ev.SEARCH:
                var t;
                return {
                    tab: d.GlobalDiscoveryTab.APPS,
                    query: null != (t = e.query) ? t : "",
                    page: e.page,
                    categoryId: null != e.categoryId ? Number(e.categoryId) : void 0,
                };
        }
    return { tab: d.GlobalDiscoveryTab.APPS };
}
