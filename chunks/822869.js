n.d(t, {
    Ad: () => p,
    Lb: () => c,
    ZF: () => _,
    gP: () => u,
    mh: () => h,
    sF: () => d,
    xp: () => m
});
var i = n(192379),
    l = n(392711),
    a = n(367907),
    r = n(592125),
    s = n(626135),
    o = n(981631);
function c(e, t, n) {
    s.default.track(o.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    });
}
function d(e) {
    let { channelId: t, messageId: n, numDestinationChanges: i, numQueryChanges: l } = e;
    s.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: i,
        num_query_changes: l
    });
}
function u(e) {
    let { channelId: t, messageId: n, hasError: i, hasContextMessage: l, numDestinations: c, numDestinationChanges: d, numQueryChanges: u, anyDestinationHasSlowmode: m, source: _ } = e;
    if (
        (s.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: t,
            message_id: n,
            has_error: i,
            has_context_message: l,
            num_destinations: c,
            num_destination_changes: d,
            num_query_changes: u,
            any_destination_has_slowmode: m
        }),
        'message-shortcut' === _)
    ) {
        let e = r.Z.getChannel(t);
        s.default.track(o.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: 'forward',
            original_message_id: n,
            ...(0, a.hH)(null == e ? void 0 : e.guild_id),
            ...(0, a.v_)(e)
        });
    }
}
function m(e, t) {
    s.default.track(o.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: t
    });
}
function _() {
    return i.useMemo(
        () =>
            (0, l.once)((e, t, n) => {
                s.default.track(o.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n
                });
            }),
        []
    );
}
function h() {
    return i.useMemo(
        () =>
            (0, l.once)((e, t) => {
                s.default.track(o.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
function p() {
    return i.useMemo(
        () =>
            (0, l.once)((e, t) => {
                s.default.track(o.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
