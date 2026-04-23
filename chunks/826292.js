n.d(t, { A: () => A, K: () => E });
var i = n(627968);
n(64700);
var l = n(788373),
    s = n(311907),
    r = n(36525),
    a = n(834730),
    o = n(282956),
    d = n(875264),
    c = n(576705),
    u = n(997509),
    m = n(555337),
    g = n(53656),
    h = n(542580),
    x = n(803378),
    _ = n(652215),
    p = n(985018);
function A(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([m.A], () => m.A.getGuild()),
        {
            section: l,
            sectionId: r,
            integrations: a,
            editedIntegration: o,
            webhooks: c,
            editedWebhook: u,
            isFetching: h,
            errors: x,
        } = (0, s.cf)([g.default], () => ({
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
        : (0, i.jsx)(d.A, {
              guild: n,
              section: l,
              sectionId: r,
              integrations: a,
              webhooks: c,
              editedIntegration: o,
              editedWebhook: u,
              isFetchingWebhooks: h,
              hasChanges: g.default.hasChanges,
              errors: x,
              refToScroller: t,
          });
}
function E() {
    let { guild: e, submitting: t } = (0, s.cf)([m.A], () => ({
            guild: m.A.getGuild(),
            submitting: m.A.isSubmitting(),
        })),
        n = (0, s.bG)([c.A], () => c.A.can(_.xBc.KICK_MEMBERS, e)),
        d = !1,
        A = null;
    return (
        n ||
            g.default.editedIntegration?.expire_behavior !== l.F.KICK ||
            ((d = !0),
            (A = (0, i.jsx)(a.E, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                children: p.intl.string(p.t["mrO/ZQ"]),
            }))),
        (0, i.jsx)(r.A, {
            submitting: t,
            disabled: d,
            errorMessage: A,
            onReset: () => {
                o.A.init(), h.C8(), null != e && u.A.init(e.id);
            },
            onSave: () => {
                if (null != e) {
                    if (null != g.default.editedIntegration) o.A.saveIntegration(e.id, g.default.editedIntegration);
                    else if (null != g.default.editedWebhook) o.A.saveWebhook(e.id, g.default.editedWebhook);
                    else if (null != g.default.editedCommandId) {
                        let t = g.default.getSectionId(),
                            n = x.A.getEditedApplication();
                        if (null == t || null == n) return;
                        o.A.saveApplicationPermissions(t, e.id, Object.values(n));
                    }
                    m.A.hasChanges() && u.A.saveGuild(e.id, { features: e.features });
                }
            },
        })
    );
}
