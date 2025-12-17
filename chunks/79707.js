n.d(t, { Z: () => l });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(388032);
function l(e) {
    let { tabs: t, selectedTab: n, onTabSelect: l, onClose: s } = e;
    return (0, a.jsx)(r.v2r, {
        navId: "global-discovery-tabs-overflow-menu",
        "aria-label": i.intl.string(i.t.riPnr0),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, a.jsx)(
            r.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, a.jsx)(
                        r.sNh,
                        {
                            id: t,
                            label: i,
                            icon: t === n ? r.owK : void 0,
                            action: () => l(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
