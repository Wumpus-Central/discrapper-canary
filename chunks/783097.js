n.d(t, {
    $d: () => R,
    BQ: () => C,
    Cb: () => U,
    Hu: () => G,
    L1: () => H,
    Ow: () => Z,
    WA: () => x,
    Wx: () => A,
    X: () => W,
    XZ: () => F,
    Y$: () => k,
    Yn: () => B,
    jD: () => P,
    lf: () => L,
    pF: () => V,
    sl: () => j,
    vJ: () => D,
    yJ: () => M,
    ye: () => w
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
    a = n(911969),
    s = n(761122),
    l = n(895924),
    c = n(667204),
    u = n(957730),
    d = n(973616),
    f = n(768581),
    _ = n(585483),
    p = n(630388),
    h = n(358085),
    m = n(541099),
    g = n(827498),
    E = n(981631),
    b = n(689079),
    v = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = { id: b.bi.BUILT_IN };
function C(e) {
    return e.id !== b.bi.BUILT_IN;
}
function R(e) {
    return C(e) ? e.name : v.NW.string(v.t.UB2gGx);
}
function P(e) {
    return C(e) ? e.description : v.NW.string(v.t.X9fusr);
}
function w(e) {
    var t;
    return C(e) && (0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, E.udG.EMBEDDED);
}
function D(e) {
    var t;
    return C(e) && (0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, E.udG.PARTNER);
}
function L(e) {
    var t;
    return C(e) && (0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, E.udG.PROMOTED);
}
function x(e) {
    let t = M(e),
        n = null == t ? void 0 : t.client_platform_config[(0, s.Z)((0, h.getOS)())];
    if ((null == n ? void 0 : n.label_until) != null && Date.now() < Date.parse(null == n ? void 0 : n.label_until)) {
        var r;
        return null !== (r = null == n ? void 0 : n.label_type) && void 0 !== r ? r : a.ww.NONE;
    }
    return a.ww.NONE;
}
function M(e) {
    return C(e) && w(e) ? (e instanceof d.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function k(e) {
    let { command: t, optionValues: n, context: r, commandTargetId: a, maxSizeCallback: s, sectionName: d, commandOrigin: f = l.bB.APPLICATION_LAUNCHER } = e,
        { channel: _ } = r,
        p = async () => {
            try {
                let i = await (0, c.Z)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: a,
                    maxSizeCallback: s,
                    commandOrigin: f,
                    sectionName: d,
                    source: m.Z.entrypoint()
                });
                if (t.inputType === l.iw.BUILT_IN_TEXT && null != i && null != r.channel) {
                    var e;
                    let t = u.ZP.parse(_, i.content);
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
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n } = t,
        r = T(t, ['fakeAppIconURL']);
    return C(e)
        ? {
              iconURL: f.ZP.getApplicationIconURL(
                  S(O({}, r), {
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
function U(e) {
    return !!C(e) && (e instanceof d.ZP ? e.isMonetized : e.is_monetized);
}
function G(e) {
    let t = M(e);
    return null != t && t.displays_advertisements;
}
function B(e) {
    return e === g._b.TEXT;
}
function F(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function V(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.C.APPLICATION && w(e.application));
        0 !== e.length && t.push(S(O({}, n), { application_directory_collection_items: e }));
    }
    return t;
}
function Z(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function H(e) {
    return e instanceof d.ZP
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
function W(e) {
    _.S.dispatchToLastSubscribed(E.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
