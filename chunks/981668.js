n.d(t, { Z: () => b }), n(388685);
var r = n(147913),
    i = n(367907),
    a = n(728345),
    o = n(812206),
    s = n(574176),
    l = n(314897),
    c = n(592125),
    u = n(944486),
    d = n(885110),
    f = n(649739),
    p = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    return e.filter((e) => e.type === p.IIU.PLAYING && e.application_id).map((e) => e.application_id);
}
async function h(e) {
    await a.ZP.fetchApplications(e, !1);
}
async function g(e) {
    if (null == e) return;
    let t = c.Z.getChannel(e),
        { enableHangStatus: n } = (0, s.gx)({
            guildId: null == t ? void 0 : t.guild_id,
            location: "GameActivityManager",
        });
    if (null == t || !((0, f.Ku)("running_games_change", !1) || n)) return;
    let r = d.Z.getActivities();
    if (0 === r.length) return;
    let a = m([...r]);
    await h([...a]);
    let u = o.Z.getApplication(a[0]);
    null != u &&
        i.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: u.name,
            user_id: l.default.getId(),
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
        super(...e),
            _(this, "actions", {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
            });
    }
}
let b = new E();
