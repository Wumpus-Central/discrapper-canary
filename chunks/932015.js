n.d(t, { Z: () => a });
var r = n(81825);
function i(e, t, n) {
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
class o extends r.Z {
    static createFromServer(e) {
        return new o({
            id: e.id,
            guildId: e.guild_id,
            userId: null != e.user ? e.user.id : e.user_id,
            user: e.user,
            ended: e.ended,
            endsAt: null != e.ends_at && '' !== e.ends_at ? new Date(e.ends_at) : null
        });
    }
    constructor(e) {
        super(), i(this, 'id', void 0), i(this, 'guildId', void 0), i(this, 'userId', void 0), i(this, 'user', void 0), i(this, 'ended', void 0), i(this, 'endsAt', void 0), (this.id = e.id), (this.guildId = e.guildId), (this.userId = e.userId), (this.user = e.user), (this.ended = e.ended), (this.endsAt = null != e.endsAt ? e.endsAt : null);
    }
}
let a = o;
