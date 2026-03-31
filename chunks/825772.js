"use strict";
s.d(t, { A: () => n });
var r = s(315069),
    i = s(427157);
class n extends r.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(e) {
        return new n(e);
    }
    constructor(e) {
        super(), (this.user = new i.A(e.user)), (this.member_type = e.member_type), (this.accepted_at = e.accepted_at);
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
