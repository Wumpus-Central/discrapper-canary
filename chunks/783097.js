n.d(t, {
    $d: () => y,
    BQ: () => v,
    Cb: () => R,
    Hu: () => O,
    L1: () => w,
    Ow: () => P,
    Wx: () => E,
    X: () => M,
    XZ: () => L,
    Y$: () => N,
    Yn: () => D,
    jD: () => I,
    lf: () => S,
    pF: () => x,
    sl: () => C,
    vJ: () => b,
    yJ: () => A,
    ye: () => T
}),
    n(789020),
    n(627494),
    n(757143),
    n(653041),
    n(47120);
var i = n(912370),
    r = n(668781),
    a = n(904245),
    s = n(895924),
    o = n(667204),
    l = n(957730),
    u = n(973616),
    c = n(768581),
    d = n(585483),
    f = n(630388),
    _ = n(541099),
    p = n(827498),
    h = n(981631),
    m = n(689079),
    g = n(388032);
let E = { id: m.bi.BUILT_IN };
function v(e) {
    return e.id !== m.bi.BUILT_IN;
}
function y(e) {
    return v(e) ? e.name : g.intl.string(g.t.UB2gGx);
}
function I(e) {
    return v(e) ? e.description : g.intl.string(g.t.X9fusr);
}
function T(e) {
    var t;
    return v(e) && (0, f.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, h.udG.EMBEDDED);
}
function b(e) {
    var t;
    return v(e) && (0, f.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, h.udG.PARTNER);
}
function S(e) {
    var t;
    return v(e) && (0, f.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, h.udG.PROMOTED);
}
function A(e) {
    return v(e) && T(e) ? (e instanceof u.ZP ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function N(e) {
    let { command: t, optionValues: n, context: i, commandTargetId: u, maxSizeCallback: c, sectionName: d, commandOrigin: f = s.bB.APPLICATION_LAUNCHER } = e,
        { channel: p } = i,
        h = async () => {
            try {
                let r = await (0, o.Z)({
                    command: t,
                    optionValues: n,
                    context: i,
                    commandTargetId: u,
                    maxSizeCallback: c,
                    commandOrigin: f,
                    sectionName: d,
                    source: _.Z.entrypoint()
                });
                if (t.inputType === s.iw.BUILT_IN_TEXT && null != r && null != i.channel) {
                    var e;
                    let t = l.ZP.parse(p, r.content);
                    (t.tts = null !== (e = r.tts) && void 0 !== e && e), a.Z.sendMessage(i.channel.id, t);
                }
            } catch (e) {
                throw (
                    (r.Z.show({
                        title: g.intl.string(g.t['aHO//v']),
                        body: g.intl.string(g.t.kuzKHB),
                        confirmText: g.intl.string(g.t['5911LS']),
                        onConfirm: () => h()
                    }),
                    e)
                );
            }
        };
    return h();
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...i } = t;
    return v(e)
        ? {
              iconURL: c.ZP.getApplicationIconURL({
                  ...i,
                  id: e.id,
                  icon: e.icon
              }),
              name: e.name,
              description: e.description
          }
        : {
              iconURL: null != n ? n : null,
              name: g.intl.string(g.t.UB2gGx),
              description: g.intl.string(g.t.X9fusr)
          };
}
function R(e) {
    return !!v(e) && (e instanceof u.ZP ? e.isMonetized : e.is_monetized);
}
function O(e) {
    let t = A(e);
    return null != t && t.displays_advertisements;
}
function D(e) {
    return e === p._b.TEXT;
}
function L(e) {
    return null == e ? '' : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
}
function x(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === i.C.APPLICATION && T(e.application));
        0 !== e.length &&
            t.push({
                ...n,
                application_directory_collection_items: e
            });
    }
    return t;
}
function P(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    };
}
function w(e) {
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
function M(e) {
    d.S.dispatchToLastSubscribed(h.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
