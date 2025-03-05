n.d(t, {
    $d: () => C,
    BQ: () => A,
    Cb: () => j,
    Hu: () => U,
    L1: () => Z,
    Ow: () => F,
    WA: () => L,
    Wx: () => N,
    X: () => H,
    XZ: () => B,
    Y$: () => M,
    Yn: () => G,
    jD: () => R,
    lf: () => w,
    pF: () => V,
    sl: () => k,
    vJ: () => D,
    yJ: () => x,
    ye: () => P
}),
    n(266796),
    n(789020),
    n(627494),
    n(757143),
    n(301563),
    n(653041),
    n(47120);
var r = n(912370),
    i = n(668781),
    o = n(904245),
    a = n(761122),
    s = n(895924),
    l = n(667204),
    c = n(957730),
    u = n(973616),
    d = n(768581),
    f = n(585483),
    _ = n(630388),
    p = n(358085),
    h = n(541099),
    g = n(827498),
    m = n(981631),
    E = n(689079),
    v = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = { id: E.bi.BUILT_IN };
function A(e) {
    return e.id !== E.bi.BUILT_IN;
}
function C(e) {
    return A(e) ? e.name : v.NW.string(v.t.UB2gGx);
}
function R(e) {
    return A(e) ? e.description : v.NW.string(v.t.X9fusr);
}
function P(e) {
    var t;
    return A(e) && (0, _.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, m.udG.EMBEDDED);
}
function D(e) {
    var t;
    return A(e) && (0, _.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, m.udG.PARTNER);
}
function w(e) {
    var t;
    return A(e) && (0, _.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, m.udG.PROMOTED);
}
function L(e) {
    let t = x(e),
        n = null == t ? void 0 : t.client_platform_config[(0, a.Z)((0, p.getOS)())];
    return (null == n ? void 0 : n.label_until) != null && Date.now() < Date.parse(null == n ? void 0 : n.label_until) ? n.label_type : null;
}
function x(e) {
    return A(e) && P(e) ? (e instanceof u.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function M(e) {
    let { command: t, optionValues: n, context: r, commandTargetId: a, maxSizeCallback: u, sectionName: d, commandOrigin: f = s.bB.APPLICATION_LAUNCHER } = e,
        { channel: _ } = r,
        p = async () => {
            try {
                let i = await (0, l.Z)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: a,
                    maxSizeCallback: u,
                    commandOrigin: f,
                    sectionName: d,
                    source: h.Z.entrypoint()
                });
                if (t.inputType === s.iw.BUILT_IN_TEXT && null != i && null != r.channel) {
                    var e;
                    let t = c.ZP.parse(_, i.content);
                    (t.tts = null !== (e = i.tts) && void 0 !== e && e), o.Z.sendMessage(r.channel.id, t);
                }
            } catch (e) {
                throw (
                    (i.Z.show({
                        title: v.NW.string(v.t['aHO//v']),
                        body: v.NW.string(v.t.kuzKHB),
                        confirmText: v.NW.string(v.t['5911LS']),
                        onConfirm: () => p()
                    }),
                    e)
                );
            }
        };
    return p();
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n } = t,
        r = I(t, ['fakeAppIconURL']);
    return A(e)
        ? {
              iconURL: d.ZP.getApplicationIconURL(
                  S(y({}, r), {
                      id: e.id,
                      icon: e.icon
                  })
              ),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: v.NW.string(v.t.UB2gGx),
              description: v.NW.string(v.t.X9fusr)
          };
}
function j(e) {
    return !!A(e) && (e instanceof u.ZP ? e.isMonetized : e.is_monetized);
}
function U(e) {
    let t = x(e);
    return null != t && t.displays_advertisements;
}
function G(e) {
    return e === g._b.TEXT;
}
function B(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function V(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.C.APPLICATION && P(e.application));
        0 !== e.length && t.push(S(y({}, n), { application_directory_collection_items: e }));
    }
    return t;
}
function F(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function Z(e) {
    return e instanceof u.ZP
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config
          };
}
function H(e) {
    f.S.dispatchToLastSubscribed(m.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
