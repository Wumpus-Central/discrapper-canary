n.d(t, { p: () => h });
var i = n(311907),
    s = n(55619),
    l = n(77729),
    r = n(419954),
    a = n(351906),
    o = n(780964),
    d = n(589387),
    c = n(985018);
let u = (0, r.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => c.intl.string(c.t.LSBUGR),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { hidePersonalInformation: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hidePersonalInformation: e }),
    }),
    m = (0, r.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => c.intl.string(c.t.uWBOri),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { hideInstantInvites: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hideInstantInvites: e }),
    }),
    g = (0, r.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => c.intl.string(c.t.OrqYDP),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { disableSounds: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableSounds: e }),
    }),
    _ = (0, r.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => c.intl.string(c.t.sUAbLd),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { disableNotifications: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableNotifications: e }),
    }),
    x = (0, r.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => c.intl.string(c.t["iA81+a"]),
        useSubtitle: () => c.intl.string(c.t.P4vj0h),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { enableContentProtection: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ enableContentProtection: e }),
        usePredicate: () => l.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    h = (0, r.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => c.intl.string(c.t.xYhOEh),
        buildLayout: () => [u, m, g, _, x, d.h],
    });
