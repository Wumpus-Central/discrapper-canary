"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(843282),
    d = n(397927),
    c = n(47167),
    u = n(713654),
    m = n(95701),
    g = n(769765),
    x = n(994500),
    h = n(287809),
    _ = n(739455),
    A = n(652215),
    p = n(985018),
    f = n(196826);
function j(e) {
    return String(e);
}
function N(e) {
    let { icon: t, title: n, subtitle: s, className: l } = e;
    return (0, i.jsxs)("div", {
        className: r()(f.Pf, l),
        children: [
            t,
            (0, i.jsxs)("div", {
                className: f.QK,
                children: [
                    (0, i.jsx)(d.Text, { variant: "text-md/normal", color: "none", className: f.DX, children: n }),
                    null != s && "" !== s
                        ? (0, i.jsx)(d.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: f.V2,
                              children: s,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function E() {
    return (0, i.jsx)(N, {
        icon: (0, i.jsx)(d.j96, { size: "md", color: "currentColor", className: f.IX }),
        title: p.intl.string(p.t.d7YJMK),
        className: f.fp,
    });
}
function C(e) {
    let { channelId: t } = e,
        n = (0, _.fE)(t),
        s = (0, _.fE)(n?.parent_id ?? A.dJq);
    if (null == n) return null;
    let l = (0, u.gU)(n),
        r = (0, c.m1)(n, h.default, x.A),
        a = null != s ? (0, c.m1)(s, h.default, x.A) : void 0;
    return (0, i.jsx)(N, { icon: null != l && (0, i.jsx)(l, { className: f.IX }), title: r, subtitle: a });
}
function T(e) {
    let { value: t } = e;
    return null != t ? (0, i.jsx)(C, { channelId: t }) : (0, i.jsx)(E, {});
}
function I(e) {
    let {
            label: t,
            guildId: l,
            value: r,
            initialChannelId: u,
            omitChannelIds: f,
            "aria-labelledby": N,
            onChange: E,
        } = e,
        C = p.intl.string(p.t.d7YJMK),
        I = (0, a.bG)([g.A], () => g.A.getCategories(l), [l]),
        b = (0, _.fE)(r ?? A.dJq),
        v = s.useMemo(() => {
            let e = [{ value: null, label: C }],
                t = !1;
            for (let n of I._categories)
                for (let { channel: i } of I[n.channel.id])
                    ((0, m.tr)(i.type) || (0, m.ay)(i.type)) &&
                        ((i.id !== r && f?.has(i.id) && (i.id !== u || r === u)) ||
                            (r === i.id && (t = !0), e.push({ value: i.id, label: (0, c.m1)(i, h.default, x.A) })));
            return null == r || t || null == b || e.push({ value: r, label: (0, c.m1)(b, h.default, x.A) }), e;
        }, [C, r, b, I, f, u]);
    return (0, i.jsx)(o.Pw, {
        label: t,
        placeholder: p.intl.string(p.t.r2ptsz),
        options: v,
        select: function (e) {
            null == e
                ? (0, d.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("93142"), n.e("64233"), n.e("62466")]).then(
                          n.bind(n, 963765),
                      );
                      return (t) => (0, i.jsx)(e, { ...t, guildId: l, onSubmit: E });
                  })
                : E(e);
        },
        isSelected: (e) => null != r && j(e) === j(r),
        serialize: j,
        renderOptionLabel: T,
        renderOptionValue: (e) => {
            let [t] = e;
            return T(t);
        },
        "aria-labelledby": N,
        "data-migration-pending": !0,
    });
}
