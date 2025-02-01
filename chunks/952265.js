n.d(t, {
    $s: () => I,
    Ay: () => A,
    DE: () => N,
    Fv: () => E,
    Gw: () => f,
    JQ: () => y,
    Jw: () => b,
    Mr: () => g,
    Vn: () => _,
    ZD: () => h,
    f9: () => T,
    h7: () => m,
    nf: () => C,
    o: () => v,
    pT: () => S,
    s9: () => p
}),
    n(411104),
    n(47120),
    n(571269),
    n(298267);
var i = n(97613),
    r = n.n(i),
    a = n(15729),
    s = n(731965),
    o = n(40851),
    l = n(602091),
    u = n(981631);
let c = n(338305).Z,
    d = [l.z1, l.u1];
function f() {
    let e = (0, o.GB)();
    return null != e ? _(e) : l.z1;
}
function _(e) {
    return e === u.IlC.POPOUT ? l.u1 : l.z1;
}
let p = (0, a.U)((e) => ({
    [l.z1]: [],
    [l.u1]: []
}));
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: n = f(), ...i } = t,
        a = null != t.modalKey ? t.modalKey : r()(),
        s = !1,
        o = setTimeout(() => {
            (s = !0),
                m(
                    c,
                    {
                        ...i,
                        modalKey: a
                    },
                    n
                );
        }, 300),
        l = await e();
    return (
        clearTimeout(o),
        s
            ? C(a, n) && v(a, l, i.onCloseRequest, i.onCloseCallback, n)
            : m(
                  l,
                  {
                      ...i,
                      modalKey: a
                  },
                  n
              ),
        a
    );
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f(),
        { modalKey: i, instant: a, Layer: o, onCloseRequest: l, onCloseCallback: u, backdropStyle: c } = t,
        d = null != i ? i : r()();
    return (
        (0, s.j)(() => {
            p.setState((t) => {
                let i = t[n];
                return void 0 !== i &&
                    i.some((e) => {
                        let { key: t } = e;
                        return t === d;
                    })
                    ? t
                    : {
                          ...t,
                          [n]: [
                              ...i,
                              {
                                  key: d,
                                  Layer: o,
                                  render: e,
                                  onCloseRequest: null != l ? l : () => g(d, n),
                                  onCloseCallback: u,
                                  instant: a,
                                  backdropStyle: c
                              }
                          ]
                      };
            });
        }),
        d
    );
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f(),
        n = p.getState()[t],
        i =
            null != n
                ? n.find((t) => {
                      let { key: n } = t;
                      return n === e;
                  })
                : null;
    (0, s.j)(() => {
        p.setState((n) =>
            void 0 === n[t]
                ? n
                : {
                      ...n,
                      [t]: n[t].filter((t) => {
                          let { key: n } = t;
                          return n !== e;
                      })
                  }
        );
    }),
        null != i && null != i.onCloseCallback && i.onCloseCallback();
}
function E(e) {
    let t = p.getState(),
        n = d
            .map((e) => {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : [];
            })
            .map((t) => {
                var n;
                return null !==
                    (n = t.find((t) => {
                        let { key: n } = t;
                        return n === e;
                    })) && void 0 !== n
                    ? n
                    : null;
            });
    n.some((e) => null != e) &&
        ((0, s.j)(() => {
            p.setState((t) => {
                let n = { ...t };
                return (
                    d.forEach((t) => {
                        var i;
                        n[t] =
                            null === (i = n[t]) || void 0 === i
                                ? void 0
                                : i.filter((t) => {
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
            null == e || null === (t = e.onCloseCallback) || void 0 === t || t.call(e);
        }));
}
function v(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f();
    (0, s.j)(() => {
        p.setState((a) =>
            void 0 === a[r]
                ? a
                : {
                      ...a,
                      [r]: a[r].map((a) =>
                          a.key === e
                              ? {
                                    ...a,
                                    render: t,
                                    onCloseRequest: null == n ? () => g(e, r) : n,
                                    onCloseCallback: i
                                }
                              : a
                      )
                  }
        );
    });
}
function y(e) {
    for (let t of d) {
        let n = e[t];
        if (null != n && n.length > 0) return !0;
    }
    return !1;
}
function I() {
    return y(p.getState());
}
function T() {
    return y(p());
}
function b(e) {
    var t, n;
    let { default: i, popout: r } = p();
    return r.length > 0 ? (null === (t = r.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = i.at(-1)) || void 0 === n ? void 0 : n.key) === e;
}
function S() {
    let e = p.getState();
    for (let t in e) for (let n of e[t]) g(n.key, t);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f(),
        t = p.getState()[e];
    if (null != t) for (let n of t) g(n.key, e);
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.z1,
        i = e[n];
    return null != i && i.some((e) => e.key === t);
}
function C(e, t) {
    return N(p.getState(), e, t);
}
