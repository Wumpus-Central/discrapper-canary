n.d(t, {
    FL: () => c,
    Ky: () => l,
}),
    n(415506);
var r = n(81825),
    i = n(937797),
    a = n(981631),
    o = n(46140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var l = (function (e) {
    return (
        (e.SHOP = "SHOP"),
        (e.NITRO_HOME = "NITRO_HOME"),
        (e.QUEST_HOME = "QUEST_HOME"),
        (e.APPS_HOME = "APPS_HOME"),
        (e.SETTINGS = "SETTINGS"),
        e
    );
})(l || {});
class c extends r.Z {
    static fromType(e, t, n) {
        switch (e) {
            case "SHOP":
                return new c({
                    path: a.Z5c.COLLECTIBLES_SHOP,
                    type: "SHOP",
                });
            case "NITRO_HOME":
                return new c({
                    path: a.Z5c.NITRO_HOME,
                    type: "NITRO_HOME",
                });
            case "QUEST_HOME":
                return new c({
                    path: i.m8.getConfig({ location: o.dr.IN_APP_NAVIGATION }).enabled
                        ? a.Z5c.QUEST_HOME_V2
                        : a.Z5c.QUEST_HOME,
                    type: "QUEST_HOME",
                });
            case "APPS_HOME":
                return new c({
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS,
                    type: "APPS_HOME",
                });
            case "SETTINGS":
                return new c({
                    path: null != t ? t : a.Z5c.SETTINGS("account"),
                    label: n,
                    type: "SETTINGS",
                });
            default:
                throw Error("Unhandled InAppNavigationType");
        }
    }
    constructor(e) {
        super(),
            s(this, "id", void 0),
            s(this, "path", void 0),
            s(this, "type", void 0),
            s(this, "label", void 0),
            (this.id = e.type),
            (this.path = e.path),
            (this.type = e.type),
            (this.label = e.label);
    }
}
