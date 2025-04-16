n.d(t, {
    B: () => h,
    Z: () => u
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(139387),
    s = n(852860),
    a = n(490655),
    o = n(533947),
    c = n(388610),
    d = n(430824);
function u(e) {
    let { refToScroller: t } = e,
        n = (0, r.e7)([c.Z], () => c.Z.getChannel(), []),
        l = (0, r.e7)([d.Z], () => (null != n ? d.Z.getGuild(n.getGuildId()) : null), [n]),
        { section: s, sectionId: u, webhooks: h, editedWebhook: g, isFetching: m, errors: p } = (0, r.cj)([o.Z], () => o.Z.getProps(), []);
    return null == l || null == n
        ? null
        : (0, i.jsx)(a.Z, {
              guild: l,
              channel: n,
              section: s,
              sectionId: u,
              webhooks: h,
              editedWebhook: g,
              isFetchingWebhooks: m,
              hasChanges: o.Z.hasChanges,
              errors: p,
              refToScroller: t
          });
}
function h() {
    let { channel: e, submitting: t } = (0, r.cj)([c.Z], () => c.Z.getProps()),
        n = (0, r.e7)([o.Z], () => o.Z.editedWebhook),
        a = (0, r.e7)([d.Z], () => (null != e ? d.Z.getGuild(e.getGuildId()) : null), [e]);
    return (0, i.jsx)(s.Z, {
        submitting: t,
        onReset: () => {
            l.Z.init();
        },
        onSave: () => {
            null != a && null != n && l.Z.saveWebhook(a.id, n);
        }
    });
}
