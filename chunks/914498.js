n.d(t, {
    GF: () => l,
    KX: () => s,
    Un: () => o,
    Yu: () => c,
    j_: () => a,
    z$: () => u
});
var r = n(626135),
    i = n(981631),
    o = (function (e) {
        return (e.ACTIVITY = 'activity'), (e.APP_DISCOVERY = 'app_discovery'), (e.OAUTH = 'oauth'), (e.CUSTOM_ACTIVITY_LINK = 'custom_activity_link'), (e.ACTIVITY_INVITE = 'activity_invite'), (e.ACTIVITY_INSTANCE = 'activity_instance'), (e.UNKNOWN = 'unknown'), e;
    })({}),
    a = (function (e) {
        return (e.VIEW = 'view'), (e.PLAY = 'play'), (e.ADD_APP = 'add_app'), (e.JOIN_SERVER = 'join_server'), e;
    })({});
function s(e, t, n, o, a) {
    r.default.track(i.rMx.APP_EMBED_CLICKED, {
        application_id: e,
        link_type: t,
        area: n,
        referrer_id: o,
        custom_id: a
    });
}
function l(e, t, n, o) {
    r.default.track(i.rMx.APP_EMBED_VIEWED, {
        application_id: e,
        link_type: t,
        referrer_id: n,
        custom_id: o
    });
}
function c(e, t) {
    r.default.track(i.rMx.APP_EMBED_LINK_COPIED, {
        application_id: e,
        link_type: t
    });
}
function u(e, t, n, o) {
    r.default.track(i.rMx.APP_EMBED_LINK_SENT, {
        application_id: e,
        link_type: t,
        referrer_id: n,
        custom_id: o
    });
}
