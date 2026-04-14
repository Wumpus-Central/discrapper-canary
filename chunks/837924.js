"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(765379),
    a = n(90644),
    o = n(587895),
    l = n(429913),
    u = n(734057),
    c = n(71393),
    d = n(977997),
    _ = n(712785),
    f = n(384481),
    p = n(652215);
function h(e) {
    let { user: t, currentUser: n, activity: h, className: m, onClose: E } = e,
        { voiceGuild: g, voiceChannel: A } = (0, i.cf)([c.A, d.A, u.A], () => {
            let e = (0, s.A)(h);
            if (!e && h.type !== p.$pd.HANG_STATUS) return {};
            let n = e
                    ? d.A.getVoiceStateForSession(t.id, h?.session_id)?.channelId
                    : d.A.getVoiceStateForUser(t.id)?.channelId,
                r = u.A.getChannel(n);
            return { voiceGuild: c.A.getGuild(r?.getGuildId()), voiceChannel: r };
        });
    (0, l.h)(h?.application_id);
    let I = (0, i.bG)([o.A], () =>
        h?.application_id != null
            ? o.A.getApplication(h.application_id)
            : h?.name != null
              ? o.A.getApplicationByName(h.name)
              : null,
    );
    return h?.type === p.$pd.CUSTOM_STATUS || h?.type === p.$pd.HANG_STATUS
        ? null
        : (0, a.A)(h)
          ? (0, r.jsx)(f.A, { user: t, currentUser: n, activity: h, className: m, onClose: E })
          : (0, r.jsx)(_.A, {
                user: t,
                currentUser: n,
                activity: h,
                application: I,
                voiceGuild: g,
                voiceChannel: A,
                className: m,
                onClose: E,
            });
}
