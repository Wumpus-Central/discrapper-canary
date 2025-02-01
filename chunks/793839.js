n.d(t, { Z: () => d }), n(47120);
var i = n(392711),
    l = n.n(i),
    r = n(243814),
    a = n(430824),
    s = n(996106),
    o = n(452426),
    c = n(981631);
let d = {
    [c.Etm.GET_GUILD]: {
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
                args: { guild_id: i, timeout: l = 0 }
            } = e;
            return n
                .storeWait(t, () => a.Z.getGuild(i), l)
                .catch(() => {
                    throw new s.Z({ errorCode: c.lTL.GET_GUILD_TIMED_OUT }, 'Request to get guild timed out.');
                })
                .then((e) => {
                    var t;
                    if (null == e) throw new s.Z({ errorCode: c.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(i));
                    return {
                        id: e.id,
                        name: e.name,
                        icon_url: null !== (t = e.getIconURL(128)) && void 0 !== t ? t : null,
                        members: [],
                        vanity_url_code: e.vanityURLCode
                    };
                });
        }
    },
    [c.Etm.GET_GUILDS]: {
        scope: r.x.RPC,
        handler() {
            let e = a.Z.getGuilds();
            return {
                guilds: l().map(e, (e) => ({
                    id: e.id,
                    name: e.name,
                    icon_url: e.getIconURL(128)
                }))
            };
        }
    }
};
