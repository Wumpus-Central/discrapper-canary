a.d(t, {
    transitionToGlobalDiscovery: () =>
        function e(t) {
            let a = t.tab;
            switch ((a !== u.GlobalDiscoveryTab.QUESTS && S.A.setState({ selectedTab: a }), a)) {
                case u.GlobalDiscoveryTab.SERVERS:
                    let y = t.selectedServersTab;
                    return (
                        null != y
                            ? l.A.setState({ selectedTab: y, entrypoint: t.entrypoint ?? b.J8.UNKNOWN })
                            : l.A.setState({ entrypoint: t.entrypoint ?? b.J8.UNKNOWN }),
                        (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra)
                    );
                case u.GlobalDiscoveryTab.APPS:
                    if (null != t.newSessionState) {
                        let a = (0, o.YP)(),
                            { guildId: l, entrypoint: n } = t.newSessionState;
                        if (
                            (r.h.setState({
                                sessionId: a,
                                guildId: l ?? null,
                                entrypoint: n,
                                trackedOpenedFromExternalEntrypoint: !1,
                            }),
                            c.default.track(d.HAw.APP_DIRECTORY_OPENED, {
                                source: n?.name,
                                session_id: a,
                                guild_id: l,
                                user_id: s.default.getCurrentUser()?.id,
                            }),
                            t.newSessionState.restorePreviousView)
                        )
                            return e(
                                (function () {
                                    let { lastItem: e } = r.tS.getState();
                                    if (null != e)
                                        switch (e.type) {
                                            case r.ev.APPLICATION:
                                                return {
                                                    tab: u.GlobalDiscoveryTab.APPS,
                                                    applicationId: e.applicationId,
                                                    section: e.section,
                                                };
                                            case r.ev.CATEGORY:
                                                return {
                                                    tab: u.GlobalDiscoveryTab.APPS,
                                                    categoryId: Number(e.categoryId),
                                                };
                                            case r.ev.SEARCH:
                                                return {
                                                    tab: u.GlobalDiscoveryTab.APPS,
                                                    query: e.query ?? "",
                                                    page: e.page,
                                                    categoryId: null != e.categoryId ? Number(e.categoryId) : void 0,
                                                };
                                        }
                                    return { tab: u.GlobalDiscoveryTab.APPS };
                                })(),
                            );
                    }
                    if (null != t.applicationId) {
                        if (t.section === p.GlobalDiscoveryAppsSections.STORE)
                            if (null != t.skuId)
                                return (0, i.pX)(
                                    d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId),
                                );
                            else
                                return (0, i.pX)(
                                    d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                        t.applicationId,
                                        p.GlobalDiscoveryAppsSections.STORE,
                                    ),
                                );
                        return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                    }
                    if (null != t.query) {
                        let e = new URLSearchParams();
                        return (
                            "" !== t.query && e.set("q", t.query),
                            null != t.categoryId && e.set("category_id", t.categoryId.toString()),
                            null != t.page && e.set("page", t.page.toString()),
                            (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() })
                        );
                    }
                    if (null != t.categoryId)
                        return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                    else return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS);
                case u.GlobalDiscoveryTab.QUESTS:
                    return (0, n.navigateToQuestHome)({ fromContent: t.questContent, questId: t.questId });
                default:
                    throw Error(`[transitionToGlobalDiscovery] Unhandled tab type: ${a}`);
            }
        },
}),
    a(323874),
    a(14289),
    a(35956);
var r = a(310419),
    o = a(965660),
    l = a(601193),
    n = a(617986),
    i = a(976860),
    s = a(287809),
    c = a(174459),
    S = a(726845),
    u = a(488995),
    d = a(652215),
    p = a(435220),
    b = a(324580);
