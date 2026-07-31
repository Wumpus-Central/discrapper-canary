"use strict";
n.d(t, { U_: () => h, lF: () => p, we: () => f, lA: () => I, jv: () => E, A9: () => A });
var i = n(284009),
    r = n.n(i),
    a = n(945810),
    s = n(287809),
    l = n(474090),
    o = n(202541);
function d() {
    let e = s.default.getCurrentUser();
    return (0, l.ki)(e, o.PremiumTypes.TIER_2);
}
let c = (0, a.mj)({
    name: "2026-03-message-bookmarks",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
});
class u {
    enabled = !1;
    bookmarkLimit = 0;
    reminderLimit = 0;
    constructor(e, t) {
        r()(null != t.b, "Config is missing bookmark limit"),
            r()(null != t.r, "Config is missing reminder limit"),
            (this.enabled = e),
            (this.bookmarkLimit = t.b),
            (this.reminderLimit = t.r);
    }
}
let _ = (0, a.mj)({
    name: "2026-07-message-bookmarks-v2",
    kind: "user",
    defaultConfig: new u(!1, { b: 0, r: 0 }),
    variations: { 1: (e) => new u(!0, JSON.parse(e)), 2: (e) => new u(!0, JSON.parse(e)) },
});
function E(e) {
    let { enabled: t } = _.useConfig({ location: e }),
        { enabled: n } = c.useConfig({ location: e });
    return t || n;
}
function A(e) {
    return _.getConfig({ location: e }).enabled || c.getConfig({ location: e }).enabled;
}
function h(e) {
    return _.getConfig({ location: e }).enabled;
}
function I(e) {
    let { enabled: t } = _.useConfig({ location: e }),
        { enabled: n } = c.useConfig({ location: e });
    return (function (e, t) {
        return !!e || (!!t && d());
    })(t, n);
}
function f(e) {
    return (function (e, t) {
        return !!e || (!!t && d());
    })(_.getConfig({ location: e }).enabled, c.getConfig({ location: e }).enabled);
}
function p(e, t) {
    let n = _.getConfig({ location: e });
    if (n.enabled)
        if (d()) return t ? 50 : 200;
        else return t ? n.reminderLimit : n.bookmarkLimit;
    return c.getConfig({ location: e }).enabled && d() ? (t ? 50 : 200) : 0;
}
