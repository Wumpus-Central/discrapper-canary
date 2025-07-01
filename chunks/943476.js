(t.d(n, { Z: () => d }), t(388685));
var l = t(73800),
    r = t(442837),
    a = t(314897),
    i = t(823379),
    u = t(633289);
function d(e) {
    let { name: n, kind: t, variations: a, defaultConfig: i } = e,
        d = u.Z.getHash(n);
    return (
        u.Z.registerExperiment(e),
        {
            definition: e,
            useConfig: function (e) {
                let o = s(t, e),
                    [c, m] = (0, r.Wu)([u.Z], () => u.Z.getEvaluationAndAssignment(t, o, d), [o]),
                    g = null == m ? void 0 : m.variantId,
                    v = null == m ? void 0 : m.revision,
                    b = null == m ? void 0 : m.isOverride;
                if (
                    ((0, l.useEffect)(() => {
                        null != c && null != g && null != v && !1 === b && u.Z.trackExperimentExposure(c, n, e.location, t, v, g);
                    }, [o, c, g, v, e.location, b]),
                    null == g)
                )
                    return i;
                {
                    let e = a[g];
                    return null != e ? e : i;
                }
            },
            getConfig: function (e) {
                let l = s(t, e),
                    [r, o] = u.Z.getEvaluationAndAssignment(t, l, d),
                    c = null == o ? void 0 : o.variantId,
                    m = null == o ? void 0 : o.revision,
                    g = null == o ? void 0 : o.isOverride;
                if ((null != r && null != c && null != m && !1 === g && u.Z.trackExperimentExposure(r, n, e.location, t, m, c), null == c)) return i;
                {
                    let e = a[c];
                    return null != e ? e : i;
                }
            }
        }
    );
}
function s(e, n) {
    switch (e) {
        case 'guild':
            return n.guildId;
        case 'user':
            return a.default.getId();
        default:
            (0, i.vE)(e);
    }
}
