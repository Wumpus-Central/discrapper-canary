n.d(e, { Z: () => c });
var i = n(657707),
    r = n(230711),
    l = n(509613),
    u = n(906467),
    s = n(313789),
    a = n(526665),
    o = n(342386);
let c = (0, l.m7)(s.n.LEGACY_SETTINGS_SIDEBAR_ITEM, {
    useTitle: () => "Open Legacy Settings",
    icon: i.ewm,
    onClick: () => {
        (0, o.default)(), r.Z.open();
    },
    usePredicate: () => (0, a.NT)("LegacySettingsSidebarItem") || u.Z.isDeveloper,
    buildLayout: () => [],
});
