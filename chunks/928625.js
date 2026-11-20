var t = e(477900),
    a = e(582128),
    c = e(165862),
    l = e(477782),
    o = e(173936),
    s = e(442433),
    r = e(253932),
    d = e(957565),
    u = e(792996);
e.d(
    i,
    {},
    {
        default: function (n) {
            let { imageUrl: i, onSelect: e } = n,
                p = r.Q_.useSetting(),
                g = a.useCallback(() => {
                    (0, d.C)(i);
                }, [i]);
            return d.p5 && p
                ? (0, t.jsx)(c.W, {
                      "data-menu-migrated": !0,
                      navId: "guild-event-image-context",
                      onClose: s.Z_,
                      onSelect: e,
                      "aria-label": u.intl.string(u.t.Zow2V5),
                      children: (0, t.jsx)(l.rX, {
                          children: (0, t.jsx)(l.Dr, {
                              id: "copy-image-link",
                              label: u.intl.string(u.t["8xHmxo"]),
                              action: g,
                              icon: o.LinkIcon,
                              leadingAccessory: { type: "icon", icon: o.LinkIcon },
                          }),
                      }),
                  })
                : null;
        },
    },
);
