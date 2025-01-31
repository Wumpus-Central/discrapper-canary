n.d(t, { Z: () => s });
var i = n(81825);
function r(e, t, n) {
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
class a extends i.Z {
    static createFromServer(e) {
        return new a({
            id: e.id,
            guildId: e.guild_id,
            userId: null != e.user ? e.user.id : e.user_id,
            user: e.user,
            ended: e.ended,
            endsAt: null != e.ends_at && '' !== e.ends_at ? new Date(e.ends_at) : null
        });
    }
    constructor(e) {
        super(), r(this, 'id', void 0), r(this, 'guildId', void 0), r(this, 'userId', void 0), r(this, 'user', void 0), r(this, 'ended', void 0), r(this, 'endsAt', void 0), (this.id = e.id), (this.guildId = e.guildId), (this.userId = e.userId), (this.user = e.user), (this.ended = e.ended), (this.endsAt = null != e.endsAt ? e.endsAt : null);
    }
}
let s = a;
