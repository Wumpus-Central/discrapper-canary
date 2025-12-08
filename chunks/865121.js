n.d(e, { T: () => c });
var i = n(657707),
    l = n(230711),
    s = n(509613),
    r = n(906467),
    u = n(313789),
    a = n(526665),
    o = n(342386);
let c = (0, s.m7)(u.n.LEGACY_SETTINGS_SIDEBAR_ITEM, {
    useTitle: () => "Open Legacy Settings",
    icon: i.ewm,
    onClick: () => {
        (0, o.default)(), l.Z.open();
    },
    usePredicate: () => (0, a.NT)("LegacySettingsSidebarItem") || r.Z.isDeveloper,
    buildLayout: () => [],
});
