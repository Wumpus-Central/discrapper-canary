"use strict";
n.d(t, { D: () => r });
var l = n(225142),
    i = n(701785),
    s = n(374084),
    a = n(473529);
async function r(e, t) {
    if (null == e || !(0, a.K)(e)) return;
    let n = i.h.getSettings(e);
    if ((n === i.A && (await (0, l.ag)(e), (n = i.h.getSettings(e))), n !== i.A && null != n)) {
        if (null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t)) return s.K5.TODO;
        if (null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t))
            return s.K5.RESOURCE;
    }
}
