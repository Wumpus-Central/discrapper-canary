t.d(n, { default: () => g });
var i = t(627968),
    a = t(64700),
    l = t(980707),
    c = t(477782),
    o = t(173936),
    s = t(442433),
    r = t(486503),
    u = t(885386),
    d = t(957565),
    p = t(375708);
function g(e) {
    let { imageUrl: n, onSelect: t } = e,
        g = u.Q_.useSetting(),
        { tidaWebformEnabled: x } = r.A.useExperiment(
            { location: "GuildEventImageContextMenu" },
            { autoTrackExposure: !1 },
        ),
        h = a.useCallback(() => {
            (0, d.C)(n);
        }, [n]);
    return d.p5 && g && x
        ? (0, i.jsx)(l.W, {
              "data-menu-migrated": !0,
              navId: "guild-event-image-context",
              onClose: s.Z_,
              onSelect: t,
              "aria-label": p.intl.string(p.t.Zow2V5),
              children: (0, i.jsx)(c.rX, {
                  children: (0, i.jsx)(c.Dr, {
                      id: "copy-image-link",
                      label: p.intl.string(p.t["8xHmxo"]),
                      action: h,
                      icon: o.q,
                      leadingAccessory: { type: "icon", icon: o.q },
                  }),
              }),
          })
        : null;
}
