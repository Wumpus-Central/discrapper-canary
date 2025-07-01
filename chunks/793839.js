(n.d(t, { Z: () => s }), n(388685));
var r = n(243814),
    i = n(430824),
    l = n(996106),
    a = n(452426),
    o = n(981631);
let s = {
    [o.Etm.GET_GUILD]: {
        scope: r.x.RPC,
        validation: (e) =>
            (0, a.Z)(e)
                .required()
                .keys({
                    guild_id: e.string(),
                    timeout: e.number().min(0).max(60)
                }),
        handler(e) {
            let {
                socket: t,
                server: n,
                args: { guild_id: r, timeout: a = 0 }
            } = e;
            return n
                .storeWait(t, () => i.Z.getGuild(r), a)
                .catch(() => {
                    throw new l.Z({ errorCode: o.lTL.GET_GUILD_TIMED_OUT }, 'Request to get guild timed out.');
                })
                .then((e) => {
                    var t;
                    if (null == e) throw new l.Z({ errorCode: o.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(r));
                    return {
                        id: e.id,
                        name: e.name,
                        icon_url: null != (t = e.getIconURL(128)) ? t : null,
                        members: [],
                        vanity_url_code: e.vanityURLCode
                    };
                });
        }
    },
    [o.Etm.GET_GUILDS]: {
        scope: r.x.RPC,
        handler: () => ({
            guilds: i.Z.getGuildsArray().map((e) => ({
                id: e.id,
                name: e.name,
                icon_url: e.getIconURL(128)
            }))
        })
    }
};
