let i;
n.d(t, { Z: () => O }), n(47120);
var l,
    r,
    T,
    I = n(392711),
    E = n.n(I),
    o = n(442837),
    N = n(570140),
    u = n(308063);
let a = {},
    _ = {};
function S(e, t) {
    return null == t && (t = 'guild'), ''.concat(e, ':').concat(t);
}
function d(e) {
    return null != a[e] || (a[e] = {}), a[e];
}
function c(e) {
    let { guildId: t, webhook: n } = e;
    d(t)[n.id] = n;
}
class s extends (l = o.ZP.Store) {
    isFetching(e, t) {
        return null != _[S(e, t)];
    }
    getWebhooksForGuild(e) {
        return E().values(d(e));
    }
    getWebhooksForChannel(e, t) {
        return E()(d(e))
            .values()
            .filter((e) => e.channel_id === t)
            .value();
    }
    get error() {
        return i;
    }
}
(T = 'WebhooksStore'),
    (r = 'displayName') in s
        ? Object.defineProperty(s, r, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = T);
let O = new s(N.Z, {
    WEBHOOKS_UPDATE: function (e) {
        let { guildId: t, channelId: n, webhooks: l, error: r } = e;
        if (null == l) {
            null != r ? ((i = r), delete _[S(t, n)]) : null != n && null != a[t] && ((i = null), u.Z.fetchForChannel(t, n));
            return;
        }
        i = null;
        let T = [];
        null != n &&
            (T = E()(d(t))
                .values()
                .filter((e) => e.channel_id !== n)
                .value());
        let I = (a[t] = {});
        T.concat(l).forEach((e) => (I[e.id] = e)), delete _[S(t, n)];
    },
    WEBHOOKS_FETCHING: function (e) {
        let { guildId: t, channelId: n } = e;
        _[S(t, n)] = !0;
    },
    WEBHOOK_CREATE: c,
    WEBHOOK_UPDATE: c,
    WEBHOOK_DELETE: function (e) {
        let { guildId: t, webhookId: n } = e;
        delete d(t)[n];
    }
});
