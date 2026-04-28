t.d(e, { D: () => u });
var i = t(225142),
    l = t(701785),
    r = t(374084),
    s = t(473529);
async function u(n, e) {
    if (null == n || !(0, s.K)(n)) return;
    let t = l.h.getSettings(n);
    if ((t === l.A && (await (0, i.ag)(n), (t = l.h.getSettings(n))), t !== l.A && null != t)) {
        if (null != t.newMemberActions && null != t.newMemberActions.find((n) => n.channelId === e)) return r.K5.TODO;
        if (null != t.resourceChannels && null != t.resourceChannels.find((n) => n.channelId === e))
            return r.K5.RESOURCE;
    }
}
