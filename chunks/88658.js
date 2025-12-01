n.d(t, {
    $6: () => g,
    Aj: () => b,
    QB: () => E,
    YK: () => f,
    _o: () => _,
    bL: () => h,
    gl: () => p,
    rr: () => m,
}),
    n(388685),
    n(784620),
    n(973216);
var r = n(367907),
    i = n(695346),
    a = n(526665),
    o = n(486472),
    s = n(430824),
    l = n(819640),
    c = n(585483),
    u = n(981631);
n(388032);
let d = 86400000 * u.eBq;
function f() {
    let e = i.h2.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != s.Z.getGuild(e))), new Set(e);
}
function p() {
    let e = i.zA.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != s.Z.getGuild(e))), new Set(e);
}
function _() {
    let e = i.SE.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != s.Z.getGuild(e))), new Set(e);
}
function m() {
    let e = i.iH.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter((e) => null != s.Z.getGuild(e))), new Set(e);
}
function h(e) {
    return (e & u.HGf) === u.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0,
          }
        : {
              all: !1,
              mutualFriends: (e & u.SOq.MUTUAL_FRIENDS) === u.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & u.SOq.MUTUAL_GUILDS) === u.SOq.MUTUAL_GUILDS,
          };
}
function g(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && d > Date.now() - new Date(e.created_at).getTime());
}
function E(e) {
    let { destinationPane: t, originPane: n, source: i, subsection: a, locationStack: o, applicationId: s } = e;
    r.ZP.trackWithMetadata(u.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: o,
        source: i,
        subsection: a,
        application_id: s,
    });
}
function b(e) {
    let t = (0, a.yP)("shakeUserSettings"),
        n = l.Z.getLayers().at(-1) === u.S9g.USER_SETTINGS,
        r = t && !n ? u.CkL.SHAKE_SETTINGS_MODAL : u.CkL.SHAKE_APP;
    c.S.dispatch(r, e);
}
