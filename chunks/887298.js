var l = t(477900),
    i = t(165862),
    s = t(477782),
    r = t(625903),
    o = t(253932),
    a = t(780964),
    c = t(766075),
    u = t(734066),
    d = t(489496),
    x = t(683825),
    g = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { closePopout: n } = e,
                t = o.Q$.useSetting(),
                h = (0, u.sw)();
            return (0, l.jsxs)(i.W, {
                navId: "clips-in-call-voice",
                "aria-label": g.intl.string(x.default["IxZyA+"]),
                onClose: n,
                onSelect: void 0,
                children: [
                    (0, l.jsx)(s.rX, {
                        children: (0, l.jsx)(s.fP, {
                            id: "clips-in-call-voice-recording",
                            label: g.intl.string(x.default["IxZyA+"]),
                            subtext: g.intl.string(x.default.GjNXmw),
                            checked: t,
                            action: (e) => (0, d.eQ)({ allowVoiceRecording: e }),
                        }),
                    }),
                    h &&
                        (0, l.jsx)(s.rX, {
                            children: (0, l.jsx)(s.Dr, {
                                id: "clips-in-call-settings",
                                label: g.intl.string(g.t.J1hsY2),
                                iconLeft: r.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                                action: () => (0, c.openUserSettings)(a.X.CLIPS_PANEL),
                            }),
                        }),
                ],
            });
        },
    },
);
