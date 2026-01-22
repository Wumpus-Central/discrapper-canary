n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(138298),
    l = n(761640),
    a = n(954571),
    s = n(203982),
    o = n(822082),
    c = n(384184),
    u = n(652215);

function d(e) {
    let { index: t, className: n, channel: d, user: p, hasSingleMessageRequest: f } = e;
    return (0, r.jsx)(o.A, {
        index: t,
        className: n,
        isFocused: !1,
        channel: d,
        user: p,
        onClick: (e) => {
            e.stopPropagation(),
                i.A.openPrivateChannelAsSidebar({
                    channelId: d.id,
                    baseChannelId: l.fe,
                    hasSingleMessageRequest: f,
                }),
                a.default.track(u.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: d.id,
                    other_user_id: p.id,
                }),
                setTimeout(() => {
                    s._.dispatch(u.jej.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: d.id,
                    });
                }, 0);
        },
        children: (e) =>
            (0, r.jsx)(c.A, {
                active: e,
                user: p,
                channel: d,
            }),
    });
}
