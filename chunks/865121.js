n.d(e, { Z: () => c });
var i = n(657707),
    r = n(230711),
    l = n(509613),
    s = n(906467),
    u = n(313789),
    a = n(526665),
    o = n(342386);
let c = (0, l.m7)(u.n.LEGACY_SETTINGS_SIDEBAR_ITEM, {
    useTitle: () => "Open Legacy Settings",
    icon: i.ewm,
    onClick: () => {
        (0, o.default)(), r.Z.open();
    },
    usePredicate: () => (0, a.NT)("LegacySettingsSidebarItem") || s.Z.isDeveloper,
    buildLayout: () => [],
});
