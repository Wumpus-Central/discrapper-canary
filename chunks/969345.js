n.d(t, { Z: () => r });
var i = n(812206);
function r(e) {
    var t;
    let { applicationId: n, activityConfigs: r, applications: a } = e,
        s = null !== (t = null == a ? void 0 : a.find((e) => e.id === n)) && void 0 !== t ? t : i.Z.getApplication(n),
        o = r.find((e) => e.application_id === n);
    return null == o || null == s
        ? null
        : {
              activity: o,
              application: s
          };
}
