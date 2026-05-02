"use strict";
n.d(t, {
    transitionToGlobalDiscovery: () =>
        function e(t) {
            let n = t.tab;
            switch ((c.A.setState({ selectedTab: n }), n)) {
                case d.GlobalDiscoveryTab.SERVERS:
                    let p = t.selectedServersTab;
                    return (
                        null != p
                            ? s.A.setState({ selectedTab: p, entrypoint: t.entrypoint ?? h.J8.UNKNOWN })
                            : s.A.setState({ entrypoint: t.entrypoint ?? h.J8.UNKNOWN }),
                        (0, o.pX)(_.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra)
                    );
                case d.GlobalDiscoveryTab.APPS:
                    if (null != t.newSessionState) {
                        let n = (0, r.YP)(),
                            { guildId: s, entrypoint: a } = t.newSessionState;
                        if (
                            (i.h.setState({
                                sessionId: n,
                                guildId: s ?? null,
                                entrypoint: a,
                                trackedOpenedFromExternalEntrypoint: !1,
                            }),
                            u.default.track(_.HAw.APP_DIRECTORY_OPENED, {
                                source: a?.name,
                                session_id: n,
                                guild_id: s,
                                user_id: l.default.getCurrentUser()?.id,
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
                                                    tab: d.GlobalDiscoveryTab.APPS,
                                                    applicationId: e.applicationId,
                                                    section: e.section,
                                                };
                                            case i.ev.CATEGORY:
                                                return {
                                                    tab: d.GlobalDiscoveryTab.APPS,
                                                    categoryId: Number(e.categoryId),
                                                };
                                            case i.ev.SEARCH:
                                                return {
                                                    tab: d.GlobalDiscoveryTab.APPS,
                                                    query: e.query ?? "",
                                                    page: e.page,
                                                    categoryId: null != e.categoryId ? Number(e.categoryId) : void 0,
                                                };
                                        }
                                    return { tab: d.GlobalDiscoveryTab.APPS };
                                })(),
                            );
                    }
                    if (null != t.applicationId) {
                        if (t.section === f.GlobalDiscoveryAppsSections.STORE)
                            if (null != t.skuId)
                                return (0, o.pX)(
                                    _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId),
                                );
                            else
                                return (0, o.pX)(
                                    _.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                        t.applicationId,
                                        f.GlobalDiscoveryAppsSections.STORE,
                                    ),
                                );
                        return (0, o.pX)(_.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                    }
                    if (null != t.query) {
                        let e = new URLSearchParams();
                        return (
                            "" !== t.query && e.set("q", t.query),
                            null != t.categoryId && e.set("category_id", t.categoryId.toString()),
                            null != t.page && e.set("page", t.page.toString()),
                            (0, o.pX)(_.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { search: e.toString() })
                        );
                    }
                    if (null != t.categoryId)
                        return (0, o.pX)(_.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                    else return (0, o.pX)(_.BVt.GLOBAL_DISCOVERY_APPS);
                case d.GlobalDiscoveryTab.QUESTS:
                    return (0, a.navigateToQuestHome)({
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
    r = n(965660),
    s = n(601193),
    a = n(617986),
    o = n(976860),
    l = n(287809),
    u = n(174459),
    c = n(726845),
    d = n(488995),
    _ = n(652215),
    f = n(435220),
    h = n(324580);
