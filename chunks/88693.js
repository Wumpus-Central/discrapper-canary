n.d(t, { U: () => s });
var r = n(192379),
    a = n(49898),
    i = n(794916);
let l = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    o = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function s(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: s, setSearchBarState: c } = e,
        d = r.useCallback(
            (e) => {
                if (!t) return;
                let r = Math.round(e);
                switch (s) {
                    case a.GlobalDiscoverySearchBarState.DEFAULT:
                        r < 20 && c(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case a.GlobalDiscoverySearchBarState.COLLAPSED:
                        r > l && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case a.GlobalDiscoverySearchBarState.FLOATING:
                        r > o && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, s, c]
        ),
        u = r.useCallback(() => {
            c(a.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        p = r.useCallback(() => {
            s === a.GlobalDiscoverySearchBarState.FLOATING && n && c(a.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, s, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: s === a.GlobalDiscoverySearchBarState.FLOATING ? i.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: p
    };
}
