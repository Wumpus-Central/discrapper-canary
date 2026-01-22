i.d(e, {
    p: () => _,
});
var n = i(311907),
    l = i(55619),
    s = i(77729),
    r = i(419954),
    u = i(351906),
    a = i(780964),
    o = i(985018);
let T = (0, r.zD)(a.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => o.intl.string(o.t["yR/d2T"]),
        useSubtitle: () => o.intl.string(o.t.RiIiPw),
        useValue: () =>
            (0, n.bG)([u.A], () => {
                let { hidePersonalInformation: t } = u.A.getSettings();
                return t;
            }),
        setValue: (t) =>
            l.A.update({
                hidePersonalInformation: t,
            }),
    }),
    A = (0, r.zD)(a.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => o.intl.string(o.t.uWBOri),
        useValue: () =>
            (0, n.bG)([u.A], () => {
                let { hideInstantInvites: t } = u.A.getSettings();
                return t;
            }),
        setValue: (t) =>
            l.A.update({
                hideInstantInvites: t,
            }),
    }),
    S = (0, r.zD)(a.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => o.intl.string(o.t.OrqYDP),
        useValue: () =>
            (0, n.bG)([u.A], () => {
                let { disableSounds: t } = u.A.getSettings();
                return t;
            }),
        setValue: (t) =>
            l.A.update({
                disableSounds: t,
            }),
    }),
    E = (0, r.zD)(a.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => o.intl.string(o.t.sUAbLd),
        useValue: () =>
            (0, n.bG)([u.A], () => {
                let { disableNotifications: t } = u.A.getSettings();
                return t;
            }),
        setValue: (t) =>
            l.A.update({
                disableNotifications: t,
            }),
    }),
    d = (0, r.zD)(a.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => o.intl.string(o.t["iA81+a"]),
        useSubtitle: () => o.intl.string(o.t.P4vj0h),
        useValue: () =>
            (0, n.bG)([u.A], () => {
                let { enableContentProtection: t } = u.A.getSettings();
                return t;
            }),
        setValue: (t) =>
            l.A.update({
                enableContentProtection: t,
            }),
        usePredicate: () => {
            var t, e, i;
            return (
                null !=
                    (t =
                        null === s.A ||
                        void 0 === s.A ||
                        null == (i = s.A.window) ||
                        null == (e = i.supportsContentProtection)
                            ? void 0
                            : e.call(i)) && t
            );
        },
    }),
    _ = (0, r.FW)(a.X.STREAMER_MODE_OPTIONS_LIST, {
        useTitle: () => o.intl.string(o.t.UtW8R6),
        variant: "separators",
        buildLayout: () => [T, A, S, E, d],
    });
