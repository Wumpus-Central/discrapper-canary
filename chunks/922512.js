"use strict";
n.d(t, { A: () => s });
var r = n(315069),
    i = n(985018);
class s extends r.A {
    id;
    liveBuildId;
    name;
    static createFromServer(e) {
        return new s({ id: e.id, liveBuildId: e.live_build_id, name: e.name });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.liveBuildId = e.liveBuildId), (this.name = e.name);
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? i.intl.string(i.t.AHqj6c) : i.intl.string(i.t["62f4nE"]);
    }
}
