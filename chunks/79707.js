n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var a = n(481060),
    r = n(388032);
function l(e) {
    let { tabs: t, selectedTab: n, onTabSelect: l, onClose: s } = e;
    return (0, i.jsx)(a.v2r, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': r.intl.string(r.t.riPnr6),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, i.jsx)(
            a.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: r } = e;
                    return (0, i.jsx)(
                        a.sNh,
                        {
                            id: t,
                            label: r,
                            icon: t === n ? a.owK : void 0,
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
