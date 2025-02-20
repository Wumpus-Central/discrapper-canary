n.d(t, {
    FL: () => s,
    Ky: () => a
}),
    n(411104);
var r = n(81825),
    i = n(981631);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var a = (function (e) {
    return (e.SHOP = 'SHOP'), (e.NITRO_HOME = 'NITRO_HOME'), (e.QUEST_HOME = 'QUEST_HOME'), (e.APPS_HOME = 'APPS_HOME'), (e.SETTINGS = 'SETTINGS'), e;
})(a || {});
class s extends r.Z {
    static fromType(e, t, n) {
        switch (e) {
            case 'SHOP':
                return new s({
                    path: i.Z5c.COLLECTIBLES_SHOP,
                    type: 'SHOP'
                });
            case 'NITRO_HOME':
                return new s({
                    path: i.Z5c.NITRO_HOME,
                    type: 'NITRO_HOME'
                });
            case 'QUEST_HOME':
                return new s({
                    path: i.Z5c.QUEST_HOME,
                    type: 'QUEST_HOME'
                });
            case 'APPS_HOME':
                return new s({
                    path: i.Z5c.GLOBAL_DISCOVERY_APPS,
                    type: 'APPS_HOME'
                });
            case 'SETTINGS':
                return new s({
                    path: null != t ? t : i.Z5c.SETTINGS('account'),
                    label: n,
                    type: 'SETTINGS'
                });
            default:
                throw Error('Unhandled InAppNavigationType');
        }
    }
    constructor(e) {
        super(), o(this, 'id', void 0), o(this, 'path', void 0), o(this, 'type', void 0), o(this, 'label', void 0), (this.id = e.type), (this.path = e.path), (this.type = e.type), (this.label = e.label);
    }
}
