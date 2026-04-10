"use strict";
s.d(e, { A: () => i });
var r = s(315069),
    n = s(427157);
class i extends r.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(t) {
        return new i(t);
    }
    constructor(t) {
        super(), (this.user = new n.A(t.user)), (this.member_type = t.member_type), (this.accepted_at = t.accepted_at);
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
