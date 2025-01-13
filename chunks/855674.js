let i;
n(47120);
var r,
    l,
    T,
    I,
    o = n(392711),
    E = n.n(o),
    u = n(442837),
    N = n(570140),
    a = n(308063);
let _ = {},
    S = {};
function c(e, t) {
    return null == t && (t = 'guild'), ''.concat(e, ':').concat(t);
}
function d(e) {
    return null != _[e] ? _[e] : ((_[e] = {}), _[e]);
}
function s(e) {
    let { guildId: t, webhook: n } = e;
    d(t)[n.id] = n;
}
class O extends (r = u.ZP.Store) {
    isFetching(e, t) {
        return null != S[c(e, t)];
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
(I = 'WebhooksStore'),
    (T = 'displayName') in (l = O)
        ? Object.defineProperty(l, T, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[T] = I),
    (t.Z = new O(N.Z, {
        WEBHOOKS_UPDATE: function (e) {
            let { guildId: t, channelId: n, webhooks: r, error: l } = e;
            if (null == r) {
                null != l ? ((i = l), delete S[c(t, n)]) : null != n && null != _[t] && ((i = null), a.Z.fetchForChannel(t, n));
                return;
            }
            i = null;
            let T = [];
            null != n &&
                (T = E()(d(t))
                    .values()
                    .filter((e) => e.channel_id !== n)
                    .value());
            let I = (_[t] = {});
            T.concat(r).forEach((e) => (I[e.id] = e)), delete S[c(t, n)];
        },
        WEBHOOKS_FETCHING: function (e) {
            let { guildId: t, channelId: n } = e;
            S[c(t, n)] = !0;
        },
        WEBHOOK_CREATE: s,
        WEBHOOK_UPDATE: s,
        WEBHOOK_DELETE: function (e) {
            let { guildId: t, webhookId: n } = e;
            delete d(t)[n];
        }
    }));
