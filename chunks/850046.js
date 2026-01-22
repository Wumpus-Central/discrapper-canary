n.d(t, { A: () => g }), n(446912);
var r = n(64700),
    i = n(205338),
    a = n(87075),
    s = n(429913),
    o = n(201718),
    l = n(207803),
    c = n(403362),
    u = n(789069),
    d = n(385771);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t, n) {
    var r, i, a;
    let s =
        null == (a = e.profile) || null == (i = a.data) || null == (r = i.dynamic)
            ? void 0
            : r.find((e) => e.name === t);
    return null == s || s.type !== n ? null : s.value;
}
let h = {
    [i.A.MARVEL_RIVALS]: (e) => {
        var t, n, r, i, a, s, o, l, c, d, f, p;
        let _ = null == (r = e.profile) || null == (n = r.data) || null == (t = n.primary) ? void 0 : t.season,
            h = null == (s = e.profile) || null == (a = s.data) || null == (i = a.primary) ? void 0 : i.rank_name,
            m = (0, u.a)(
                null == (c = e.profile) || null == (l = c.data) || null == (o = l.primary) ? void 0 : o.rank_image,
            ),
            g = (0, u.a)(
                null == (p = e.profile) || null == (f = p.data) || null == (d = f.primary)
                    ? void 0
                    : d.featured_played_character_image,
            );
        return null == _ || null == h || null == g
            ? null
            : {
                  previewText: "".concat(_, ": ").concat(h),
                  previewIcon: m,
                  previewImage: g,
              };
    },
    [i.A.WUTHERING_WAVES]: (e, t) => {
        var n, r, i, s;
        let o = null == (n = e.profile) ? void 0 : n.username,
            l = _(e, "union_level", a.f.NUMBER),
            c = (0, u.a)(
                null == (s = e.profile) || null == (i = s.data) || null == (r = i.primary)
                    ? void 0
                    : r.featured_played_character_image,
            );
        return null == o || null == l || null == c
            ? null
            : {
                  previewText: "".concat(o, ": Level ").concat(t.format(l)),
                  previewIcon: null,
                  previewImage: c,
              };
    },
};
function m(e, t, n, r) {
    let i = t.getIconURL(16);
    if (null == i) return null;
    let a = h[e.widgetTemplateId](n, r);
    return null == a
        ? null
        : p(
              {
                  application: {
                      id: t.id,
                      name: t.name,
                      icon: i,
                  },
              },
              a,
          );
}
function g(e, t) {
    let n = (0, s.A)(t.map((e) => e.applicationId)),
        { data: i } = (0, l.FY)(),
        { data: a } = (0, o.P)(e),
        u = (0, d.A)();
    return r.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        let t = null == i ? void 0 : i.find((t) => t.applicationId === e.applicationId),
                            r = n.find((t) => (null == t ? void 0 : t.id) === e.applicationId),
                            s = null == a ? void 0 : a.find((t) => t.application_id === e.applicationId);
                        if (null == t || null == r || null == s) return null;
                        let o = m(t, r, s, u);
                        return null == o ? null : [e.applicationId, o];
                    })
                    .filter(c.Vq),
            ),
        [n, i, a, u, t],
    );
}
