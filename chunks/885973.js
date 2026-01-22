n.d(t, { C: () => a });
var r = n(287809),
    i = n(827152);
let a = (e) => {
    let t = r.default.getCurrentUser();
    return !(null != t && t.isStaff()) && !i.A.getCurrentConfig(e).enabled;
};
