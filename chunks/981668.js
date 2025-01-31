n.d(t, { Z: () => E }), n(47120);
var i = n(147913),
    r = n(367907),
    a = n(728345),
    s = n(812206),
    o = n(314897),
    l = n(592125),
    u = n(944486),
    c = n(885110),
    d = n(649739),
    f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    return e.filter((e) => e.type === f.IIU.PLAYING && e.application_id).map((e) => e.application_id);
}
async function h(e) {
    await a.ZP.fetchApplications(e, !1);
}
async function m(e) {
    if (null == e) return;
    let t = l.Z.getChannel(e);
    if (null == t || !(0, d.Ku)('running_games_change', !1)) return;
    let n = c.Z.getActivities();
    if (0 === n.length) return;
    let i = p([...n]);
    await h([...i]);
    let a = s.Z.getApplication(i[0]);
    null != a &&
        r.ZP.trackWithMetadata(f.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: a.name,
            user_id: o.default.getId()
        });
}
class g extends i.Z {
    handleRunningGamesChange() {
        m(u.Z.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        m(t);
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            });
    }
}
let E = new g();
