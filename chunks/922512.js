n.d(t, {
    A: () => s,
});
var r = n(315069),
    i = n(985018);

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
class s extends r.A {
    static createFromServer(e) {
        return new s({
            id: e.id,
            liveBuildId: e.live_build_id,
            name: e.name,
        });
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? i.intl.string(i.t.AHqj6c) : i.intl.string(i.t["62f4nE"]);
    }
    constructor(e) {
        super(),
            a(this, "id", void 0),
            a(this, "liveBuildId", void 0),
            a(this, "name", void 0),
            (this.id = e.id),
            (this.liveBuildId = e.liveBuildId),
            (this.name = e.name);
    }
}
