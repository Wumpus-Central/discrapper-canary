"use strict";
n.d(t, { A: () => h });
var i = n(439372),
    r = n(328153),
    s = n(760751),
    a = n(38405),
    o = n(636537),
    l = n(845584),
    d = n(652215);
async function _(e, t) {
    try {
        await o.Bo.patch({ url: d.Rsh.MY_CONTENT_INVENTORY_APPLICATION(e), body: t, rejectWithError: !1 });
    } catch (e) {
        throw new l.LG(e);
    }
}
async function u(e, t) {
    try {
        await _(e, { is_sharing: t });
    } catch (e) {
        a.A.captureException(e);
    }
}
function c(e) {
    let { game: t } = e,
        n = r.Ay.isDetectionEnabled(t),
        i = t.id ?? s.A.findGame(t)?.id;
    null != i && u(i, n);
}
class E extends i.A {
    actions = { RUNNING_GAME_TOGGLE_DETECTION: c, RUNNING_GAME_DELETE_ENTRY: c };
}
let h = new E();
