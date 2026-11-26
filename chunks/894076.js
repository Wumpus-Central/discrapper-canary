l.d(t, { A: () => p });
var n = l(611599),
    a = l(499979),
    r = l(195880),
    i = l(382541),
    s = l(337232),
    u = l(381991),
    o = l(722701),
    d = l(191850),
    c = l(792996);
let f = new n.Vy("startConjureScopeMigration"),
    m = { added: d.default.YXmrDJ, removed: d.default.OYaecm, moved: d.default.EmQX8f },
    g = { added: d.default.QxOTur, removed: d.default.vmlwZE, moved: d.default.Ot15Gc };
function p(e, t) {
    let l;
    (0, u.A)(e.id);
    let n = (
        null != (l = o.A.getPublishStatus(e.id)?.publishState)
            ? "nothing_built" !== l
            : (e.preview_supported_surfaces?.length ?? 0) > 0 || (e.supported_surfaces?.length ?? 0) > 0
    )
        ? m
        : g;
    !(async function (e, t) {
        let l = (0, r.m)();
        try {
            await (0, s.s)(e, t, l);
        } catch {
            (await (0, a.yy)(1500), (0, i.$Y)(e));
            try {
                await (0, s.s)(e, t, l);
            } catch (t) {
                f.warn("scope migration message failed", { projectId: e, err: t });
            }
        }
    })(e.id, c.intl.string(n[t]));
}
