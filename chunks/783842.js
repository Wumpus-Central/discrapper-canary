var r = n(257943),
    i = n(410323),
    a = n(446474),
    s = n(503628),
    o = n(537403),
    l = n(800098),
    c = n(988366),
    u = n(250594),
    d = n(93714),
    f = Object.assign,
    p = Object.defineProperty,
    _ = i([].concat);
e.exports =
    !f ||
    s(function () {
        if (
            r &&
            1 !==
                f(
                    { b: 1 },
                    f(
                        p({}, "a", {
                            enumerable: !0,
                            get: function () {
                                p(this, "b", {
                                    value: 3,
                                    enumerable: !1,
                                });
                            },
                        }),
                        { b: 2 },
                    ),
                ).b
        )
            return !0;
        var e = {},
            t = {},
            n = Symbol("assign detection"),
            i = "abcdefghijklmnopqrst";
        return (
            (e[n] = 7),
            i.split("").forEach(function (e) {
                t[e] = e;
            }),
            7 !== f({}, e)[n] || o(f({}, t)).join("") !== i
        );
    })
        ? function (e, t) {
              for (var n = u(e), i = arguments.length, s = 1, f = l.f, p = c.f; i > s; )
                  for (var h, m = d(arguments[s++]), g = f ? _(o(m), f(m)) : o(m), E = g.length, b = 0; E > b; )
                      (h = g[b++]), (!r || a(p, m, h)) && (n[h] = m[h]);
              return n;
          }
        : f;
