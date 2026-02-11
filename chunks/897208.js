i.d(t, { p: () => E });
var n = i(311907),
    l = i(55619),
    s = i(77729),
    r = i(419954),
    a = i(351906),
    u = i(780964),
    o = i(985018);
let d = (0, r.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => o.intl.string(o.t["yR/d2T"]),
        useSubtitle: () => o.intl.string(o.t.RiIiPw),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { hidePersonalInformation: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ hidePersonalInformation: e }),
    }),
    _ = (0, r.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => o.intl.string(o.t.uWBOri),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { hideInstantInvites: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ hideInstantInvites: e }),
    }),
    T = (0, r.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => o.intl.string(o.t.OrqYDP),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { disableSounds: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ disableSounds: e }),
    }),
    A = (0, r.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => o.intl.string(o.t.sUAbLd),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { disableNotifications: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ disableNotifications: e }),
    }),
    S = (0, r.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => o.intl.string(o.t["iA81+a"]),
        useSubtitle: () => o.intl.string(o.t.P4vj0h),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { enableContentProtection: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ enableContentProtection: e }),
        usePredicate: () => s.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    E = (0, r.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => o.intl.string(o.t.UtW8R6),
        buildLayout: () => [d, _, T, A, S],
    });
