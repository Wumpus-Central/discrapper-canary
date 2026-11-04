var s = a(855986),
    i = a(46653),
    l = a(977997),
    h = a(643501);
a.d(
    e,
    {},
    {
        A: function () {
            return (0, s.bG)(
                [i.default, l.A, h.default],
                () => {
                    let t = i.default.getId(),
                        e = h.default.getRemoteSessionId();
                    return l.A.getVoiceStateForSession(t, e) ?? void 0;
                },
                [],
            );
        },
    },
);
