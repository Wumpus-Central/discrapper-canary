n.d(t, { Z: () => u }), n(388685);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(430824),
    o = n(996106),
    s = n(452426),
    c = n(981631);
let u = {
    [c.Etm.GET_GUILD]: {
        scope: l.x.RPC,
        validation: (e) =>
            (0, s.Z)(e)
                .required()
                .keys({
                    guild_id: e.string(),
                    timeout: e.number().min(0).max(60)
                }),
        handler(e) {
            let {
                socket: t,
                server: n,
                args: { guild_id: r, timeout: i = 0 }
            } = e;
            return n
                .storeWait(t, () => a.Z.getGuild(r), i)
                .catch(() => {
                    throw new o.Z({ errorCode: c.lTL.GET_GUILD_TIMED_OUT }, 'Request to get guild timed out.');
                })
                .then((e) => {
                    var t;
                    if (null == e) throw new o.Z({ errorCode: c.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(r));
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
    [c.Etm.GET_GUILDS]: {
        scope: l.x.RPC,
        handler() {
            let e = a.Z.getGuilds();
            return {
                guilds: i().map(e, (e) => ({
                    id: e.id,
                    name: e.name,
                    icon_url: e.getIconURL(128)
                }))
            };
        }
    }
};
