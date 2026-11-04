t.d(e, { A: () => m });
var i = t(477900),
    l = t(855986),
    a = t(477782),
    r = t(582128),
    d = t(192308),
    s = t(308528),
    u = t(267102),
    c = t(964404),
    o = t(652215),
    b = t(46653),
    A = t(734057),
    k = t(994500),
    p = t(309010),
    f = t(792996);
function m(n) {
    let { user: e, context: m } = n,
        h = (0, l.bG)([b.default], () => b.default.getId() === e.id),
        C = (0, l.bG)([k.A], () => k.A.isBlocked(e.id)),
        v = (0, l.bG)([p.Ay, A.A], () => p.Ay.getVoiceChannelId() === A.A.getDMFromUserId(e.id)),
        { runVoiceCallAction: y } = (function (n) {
            let { userId: e, onClose: l } = n,
                a = (0, u.aL)(),
                b = r.useCallback(() => {
                    (s.A.openPrivateChannel({ recipientIds: e, joinCall: !0 }),
                        l?.(),
                        a.dispatch(o.jej.POPOUT_CLOSE),
                        (0, d.s7)());
                }, [e, a, l]),
                A = r.useCallback(() => {
                    (0, d.mM)(async () => {
                        let { default: n } = await t.e(19106).then(t.bind(t, 502054));
                        return (e) => (0, i.jsx)(n, { onSubmit: b, ...e });
                    });
                }, [b]),
                k = r.useCallback(() => {
                    c.Ay.disableCallUserConfirmationPrompt ? b() : A();
                }, [A, b]);
            return { startCall: b, runVoiceCallAction: k };
        })({ userId: e.id });
    return h || m === o.BRT.POPOUT || v || e.bot || e.isProvisional
        ? null
        : (0, i.jsx)(a.Dr, { id: "call", label: f.intl.string(f.t["ZeP+kK"]), action: y, disabled: C });
}
