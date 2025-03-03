n.d(t, { R: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(852860),
    l = n(823379),
    o = n(434404),
    c = n(999382),
    d = n(203377);
function u() {
    let { guild: e, originalGuild: t, submitting: n, errors: u } = (0, s.cj)([c.Z], () => c.Z.getProps()),
        m = i.useMemo(() => (0, d.LG)(u), [u]),
        g = i.useCallback(async () => {
            if (null == e) return Promise.resolve();
            let n = {
                systemChannelFlags: e.systemChannelFlags,
                systemChannelId: e.systemChannelId,
                afkChannelId: e.afkChannelId,
                afkTimeout: e.afkTimeout,
                defaultMessageNotifications: e.defaultMessageNotifications
            };
            if (((0, l.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), c.Z.hasChanges() && (await o.Z.saveGuild(e.id, n)), c.Z.widgetHasChanges())) {
                let { enabled: t, channelId: n } = c.Z.getWidget();
                await o.Z.updateEmbed(e.id, t, n);
            }
            return Promise.resolve();
        }, [e, t]),
        p = i.useCallback(() => {
            null != e && o.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(a.Z, {
        submitting: n,
        errorMessage: m,
        onSave: g,
        onReset: p
    });
}
