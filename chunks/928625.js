i.d(n, { default: () => g });
var t = i(477900),
    a = i(582128),
    c = i(980707),
    o = i(477782),
    l = i(173936),
    s = i(442433),
    r = i(486503),
    u = i(885386),
    d = i(957565),
    p = i(375708);
function g(e) {
    let { imageUrl: n, onSelect: i } = e,
        g = u.Q_.useSetting(),
        { tidaWebformEnabled: k } = r.A.useExperiment(
            { location: "GuildEventImageContextMenu" },
            { autoTrackExposure: !1 },
        ),
        x = a.useCallback(() => {
            (0, d.C)(n);
        }, [n]);
    return d.p5 && g && k
        ? (0, t.jsx)(c.W, {
              "data-menu-migrated": !0,
              navId: "guild-event-image-context",
              onClose: s.Z_,
              onSelect: i,
              "aria-label": p.intl.string(p.t.Zow2V5),
              children: (0, t.jsx)(o.rX, {
                  children: (0, t.jsx)(o.Dr, {
                      id: "copy-image-link",
                      label: p.intl.string(p.t["8xHmxo"]),
                      action: x,
                      icon: l.LinkIcon,
                      leadingAccessory: { type: "icon", icon: l.LinkIcon },
                  }),
              }),
          })
        : null;
}
