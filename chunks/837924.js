i.d(t, { A: () => x });
var l = i(627968);
i(64700);
var n = i(311907),
    s = i(765379),
    a = i(90644),
    d = i(587895),
    r = i(429913),
    o = i(734057),
    c = i(71393),
    u = i(977997),
    A = i(712785),
    h = i(384481),
    g = i(652215);
function x(e) {
    let { user: t, currentUser: i, activity: x, className: m, onClose: C } = e,
        { voiceGuild: _, voiceChannel: p } = (0, n.cf)([c.A, u.A, o.A], () => {
            let e = (0, s.A)(x);
            if (!e && x.type !== g.$pd.HANG_STATUS) return {};
            let i = e
                    ? u.A.getVoiceStateForSession(t.id, x?.session_id)?.channelId
                    : u.A.getVoiceStateForUser(t.id)?.channelId,
                l = o.A.getChannel(i);
            return { voiceGuild: c.A.getGuild(l?.getGuildId()), voiceChannel: l };
        });
    (0, r.h)(x?.application_id);
    let N = (0, n.bG)([d.A], () =>
        x?.application_id != null
            ? d.A.getApplication(x.application_id)
            : x?.name != null
              ? d.A.getApplicationByName(x.name)
              : null,
    );
    return x?.type === g.$pd.CUSTOM_STATUS || x?.type === g.$pd.HANG_STATUS
        ? null
        : (0, a.A)(x)
          ? (0, l.jsx)(h.A, { user: t, currentUser: i, activity: x, className: m, onClose: C })
          : (0, l.jsx)(A.A, {
                user: t,
                currentUser: i,
                activity: x,
                application: N,
                voiceGuild: _,
                voiceChannel: p,
                className: m,
                onClose: C,
            });
}
