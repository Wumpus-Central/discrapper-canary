"use strict";
n.r(t), n.d(t, { DISCORD_EPOCH: () => o, default: () => u, SnowflakeSequence: () => _ });
var i = n(735438),
    r = n.n(i),
    s = n(824120),
    a = n.n(s);
let o = 14200704e5;
function l(e) {
    return Math.floor(Number(e) / 4194304) + o;
}
function d(e) {
    let t = e - o;
    return t <= 0 ? "0" : a()(t).shiftLeft(22).toString();
}
class _ {
    seq;
    constructor() {
        this.seq = 0;
    }
    next() {
        if (this.seq > 4095) throw Error(`Snowflake sequence number overflow: ${this.seq}`);
        return this.seq++;
    }
    willOverflowNext() {
        return this.seq > 4095;
    }
    reset() {
        this.seq = 0;
    }
}
let u = {
    age: function (e) {
        return Date.now() - l(e);
    },
    extractTimestamp: function (e) {
        return l(e);
    },
    compare: function (e, t) {
        return e === t
            ? 0
            : null == t
              ? 1
              : null == e
                ? -1
                : e.length > t.length
                  ? 1
                  : e.length < t.length
                    ? -1
                    : e > t
                      ? 1
                      : -1;
    },
    atPreviousMillisecond: function (e) {
        return d(l(e) - 1);
    },
    atNextMillisecond: function (e) {
        return d(l(e) + 1);
    },
    fromTimestamp: function (e) {
        return d(e);
    },
    fromTimestampWithSequence: function (e, t) {
        let n;
        return (
            (n = e - o),
            a()(n <= 0 ? 0 : n)
                .shiftLeft(22)
                .add(t.next())
                .toString()
        );
    },
    keys: function (e) {
        return Object.keys(e);
    },
    forEach: function (e, t) {
        r().forEach(e, (e, n) => t(e, n));
    },
    forEachKey: function (e, t) {
        for (let n in e) t(n);
    },
    entries: function (e) {
        return Object.entries(e);
    },
    isProbablyAValidSnowflake: function (e) {
        if (null == e || !/^\d{17,19}$/.test(e)) return !1;
        try {
            return l(e) >= o;
        } catch {
            return !1;
        }
    },
    castChannelIdAsMessageId: function (e) {
        return e;
    },
    castMessageIdAsChannelId: function (e) {
        return e;
    },
    castGuildIdAsEveryoneGuildRoleId: function (e) {
        return e;
    },
    cast: function (e) {
        return e;
    },
};
