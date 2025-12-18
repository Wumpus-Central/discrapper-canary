n.d(t, { F: () => s });
var r = n(54381);
n(473749);
var i = n(526665),
    a = n(991346);
function o(e) {
    var t;
    let { setting: n, children: r } = e,
        i = (0, a.Pt)(),
        o = (0, a.Gj)(n),
        s = i[n];
    return (null != s.predicate && (null == (t = s.predicate) ? void 0 : t.call(s)) !== !0) || (o.size > 0 && !o.has(n))
        ? null
        : r;
}
function s(e) {
    let { setting: t, children: n } = e;
    return (0, i.gN)("AccountProfileCardSetting")
        ? n
        : (0, r.jsx)(o, {
              setting: t,
              children: n,
          });
}
