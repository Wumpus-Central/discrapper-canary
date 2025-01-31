n.d(t, { Z: () => a }), n(653041);
var r = n(192379),
    i = n(626135),
    s = n(58346),
    l = n(981631);
function a(e) {
    let t = r.useRef([]);
    r.useEffect(() => {
        null != e &&
            e.state !== s.Rj.RESOLVING &&
            (t.current.includes(e.code) ||
                (t.current.push(e.code),
                i.default.track(l.rMx.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                })));
    });
}
