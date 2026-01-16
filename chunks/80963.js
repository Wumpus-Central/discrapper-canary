t.d(n, { Z: () => d });
var a = t(54381),
    o = t(473749),
    r = t(442837),
    c = t(325749),
    i = t(591472),
    l = t(828838);
function d(e) {
    let { applicationId: n } = e,
        t = (0, r.e7)([i.Z], () => i.Z.getConnectedFrame()),
        d = o.useCallback(() => {
            l.Z.popInFrame();
        }, []);
    return (0, a.jsx)(c.d, {
        hasActivity: null != t,
        applicationId: n,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: d,
        channelId: void 0,
    });
}
