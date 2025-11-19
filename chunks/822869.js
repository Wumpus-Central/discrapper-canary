n.d(t, {
    Ad: () => m,
    Lb: () => d,
    ZF: () => p,
    gP: () => _,
    mh: () => h,
    sF: () => f,
});
var r = n(473749),
    i = n(392711),
    a = n(367907),
    o = n(592125),
    s = n(626135),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t, n) {
    s.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n,
    });
}
function f(e) {
    let { channelId: t, messageId: n, numDestinationChanges: r, numQueryChanges: i } = e;
    s.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: r,
        num_query_changes: i,
    });
}
function _(e) {
    let {
        channelId: t,
        messageId: n,
        hasError: r,
        hasContextMessage: i,
        numDestinations: c,
        numDestinationChanges: d,
        numQueryChanges: f,
        anyDestinationHasSlowmode: _,
        source: p,
    } = e;
    if (
        (s.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: r,
            has_context_message: i,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: f,
            any_destination_has_slowmode: _,
        }),
        "message-shortcut" === p)
    ) {
        let e = o.Z.getChannel(t);
        s.default.track(
            l.rMx.MESSAGE_SHORTCUT_ACTION_SENT,
            u(
                {
                    action: "forward",
                    original_message_id: n,
                },
                (0, a.hH)(null == e ? void 0 : e.guild_id),
                (0, a.v_)(e),
            ),
        );
    }
}
function p() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t, n) => {
                s.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n,
                });
            }),
        [],
    );
}
function h() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                s.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t,
                });
            }),
        [],
    );
}
function m() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                s.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t,
                });
            }),
        [],
    );
}
