i.d(t, { Q: () => r, _: () => a });
var n = i(652215),
    s = i(790782),
    l = i(985018);
let a = (e) => [
        { label: l.intl.string(l.t["HVah/3"]), value: n.orn.ALL_MESSAGES },
        { label: l.intl.string(l.t["tu+ZWJ"]), value: n.orn.ONLY_MENTIONS },
        { label: l.intl.string(l.t.X4wWUi), value: n.orn.NO_MESSAGES },
    ],
    r = (e) => [
        { label: l.intl.string(l.t["HVah/3"]), value: s.e.ALL_MESSAGES },
        {
            value: s.e.ONLY_MENTIONS,
            label: l.intl.string(l.t["tu+ZWJ"]),
            disabled: e?.notificationSetting === n.orn.ALL_MESSAGES,
        },
    ];
