n.d(t, {
    B: () => h,
    Z: () => u
});
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(139387),
    s = n(852860),
    a = n(490655),
    o = n(533947),
    c = n(388610),
    d = n(430824);
function u(e) {
    let { refToScroller: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getChannel(), []),
        r = (0, l.e7)([d.Z], () => (null != n ? d.Z.getGuild(n.getGuildId()) : null), [n]),
        { section: s, sectionId: u, webhooks: h, editedWebhook: g, isFetching: m, errors: p } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
    return null == r || null == n
        ? null
        : (0, i.jsx)(a.Z, {
              guild: r,
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
    let { channel: e, submitting: t } = (0, l.cj)([c.Z], () => c.Z.getProps()),
        n = (0, l.e7)([o.Z], () => o.Z.editedWebhook),
        a = (0, l.e7)([d.Z], () => (null != e ? d.Z.getGuild(e.getGuildId()) : null), [e]);
    return (0, i.jsx)(s.Z, {
        submitting: t,
        onReset: () => {
            r.Z.init();
        },
        onSave: () => {
            null != a && null != n && r.Z.saveWebhook(a.id, n);
        }
    });
}
