n.d(t, { D: () => a });
var l = n(225142),
    i = n(701785),
    r = n(374084),
    s = n(473529);
async function a(e, t) {
    if (null == e || !(0, s.K)(e)) return;
    let n = i.h.getSettings(e);
    if ((n === i.A && (await (0, l.ag)(e), (n = i.h.getSettings(e))), n !== i.A && null != n)) {
        if (null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t)) return r.K5.TODO;
        if (null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t))
            return r.K5.RESOURCE;
    }
}
