n.d(t, { A: () => A });
var i = n(439372),
    r = n(952818),
    a = n(760751),
    s = n(38405),
    l = n(636537),
    o = n(913122),
    d = n(652215);
async function c(e, t) {
    try {
        await l.Bo.patch({ url: d.Rsh.MY_CONTENT_INVENTORY_APPLICATION(e), body: t, rejectWithError: (0, l.fT)() });
    } catch (e) {
        throw new o.LG(e);
    }
}
async function u(e, t) {
    try {
        await c(e, { is_sharing: t });
    } catch (e) {
        s.A.captureException(e);
    }
}
function _(e) {
    let { game: t } = e,
        n = r.Ay.isDetectionEnabled(t),
        i = t.id ?? a.A.findGame(t)?.id;
    null != i && u(i, n);
}
class E extends i.A {
    actions = { RUNNING_GAME_TOGGLE_DETECTION: _, RUNNING_GAME_DELETE_ENTRY: _ };
}
let A = new E();
