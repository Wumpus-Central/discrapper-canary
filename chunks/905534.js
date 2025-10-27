n.d(t, { Z: () => o }), n(49124), n(358797);
var r = n(626135),
    i = n(996106),
    l = n(34954),
    a = n(986768),
    s = n(981631);
let o = {
    [s.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: o, args: c } = e,
                u = t.events[o];
            if (null == u) throw new i.Z({ errorCode: s.lTL.INVALID_EVENT }, "Invalid event: ".concat(o));
            if (!(0, l.Z)(n.authorization.scopes, u.scope))
                throw new i.Z({ errorCode: s.lTL.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            if (
                (r.default.track(s.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: "object" == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != u.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(c, u.validation(e), { convert: !1 }).error)
                    throw new i.Z({ errorCode: s.lTL.INVALID_PAYLOAD }, "Invalid subscription parameters provided");
            }
            let d = u.handler({
                    args: c,
                    socket: n,
                }),
                p = (0, a.V)(n, o, c);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, o, c, d),
                        null != p && t.dispatchToSubscriptions(o, (e) => e.socket.id === n.id, p);
                }),
                    e({ evt: o });
            });
        },
    },
    [s.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: r, args: l } = e;
            if (null == t.events[r]) throw new i.Z({ errorCode: s.lTL.INVALID_EVENT }, "Invalid event: ".concat(r));
            return t.removeSubscription(n, r, l), { evt: r };
        },
    },
};
