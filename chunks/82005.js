n.d(t, {
    C: () => c,
}),
    n(64700);
var r = n(311907);
n(63995), n(113783), n(69407);
var i = n(446600),
    l = n(624265);
n(616356);
var a = n(734057);
n(576705), n(607567);
var s = n(473019);
n(539446);
var o = n(508654);

function c(e) {
    var t;
    let n = (0, l.Ay)(e),
        c = a.A.getChannel(null == (t = n[0]) ? void 0 : t.id),
        u = (0, r.bG)([i.A], () => i.A.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
        d = (0, o.BP)(e),
        { isStageNoticeHidden: p, isEventNoticeHidden: f } = (0, r.cf)(
            [s.A],
            () => ({
                isStageNoticeHidden: s.A.isLiveChannelNoticeHidden({
                    stageId: null == u ? void 0 : u.id,
                }),
                isEventNoticeHidden: s.A.isLiveChannelNoticeHidden({
                    eventId: null == d ? void 0 : d.id,
                }),
            }),
            [u, d],
        );
    if (null != d)
        if (null != u) return !p;
        else return !f;
    return null != u && !p;
}
n(988794), n(818348);
