let r;
n.d(t, { Z: () => y }), n(388685);
var i,
    a = n(392711),
    o = n.n(a),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    f = {};
function p(e, t) {
    return null == t && (t = "guild"), "".concat(e, ":").concat(t);
}
function _(e) {
    return null != d[e] || (d[e] = {}), d[e];
}
function m(e) {
    let { guildId: t, channelId: n, webhooks: i, error: a } = e;
    if (null == i)
        return void (null != a
            ? ((r = a), delete f[p(t, n)])
            : null != n && null != d[t] && ((r = null), c.Z.fetchForChannel(t, n)));
    r = null;
    let s = [];
    null != n &&
        (s = o()(_(t))
            .values()
            .filter((e) => e.channel_id !== n)
            .value());
    let l = (d[t] = {});
    s.concat(i).forEach((e) => (l[e.id] = e)), delete f[p(t, n)];
}
function h(e) {
    let { guildId: t, channelId: n } = e;
    f[p(t, n)] = !0;
}
function g(e) {
    let { guildId: t, webhook: n } = e;
    _(t)[n.id] = n;
}
function E(e) {
    let { guildId: t, webhookId: n } = e;
    delete _(t)[n];
}
class b extends (i = s.ZP.Store) {
    isFetching(e, t) {
        return null != f[p(e, t)];
    }
    getWebhooksForGuild(e) {
        return o().values(_(e));
    }
    getWebhooksForChannel(e, t) {
        return o()(_(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return r;
    }
}
u(b, "displayName", "WebhooksStore");
let y = new b(l.Z, {
    WEBHOOKS_UPDATE: m,
    WEBHOOKS_FETCHING: h,
    WEBHOOK_CREATE: g,
    WEBHOOK_UPDATE: g,
    WEBHOOK_DELETE: E,
});
