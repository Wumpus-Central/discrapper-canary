"use strict";
n.r(t), n.d(t, { DISCORD_EPOCH: () => l, default: () => u, SnowflakeSequence: () => c });
var i = n(435558),
    r = n.n(i),
    a = n(824120),
    s = n.n(a);
let l = 14200704e5;
function o(e) {
    return Math.floor(Number(e) / 4194304) + l;
}
function d(e) {
    let t = e - l;
    return t <= 0 ? "0" : s()(t).shiftLeft(22).toString();
}
class c {
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
        return Date.now() - o(e);
    },
    extractTimestamp: function (e) {
        return o(e);
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
        return d(o(e) - 1);
    },
    atNextMillisecond: function (e) {
        return d(o(e) + 1);
    },
    fromTimestamp: function (e) {
        return d(e);
    },
    fromTimestampWithSequence: function (e, t) {
        let n;
        return (
            (n = e - l),
            s()(n <= 0 ? 0 : n)
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
            return o(e) >= l;
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
