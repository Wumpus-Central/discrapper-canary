n.d(t, {
    transitionToGlobalDiscovery: () =>
        function e(t) {
            var n, g, h;
            let _ = t.tab;
            switch (
                (u.A.setState({
                    selectedTab: _,
                }),
                _)
            ) {
                case d.GlobalDiscoveryTab.SERVERS:
                    let b = t.selectedServersTab;
                    return (
                        null != b
                            ? l.A.setState({
                                  selectedTab: b,
                                  entrypoint: null != (n = t.entrypoint) ? n : f.J8.UNKNOWN,
                              })
                            : l.A.setState({
                                  entrypoint: null != (g = t.entrypoint) ? g : f.J8.UNKNOWN,
                              }),
                        (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra)
                    );
                case d.GlobalDiscoveryTab.APPS:
                    if (null != t.newSessionState) {
                        let n = (0, i.YP)(),
                            { guildId: l, entrypoint: a } = t.newSessionState;
                        if (
                            (r.h.setState({
                                sessionId: n,
                                guildId: null != l ? l : null,
                                entrypoint: a,
                                trackedOpenedFromExternalEntrypoint: !1,
                            }),
                            c.default.track(p.HAw.APP_DIRECTORY_OPENED, {
                                source: null == a ? void 0 : a.name,
                                session_id: n,
                                guild_id: l,
                                user_id: null == (h = o.default.getCurrentUser()) ? void 0 : h.id,
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
                                    return {
                                        tab: d.GlobalDiscoveryTab.APPS,
                                    };
                                })(),
                            );
                    }
                    if (null != t.applicationId) {
                        if (t.section === m.GlobalDiscoveryAppsSections.STORE)
                            if (null != t.skuId)
                                return (0, s.pX)(
                                    p.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId),
                                );
                            else
                                return (0, s.pX)(
                                    p.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                        t.applicationId,
                                        m.GlobalDiscoveryAppsSections.STORE,
                                    ),
                                );
                        return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId));
                    }
                    if (null != t.query) {
                        let e = new URLSearchParams();
                        return (
                            "" !== t.query && e.set("q", t.query),
                            null != t.categoryId && e.set("category_id", t.categoryId.toString()),
                            null != t.page && e.set("page", t.page.toString()),
                            (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
                                search: e.toString(),
                            })
                        );
                    }
                    if (null != t.categoryId)
                        return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                    else return (0, s.pX)(p.BVt.GLOBAL_DISCOVERY_APPS);
                case d.GlobalDiscoveryTab.QUESTS:
                    return (0, a.navigateToQuestHome)({
                        fromContent: t.questContent,
                        questId: t.questId,
                        forceDiscoveryQuestHomeRoute: !0,
                    });
                default:
                    throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(_));
            }
        },
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(65821);
var r = n(310419),
    i = n(965660),
    l = n(601193),
    a = n(545986),
    s = n(976860),
    o = n(287809),
    c = n(954571),
    u = n(726845),
    d = n(488995),
    p = n(652215),
    m = n(435220),
    f = n(324580);
