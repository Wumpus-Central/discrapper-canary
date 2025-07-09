(n.d(t, {
    Z: () => b,
    q: () => x
}),
    n(290780));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(565138),
    d = n(993413),
    u = n(430824),
    m = n(771845),
    p = n(823379),
    g = n(778825),
    h = n(388032),
    f = n(835813);
function b(e) {
    let { guildId: t, className: n, globalOption: r, hideDivider: s = !1, onChange: l, renderOptionSuffix: o } = e;
    return (0, i.jsx)(d.Z, {
        className: a()(f.section, n),
        title: h.intl.string(h.t.ref7Ki),
        hideDivider: s,
        forcedDivider: !0,
        children: (0, i.jsx)(x, {
            guildId: t,
            onChange: l,
            renderOptionSuffix: o,
            globalOption: r
        })
    });
}
function x(e) {
    let { guildId: t, globalOption: n, onChange: s, renderOptionSuffix: a } = e,
        d = (0, l.e7)([g.Z], () => g.Z.showNotice()),
        b = (0, l.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        x = (0, l.e7)([u.Z], () => u.Z.getGuilds()),
        _ = r.useMemo(() => {
            let e = b
                .map((e) => {
                    let t = x[e];
                    return null == t
                        ? null
                        : {
                              label: t.name,
                              value: t.id
                          };
                })
                .filter(p.lm);
            return (null != n && e.unshift(n), e);
        }, [b, x, n]),
        j = r.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                return null == e || '' === e.value || t
                    ? null
                    : (0, i.jsx)(c.Z, {
                          className: f.guildSelectOptionIcon,
                          guild: x[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0
                      });
            },
            [x, n]
        );
    return (0, i.jsx)(o.VcW, {
        isDisabled: d,
        onChange: (e) => {
            if ('' === e || e === (null == n ? void 0 : n.value)) return void s(null);
            let t = x[e];
            null != t && s(t);
        },
        value: t,
        options: _,
        renderOptionPrefix: j,
        renderOptionSuffix: a,
        placeholder: h.intl.string(h.t['kMgj+f'])
    });
}
