n.d(t, { A: () => u });
var s = n(627968);
n(64700);
var l = n(138298),
    a = n(761640),
    i = n(954571),
    r = n(203982),
    c = n(822082),
    d = n(384184),
    o = n(652215);
function u(e) {
    let { index: t, className: n, channel: u, user: A, hasSingleMessageRequest: h } = e;
    return (0, s.jsx)(c.A, {
        index: t,
        className: n,
        isFocused: !1,
        channel: u,
        user: A,
        onClick: (e) => {
            e.stopPropagation(),
                l.A.openPrivateChannelAsSidebar({ channelId: u.id, baseChannelId: a.fe, hasSingleMessageRequest: h }),
                i.default.track(o.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: u.id,
                    other_user_id: A.id,
                }),
                setTimeout(() => {
                    r._.dispatch(o.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: u.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(d.A, { active: e, user: A, channel: u }),
    });
}
