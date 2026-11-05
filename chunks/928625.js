var t = e(477900),
    a = e(582128),
    c = e(165862),
    l = e(477782),
    o = e(173936),
    s = e(442433),
    r = e(207560),
    d = e(253932),
    u = e(957565),
    p = e(792996);
e.d(
    i,
    {},
    {
        default: function (n) {
            let { imageUrl: i, onSelect: e } = n,
                g = d.Q_.useSetting(),
                k = (0, r.lF)(),
                h = a.useCallback(() => {
                    (0, u.C)(i);
                }, [i]);
            return u.p5 && g && k
                ? (0, t.jsx)(c.W, {
                      "data-menu-migrated": !0,
                      navId: "guild-event-image-context",
                      onClose: s.Z_,
                      onSelect: e,
                      "aria-label": p.intl.string(p.t.Zow2V5),
                      children: (0, t.jsx)(l.rX, {
                          children: (0, t.jsx)(l.Dr, {
                              id: "copy-image-link",
                              label: p.intl.string(p.t["8xHmxo"]),
                              action: h,
                              icon: o.LinkIcon,
                              leadingAccessory: { type: "icon", icon: o.LinkIcon },
                          }),
                      }),
                  })
                : null;
        },
    },
);
