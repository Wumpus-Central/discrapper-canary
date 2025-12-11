n.d(t, { U: () => o });
var a = n(473749),
    r = n(49898),
    i = n(748650);
let l = 20 + r.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - r.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    s = 20 + r.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + r.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: o, setSearchBarState: c } = e,
        d = a.useCallback(
            (e) => {
                if (!t) return;
                let a = Math.round(e);
                switch (o) {
                    case r.GlobalDiscoverySearchBarState.DEFAULT:
                        a < 20 &&
                            c(n ? r.GlobalDiscoverySearchBarState.COLLAPSED : r.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case r.GlobalDiscoverySearchBarState.COLLAPSED:
                        a > l && c(r.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case r.GlobalDiscoverySearchBarState.FLOATING:
                        a > s && c(r.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, o, c],
        ),
        u = a.useCallback(() => {
            c(r.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        p = a.useCallback(() => {
            o === r.GlobalDiscoverySearchBarState.FLOATING && n && c(r.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === r.GlobalDiscoverySearchBarState.FLOATING ? i.floatingSearchTabsMask : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: p,
    };
}
