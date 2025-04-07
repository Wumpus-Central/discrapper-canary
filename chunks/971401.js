r.d(t, { Z: () => l }), r(539854), r(953529);
var s = r(192379),
    n = r(626135),
    a = r(260539),
    i = r(981631);
function l(e) {
    let t = s.useRef([]);
    s.useEffect(() => {
        null != e &&
            e.state !== a.Rj.RESOLVING &&
            (t.current.includes(e.code) ||
                (t.current.push(e.code),
                n.default.track(i.rMx.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                })));
    });
}
