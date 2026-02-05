n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(138298),
    a = n(761640),
    l = n(954571),
    s = n(203982),
    o = n(822082),
    d = n(384184),
    c = n(652215);
function u(e) {
    let { index: t, className: n, channel: u, user: A, hasSingleMessageRequest: h } = e;
    return (0, i.jsx)(o.A, {
        index: t,
        className: n,
        isFocused: !1,
        channel: u,
        user: A,
        onClick: (e) => {
            e.stopPropagation(),
                r.A.openPrivateChannelAsSidebar({ channelId: u.id, baseChannelId: a.fe, hasSingleMessageRequest: h }),
                l.default.track(c.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: u.id,
                    other_user_id: A.id,
                }),
                setTimeout(() => {
                    s._.dispatch(c.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: u.id });
                }, 0);
        },
        children: (e) => (0, i.jsx)(d.A, { active: e, user: A, channel: u }),
    });
}
