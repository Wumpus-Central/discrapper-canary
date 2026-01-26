n.d(t, {
    A: () => E,
    M: () => g,
}),
    n(446912);
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
    var r, i;
    let a = null == (i = e.data) || null == (r = i.dynamic) ? void 0 : r.find((e) => e.name === t);
    return null == a || a.type !== n ? null : a.value;
}
let h = {
    [i.A.MARVEL_RIVALS]: (e) => {
        var t, n, r, i, a, s, o, l;
        let c = null == (n = e.data) || null == (t = n.primary) ? void 0 : t.season,
            d = null == (i = e.data) || null == (r = i.primary) ? void 0 : r.rank_name,
            f = (0, u.a)(null == (s = e.data) || null == (a = s.primary) ? void 0 : a.rank_image),
            p = (0, u.a)(null == (l = e.data) || null == (o = l.primary) ? void 0 : o.featured_played_character_image);
        return null == c || null == d || null == p
            ? null
            : {
                  previewText: "".concat(c, ": ").concat(d),
                  previewTextShort: d,
                  previewIcon: f,
                  previewImage: p,
              };
    },
    [i.A.WUTHERING_WAVES]: (e, t) => {
        var n, r;
        let i = e.username,
            s = _(e, "union_level", a.f.NUMBER),
            o = (0, u.a)(null == (r = e.data) || null == (n = r.primary) ? void 0 : n.featured_played_character_image);
        return null == i || null == s || null == o
            ? null
            : {
                  previewText: "".concat(i, ": Level ").concat(t.format(s)),
                  previewTextShort: "Level ".concat(t.format(s)),
                  previewIcon: null,
                  previewImage: o,
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

function g(e, t, n, r) {
    return m(e, t, n, r);
}

function E(e, t) {
    let n = (0, s.A)(t),
        { data: i } = (0, l.FY)(),
        { data: a } = (0, o.P)(e),
        u = (0, d.A)();
    return r.useMemo(
        () =>
            Object.fromEntries(
                t
                    .map((e) => {
                        var t;
                        let r = null == i ? void 0 : i.find((t) => t.applicationId === e),
                            s = n.find((t) => (null == t ? void 0 : t.id) === e),
                            o = null == a || null == (t = a.find((t) => t.application_id === e)) ? void 0 : t.profile;
                        if (null == r || null == s || null == o) return null;
                        let l = m(r, s, o, u);
                        return null == l ? null : [e, l];
                    })
                    .filter(c.Vq),
            ),
        [n, i, a, u, t],
    );
}
