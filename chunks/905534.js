n.d(t, { Z: () => s }), n(26686), n(177593);
var r = n(626135),
    i = n(996106),
    l = n(34954),
    a = n(986768),
    o = n(981631);
let s = {
    [o.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: s, args: c } = e,
                u = t.events[s];
            if (null == u) throw new i.Z({ errorCode: o.lTL.INVALID_EVENT }, 'Invalid event: '.concat(s));
            if (!(0, l.Z)(n.authorization.scopes, u.scope)) throw new i.Z({ errorCode: o.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            if (
                (r.default.track(o.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                    event: s,
                    scope: 'object' == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString()
                }),
                null != u.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(c, u.validation(e), { convert: !1 }).error) throw new i.Z({ errorCode: o.lTL.INVALID_PAYLOAD }, 'Invalid subscription parameters provided');
            }
            let d = u.handler({
                    args: c,
                    socket: n
                }),
                p = (0, a.V)(n, s, c);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, s, c, d), null != p && t.dispatchToSubscriptions(s, (e) => e.socket.id === n.id, p);
                }),
                    e({ evt: s });
            });
        }
    },
    [o.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: r, args: l } = e;
            if (null == t.events[r]) throw new i.Z({ errorCode: o.lTL.INVALID_EVENT }, 'Invalid event: '.concat(r));
            return t.removeSubscription(n, r, l), { evt: r };
        }
    }
};
