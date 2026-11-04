var i = n(620632),
    l = n(522435),
    s = n(652215);
n.d(
    t,
    {},
    {
        B$: async function (e, t) {
            await i.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { hash: t }, rejectWithError: !0 });
        },
        Hd: async function (e, t) {
            await i.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { url: (0, l.K7)(t) }, rejectWithError: !0 });
        },
        e2: async function (e) {
            await i.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { url: "" }, rejectWithError: !0 });
        },
    },
);
