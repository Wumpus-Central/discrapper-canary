n.d(t, {
    FL: () => o,
    Ky: () => s
}),
    n(411104);
var i = n(81825),
    r = n(981631);
function a(e, t, n) {
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
var s = (function (e) {
    return (e.SHOP = 'SHOP'), (e.NITRO_HOME = 'NITRO_HOME'), (e.QUEST_HOME = 'QUEST_HOME'), (e.APPS_HOME = 'APPS_HOME'), e;
})(s || {});
class o extends i.Z {
    static fromType(e) {
        switch (e) {
            case 'SHOP':
                return new o({
                    path: r.Z5c.COLLECTIBLES_SHOP,
                    type: 'SHOP'
                });
            case 'NITRO_HOME':
                return new o({
                    path: r.Z5c.NITRO_HOME,
                    type: 'NITRO_HOME'
                });
            case 'QUEST_HOME':
                return new o({
                    path: r.Z5c.QUEST_HOME,
                    type: 'QUEST_HOME'
                });
            case 'APPS_HOME':
                return new o({
                    path: r.Z5c.GLOBAL_DISCOVERY_APPS,
                    type: 'APPS_HOME'
                });
            default:
                throw Error('Unhandled InAppNavigationType');
        }
    }
    constructor(e) {
        super(), a(this, 'id', void 0), a(this, 'path', void 0), a(this, 'type', void 0), (this.id = e.type), (this.path = e.path), (this.type = e.type);
    }
}
