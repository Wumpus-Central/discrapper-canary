n.d(t, { Z: () => i });
var r = n(812206);
function i(e) {
    var t;
    let { applicationId: n, activityConfigs: i, applications: a } = e,
        o = null != (t = null == a ? void 0 : a.find((e) => e.id === n)) ? t : r.Z.getApplication(n),
        s = i.find((e) => e.application_id === n);
    return null == s || null == o
        ? null
        : {
              activity: s,
              application: o
          };
}
