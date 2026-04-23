i.d(e, { default: () => g });
var t = i(627968),
    a = i(64700),
    l = i(550079),
    o = i(477782),
    s = i(173936),
    c = i(442433),
    r = i(486503),
    d = i(253932),
    u = i(957565),
    p = i(985018);
function g(n) {
    let { splashUrl: e, onSelect: i } = n,
        g = d.Q_.useSetting(),
        { tidaWebformEnabled: h } = r.A.useExperiment(
            { location: "GuildOnboardingSplashContextMenu" },
            { autoTrackExposure: !1 },
        ),
        x = a.useCallback(() => {
            (0, u.C)(e);
        }, [e]);
    return u.p5 && g && h
        ? (0, t.jsx)(l.W, {
              "data-menu-migrated": !0,
              navId: "guild-onboarding-splash-context",
              onClose: c.Z_,
              onSelect: i,
              "aria-label": p.intl.string(p.t.Zow2V5),
              children: (0, t.jsx)(o.rX, {
                  children: (0, t.jsx)(o.Dr, {
                      id: "copy-image-link",
                      label: p.intl.string(p.t["8xHmxo"]),
                      action: x,
                      icon: s.q,
                      leadingAccessory: { type: "icon", icon: s.q },
                  }),
              }),
          })
        : null;
}
