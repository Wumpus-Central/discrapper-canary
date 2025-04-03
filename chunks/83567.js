n.d(t, { Z: () => b }), n(47120);
var r = n(570140),
    i = n(457330),
    l = n(726542),
    a = n(231757),
    o = n(553795),
    s = n(585483),
    c = n(996106),
    u = n(914946),
    d = n(452426),
    p = n(186901),
    h = n(981631),
    f = n(701488),
    g = n(231338);
let m = new Set([f.Fu, f.JT]),
    b = {
        [g.Et.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [p.Gp.ANY]: [p.wE] },
            validation: (e) =>
                (0, d.Z)(e).required().keys({
                    provider: e.string().required(),
                    connection_redirect: e.string()
                }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: d }
                } = e;
                (0, u.bu)(t.transport);
                let p = (0, u._f)(t.application),
                    f = l.Z.get(n);
                if (null == f) throw new c.Z({ errorCode: g.lT.INVALID_PROVIDER }, 'Platform not found for provider "'.concat(n, '"'));
                if (n === h.ABu.AMAZON_MUSIC) {
                    if (!m.has(p)) throw new c.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                } else throw new c.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                return new Promise(async (e, t) => {
                    let l = o.Z.getAccount(null, n);
                    if (null == l) {
                        function u(t) {
                            var n;
                            if (null == f) return;
                            let r = (null != (n = t.accounts) ? n : []).find((e) => e.type === f.type);
                            null != r && (e({ access_token: r.access_token }), m());
                        }
                        function p() {
                            t(new c.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'OAuth2 setup for "'.concat(n, '" failed'))), m();
                        }
                        function m() {
                            r.Z.unsubscribe('USER_CONNECTIONS_UPDATE', u), s.S.unsubscribe(h.CkL.CONNECTIONS_CALLBACK_ERROR, p);
                        }
                        r.Z.subscribe('USER_CONNECTIONS_UPDATE', u),
                            s.S.subscribe(h.CkL.CONNECTIONS_CALLBACK_ERROR, p),
                            (0, a.Z)({
                                platformType: f.type,
                                location: h.Sbl.ACTIVITY_RPC,
                                successRedirect: d
                            });
                    } else
                        try {
                            let t = await i.Z.refreshAccessToken(f.type, l.id);
                            if (null == t) throw new c.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'Refreshing access token did not return a new access token');
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            }
        },
        [g.Et.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [p.Gp.ANY]: [p.wE] },
            validation: (e) => (0, d.Z)(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n }
                } = e;
                (0, u.bu)(t.transport);
                let r = (0, u._f)(t.application),
                    a = l.Z.get(n);
                if (null == a) throw new c.Z({ errorCode: g.lT.INVALID_PROVIDER }, 'Platform not found for provider "'.concat(n, '"'));
                if (n === h.ABu.AMAZON_MUSIC) {
                    if (!m.has(r)) throw new c.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                } else throw new c.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                let s = o.Z.getAccount(null, n);
                if (null == s) throw new c.Z({ errorCode: g.lT.NO_CONNECTION_FOUND }, 'No connection found');
                let d = await i.Z.refreshAccessToken(a.type, s.id);
                if (null == d) throw new c.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'Refreshing access token did not return a new access token');
                return { access_token: d };
            }
        }
    };
