"use strict";
var n = e(991207),
    o = e(530383),
    s = e(831718),
    i = e(241091),
    u = e(443216),
    c = e(421212),
    a = e(554987),
    f = e(735451),
    p = e(739146),
    l = e(337082),
    v = e(414123),
    y = e(740456).fastKey,
    h = e(605944),
    x = h.set,
    d = h.getterFor;
t.exports = {
    getConstructor: function (t, r, e, f) {
        var p = t(function (t, o) {
                u(t, l),
                    x(t, { type: r, index: n(null), first: null, last: null, size: 0 }),
                    v || (t.size = 0),
                    c(o) || a(o, t[f], { that: t, AS_ENTRIES: e });
            }),
            l = p.prototype,
            h = d(r),
            g = function (t, r, e) {
                var n,
                    o,
                    s = h(t),
                    i = b(t, r);
                return (
                    i
                        ? (i.value = e)
                        : ((s.last = i =
                              {
                                  index: (o = y(r, !0)),
                                  key: r,
                                  value: e,
                                  previous: (n = s.last),
                                  next: null,
                                  removed: !1,
                              }),
                          s.first || (s.first = i),
                          n && (n.next = i),
                          v ? s.size++ : t.size++,
                          "F" !== o && (s.index[o] = i)),
                    t
                );
            },
            b = function (t, r) {
                var e,
                    n = h(t),
                    o = y(r);
                if ("F" !== o) return n.index[o];
                for (e = n.first; e; e = e.next) if (e.key === r) return e;
            };
        return (
            s(l, {
                clear: function () {
                    for (var t = h(this), r = t.first; r; )
                        (r.removed = !0), r.previous && (r.previous = r.previous.next = null), (r = r.next);
                    (t.first = t.last = null), (t.index = n(null)), v ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                    var r = h(this),
                        e = b(this, t);
                    if (e) {
                        var n = e.next,
                            o = e.previous;
                        delete r.index[e.index],
                            (e.removed = !0),
                            o && (o.next = n),
                            n && (n.previous = o),
                            r.first === e && (r.first = n),
                            r.last === e && (r.last = o),
                            v ? r.size-- : this.size--;
                    }
                    return !!e;
                },
                forEach: function (t) {
                    for (
                        var r, e = h(this), n = i(t, arguments.length > 1 ? arguments[1] : void 0);
                        (r = r ? r.next : e.first);
                    )
                        for (n(r.value, r.key, this); r && r.removed; ) r = r.previous;
                },
                has: function (t) {
                    return !!b(this, t);
                },
            }),
            s(
                l,
                e
                    ? {
                          get: function (t) {
                              var r = b(this, t);
                              return r && r.value;
                          },
                          set: function (t, r) {
                              return g(this, 0 === t ? 0 : t, r);
                          },
                      }
                    : {
                          add: function (t) {
                              return g(this, (t = 0 === t ? 0 : t), t);
                          },
                      },
            ),
            v &&
                o(l, "size", {
                    configurable: !0,
                    get: function () {
                        return h(this).size;
                    },
                }),
            p
        );
    },
    setStrong: function (t, r, e) {
        var n = r + " Iterator",
            o = d(r),
            s = d(n);
        f(
            t,
            r,
            function (t, r) {
                x(this, { type: n, target: t, state: o(t), kind: r, last: null });
            },
            function () {
                for (var t = s(this), r = t.kind, e = t.last; e && e.removed; ) e = e.previous;
                return t.target && (t.last = e = e ? e.next : t.state.first)
                    ? "keys" === r
                        ? p(e.key, !1)
                        : "values" === r
                          ? p(e.value, !1)
                          : p([e.key, e.value], !1)
                    : ((t.target = null), p(void 0, !0));
            },
            e ? "entries" : "values",
            !e,
            !0,
        ),
            l(r);
    },
};
