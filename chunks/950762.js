"use strict";
n.d(t, { A: () => l });
var i = n(315069),
    s = n(427157);
class l extends i.A {
    id;
    name;
    managed;
    roles;
    requiredColons;
    user;
    animated;
    available;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.managed = e.managed),
            (this.roles = e.roles),
            (this.requiredColons = e.requiredColons),
            (this.user = new s.A(e.user)),
            (this.animated = e.animated),
            (this.available = e.available);
    }
}
