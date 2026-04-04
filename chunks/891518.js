n.d(t, { x: () => u });
var i = n(311907),
    s = n(286237),
    l = n(515183),
    a = n(592598),
    r = n(682763),
    o = n(419954),
    d = n(780964),
    c = n(985018);
let u = (0, o.zD)(d.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let { runningGameApplication: e } = (0, s.A)();
        return e?.id != null;
    },
    useDisabled: () => {
        let { runningGame: e } = (0, s.A)();
        return null != e && (0, l.qJ)(e.pid);
    },
    useValue: () => {
        let { runningGame: e, runningGameApplication: t } = (0, s.A)(),
            n = t?.id,
            r = (0, i.bG)([a.A], () => a.A.isLimitedInteractionOverrideEnabled(n)),
            o = null != e && (0, l.qJ)(e.pid);
        return r || o;
    },
    setValue: (e) => {
        let { runningGameApplication: t } = (0, s.b)();
        null != t && (0, r.x8)(t.id, e);
    },
    useTitle: () => c.intl.string(c.t.wgVQND),
    useSubtitle: () => c.intl.string(c.t["5SsyF5"]),
});
