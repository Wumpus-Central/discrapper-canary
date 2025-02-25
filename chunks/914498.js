n.d(t, {
    GF: () => d,
    KX: () => c,
    Un: () => l,
    Yu: () => u,
    j_: () => s
});
var r,
    i,
    a = n(626135),
    o = n(981631),
    l = (((r = {}).ACTIVITY = 'activity'), (r.APP_DISCOVERY = 'app_discovery'), (r.OAUTH = 'oauth'), r),
    s = (((i = {}).VIEW = 'view'), (i.PLAY = 'play'), (i.ADD_APP = 'add_app'), i);
function c(e, t, n, r, i) {
    a.default.track(o.rMx.APP_EMBED_CLICKED, {
        application_id: e,
        link_type: t,
        area: n,
        referrer_id: r,
        custom_id: i
    });
}
function d(e, t, n, r) {
    a.default.track(o.rMx.APP_EMBED_VIEWED, {
        application_id: e,
        link_type: t,
        referrer_id: n,
        custom_id: r
    });
}
function u(e, t) {
    a.default.track(o.rMx.APP_EMBED_LINK_COPIED, {
        application_id: e,
        link_type: t
    });
}
