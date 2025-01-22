r.d(n, {
    $s: function () {
        return C;
    },
    Ay: function () {
        return D;
    },
    DE: function () {
        return L;
    },
    Fv: function () {
        return T;
    },
    Gw: function () {
        return g;
    },
    JQ: function () {
        return A;
    },
    Jw: function () {
        return R;
    },
    Mr: function () {
        return I;
    },
    Vn: function () {
        return E;
    },
    ZD: function () {
        return y;
    },
    f9: function () {
        return N;
    },
    h7: function () {
        return b;
    },
    nf: function () {
        return x;
    },
    o: function () {
        return S;
    },
    pT: function () {
        return O;
    },
    s9: function () {
        return v;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(571269);
var s = r(298267);
var l = r(97613),
    u = r.n(l),
    c = r(15729),
    d = r(731965),
    f = r(40851),
    p = r(602091),
    h = r(981631);
let _ = r(338305).Z,
    m = [p.z1, p.u1];
function g() {
    let e = (0, f.GB)();
    return null != e ? E(e) : p.z1;
}
function E(e) {
    return e === h.IlC.POPOUT ? p.u1 : p.z1;
}
let v = (0, c.U)((e) => ({
    [p.z1]: [],
    [p.u1]: []
}));
async function y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { contextKey: r = g(), ...i } = n,
        a = null != n.modalKey ? n.modalKey : u()(),
        o = !1,
        s = setTimeout(() => {
            (o = !0),
                b(
                    _,
                    {
                        ...i,
                        modalKey: a
                    },
                    r
                );
        }, 300),
        l = await e();
    return (
        clearTimeout(s),
        o
            ? x(a, r) && S(a, l, i.onCloseRequest, i.onCloseCallback, r)
            : b(
                  l,
                  {
                      ...i,
                      modalKey: a
                  },
                  r
              ),
        a
    );
}
function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g(),
        { modalKey: i, instant: a, Layer: o, onCloseRequest: s, onCloseCallback: l, backdropStyle: c } = n,
        f = null != i ? i : u()();
    return (
        (0, d.j)(() => {
            v.setState((n) => {
                let i = n[r];
                return void 0 !== i &&
                    i.some((e) => {
                        let { key: n } = e;
                        return n === f;
                    })
                    ? n
                    : {
                          ...n,
                          [r]: [
                              ...i,
                              {
                                  key: f,
                                  Layer: o,
                                  render: e,
                                  onCloseRequest: null != s ? s : () => I(f, r),
                                  onCloseCallback: l,
                                  instant: a,
                                  backdropStyle: c
                              }
                          ]
                      };
            });
        }),
        f
    );
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(),
        r = v.getState()[n],
        i =
            null != r
                ? r.find((n) => {
                      let { key: r } = n;
                      return r === e;
                  })
                : null;
    (0, d.j)(() => {
        v.setState((r) =>
            void 0 === r[n]
                ? r
                : {
                      ...r,
                      [n]: r[n].filter((n) => {
                          let { key: r } = n;
                          return r !== e;
                      })
                  }
        );
    }),
        null != i && null != i.onCloseCallback && i.onCloseCallback();
}
function T(e) {
    let n = v.getState(),
        r = m
            .map((e) => {
                var r;
                return null !== (r = n[e]) && void 0 !== r ? r : [];
            })
            .map((n) => {
                var r;
                return null !==
                    (r = n.find((n) => {
                        let { key: r } = n;
                        return r === e;
                    })) && void 0 !== r
                    ? r
                    : null;
            });
    if (!!r.some((e) => null != e))
        (0, d.j)(() => {
            v.setState((n) => {
                let r = { ...n };
                return (
                    m.forEach((n) => {
                        var i;
                        r[n] =
                            null === (i = r[n]) || void 0 === i
                                ? void 0
                                : i.filter((n) => {
                                      let { key: r } = n;
                                      return r !== e;
                                  });
                    }),
                    r
                );
            });
        }),
            r.forEach((e) => {
                var n;
                null == e || null === (n = e.onCloseCallback) || void 0 === n || n.call(e);
            });
}
function S(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g();
    (0, d.j)(() => {
        v.setState((o) =>
            void 0 === o[a]
                ? o
                : {
                      ...o,
                      [a]: o[a].map((o) =>
                          o.key === e
                              ? {
                                    ...o,
                                    render: n,
                                    onCloseRequest: null == r ? () => I(e, a) : r,
                                    onCloseCallback: i
                                }
                              : o
                      )
                  }
        );
    });
}
function A(e) {
    for (let n of m) {
        let r = e[n];
        if (null != r && r.length > 0) return !0;
    }
    return !1;
}
function C() {
    return A(v.getState());
}
function N() {
    return A(v());
}
function R(e) {
    var n, r;
    let { default: i, popout: a } = v();
    return a.length > 0 ? (null === (n = a.at(-1)) || void 0 === n ? void 0 : n.key) === e : (null === (r = i.at(-1)) || void 0 === r ? void 0 : r.key) === e;
}
function O() {
    let e = v.getState();
    for (let n in e) for (let r of e[n]) I(r.key, n);
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g(),
        n = v.getState()[e];
    if (null != n) for (let r of n) I(r.key, e);
}
function L(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.z1,
        i = e[r];
    return null != i && i.some((e) => e.key === n);
}
function x(e, n) {
    return L(v.getState(), e, n);
}
