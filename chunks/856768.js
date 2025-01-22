t.d(n, {
    Z: function () {
        return x;
    },
    q: function () {
        return C;
    }
}),
    t(733860);
var l = t(200651),
    o = t(192379),
    i = t(120356),
    r = t.n(i),
    a = t(442837),
    d = t(481060),
    c = t(565138),
    u = t(993413),
    s = t(430824),
    h = t(771845),
    f = t(823379),
    v = t(778825),
    m = t(388032),
    g = t(317486);
function x(e) {
    let { guildId: n, className: t, globalOption: o, hideDivider: i = !1, onChange: a, renderOptionSuffix: d } = e;
    return (0, l.jsx)(u.Z, {
        className: r()(g.section, t),
        title: m.intl.string(m.t.ref7Ki),
        hideDivider: i,
        forcedDivider: !0,
        children: (0, l.jsx)(C, {
            guildId: n,
            onChange: a,
            renderOptionSuffix: d,
            globalOption: o
        })
    });
}
function C(e) {
    let { guildId: n, globalOption: t, onChange: i, renderOptionSuffix: r } = e,
        u = (0, a.e7)([v.Z], () => v.Z.showNotice()),
        x = (0, a.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        C = (0, a.e7)([s.Z], () => s.Z.getGuilds()),
        j = o.useMemo(() => {
            let e = x
                .map((e) => {
                    let n = C[e];
                    return null == n
                        ? null
                        : {
                              label: n.name,
                              value: n.id
                          };
                })
                .filter(f.lm);
            return null != t && e.unshift(t), e;
        }, [x, C, t]),
        p = o.useCallback(
            (e) => {
                let n = (null == e ? void 0 : e.label) === (null == t ? void 0 : t.label) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value);
                return null == e || '' === e.value || n
                    ? null
                    : (0, l.jsx)(c.Z, {
                          className: g.guildSelectOptionIcon,
                          guild: C[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0
                      });
            },
            [C, t]
        );
    return (0, l.jsx)(d.SearchableSelect, {
        isDisabled: u,
        onChange: (e) => {
            if ('' === e || e === (null == t ? void 0 : t.value)) {
                i(null);
                return;
            }
            let n = C[e];
            null != n && i(n);
        },
        value: n,
        options: j,
        renderOptionPrefix: p,
        renderOptionSuffix: r,
        placeholder: m.intl.string(m.t['kMgj+f'])
    });
}
