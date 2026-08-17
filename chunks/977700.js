e.d(i, { default: () => g });
var t = e(477900),
    a = e(582128),
    o = e(980707),
    l = e(477782),
    c = e(173936),
    s = e(442433),
    r = e(486503),
    d = e(885386),
    u = e(957565),
    p = e(375708);
function g(n) {
    let { splashUrl: i, onSelect: e } = n,
        g = d.Q_.useSetting(),
        { tidaWebformEnabled: h } = r.A.useExperiment(
            { location: "GuildOnboardingSplashContextMenu" },
            { autoTrackExposure: !1 },
        ),
        k = a.useCallback(() => {
            (0, u.C)(i);
        }, [i]);
    return u.p5 && g && h
        ? (0, t.jsx)(o.W, {
              "data-menu-migrated": !0,
              navId: "guild-onboarding-splash-context",
              onClose: s.Z_,
              onSelect: e,
              "aria-label": p.intl.string(p.t.Zow2V5),
              children: (0, t.jsx)(l.rX, {
                  children: (0, t.jsx)(l.Dr, {
                      id: "copy-image-link",
                      label: p.intl.string(p.t["8xHmxo"]),
                      action: k,
                      icon: c.LinkIcon,
                      leadingAccessory: { type: "icon", icon: c.LinkIcon },
                  }),
              }),
          })
        : null;
}
