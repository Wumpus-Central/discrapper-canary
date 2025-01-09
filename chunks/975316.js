n.d(t, {
    B: function () {
        return h;
    },
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(139387),
    r = n(852860),
    a = n(490655),
    o = n(533947),
    c = n(388610),
    d = n(430824);
function u(e) {
    let { refToScroller: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getChannel(), []),
        s = (0, l.e7)([d.Z], () => (null != n ? d.Z.getGuild(n.getGuildId()) : null), [n]),
        { section: r, sectionId: u, webhooks: h, editedWebhook: m, isFetching: g, errors: p } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
    return null == s || null == n
        ? null
        : (0, i.jsx)(a.Z, {
              guild: s,
              channel: n,
              section: r,
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
    let { channel: e, submitting: t } = (0, l.cj)([c.Z], () => c.Z.getProps()),
        n = (0, l.e7)([o.Z], () => o.Z.editedWebhook),
        a = (0, l.e7)([d.Z], () => (null != e ? d.Z.getGuild(e.getGuildId()) : null), [e]);
    return (0, i.jsx)(r.Z, {
        submitting: t,
        onReset: () => {
            s.Z.init();
        },
        onSave: () => {
            if (null != a) null != n && s.Z.saveWebhook(a.id, n);
        }
    });
}
