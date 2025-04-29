n.d(t, {
    Z: () => b,
    q: () => _
}),
    n(290780);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
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
    let { guildId: t, className: n, globalOption: r, hideDivider: s = !1, onChange: a, renderOptionSuffix: o } = e;
    return (0, i.jsx)(d.Z, {
        className: l()(f.section, n),
        title: h.intl.string(h.t.ref7Ki),
        hideDivider: s,
        forcedDivider: !0,
        children: (0, i.jsx)(_, {
            guildId: t,
            onChange: a,
            renderOptionSuffix: o,
            globalOption: r
        })
    });
}
function _(e) {
    let { guildId: t, globalOption: n, onChange: s, renderOptionSuffix: l } = e,
        d = (0, a.e7)([g.Z], () => g.Z.showNotice()),
        b = (0, a.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        _ = (0, a.e7)([u.Z], () => u.Z.getGuilds()),
        x = r.useMemo(() => {
            let e = b
                .map((e) => {
                    let t = _[e];
                    return null == t
                        ? null
                        : {
                              label: t.name,
                              value: t.id
                          };
                })
                .filter(p.lm);
            return null != n && e.unshift(n), e;
        }, [b, _, n]),
        E = r.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                return null == e || '' === e.value || t
                    ? null
                    : (0, i.jsx)(c.Z, {
                          className: f.guildSelectOptionIcon,
                          guild: _[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0
                      });
            },
            [_, n]
        );
    return (0, i.jsx)(o.VcW, {
        isDisabled: d,
        onChange: (e) => {
            if ('' === e || e === (null == n ? void 0 : n.value)) return void s(null);
            let t = _[e];
            null != t && s(t);
        },
        value: t,
        options: x,
        renderOptionPrefix: E,
        renderOptionSuffix: l,
        placeholder: h.intl.string(h.t['kMgj+f'])
    });
}
