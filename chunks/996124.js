n.d(t, { Q: () => r, _: () => a });
var i = n(652215),
    s = n(790782),
    l = n(985018);
let a = (e) => [
        { label: l.intl.string(l.t["HVah/3"]), value: i.orn.ALL_MESSAGES },
        { label: l.intl.string(l.t["tu+ZWJ"]), value: i.orn.ONLY_MENTIONS },
        { label: l.intl.string(l.t.X4wWUi), value: i.orn.NO_MESSAGES },
    ],
    r = (e) => [
        { label: l.intl.string(l.t["HVah/3"]), value: s.e.ALL_MESSAGES },
        {
            value: s.e.ONLY_MENTIONS,
            label: l.intl.string(l.t["tu+ZWJ"]),
            disabled: e?.notificationSetting === i.orn.ALL_MESSAGES,
        },
    ];
