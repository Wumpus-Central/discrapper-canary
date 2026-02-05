"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(201718);
function a(e) {
    i.P.refetch(e.user_id);
}
class s extends r.A {
    actions = { USER_APPLICATION_IDENTITY_UPDATE: a, USER_APPLICATION_IDENTITY_REMOVE: a };
}
let o = new s();
