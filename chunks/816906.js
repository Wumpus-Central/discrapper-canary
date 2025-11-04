n.d(t, { Z: () => f }), n(361932), n(187205);
var r = n(106351),
    a = n(442837),
    i = n(159299),
    l = n(592125),
    o = n(271383),
    c = n(158776),
    u = n(594174),
    s = n(938475),
    d = n(700785),
    _ = n(233870),
    m = n(981631);
function f(e) {
    return (0, a.Wu)([l.Z, s.ZP, u.default, i.Z, o.ZP, c.Z], () => {
        let t = l.Z.getChannel(e);
        if (null == t) return [];
        if (t.type === r.d.GUILD_VOICE)
            return s.ZP.getVoiceStatesForChannel(t).map((e) => {
                let { user: t } = e;
                return t.id;
            });
        if (t.type === r.d.GROUP_DM) {
            var n;
            return (0, _.T)(null != (n = t.recipients) ? n : [], u.default).map((e) => e.id);
        }
        if (t.isThread()) {
            let t = i.Z.getMemberListSections(e);
            return null != t ? Object.values(t).flatMap((e) => e.userIds) : [];
        }
        return null != t.guild_id
            ? o.ZP.getMembers(t.guild_id)
                  .filter((e) => {
                      let n = c.Z.getStatus(e.userId, t.guild_id),
                          r = n !== m.Skl.OFFLINE && n !== m.Skl.INVISIBLE && n !== m.Skl.UNKNOWN,
                          a = d.BT({
                              permission: m.Plq.VIEW_CHANNEL,
                              user: e.userId,
                              context: t,
                          });
                      return r && a;
                  })
                  .map((e) => e.userId)
            : [];
    }, [e]);
}
