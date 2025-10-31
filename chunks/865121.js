n.d(e, { Z: () => c });
var i = n(657707),
    l = n(230711),
    r = n(509613),
    u = n(906467),
    s = n(313789),
    a = n(526665),
    o = n(342386);
let c = (0, r.m7)(s.n.LEGACY_SETTINGS_SIDEBAR_ITEM, {
    useTitle: () => "Open Legacy Settings",
    icon: i.ewm,
    onClick: () => {
        (0, o.default)(), l.Z.open();
    },
    usePredicate: () => (0, a.NT)("LegacySettingsSidebarItem") || u.Z.isDeveloper,
    buildLayout: () => [],
});
