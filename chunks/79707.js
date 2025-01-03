t.d(n, {
    Z: function () {
        return l;
    }
});
var a = t(200651);
t(192379);
var i = t(481060),
    r = t(388032);
function l(e) {
    let { tabs: n, selectedTab: t, onTabSelect: l, onClose: o } = e;
    return (0, a.jsx)(i.Menu, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': r.intl.string(r.t.riPnr6),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, a.jsx)(
            i.MenuGroup,
            {
                children: n.map((e) => {
                    let { id: n, label: r } = e;
                    return (0, a.jsx)(
                        i.MenuItem,
                        {
                            id: n,
                            label: r,
                            icon: n === t ? i.CircleCheckIcon : void 0,
                            action: () => l(n)
                        },
                        n
                    );
                })
            },
            'overflow-tabs'
        )
    });
}
