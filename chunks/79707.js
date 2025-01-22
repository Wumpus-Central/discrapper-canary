n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    r = n(388032);
function l(e) {
    let { tabs: t, selectedTab: n, onTabSelect: l, onClose: o } = e;
    return (0, i.jsx)(a.Menu, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': r.intl.string(r.t.riPnr6),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, i.jsx)(
            a.MenuGroup,
            {
                children: t.map((e) => {
                    let { id: t, label: r } = e;
                    return (0, i.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            label: r,
                            icon: t === n ? a.CircleCheckIcon : void 0,
                            action: () => l(t)
                        },
                        t
                    );
                })
            },
            'overflow-tabs'
        )
    });
}
