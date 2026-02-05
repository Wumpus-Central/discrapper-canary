"use strict";
n.d(t, { A: () => p, K: () => f });
var i = n(627968);
n(64700);
var s = n(788373),
    l = n(311907),
    r = n(36525),
    a = n(397927),
    o = n(282956),
    d = n(875264),
    c = n(576705),
    u = n(997509),
    m = n(555337),
    g = n(53656),
    x = n(542580),
    h = n(803378),
    _ = n(652215),
    A = n(985018);
function p(e) {
    let { refToScroller: t } = e,
        n = (0, l.bG)([m.A], () => m.A.getGuild()),
        {
            section: s,
            sectionId: r,
            integrations: a,
            editedIntegration: o,
            webhooks: c,
            editedWebhook: u,
            isFetching: x,
            errors: h,
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
        : (0, i.jsx)(d.A, {
              guild: n,
              section: s,
              sectionId: r,
              integrations: a,
              webhooks: c,
              editedIntegration: o,
              editedWebhook: u,
              isFetchingWebhooks: x,
              hasChanges: g.default.hasChanges,
              errors: h,
              refToScroller: t,
          });
}
function f() {
    let { guild: e, submitting: t } = (0, l.cf)([m.A], () => ({
            guild: m.A.getGuild(),
            submitting: m.A.isSubmitting(),
        })),
        n = (0, l.bG)([c.A], () => c.A.can(_.xBc.KICK_MEMBERS, e)),
        d = !1,
        p = null;
    return (
        n ||
            g.default.editedIntegration?.expire_behavior !== s.F.KICK ||
            ((d = !0),
            (p = (0, i.jsx)(a.Text, {
                color: "text-feedback-critical",
                variant: "text-md/normal",
                children: A.intl.string(A.t["mrO/ZQ"]),
            }))),
        (0, i.jsx)(r.A, {
            submitting: t,
            disabled: d,
            errorMessage: p,
            onReset: () => {
                o.A.init(), x.C8(), null != e && u.A.init(e.id);
            },
            onSave: () => {
                if (null != e) {
                    if (null != g.default.editedIntegration) o.A.saveIntegration(e.id, g.default.editedIntegration);
                    else if (null != g.default.editedWebhook) o.A.saveWebhook(e.id, g.default.editedWebhook);
                    else if (null != g.default.editedCommandId) {
                        let t = g.default.getSectionId(),
                            n = h.A.getEditedApplication();
                        if (null == t || null == n) return;
                        o.A.saveApplicationPermissions(t, e.id, Object.values(n));
                    }
                    m.A.hasChanges() && u.A.saveGuild(e.id, { features: e.features });
                }
            },
        })
    );
}
