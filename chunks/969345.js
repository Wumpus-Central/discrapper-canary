r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(812206);
function a(e) {
    var n;
    let { applicationId: r, activityConfigs: a, applications: o } = e,
        s = null !== (n = null == o ? void 0 : o.find((e) => e.id === r)) && void 0 !== n ? n : i.Z.getApplication(r),
        l = a.find((e) => e.application_id === r);
    return null == l || null == s
        ? null
        : {
              activity: l,
              application: s
          };
}
