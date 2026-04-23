n.d(t, { C: () => d }), n(64700);
var i = n(311907);
n(63995), n(113783), n(69407);
var r = n(446600),
    a = n(624265);
n(616356);
var l = n(734057);
n(576705), n(607567);
var s = n(473019);
n(539446);
var o = n(508654);
function d(e) {
    let t = (0, a.Ay)(e),
        n = l.A.getChannel(t[0]?.id),
        d = (0, i.bG)([r.A], () => r.A.getStageInstanceByChannel(n?.id), [n]),
        u = (0, o.BP)(e),
        { isStageNoticeHidden: c, isEventNoticeHidden: A } = (0, i.cf)(
            [s.A],
            () => ({
                isStageNoticeHidden: s.A.isLiveChannelNoticeHidden({ stageId: d?.id }),
                isEventNoticeHidden: s.A.isLiveChannelNoticeHidden({ eventId: u?.id }),
            }),
            [d, u],
        );
    if (null != u)
        if (null != d) return !c;
        else return !A;
    return null != d && !c;
}
n(988794), n(818348);
