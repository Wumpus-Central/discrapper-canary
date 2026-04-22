n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(843282),
    d = n(834730),
    c = n(307301),
    u = n(192308),
    m = n(47167),
    g = n(713654),
    h = n(95701),
    x = n(769765),
    _ = n(994500),
    p = n(287809),
    A = n(739455),
    E = n(652215),
    f = n(985018),
    j = n(113697);
function N(e) {
    return String(e);
}
function I(e) {
    let { icon: t, title: n, subtitle: l, className: s } = e;
    return (0, i.jsxs)("div", {
        className: r()(j.Pf, s),
        children: [
            t,
            (0, i.jsxs)("div", {
                className: j.QK,
                children: [
                    (0, i.jsx)(d.E, { variant: "text-md/normal", color: "none", className: j.DX, children: n }),
                    null != l && "" !== l
                        ? (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: j.V2,
                              children: l,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function C() {
    return (0, i.jsx)(I, {
        icon: (0, i.jsx)(c.j, { size: "md", color: "currentColor", className: j.IX }),
        title: f.intl.string(f.t.d7YJMK),
        className: j.fp,
    });
}
function b(e) {
    let { channelId: t } = e,
        n = (0, A.fE)(t),
        l = (0, A.fE)(n?.parent_id ?? E.dJq);
    if (null == n) return null;
    let s = (0, g.gU)(n),
        r = (0, m.m1)(n, p.default, _.A),
        a = null != l ? (0, m.m1)(l, p.default, _.A) : void 0;
    return (0, i.jsx)(I, { icon: null != s && (0, i.jsx)(s, { className: j.IX }), title: r, subtitle: a });
}
function v(e) {
    let { value: t } = e;
    return null != t ? (0, i.jsx)(b, { channelId: t }) : (0, i.jsx)(C, {});
}
function S(e) {
    let {
            label: t,
            guildId: s,
            value: r,
            initialChannelId: d,
            omitChannelIds: c,
            "aria-labelledby": g,
            onChange: j,
        } = e,
        I = f.intl.string(f.t.d7YJMK),
        C = (0, a.bG)([x.A], () => x.A.getCategories(s), [s]),
        b = (0, A.fE)(r ?? E.dJq),
        S = l.useMemo(() => {
            let e = [{ value: null, label: I }],
                t = !1;
            for (let n of C._categories)
                for (let { channel: i } of C[n.channel.id])
                    ((0, h.tr)(i.type) || (0, h.ay)(i.type)) &&
                        ((i.id !== r && c?.has(i.id) && (i.id !== d || r === d)) ||
                            (r === i.id && (t = !0), e.push({ value: i.id, label: (0, m.m1)(i, p.default, _.A) })));
            return null == r || t || null == b || e.push({ value: r, label: (0, m.m1)(b, p.default, _.A) }), e;
        }, [I, r, b, C, c, d]);
    return (0, i.jsx)(o.Pw, {
        label: t,
        placeholder: f.intl.string(f.t.r2ptsz),
        options: S,
        select: function (e) {
            null == e
                ? (0, u.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("93142"), n.e("64233"), n.e("34645")]).then(
                          n.bind(n, 963765),
                      );
                      return (t) => (0, i.jsx)(e, { ...t, guildId: s, onSubmit: j });
                  })
                : j(e);
        },
        isSelected: (e) => null != r && N(e) === N(r),
        serialize: N,
        renderOptionLabel: v,
        renderOptionValue: (e) => {
            let [t] = e;
            return v(t);
        },
        "aria-labelledby": g,
        "data-migration-pending": !0,
    });
}
