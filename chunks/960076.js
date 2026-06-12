"use strict";
n.d(t, { A: () => a });
var i = n(360469),
    r = n(652215);
function s(e) {
    return e.type === r.$pd.STREAMING && null != e.url && i.yz.test(e.url);
}
function a(e) {
    return null != e && (Array.isArray(e) ? e.some(s) : s(e));
}
