n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(6025),
    l = n(433355),
    a = n(626135),
    s = n(585483),
    o = n(922409),
    c = n(545724),
    d = n(749405),
    u = n(981631);
function h(e) {
    let { index: t, className: n, channel: h, user: m, hasSingleMessageRequest: p } = e,
        { channelId: g } = (0, o._)();
    return (0, i.jsx)(c.Z, {
        index: t,
        className: n,
        isFocused: g === h.id,
        channel: h,
        user: m,
        onClick: (e) => {
            e.stopPropagation(),
                r.Z.openPrivateChannelAsSidebar({
                    channelId: h.id,
                    baseChannelId: l.uZ,
                    hasSingleMessageRequest: p
                }),
                a.default.track(u.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: h.id,
                    other_user_id: m.id
                }),
                setTimeout(() => {
                    s.S.dispatch(u.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: h.id });
                }, 0);
        },
        children: (e) =>
            (0, i.jsx)(d.C, {
                active: e,
                user: m,
                channel: h
            })
    });
}
