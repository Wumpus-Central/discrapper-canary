t.d(n, {
    Z: function () {
        return x;
    },
    q: function () {
        return p;
    }
}),
    t(733860);
var i = t(200651),
    r = t(192379),
    o = t(120356),
    l = t.n(o),
    a = t(442837),
    d = t(481060),
    c = t(565138),
    u = t(993413),
    s = t(430824),
    m = t(771845),
    h = t(823379),
    f = t(778825),
    g = t(388032),
    v = t(317486);
function x(e) {
    let { guildId: n, className: t, globalOption: r, hideDivider: o = !1, onChange: a, renderOptionSuffix: d } = e;
    return (0, i.jsx)(u.Z, {
        className: l()(v.section, t),
        title: g.intl.string(g.t.ref7Ki),
        hideDivider: o,
        forcedDivider: !0,
        children: (0, i.jsx)(p, {
            guildId: n,
            onChange: a,
            renderOptionSuffix: d,
            globalOption: r
        })
    });
}
function p(e) {
    let { guildId: n, globalOption: t, onChange: o, renderOptionSuffix: l } = e,
        u = (0, a.e7)([f.Z], () => f.Z.showNotice()),
        x = (0, a.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        p = (0, a.e7)([s.Z], () => s.Z.getGuilds()),
        j = r.useMemo(() => {
            let e = x
                .map((e) => {
                    let n = p[e];
                    return null == n
                        ? null
                        : {
                              label: n.name,
                              value: n.id
                          };
                })
                .filter(h.lm);
            return null != t && e.unshift(t), e;
        }, [x, p, t]),
        B = r.useCallback(
            (e) => {
                let n = (null == e ? void 0 : e.label) === (null == t ? void 0 : t.label) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value);
                return null == e || '' === e.value || n
                    ? null
                    : (0, i.jsx)(c.Z, {
                          className: v.guildSelectOptionIcon,
                          guild: p[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0
                      });
            },
            [p, t]
        );
    return (0, i.jsx)(d.SearchableSelect, {
        isDisabled: u,
        onChange: (e) => {
            if ('' === e || e === (null == t ? void 0 : t.value)) {
                o(null);
                return;
            }
            let n = p[e];
            null != n && o(n);
        },
        value: n,
        options: j,
        renderOptionPrefix: B,
        renderOptionSuffix: l,
        placeholder: g.intl.string(g.t['kMgj+f'])
    });
}
