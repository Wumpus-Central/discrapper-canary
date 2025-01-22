var i = r(81825);
function a(e, n, r) {
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
class o extends i.Z {
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
        super(), a(this, 'id', void 0), a(this, 'guildId', void 0), a(this, 'userId', void 0), a(this, 'user', void 0), a(this, 'ended', void 0), a(this, 'endsAt', void 0), (this.id = e.id), (this.guildId = e.guildId), (this.userId = e.userId), (this.user = e.user), (this.ended = e.ended), (this.endsAt = null != e.endsAt ? e.endsAt : null);
    }
}
n.Z = o;
