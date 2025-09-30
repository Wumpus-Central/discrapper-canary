n.d(t, {
    $6: () => p,
    QB: () => h,
    YK: () => c,
    _o: () => d,
    bL: () => _,
    gl: () => u,
    rr: () => f,
}),
    n(388685);
var r = n(367907),
    i = n(695346),
    a = n(486472),
    o = n(430824),
    s = n(981631);
n(388032);
let l = 86400000 * s.eBq;
function c() {
    let e = i.h2.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function u() {
    let e = i.zA.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function d() {
    let e = i.SE.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function f() {
    let e = i.iH.getSetting();
    return 0 === a.Z.totalUnavailableGuilds && (e = e.filter((e) => null != o.Z.getGuild(e))), new Set(e);
}
function _(e) {
    return (e & s.HGf) === s.HGf
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0,
          }
        : {
              all: !1,
              mutualFriends: (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS,
          };
}
function p(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && l > Date.now() - new Date(e.created_at).getTime());
}
function h(e) {
    let { destinationPane: t, originPane: n, source: i, subsection: a, locationStack: o, applicationId: l } = e;
    r.ZP.trackWithMetadata(s.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: o,
        source: i,
        subsection: a,
        application_id: l,
    });
}
