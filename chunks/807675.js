n.d(t, {
    K: () => u,
    y: () => d
}),
    n(539854),
    n(35282);
var r = n(593473),
    i = n(243814),
    a = n(149765),
    o = n(592125),
    s = n(914010),
    l = n(700785),
    c = n(713938);
function u(e) {
    let t = e.filter((e) => !c.up.includes(e));
    return t.includes(i.x.BOT) && !t.includes(i.x.APPLICATIONS_COMMANDS) && t.push(i.x.APPLICATIONS_COMMANDS), t;
}
function d(e) {
    var t, n, i, c, u, d;
    let _ = (0, r.parse)(e, { arrayFormat: 'bracket' }),
        f = l.Hn;
    try {
        f = a.vB(null != _.permissions && '' !== _.permissions ? _.permissions : '0');
    } catch (e) {}
    let p = _.channel_id,
        h = null != (c = null != (i = null != (n = _.guild_id) ? n : null == (t = o.Z.getChannel(p)) ? void 0 : t.guild_id) ? i : s.Z.getGuildId()) ? c : void 0;
    return {
        clientId: null != (u = _.client_id) ? u : '',
        scopes: (null != (d = _.scope) ? d : '').split(' ').filter((e) => e.length > 0),
        responseType: _.response_type,
        redirectUri: _.redirect_uri,
        codeChallenge: _.code_challenge,
        codeChallengeMethod: _.code_challenge_method,
        state: _.state,
        permissions: f,
        channelId: p,
        guildId: h,
        prompt: _.prompt,
        disableGuildSelect: 'true' === _.disable_guild_select,
        integrationType: null == _.integration_type ? void 0 : Number(_.integration_type),
        nonce: _.nonce
    };
}
