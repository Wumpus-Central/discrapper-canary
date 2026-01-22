n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(551907),
    a = n(397927),
    s = n(80556),
    o = n(207560),
    l = n(662502),
    c = n(64313),
    u = n(666176),
    d = n(81091),
    f = n(36149),
    p = n(40449),
    _ = n(835002);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function O(e) {
    if (null != e) return (0, f.Sr)(e) ? a.F2Z.LIGHTBOX : void 0;
}
let A = {
    showAgeVerification: (e) => {
        let {
                onClose: t,
                entryPoint: o,
                shouldShowExpressiveModal: c = !1,
                verificationVendorName: f,
                verificationRequestId: h,
                webviewUrl: g,
            } = e,
            E = b(e, [
                "onClose",
                "entryPoint",
                "shouldShowExpressiveModal",
                "verificationVendorName",
                "verificationRequestId",
                "webviewUrl",
            ]);
        if (f === p.XM.PERSONA) {
            if (!(0, d.g)("AgeVerificationActionCreators") || null == h) return;
            new i.Client({
                inquiryId: h,
                onComplete: () => {
                    E.onComplete(), null != t && t();
                },
                onError: (e) => {
                    l.A.showFailedToast(_.OB.TIGGER_PAWTECT_ERROR), null != t && t();
                },
                onCancel: () => {
                    null != t && t();
                },
            }).open();
            return;
        }
        if (null == g) return;
        let y = {
            modalKey: p.SW,
            onCloseCallback: t,
            backdropStyle: O(o),
            Layer: s.Ay,
        };
        c || (0, u.v)(o)
            ? (0, a.mMO)(async () => {
                  let { default: e } = await n.e("24947").then(n.bind(n, 662558));
                  return (t) => (0, r.jsx)(e, m({ webviewUrl: g }, E, t));
              }, y)
            : (0, a.mMO)(async () => {
                  let { default: e } = await n.e("23425").then(n.bind(n, 745336));
                  return (t) => (0, r.jsx)(e, m({ webviewUrl: g }, E, t));
              }, y);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: i } = e;
        (0, f.Q9)() && ((0, o.u0)() || (0, c.o)("age_verification_utils"))
            ? (0, a.mMO)(
                  async () => {
                      let { default: e } = await n.e("18467").then(n.bind(n, 297102));
                      return (t) => (0, r.jsx)(e, E(m({}, t), { entryPoint: i }));
                  },
                  {
                      modalKey: p.NC,
                      backdropStyle: O(i),
                      Layer: s.Ay,
                      onCloseCallback: t,
                  },
              )
            : (0, u.v)(i)
              ? (0, a.mMO)(
                    async () => {
                        let { default: e } = await n.e("18128").then(n.bind(n, 767379));
                        return (t) => (0, r.jsx)(e, E(m({}, t), { entryPoint: i }));
                    },
                    {
                        modalKey: p.NC,
                        backdropStyle: O(i),
                        Layer: s.Ay,
                        onCloseCallback: t,
                    },
                )
              : (0, a.mMO)(
                    async () => {
                        let { default: e } = await n.e("42978").then(n.bind(n, 654041));
                        return (t) => (0, r.jsx)(e, E(m({}, t), { entryPoint: i }));
                    },
                    {
                        modalKey: p.NC,
                        backdropStyle: O(i),
                        Layer: s.Ay,
                        onCloseCallback: t,
                    },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
