n(177593);
var i = n(626135),
    r = n(996106),
    l = n(34954),
    a = n(986768),
    s = n(981631);
t.Z = {
    [s.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: o, args: c } = e,
                d = t.events[o];
            if (null == d) throw new r.Z({ errorCode: s.lTL.INVALID_EVENT }, 'Invalid event: '.concat(o));
            if (!(0, l.Z)(n.authorization.scopes, d.scope)) throw new r.Z({ errorCode: s.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            if (
                (i.default.track(s.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: 'object' == typeof d.scope ? JSON.stringify(d.scope) : d.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString()
                }),
                null != d.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(c, d.validation(e), { convert: !1 }).error) throw new r.Z({ errorCode: s.lTL.INVALID_PAYLOAD }, 'Invalid subscription parameters provided');
            }
            let u = d.handler({
                    args: c,
                    socket: n
                }),
                h = (0, a.V)(n, o, c);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, o, c, u), null != h && t.dispatchToSubscriptions(o, (e) => e.socket.id === n.id, h);
                }),
                    e({ evt: o });
            });
        }
    },
    [s.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: l } = e;
            if (null == t.events[i]) throw new r.Z({ errorCode: s.lTL.INVALID_EVENT }, 'Invalid event: '.concat(i));
            return t.removeSubscription(n, i, l), { evt: i };
        }
    }
};
