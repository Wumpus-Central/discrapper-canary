n.d(t, {
    TV: () => u,
    b8: () => c,
    k$: () => s,
    kr: () => l,
    w5: () => o,
    ym: () => a
}),
    n(539854);
var r = n(570140),
    i = n(509848);
function a(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD',
        guildId: e,
        userIds: t
    });
}
function o(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE',
        guildId: e,
        userIds: t
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES',
        guildId: e
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES',
        guildId: e
    });
}
function c(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_SUBSCRIPTIONS_CHANNEL',
        guildId: e,
        channelId: t,
        ranges: n
    });
}
function u(e) {
    let { guildId: t, channelId: n, y: r, height: a, rowHeight: o } = e;
    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / o)) + t);
    }
    let l = [];
    function u(e) {
        let t = e + (i.dj - 1);
        return l.push([e, t]), t + 1;
    }
    let d = s(0.5 * a),
        f = s(r, -d),
        _ = s(r + a, d);
    for (f > 0 && (f = Math.max(u(0), f)), f = Math.floor(f / i.dj) * i.dj; f <= _; ) f = u(f);
    c(t, n, l);
}
