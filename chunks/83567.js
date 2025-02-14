n.d(t, { Z: () => f }), n(47120);
var i = n(570140),
    l = n(457330),
    r = n(726542),
    a = n(231757),
    s = n(553795),
    o = n(585483),
    d = n(996106),
    c = n(914946),
    u = n(452426),
    h = n(186901),
    m = n(981631),
    p = n(701488),
    g = n(231338);
let _ = new Set([p.Fu, p.JT]),
    f = {
        [g.Et.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [h.Gp.ANY]: [h.wE] },
            validation: (e) =>
                (0, u.Z)(e).required().keys({
                    provider: e.string().required(),
                    connection_redirect: e.string()
                }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: u }
                } = e;
                (0, c.bu)(t.transport);
                let h = (0, c._f)(t.application),
                    p = r.Z.get(n);
                if (null == p) throw new d.Z({ errorCode: g.lT.INVALID_PROVIDER }, 'Platform not found for provider "'.concat(n, '"'));
                if (n === m.ABu.AMAZON_MUSIC) {
                    if (!_.has(h)) throw new d.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                } else throw new d.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                return new Promise(async (e, t) => {
                    let r = s.Z.getAccount(null, n);
                    if (null == r) {
                        function c(t) {
                            var n;
                            if (null == p) return;
                            let i = (null !== (n = t.accounts) && void 0 !== n ? n : []).find((e) => e.type === p.type);
                            null != i && (e({ access_token: i.access_token }), _());
                        }
                        function h() {
                            t(new d.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'OAuth2 setup for "'.concat(n, '" failed'))), _();
                        }
                        function _() {
                            i.Z.unsubscribe('USER_CONNECTIONS_UPDATE', c), o.S.unsubscribe(m.CkL.CONNECTIONS_CALLBACK_ERROR, h);
                        }
                        i.Z.subscribe('USER_CONNECTIONS_UPDATE', c),
                            o.S.subscribe(m.CkL.CONNECTIONS_CALLBACK_ERROR, h),
                            (0, a.Z)({
                                platformType: p.type,
                                location: m.Sbl.ACTIVITY_RPC,
                                successRedirect: u
                            });
                    } else
                        try {
                            let t = await l.Z.refreshAccessToken(p.type, r.id);
                            if (null == t) throw new d.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'Refreshing access token did not return a new access token');
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            }
        },
        [g.Et.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [h.Gp.ANY]: [h.wE] },
            validation: (e) => (0, u.Z)(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n }
                } = e;
                (0, c.bu)(t.transport);
                let i = (0, c._f)(t.application),
                    a = r.Z.get(n);
                if (null == a) throw new d.Z({ errorCode: g.lT.INVALID_PROVIDER }, 'Platform not found for provider "'.concat(n, '"'));
                if (n === m.ABu.AMAZON_MUSIC) {
                    if (!_.has(i)) throw new d.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                } else throw new d.Z({ errorCode: g.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                let o = s.Z.getAccount(null, n);
                if (null == o) throw new d.Z({ errorCode: g.lT.NO_CONNECTION_FOUND }, 'No connection found');
                let u = await l.Z.refreshAccessToken(a.type, o.id);
                if (null == u) throw new d.Z({ errorCode: g.lT.OAUTH2_ERROR }, 'Refreshing access token did not return a new access token');
                return { access_token: u };
            }
        }
    };
