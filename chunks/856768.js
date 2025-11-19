n.d(t, {
    Z: () => g,
    q: () => E,
}),
    n(290780);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(565138),
    u = n(993413),
    d = n(430824),
    f = n(771845),
    _ = n(823379),
    p = n(778825),
    h = n(388032),
    m = n(143125);
function g(e) {
    let { guildId: t, className: n, globalOption: i, hideDivider: a = !1, onChange: s, renderOptionSuffix: l } = e;
    return (0, r.jsx)(u.Z, {
        className: o()(m.section, n),
        title: h.intl.string(h.t.ref7Ki),
        hideDivider: a,
        forcedDivider: !0,
        children: (0, r.jsx)(E, {
            guildId: t,
            onChange: s,
            renderOptionSuffix: l,
            globalOption: i,
        }),
    });
}
function E(e) {
    let { guildId: t, globalOption: n, onChange: a, renderOptionSuffix: o } = e,
        u = (0, s.e7)([p.Z], () => p.Z.showNotice()),
        g = (0, s.e7)([f.ZP], () => f.ZP.getFlattenedGuildIds()),
        E = (0, s.e7)([d.Z], () => d.Z.getGuilds()),
        b = i.useMemo(() => {
            let e = g
                .map((e) => {
                    let t = E[e];
                    return null == t
                        ? null
                        : {
                              label: t.name,
                              value: t.id,
                          };
                })
                .filter(_.lm);
            return null != n && e.unshift(n), e;
        }, [g, E, n]),
        y = i.useCallback(
            (e) => {
                let t =
                    (null == e ? void 0 : e.label) === (null == n ? void 0 : n.label) &&
                    (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value);
                return null == e || "" === e.value || t
                    ? null
                    : (0, r.jsx)(c.Z, {
                          className: m.guildSelectOptionIcon,
                          guild: E[e.value],
                          size: c.Z.Sizes.SMOL,
                          active: !0,
                      });
            },
            [E, n],
        ),
        O = (e) => {
            if ("" === e || e === (null == n ? void 0 : n.value)) return void a(null);
            let t = E[e];
            null != t && a(t);
        };
    return (0, r.jsx)(l.VcW, {
        isDisabled: u,
        onChange: O,
        value: t,
        options: b,
        renderOptionPrefix: y,
        renderOptionSuffix: o,
        placeholder: h.intl.string(h.t["kMgj+e"]),
    });
}
