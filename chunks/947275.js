n.d(t, { Is: () => T, IS: () => w, Ay: () => p, Lj: () => y, KA: () => v });
var r = n(611599),
    i = n(499979),
    u = n(195880),
    l = n(382541),
    a = n(337232),
    s = n(418811),
    o = n(722701),
    c = n(624048),
    d = n(258576),
    m = n(792996);
let f = new r.Vy("startConjureScopeMigration"),
    h = { added: d.default.YXmrDJ, removed: d.default.OYaecm, moved: d.default.EmQX8f },
    g = { added: d.default.QxOTur, removed: d.default.vmlwZE, moved: d.default.Ot15Gc };
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = m.intl.string(h[e]),
        r = t.trim();
    return "" === r
        ? n
        : `${n}

${r}`;
}
function w() {
    return 64e3 - Math.max(...Object.values(h).map((e) => m.intl.string(e).length)) - 2;
}
async function v(e, t) {
    let n = (0, u.m)();
    try {
        return (await (0, a.s)(e, t, n), !0);
    } catch {
        (await (0, i.yy)(1500), (0, l.$Y)(e));
        try {
            return (await (0, a.s)(e, t, n), !0);
        } catch (t) {
            return (f.warn("scope migration message failed", { projectId: e, err: t }), !1);
        }
    }
}
function y(e, t) {
    let n,
        r = (
            null != (n = o.A.getPublishStatus(e.id)?.publishState)
                ? "nothing_built" !== n
                : (e.preview_supported_surfaces?.length ?? 0) > 0 || (e.supported_surfaces?.length ?? 0) > 0
        )
            ? T(t)
            : m.intl.string(g[t]);
    (0, c.E8)(e.id, v(e.id, r));
}
function p(e, t) {
    ((0, s.A)(e), y(e, t));
}
