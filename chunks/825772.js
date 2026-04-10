"use strict";
n.d(t, { A: () => s });
var i = n(315069),
    r = n(427157);
class s extends i.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(e) {
        return new s(e);
    }
    constructor(e) {
        super(), (this.user = new r.A(e.user)), (this.member_type = e.member_type), (this.accepted_at = e.accepted_at);
    }
    isPrimary() {
        return 1 === this.member_type;
    }
    isMember() {
        return 2 === this.member_type && null != this.accepted_at;
    }
    isInvited() {
        return 2 === this.member_type && null == this.accepted_at;
    }
}
