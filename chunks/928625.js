i.d(t, { default: () => m });
var n = i(627968),
    a = i(64700),
    l = i(861672),
    d = i(477782),
    o = i(173936),
    r = i(442433),
    c = i(486503),
    s = i(253932),
    u = i(957565),
    b = i(985018);
function m(e) {
    let { imageUrl: t, onSelect: i } = e,
        m = s.Q_.useSetting(),
        { tidaWebformEnabled: p } = c.A.useExperiment(
            { location: "GuildEventImageContextMenu" },
            { autoTrackExposure: !1 },
        ),
        g = a.useCallback(() => {
            (0, u.C)(t);
        }, [t]);
    return u.p5 && m && p
        ? (0, n.jsx)(l.W, {
              "data-menu-migrated": !0,
              navId: "guild-event-image-context",
              onClose: r.Z_,
              onSelect: i,
              "aria-label": b.intl.string(b.t.Zow2V5),
              children: (0, n.jsx)(d.rX, {
                  children: (0, n.jsx)(d.Dr, {
                      id: "copy-image-link",
                      label: b.intl.string(b.t["8xHmxo"]),
                      action: g,
                      icon: o.q,
                      leadingAccessory: { type: "icon", icon: o.q },
                  }),
              }),
          })
        : null;
}
