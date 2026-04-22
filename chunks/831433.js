"use strict";
n.d(t, { A: () => a }), n(321073);
var r = n(425927),
    i = n(381438),
    s = n(61025);
function a(e, t) {
    let { enabled: n } = s.A.getConfig({ location: "presence_filtering" });
    if (!n) return { activities: e, hiddenActivities: t };
    let a = [],
        o = [];
    for (let t of e)
        (
            t.content_classification?.loaded
                ? null == t.content_classification.data
                    ? 0
                    : (0, r.U1)({ type: r.fS.MINIMAL, data: t.content_classification.data }) !== i.Y.EVERYONE
                : 1
        )
            ? o.push(t)
            : a.push(t);
    return 0 === o.length ? { activities: e, hiddenActivities: t } : { activities: a, hiddenActivities: [...t, ...o] };
}
