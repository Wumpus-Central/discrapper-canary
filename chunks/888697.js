n.d(t, { B$: () => r, Hd: () => a, e2: () => o });
var i = n(562465),
    l = n(522435),
    s = n(652215);
async function a(e, t) {
    await i.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { url: (0, l.K7)(t) }, rejectWithError: !0 });
}
async function r(e, t) {
    await i.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { hash: t }, rejectWithError: !0 });
}
async function o(e) {
    await i.Bo.post({ url: s.Rsh.CHANNEL_VOICE_HANGOUT(e), body: { url: "" }, rejectWithError: !0 });
}
