"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(765379),
    o = n(90644),
    l = n(587895),
    u = n(429913),
    c = n(806246),
    d = n(890330),
    _ = n(734057),
    f = n(71393),
    p = n(977997),
    h = n(954571),
    m = n(712785),
    g = n(384481),
    E = n(652215);
function A(e) {
    let { user: t, currentUser: n, activity: A, className: I, onClose: T } = e,
        { voiceGuild: y, voiceChannel: S } = (0, a.cf)([f.A, p.A, _.A], () => {
            let e = (0, s.A)(A);
            if (!e && A?.type !== E.$pd.HANG_STATUS) return {};
            let n = e
                    ? p.A.getVoiceStateForSession(t.id, A?.session_id)?.channelId
                    : p.A.getVoiceStateForUser(t.id)?.channelId,
                r = _.A.getChannel(n);
            return { voiceGuild: f.A.getGuild(r?.getGuildId()), voiceChannel: r };
        }),
        v = (0, d.v)("UserProfileActivityCardWrapper", S),
        C = A?.type === E.$pd.HANG_STATUS && v ? S : null;
    (0, u.h)(A?.application_id);
    let b = (0, a.bG)([l.A], () =>
        A?.application_id != null
            ? l.A.getApplication(A.application_id)
            : A?.name != null
              ? l.A.getApplicationByName(A.name)
              : null,
    );
    return (i.useEffect(() => {
        A?.type === E.$pd.HANG_STATUS &&
            v &&
            h.default.track(E.HAw.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                other_user_id: t.id,
                ...(0, c.A)(C?.id),
            });
    }, [A?.type, v, C?.id, t.id]),
    A?.type !== E.$pd.CUSTOM_STATUS && (A?.type !== E.$pd.HANG_STATUS || v))
        ? (0, o.A)(A)
            ? (0, r.jsx)(g.A, { user: t, currentUser: n, activity: A, className: I, onClose: T })
            : (0, r.jsx)(m.A, {
                  user: t,
                  currentUser: n,
                  activity: A,
                  application: b,
                  voiceGuild: y,
                  voiceChannel: S,
                  className: I,
                  onClose: T,
              })
        : null;
}
