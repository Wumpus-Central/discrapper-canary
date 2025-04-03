l.d(n, {
    Z: () => g,
    q: () => j
}),
    l(733860);
var t = l(200651),
    i = l(192379),
    a = l(120356),
    d = l.n(a),
    o = l(442837),
    r = l(481060),
    c = l(565138),
    s = l(993413),
    u = l(430824),
    h = l(771845),
    f = l(823379),
    v = l(778825),
    m = l(388032),
    x = l(835813);
function g(e) {
    let { guildId: n, className: l, globalOption: i, hideDivider: a = !1, onChange: o, renderOptionSuffix: r } = e;
    return (0, t.jsx)(s.Z, {
        className: d()(x.section, l),
        title: m.NW.string(m.t.ref7Ki),
        hideDivider: a,
        forcedDivider: !0,
        children: (0, t.jsx)(j, {
            guildId: n,
            onChange: o,
            renderOptionSuffix: r,
            globalOption: i
        })
    });
}
function j(e) {
    let { guildId: n, globalOption: l, onChange: a, renderOptionSuffix: d } = e,
        s = (0, o.e7)([v.Z], () => v.Z.showNotice()),
        g = (0, o.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        j = (0, o.e7)([u.Z], () => u.Z.getGuilds()),
        p = i.useMemo(() => {
            let e = g
                .map((e) => {
                    let n = j[e];
                    return null == n
                        ? null
                        : {
                              label: n.name,
                              value: n.id
                          };
                })
                .filter(f.lm);
            return null != l && e.unshift(l), e;
        }, [g, j, l]),
        C = i.useCallback(
            (e) => {
                let n = (null == e ? void 0 : e.label) === (null == l ? void 0 : l.label) && (null == e ? void 0 : e.value) === (null == l ? void 0 : l.value);
                return null == e || '' === e.value || n
                    ? null
                    : (0, t.jsx)(c.Z, {
                          className: x.guildSelectOptionIcon,
                          guild: j[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0
                      });
            },
            [j, l]
        );
    return (0, t.jsx)(r.VcW, {
        isDisabled: s,
        onChange: (e) => {
            if ('' === e || e === (null == l ? void 0 : l.value)) return void a(null);
            let n = j[e];
            null != n && a(n);
        },
        value: n,
        options: p,
        renderOptionPrefix: C,
        renderOptionSuffix: d,
        placeholder: m.NW.string(m.t['kMgj+f'])
    });
}
