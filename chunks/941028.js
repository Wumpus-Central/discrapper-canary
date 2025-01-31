n.d(t, {
    TV: () => c,
    b8: () => u,
    k$: () => o,
    kr: () => l,
    w5: () => s,
    ym: () => a
}),
    n(653041);
var i = n(570140),
    r = n(509848);
function a(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD',
        guildId: e,
        userIds: t
    });
}
function s(e, t) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE',
        guildId: e,
        userIds: t
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES',
        guildId: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES',
        guildId: e
    });
}
function u(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_CHANNEL',
        guildId: e,
        channelId: t,
        ranges: n
    });
}
function c(e) {
    let { guildId: t, channelId: n, y: i, height: a, rowHeight: s } = e;
    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let l = [];
    function c(e) {
        let t = e + (r.dj - 1);
        return l.push([e, t]), t + 1;
    }
    let d = o(0.5 * a),
        f = o(i, -d),
        _ = o(i + a, d);
    for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / r.dj) * r.dj; f <= _; ) f = c(f);
    u(t, n, l);
}
