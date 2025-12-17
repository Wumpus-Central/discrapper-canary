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
    f = n(145260),
    m = n(821864),
    b = n(905753),
    p = n(981631),
    h = n(388032);
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
            isFetching: m,
            errors: b,
        } = (0, l.cj)([f.default], () => ({
            editedIntegration: f.default.editedIntegration,
            editedWebhook: f.default.editedWebhook,
            errors: f.default.getErrors(),
            integrations: f.default.integrations,
            isFetching: f.default.isFetching(),
            section: f.default.getSection(),
            sectionId: f.default.getSectionId(),
            webhooks: f.default.webhooks,
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
              isFetchingWebhooks: m,
              hasChanges: f.default.hasChanges,
              errors: b,
              refToScroller: t,
          });
}
function j() {
    var e;
    let { guild: t, submitting: n } = (0, l.cj)([g.Z], () => ({
            guild: g.Z.getGuild(),
            submitting: g.Z.isSubmitting(),
        })),
        c = (0, l.e7)([d.Z], () => d.Z.can(p.Plq.KICK_MEMBERS, t)),
        x = !1,
        j = null;
    return (
        c ||
            (null == (e = f.default.editedIntegration) ? void 0 : e.expire_behavior) !== i.l.KICK ||
            ((x = !0),
            (j = (0, r.jsx)(s.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                children: h.intl.string(h.t["mrO/ZQ"]),
            }))),
        (0, r.jsx)(a.Z, {
            submitting: n,
            disabled: x,
            errorMessage: j,
            onReset: () => {
                o.Z.init(), m.Ui(), null != t && u.Z.init(t.id);
            },
            onSave: () => {
                if (null != t) {
                    if (null != f.default.editedIntegration) o.Z.saveIntegration(t.id, f.default.editedIntegration);
                    else if (null != f.default.editedWebhook) o.Z.saveWebhook(t.id, f.default.editedWebhook);
                    else if (null != f.default.editedCommandId) {
                        let e = f.default.getSectionId(),
                            n = b.Z.getEditedApplication();
                        if (null == e || null == n) return;
                        o.Z.saveApplicationPermissions(e, t.id, Object.values(n));
                    }
                    g.Z.hasChanges() && u.Z.saveGuild(t.id, { features: t.features });
                }
            },
        })
    );
}
