var l = t(477900),
    s = t(165862),
    i = t(477782),
    r = t(625903),
    o = t(253932),
    a = t(780964),
    c = t(766075),
    u = t(489496),
    d = t(683825),
    x = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { closePopout: n } = e,
                t = o.Q$.useSetting(),
                g = x.intl.string(d.default.JMVuvY);
            return (0, l.jsxs)(s.W, {
                navId: "clips-in-call-voice",
                "aria-label": g,
                onClose: n,
                onSelect: void 0,
                children: [
                    (0, l.jsx)(i.rX, {
                        label: g,
                        children: (0, l.jsx)(i.fP, {
                            id: "clips-in-call-voice-recording",
                            label: x.intl.string(d.default["IxZyA+"]),
                            subtext: x.intl.string(d.default.GjNXmw),
                            checked: t,
                            action: (e) => (0, u.eQ)({ allowVoiceRecording: e }),
                        }),
                    }),
                    (0, l.jsx)(i.rX, {
                        children: (0, l.jsx)(i.Dr, {
                            id: "clips-in-call-settings",
                            label: x.intl.string(x.t.J1hsY2),
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
