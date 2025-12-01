n.d(t, {
    K: () => d,
    y: () => p,
}),
    n(539854),
    n(704826),
    n(35282);
var r = n(593473),
    i = n(243814),
    a = n(149765),
    o = n(592125),
    s = n(914010),
    l = n(700785),
    c = n(713938),
    u = n(981631);
function d(e) {
    let t = e.filter((e) => !c.up.includes(e));
    return t.includes(i.x.BOT) && !t.includes(i.x.APPLICATIONS_COMMANDS) && t.push(i.x.APPLICATIONS_COMMANDS), t;
}
function f(e) {
    if (![u.ME, u.I_8, u.o_z].includes(e)) return null != e ? e : void 0;
}
function p(e) {
    var t, n, i, c, u;
    let d = (0, r.parse)(e, { arrayFormat: "bracket" }),
        p = l.Hn;
    try {
        p = a.vB(null != d.permissions && "" !== d.permissions ? d.permissions : "0");
    } catch (e) {}
    let _ = d.channel_id,
        m = f(
            null != (i = null != (n = d.guild_id) ? n : null == (t = o.Z.getChannel(_)) ? void 0 : t.guild_id)
                ? i
                : s.Z.getGuildId(),
        );
    return {
        clientId: null != (c = d.client_id) ? c : "",
        scopes: (null != (u = d.scope) ? u : "")
            .replace(/\+/g, " ")
            .split(" ")
            .filter((e) => e.length > 0),
        responseType: d.response_type,
        redirectUri: d.redirect_uri,
        codeChallenge: d.code_challenge,
        codeChallengeMethod: d.code_challenge_method,
        state: d.state,
        permissions: p,
        channelId: _,
        guildId: m,
        prompt: d.prompt,
        disableGuildSelect: "true" === d.disable_guild_select,
        integrationType: null == d.integration_type ? void 0 : Number(d.integration_type),
        nonce: d.nonce,
    };
}
