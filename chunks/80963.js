t.d(n, { Z: () => u });
var a = t(54381),
    o = t(473749),
    i = t(442837),
    r = t(325749),
    c = t(48131),
    l = t(591472),
    d = t(828838);
function u(e) {
    let { applicationId: n } = e,
        t = (0, i.e7)([l.Z], () => l.Z.getConnectedFrame()),
        u = o.useCallback(async () => {
            await c.Z.refreshProxyTicket({ applicationId: n }), d.Z.popInFrame();
        }, [n]);
    return (0, a.jsx)(r.d, {
        hasActivity: null != t,
        applicationId: n,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: u,
        channelId: void 0,
    });
}
