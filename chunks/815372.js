r.d(n, {
    FL: function () {
        return u;
    },
    Ky: function () {
        return i;
    }
});
var i,
    a = r(411104);
var o = r(81825),
    s = r(981631);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.SHOP = 'SHOP'), (e.NITRO_HOME = 'NITRO_HOME'), (e.QUEST_HOME = 'QUEST_HOME'), (e.APPS_HOME = 'APPS_HOME');
})(i || (i = {}));
class u extends o.Z {
    static fromType(e) {
        switch (e) {
            case 'SHOP':
                return new u({
                    path: s.Z5c.COLLECTIBLES_SHOP,
                    type: 'SHOP'
                });
            case 'NITRO_HOME':
                return new u({
                    path: s.Z5c.NITRO_HOME,
                    type: 'NITRO_HOME'
                });
            case 'QUEST_HOME':
                return new u({
                    path: s.Z5c.QUEST_HOME,
                    type: 'QUEST_HOME'
                });
            case 'APPS_HOME':
                return new u({
                    path: s.Z5c.APPLICATION_DIRECTORY,
                    type: 'APPS_HOME'
                });
            default:
                throw Error('Unhandled InAppNavigationType');
        }
    }
    constructor(e) {
        super(), l(this, 'id', void 0), l(this, 'path', void 0), l(this, 'type', void 0), (this.id = e.type), (this.path = e.path), (this.type = e.type);
    }
}
