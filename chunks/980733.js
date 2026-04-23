n.d(t, { p: () => h });
var i = n(311907),
    s = n(55619),
    l = n(77729),
    a = n(419954),
    r = n(351906),
    o = n(780964),
    d = n(589387),
    u = n(985018);
let c = (0, a.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => u.intl.string(u.t.LSBUGR),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { hidePersonalInformation: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hidePersonalInformation: e }),
    }),
    g = (0, a.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => u.intl.string(u.t.uWBOri),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { hideInstantInvites: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hideInstantInvites: e }),
    }),
    m = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => u.intl.string(u.t.OrqYDP),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { disableSounds: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableSounds: e }),
    }),
    _ = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => u.intl.string(u.t.sUAbLd),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { disableNotifications: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableNotifications: e }),
    }),
    A = (0, a.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => u.intl.string(u.t["iA81+a"]),
        useSubtitle: () => u.intl.string(u.t.P4vj0h),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { enableContentProtection: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ enableContentProtection: e }),
        usePredicate: () => l.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    h = (0, a.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => u.intl.string(u.t.xYhOEh),
        buildLayout: () => [c, g, m, _, A, d.h],
    });
