r.d(n, {
    K: function () {
        return f;
    },
    y: function () {
        return p;
    }
});
var i = r(653041);
var a = r(593473),
    o = r(243814),
    s = r(149765),
    l = r(592125),
    u = r(914010),
    c = r(700785),
    d = r(713938);
function f(e) {
    let n = e.filter((e) => !d.up.includes(e));
    return n.includes(o.x.BOT) && !n.includes(o.x.APPLICATIONS_COMMANDS) && n.push(o.x.APPLICATIONS_COMMANDS), n;
}
function p(e) {
    var n, r, i, o, d, f;
    let p = (0, a.parse)(e, { arrayFormat: 'bracket' }),
        h = c.Hn;
    try {
        h = s.vB(null != p.permissions && '' !== p.permissions ? p.permissions : '0');
    } catch (e) {}
    let _ = p.channel_id,
        m = null !== (o = null !== (i = null !== (r = p.guild_id) && void 0 !== r ? r : null === (n = l.Z.getChannel(_)) || void 0 === n ? void 0 : n.guild_id) && void 0 !== i ? i : u.Z.getGuildId()) && void 0 !== o ? o : void 0;
    return {
        clientId: null !== (d = p.client_id) && void 0 !== d ? d : '',
        scopes: (null !== (f = p.scope) && void 0 !== f ? f : '').split(' ').filter((e) => e.length > 0),
        responseType: p.response_type,
        redirectUri: p.redirect_uri,
        codeChallenge: p.code_challenge,
        codeChallengeMethod: p.code_challenge_method,
        state: p.state,
        permissions: h,
        channelId: _,
        guildId: m,
        prompt: p.prompt,
        disableGuildSelect: 'true' === p.disable_guild_select,
        integrationType: null == p.integration_type ? void 0 : Number(p.integration_type),
        nonce: p.nonce
    };
}
