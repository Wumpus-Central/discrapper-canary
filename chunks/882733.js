"use strict";
n.d(t, { k: () => i });
var r = n(961350);
function i(e) {
    let t = r.default.getId();
    return null != t && !!(e.removedMemberIds?.includes(t) || e.addedMembers?.some((e) => e.userId === t));
}
