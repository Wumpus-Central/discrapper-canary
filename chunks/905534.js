n.d(t, { Z: () => o }), n(177593);
var i = n(626135),
    l = n(996106),
    r = n(34954),
    a = n(986768),
    s = n(981631);
let o = {
    [s.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: o, args: d } = e,
                c = t.events[o];
            if (null == c) throw new l.Z({ errorCode: s.lTL.INVALID_EVENT }, 'Invalid event: '.concat(o));
            if (!(0, r.Z)(n.authorization.scopes, c.scope)) throw new l.Z({ errorCode: s.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            if (
                (i.default.track(s.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: 'object' == typeof c.scope ? JSON.stringify(c.scope) : c.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString()
                }),
                null != c.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(d, c.validation(e), { convert: !1 }).error) throw new l.Z({ errorCode: s.lTL.INVALID_PAYLOAD }, 'Invalid subscription parameters provided');
            }
            let u = c.handler({
                    args: d,
                    socket: n
                }),
                h = (0, a.V)(n, o, d);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, o, d, u), null != h && t.dispatchToSubscriptions(o, (e) => e.socket.id === n.id, h);
                }),
                    e({ evt: o });
            });
        }
    },
    [s.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e;
            if (null == t.events[i]) throw new l.Z({ errorCode: s.lTL.INVALID_EVENT }, 'Invalid event: '.concat(i));
            return t.removeSubscription(n, i, r), { evt: i };
        }
    }
};
