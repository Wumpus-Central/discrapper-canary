n.d(t, { default: () => d });
var i = n(627968),
    a = n(64700),
    l = n(397927),
    c = n(442433),
    o = n(486503),
    s = n(253932),
    r = n(957565),
    u = n(985018);
function d(e) {
    let { imageUrl: t, onSelect: n } = e,
        d = s.Q_.useSetting(),
        { tidaWebformEnabled: p } = o.A.useExperiment(
            { location: "GuildEventImageContextMenu" },
            { autoTrackExposure: !1 },
        ),
        g = a.useCallback(() => {
            (0, r.C)(t);
        }, [t]);
    return r.p5 && d && p
        ? (0, i.jsx)(l.W1t, {
              "data-menu-migrated": !0,
              navId: "guild-event-image-context",
              onClose: c.Z_,
              onSelect: n,
              "aria-label": u.intl.string(u.t.Zow2V5),
              children: (0, i.jsx)(l.rXV, {
                  children: (0, i.jsx)(l.Drp, {
                      id: "copy-image-link",
                      label: u.intl.string(u.t["8xHmxo"]),
                      action: g,
                      icon: l.qYV,
                      leadingAccessory: { type: "icon", icon: l.qYV },
                  }),
              }),
          })
        : null;
}
