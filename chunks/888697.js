var l = n(620632),
    i = n(522435),
    s = n(652215);
n.d(
    t,
    {},
    {
        B$: async function (e, t) {
            await l.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { hash: t }, rejectWithError: !0 });
        },
        Hd: async function (e, t) {
            await l.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { url: (0, i.K7)(t) }, rejectWithError: !0 });
        },
        e2: async function (e) {
            await l.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { url: "" }, rejectWithError: !0 });
        },
    },
);
