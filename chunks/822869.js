n.d(t, {
    Ad: () => h,
    Lb: () => c,
    ZF: () => p,
    gP: () => d,
    mh: () => _,
    sF: () => u,
    xp: () => f
});
var r = n(192379),
    i = n(392711),
    o = n(367907),
    a = n(592125),
    l = n(626135),
    s = n(981631);
function c(e, t, n) {
    l.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    });
}
function u(e) {
    let { channelId: t, messageId: n, numDestinationChanges: r, numQueryChanges: i } = e;
    l.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: r,
        num_query_changes: i
    });
}
function d(e) {
    let { channelId: t, messageId: n, hasError: r, hasContextMessage: i, numDestinations: c, numDestinationChanges: u, numQueryChanges: d, anyDestinationHasSlowmode: f, source: p } = e;
    if (
        (l.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: r,
            has_context_message: i,
            num_destinations: c,
            num_destination_changes: u,
            num_query_changes: d,
            any_destination_has_slowmode: f
        }),
        'message-shortcut' === p)
    ) {
        let e = a.Z.getChannel(t);
        l.default.track(
            s.rMx.MESSAGE_SHORTCUT_ACTION_SENT,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    action: 'forward',
                    original_message_id: n
                },
                (0, o.hH)(null == e ? void 0 : e.guild_id),
                (0, o.v_)(e)
            )
        );
    }
}
function f(e, t) {
    l.default.track(s.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: t
    });
}
function p() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t, n) => {
                l.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n
                });
            }),
        []
    );
}
function _() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                l.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
function h() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                l.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
