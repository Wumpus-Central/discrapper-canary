n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(765379),
    a = n(90644),
    r = n(587895),
    o = n(429913),
    d = n(734057),
    c = n(71393),
    u = n(977997),
    h = n(17389),
    m = n(428803),
    p = n(652215);
function g(e) {
    let { user: t, currentUser: n, activity: g, className: f, onClose: A } = e,
        { voiceGuild: x, voiceChannel: v } = (0, l.cf)([c.A, u.A, d.A], () => {
            let e = (0, s.A)(g);
            if (!e && g.type !== p.$pd.HANG_STATUS) return {};
            let n = e
                    ? u.A.getVoiceStateForSession(t.id, g?.session_id)?.channelId
                    : u.A.getVoiceStateForUser(t.id)?.channelId,
                i = d.A.getChannel(n);
            return { voiceGuild: c.A.getGuild(i?.getGuildId()), voiceChannel: i };
        });
    (0, o.h)(g?.application_id);
    let E = (0, l.bG)([r.A], () =>
        g?.application_id != null
            ? r.A.getApplication(g.application_id)
            : g?.name != null
              ? r.A.getApplicationByName(g.name)
              : null,
    );
    return g?.type === p.$pd.CUSTOM_STATUS || g?.type === p.$pd.HANG_STATUS
        ? null
        : (0, a.A)(g)
          ? (0, i.jsx)(m.A, { user: t, currentUser: n, activity: g, className: f, onClose: A })
          : (0, i.jsx)(h.A, {
                user: t,
                currentUser: n,
                activity: g,
                application: E,
                voiceGuild: x,
                voiceChannel: v,
                className: f,
                onClose: A,
            });
}
