var s = d(855986),
    u = d(46653),
    a = d(977997),
    i = d(643501);
d.d(
    t,
    {},
    {
        A: function () {
            return (0, s.bG)(
                [u.default, a.A, i.default],
                () => {
                    let e = u.default.getId(),
                        t = i.default.getRemoteSessionId();
                    return a.A.getVoiceStateForSession(e, t) ?? void 0;
                },
                [],
            );
        },
    },
);
