n.d(t, {
    A: () => d,
    C: () => E,
});
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(417454),
    o = n(775602),
    c = n(967144),
    u = n(818348);

function E(e) {
    var t;
    let { role: n, guildId: r } = e,
        s = (0, c.X_)(r, null != n ? n : void 0, null == n ? void 0 : n.colorStrings),
        u = (0, a.bG)([o.A], () => o.A.roleStyle),
        E = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(),
        d = null != (t = null == n ? void 0 : n.colorString) ? t : E;
    return null == n
        ? null
        : "dot" === u
          ? (0, l.jsx)(i.WYI, {
                color: null != d ? d : void 0,
                colors: s,
                background: !1,
                tooltip: !1,
            })
          : (0, l.jsx)(i.RYH, {
                color: null != d ? d : null,
                colors: s,
            });
}

function d(e) {
    var t;
    let { guildId: n, role: a, className: o, canRemove: c = !1, onRemove: E = u.tE } = e,
        d = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(),
        _ = null != (t = null == a ? void 0 : a.colorString) ? t : d,
        g = r.useMemo(
            () => ({
                backgroundColor: "".concat(_, "27"),
            }),
            [_],
        );
    return null == a
        ? null
        : (0, l.jsx)(i.DUT, {
              children: (0, l.jsx)(s.b_, {
                  className: o,
                  style: g,
                  role: a,
                  guildId: n,
                  canRemove: c,
                  onRemove: E,
              }),
          });
}
