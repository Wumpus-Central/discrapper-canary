n.d(e, { A: () => r });
var i = n(954571),
    l = n(652215);
function r(t) {
    let {
        problem: e,
        stream: n,
        feedback: r,
        streamApplication: a,
        analyticsData: s,
        location: o,
        rating: u = null,
        category: c,
        variant: d,
    } = t;
    i.default.track(
        l.HAw.STREAM_REPORT_PROBLEM,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        }),
                    )),
                    i.forEach(function (e) {
                        var i;
                        (i = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = i);
                    });
            }
            return t;
        })(
            {
                reason: e,
                category: c,
                reason_variant: d,
                streamer_user_id: n.ownerId,
                stream_channel_id: n.channelId,
                guild_id: n.guildId,
                application_id: null != a ? a.id : null,
                application_name: null != a ? a.name : null,
                location: o,
                rating: u,
                feedback: r,
            },
            s,
        ),
    );
}
