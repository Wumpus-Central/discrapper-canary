n.d(t, {
    $s: () => A,
    Ay: () => w,
    DE: () => D,
    Fv: () => S,
    Gw: () => E,
    JQ: () => N,
    Jw: () => R,
    Mr: () => I,
    VX: () => x,
    Vn: () => b,
    ZD: () => v,
    f9: () => C,
    h7: () => O,
    nf: () => L,
    o: () => T,
    pT: () => P,
    s9: () => y
}),
    n(411104),
    n(47120),
    n(571269),
    n(298267);
var r = n(97613),
    i = n.n(r),
    o = n(230383),
    a = n(731965),
    s = n(40851),
    l = n(602091),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = n(338305).Z,
    g = [l.z1, l.u1];
function E() {
    let e = (0, s.GB)();
    return null != e ? b(e) : l.z1;
}
function b(e) {
    switch (e) {
        case c.IlC.POPOUT:
            return l.u1;
        case c.IlC.OVERLAY:
            if (__OVERLAY__) return l.z1;
            return l.u1;
        default:
            return l.z1;
    }
}
let y = (0, o.U)((e) => ({
    [l.z1]: [],
    [l.u1]: []
}));
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = E() } = t,
        r = p(t, ['contextKey']),
        o = null != t.modalKey ? t.modalKey : i()(),
        a = !1,
        s = setTimeout(() => {
            (a = !0), O(m, _(d({}, r), { modalKey: o }), n);
        }, 300),
        l = await e();
    return clearTimeout(s), a ? L(o, n) && T(o, l, r.onCloseRequest, r.onCloseCallback, n) : O(l, _(d({}, r), { modalKey: o }), n), o;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E(),
        { modalKey: r, instant: o, Layer: s, onCloseRequest: l, onCloseCallback: c, backdropStyle: u } = t,
        f = null != r ? r : i()();
    return (
        (0, a.j)(() => {
            y.setState((t) => {
                let r = t[n];
                return void 0 !== r &&
                    r.some((e) => {
                        let { key: t } = e;
                        return t === f;
                    })
                    ? t
                    : _(d({}, t), {
                          [n]: [
                              ...r,
                              {
                                  key: f,
                                  Layer: s,
                                  render: e,
                                  onCloseRequest: null != l ? l : () => I(f, n),
                                  onCloseCallback: c,
                                  instant: o,
                                  backdropStyle: u
                              }
                          ]
                      });
            });
        }),
        f
    );
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E(),
        n = y.getState()[t],
        r =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    (0, a.j)(() => {
        y.setState((n) =>
            void 0 === n[t]
                ? n
                : _(d({}, n), {
                      [t]: n[t].filter((t) => {
                          let { key: n } = t;
                          return n !== e;
                      })
                  })
        );
    }),
        null != r && null != r.onCloseCallback && r.onCloseCallback();
}
function S(e) {
    let t = y.getState(),
        n = g
            .map((e) => {
                var n;
                return null != (n = t[e]) ? n : [];
            })
            .map((t) => {
                var n;
                return null !=
                    (n = t.find((t) => {
                        let { key: n } = t;
                        return n === e;
                    }))
                    ? n
                    : null;
            });
    n.some((e) => null != e) &&
        ((0, a.j)(() => {
            y.setState((t) => {
                let n = d({}, t);
                return (
                    g.forEach((t) => {
                        var r;
                        n[t] =
                            null == (r = n[t])
                                ? void 0
                                : r.filter((t) => {
                                      let { key: n } = t;
                                      return n !== e;
                                  });
                    }),
                    n
                );
            });
        }),
        n.forEach((e) => {
            var t;
            null == e || null == (t = e.onCloseCallback) || t.call(e);
        }));
}
function T(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E();
    (0, a.j)(() => {
        y.setState((o) =>
            void 0 === o[i]
                ? o
                : _(d({}, o), {
                      [i]: o[i].map((o) =>
                          o.key === e
                              ? _(d({}, o), {
                                    render: t,
                                    onCloseRequest: null == n ? () => I(e, i) : n,
                                    onCloseCallback: r
                                })
                              : o
                      )
                  })
        );
    });
}
function N(e) {
    for (let t of g) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function A() {
    return N(y.getState());
}
function C() {
    return N(y());
}
function R(e) {
    var t, n;
    let { default: r, popout: i } = y();
    return i.length > 0 ? (null == (t = i.at(-1)) ? void 0 : t.key) === e : (null == (n = r.at(-1)) ? void 0 : n.key) === e;
}
function P() {
    let e = y.getState();
    for (let t in e) for (let n of e[t]) I(n.key, t);
}
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E(),
        t = y.getState()[e];
    if (null != t) for (let n of t) I(n.key, e);
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.z1,
        r = e[n];
    return null != r && r.some((e) => e.key === t);
}
function L(e, t) {
    return D(y.getState(), e, t);
}
function x(e, t) {
    return D(y(), e, t);
}
