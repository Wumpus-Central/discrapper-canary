n.d(t, {
    B: () => h,
    Z: () => u
});
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(139387),
    a = n(852860),
    r = n(490655),
    o = n(533947),
    d = n(388610),
    c = n(430824);
function u(e) {
    let { refToScroller: t } = e,
        n = (0, l.e7)([d.Z], () => d.Z.getChannel(), []),
        s = (0, l.e7)([c.Z], () => (null != n ? c.Z.getGuild(n.getGuildId()) : null), [n]),
        { section: a, sectionId: u, webhooks: h, editedWebhook: m, isFetching: g, errors: p } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
    return null == s || null == n
        ? null
        : (0, i.jsx)(r.Z, {
              guild: s,
              channel: n,
              section: a,
              sectionId: u,
              webhooks: h,
              editedWebhook: m,
              isFetchingWebhooks: g,
              hasChanges: o.Z.hasChanges,
              errors: p,
              refToScroller: t
          });
}
function h() {
    let { channel: e, submitting: t } = (0, l.cj)([d.Z], () => d.Z.getProps()),
        n = (0, l.e7)([o.Z], () => o.Z.editedWebhook),
        r = (0, l.e7)([c.Z], () => (null != e ? c.Z.getGuild(e.getGuildId()) : null), [e]);
    return (0, i.jsx)(a.Z, {
        submitting: t,
        onReset: () => {
            s.Z.init();
        },
        onSave: () => {
            null != r && null != n && s.Z.saveWebhook(r.id, n);
        }
    });
}
