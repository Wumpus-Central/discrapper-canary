n.d(t, { R: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(843991),
    a = n(442837),
    s = n(796027),
    o = n(434404),
    c = n(999382),
    d = n(203377);
function u() {
    let { guild: e, originalGuild: t, submitting: n, errors: u } = (0, a.cj)([c.Z], () => c.Z.getProps()),
        g = i.useMemo(() => (0, d.LG)(u), [u]),
        m = i.useCallback(async () => {
            if (null == e) return Promise.resolve();
            let n = {
                systemChannelFlags: e.systemChannelFlags,
                systemChannelId: e.systemChannelId,
                afkChannelId: e.afkChannelId,
                afkTimeout: e.afkTimeout,
                defaultMessageNotifications: e.defaultMessageNotifications,
            };
            if (
                ((0, l.O)(new Set(e.features), new Set(t.features)) || (n.features = e.features),
                c.Z.hasChanges() && (await o.Z.saveGuild(e.id, n)),
                c.Z.widgetHasChanges())
            ) {
                let { enabled: t, channelId: n } = c.Z.getWidget();
                await o.Z.updateEmbed(e.id, t, n);
            }
            return Promise.resolve();
        }, [e, t]),
        p = i.useCallback(() => {
            null != e && o.Z.init(e.id);
        }, [e]);
    return (0, r.jsx)(s.Z, {
        submitting: n,
        errorMessage: g,
        onSave: m,
        onReset: p,
    });
}
