n.d(t, { A: () => a });
var i = n(315069),
    l = n(427157);
class a extends i.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(e) {
        return new a(e);
    }
    constructor(e) {
        super(), (this.user = new l.A(e.user)), (this.member_type = e.member_type), (this.accepted_at = e.accepted_at);
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
