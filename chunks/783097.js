r.d(n, {
    $d: function () {
        return N;
    },
    BQ: function () {
        return A;
    },
    Cb: function () {
        return P;
    },
    Hu: function () {
        return M;
    },
    L1: function () {
        return Z;
    },
    Ow: function () {
        return G;
    },
    Wx: function () {
        return S;
    },
    X: function () {
        return F;
    },
    XZ: function () {
        return U;
    },
    Y$: function () {
        return x;
    },
    Yn: function () {
        return k;
    },
    jD: function () {
        return C;
    },
    lf: function () {
        return D;
    },
    pF: function () {
        return B;
    },
    sl: function () {
        return w;
    },
    vJ: function () {
        return O;
    },
    yJ: function () {
        return L;
    },
    ye: function () {
        return R;
    }
});
var i = r(789020);
var a = r(627494);
var s = r(757143);
var o = r(653041);
var l = r(47120);
var u = r(912370),
    c = r(668781),
    d = r(904245),
    f = r(895924),
    _ = r(667204),
    h = r(957730),
    p = r(973616),
    m = r(768581),
    g = r(585483),
    E = r(630388),
    v = r(541099),
    I = r(827498),
    T = r(981631),
    b = r(689079),
    y = r(388032);
let S = { id: b.bi.BUILT_IN };
function A(e) {
    return e.id !== b.bi.BUILT_IN;
}
function N(e) {
    return A(e) ? e.name : y.intl.string(y.t.UB2gGx);
}
function C(e) {
    return A(e) ? e.description : y.intl.string(y.t.X9fusr);
}
function R(e) {
    var n;
    return A(e) && (0, E.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, T.udG.EMBEDDED);
}
function O(e) {
    var n;
    return A(e) && (0, E.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, T.udG.PARTNER);
}
function D(e) {
    var n;
    return A(e) && (0, E.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, T.udG.PROMOTED);
}
function L(e) {
    return A(e) && R(e) ? (e instanceof p.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function x(e) {
    let { command: n, optionValues: r, context: i, commandTargetId: a, maxSizeCallback: s, sectionName: o, commandOrigin: l = f.bB.APPLICATION_LAUNCHER } = e,
        { channel: u } = i,
        p = async () => {
            try {
                let c = await (0, _.Z)({
                    command: n,
                    optionValues: r,
                    context: i,
                    commandTargetId: a,
                    maxSizeCallback: s,
                    commandOrigin: l,
                    sectionName: o,
                    source: v.Z.entrypoint()
                });
                if (n.inputType === f.iw.BUILT_IN_TEXT && null != c) {
                    var e;
                    let n = h.ZP.parse(u, c.content);
                    (n.tts = null !== (e = c.tts) && void 0 !== e && e), d.Z.sendMessage(i.channel.id, n);
                }
            } catch (e) {
                throw (
                    (c.Z.show({
                        title: y.intl.string(y.t['aHO//v']),
                        body: y.intl.string(y.t.kuzKHB),
                        confirmText: y.intl.string(y.t['5911LS']),
                        onConfirm: () => p()
                    }),
                    e)
                );
            }
        };
    return p();
}
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: r, ...i } = n;
    return A(e)
        ? {
              iconURL: m.ZP.getApplicationIconURL({
                  ...i,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != r ? r : null,
              name: y.intl.string(y.t.UB2gGx),
              description: y.intl.string(y.t.X9fusr)
          };
}
function P(e) {
    return !!A(e) && (e instanceof p.ZP ? e.isMonetized : e.is_monetized);
}
function M(e) {
    let n = L(e);
    return null != n && n.displays_advertisements;
}
function k(e) {
    return e === I._b.TEXT;
}
function U(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function B(e) {
    let n = [];
    for (let r of e) {
        let e = r.application_directory_collection_items.filter((e) => e.type === u.C.APPLICATION && R(e.application));
        if (0 !== e.length)
            n.push({
                ...r,
                application_directory_collection_items: e
            });
    }
    return n;
}
function G(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function Z(e) {
    return e instanceof p.ZP
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
function F(e) {
    g.S.dispatchToLastSubscribed(T.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
