"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(425927),
    i = n(381438),
    s = n(61025);
function a(e) {
    return (
        !!e.content_classification?.loaded &&
        (null == e.content_classification.data ||
            (0, r.U1)({ type: r.fS.MINIMAL, data: e.content_classification.data }) === i.Y.EVERYONE)
    );
}
function o(e, t) {
    let { enabled: n } = s.A.getConfig({ location: "presence_filtering" });
    if (!n) return { activities: e, hiddenActivities: t };
    let r = [],
        i = [];
    for (let t of e) a(t) ? r.push(t) : i.push(t);
    return 0 === i.length ? { activities: e, hiddenActivities: t } : { activities: r, hiddenActivities: [...t, ...i] };
}
