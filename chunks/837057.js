n.d(t, {
    transitionToGlobalDiscovery: () =>
        function e(t) {
            let n = t.tab;
            switch ((c.A.setState({ selectedTab: n }), n)) {
                case u.GlobalDiscoveryTab.SERVERS:
                    let p = t.selectedServersTab;
                    return (
                        null != p
                            ? a.A.setState({ selectedTab: p, entrypoint: t.entrypoint ?? h.J8.UNKNOWN })
                            : a.A.setState({ entrypoint: t.entrypoint ?? h.J8.UNKNOWN }),
                        (0, s.pX)(m.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra)
                    );
                case u.GlobalDiscoveryTab.APPS:
                    if (null != t.newSessionState) {
                        let n = (0, l.YP)(),
                            { guildId: a, entrypoint: r } = t.newSessionState;
                        if (
                            (i.h.setState({
                                sessionId: n,
                                guildId: a ?? null,
                                entrypoint: r,
                                trackedOpenedFromExternalEntrypoint: !1,
                            }),
                            d.default.track(m.HAw.APP_DIRECTORY_OPENED, {
                                source: r?.name,
                                session_id: n,
                                guild_id: a,
                                user_id: o.default.getCurrentUser()?.id,
                            }),
                            t.newSessionState.restorePreviousView)
                        )
                            return e(
                                (function () {
                                    let { lastItem: e } = i.tS.getState();
                                    if (null != e)
                                        switch (e.type) {
                                            case i.ev.APPLICATION:
                                                return {
                                                    tab: u.GlobalDiscoveryTab.APPS,
                                                    applicationId: e.applicationId,
                                                    section: e.section,
                                                };
                                            case i.ev.CATEGORY:
                                                return {
                                                    tab: u.GlobalDiscoveryTab.APPS,
                                                    categoryId: Number(e.categoryId),
                                                };
                                            case i.ev.SEARCH:
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
                        if (t.section === _.GlobalDiscoveryAppsSections.STORE)
                            if (null != t.skuId)
                                return (0, s.pX)(
                                    m.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId),
                                );
                            else
                                return (0, s.pX)(
                                    m.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                        t.applicationId,
                                        _.GlobalDiscoveryAppsSections.STORE,
                                    ),
                                );
                        return (0, s.pX)(m.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                    }
                    if (null != t.query) {
                        let e = new URLSearchParams();
                        return (
                            "" !== t.query && e.set("q", t.query),
                            null != t.categoryId && e.set("category_id", t.categoryId.toString()),
                            null != t.page && e.set("page", t.page.toString()),
                            (0, s.pX)(m.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() })
                        );
                    }
                    if (null != t.categoryId)
                        return (0, s.pX)(m.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                    else return (0, s.pX)(m.BVt.GLOBAL_DISCOVERY_APPS);
                case u.GlobalDiscoveryTab.QUESTS:
                    return (0, r.navigateToQuestHome)({
                        fromContent: t.questContent,
                        questId: t.questId,
                        forceDiscoveryQuestHomeRoute: !0,
                    });
                default:
                    throw Error(`[transitionToGlobalDiscovery] Unhandled tab type: ${n}`);
            }
        },
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(310419),
    l = n(965660),
    a = n(601193),
    r = n(545986),
    s = n(976860),
    o = n(287809),
    d = n(954571),
    c = n(726845),
    u = n(488995),
    m = n(652215),
    _ = n(435220),
    h = n(324580);
