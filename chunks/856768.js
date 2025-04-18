n.d(t, {
    Z: () => _,
    q: () => b
}),
    n(290780);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(565138),
    d = n(993413),
    u = n(430824),
    m = n(771845),
    g = n(823379),
    p = n(778825),
    h = n(388032),
    f = n(835813);
function _(e) {
    let { guildId: t, className: n, globalOption: i, hideDivider: s = !1, onChange: l, renderOptionSuffix: o } = e;
    return (0, r.jsx)(d.Z, {
        className: a()(f.section, n),
        title: h.NW.string(h.t.ref7Ki),
        hideDivider: s,
        forcedDivider: !0,
        children: (0, r.jsx)(b, {
            guildId: t,
            onChange: l,
            renderOptionSuffix: o,
            globalOption: i
        })
    });
}
function b(e) {
    let { guildId: t, globalOption: n, onChange: s, renderOptionSuffix: a } = e,
        d = (0, l.e7)([p.Z], () => p.Z.showNotice()),
        _ = (0, l.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        b = (0, l.e7)([u.Z], () => u.Z.getGuilds()),
        N = i.useMemo(() => {
            let e = _.map((e) => {
                let t = b[e];
                return null == t
                    ? null
                    : {
                          label: t.name,
                          value: t.id
                      };
            }).filter(g.lm);
            return null != n && e.unshift(n), e;
        }, [_, b, n]),
        x = i.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                return null == e || '' === e.value || t
                    ? null
                    : (0, r.jsx)(c.Z, {
                          className: f.guildSelectOptionIcon,
                          guild: b[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0
                      });
            },
            [b, n]
        );
    return (0, r.jsx)(o.VcW, {
        isDisabled: d,
        onChange: (e) => {
            if ('' === e || e === (null == n ? void 0 : n.value)) return void s(null);
            let t = b[e];
            null != t && s(t);
        },
        value: t,
        options: N,
        renderOptionPrefix: x,
        renderOptionSuffix: a,
        placeholder: h.NW.string(h.t['kMgj+f'])
    });
}
