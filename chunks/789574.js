n.d(t, {
    Z: () => x,
    j: () => j,
});
var r = n(54381);
n(473749);
var i = n(13107),
    l = n(442837),
    a = n(796027),
    s = n(481060),
    o = n(139387),
    c = n(490655),
    d = n(496675),
    u = n(434404),
    g = n(999382),
    m = n(145260),
    p = n(821864),
    f = n(905753),
    h = n(981631),
    b = n(388032);
function x(e) {
    let { refToScroller: t } = e,
        n = (0, l.e7)([g.Z], () => g.Z.getGuild()),
        {
            section: i,
            sectionId: a,
            integrations: s,
            editedIntegration: o,
            webhooks: d,
            editedWebhook: u,
            isFetching: p,
            errors: f,
        } = (0, l.cj)([m.default], () => ({
            editedIntegration: m.default.editedIntegration,
            editedWebhook: m.default.editedWebhook,
            errors: m.default.getErrors(),
            integrations: m.default.integrations,
            isFetching: m.default.isFetching(),
            section: m.default.getSection(),
            sectionId: m.default.getSectionId(),
            webhooks: m.default.webhooks,
        }));
    return null == n
        ? null
        : (0, r.jsx)(c.Z, {
              guild: n,
              section: i,
              sectionId: a,
              integrations: s,
              webhooks: d,
              editedIntegration: o,
              editedWebhook: u,
              isFetchingWebhooks: p,
              hasChanges: m.default.hasChanges,
              errors: f,
              refToScroller: t,
          });
}
function j() {
    var e;
    let { guild: t, submitting: n } = (0, l.cj)([g.Z], () => ({
            guild: g.Z.getGuild(),
            submitting: g.Z.isSubmitting(),
        })),
        c = (0, l.e7)([d.Z], () => d.Z.can(h.Plq.KICK_MEMBERS, t)),
        x = !1,
        j = null;
    return (
        c ||
            (null == (e = m.default.editedIntegration) ? void 0 : e.expire_behavior) !== i.l.KICK ||
            ((x = !0),
            (j = (0, r.jsx)(s.Text, {
                color: "text-danger",
                variant: "text-md/normal",
                children: b.intl.string(b.t["mrO/ZQ"]),
            }))),
        (0, r.jsx)(a.Z, {
            submitting: n,
            disabled: x,
            errorMessage: j,
            onReset: () => {
                o.Z.init(), p.Ui(), null != t && u.Z.init(t.id);
            },
            onSave: () => {
                if (null != t) {
                    if (null != m.default.editedIntegration) o.Z.saveIntegration(t.id, m.default.editedIntegration);
                    else if (null != m.default.editedWebhook) o.Z.saveWebhook(t.id, m.default.editedWebhook);
                    else if (null != m.default.editedCommandId) {
                        let e = m.default.getSectionId(),
                            n = f.Z.getEditedApplication();
                        if (null == e || null == n) return;
                        o.Z.saveApplicationPermissions(e, t.id, Object.values(n));
                    }
                    g.Z.hasChanges() && u.Z.saveGuild(t.id, { features: t.features });
                }
            },
        })
    );
}
