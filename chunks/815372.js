n.d(t, {
    FL: () => s,
    Ky: () => o,
}),
    n(415506);
var r = n(81825),
    i = n(981631);
function a(e, t, n) {
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
var o = (function (e) {
    return (
        (e.SHOP = "SHOP"),
        (e.NITRO_HOME = "NITRO_HOME"),
        (e.QUEST_HOME = "QUEST_HOME"),
        (e.APPS_HOME = "APPS_HOME"),
        (e.SETTINGS = "SETTINGS"),
        (e.PLAYGROUND = "PLAYGROUND"),
        e
    );
})(o || {});
class s extends r.Z {
    static fromType(e, t, n, r, a) {
        switch (e) {
            case "SHOP":
                return new s({
                    path: i.Z5c.COLLECTIBLES_SHOP,
                    type: "SHOP",
                });
            case "NITRO_HOME":
                return new s({
                    path: i.Z5c.NITRO_HOME,
                    type: "NITRO_HOME",
                });
            case "QUEST_HOME":
                return new s({
                    path: i.Z5c.QUEST_HOME_V2,
                    type: "QUEST_HOME",
                });
            case "APPS_HOME":
                return new s({
                    path: i.Z5c.GLOBAL_DISCOVERY_APPS,
                    type: "APPS_HOME",
                });
            case "SETTINGS":
                return new s({
                    path: null != t ? t : i.Z5c.SETTINGS("account"),
                    label: n,
                    type: "SETTINGS",
                });
            case "PLAYGROUND":
                return new s({
                    path: null != t ? t : i.Z5c.APP,
                    type: "PLAYGROUND",
                    label: n,
                    collectionId: r,
                    IconComponent: a,
                });
            default:
                throw Error("Unhandled InAppNavigationType");
        }
    }
    constructor(e) {
        super(),
            a(this, "id", void 0),
            a(this, "path", void 0),
            a(this, "type", void 0),
            a(this, "label", void 0),
            a(this, "collectionId", void 0),
            a(this, "IconComponent", void 0),
            (this.id = null != e.collectionId ? "".concat(e.type, "_").concat(e.collectionId) : e.type),
            (this.path = e.path),
            (this.type = e.type),
            (this.label = e.label),
            (this.collectionId = e.collectionId),
            (this.IconComponent = e.IconComponent);
    }
}
