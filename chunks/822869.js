t.d(n, {
    Ad: function () {
        return p;
    },
    Lb: function () {
        return u;
    },
    ZF: function () {
        return _;
    },
    gP: function () {
        return d;
    },
    mh: function () {
        return h;
    },
    sF: function () {
        return c;
    },
    xp: function () {
        return f;
    }
});
var a = t(192379),
    r = t(392711),
    i = t(367907),
    l = t(592125),
    o = t(626135),
    s = t(981631);
function u(e, n, t) {
    o.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: n,
        source: t
    });
}
function c(e) {
    let { channelId: n, messageId: t, numDestinationChanges: a, numQueryChanges: r } = e;
    o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: t,
        num_destination_changes: a,
        num_query_changes: r
    });
}
function d(e) {
    let { channelId: n, messageId: t, hasError: a, hasContextMessage: r, numDestinations: u, numDestinationChanges: c, numQueryChanges: d, anyDestinationHasSlowmode: f, source: _ } = e;
    if (
        (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: n,
            message_id: t,
            has_error: a,
            has_context_message: r,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: f
        }),
        'message-shortcut' === _)
    ) {
        let e = l.Z.getChannel(n);
        o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: 'forward',
            original_message_id: t,
            ...(0, i.hH)(null == e ? void 0 : e.guild_id),
            ...(0, i.v_)(e)
        });
    }
}
function f(e, n) {
    o.default.track(s.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: n
    });
}
function _() {
    return a.useMemo(
        () =>
            (0, r.once)((e, n, t) => {
                o.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: n,
                    has_query: t
                });
            }),
        []
    );
}
function h() {
    return a.useMemo(
        () =>
            (0, r.once)((e, n) => {
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
            (0, r.once)((e, n) => {
                o.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
