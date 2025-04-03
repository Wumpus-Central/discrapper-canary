let r;
n.d(t, { Z: () => y }), n(47120);
var i,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    l = n(570140),
    c = n(308063);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    f = {};
function _(e, t) {
    return null == t && (t = 'guild'), ''.concat(e, ':').concat(t);
}
function p(e) {
    return null != d[e] || (d[e] = {}), d[e];
}
function h(e) {
    let { guildId: t, channelId: n, webhooks: i, error: o } = e;
    if (null == i) return void (null != o ? ((r = o), delete f[_(t, n)]) : null != n && null != d[t] && ((r = null), c.Z.fetchForChannel(t, n)));
    r = null;
    let s = [];
    null != n &&
        (s = a()(p(t))
            .values()
            .filter((e) => e.channel_id !== n)
            .value());
    let l = (d[t] = {});
    s.concat(i).forEach((e) => (l[e.id] = e)), delete f[_(t, n)];
}
function m(e) {
    let { guildId: t, channelId: n } = e;
    f[_(t, n)] = !0;
}
function g(e) {
    let { guildId: t, webhook: n } = e;
    p(t)[n.id] = n;
}
function E(e) {
    let { guildId: t, webhookId: n } = e;
    delete p(t)[n];
}
class b extends (i = s.ZP.Store) {
    isFetching(e, t) {
        return null != f[_(e, t)];
    }
    getWebhooksForGuild(e) {
        return a().values(p(e));
    }
    getWebhooksForChannel(e, t) {
        return a()(p(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return r;
    }
}
u(b, 'displayName', 'WebhooksStore');
let y = new b(l.Z, {
    WEBHOOKS_UPDATE: h,
    WEBHOOKS_FETCHING: m,
    WEBHOOK_CREATE: g,
    WEBHOOK_UPDATE: g,
    WEBHOOK_DELETE: E
});
