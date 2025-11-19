n.d(t, { Z: () => a }), n(539854), n(953529);
var r = n(473749),
    i = n(626135),
    l = n(260539),
    s = n(981631);
function a(e) {
    let t = r.useRef([]);
    r.useEffect(() => {
        null != e &&
            e.state !== l.Rj.RESOLVING &&
            (t.current.includes(e.code) ||
                (t.current.push(e.code),
                i.default.track(s.rMx.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId,
                })));
    });
}
