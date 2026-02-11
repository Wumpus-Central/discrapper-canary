i.d(t, { p: () => c });
var n = i(311907),
    l = i(55619),
    s = i(77729),
    r = i(419954),
    a = i(351906),
    u = i(780964),
    o = i(358776),
    d = i(985018);
let _ = (0, r.zD)(u.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => ((0, o.bp)("StreamerModeOptions") ? d.intl.string(d.t.LSBUGR) : d.intl.string(d.t["yR/d2T"])),
        useSubtitle: () => ((0, o.bp)("StreamerModeOptions") ? "" : d.intl.string(d.t.RiIiPw)),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { hidePersonalInformation: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ hidePersonalInformation: e }),
    }),
    T = (0, r.zD)(u.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => d.intl.string(d.t.uWBOri),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { hideInstantInvites: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ hideInstantInvites: e }),
    }),
    A = (0, r.zD)(u.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => d.intl.string(d.t.OrqYDP),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { disableSounds: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ disableSounds: e }),
    }),
    S = (0, r.zD)(u.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.sUAbLd),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { disableNotifications: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ disableNotifications: e }),
    }),
    E = (0, r.zD)(u.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => d.intl.string(d.t["iA81+a"]),
        useSubtitle: () => d.intl.string(d.t.P4vj0h),
        useValue: () =>
            (0, n.bG)([a.A], () => {
                let { enableContentProtection: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => l.A.update({ enableContentProtection: e }),
        usePredicate: () => s.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    c = (0, r.FW)(u.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => ((0, o.bp)("StreamerModeOptions") ? d.intl.string(d.t.xYhOEh) : d.intl.string(d.t.UtW8R6)),
        buildLayout: () => [_, T, A, S, E],
    });
