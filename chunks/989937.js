var i = n(311907),
    r = n(73153);
let a = new Set();
function l(e) {
    let { userActivities: t } = e;
    null != t && (a = new Set(t.map((e) => e.application_id)));
}
class s extends i.Ay.Store {
    static displayName = "RecentUserActivityStore";
    get currentUserApplicationIds() {
        return a;
    }
}
new s(r.h, { CONNECTION_OPEN_SUPPLEMENTAL: l, CONNECTION_OPEN_STATE_UPDATE: l });
