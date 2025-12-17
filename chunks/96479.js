n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(6025),
    l = n(433355),
    a = n(626135),
    o = n(585483),
    s = n(488634),
    c = n(545724),
    u = n(749405),
    d = n(981631);
function p(e) {
    let { index: t, className: n, channel: p, user: f, hasSingleMessageRequest: g } = e,
        { channelId: h } = (0, s._)();
    return (0, r.jsx)(c.Z, {
        index: t,
        className: n,
        isFocused: h === p.id,
        channel: p,
        user: f,
        onClick: (e) => {
            e.stopPropagation(),
                i.Z.openPrivateChannelAsSidebar({
                    channelId: p.id,
                    baseChannelId: l.uZ,
                    hasSingleMessageRequest: g,
                }),
                a.default.track(d.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: p.id,
                    other_user_id: f.id,
                }),
                setTimeout(() => {
                    o.S.dispatch(d.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: p.id });
                }, 0);
        },
        children: (e) =>
            (0, r.jsx)(u.C, {
                active: e,
                user: f,
                channel: p,
            }),
    });
}
