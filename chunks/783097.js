n.d(t, {
    $d: () => w,
    BQ: () => D,
    Cb: () => F,
    Hu: () => V,
    L1: () => z,
    Ow: () => K,
    PZ: () => q,
    WA: () => k,
    Wx: () => R,
    XZ: () => Y,
    Y$: () => Z,
    Yn: () => H,
    dF: () => U,
    jD: () => x,
    lf: () => M,
    pF: () => W,
    sl: () => B,
    vJ: () => j,
    yJ: () => G,
    ye: () => L,
}),
    n(953529),
    n(997841),
    n(804061),
    n(704826),
    n(35282),
    n(539854),
    n(388685);
var r = n(912370),
    i = n(95015),
    a = n(668781),
    o = n(904245),
    s = n(911969),
    l = n(761122),
    c = n(213459),
    u = n(895924),
    d = n(581364),
    f = n(667204),
    p = n(433534),
    _ = n(957730),
    m = n(973616),
    h = n(768581),
    g = n(358085),
    E = n(541099),
    b = n(827498),
    y = n(981631),
    O = n(689079),
    v = n(959517),
    S = n(388032);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = { id: O.bi.BUILT_IN };
function D(e) {
    return e.id !== O.bi.BUILT_IN;
}
function w(e) {
    return D(e) ? e.name : S.intl.string(S.t.UB2gG2);
}
function x(e) {
    return D(e) ? e.description : S.intl.string(S.t.X9fusn);
}
function L(e) {
    var t;
    return D(e) && (0, i.yE)(null != (t = e.flags) ? t : 0, y.udG.EMBEDDED);
}
function j(e) {
    var t;
    return D(e) && (0, i.yE)(null != (t = e.flags) ? t : 0, y.udG.PARTNER);
}
function M(e) {
    var t;
    return D(e) && (0, i.yE)(null != (t = e.flags) ? t : 0, y.udG.PROMOTED);
}
function k(e) {
    let t = G(e),
        n = null == t ? void 0 : t.client_platform_config[(0, l.Z)((0, g.getOS)())],
        r = Date.now();
    if (
        (null == n ? void 0 : n.label_until) != null &&
        r < Date.parse(n.label_until) &&
        (null == n ? void 0 : n.label_from) != null &&
        r > Date.parse(n.label_from)
    ) {
        var i;
        return null != (i = null == n ? void 0 : n.label_type) ? i : s.ww.NONE;
    }
    return s.ww.NONE;
}
function U(e) {
    switch (k(e)) {
        case s.ww.NEW:
            return "New";
        case s.ww.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function G(e) {
    return D(e) && L(e) ? (e instanceof m.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function Z(e) {
    let {
            command: t,
            optionValues: n,
            context: r,
            commandTargetId: i,
            maxSizeCallback: s,
            sectionName: l,
            commandOrigin: c = u.bB.APPLICATION_LAUNCHER,
        } = e,
        { channel: d } = r,
        p = async () => {
            try {
                let a = await (0, f.Z)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: i,
                    maxSizeCallback: s,
                    commandOrigin: c,
                    sectionName: l,
                    source: E.Z.entrypoint(),
                });
                if (t.inputType === u.iw.BUILT_IN_TEXT && null != a && null != r.channel) {
                    var e;
                    let t = _.ZP.parse(d, a.content);
                    (t.tts = null != (e = a.tts) && e),
                        o.Z.sendMessage(r.channel.id, t, !0, { location: v.dy.APP_COMMAND });
                }
            } catch (e) {
                throw (
                    (a.Z.show({
                        title: S.intl.string(S.t["aHO//m"]),
                        body: S.intl.string(S.t.kuzKHK),
                        confirmText: S.intl.string(S.t["5911Lb"]),
                        onConfirm: () => p(),
                    }),
                    e)
                );
            }
        };
    return p();
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n } = t,
        r = N(t, ["fakeAppIconURL"]);
    return D(e)
        ? {
              iconURL: h.ZP.getApplicationIconURL(
                  C(T({}, r), {
                      id: e.id,
                      icon: e.icon,
                  }),
              ),
              name: e.name,
              description: e.description,
          }
        : {
              iconURL: null != n ? n : null,
              name: S.intl.string(S.t.UB2gG2),
              description: S.intl.string(S.t.X9fusn),
          };
}
function F(e) {
    return !!D(e) && (e instanceof m.ZP ? e.isMonetized : e.is_monetized);
}
function V(e) {
    let t = G(e);
    return null != t && t.displays_advertisements;
}
function H(e) {
    return e === b._b.TEXT;
}
function Y(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
}
function W(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === r.C.APPLICATION && L(e.application));
        0 !== e.length && t.push(C(T({}, n), { application_directory_collection_items: e }));
    }
    return t;
}
function K(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig,
    };
}
function z(e) {
    return e instanceof m.ZP
        ? {
              applicationId: e.id,
              customInstallUrl: e.customInstallUrl,
              installParams: e.installParams,
              integrationTypesConfig: e.integrationTypesConfig,
          }
        : {
              applicationId: e.id,
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
          };
}
function q(e, t) {
    let n = null != t ? c.ZP.getGuildState(t) : null,
        r = null != n && (0, d.TK)(e.id, n);
    return (0, p.Dz)(e) || r;
}
