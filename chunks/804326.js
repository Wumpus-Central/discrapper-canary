(n.d(t, { A: () => U }), n(938796));
var i = n(665260),
    l = n(17928),
    r = n(73153),
    s = n(280450),
    a = n(734057),
    o = n(71393),
    u = n(309010),
    d = n(543465),
    c = n(927813),
    h = n(935208),
    f = n(832712),
    g = n(477427),
    A = n(393432),
    p = n(790782),
    m = n(355097),
    E = n(652215);
let I = [
        { timeSinceJoin: +c.A.Millis.HOUR, sends: 1, viewTime: +c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.DAY, sends: 2, viewTime: 2 * c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.WEEK, sends: 5, viewTime: 5 * c.A.Millis.MINUTE },
        { timeSinceJoin: +c.A.Millis.DAYS_30, sends: 10, viewTime: 30 * c.A.Millis.MINUTE },
    ],
    S = 5 * I[I.length - 1].viewTime,
    C = c.A.Millis.WEEK,
    _ = { channels: {} },
    N = new Set(),
    T = null,
    v = 0,
    y = 0;
function M() {
    if (null == T || !O(T)) return !1;
    let e = R(T);
    if (e.lastActionTime > Date.now() - c.A.Millis.DAY && e.viewDuration > S) return !1;
    let t = Date.now();
    return ((e.lastActionTime = t), (e.viewDuration += t - v), (v = t), !0);
}
function D() {
    return (
        0 !== y && (clearInterval(y), (y = 0)),
        d.Ay.useNewNotifications &&
            (y = setInterval(() => {
                M() && w.emitChange();
            }, 15 * c.A.Millis.SECOND)),
        !1
    );
}
function R(e) {
    return (e in _.channels || (_.channels[e] = { lastActionTime: 0, viewDuration: 0, numSends: 0 }), _.channels[e]);
}
function O(e) {
    if (!d.Ay.useNewNotifications || N.has(e)) return !1;
    let t = a.A.getBasicChannel(e);
    if (
        null == t ||
        null == t.guild_id ||
        d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
        x(t.guild_id, t.id) ||
        x(t.guild_id, t.parent_id)
    )
        return !1;
    let n = d.Ay.resolveUnreadSetting(t);
    return d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === p.e.UNSET && n !== p.e.ALL_MESSAGES;
}
function x(e, t) {
    if (null == t) return !1;
    let n = d.Ay.getChannelOverrides(e)[t];
    return (
        null != n &&
        !!(
            (null != n.message_notifications && n.message_notifications !== E.orn.NULL) ||
            (null != n.flags && (0, i.br)(n.flags, m.vv.UNREADS_ALL_MESSAGES | m.vv.UNREADS_ONLY_MENTIONS))
        )
    );
}
class L extends l.Ay.PersistedStore {
    static displayName = "UnreadSettingNoticeStore2";
    static persistKey = "UnreadSettingNoticeStore2";
    initialize(e) {
        (null != e && (_.channels = e.channels),
            this.syncWith([d.Ay], D),
            this.waitFor(s.default, a.A, o.A, u.Ay, d.Ay));
    }
    getState() {
        return _;
    }
    getLastActionTime(e) {
        return _.channels[e]?.lastActionTime ?? 0;
    }
    maybeAutoUpgradeChannel(e) {
        var t, n, i;
        let l;
        if (!O(e)) return !1;
        let r = a.A.getBasicChannel(e);
        return (
            null != r &&
            null != r.guild_id &&
            !!(function (e) {
                let t = o.A.getGuild(e.guild_id),
                    n = t?.joinedAt ?? new Date(),
                    i = Math.min(h.default.age(e.id), Date.now() - n.getTime()),
                    l = _.channels[e.id];
                if (null == l || l.lastActionTime < Date.now() - C) return !1;
                for (let e of I)
                    if (i < e.timeSinceJoin && (l.numSends >= e.sends || l.viewDuration >= e.viewTime)) return !0;
                return !1;
            })(r) &&
            (delete _.channels[e],
            N.add(e),
            (t = r.guild_id),
            (n = r.id),
            (i = p.e.ALL_MESSAGES),
            (l = d.Ay.getChannelIdFlags(t, n)),
            f.A.updateChannelOverrideSettings({
                guildId: t,
                channelId: n,
                settings: {
                    flags: (0, A.mD)(
                        l,
                        i === p.e.ALL_MESSAGES ? m.vv.UNREADS_ALL_MESSAGES : m.vv.UNREADS_ONLY_MENTIONS,
                    ),
                },
                label: g.G_.unreads(i),
            }),
            !0)
        );
    }
}
let w = new L(r.h, {
        CHANNEL_SELECT: function () {
            let e = M();
            return ((T = u.Ay.getChannelId()), (v = Date.now()), e);
        },
        CONNECTION_OPEN: function () {
            ((T = u.Ay.getChannelId()), (v = Date.now()), D());
            let e = Date.now() - C;
            h.default.forEach(_.channels, (t, n) => {
                let { lastActionTime: i } = t;
                i < e && delete _.channels[n];
            });
        },
        MESSAGE_CREATE: function (e) {
            if (e.optimistic || e.isPushNotification || e.message.author?.id !== s.default.getId() || !O(e.channelId))
                return !1;
            let t = R(e.channelId);
            ((t.lastActionTime = Date.now()), t.numSends++);
        },
    }),
    U = w;
