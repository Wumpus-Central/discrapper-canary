n.d(t, { s: () => o });
var i = n(442331),
    l = n(114994),
    r = n(679737);
let s = { mode: "pending", application_ids: [] },
    a = { mode: "pending", application_ids: [], failed: !0 };
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        o = t.getProject(e);
    if (null == o) return s;
    let u = n.getLoadState(o.id);
    return "failed" === u ? a : "loaded" !== u ? s : (0, r.fG)(n.getSettings(o.id));
}
