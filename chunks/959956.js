r.d(t, { Is: () => f, IS: () => g, Ay: () => y, KA: () => w });
var s = r(611599),
    a = r(499979),
    n = r(195880),
    i = r(382541),
    u = r(337232),
    l = r(381991),
    o = r(722701),
    d = r(191850),
    c = r(792996);
let m = new s.Vy("startConjureScopeMigration"),
    p = { added: d.default.YXmrDJ, removed: d.default.OYaecm, moved: d.default.EmQX8f },
    h = { added: d.default.QxOTur, removed: d.default.vmlwZE, moved: d.default.Ot15Gc };
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = c.intl.string(p[e]),
        s = t.trim();
    return "" === s
        ? r
        : `${r}

${s}`;
}
function g() {
    return 64e3 - Math.max(...Object.values(p).map((e) => c.intl.string(e).length)) - 2;
}
async function w(e, t) {
    let r = (0, n.m)();
    try {
        await (0, u.s)(e, t, r);
    } catch {
        (await (0, a.yy)(1500), (0, i.$Y)(e));
        try {
            await (0, u.s)(e, t, r);
        } catch (t) {
            m.warn("scope migration message failed", { projectId: e, err: t });
        }
    }
}
function y(e, t) {
    let r;
    ((0, l.A)(e.id),
        w(
            e.id,
            (
                null != (r = o.A.getPublishStatus(e.id)?.publishState)
                    ? "nothing_built" !== r
                    : (e.preview_supported_surfaces?.length ?? 0) > 0 || (e.supported_surfaces?.length ?? 0) > 0
            )
                ? f(t)
                : c.intl.string(h[t]),
        ));
}
