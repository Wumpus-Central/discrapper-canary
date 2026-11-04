var i = n(46653);
n.d(
    t,
    {},
    {
        S: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
                n = t.getId(),
                r = t.getSessionId();
            return e.userId === n && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === r);
        },
    },
);
