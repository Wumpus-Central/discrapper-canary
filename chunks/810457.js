(n.d(t, { Z: () => c }), n(388685), n(387201), n(642613), n(539854));
var r = n(392711),
    i = n.n(r),
    a = n(709054),
    o = n(982183);
function s(e, t, n) {
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
class l {
    updateChannelIds(e) {
        ((this._channelIds = new Set(e)), (this._messages = this._messages.filter((e) => e.kind !== o.fL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId))));
    }
    addMessage(e) {
        ((this._messages = [e, ...this._messages]), this.maybeTruncate());
    }
    addChannelMessages(e) {
        let { channel: t, channelMessages: n, userId: r } = e;
        ((this._messages = [
            ...this._messages,
            ...n
                .filter((e) => e.author.id !== r && a.default.age(e.id) < o.ib)
                .map((e) => ({
                    id: e.id,
                    channelId: e.channel_id,
                    guildId: null == t ? void 0 : t.guild_id,
                    kind: e.mentioned ? o.fL.MENTION : o.fL.ALL_MESSAGES_CHANNEL,
                    message: e
                }))
        ]),
            (this._isSorted = !1),
            this.maybeTruncate());
    }
    addMessages(e) {
        ((this._messages = [...this._messages, ...e]), (this._isSorted = !1), this.maybeTruncate());
    }
    deleteMessages(e) {
        return !!this._messages.some((t) => e.includes(t.id)) && ((this._messages = this._messages.filter((t) => !e.includes(t.id))), !0);
    }
    getMessages() {
        return (this._isSorted || this.sortMessages(), this._messages);
    }
    sortMessages() {
        this._isSorted ||
            ((this._messages = i().sortedUniqBy(
                this._messages.toSorted((e, t) => {
                    let n = a.default.compare(e.id, t.id);
                    return 0 !== n ? n : e.kind === o.fL.MENTION && t.kind !== o.fL.MENTION ? -1 : +(e.kind !== o.fL.MENTION && t.kind === o.fL.MENTION);
                }),
                'id'
            )),
            (this._isSorted = !0));
    }
    maybeTruncate() {
        let e = o.AQ * (this._channelIds.size + 1) * 1.5;
        if (this._messages.length <= e) return;
        let t = {};
        for (let e of this._messages)
            a.default.age(e.id) > o.ib ||
                (null == t[e.channelId] &&
                    (t[e.channelId] = {
                        mentions: [],
                        messages: []
                    }),
                e.kind === o.fL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
        let n = [];
        (Object.values(t).forEach((e) => {
            let t = [...e.mentions, ...e.messages].sort((e, t) => a.default.compare(e.id, t.id)).slice(-o.AQ),
                r = new Set(),
                i = [];
            for (let e of t) (r.add(e.id), i.push(e));
            for (let t of e.mentions) r.has(t.id) || i.push(t);
            n.push(...i);
        }),
            (this._messages = n),
            (this._isSorted = !1));
    }
    constructor() {
        (s(this, '_messages', []), s(this, '_isSorted', !0), s(this, '_channelIds', new Set()));
    }
}
let c = l;
