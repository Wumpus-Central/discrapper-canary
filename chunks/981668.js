(n.d(t, { Z: () => b }), n(388685));
var r = n(147913),
    i = n(367907),
    a = n(728345),
    o = n(812206),
    s = n(574176),
    l = n(314897),
    c = n(592125),
    u = n(944486),
    d = n(885110),
    _ = n(649739),
    f = n(981631);
function p(e, t, n) {
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
function h(e) {
    return e.filter((e) => e.type === f.IIU.PLAYING && e.application_id).map((e) => e.application_id);
}
async function m(e) {
    await a.ZP.fetchApplications(e, !1);
}
async function g(e) {
    if (null == e) return;
    let t = c.Z.getChannel(e),
        { enableHangStatus: n } = s.n.getCurrentConfig({ location: 'GameActivityManager' }, { autoTrackExposure: !1 });
    if (null == t || !((0, _.Ku)('running_games_change', !1) || n)) return;
    let r = d.Z.getActivities();
    if (0 === r.length) return;
    let a = h([...r]);
    await m([...a]);
    let u = o.Z.getApplication(a[0]);
    null != u &&
        i.ZP.trackWithMetadata(f.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: u.name,
            user_id: l.default.getId()
        });
}
class E extends r.Z {
    handleRunningGamesChange() {
        g(u.Z.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        g(t);
    }
    constructor(...e) {
        (super(...e),
            p(this, 'actions', {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }));
    }
}
let b = new E();
