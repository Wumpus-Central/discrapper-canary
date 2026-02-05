"use strict";
n.d(t, { X: () => o });
var r = n(65412),
    i = n(82180),
    a = n(124651),
    s = n(123789);
class o {
    constructor(e) {
        var t;
        this.fields = null != (t = e.fields) ? t : [];
    }
    write(e, t) {
        let n = {},
            r = e;
        for (let e of this.fields) {
            if (!e.oneof) {
                let i = this.field(e, r[e.localName], t);
                void 0 !== i && (n[t.useProtoFieldName ? e.name : e.jsonName] = i);
                continue;
            }
            let i = r[e.oneof];
            if (i.oneofKind !== e.localName) continue;
            let a =
                    "scalar" == e.kind || "enum" == e.kind
                        ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
                        : t,
                o = this.field(e, i[e.localName], a);
            (0, s.vA)(void 0 !== o), (n[t.useProtoFieldName ? e.name : e.jsonName] = o);
        }
        return n;
    }
    field(e, t, n) {
        let r;
        if ("map" == e.kind) {
            (0, s.vA)("object" == typeof t && null !== t);
            let i = {};
            switch (e.V.kind) {
                case "scalar":
                    for (let [n, r] of Object.entries(t)) {
                        let t = this.scalar(e.V.T, r, e.name, !1, !0);
                        (0, s.vA)(void 0 !== t), (i[n.toString()] = t);
                    }
                    break;
                case "message":
                    let a = e.V.T();
                    for (let [r, o] of Object.entries(t)) {
                        let t = this.message(a, o, e.name, n);
                        (0, s.vA)(void 0 !== t), (i[r.toString()] = t);
                    }
                    break;
                case "enum":
                    let o = e.V.T();
                    for (let [r, a] of Object.entries(t)) {
                        (0, s.vA)(void 0 === a || "number" == typeof a);
                        let t = this.enum(o, a, e.name, !1, !0, n.enumAsInteger);
                        (0, s.vA)(void 0 !== t), (i[r.toString()] = t);
                    }
            }
            (n.emitDefaultValues || Object.keys(i).length > 0) && (r = i);
        } else if (e.repeat) {
            (0, s.vA)(Array.isArray(t));
            let i = [];
            switch (e.kind) {
                case "scalar":
                    for (let n = 0; n < t.length; n++) {
                        let r = this.scalar(e.T, t[n], e.name, e.opt, !0);
                        (0, s.vA)(void 0 !== r), i.push(r);
                    }
                    break;
                case "enum":
                    let a = e.T();
                    for (let r = 0; r < t.length; r++) {
                        (0, s.vA)(void 0 === t[r] || "number" == typeof t[r]);
                        let o = this.enum(a, t[r], e.name, e.opt, !0, n.enumAsInteger);
                        (0, s.vA)(void 0 !== o), i.push(o);
                    }
                    break;
                case "message":
                    let o = e.T();
                    for (let r = 0; r < t.length; r++) {
                        let a = this.message(o, t[r], e.name, n);
                        (0, s.vA)(void 0 !== a), i.push(a);
                    }
            }
            (n.emitDefaultValues || i.length > 0 || n.emitDefaultValues) && (r = i);
        } else
            switch (e.kind) {
                case "scalar":
                    r = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case "enum":
                    r = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case "message":
                    r = this.message(e.T(), t, e.name, n);
            }
        return r;
    }
    enum(e, t, n, r, i, a) {
        return "google.protobuf.NullValue" == e[0]
            ? null
            : void 0 === t
              ? void (0, s.vA)(r)
              : 0 !== t || i || r
                ? ((0, s.vA)("number" == typeof t), (0, s.vA)(Number.isInteger(t)), a || !e[1].hasOwnProperty(t))
                    ? t
                    : e[2]
                      ? e[2] + e[1][t]
                      : e[1][t]
                : void 0;
    }
    message(e, t, n, r) {
        return void 0 === t ? (r.emitDefaultValues ? null : void 0) : e.internalJsonWrite(t, r);
    }
    scalar(e, t, n, o, l) {
        if (void 0 === t) return void (0, s.vA)(o);
        let u = l || o;
        switch (e) {
            case a.LN.INT32:
            case a.LN.SFIXED32:
            case a.LN.SINT32:
                if (0 === t) return u ? 0 : void 0;
                return (0, s.bn)(t), t;
            case a.LN.FIXED32:
            case a.LN.UINT32:
                if (0 === t) return u ? 0 : void 0;
                return (0, s.e1)(t), t;
            case a.LN.FLOAT:
                (0, s.wO)(t);
            case a.LN.DOUBLE:
                if (0 === t) return u ? 0 : void 0;
                if (((0, s.vA)("number" == typeof t), Number.isNaN(t))) return "NaN";
                if (t === 1 / 0) return "Infinity";
                if (t === -1 / 0) return "-Infinity";
                return t;
            case a.LN.STRING:
                if ("" === t) return u ? "" : void 0;
                return (0, s.vA)("string" == typeof t), t;
            case a.LN.BOOL:
                if (!1 === t) return !u && void 0;
                return (0, s.vA)("boolean" == typeof t), t;
            case a.LN.UINT64:
            case a.LN.FIXED64:
                (0, s.vA)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                let c = i.e.from(t);
                if (c.isZero() && !u) return;
                return c.toString();
            case a.LN.INT64:
            case a.LN.SFIXED64:
            case a.LN.SINT64:
                (0, s.vA)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                let d = i.h.from(t);
                if (d.isZero() && !u) return;
                return d.toString();
            case a.LN.BYTES:
                if (((0, s.vA)(t instanceof Uint8Array), !t.byteLength)) return u ? "" : void 0;
                return (0, r.C)(t);
        }
    }
}
