"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(765379),
    s = n(90644),
    l = n(587895),
    o = n(429913),
    d = n(734057),
    c = n(71393),
    u = n(977997),
    _ = n(580763),
    E = n(428803),
    A = n(652215);
function h(e) {
    let { user: t, currentUser: n, activity: h, className: I, onClose: f } = e,
        { voiceGuild: p, voiceChannel: T } = (0, r.cf)([c.A, u.A, d.A], () => {
            let e = (0, a.A)(h);
            if (!e && h.type !== A.$pd.HANG_STATUS) return {};
            let n = e
                    ? u.A.getVoiceStateForSession(t.id, h?.session_id)?.channelId
                    : u.A.getVoiceStateForUser(t.id)?.channelId,
                i = d.A.getChannel(n);
            return { voiceGuild: c.A.getGuild(i?.getGuildId()), voiceChannel: i };
        });
    (0, o.h)(h?.application_id);
    let m = (0, r.bG)([l.A], () =>
        h?.application_id != null
            ? l.A.getApplication(h.application_id)
            : h?.name != null
              ? l.A.getApplicationByName(h.name)
              : null,
    );
    return h?.type === A.$pd.CUSTOM_STATUS || h?.type === A.$pd.HANG_STATUS
        ? null
        : (0, s.A)(h)
          ? (0, i.jsx)(E.A, { user: t, currentUser: n, activity: h, className: I, onClose: f })
          : (0, i.jsx)(_.A, {
                user: t,
                currentUser: n,
                activity: h,
                application: m,
                voiceGuild: p,
                voiceChannel: T,
                className: I,
                onClose: f,
            });
}
