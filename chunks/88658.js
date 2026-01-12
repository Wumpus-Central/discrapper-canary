n.d(t, {
    $6: () => m,
    Aj: () => g,
    QB: () => h,
    YK: () => u,
    _o: () => f,
    bL: () => _,
    gl: () => d,
    rr: () => p,
}),
    n(388685);
var r = n(367907),
    i = n(695346),
    a = n(486472),
    o = n(430824),
    s = n(585483),
    l = n(981631);
n(388032);
let c = 86400000 * l.eBq;
function u() {
    let e = i.h2.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = i.zA.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function f() {
    let e = i.SE.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function p() {
    let e = i.iH.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function _(e) {
    return (e & l.HGf) === l.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0,
          }
        : {
              all: !1,
              mutualFriends: (e & l.SOq.MUTUAL_FRIENDS) === l.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.SOq.MUTUAL_GUILDS) === l.SOq.MUTUAL_GUILDS,
          };
}
function m(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
function h(e) {
    let { destinationPane: t, originPane: n, source: i, subsection: a, locationStack: o, applicationId: s } = e;
    r.ZP.trackWithMetadata(l.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: o,
        source: i,
        subsection: a,
        application_id: s,
    });
}
function g(e) {
    s.S.dispatch(l.CkL.SHAKE_SETTINGS_MODAL, e);
}
