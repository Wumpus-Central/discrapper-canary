n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(388032);
function l(e) {
    let { tabs: t, selectedTab: n, onTabSelect: l, onClose: s } = e;
    return (0, r.jsx)(i.v2r, {
        navId: 'global-discovery-tabs-overflow-menu',
        'aria-label': a.intl.string(a.t.riPnr6),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, r.jsx)(
            i.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: a } = e;
                    return (0, r.jsx)(
                        i.sNh,
                        {
                            id: t,
                            label: a,
                            icon: t === n ? i.owK : void 0,
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
