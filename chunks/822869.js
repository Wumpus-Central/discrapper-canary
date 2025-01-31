t.d(n, {
    Ad: () => p,
    Lb: () => c,
    ZF: () => h,
    gP: () => d,
    mh: () => f,
    sF: () => u,
    xp: () => _
});
var a = t(192379),
    i = t(392711),
    r = t(367907),
    l = t(592125),
    o = t(626135),
    s = t(981631);
function c(e, n, t) {
    o.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: n,
        source: t
    });
}
function u(e) {
    let { channelId: n, messageId: t, numDestinationChanges: a, numQueryChanges: i } = e;
    o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: t,
        num_destination_changes: a,
        num_query_changes: i
    });
}
function d(e) {
    let { channelId: n, messageId: t, hasError: a, hasContextMessage: i, numDestinations: c, numDestinationChanges: u, numQueryChanges: d, anyDestinationHasSlowmode: _, source: h } = e;
    if (
        (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: n,
            message_id: t,
            has_error: a,
            has_context_message: i,
            num_destinations: c,
            num_destination_changes: u,
            num_query_changes: d,
            any_destination_has_slowmode: _
        }),
        'message-shortcut' === h)
    ) {
        let e = l.Z.getChannel(n);
        o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: 'forward',
            original_message_id: t,
            ...(0, r.hH)(null == e ? void 0 : e.guild_id),
            ...(0, r.v_)(e)
        });
    }
}
function _(e, n) {
    o.default.track(s.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: n
    });
}
function h() {
    return a.useMemo(
        () =>
            (0, i.once)((e, n, t) => {
                o.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: n,
                    has_query: t
                });
            }),
        []
    );
}
function f() {
    return a.useMemo(
        () =>
            (0, i.once)((e, n) => {
                o.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
function p() {
    return a.useMemo(
        () =>
            (0, i.once)((e, n) => {
                o.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
