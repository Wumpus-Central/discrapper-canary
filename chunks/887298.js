var l = t(477900),
    i = t(165862),
    s = t(477782),
    r = t(625903),
    o = t(793574),
    a = t(253932),
    c = t(780964),
    u = t(766075),
    d = t(734066),
    x = t(489496),
    g = t(683825),
    p = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { closePopout: n } = e,
                t = a.Q$.useSetting(),
                h = (0, d.sw)();
            return (0, l.jsxs)(i.W, {
                navId: "clips-in-call-voice",
                "aria-label": p.intl.string(g.default["IxZyA+"]),
                onClose: n,
                onSelect: void 0,
                children: [
                    (0, l.jsx)(s.rX, {
                        children: (0, l.jsx)(s.fP, {
                            id: "clips-in-call-voice-recording",
                            label: p.intl.string(g.default["IxZyA+"]),
                            subtext: p.intl.string(g.default.GjNXmw),
                            checked: t,
                            action: (e) =>
                                (0, x.eQ)({
                                    allowVoiceRecording: e,
                                    analyticsLocation: o.A.CLIPS_EA_IN_CALL_CLIPS_CHIP,
                                }),
                        }),
                    }),
                    h &&
                        (0, l.jsx)(s.rX, {
                            children: (0, l.jsx)(s.Dr, {
                                id: "clips-in-call-settings",
                                label: p.intl.string(p.t.J1hsY2),
                                iconLeft: r.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                                action: () => (0, u.openUserSettings)(c.X.CLIPS_PANEL),
                            }),
                        }),
                ],
            });
        },
    },
);
