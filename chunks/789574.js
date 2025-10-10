n.d(t, {
    Z: () => m,
    j: () => p,
});
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(139387),
    s = n(852860),
    a = n(490655),
    o = n(434404),
    c = n(999382),
    d = n(145260),
    u = n(821864),
    g = n(905753);
function m(e) {
    let { refToScroller: t } = e,
        n = (0, i.e7)([c.Z], () => c.Z.getGuild()),
        {
            section: l,
            sectionId: s,
            integrations: o,
            editedIntegration: u,
            webhooks: g,
            editedWebhook: m,
            isFetching: p,
            errors: f,
        } = (0, i.cj)([d.default], () => ({
            editedIntegration: d.default.editedIntegration,
            editedWebhook: d.default.editedWebhook,
            errors: d.default.getErrors(),
            integrations: d.default.integrations,
            isFetching: d.default.isFetching(),
            section: d.default.getSection(),
            sectionId: d.default.getSectionId(),
            webhooks: d.default.webhooks,
        }));
    return null == n
        ? null
        : (0, r.jsx)(a.Z, {
              guild: n,
              section: l,
              sectionId: s,
              integrations: o,
              webhooks: g,
              editedIntegration: u,
              editedWebhook: m,
              isFetchingWebhooks: p,
              hasChanges: d.default.hasChanges,
              errors: f,
              refToScroller: t,
          });
}
function p() {
    let { guild: e, submitting: t } = (0, i.cj)([c.Z], () => ({
        guild: c.Z.getGuild(),
        submitting: c.Z.isSubmitting(),
    }));
    return (0, r.jsx)(s.Z, {
        submitting: t,
        onReset: () => {
            l.Z.init(), u.Ui(), null != e && o.Z.init(e.id);
        },
        onSave: () => {
            if (null != e) {
                if (null != d.default.editedIntegration) l.Z.saveIntegration(e.id, d.default.editedIntegration);
                else if (null != d.default.editedWebhook) l.Z.saveWebhook(e.id, d.default.editedWebhook);
                else if (null != d.default.editedCommandId) {
                    let t = d.default.getSectionId(),
                        n = g.Z.getEditedApplication();
                    if (null == t || null == n) return;
                    l.Z.saveApplicationPermissions(t, e.id, Object.values(n));
                }
                c.Z.hasChanges() && o.Z.saveGuild(e.id, { features: e.features });
            }
        },
    });
}
