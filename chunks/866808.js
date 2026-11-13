var i = n(73153),
    r = n(391973),
    a = n(439372),
    s = n(934058),
    l = n(457827),
    o = n(919638),
    d = n(71393),
    c = n(83880),
    u = n(897720),
    _ = n(644434),
    E = n(652215),
    A = n(165610);
class f extends a.A {
    actions = { GUILD_DELETE: m, CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_SUCCESS: T };
}
let h = new f();
function I(e) {
    let t = new Set();
    for (let n of c.A.getWidgetsByTypeAndLayout(E.uss.CONJURE, _.GJ))
        (0, u.Du)(n) && e(n) && ((0, r.uv)(n.id), t.add(n.meta.applicationId));
    return t;
}
function p(e) {
    for (let t of e) (0, l.r)((0, A.VA)(t, A.ZN));
}
function m(e) {
    let { guild: t } = e;
    if ("unavailable" in t && !0 === t.unavailable) return;
    let n = new Set(s.A.getOwnedProjects().map((e) => e.application_id)),
        r = new Set();
    for (let e of [...s.A.getServerProjects(), ...s.A.getProjects()])
        e.guild_id !== t.id || n.has(e.application_id) || r.add(e.application_id);
    let a = I((e) => {
        let { meta: i } = e;
        return !n.has(i.applicationId) && (i.guildId === t.id || r.has(i.applicationId));
    });
    (0 !== r.size || 0 !== a.size) &&
        (i.h.dispatch({ type: "CONJURE_SERVER_OVERLAY_WIDGETS_GUILD_REMOVE", guildId: t.id }),
        p(new Set([...r, ...a])));
}
function T(e) {
    let { projects: t } = e,
        n = new Set(t.map((e) => e.application_id));
    p(
        I((e) => {
            let {
                meta: { applicationId: t, guildId: i },
            } = e;
            return null != i && !n.has(t) && null == d.A.getGuild(i) && !o.A.isUnavailable(i);
        }),
    );
}
n.d(t, {}, { A: h });
