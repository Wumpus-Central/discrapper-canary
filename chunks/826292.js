n.d(t, {
    A: () => h,
    K: () => j,
});
var r = n(627968);
n(64700);
var i = n(788373),
    l = n(311907),
    s = n(36525),
    a = n(397927),
    c = n(282956),
    o = n(875264),
    d = n(576705),
    u = n(997509),
    f = n(555337),
    g = n(53656),
    b = n(542580),
    m = n(803378),
    p = n(652215),
    x = n(985018);

function h(e) {
    let { refToScroller: t } = e,
        n = (0, l.bG)([f.A], () => f.A.getGuild()),
        {
            section: i,
            sectionId: s,
            integrations: a,
            editedIntegration: c,
            webhooks: d,
            editedWebhook: u,
            isFetching: b,
            errors: m,
        } = (0, l.cf)([g.default], () => ({
            editedIntegration: g.default.editedIntegration,
            editedWebhook: g.default.editedWebhook,
            errors: g.default.getErrors(),
            integrations: g.default.integrations,
            isFetching: g.default.isFetching(),
            section: g.default.getSection(),
            sectionId: g.default.getSectionId(),
            webhooks: g.default.webhooks,
        }));
    return null == n
        ? null
        : (0, r.jsx)(o.A, {
              guild: n,
              section: i,
              sectionId: s,
              integrations: a,
              webhooks: d,
              editedIntegration: c,
              editedWebhook: u,
              isFetchingWebhooks: b,
              hasChanges: g.default.hasChanges,
              errors: m,
              refToScroller: t,
          });
}

function j() {
    var e;
    let { guild: t, submitting: n } = (0, l.cf)([f.A], () => ({
            guild: f.A.getGuild(),
            submitting: f.A.isSubmitting(),
        })),
        o = (0, l.bG)([d.A], () => d.A.can(p.xBc.KICK_MEMBERS, t)),
        h = !1,
        j = null;
    return (
        o ||
            (null == (e = g.default.editedIntegration) ? void 0 : e.expire_behavior) !== i.F.KICK ||
            ((h = !0),
            (j = (0, r.jsx)(a.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                children: x.intl.string(x.t["mrO/ZQ"]),
            }))),
        (0, r.jsx)(s.A, {
            submitting: n,
            disabled: h,
            errorMessage: j,
            onReset: () => {
                c.A.init(), b.C8(), null != t && u.A.init(t.id);
            },
            onSave: () => {
                if (null != t) {
                    if (null != g.default.editedIntegration) c.A.saveIntegration(t.id, g.default.editedIntegration);
                    else if (null != g.default.editedWebhook) c.A.saveWebhook(t.id, g.default.editedWebhook);
                    else if (null != g.default.editedCommandId) {
                        let e = g.default.getSectionId(),
                            n = m.A.getEditedApplication();
                        if (null == e || null == n) return;
                        c.A.saveApplicationPermissions(e, t.id, Object.values(n));
                    }
                    f.A.hasChanges() &&
                        u.A.saveGuild(t.id, {
                            features: t.features,
                        });
                }
            },
        })
    );
}
