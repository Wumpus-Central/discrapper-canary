var i = r(47120);
var a = r(147913),
    o = r(367907),
    s = r(728345),
    l = r(812206),
    u = r(574176),
    c = r(314897),
    d = r(592125),
    f = r(944486),
    p = r(885110),
    h = r(649739),
    _ = r(981631);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function g(e) {
    return e.filter((e) => e.type === _.IIU.PLAYING && e.application_id).map((e) => e.application_id);
}
async function E(e) {
    await s.ZP.fetchApplications(e, !1);
}
async function v(e) {
    if (null == e) return;
    let n = d.Z.getChannel(e),
        { enableHangStatus: r } = u.n.getCurrentConfig({ location: 'GameActivityManager' }, { autoTrackExposure: !1 });
    if (null == n || !((0, h.Ku)('running_games_change', !1) || r)) return;
    let i = p.Z.getActivities();
    if (0 === i.length) return;
    let a = g([...i]);
    await E([...a]);
    let s = l.Z.getApplication(a[0]);
    null != s &&
        o.ZP.trackWithMetadata(_.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: n.guild_id,
            game_name: s.name,
            user_id: c.default.getId()
        });
}
class y extends a.Z {
    handleRunningGamesChange() {
        v(f.Z.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: n } = e;
        v(n);
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            });
    }
}
n.Z = new y();
