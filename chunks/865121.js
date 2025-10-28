n.d(e, { Z: () => c });
var i = n(657707),
    l = n(230711),
    u = n(509613),
    r = n(906467),
    s = n(313789),
    o = n(526665),
    a = n(342386);
let c = (0, u.m7)(s.n.LEGACY_SETTINGS_SIDEBAR_ITEM, {
    useTitle: () => "Open Legacy Settings",
    icon: i.ewm,
    onClick: () => {
        (0, a.default)(), l.Z.open();
    },
    usePredicate: () => (0, o.NT)("LegacySettingsSidebarItem") || r.Z.isDeveloper,
    buildLayout: () => [],
});
