n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(388032);
function l(e) {
    let { tabs: t, selectedTab: n, onTabSelect: l, onClose: o } = e;
    return (0, r.jsx)(a.v2r, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': i.NW.string(i.t.riPnr6),
        hideScroller: !0,
        onClose: o,
        onSelect: o,
        children: (0, r.jsx)(
            a.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, r.jsx)(
                        a.sNh,
                        {
                            id: t,
                            label: i,
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
