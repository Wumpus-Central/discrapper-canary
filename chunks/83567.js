n.d(t, { Z: () => _ }), n(388685);
var r = n(570140),
    i = n(457330),
    l = n(726542),
    a = n(231757),
    s = n(553795),
    o = n(585483),
    c = n(996106),
    u = n(914946),
    d = n(452426),
    p = n(186901),
    f = n(981631),
    h = n(701488),
    g = n(231338);
let m = new Set([h.Fu, h.JT]),
    _ = {
        [g.Et.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [p.Gp.ANY]: [p.wE] },
            validation: (e) =>
                (0, d.Z)(e).required().keys({
                    provider: e.string().required(),
                    connection_redirect: e.string(),
                }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: d },
                } = e;
                (0, u.bu)(t.transport);
                let p = (0, u._f)(t.application),
                    h = l.Z.get(n);
                if (null == h)
                    throw new c.Z(
                        { errorCode: g.lT.INVALID_PROVIDER },
                        'Platform not found for provider "'.concat(n, '"'),
                    );
                if (n === f.ABu.AMAZON_MUSIC) {
                    if (!m.has(p))
                        throw new c.Z(
                            { errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new c.Z(
                        { errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let l = s.Z.getAccount(null, n);
                    if (null == l) {
                        function u(t) {
                            var n;
                            if (null == h) return;
                            let r = (null != (n = t.accounts) ? n : []).find((e) => e.type === h.type);
                            null != r && (e({ access_token: r.access_token }), m());
                        }
                        function p() {
                            t(new c.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'OAuth2 setup for "'.concat(n, '" failed'))),
                                m();
                        }
                        function m() {
                            r.Z.unsubscribe("USER_CONNECTIONS_UPDATE", u),
                                o.S.unsubscribe(f.CkL.CONNECTIONS_CALLBACK_ERROR, p);
                        }
                        r.Z.subscribe("USER_CONNECTIONS_UPDATE", u),
                            o.S.subscribe(f.CkL.CONNECTIONS_CALLBACK_ERROR, p),
                            (0, a.Z)({
                                platformType: h.type,
                                location: f.Sbl.ACTIVITY_RPC,
                                successRedirect: d,
                            });
                    } else
                        try {
                            let t = await i.Z.refreshAccessToken(h.type, l.id);
                            if (null == t)
                                throw new c.Z(
                                    { errorCode: g.lT.OAUTH2_ERROR },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [g.Et.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [p.Gp.ANY]: [p.wE] },
            validation: (e) => (0, d.Z)(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, u.bu)(t.transport);
                let r = (0, u._f)(t.application),
                    a = l.Z.get(n);
                if (null == a)
                    throw new c.Z(
                        { errorCode: g.lT.INVALID_PROVIDER },
                        'Platform not found for provider "'.concat(n, '"'),
                    );
                if (n === f.ABu.AMAZON_MUSIC) {
                    if (!m.has(r))
                        throw new c.Z(
                            { errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new c.Z(
                        { errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                let o = s.Z.getAccount(null, n);
                if (null == o) throw new c.Z({ errorCode: g.lT.NO_CONNECTION_FOUND }, "No connection found");
                let d = await i.Z.refreshAccessToken(a.type, o.id);
                if (null == d)
                    throw new c.Z(
                        { errorCode: g.lT.OAUTH2_ERROR },
                        "Refreshing access token did not return a new access token",
                    );
                return { access_token: d };
            },
        },
    };
