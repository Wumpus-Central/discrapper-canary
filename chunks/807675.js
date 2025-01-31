n.d(t, {
    K: () => c,
    y: () => d
}),
    n(653041);
var i = n(593473),
    r = n(243814),
    a = n(149765),
    s = n(592125),
    o = n(914010),
    l = n(700785),
    u = n(713938);
function c(e) {
    let t = e.filter((e) => !u.up.includes(e));
    return t.includes(r.x.BOT) && !t.includes(r.x.APPLICATIONS_COMMANDS) && t.push(r.x.APPLICATIONS_COMMANDS), t;
}
function d(e) {
    var t, n, r, u, c, d;
    let f = (0, i.parse)(e, { arrayFormat: 'bracket' }),
        _ = l.Hn;
    try {
        _ = a.vB(null != f.permissions && '' !== f.permissions ? f.permissions : '0');
    } catch (e) {}
    let p = f.channel_id,
        h = null !== (u = null !== (r = null !== (n = f.guild_id) && void 0 !== n ? n : null === (t = s.Z.getChannel(p)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== r ? r : o.Z.getGuildId()) && void 0 !== u ? u : void 0;
    return {
        clientId: null !== (c = f.client_id) && void 0 !== c ? c : '',
        scopes: (null !== (d = f.scope) && void 0 !== d ? d : '').split(' ').filter((e) => e.length > 0),
        responseType: f.response_type,
        redirectUri: f.redirect_uri,
        codeChallenge: f.code_challenge,
        codeChallengeMethod: f.code_challenge_method,
        state: f.state,
        permissions: _,
        channelId: p,
        guildId: h,
        prompt: f.prompt,
        disableGuildSelect: 'true' === f.disable_guild_select,
        integrationType: null == f.integration_type ? void 0 : Number(f.integration_type),
        nonce: f.nonce
    };
}
