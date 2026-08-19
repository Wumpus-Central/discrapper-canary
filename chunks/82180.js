"use strict";
let n;
r.d(t, { e: () => u, h: () => c });
var o = r(679314);
let i =
    ((n = new DataView(new ArrayBuffer(8))),
    void 0 !== globalThis.BigInt &&
    "function" == typeof n.getBigInt64 &&
    "function" == typeof n.getBigUint64 &&
    "function" == typeof n.setBigInt64 &&
    "function" == typeof n.setBigUint64
        ? {
              MIN: BigInt("-9223372036854775808"),
              MAX: BigInt("9223372036854775807"),
              UMIN: BigInt("0"),
              UMAX: BigInt("18446744073709551615"),
              C: BigInt,
              V: n,
          }
        : void 0);
function a(e) {
    if (!e)
        throw Error(
            "BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support",
        );
}
let s = /^-?[0-9]+$/;
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
        if (i)
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if ("" == e) throw Error("string is no integer");
                    e = i.C(e);
                case "number":
                    if (0 === e) return this.ZERO;
                    e = i.C(e);
                case "bigint":
                    if (!e) return this.ZERO;
                    if (e < i.UMIN) throw Error("signed value for ulong");
                    if (e > i.UMAX) throw Error("ulong too large");
                    return i.V.setBigUint64(0, e, !0), new u(i.V.getInt32(0, !0), i.V.getInt32(4, !0));
            }
        else
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if (((e = e.trim()), !s.test(e))) throw Error("string is no integer");
                    let [t, r, n] = (0, o.Jg)(e);
                    if (t) throw Error("signed value");
                    return new u(r, n);
                case "number":
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error("number is no integer");
                    if (e < 0) throw Error("signed value for ulong");
                    return new u(e, e / 0x100000000);
            }
        throw Error("unknown value " + typeof e);
    }
    toString() {
        return i ? this.toBigInt().toString() : (0, o.oJ)(this.lo, this.hi);
    }
    toBigInt() {
        return a(i), i.V.setInt32(0, this.lo, !0), i.V.setInt32(4, this.hi, !0), i.V.getBigUint64(0, !0);
    }
}
u.ZERO = new u(0, 0);
class c extends l {
    static from(e) {
        if (i)
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if ("" == e) throw Error("string is no integer");
                    e = i.C(e);
                case "number":
                    if (0 === e) return this.ZERO;
                    e = i.C(e);
                case "bigint":
                    if (!e) return this.ZERO;
                    if (e < i.MIN) throw Error("ulong too small");
                    if (e > i.MAX) throw Error("ulong too large");
                    return i.V.setBigInt64(0, e, !0), new c(i.V.getInt32(0, !0), i.V.getInt32(4, !0));
            }
        else
            switch (typeof e) {
                case "string":
                    if ("0" == e) return this.ZERO;
                    if (((e = e.trim()), !s.test(e))) throw Error("string is no integer");
                    let [t, r, n] = (0, o.Jg)(e),
                        a = new c(r, n);
                    return t ? a.negate() : a;
                case "number":
                    if (0 == e) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw Error("number is no integer");
                    return e > 0 ? new c(e, e / 0x100000000) : new c(-e, -e / 0x100000000).negate();
            }
        throw Error("unknown value " + typeof e);
    }
    isNegative() {
        return (0x80000000 & this.hi) != 0;
    }
    negate() {
        let e = ~this.hi,
            t = this.lo;
        return t ? (t = ~t + 1) : (e += 1), new c(t, e);
    }
    toString() {
        if (i) return this.toBigInt().toString();
        if (this.isNegative()) {
            let e = this.negate();
            return "-" + (0, o.oJ)(e.lo, e.hi);
        }
        return (0, o.oJ)(this.lo, this.hi);
    }
    toBigInt() {
        return a(i), i.V.setInt32(0, this.lo, !0), i.V.setInt32(4, this.hi, !0), i.V.getBigInt64(0, !0);
    }
}
c.ZERO = new c(0, 0);
