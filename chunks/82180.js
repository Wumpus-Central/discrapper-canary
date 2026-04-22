"use strict";
let r;
n.d(t, { e: () => u, h: () => d });
var i = n(679314);
let s =
    ((r = new DataView(new ArrayBuffer(8))),
    void 0 !== globalThis.BigInt &&
    "function" == typeof r.getBigInt64 &&
    "function" == typeof r.getBigUint64 &&
    "function" == typeof r.setBigInt64 &&
    "function" == typeof r.setBigUint64
        ? {
              MIN: BigInt("-9223372036854775808"),
              MAX: BigInt("9223372036854775807"),
              UMIN: BigInt("0"),
              UMAX: BigInt("18446744073709551615"),
              C: BigInt,
              V: r,
          }
        : void 0);
function a(e) {
    if (!e)
        throw Error(
            "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support",
        );
}
let o = /^-?[0-9]+$/;
class l {
    constructor(e, t) {
        (this.lo = 0 | e), (this.hi = 0 | t);
    }
    isZero() {
        return 0 == this.lo && 0 == this.hi;
    }
    toNumber() {
        let e = 0x100000000 * this.hi + (this.lo >>> 0);
        if (!Number.isSafeInteger(e)) throw Error("cannot convert to safe number");
        return e;
    }
}
class u extends l {
    static from(e) {
        if (s)
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if ("" == e) throw Error("string is no integer");
                    e = s.C(e);
                case "number":
                    if (0 === e) return this.ZERO;
                    e = s.C(e);
                case "bigint":
                    if (!e) return this.ZERO;
                    if (e < s.UMIN) throw Error("signed value for ulong");
                    if (e > s.UMAX) throw Error("ulong too large");
                    return s.V.setBigUint64(0, e, !0), new u(s.V.getInt32(0, !0), s.V.getInt32(4, !0));
            }
        else
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if (((e = e.trim()), !o.test(e))) throw Error("string is no integer");
                    let [t, n, r] = (0, i.Jg)(e);
                    if (t) throw Error("signed value");
                    return new u(n, r);
                case "number":
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error("number is no integer");
                    if (e < 0) throw Error("signed value for ulong");
                    return new u(e, e / 0x100000000);
            }
        throw Error("unknown value " + typeof e);
    }
    toString() {
        return s ? this.toBigInt().toString() : (0, i.oJ)(this.lo, this.hi);
    }
    toBigInt() {
        return a(s), s.V.setInt32(0, this.lo, !0), s.V.setInt32(4, this.hi, !0), s.V.getBigUint64(0, !0);
    }
}
u.ZERO = new u(0, 0);
class d extends l {
    static from(e) {
        if (s)
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if ("" == e) throw Error("string is no integer");
                    e = s.C(e);
                case "number":
                    if (0 === e) return this.ZERO;
                    e = s.C(e);
                case "bigint":
                    if (!e) return this.ZERO;
                    if (e < s.MIN) throw Error("ulong too small");
                    if (e > s.MAX) throw Error("ulong too large");
                    return s.V.setBigInt64(0, e, !0), new d(s.V.getInt32(0, !0), s.V.getInt32(4, !0));
            }
        else
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if (((e = e.trim()), !o.test(e))) throw Error("string is no integer");
                    let [t, n, r] = (0, i.Jg)(e),
                        a = new d(n, r);
                    return t ? a.negate() : a;
                case "number":
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error("number is no integer");
                    return e > 0 ? new d(e, e / 0x100000000) : new d(-e, -e / 0x100000000).negate();
            }
        throw Error("unknown value " + typeof e);
    }
    isNegative() {
        return (0x80000000 & this.hi) != 0;
    }
    negate() {
        let e = ~this.hi,
            t = this.lo;
        return t ? (t = ~t + 1) : (e += 1), new d(t, e);
    }
    toString() {
        if (s) return this.toBigInt().toString();
        if (this.isNegative()) {
            let e = this.negate();
            return "-" + (0, i.oJ)(e.lo, e.hi);
        }
        return (0, i.oJ)(this.lo, this.hi);
    }
    toBigInt() {
        return a(s), s.V.setInt32(0, this.lo, !0), s.V.setInt32(4, this.hi, !0), s.V.getBigInt64(0, !0);
    }
}
d.ZERO = new d(0, 0);
