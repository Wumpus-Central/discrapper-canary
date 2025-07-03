(n.d(t, { Z: () => c }), n(388685));
var r = n(243814),
    i = n(601964),
    l = n(430824),
    a = n(996106),
    o = n(452426),
    s = n(981631);
let c = {
    [s.Etm.GET_GUILD]: {
        scope: r.x.RPC,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    guild_id: e.string(),
                    timeout: e.number().min(0).max(60)
                }),
        handler(e) {
            let {
                socket: t,
                server: n,
                args: { guild_id: r, timeout: o = 0 }
            } = e;
            return n
                .storeWait(t, () => l.Z.getGuild(r), o)
                .catch(() => {
                    throw new a.Z({ errorCode: s.lTL.GET_GUILD_TIMED_OUT }, 'Request to get guild timed out.');
                })
                .then((e) => {
                    var t;
                    if (null == e) throw new a.Z({ errorCode: s.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(r));
                    return {
                        id: e.id,
                        name: e.name,
                        icon_url: null != (t = (0, i.EB)(e, 128)) ? t : null,
                        members: [],
                        vanity_url_code: e.vanityURLCode
                    };
                });
        }
    },
    [s.Etm.GET_GUILDS]: {
        scope: r.x.RPC,
        handler: () => ({
            guilds: l.Z.getGuildsArray().map((e) => {
                var t;
                return {
                    id: e.id,
                    name: e.name,
                    icon_url: null != (t = (0, i.EB)(e, 128)) ? t : null
                };
            })
        })
    }
};
