i.d(e, { p: () => g });
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
                let { hidePersonalInformation: t } = a.A.getSettings();
                return t;
            }),
        setValue: (t) => l.A.update({ hidePersonalInformation: t }),
    }),
    T = (0, r.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => o.intl.string(o.t.uWBOri),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { hideInstantInvites: t } = a.A.getSettings();
                return t;
            }),
        setValue: (t) => l.A.update({ hideInstantInvites: t }),
    }),
    A = (0, r.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => o.intl.string(o.t.OrqYDP),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { disableSounds: t } = a.A.getSettings();
                return t;
            }),
        setValue: (t) => l.A.update({ disableSounds: t }),
    }),
    S = (0, r.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => o.intl.string(o.t.sUAbLd),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { disableNotifications: t } = a.A.getSettings();
                return t;
            }),
        setValue: (t) => l.A.update({ disableNotifications: t }),
    }),
    E = (0, r.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => o.intl.string(o.t["iA81+a"]),
        useSubtitle: () => o.intl.string(o.t.P4vj0h),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { enableContentProtection: t } = a.A.getSettings();
                return t;
            }),
        setValue: (t) => l.A.update({ enableContentProtection: t }),
        usePredicate: () => s.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    g = (0, r.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        useTitle: () => o.intl.string(o.t.UtW8R6),
        buildLayout: () => [d, T, A, S, E],
    });
