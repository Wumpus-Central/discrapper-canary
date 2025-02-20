n.d(t, { Z: () => u }), n(47120);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    o = n(430824),
    a = n(996106),
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
                .storeWait(t, () => o.Z.getGuild(r), i)
                .catch(() => {
                    throw new a.Z({ errorCode: c.lTL.GET_GUILD_TIMED_OUT }, 'Request to get guild timed out.');
                })
                .then((e) => {
                    var t;
                    if (null == e) throw new a.Z({ errorCode: c.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(r));
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
        scope: l.x.RPC,
        handler() {
            let e = o.Z.getGuilds();
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
