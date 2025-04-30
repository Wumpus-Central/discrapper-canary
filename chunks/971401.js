n.d(t, { Z: () => a }), n(539854), n(953529);
var i = n(192379),
    r = n(626135),
    s = n(260539),
    l = n(981631);
function a(e) {
    let t = i.useRef([]);
    i.useEffect(() => {
        null != e &&
            e.state !== s.Rj.RESOLVING &&
            (t.current.includes(e.code) ||
                (t.current.push(e.code),
                r.default.track(l.rMx.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                })));
    });
}
