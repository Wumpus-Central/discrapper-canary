n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(6025),
    l = n(433355),
    a = n(626135),
    o = n(585483),
    s = n(922409),
    c = n(545724),
    u = n(749405),
    d = n(981631);
function p(e) {
    let { index: t, className: n, channel: p, user: h, hasSingleMessageRequest: f } = e,
        { channelId: g } = (0, s._)();
    return (0, r.jsx)(c.Z, {
        index: t,
        className: n,
        isFocused: g === p.id,
        channel: p,
        user: h,
        onClick: (e) => {
            e.stopPropagation(),
                i.Z.openPrivateChannelAsSidebar({
                    channelId: p.id,
                    baseChannelId: l.uZ,
                    hasSingleMessageRequest: f
                }),
                a.default.track(d.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: p.id,
                    other_user_id: h.id
                }),
                setTimeout(() => {
                    o.S.dispatch(d.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: p.id });
                }, 0);
        },
        children: (e) =>
            (0, r.jsx)(u.C, {
                active: e,
                user: h,
                channel: p
            })
    });
}
