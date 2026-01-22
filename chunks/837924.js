n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(765379),
    o = n(90644),
    l = n(587895),
    c = n(429913),
    u = n(806246),
    d = n(890330),
    f = n(734057),
    p = n(71393),
    _ = n(977997),
    h = n(954571),
    m = n(712785),
    g = n(384481),
    E = n(652215);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let { user: t, currentUser: n, activity: b, className: O, onClose: A } = e,
        { voiceGuild: v, voiceChannel: S } = (0, a.cf)([p.A, _.A, f.A], () => {
            var e, n;
            let r = (0, s.A)(b);
            if (!r && (null == b ? void 0 : b.type) !== E.$pd.HANG_STATUS) return {};
            let i = r
                    ? null == (e = _.A.getVoiceStateForSession(t.id, null == b ? void 0 : b.session_id))
                        ? void 0
                        : e.channelId
                    : null == (n = _.A.getVoiceStateForUser(t.id))
                      ? void 0
                      : n.channelId,
                a = f.A.getChannel(i);
            return {
                voiceGuild: p.A.getGuild(null == a ? void 0 : a.getGuildId()),
                voiceChannel: a,
            };
        }),
        I = (0, d.v)("UserProfileActivityCardWrapper", S),
        T = (null == b ? void 0 : b.type) === E.$pd.HANG_STATUS && I ? S : null;
    (0, c.h)(null == b ? void 0 : b.application_id);
    let C = (0, a.bG)([l.A], () =>
        (null == b ? void 0 : b.application_id) != null
            ? l.A.getApplication(b.application_id)
            : (null == b ? void 0 : b.name) != null
              ? l.A.getApplicationByName(b.name)
              : null,
    );
    return (i.useEffect(() => {
        (null == b ? void 0 : b.type) === E.$pd.HANG_STATUS &&
            I &&
            h.default.track(
                E.HAw.VIEW_HANG_STATUS,
                y(
                    {
                        source: "UserProfilePopout",
                        other_user_id: t.id,
                    },
                    (0, u.A)(null == T ? void 0 : T.id),
                ),
            );
    }, [null == b ? void 0 : b.type, I, null == T ? void 0 : T.id, t.id]),
    (null == b ? void 0 : b.type) !== E.$pd.CUSTOM_STATUS && ((null == b ? void 0 : b.type) !== E.$pd.HANG_STATUS || I))
        ? (0, o.A)(b)
            ? (0, r.jsx)(g.A, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  className: O,
                  onClose: A,
              })
            : (0, r.jsx)(m.A, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  application: C,
                  voiceGuild: v,
                  voiceChannel: S,
                  className: O,
                  onClose: A,
              })
        : null;
}
