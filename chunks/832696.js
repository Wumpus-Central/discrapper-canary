"use strict";
let i, r, o;
n.d(t, { Ikc: () => oC, YjP: () => rv, jgl: () => o0, k5n: () => o3 });
var s,
    a,
    u = {};
n.r(u),
    n.d(u, {
        base64: () => eE,
        base64url: () => eT,
        bigint: () => eJ,
        boolean: () => eV,
        browserEmail: () => ek,
        cidrv4: () => eN,
        cidrv6: () => eO,
        cuid: () => eo,
        cuid2: () => es,
        date: () => eF,
        datetime: () => eC,
        domain: () => eI,
        duration: () => ed,
        e164: () => eP,
        email: () => e_,
        emoji: () => eZ,
        extendedDuration: () => ef,
        guid: () => ep,
        hex: () => eX,
        hostname: () => eA,
        html5Email: () => ey,
        idnEmail: () => eb,
        integer: () => eR,
        ipv4: () => e$,
        ipv6: () => eS,
        ksuid: () => ec,
        lowercase: () => eW,
        mac: () => ex,
        md5_base64: () => eQ,
        md5_base64url: () => e0,
        md5_hex: () => eY,
        nanoid: () => el,
        null: () => eB,
        number: () => eL,
        rfc5322Email: () => ew,
        sha1_base64: () => e2,
        sha1_base64url: () => e4,
        sha1_hex: () => e1,
        sha256_base64: () => e6,
        sha256_base64url: () => e7,
        sha256_hex: () => e9,
        sha384_base64: () => e5,
        sha384_base64url: () => e8,
        sha384_hex: () => e3,
        sha512_base64: () => tt,
        sha512_base64url: () => tn,
        sha512_hex: () => te,
        string: () => eU,
        time: () => eM,
        ulid: () => ea,
        undefined: () => eq,
        unicodeEmail: () => ez,
        uppercase: () => eH,
        uuid: () => eh,
        uuid4: () => em,
        uuid6: () => eg,
        uuid7: () => ev,
        xid: () => eu,
    });
var c = {};
n.r(c),
    n.d(c, {
        endsWith: () => iM,
        gt: () => iw,
        gte: () => iz,
        includes: () => iF,
        length: () => iA,
        lowercase: () => iP,
        lt: () => i_,
        lte: () => iy,
        maxLength: () => iE,
        maxSize: () => ix,
        mime: () => iU,
        minLength: () => iT,
        minSize: () => iN,
        multipleOf: () => iS,
        negative: () => ik,
        nonnegative: () => i$,
        nonpositive: () => iZ,
        normalize: () => iR,
        overwrite: () => iJ,
        positive: () => ib,
        property: () => iC,
        regex: () => iI,
        size: () => iO,
        slugify: () => iq,
        startsWith: () => iD,
        toLowerCase: () => iV,
        toUpperCase: () => iB,
        trim: () => iL,
        uppercase: () => ij,
    });
var l = {};
n.r(l),
    n.d(l, {
        ZodISODate: () => i9,
        ZodISODateTime: () => i2,
        ZodISODuration: () => i5,
        ZodISOTime: () => i7,
        date: () => i6,
        datetime: () => i4,
        duration: () => i8,
        time: () => i3,
    });
var d = {};
function f(e, t, n) {
    function i(n, i) {
        if (
            (n._zod ||
                Object.defineProperty(n, "_zod", { value: { def: i, constr: s, traits: new Set() }, enumerable: !1 }),
            n._zod.traits.has(e))
        )
            return;
        n._zod.traits.add(e), t(n, i);
        let r = s.prototype,
            o = Object.keys(r);
        for (let e = 0; e < o.length; e++) {
            let t = o[e];
            t in n || (n[t] = r[t].bind(n));
        }
    }
    let r = n?.Parent ?? Object;
    class o extends r {}
    function s(e) {
        var t;
        let r = n?.Parent ? new o() : this;
        for (let n of (i(r, e), (t = r._zod).deferred ?? (t.deferred = []), r._zod.deferred)) n();
        return r;
    }
    return (
        Object.defineProperty(o, "name", { value: e }),
        Object.defineProperty(s, "init", { value: i }),
        Object.defineProperty(s, Symbol.hasInstance, {
            value: (t) => (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(s, "name", { value: e }),
        s
    );
}
n.r(d),
    n.d(d, {
        ZodAny: () => o$,
        ZodArray: () => oj,
        ZodBase64: () => r1,
        ZodBase64URL: () => r4,
        ZodBigInt: () => oh,
        ZodBigIntFormat: () => og,
        ZodBoolean: () => of,
        ZodCIDRv4: () => rG,
        ZodCIDRv6: () => rQ,
        ZodCUID: () => rj,
        ZodCUID2: () => rD,
        ZodCatch: () => sw,
        ZodCodec: () => sS,
        ZodCustom: () => sM,
        ZodCustomStringFormat: () => r8,
        ZodDate: () => oI,
        ZodDefault: () => sf,
        ZodDiscriminatedUnion: () => oq,
        ZodE164: () => r6,
        ZodEmail: () => ry,
        ZodEmoji: () => rT,
        ZodEnum: () => o7,
        ZodExactOptional: () => sa,
        ZodFile: () => st,
        ZodFunction: () => sF,
        ZodGUID: () => rz,
        ZodIPv4: () => rB,
        ZodIPv6: () => rX,
        ZodIntersection: () => oH,
        ZodJWT: () => r3,
        ZodKSUID: () => rL,
        ZodLazy: () => sA,
        ZodLiteral: () => o8,
        ZodMAC: () => rW,
        ZodMap: () => o2,
        ZodNaN: () => sb,
        ZodNanoID: () => rI,
        ZodNever: () => oO,
        ZodNonOptional: () => sg,
        ZodNull: () => ok,
        ZodNullable: () => sc,
        ZodNumber: () => or,
        ZodNumberFormat: () => os,
        ZodObject: () => oM,
        ZodOptional: () => so,
        ZodPipe: () => sZ,
        ZodPrefault: () => sh,
        ZodPromise: () => sP,
        ZodReadonly: () => sN,
        ZodRecord: () => oY,
        ZodSet: () => o9,
        ZodString: () => rg,
        ZodStringFormat: () => r_,
        ZodSuccess: () => s_,
        ZodSymbol: () => oy,
        ZodTemplateLiteral: () => sE,
        ZodTransform: () => si,
        ZodTuple: () => oK,
        ZodType: () => rh,
        ZodULID: () => rC,
        ZodURL: () => rN,
        ZodUUID: () => rk,
        ZodUndefined: () => oz,
        ZodUnion: () => oR,
        ZodUnknown: () => ox,
        ZodVoid: () => oT,
        ZodXID: () => rJ,
        ZodXor: () => oV,
        _ZodString: () => rm,
        _default: () => sp,
        _function: () => sD,
        any: () => oS,
        array: () => oF,
        base64: () => r2,
        base64url: () => r9,
        bigint: () => om,
        boolean: () => op,
        catch: () => sz,
        check: () => sC,
        cidrv4: () => rY,
        cidrv6: () => r0,
        codec: () => sx,
        cuid: () => rF,
        cuid2: () => rM,
        custom: () => sU,
        date: () => oP,
        describe: () => sL,
        discriminatedUnion: () => oW,
        e164: () => r7,
        email: () => rw,
        emoji: () => rA,
        enum: () => o3,
        exactOptional: () => su,
        file: () => sn,
        float32: () => ou,
        float64: () => oc,
        function: () => sD,
        guid: () => rb,
        hash: () => oi,
        hex: () => on,
        hostname: () => ot,
        httpUrl: () => rE,
        instanceof: () => sB,
        int: () => oa,
        int32: () => ol,
        int64: () => ov,
        intersection: () => oX,
        ipv4: () => rq,
        ipv6: () => rK,
        json: () => sW,
        jwt: () => r5,
        keyof: () => oD,
        ksuid: () => rV,
        lazy: () => sI,
        literal: () => se,
        looseObject: () => oJ,
        looseRecord: () => o1,
        mac: () => rH,
        map: () => o4,
        meta: () => sV,
        nan: () => sk,
        nanoid: () => rP,
        nativeEnum: () => o5,
        never: () => oE,
        nonoptional: () => sv,
        null: () => oZ,
        nullable: () => sl,
        nullish: () => sd,
        number: () => oo,
        object: () => oC,
        optional: () => ss,
        partialRecord: () => o0,
        pipe: () => s$,
        prefault: () => sm,
        preprocess: () => sH,
        promise: () => sj,
        readonly: () => sO,
        record: () => oQ,
        refine: () => sJ,
        set: () => o6,
        strictObject: () => oU,
        string: () => rv,
        stringFormat: () => oe,
        stringbool: () => sq,
        success: () => sy,
        superRefine: () => sR,
        symbol: () => ow,
        templateLiteral: () => sT,
        transform: () => sr,
        tuple: () => oG,
        uint32: () => od,
        uint64: () => o_,
        ulid: () => rU,
        undefined: () => ob,
        union: () => oL,
        unknown: () => oN,
        url: () => rO,
        uuid: () => rZ,
        uuidv4: () => r$,
        uuidv6: () => rS,
        uuidv7: () => rx,
        void: () => oA,
        xid: () => rR,
        xor: () => oB,
    }),
    Object.freeze({ status: "aborted" }),
    Symbol("zod_brand");
class p extends Error {
    constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
class h extends Error {
    constructor(e) {
        super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError");
    }
}
let m = {};
function g(e) {
    return e && Object.assign(m, e), m;
}
function v(e) {
    let t = Object.values(e).filter((e) => "number" == typeof e);
    return Object.entries(e)
        .filter(([e, n]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
}
function _(e, t = "|") {
    return e.map((e) => M(e)).join(t);
}
function y(e, t) {
    return "bigint" == typeof t ? t.toString() : t;
}
function w(e) {
    return {
        get value() {
            {
                let t = e();
                return Object.defineProperty(this, "value", { value: t }), t;
            }
        },
    };
}
function z(e) {
    return null == e;
}
function b(e) {
    let t = +!!e.startsWith("^"),
        n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
}
let k = Symbol("evaluating");
function Z(e, t, n) {
    let i;
    Object.defineProperty(e, t, {
        get() {
            if (i !== k) return void 0 === i && ((i = k), (i = n())), i;
        },
        set(n) {
            Object.defineProperty(e, t, { value: n });
        },
        configurable: !0,
    });
}
function $(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function S(...e) {
    let t = {};
    for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
    return Object.defineProperties({}, t);
}
function x(e) {
    return JSON.stringify(e);
}
let N = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function O(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
let E = w(() => {
    if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return Function(""), !0;
    } catch (e) {
        return !1;
    }
});
function T(e) {
    if (!1 === O(e)) return !1;
    let t = e.constructor;
    if (void 0 === t || "function" != typeof t) return !0;
    let n = t.prototype;
    return !1 !== O(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function A(e) {
    return T(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
let I = new Set(["string", "number", "symbol"]),
    P = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function j(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function F(e, t, n) {
    let i = new e._zod.constr(t ?? e._zod.def);
    return (!t || n?.parent) && (i._zod.parent = e), i;
}
function D(e) {
    if (!e) return {};
    if ("string" == typeof e) return { error: () => e };
    if (e?.message !== void 0) {
        if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e;
}
function M(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
let C = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    U = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
    };
function J(e, t = 0) {
    if (!0 === e.aborted) return !0;
    for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
    return !1;
}
function R(e, t) {
    return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
}
function L(e) {
    return "string" == typeof e ? e : e?.message;
}
function V(e, t, n) {
    let i = { ...e, path: e.path ?? [] };
    return (
        e.message ||
            (i.message =
                L(e.inst?._zod.def?.error?.(e)) ??
                L(t?.error?.(e)) ??
                L(n.customError?.(e)) ??
                L(n.localeError?.(e)) ??
                "Invalid input"),
        delete i.inst,
        delete i.continue,
        t?.reportInput || delete i.input,
        i
    );
}
function B(e) {
    return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function q(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function W(...e) {
    let [t, n, i] = e;
    return "string" == typeof t ? { message: t, code: "custom", input: n, inst: i } : { ...t };
}
let H = (e, t) => {
        (e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, y, 2)),
            Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 });
    },
    X = f("$ZodError", H),
    K = f("$ZodError", H, { Parent: Error }),
    G = (e) => (t, n, i, r) => {
        let o = i ? Object.assign(i, { async: !1 }) : { async: !1 },
            s = t._zod.run({ value: n, issues: [] }, o);
        if (s instanceof Promise) throw new p();
        if (s.issues.length) {
            let t = new (r?.Err ?? e)(s.issues.map((e) => V(e, o, g())));
            throw (N(t, r?.callee), t);
        }
        return s.value;
    },
    Y = G(K),
    Q = (e) => async (t, n, i, r) => {
        let o = i ? Object.assign(i, { async: !0 }) : { async: !0 },
            s = t._zod.run({ value: n, issues: [] }, o);
        if ((s instanceof Promise && (s = await s), s.issues.length)) {
            let t = new (r?.Err ?? e)(s.issues.map((e) => V(e, o, g())));
            throw (N(t, r?.callee), t);
        }
        return s.value;
    },
    ee = Q(K),
    et = (e) => (t, n, i) => {
        let r = i ? { ...i, async: !1 } : { async: !1 },
            o = t._zod.run({ value: n, issues: [] }, r);
        if (o instanceof Promise) throw new p();
        return o.issues.length
            ? { success: !1, error: new (e ?? X)(o.issues.map((e) => V(e, r, g()))) }
            : { success: !0, data: o.value };
    },
    en = et(K),
    ei = (e) => async (t, n, i) => {
        let r = i ? Object.assign(i, { async: !0 }) : { async: !0 },
            o = t._zod.run({ value: n, issues: [] }, r);
        return (
            o instanceof Promise && (o = await o),
            o.issues.length
                ? { success: !1, error: new e(o.issues.map((e) => V(e, r, g()))) }
                : { success: !0, data: o.value }
        );
    },
    er = ei(K),
    eo = /^[cC][^\s-]{8,}$/,
    es = /^[0-9a-z]+$/,
    ea = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    eu = /^[0-9a-vA-V]{20}$/,
    ec = /^[A-Za-z0-9]{27}$/,
    el = /^[a-zA-Z0-9_-]{21}$/,
    ed = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    ef =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    ep = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    eh = (e) =>
        e
            ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    em = eh(4),
    eg = eh(6),
    ev = eh(7),
    e_ = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    ey =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ew =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ez = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
    eb = ez,
    ek =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function eZ() {
    return RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
let e$ =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    eS =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    ex = (e) => {
        let t = j(e ?? ":");
        return RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
    },
    eN =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    eO =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    eE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    eT = /^[A-Za-z0-9_-]*$/,
    eA =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    eI = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    eP = /^\+[1-9]\d{6,14}$/,
    ej =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    eF = RegExp(`^${ej}$`);
function eD(e) {
    let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e.precision
        ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function eM(e) {
    return RegExp(`^${eD(e)}$`);
}
function eC(e) {
    let t = eD({ precision: e.precision }),
        n = ["Z"];
    e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    let i = `${t}(?:${n.join("|")})`;
    return RegExp(`^${ej}T(?:${i})$`);
}
let eU = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
        return RegExp(`^${t}$`);
    },
    eJ = /^-?\d+n?$/,
    eR = /^-?\d+$/,
    eL = /^-?\d+(?:\.\d+)?$/,
    eV = /^(?:true|false)$/i,
    eB = /^null$/i,
    eq = /^undefined$/i,
    eW = /^[^A-Z]*$/,
    eH = /^[^a-z]*$/,
    eX = /^[0-9a-fA-F]*$/;
function eK(e, t) {
    return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function eG(e) {
    return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
let eY = /^[0-9a-fA-F]{32}$/,
    eQ = eK(22, "=="),
    e0 = eG(22),
    e1 = /^[0-9a-fA-F]{40}$/,
    e2 = eK(27, "="),
    e4 = eG(27),
    e9 = /^[0-9a-fA-F]{64}$/,
    e6 = eK(43, "="),
    e7 = eG(43),
    e3 = /^[0-9a-fA-F]{96}$/,
    e5 = eK(64, ""),
    e8 = eG(64),
    te = /^[0-9a-fA-F]{128}$/,
    tt = eK(86, "=="),
    tn = eG(86),
    ti = f("$ZodCheck", (e, t) => {
        var n;
        e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []);
    }),
    tr = { number: "number", bigint: "bigint", object: "date" },
    to = f("$ZodCheckLessThan", (e, t) => {
        ti.init(e, t);
        let n = tr[typeof t.value];
        e._zod.onattach.push((e) => {
            let n = e._zod.bag,
                i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
            t.value < i && (t.inclusive ? (n.maximum = t.value) : (n.exclusiveMaximum = t.value));
        }),
            (e._zod.check = (i) => {
                (t.inclusive ? i.value <= t.value : i.value < t.value) ||
                    i.issues.push({
                        origin: n,
                        code: "too_big",
                        maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
                        input: i.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    ts = f("$ZodCheckGreaterThan", (e, t) => {
        ti.init(e, t);
        let n = tr[typeof t.value];
        e._zod.onattach.push((e) => {
            let n = e._zod.bag,
                i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
            t.value > i && (t.inclusive ? (n.minimum = t.value) : (n.exclusiveMinimum = t.value));
        }),
            (e._zod.check = (i) => {
                (t.inclusive ? i.value >= t.value : i.value > t.value) ||
                    i.issues.push({
                        origin: n,
                        code: "too_small",
                        minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
                        input: i.value,
                        inclusive: t.inclusive,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    ta = f("$ZodCheckMultipleOf", (e, t) => {
        ti.init(e, t),
            e._zod.onattach.push((e) => {
                var n;
                (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
            }),
            (e._zod.check = (n) => {
                if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
                ("bigint" == typeof n.value
                    ? n.value % t.value === BigInt(0)
                    : 0 ===
                      (function (e, t) {
                          let n = (e.toString().split(".")[1] || "").length,
                              i = t.toString(),
                              r = (i.split(".")[1] || "").length;
                          if (0 === r && /\d?e-\d?/.test(i)) {
                              let e = i.match(/\d?e-(\d?)/);
                              e?.[1] && (r = Number.parseInt(e[1]));
                          }
                          let o = n > r ? n : r;
                          return (
                              (Number.parseInt(e.toFixed(o).replace(".", "")) %
                                  Number.parseInt(t.toFixed(o).replace(".", ""))) /
                              10 ** o
                          );
                      })(n.value, t.value)) ||
                    n.issues.push({
                        origin: typeof n.value,
                        code: "not_multiple_of",
                        divisor: t.value,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    tu = f("$ZodCheckNumberFormat", (e, t) => {
        ti.init(e, t), (t.format = t.format || "float64");
        let n = t.format?.includes("int"),
            i = n ? "int" : "number",
            [r, o] = C[t.format];
        e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.format = t.format), (i.minimum = r), (i.maximum = o), n && (i.pattern = eR);
        }),
            (e._zod.check = (s) => {
                let a = s.value;
                if (n) {
                    if (!Number.isInteger(a))
                        return void s.issues.push({
                            expected: i,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: a,
                            inst: e,
                        });
                    if (!Number.isSafeInteger(a))
                        return void (a > 0
                            ? s.issues.push({
                                  input: a,
                                  code: "too_big",
                                  maximum: Number.MAX_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: i,
                                  inclusive: !0,
                                  continue: !t.abort,
                              })
                            : s.issues.push({
                                  input: a,
                                  code: "too_small",
                                  minimum: Number.MIN_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: i,
                                  inclusive: !0,
                                  continue: !t.abort,
                              }));
                }
                a < r &&
                    s.issues.push({
                        origin: "number",
                        input: a,
                        code: "too_small",
                        minimum: r,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    a > o &&
                        s.issues.push({
                            origin: "number",
                            input: a,
                            code: "too_big",
                            maximum: o,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        });
            });
    }),
    tc = f("$ZodCheckBigIntFormat", (e, t) => {
        ti.init(e, t);
        let [n, i] = U[t.format];
        e._zod.onattach.push((e) => {
            let r = e._zod.bag;
            (r.format = t.format), (r.minimum = n), (r.maximum = i);
        }),
            (e._zod.check = (r) => {
                let o = r.value;
                o < n &&
                    r.issues.push({
                        origin: "bigint",
                        input: o,
                        code: "too_small",
                        minimum: n,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    o > i &&
                        r.issues.push({
                            origin: "bigint",
                            input: o,
                            code: "too_big",
                            maximum: i,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        });
            });
    }),
    tl = f("$ZodCheckMaxSize", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !z(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.maximum ?? 1 / 0;
                t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                i.size <= t.maximum ||
                    n.issues.push({
                        origin: B(i),
                        code: "too_big",
                        maximum: t.maximum,
                        inclusive: !0,
                        input: i,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    td = f("$ZodCheckMinSize", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !z(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.minimum ?? -1 / 0;
                t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                i.size >= t.minimum ||
                    n.issues.push({
                        origin: B(i),
                        code: "too_small",
                        minimum: t.minimum,
                        inclusive: !0,
                        input: i,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    tf = f("$ZodCheckSizeEquals", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !z(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.minimum = t.size), (n.maximum = t.size), (n.size = t.size);
            }),
            (e._zod.check = (n) => {
                let i = n.value,
                    r = i.size;
                if (r === t.size) return;
                let o = r > t.size;
                n.issues.push({
                    origin: B(i),
                    ...(o ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            });
    }),
    tp = f("$ZodCheckMaxLength", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !z(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.maximum ?? 1 / 0;
                t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                if (i.length <= t.maximum) return;
                let r = q(i);
                n.issues.push({
                    origin: r,
                    code: "too_big",
                    maximum: t.maximum,
                    inclusive: !0,
                    input: i,
                    inst: e,
                    continue: !t.abort,
                });
            });
    }),
    th = f("$ZodCheckMinLength", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !z(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.minimum ?? -1 / 0;
                t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                if (i.length >= t.minimum) return;
                let r = q(i);
                n.issues.push({
                    origin: r,
                    code: "too_small",
                    minimum: t.minimum,
                    inclusive: !0,
                    input: i,
                    inst: e,
                    continue: !t.abort,
                });
            });
    }),
    tm = f("$ZodCheckLengthEquals", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !z(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.minimum = t.length), (n.maximum = t.length), (n.length = t.length);
            }),
            (e._zod.check = (n) => {
                let i = n.value,
                    r = i.length;
                if (r === t.length) return;
                let o = q(i),
                    s = r > t.length;
                n.issues.push({
                    origin: o,
                    ...(s ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            });
    }),
    tg = f("$ZodCheckStringFormat", (e, t) => {
        var n, i;
        ti.init(e, t),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.format = t.format), t.pattern && (n.patterns ?? (n.patterns = new Set()), n.patterns.add(t.pattern));
            }),
            t.pattern
                ? ((n = e._zod).check ??
                  (n.check = (n) => {
                      (t.pattern.lastIndex = 0),
                          t.pattern.test(n.value) ||
                              n.issues.push({
                                  origin: "string",
                                  code: "invalid_format",
                                  format: t.format,
                                  input: n.value,
                                  ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                                  inst: e,
                                  continue: !t.abort,
                              });
                  }))
                : ((i = e._zod).check ?? (i.check = () => {}));
    }),
    tv = f("$ZodCheckRegex", (e, t) => {
        tg.init(e, t),
            (e._zod.check = (n) => {
                (t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                        n.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: "regex",
                            input: n.value,
                            pattern: t.pattern.toString(),
                            inst: e,
                            continue: !t.abort,
                        });
            });
    }),
    t_ = f("$ZodCheckLowerCase", (e, t) => {
        t.pattern ?? (t.pattern = eW), tg.init(e, t);
    }),
    ty = f("$ZodCheckUpperCase", (e, t) => {
        t.pattern ?? (t.pattern = eH), tg.init(e, t);
    }),
    tw = f("$ZodCheckIncludes", (e, t) => {
        ti.init(e, t);
        let n = j(t.includes),
            i = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
        (t.pattern = i),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                t.patterns ?? (t.patterns = new Set()), t.patterns.add(i);
            }),
            (e._zod.check = (n) => {
                n.value.includes(t.includes, t.position) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: t.includes,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    tz = f("$ZodCheckStartsWith", (e, t) => {
        ti.init(e, t);
        let n = RegExp(`^${j(t.prefix)}.*`);
        t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
            (e._zod.check = (n) => {
                n.value.startsWith(t.prefix) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: t.prefix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    tb = f("$ZodCheckEndsWith", (e, t) => {
        ti.init(e, t);
        let n = RegExp(`.*${j(t.suffix)}$`);
        t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
            (e._zod.check = (n) => {
                n.value.endsWith(t.suffix) ||
                    n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: t.suffix,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    });
function tk(e, t, n) {
    e.issues.length && t.issues.push(...R(n, e.issues));
}
let tZ = f("$ZodCheckProperty", (e, t) => {
        ti.init(e, t),
            (e._zod.check = (e) => {
                let n = t.schema._zod.run({ value: e.value[t.property], issues: [] }, {});
                if (n instanceof Promise) return n.then((n) => tk(n, e, t.property));
                tk(n, e, t.property);
            });
    }),
    t$ = f("$ZodCheckMimeType", (e, t) => {
        ti.init(e, t);
        let n = new Set(t.mime);
        e._zod.onattach.push((e) => {
            e._zod.bag.mime = t.mime;
        }),
            (e._zod.check = (i) => {
                n.has(i.value.type) ||
                    i.issues.push({
                        code: "invalid_value",
                        values: t.mime,
                        input: i.value.type,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    tS = f("$ZodCheckOverwrite", (e, t) => {
        ti.init(e, t),
            (e._zod.check = (e) => {
                e.value = t.tx(e.value);
            });
    });
class tx {
    constructor(e = []) {
        (this.content = []), (this.indent = 0), this && (this.args = e);
    }
    indented(e) {
        (this.indent += 1), e(this), (this.indent -= 1);
    }
    write(e) {
        if ("function" == typeof e) {
            e(this, { execution: "sync" }), e(this, { execution: "async" });
            return;
        }
        let t = e.split("\n").filter((e) => e),
            n = Math.min(...t.map((e) => e.length - e.trimStart().length));
        for (let e of t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e);
    }
    compile() {
        return Function(...this?.args, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"));
    }
}
let tN = { major: 4, minor: 3, patch: 6 },
    tO = f("$ZodType", (e, t) => {
        var n;
        e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = tN);
        let i = [...(e._zod.def.checks ?? [])];
        for (let t of (e._zod.traits.has("$ZodCheck") && i.unshift(e), i)) for (let n of t._zod.onattach) n(e);
        if (0 === i.length)
            (n = e._zod).deferred ?? (n.deferred = []),
                e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse;
                });
        else {
            let t = (e, t, n) => {
                    let i,
                        r = J(e);
                    for (let o of t) {
                        if (o._zod.def.when) {
                            if (!o._zod.def.when(e)) continue;
                        } else if (r) continue;
                        let t = e.issues.length,
                            s = o._zod.check(e);
                        if (s instanceof Promise && n?.async === !1) throw new p();
                        if (i || s instanceof Promise)
                            i = (i ?? Promise.resolve()).then(async () => {
                                await s, e.issues.length !== t && (r || (r = J(e, t)));
                            });
                        else {
                            if (e.issues.length === t) continue;
                            r || (r = J(e, t));
                        }
                    }
                    return i ? i.then(() => e) : e;
                },
                n = (n, r, o) => {
                    if (J(n)) return (n.aborted = !0), n;
                    let s = t(r, i, o);
                    if (s instanceof Promise) {
                        if (!1 === o.async) throw new p();
                        return s.then((t) => e._zod.parse(t, o));
                    }
                    return e._zod.parse(s, o);
                };
            e._zod.run = (r, o) => {
                if (o.skipChecks) return e._zod.parse(r, o);
                if ("backward" === o.direction) {
                    let t = e._zod.parse({ value: r.value, issues: [] }, { ...o, skipChecks: !0 });
                    return t instanceof Promise ? t.then((e) => n(e, r, o)) : n(t, r, o);
                }
                let s = e._zod.parse(r, o);
                if (s instanceof Promise) {
                    if (!1 === o.async) throw new p();
                    return s.then((e) => t(e, i, o));
                }
                return t(s, i, o);
            };
        }
        Z(e, "~standard", () => ({
            validate: (t) => {
                try {
                    let n = en(e, t);
                    return n.success ? { value: n.data } : { issues: n.error?.issues };
                } catch (n) {
                    return er(e, t).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }));
                }
            },
            vendor: "zod",
            version: 1,
        }));
    }),
    tE = f("$ZodString", (e, t) => {
        tO.init(e, t),
            (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? eU(e._zod.bag)),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = String(n.value);
                    } catch (e) {}
                return (
                    "string" == typeof n.value ||
                        n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }),
                    n
                );
            });
    }),
    tT = f("$ZodStringFormat", (e, t) => {
        tg.init(e, t), tE.init(e, t);
    }),
    tA = f("$ZodGUID", (e, t) => {
        t.pattern ?? (t.pattern = ep), tT.init(e, t);
    }),
    tI = f("$ZodUUID", (e, t) => {
        if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
            if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = eh(e));
        } else t.pattern ?? (t.pattern = eh());
        tT.init(e, t);
    }),
    tP = f("$ZodEmail", (e, t) => {
        t.pattern ?? (t.pattern = e_), tT.init(e, t);
    }),
    tj = f("$ZodURL", (e, t) => {
        tT.init(e, t),
            (e._zod.check = (n) => {
                try {
                    let i = n.value.trim(),
                        r = new URL(i);
                    t.hostname &&
                        ((t.hostname.lastIndex = 0),
                        t.hostname.test(r.hostname) ||
                            n.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid hostname",
                                pattern: t.hostname.source,
                                input: n.value,
                                inst: e,
                                continue: !t.abort,
                            })),
                        t.protocol &&
                            ((t.protocol.lastIndex = 0),
                            t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) ||
                                n.issues.push({
                                    code: "invalid_format",
                                    format: "url",
                                    note: "Invalid protocol",
                                    pattern: t.protocol.source,
                                    input: n.value,
                                    inst: e,
                                    continue: !t.abort,
                                })),
                        t.normalize ? (n.value = r.href) : (n.value = i);
                    return;
                } catch (i) {
                    n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            });
    }),
    tF = f("$ZodEmoji", (e, t) => {
        t.pattern ?? (t.pattern = eZ()), tT.init(e, t);
    }),
    tD = f("$ZodNanoID", (e, t) => {
        t.pattern ?? (t.pattern = el), tT.init(e, t);
    }),
    tM = f("$ZodCUID", (e, t) => {
        t.pattern ?? (t.pattern = eo), tT.init(e, t);
    }),
    tC = f("$ZodCUID2", (e, t) => {
        t.pattern ?? (t.pattern = es), tT.init(e, t);
    }),
    tU = f("$ZodULID", (e, t) => {
        t.pattern ?? (t.pattern = ea), tT.init(e, t);
    }),
    tJ = f("$ZodXID", (e, t) => {
        t.pattern ?? (t.pattern = eu), tT.init(e, t);
    }),
    tR = f("$ZodKSUID", (e, t) => {
        t.pattern ?? (t.pattern = ec), tT.init(e, t);
    }),
    tL = f("$ZodISODateTime", (e, t) => {
        t.pattern ?? (t.pattern = eC(t)), tT.init(e, t);
    }),
    tV = f("$ZodISODate", (e, t) => {
        t.pattern ?? (t.pattern = eF), tT.init(e, t);
    }),
    tB = f("$ZodISOTime", (e, t) => {
        t.pattern ?? (t.pattern = eM(t)), tT.init(e, t);
    }),
    tq = f("$ZodISODuration", (e, t) => {
        t.pattern ?? (t.pattern = ed), tT.init(e, t);
    }),
    tW = f("$ZodIPv4", (e, t) => {
        t.pattern ?? (t.pattern = e$), tT.init(e, t), (e._zod.bag.format = "ipv4");
    }),
    tH = f("$ZodIPv6", (e, t) => {
        t.pattern ?? (t.pattern = eS),
            tT.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (n) => {
                try {
                    new URL(`http://[${n.value}]`);
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            });
    }),
    tX = f("$ZodMAC", (e, t) => {
        t.pattern ?? (t.pattern = ex(t.delimiter)), tT.init(e, t), (e._zod.bag.format = "mac");
    }),
    tK = f("$ZodCIDRv4", (e, t) => {
        t.pattern ?? (t.pattern = eN), tT.init(e, t);
    }),
    tG = f("$ZodCIDRv6", (e, t) => {
        t.pattern ?? (t.pattern = eO),
            tT.init(e, t),
            (e._zod.check = (n) => {
                let i = n.value.split("/");
                try {
                    if (2 !== i.length) throw Error();
                    let [e, t] = i;
                    if (!t) throw Error();
                    let n = Number(t);
                    if (`${n}` !== t || n < 0 || n > 128) throw Error();
                    new URL(`http://[${e}]`);
                } catch {
                    n.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
                }
            });
    });
function tY(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return atob(e), !0;
    } catch {
        return !1;
    }
}
let tQ = f("$ZodBase64", (e, t) => {
        t.pattern ?? (t.pattern = eE),
            tT.init(e, t),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (n) => {
                tY(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    t0 = f("$ZodBase64URL", (e, t) => {
        t.pattern ?? (t.pattern = eT),
            tT.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
                !(function (e) {
                    if (!eT.test(e)) return !1;
                    let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                    return tY(t.padEnd(4 * Math.ceil(t.length / 4), "="));
                })(n.value) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    t1 = f("$ZodE164", (e, t) => {
        t.pattern ?? (t.pattern = eP), tT.init(e, t);
    }),
    t2 = f("$ZodJWT", (e, t) => {
        tT.init(e, t),
            (e._zod.check = (n) => {
                !(function (e, t = null) {
                    try {
                        let n = e.split(".");
                        if (3 !== n.length) return !1;
                        let [i] = n;
                        if (!i) return !1;
                        let r = JSON.parse(atob(i));
                        if (("typ" in r && r?.typ !== "JWT") || !r.alg || (t && (!("alg" in r) || r.alg !== t)))
                            return !1;
                        return !0;
                    } catch {
                        return !1;
                    }
                })(n.value, t.alg) &&
                    n.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    t4 = f("$ZodCustomStringFormat", (e, t) => {
        tT.init(e, t),
            (e._zod.check = (n) => {
                t.fn(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: t.format,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    t9 = f("$ZodNumber", (e, t) => {
        tO.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? eL),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = Number(n.value);
                    } catch (e) {}
                let r = n.value;
                if ("number" == typeof r && !Number.isNaN(r) && Number.isFinite(r)) return n;
                let o =
                    "number" == typeof r
                        ? Number.isNaN(r)
                            ? "NaN"
                            : Number.isFinite(r)
                              ? void 0
                              : "Infinity"
                        : void 0;
                return (
                    n.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: r,
                        inst: e,
                        ...(o ? { received: o } : {}),
                    }),
                    n
                );
            });
    }),
    t6 = f("$ZodNumberFormat", (e, t) => {
        tu.init(e, t), t9.init(e, t);
    }),
    t7 = f("$ZodBoolean", (e, t) => {
        tO.init(e, t),
            (e._zod.pattern = eV),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = !!n.value;
                    } catch (e) {}
                let r = n.value;
                return (
                    "boolean" == typeof r ||
                        n.issues.push({ expected: "boolean", code: "invalid_type", input: r, inst: e }),
                    n
                );
            });
    }),
    t3 = f("$ZodBigInt", (e, t) => {
        tO.init(e, t),
            (e._zod.pattern = eJ),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = BigInt(n.value);
                    } catch (e) {}
                return (
                    "bigint" == typeof n.value ||
                        n.issues.push({ expected: "bigint", code: "invalid_type", input: n.value, inst: e }),
                    n
                );
            });
    }),
    t5 = f("$ZodBigIntFormat", (e, t) => {
        tc.init(e, t), t3.init(e, t);
    }),
    t8 = f("$ZodSymbol", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return (
                    "symbol" == typeof i ||
                        t.issues.push({ expected: "symbol", code: "invalid_type", input: i, inst: e }),
                    t
                );
            });
    }),
    ne = f("$ZodUndefined", (e, t) => {
        tO.init(e, t),
            (e._zod.pattern = eq),
            (e._zod.values = new Set([void 0])),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return (
                    void 0 === i || t.issues.push({ expected: "undefined", code: "invalid_type", input: i, inst: e }), t
                );
            });
    }),
    nt = f("$ZodNull", (e, t) => {
        tO.init(e, t),
            (e._zod.pattern = eB),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return null === i || t.issues.push({ expected: "null", code: "invalid_type", input: i, inst: e }), t;
            });
    }),
    nn = f("$ZodAny", (e, t) => {
        tO.init(e, t), (e._zod.parse = (e) => e);
    }),
    ni = f("$ZodUnknown", (e, t) => {
        tO.init(e, t), (e._zod.parse = (e) => e);
    }),
    nr = f("$ZodNever", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (t, n) => (
                t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }), t
            ));
    }),
    no = f("$ZodVoid", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return void 0 === i || t.issues.push({ expected: "void", code: "invalid_type", input: i, inst: e }), t;
            });
    }),
    ns = f("$ZodDate", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = new Date(n.value);
                    } catch (e) {}
                let r = n.value,
                    o = r instanceof Date;
                return (
                    (o && !Number.isNaN(r.getTime())) ||
                        n.issues.push({
                            expected: "date",
                            code: "invalid_type",
                            input: r,
                            ...(o ? { received: "Invalid Date" } : {}),
                            inst: e,
                        }),
                    n
                );
            });
    });
function na(e, t, n) {
    e.issues.length && t.issues.push(...R(n, e.issues)), (t.value[n] = e.value);
}
let nu = f("$ZodArray", (e, t) => {
    tO.init(e, t),
        (e._zod.parse = (n, i) => {
            let r = n.value;
            if (!Array.isArray(r))
                return n.issues.push({ expected: "array", code: "invalid_type", input: r, inst: e }), n;
            n.value = Array(r.length);
            let o = [];
            for (let e = 0; e < r.length; e++) {
                let s = r[e],
                    a = t.element._zod.run({ value: s, issues: [] }, i);
                a instanceof Promise ? o.push(a.then((t) => na(t, n, e))) : na(a, n, e);
            }
            return o.length ? Promise.all(o).then(() => n) : n;
        });
});
function nc(e, t, n, i, r) {
    if (e.issues.length) {
        if (r && !(n in i)) return;
        t.issues.push(...R(n, e.issues));
    }
    void 0 === e.value ? n in i && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function nl(e) {
    var t;
    let n = Object.keys(e.shape);
    for (let t of n)
        if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${t}": expected a Zod schema`);
    let i = Object.keys((t = e.shape)).filter((e) => "optional" === t[e]._zod.optin && "optional" === t[e]._zod.optout);
    return { ...e, keys: n, keySet: new Set(n), numKeys: n.length, optionalKeys: new Set(i) };
}
function nd(e, t, n, i, r, o) {
    let s = [],
        a = r.keySet,
        u = r.catchall._zod,
        c = u.def.type,
        l = "optional" === u.optout;
    for (let r in t) {
        if (a.has(r)) continue;
        if ("never" === c) {
            s.push(r);
            continue;
        }
        let o = u.run({ value: t[r], issues: [] }, i);
        o instanceof Promise ? e.push(o.then((e) => nc(e, n, r, t, l))) : nc(o, n, r, t, l);
    }
    return (s.length && n.issues.push({ code: "unrecognized_keys", keys: s, input: t, inst: o }), e.length)
        ? Promise.all(e).then(() => n)
        : n;
}
let nf = f("$ZodObject", (e, t) => {
        let n;
        tO.init(e, t);
        let i = Object.getOwnPropertyDescriptor(t, "shape");
        if (!i?.get) {
            let e = t.shape;
            Object.defineProperty(t, "shape", {
                get: () => {
                    let n = { ...e };
                    return Object.defineProperty(t, "shape", { value: n }), n;
                },
            });
        }
        let r = w(() => nl(t));
        Z(e._zod, "propValues", () => {
            let e = t.shape,
                n = {};
            for (let t in e) {
                let i = e[t]._zod;
                if (i.values) for (let e of (n[t] ?? (n[t] = new Set()), i.values)) n[t].add(e);
            }
            return n;
        });
        let o = t.catchall;
        e._zod.parse = (t, i) => {
            n ?? (n = r.value);
            let s = t.value;
            if (!O(s)) return t.issues.push({ expected: "object", code: "invalid_type", input: s, inst: e }), t;
            t.value = {};
            let a = [],
                u = n.shape;
            for (let e of n.keys) {
                let n = u[e],
                    r = "optional" === n._zod.optout,
                    o = n._zod.run({ value: s[e], issues: [] }, i);
                o instanceof Promise ? a.push(o.then((n) => nc(n, t, e, s, r))) : nc(o, t, e, s, r);
            }
            return o ? nd(a, s, t, i, r.value, e) : a.length ? Promise.all(a).then(() => t) : t;
        };
    }),
    np = f("$ZodObjectJIT", (e, t) => {
        let n, i;
        nf.init(e, t);
        let r = e._zod.parse,
            o = w(() => nl(t)),
            s = !m.jitless,
            a = s && E.value,
            u = t.catchall;
        e._zod.parse = (c, l) => {
            i ?? (i = o.value);
            let d = c.value;
            return O(d)
                ? s && a && l?.async === !1 && !0 !== l.jitless
                    ? (n ||
                          (n = ((e) => {
                              let t = new tx(["shape", "payload", "ctx"]),
                                  n = o.value,
                                  i = (e) => {
                                      let t = x(e);
                                      return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                                  };
                              t.write("const input = payload.value;");
                              let r = Object.create(null),
                                  s = 0;
                              for (let e of n.keys) r[e] = `key_${s++}`;
                              for (let o of (t.write("const newResult = {};"), n.keys)) {
                                  let n = r[o],
                                      s = x(o),
                                      a = e[o],
                                      u = a?._zod?.optout === "optional";
                                  t.write(`const ${n} = ${i(o)};`),
                                      u
                                          ? t.write(`
        if (${n}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${n}.value;
        }
        
      `)
                                          : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${n}.value;
        }
        
      `);
                              }
                              t.write("payload.value = newResult;"), t.write("return payload;");
                              let a = t.compile();
                              return (t, n) => a(e, t, n);
                          })(t.shape)),
                      (c = n(c, l)),
                      u)
                        ? nd([], d, c, l, i, e)
                        : c
                    : r(c, l)
                : (c.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), c);
        };
    });
function nh(e, t, n, i) {
    for (let n of e) if (0 === n.issues.length) return (t.value = n.value), t;
    let r = e.filter((e) => !J(e));
    return 1 === r.length
        ? ((t.value = r[0].value), r[0])
        : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => V(e, i, g()))),
          }),
          t);
}
let nm = f("$ZodUnion", (e, t) => {
    tO.init(e, t),
        Z(e._zod, "optin", () => (t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0)),
        Z(e._zod, "optout", () => (t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
        Z(e._zod, "values", () => {
            if (t.options.every((e) => e._zod.values))
                return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
        }),
        Z(e._zod, "pattern", () => {
            if (t.options.every((e) => e._zod.pattern)) {
                let e = t.options.map((e) => e._zod.pattern);
                return RegExp(`^(${e.map((e) => b(e.source)).join("|")})$`);
            }
        });
    let n = 1 === t.options.length,
        i = t.options[0]._zod.run;
    e._zod.parse = (r, o) => {
        if (n) return i(r, o);
        let s = !1,
            a = [];
        for (let e of t.options) {
            let t = e._zod.run({ value: r.value, issues: [] }, o);
            if (t instanceof Promise) a.push(t), (s = !0);
            else {
                if (0 === t.issues.length) return t;
                a.push(t);
            }
        }
        return s ? Promise.all(a).then((t) => nh(t, r, e, o)) : nh(a, r, e, o);
    };
});
function ng(e, t, n, i) {
    let r = e.filter((e) => 0 === e.issues.length);
    return (
        1 === r.length
            ? (t.value = r[0].value)
            : 0 === r.length
              ? t.issues.push({
                    code: "invalid_union",
                    input: t.value,
                    inst: n,
                    errors: e.map((e) => e.issues.map((e) => V(e, i, g()))),
                })
              : t.issues.push({ code: "invalid_union", input: t.value, inst: n, errors: [], inclusive: !1 }),
        t
    );
}
let nv = f("$ZodXor", (e, t) => {
        nm.init(e, t), (t.inclusive = !1);
        let n = 1 === t.options.length,
            i = t.options[0]._zod.run;
        e._zod.parse = (r, o) => {
            if (n) return i(r, o);
            let s = !1,
                a = [];
            for (let e of t.options) {
                let t = e._zod.run({ value: r.value, issues: [] }, o);
                t instanceof Promise ? (a.push(t), (s = !0)) : a.push(t);
            }
            return s ? Promise.all(a).then((t) => ng(t, r, e, o)) : ng(a, r, e, o);
        };
    }),
    n_ = f("$ZodDiscriminatedUnion", (e, t) => {
        (t.inclusive = !1), nm.init(e, t);
        let n = e._zod.parse;
        Z(e._zod, "propValues", () => {
            let e = {};
            for (let n of t.options) {
                let i = n._zod.propValues;
                if (!i || 0 === Object.keys(i).length)
                    throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
                for (let [t, n] of Object.entries(i)) for (let i of (e[t] || (e[t] = new Set()), n)) e[t].add(i);
            }
            return e;
        });
        let i = w(() => {
            let e = t.options,
                n = new Map();
            for (let i of e) {
                let e = i._zod.propValues?.[t.discriminator];
                if (!e || 0 === e.size)
                    throw Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
                for (let t of e) {
                    if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
                    n.set(t, i);
                }
            }
            return n;
        });
        e._zod.parse = (r, o) => {
            let s = r.value;
            if (!O(s)) return r.issues.push({ code: "invalid_type", expected: "object", input: s, inst: e }), r;
            let a = i.value.get(s?.[t.discriminator]);
            return a
                ? a._zod.run(r, o)
                : t.unionFallback
                  ? n(r, o)
                  : (r.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: t.discriminator,
                        input: s,
                        path: [t.discriminator],
                        inst: e,
                    }),
                    r);
        };
    }),
    ny = f("$ZodIntersection", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (e, n) => {
                let i = e.value,
                    r = t.left._zod.run({ value: i, issues: [] }, n),
                    o = t.right._zod.run({ value: i, issues: [] }, n);
                return r instanceof Promise || o instanceof Promise
                    ? Promise.all([r, o]).then(([t, n]) => nw(e, t, n))
                    : nw(e, r, o);
            });
    });
function nw(e, t, n) {
    let i,
        r = new Map();
    for (let n of t.issues)
        if ("unrecognized_keys" === n.code)
            for (let e of (i ?? (i = n), n.keys)) r.has(e) || r.set(e, {}), (r.get(e).l = !0);
        else e.issues.push(n);
    for (let t of n.issues)
        if ("unrecognized_keys" === t.code) for (let e of t.keys) r.has(e) || r.set(e, {}), (r.get(e).r = !0);
        else e.issues.push(t);
    let o = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
    if ((o.length && i && e.issues.push({ ...i, keys: o }), J(e))) return e;
    let s = (function e(t, n) {
        if (t === n || (t instanceof Date && n instanceof Date && +t == +n)) return { valid: !0, data: t };
        if (T(t) && T(n)) {
            let i = Object.keys(n),
                r = Object.keys(t).filter((e) => -1 !== i.indexOf(e)),
                o = { ...t, ...n };
            for (let i of r) {
                let r = e(t[i], n[i]);
                if (!r.valid) return { valid: !1, mergeErrorPath: [i, ...r.mergeErrorPath] };
                o[i] = r.data;
            }
            return { valid: !0, data: o };
        }
        if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
            let i = [];
            for (let r = 0; r < t.length; r++) {
                let o = e(t[r], n[r]);
                if (!o.valid) return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
                i.push(o.data);
            }
            return { valid: !0, data: i };
        }
        return { valid: !1, mergeErrorPath: [] };
    })(t.value, n.value);
    if (!s.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
    return (e.value = s.data), e;
}
let nz = f("$ZodTuple", (e, t) => {
    tO.init(e, t);
    let n = t.items;
    e._zod.parse = (i, r) => {
        let o = i.value;
        if (!Array.isArray(o)) return i.issues.push({ input: o, inst: e, expected: "tuple", code: "invalid_type" }), i;
        i.value = [];
        let s = [],
            a = [...n].reverse().findIndex((e) => "optional" !== e._zod.optin),
            u = -1 === a ? 0 : n.length - a;
        if (!t.rest) {
            let t = o.length > n.length,
                r = o.length < u - 1;
            if (t || r)
                return (
                    i.issues.push({
                        ...(t
                            ? { code: "too_big", maximum: n.length, inclusive: !0 }
                            : { code: "too_small", minimum: n.length }),
                        input: o,
                        inst: e,
                        origin: "array",
                    }),
                    i
                );
        }
        let c = -1;
        for (let e of n) {
            if (++c >= o.length && c >= u) continue;
            let t = e._zod.run({ value: o[c], issues: [] }, r);
            t instanceof Promise ? s.push(t.then((e) => nb(e, i, c))) : nb(t, i, c);
        }
        if (t.rest)
            for (let e of o.slice(n.length)) {
                c++;
                let n = t.rest._zod.run({ value: e, issues: [] }, r);
                n instanceof Promise ? s.push(n.then((e) => nb(e, i, c))) : nb(n, i, c);
            }
        return s.length ? Promise.all(s).then(() => i) : i;
    };
});
function nb(e, t, n) {
    e.issues.length && t.issues.push(...R(n, e.issues)), (t.value[n] = e.value);
}
let nk = f("$ZodRecord", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (n, i) => {
                let r = n.value;
                if (!T(r)) return n.issues.push({ expected: "record", code: "invalid_type", input: r, inst: e }), n;
                let o = [],
                    s = t.keyType._zod.values;
                if (s) {
                    let a;
                    n.value = {};
                    let u = new Set();
                    for (let e of s)
                        if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                            u.add("number" == typeof e ? e.toString() : e);
                            let s = t.valueType._zod.run({ value: r[e], issues: [] }, i);
                            s instanceof Promise
                                ? o.push(
                                      s.then((t) => {
                                          t.issues.length && n.issues.push(...R(e, t.issues)), (n.value[e] = t.value);
                                      }),
                                  )
                                : (s.issues.length && n.issues.push(...R(e, s.issues)), (n.value[e] = s.value));
                        }
                    for (let e in r) u.has(e) || (a = a ?? []).push(e);
                    a && a.length > 0 && n.issues.push({ code: "unrecognized_keys", input: r, inst: e, keys: a });
                } else
                    for (let s of ((n.value = {}), Reflect.ownKeys(r))) {
                        if ("__proto__" === s) continue;
                        let a = t.keyType._zod.run({ value: s, issues: [] }, i);
                        if (a instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                        if ("string" == typeof s && eL.test(s) && a.issues.length) {
                            let e = t.keyType._zod.run({ value: Number(s), issues: [] }, i);
                            if (e instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            0 === e.issues.length && (a = e);
                        }
                        if (a.issues.length) {
                            "loose" === t.mode
                                ? (n.value[s] = r[s])
                                : n.issues.push({
                                      code: "invalid_key",
                                      origin: "record",
                                      issues: a.issues.map((e) => V(e, i, g())),
                                      input: s,
                                      path: [s],
                                      inst: e,
                                  });
                            continue;
                        }
                        let u = t.valueType._zod.run({ value: r[s], issues: [] }, i);
                        u instanceof Promise
                            ? o.push(
                                  u.then((e) => {
                                      e.issues.length && n.issues.push(...R(s, e.issues)), (n.value[a.value] = e.value);
                                  }),
                              )
                            : (u.issues.length && n.issues.push(...R(s, u.issues)), (n.value[a.value] = u.value));
                    }
                return o.length ? Promise.all(o).then(() => n) : n;
            });
    }),
    nZ = f("$ZodMap", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (n, i) => {
                let r = n.value;
                if (!(r instanceof Map))
                    return n.issues.push({ expected: "map", code: "invalid_type", input: r, inst: e }), n;
                let o = [];
                for (let [s, a] of ((n.value = new Map()), r)) {
                    let u = t.keyType._zod.run({ value: s, issues: [] }, i),
                        c = t.valueType._zod.run({ value: a, issues: [] }, i);
                    u instanceof Promise || c instanceof Promise
                        ? o.push(
                              Promise.all([u, c]).then(([t, o]) => {
                                  n$(t, o, n, s, r, e, i);
                              }),
                          )
                        : n$(u, c, n, s, r, e, i);
                }
                return o.length ? Promise.all(o).then(() => n) : n;
            });
    });
function n$(e, t, n, i, r, o, s) {
    e.issues.length &&
        (I.has(typeof i)
            ? n.issues.push(...R(i, e.issues))
            : n.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: r,
                  inst: o,
                  issues: e.issues.map((e) => V(e, s, g())),
              })),
        t.issues.length &&
            (I.has(typeof i)
                ? n.issues.push(...R(i, t.issues))
                : n.issues.push({
                      origin: "map",
                      code: "invalid_element",
                      input: r,
                      inst: o,
                      key: i,
                      issues: t.issues.map((e) => V(e, s, g())),
                  })),
        n.value.set(e.value, t.value);
}
let nS = f("$ZodSet", (e, t) => {
    tO.init(e, t),
        (e._zod.parse = (n, i) => {
            let r = n.value;
            if (!(r instanceof Set))
                return n.issues.push({ input: r, inst: e, expected: "set", code: "invalid_type" }), n;
            let o = [];
            for (let e of ((n.value = new Set()), r)) {
                let r = t.valueType._zod.run({ value: e, issues: [] }, i);
                r instanceof Promise ? o.push(r.then((e) => nx(e, n))) : nx(r, n);
            }
            return o.length ? Promise.all(o).then(() => n) : n;
        });
});
function nx(e, t) {
    e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
let nN = f("$ZodEnum", (e, t) => {
        tO.init(e, t);
        let n = v(t.entries),
            i = new Set(n);
        (e._zod.values = i),
            (e._zod.pattern = RegExp(
                `^(${n
                    .filter((e) => I.has(typeof e))
                    .map((e) => ("string" == typeof e ? j(e) : e.toString()))
                    .join("|")})$`,
            )),
            (e._zod.parse = (t, r) => {
                let o = t.value;
                return i.has(o) || t.issues.push({ code: "invalid_value", values: n, input: o, inst: e }), t;
            });
    }),
    nO = f("$ZodLiteral", (e, t) => {
        if ((tO.init(e, t), 0 === t.values.length)) throw Error("Cannot create literal schema with no valid values");
        let n = new Set(t.values);
        (e._zod.values = n),
            (e._zod.pattern = RegExp(
                `^(${t.values.map((e) => ("string" == typeof e ? j(e) : e ? j(e.toString()) : String(e))).join("|")})$`,
            )),
            (e._zod.parse = (i, r) => {
                let o = i.value;
                return n.has(o) || i.issues.push({ code: "invalid_value", values: t.values, input: o, inst: e }), i;
            });
    }),
    nE = f("$ZodFile", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return (
                    i instanceof File || t.issues.push({ expected: "file", code: "invalid_type", input: i, inst: e }), t
                );
            });
    }),
    nT = f("$ZodTransform", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (n, i) => {
                if ("backward" === i.direction) throw new h(e.constructor.name);
                let r = t.transform(n.value, n);
                if (i.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((e) => ((n.value = e), n));
                if (r instanceof Promise) throw new p();
                return (n.value = r), n;
            });
    });
function nA(e, t) {
    return e.issues.length && void 0 === t ? { issues: [], value: void 0 } : e;
}
let nI = f("$ZodOptional", (e, t) => {
        tO.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            Z(e._zod, "values", () =>
                t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
            ),
            Z(e._zod, "pattern", () => {
                let e = t.innerType._zod.pattern;
                return e ? RegExp(`^(${b(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
                if ("optional" === t.innerType._zod.optin) {
                    let i = t.innerType._zod.run(e, n);
                    return i instanceof Promise ? i.then((t) => nA(t, e.value)) : nA(i, e.value);
                }
                return void 0 === e.value ? e : t.innerType._zod.run(e, n);
            });
    }),
    nP = f("$ZodExactOptional", (e, t) => {
        nI.init(e, t),
            Z(e._zod, "values", () => t.innerType._zod.values),
            Z(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
    }),
    nj = f("$ZodNullable", (e, t) => {
        tO.init(e, t),
            Z(e._zod, "optin", () => t.innerType._zod.optin),
            Z(e._zod, "optout", () => t.innerType._zod.optout),
            Z(e._zod, "pattern", () => {
                let e = t.innerType._zod.pattern;
                return e ? RegExp(`^(${b(e.source)}|null)$`) : void 0;
            }),
            Z(e._zod, "values", () => (t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0)),
            (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n)));
    }),
    nF = f("$ZodDefault", (e, t) => {
        tO.init(e, t),
            (e._zod.optin = "optional"),
            Z(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                if (void 0 === e.value) return (e.value = t.defaultValue), e;
                let i = t.innerType._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => nD(e, t)) : nD(i, t);
            });
    });
function nD(e, t) {
    return void 0 === e.value && (e.value = t.defaultValue), e;
}
let nM = f("$ZodPrefault", (e, t) => {
        tO.init(e, t),
            (e._zod.optin = "optional"),
            Z(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => (
                "backward" === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
                t.innerType._zod.run(e, n)
            ));
    }),
    nC = f("$ZodNonOptional", (e, t) => {
        tO.init(e, t),
            Z(e._zod, "values", () => {
                let e = t.innerType._zod.values;
                return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, i) => {
                let r = t.innerType._zod.run(n, i);
                return r instanceof Promise ? r.then((t) => nU(t, e)) : nU(r, e);
            });
    });
function nU(e, t) {
    return (
        e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
        e
    );
}
let nJ = f("$ZodSuccess", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) throw new h("ZodSuccess");
                let i = t.innerType._zod.run(e, n);
                return i instanceof Promise
                    ? i.then((t) => ((e.value = 0 === t.issues.length), e))
                    : ((e.value = 0 === i.issues.length), e);
            });
    }),
    nR = f("$ZodCatch", (e, t) => {
        tO.init(e, t),
            Z(e._zod, "optin", () => t.innerType._zod.optin),
            Z(e._zod, "optout", () => t.innerType._zod.optout),
            Z(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                let i = t.innerType._zod.run(e, n);
                return i instanceof Promise
                    ? i.then(
                          (i) => (
                              (e.value = i.value),
                              i.issues.length &&
                                  ((e.value = t.catchValue({
                                      ...e,
                                      error: { issues: i.issues.map((e) => V(e, n, g())) },
                                      input: e.value,
                                  })),
                                  (e.issues = [])),
                              e
                          ),
                      )
                    : ((e.value = i.value),
                      i.issues.length &&
                          ((e.value = t.catchValue({
                              ...e,
                              error: { issues: i.issues.map((e) => V(e, n, g())) },
                              input: e.value,
                          })),
                          (e.issues = [])),
                      e);
            });
    }),
    nL = f("$ZodNaN", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (t, n) => (
                ("number" == typeof t.value && Number.isNaN(t.value)) ||
                    t.issues.push({ input: t.value, inst: e, expected: "nan", code: "invalid_type" }),
                t
            ));
    }),
    nV = f("$ZodPipe", (e, t) => {
        tO.init(e, t),
            Z(e._zod, "values", () => t.in._zod.values),
            Z(e._zod, "optin", () => t.in._zod.optin),
            Z(e._zod, "optout", () => t.out._zod.optout),
            Z(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) {
                    let i = t.out._zod.run(e, n);
                    return i instanceof Promise ? i.then((e) => nB(e, t.in, n)) : nB(i, t.in, n);
                }
                let i = t.in._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => nB(e, t.out, n)) : nB(i, t.out, n);
            });
    });
function nB(e, t, n) {
    return e.issues.length ? ((e.aborted = !0), e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
let nq = f("$ZodCodec", (e, t) => {
    tO.init(e, t),
        Z(e._zod, "values", () => t.in._zod.values),
        Z(e._zod, "optin", () => t.in._zod.optin),
        Z(e._zod, "optout", () => t.out._zod.optout),
        Z(e._zod, "propValues", () => t.in._zod.propValues),
        (e._zod.parse = (e, n) => {
            if ("forward" === (n.direction || "forward")) {
                let i = t.in._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => nW(e, t, n)) : nW(i, t, n);
            }
            {
                let i = t.out._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => nW(e, t, n)) : nW(i, t, n);
            }
        });
});
function nW(e, t, n) {
    if (e.issues.length) return (e.aborted = !0), e;
    if ("forward" === (n.direction || "forward")) {
        let i = t.transform(e.value, e);
        return i instanceof Promise ? i.then((i) => nH(e, i, t.out, n)) : nH(e, i, t.out, n);
    }
    {
        let i = t.reverseTransform(e.value, e);
        return i instanceof Promise ? i.then((i) => nH(e, i, t.in, n)) : nH(e, i, t.in, n);
    }
}
function nH(e, t, n, i) {
    return e.issues.length ? ((e.aborted = !0), e) : n._zod.run({ value: t, issues: e.issues }, i);
}
let nX = f("$ZodReadonly", (e, t) => {
    tO.init(e, t),
        Z(e._zod, "propValues", () => t.innerType._zod.propValues),
        Z(e._zod, "values", () => t.innerType._zod.values),
        Z(e._zod, "optin", () => t.innerType?._zod?.optin),
        Z(e._zod, "optout", () => t.innerType?._zod?.optout),
        (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let i = t.innerType._zod.run(e, n);
            return i instanceof Promise ? i.then(nK) : nK(i);
        });
});
function nK(e) {
    return (e.value = Object.freeze(e.value)), e;
}
let nG = f("$ZodTemplateLiteral", (e, t) => {
        tO.init(e, t);
        let n = [];
        for (let e of t.parts)
            if ("object" == typeof e && null !== e) {
                if (!e._zod.pattern)
                    throw Error(`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`);
                let t = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
                if (!t) throw Error(`Invalid template literal part: ${e._zod.traits}`);
                let i = +!!t.startsWith("^"),
                    r = t.endsWith("$") ? t.length - 1 : t.length;
                n.push(t.slice(i, r));
            } else if (null === e || P.has(typeof e)) n.push(j(`${e}`));
            else throw Error(`Invalid template literal part: ${e}`);
        (e._zod.pattern = RegExp(`^${n.join("")}$`)),
            (e._zod.parse = (n, i) => (
                "string" != typeof n.value
                    ? n.issues.push({ input: n.value, inst: e, expected: "string", code: "invalid_type" })
                    : ((e._zod.pattern.lastIndex = 0),
                      e._zod.pattern.test(n.value) ||
                          n.issues.push({
                              input: n.value,
                              inst: e,
                              code: "invalid_format",
                              format: t.format ?? "template_literal",
                              pattern: e._zod.pattern.source,
                          })),
                n
            ));
    }),
    nY = f(
        "$ZodFunction",
        (e, t) => (
            tO.init(e, t),
            (e._def = t),
            (e._zod.def = t),
            (e.implement = (t) => {
                if ("function" != typeof t) throw Error("implement() must be called with a function");
                return function (...n) {
                    let i = Reflect.apply(t, this, e._def.input ? Y(e._def.input, n) : n);
                    return e._def.output ? Y(e._def.output, i) : i;
                };
            }),
            (e.implementAsync = (t) => {
                if ("function" != typeof t) throw Error("implementAsync() must be called with a function");
                return async function (...n) {
                    let i = e._def.input ? await ee(e._def.input, n) : n,
                        r = await Reflect.apply(t, this, i);
                    return e._def.output ? await ee(e._def.output, r) : r;
                };
            }),
            (e._zod.parse = (t, n) => (
                "function" != typeof t.value
                    ? t.issues.push({ code: "invalid_type", expected: "function", input: t.value, inst: e })
                    : e._def.output && "promise" === e._def.output._zod.def.type
                      ? (t.value = e.implementAsync(t.value))
                      : (t.value = e.implement(t.value)),
                t
            )),
            (e.input = (...t) => {
                let n = e.constructor;
                return new n(
                    Array.isArray(t[0])
                        ? {
                              type: "function",
                              input: new nz({ type: "tuple", items: t[0], rest: t[1] }),
                              output: e._def.output,
                          }
                        : { type: "function", input: t[0], output: e._def.output },
                );
            }),
            (e.output = (t) => new e.constructor({ type: "function", input: e._def.input, output: t })),
            e
        ),
    ),
    nQ = f("$ZodPromise", (e, t) => {
        tO.init(e, t),
            (e._zod.parse = (e, n) =>
                Promise.resolve(e.value).then((e) => t.innerType._zod.run({ value: e, issues: [] }, n)));
    }),
    n0 = f("$ZodLazy", (e, t) => {
        tO.init(e, t),
            Z(e._zod, "innerType", () => t.getter()),
            Z(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
            Z(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
            Z(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
            Z(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n));
    }),
    n1 = f("$ZodCustom", (e, t) => {
        ti.init(e, t),
            tO.init(e, t),
            (e._zod.parse = (e, t) => e),
            (e._zod.check = (n) => {
                let i = n.value,
                    r = t.fn(i);
                if (r instanceof Promise) return r.then((t) => n2(t, n, i, e));
                n2(r, n, i, e);
            });
    });
function n2(e, t, n, i) {
    if (!e) {
        let e = { code: "custom", input: n, inst: i, path: [...(i._zod.def.path ?? [])], continue: !i._zod.def.abort };
        i._zod.def.params && (e.params = i._zod.def.params), t.issues.push(W(e));
    }
}
Symbol("ZodOutput"), Symbol("ZodInput");
(s = globalThis).__zod_globalRegistry ??
    (s.__zod_globalRegistry = new (class e {
        constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
        }
        add(e, ...t) {
            let n = t[0];
            return this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this;
        }
        clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
        }
        remove(e) {
            let t = this._map.get(e);
            return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
        }
        get(e) {
            let t = e._zod.parent;
            if (t) {
                let n = { ...(this.get(t) ?? {}) };
                delete n.id;
                let i = { ...n, ...this._map.get(e) };
                return Object.keys(i).length ? i : void 0;
            }
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
    })());
let n4 = globalThis.__zod_globalRegistry;
function n9(e, t) {
    return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...D(t) });
}
function n6(e, t) {
    return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...D(t) });
}
function n7(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...D(t) });
}
function n3(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...D(t) });
}
function n5(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...D(t) });
}
function n8(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...D(t) });
}
function ie(e, t) {
    return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...D(t) });
}
function it(e, t) {
    return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...D(t) });
}
function ii(e, t) {
    return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...D(t) });
}
function ir(e, t) {
    return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...D(t) });
}
function io(e, t) {
    return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...D(t) });
}
function is(e, t) {
    return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...D(t) });
}
function ia(e, t) {
    return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...D(t) });
}
function iu(e, t) {
    return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...D(t) });
}
function ic(e, t) {
    return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...D(t) });
}
function il(e, t) {
    return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...D(t) });
}
function id(e, t) {
    return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...D(t) });
}
function ip(e, t) {
    return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...D(t) });
}
function ih(e, t) {
    return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...D(t) });
}
function im(e, t) {
    return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...D(t) });
}
function ig(e, t) {
    return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...D(t) });
}
function iv(e, t) {
    return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...D(t) });
}
function i_(e, t) {
    return new to({ check: "less_than", ...D(t), value: e, inclusive: !1 });
}
function iy(e, t) {
    return new to({ check: "less_than", ...D(t), value: e, inclusive: !0 });
}
function iw(e, t) {
    return new ts({ check: "greater_than", ...D(t), value: e, inclusive: !1 });
}
function iz(e, t) {
    return new ts({ check: "greater_than", ...D(t), value: e, inclusive: !0 });
}
function ib(e) {
    return iw(0, e);
}
function ik(e) {
    return i_(0, e);
}
function iZ(e) {
    return iy(0, e);
}
function i$(e) {
    return iz(0, e);
}
function iS(e, t) {
    return new ta({ check: "multiple_of", ...D(t), value: e });
}
function ix(e, t) {
    return new tl({ check: "max_size", ...D(t), maximum: e });
}
function iN(e, t) {
    return new td({ check: "min_size", ...D(t), minimum: e });
}
function iO(e, t) {
    return new tf({ check: "size_equals", ...D(t), size: e });
}
function iE(e, t) {
    return new tp({ check: "max_length", ...D(t), maximum: e });
}
function iT(e, t) {
    return new th({ check: "min_length", ...D(t), minimum: e });
}
function iA(e, t) {
    return new tm({ check: "length_equals", ...D(t), length: e });
}
function iI(e, t) {
    return new tv({ check: "string_format", format: "regex", ...D(t), pattern: e });
}
function iP(e) {
    return new t_({ check: "string_format", format: "lowercase", ...D(e) });
}
function ij(e) {
    return new ty({ check: "string_format", format: "uppercase", ...D(e) });
}
function iF(e, t) {
    return new tw({ check: "string_format", format: "includes", ...D(t), includes: e });
}
function iD(e, t) {
    return new tz({ check: "string_format", format: "starts_with", ...D(t), prefix: e });
}
function iM(e, t) {
    return new tb({ check: "string_format", format: "ends_with", ...D(t), suffix: e });
}
function iC(e, t, n) {
    return new tZ({ check: "property", property: e, schema: t, ...D(n) });
}
function iU(e, t) {
    return new t$({ check: "mime_type", mime: e, ...D(t) });
}
function iJ(e) {
    return new tS({ check: "overwrite", tx: e });
}
function iR(e) {
    return iJ((t) => t.normalize(e));
}
function iL() {
    return iJ((e) => e.trim());
}
function iV() {
    return iJ((e) => e.toLowerCase());
}
function iB() {
    return iJ((e) => e.toUpperCase());
}
function iq() {
    return iJ((e) =>
        e
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, ""),
    );
}
function iW(e, t, n, i = {}) {
    let r = D(i),
        o = {
            ...D(i),
            check: "string_format",
            type: "string",
            format: t,
            fn: "function" == typeof n ? n : (e) => n.test(e),
            ...r,
        };
    return n instanceof RegExp && (o.pattern = n), new e(o);
}
function iH(e) {
    let t = e?.target ?? "draft-2020-12";
    return (
        "draft-4" === t && (t = "draft-04"),
        "draft-7" === t && (t = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? n4,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0,
        }
    );
}
function iX(e, t, n = { path: [], schemaPath: [] }) {
    var i;
    let r = e._zod.def,
        o = t.seen.get(e);
    if (o) return o.count++, n.schemaPath.includes(e) && (o.cycle = n.path), o.schema;
    let s = { schema: {}, count: 1, cycle: void 0, path: n.path };
    t.seen.set(e, s);
    let a = e._zod.toJSONSchema?.();
    if (a) s.schema = a;
    else {
        let i = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, i);
        else {
            let n = s.schema,
                o = t.processors[r.type];
            if (!o) throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
            o(e, t, n, i);
        }
        let o = e._zod.parent;
        o && (s.ref || (s.ref = o), iX(o, t, i), (t.seen.get(o).isParent = !0));
    }
    let u = t.metadataRegistry.get(e);
    return (
        u && Object.assign(s.schema, u),
        "input" === t.io &&
            (function e(t, n) {
                let i = n ?? { seen: new Set() };
                if (i.seen.has(t)) return !1;
                i.seen.add(t);
                let r = t._zod.def;
                if ("transform" === r.type) return !0;
                if ("array" === r.type) return e(r.element, i);
                if ("set" === r.type) return e(r.valueType, i);
                if ("lazy" === r.type) return e(r.getter(), i);
                if (
                    "promise" === r.type ||
                    "optional" === r.type ||
                    "nonoptional" === r.type ||
                    "nullable" === r.type ||
                    "readonly" === r.type ||
                    "default" === r.type ||
                    "prefault" === r.type
                )
                    return e(r.innerType, i);
                if ("intersection" === r.type) return e(r.left, i) || e(r.right, i);
                if ("record" === r.type || "map" === r.type) return e(r.keyType, i) || e(r.valueType, i);
                if ("pipe" === r.type) return e(r.in, i) || e(r.out, i);
                if ("object" === r.type) {
                    for (let t in r.shape) if (e(r.shape[t], i)) return !0;
                    return !1;
                }
                if ("union" === r.type) {
                    for (let t of r.options) if (e(t, i)) return !0;
                    return !1;
                }
                if ("tuple" === r.type) {
                    for (let t of r.items) if (e(t, i)) return !0;
                    if (r.rest && e(r.rest, i)) return !0;
                }
                return !1;
            })(e) &&
            (delete s.schema.examples, delete s.schema.default),
        "input" === t.io && s.schema._prefault && ((i = s.schema).default ?? (i.default = s.schema._prefault)),
        delete s.schema._prefault,
        t.seen.get(e).schema
    );
}
function iK(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = new Map();
    for (let t of e.seen.entries()) {
        let n = e.metadataRegistry.get(t[0])?.id;
        if (n) {
            let e = i.get(n);
            if (e && e !== t[0])
                throw Error(
                    `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
            i.set(n, t[0]);
        }
    }
    let r = (t) => {
        if (t[1].schema.$ref) return;
        let i = t[1],
            { ref: r, defId: o } = ((t) => {
                let i = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    let n = e.external.registry.get(t[0])?.id,
                        r = e.external.uri ?? ((e) => e);
                    if (n) return { ref: r(n) };
                    let o = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                    return (t[1].defId = o), { defId: o, ref: `${r("__shared")}#/${i}/${o}` };
                }
                if (t[1] === n) return { ref: "#" };
                let r = `#/${i}/`,
                    o = t[1].schema.id ?? `__schema${e.counter++}`;
                return { defId: o, ref: r + o };
            })(t);
        (i.def = { ...i.schema }), o && (i.defId = o);
        let s = i.schema;
        for (let e in s) delete s[e];
        s.$ref = r;
    };
    if ("throw" === e.cycles)
        for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
                throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (let n of e.seen.entries()) {
        let i = n[1];
        if (t === n[0]) {
            r(n);
            continue;
        }
        if (e.external) {
            let i = e.external.registry.get(n[0])?.id;
            if (t !== n[0] && i) {
                r(n);
                continue;
            }
        }
        if (e.metadataRegistry.get(n[0])?.id || i.cycle || (i.count > 1 && "ref" === e.reused)) {
            r(n);
            continue;
        }
    }
}
function iG(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = (t) => {
        let n = e.seen.get(t);
        if (null === n.ref) return;
        let r = n.def ?? n.schema,
            o = { ...r },
            s = n.ref;
        if (((n.ref = null), s)) {
            i(s);
            let n = e.seen.get(s),
                a = n.schema;
            if (
                (a.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                    ? ((r.allOf = r.allOf ?? []), r.allOf.push(a))
                    : Object.assign(r, a),
                Object.assign(r, o),
                t._zod.parent === s)
            )
                for (let e in r) "$ref" !== e && "allOf" !== e && (e in o || delete r[e]);
            if (a.$ref && n.def)
                for (let e in r)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in n.def &&
                        JSON.stringify(r[e]) === JSON.stringify(n.def[e]) &&
                        delete r[e];
        }
        let a = t._zod.parent;
        if (a && a !== s) {
            i(a);
            let t = e.seen.get(a);
            if (t?.schema.$ref && ((r.$ref = t.schema.$ref), t.def))
                for (let e in r)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in t.def &&
                        JSON.stringify(r[e]) === JSON.stringify(t.def[e]) &&
                        delete r[e];
        }
        e.override({ zodSchema: t, jsonSchema: r, path: n.path ?? [] });
    };
    for (let t of [...e.seen.entries()].reverse()) i(t[0]);
    let r = {};
    if (
        ("draft-2020-12" === e.target
            ? (r.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (r.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (r.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
        e.external?.uri)
    ) {
        let n = e.external.registry.get(t)?.id;
        if (!n) throw Error("Schema is missing an `id` property");
        r.$id = e.external.uri(n);
    }
    Object.assign(r, n.def ?? n.schema);
    let o = e.external?.defs ?? {};
    for (let t of e.seen.entries()) {
        let e = t[1];
        e.def && e.defId && (o[e.defId] = e.def);
    }
    e.external || (Object.keys(o).length > 0 && ("draft-2020-12" === e.target ? (r.$defs = o) : (r.definitions = o)));
    try {
        let n = JSON.parse(JSON.stringify(r));
        return (
            Object.defineProperty(n, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: { input: iY(t, "input", e.processors), output: iY(t, "output", e.processors) },
                },
                enumerable: !1,
                writable: !1,
            }),
            n
        );
    } catch (e) {
        throw Error("Error converting schema to JSON.");
    }
}
let iY =
        (e, t, n = {}) =>
        (i) => {
            let { libraryOptions: r, target: o } = i ?? {},
                s = iH({ ...(r ?? {}), target: o, io: t, processors: n });
            return iX(e, s), iK(s, e), iG(s, e);
        },
    iQ = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    i0 = (e, t, n, i) => {
        let r = e._zod.def,
            o = !1 === r.inclusive,
            s = r.options.map((e, n) => iX(e, t, { ...i, path: [...i.path, o ? "oneOf" : "anyOf", n] }));
        o ? (n.oneOf = s) : (n.anyOf = s);
    },
    i1 = (e, t, n, i) => {
        let r = e._zod.def;
        iX(r.innerType, t, i), (t.seen.get(e).ref = r.innerType);
    },
    i2 = f("ZodISODateTime", (e, t) => {
        tL.init(e, t), r_.init(e, t);
    });
function i4(e) {
    return new i2({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...D(e),
    });
}
let i9 = f("ZodISODate", (e, t) => {
    tV.init(e, t), r_.init(e, t);
});
function i6(e) {
    return new i9({ type: "string", format: "date", check: "string_format", ...D(e) });
}
let i7 = f("ZodISOTime", (e, t) => {
    tB.init(e, t), r_.init(e, t);
});
function i3(e) {
    return new i7({ type: "string", format: "time", check: "string_format", precision: null, ...D(e) });
}
let i5 = f("ZodISODuration", (e, t) => {
    tq.init(e, t), r_.init(e, t);
});
function i8(e) {
    return new i5({ type: "string", format: "duration", check: "string_format", ...D(e) });
}
let re = (e, t) => {
    X.init(e, t),
        (e.name = "ZodError"),
        Object.defineProperties(e, {
            format: {
                value: (t) =>
                    (function (e, t = (e) => e.message) {
                        let n = { _errors: [] },
                            i = (e) => {
                                for (let r of e.issues)
                                    if ("invalid_union" === r.code && r.errors.length)
                                        r.errors.map((e) => i({ issues: e }));
                                    else if ("invalid_key" === r.code) i({ issues: r.issues });
                                    else if ("invalid_element" === r.code) i({ issues: r.issues });
                                    else if (0 === r.path.length) n._errors.push(t(r));
                                    else {
                                        let e = n,
                                            i = 0;
                                        for (; i < r.path.length; ) {
                                            let n = r.path[i];
                                            i === r.path.length - 1
                                                ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(r)))
                                                : (e[n] = e[n] || { _errors: [] }),
                                                (e = e[n]),
                                                i++;
                                        }
                                    }
                            };
                        return i(e), n;
                    })(e, t),
            },
            flatten: {
                value: (t) =>
                    (function (e, t = (e) => e.message) {
                        let n = {},
                            i = [];
                        for (let r of e.issues)
                            r.path.length > 0
                                ? ((n[r.path[0]] = n[r.path[0]] || []), n[r.path[0]].push(t(r)))
                                : i.push(t(r));
                        return { formErrors: i, fieldErrors: n };
                    })(e, t),
            },
            addIssue: {
                value: (t) => {
                    e.issues.push(t), (e.message = JSON.stringify(e.issues, y, 2));
                },
            },
            addIssues: {
                value: (t) => {
                    e.issues.push(...t), (e.message = JSON.stringify(e.issues, y, 2));
                },
            },
            isEmpty: { get: () => 0 === e.issues.length },
        });
};
f("ZodError", re);
let rt = f("ZodError", re, { Parent: Error }),
    rn = G(rt),
    ri = Q(rt),
    rr = et(rt),
    ro = ei(rt),
    rs = (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return G(rt)(e, t, i);
    },
    ra = (e, t, n) => G(rt)(e, t, n),
    ru = async (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return Q(rt)(e, t, i);
    },
    rc = async (e, t, n) => Q(rt)(e, t, n),
    rl = (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return et(rt)(e, t, i);
    },
    rd = (e, t, n) => et(rt)(e, t, n),
    rf = async (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return ei(rt)(e, t, i);
    },
    rp = async (e, t, n) => ei(rt)(e, t, n),
    rh = f(
        "ZodType",
        (e, t) => (
            tO.init(e, t),
            Object.assign(e["~standard"], { jsonSchema: { input: iY(e, "input"), output: iY(e, "output") } }),
            (e.toJSONSchema = (
                (e, t = {}) =>
                (n) => {
                    let i = iH({ ...n, processors: t });
                    return iX(e, i), iK(i, e), iG(i, e);
                }
            )(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.check = (...n) =>
                e.clone(
                    S(t, {
                        checks: [
                            ...(t.checks ?? []),
                            ...n.map((e) =>
                                "function" == typeof e
                                    ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } }
                                    : e,
                            ),
                        ],
                    }),
                    { parent: !0 },
                )),
            (e.with = e.check),
            (e.clone = (t, n) => F(e, t, n)),
            (e.brand = () => e),
            (e.register = (t, n) => (t.add(e, n), e)),
            (e.parse = (t, n) => rn(e, t, n, { callee: e.parse })),
            (e.safeParse = (t, n) => rr(e, t, n)),
            (e.parseAsync = async (t, n) => ri(e, t, n, { callee: e.parseAsync })),
            (e.safeParseAsync = async (t, n) => ro(e, t, n)),
            (e.spa = e.safeParseAsync),
            (e.encode = (t, n) => rs(e, t, n)),
            (e.decode = (t, n) => ra(e, t, n)),
            (e.encodeAsync = async (t, n) => ru(e, t, n)),
            (e.decodeAsync = async (t, n) => rc(e, t, n)),
            (e.safeEncode = (t, n) => rl(e, t, n)),
            (e.safeDecode = (t, n) => rd(e, t, n)),
            (e.safeEncodeAsync = async (t, n) => rf(e, t, n)),
            (e.safeDecodeAsync = async (t, n) => rp(e, t, n)),
            (e.refine = (t, n) => e.check(sJ(t, n))),
            (e.superRefine = (t) => e.check(sR(t))),
            (e.overwrite = (t) => e.check(iJ(t))),
            (e.optional = () => ss(e)),
            (e.exactOptional = () => su(e)),
            (e.nullable = () => sl(e)),
            (e.nullish = () => ss(sl(e))),
            (e.nonoptional = (t) => sv(e, t)),
            (e.array = () => oF(e)),
            (e.or = (t) => oL([e, t])),
            (e.and = (t) => oX(e, t)),
            (e.transform = (t) => s$(e, sr(t))),
            (e.default = (t) => sp(e, t)),
            (e.prefault = (t) => sm(e, t)),
            (e.catch = (t) => sz(e, t)),
            (e.pipe = (t) => s$(e, t)),
            (e.readonly = () => sO(e)),
            (e.describe = (t) => {
                let n = e.clone();
                return n4.add(n, { description: t }), n;
            }),
            Object.defineProperty(e, "description", { get: () => n4.get(e)?.description, configurable: !0 }),
            (e.meta = (...t) => {
                if (0 === t.length) return n4.get(e);
                let n = e.clone();
                return n4.add(n, t[0]), n;
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (t) => t(e)),
            e
        ),
    ),
    rm = f("_ZodString", (e, t) => {
        tE.init(e, t),
            rh.init(e, t),
            (e._zod.processJSONSchema = (t, n, i) =>
                ((e, t, n, i) => {
                    n.type = "string";
                    let { minimum: r, maximum: o, format: s, patterns: a, contentEncoding: u } = e._zod.bag;
                    if (
                        ("number" == typeof r && (n.minLength = r),
                        "number" == typeof o && (n.maxLength = o),
                        s &&
                            ((n.format = iQ[s] ?? s),
                            "" === n.format && delete n.format,
                            "time" === s && delete n.format),
                        u && (n.contentEncoding = u),
                        a && a.size > 0)
                    ) {
                        let e = [...a];
                        1 === e.length
                            ? (n.pattern = e[0].source)
                            : e.length > 1 &&
                              (n.allOf = [
                                  ...e.map((e) => ({
                                      ...("draft-07" === t.target ||
                                      "draft-04" === t.target ||
                                      "openapi-3.0" === t.target
                                          ? { type: "string" }
                                          : {}),
                                      pattern: e.source,
                                  })),
                              ]);
                    }
                })(e, t, n, 0));
        let n = e._zod.bag;
        (e.format = n.format ?? null),
            (e.minLength = n.minimum ?? null),
            (e.maxLength = n.maximum ?? null),
            (e.regex = (...t) => e.check(iI(...t))),
            (e.includes = (...t) => e.check(iF(...t))),
            (e.startsWith = (...t) => e.check(iD(...t))),
            (e.endsWith = (...t) => e.check(iM(...t))),
            (e.min = (...t) => e.check(iT(...t))),
            (e.max = (...t) => e.check(iE(...t))),
            (e.length = (...t) => e.check(iA(...t))),
            (e.nonempty = (...t) => e.check(iT(1, ...t))),
            (e.lowercase = (t) => e.check(iP(t))),
            (e.uppercase = (t) => e.check(ij(t))),
            (e.trim = () => e.check(iL())),
            (e.normalize = (...t) => e.check(iR(...t))),
            (e.toLowerCase = () => e.check(iV())),
            (e.toUpperCase = () => e.check(iB())),
            (e.slugify = () => e.check(iq()));
    }),
    rg = f("ZodString", (e, t) => {
        tE.init(e, t),
            rm.init(e, t),
            (e.email = (t) => e.check(n9(ry, t))),
            (e.url = (t) => e.check(ie(rN, t))),
            (e.jwt = (t) => e.check(iv(r3, t))),
            (e.emoji = (t) => e.check(it(rT, t))),
            (e.guid = (t) => e.check(n6(rz, t))),
            (e.uuid = (t) => e.check(n7(rk, t))),
            (e.uuidv4 = (t) => e.check(n3(rk, t))),
            (e.uuidv6 = (t) => e.check(n5(rk, t))),
            (e.uuidv7 = (t) => e.check(n8(rk, t))),
            (e.nanoid = (t) => e.check(ii(rI, t))),
            (e.guid = (t) => e.check(n6(rz, t))),
            (e.cuid = (t) => e.check(ir(rj, t))),
            (e.cuid2 = (t) => e.check(io(rD, t))),
            (e.ulid = (t) => e.check(is(rC, t))),
            (e.base64 = (t) => e.check(ih(r1, t))),
            (e.base64url = (t) => e.check(im(r4, t))),
            (e.xid = (t) => e.check(ia(rJ, t))),
            (e.ksuid = (t) => e.check(iu(rL, t))),
            (e.ipv4 = (t) => e.check(ic(rB, t))),
            (e.ipv6 = (t) => e.check(il(rX, t))),
            (e.cidrv4 = (t) => e.check(id(rG, t))),
            (e.cidrv6 = (t) => e.check(ip(rQ, t))),
            (e.e164 = (t) => e.check(ig(r6, t))),
            (e.datetime = (t) => e.check(i4(t))),
            (e.date = (t) => e.check(i6(t))),
            (e.time = (t) => e.check(i3(t))),
            (e.duration = (t) => e.check(i8(t)));
    });
function rv(e) {
    return new rg({ type: "string", ...D(e) });
}
let r_ = f("ZodStringFormat", (e, t) => {
        tT.init(e, t), rm.init(e, t);
    }),
    ry = f("ZodEmail", (e, t) => {
        tP.init(e, t), r_.init(e, t);
    });
function rw(e) {
    return n9(ry, e);
}
let rz = f("ZodGUID", (e, t) => {
    tA.init(e, t), r_.init(e, t);
});
function rb(e) {
    return n6(rz, e);
}
let rk = f("ZodUUID", (e, t) => {
    tI.init(e, t), r_.init(e, t);
});
function rZ(e) {
    return n7(rk, e);
}
function r$(e) {
    return n3(rk, e);
}
function rS(e) {
    return n5(rk, e);
}
function rx(e) {
    return n8(rk, e);
}
let rN = f("ZodURL", (e, t) => {
    tj.init(e, t), r_.init(e, t);
});
function rO(e) {
    return ie(rN, e);
}
function rE(e) {
    return ie(rN, { protocol: /^https?$/, hostname: eI, ...D(e) });
}
let rT = f("ZodEmoji", (e, t) => {
    tF.init(e, t), r_.init(e, t);
});
function rA(e) {
    return it(rT, e);
}
let rI = f("ZodNanoID", (e, t) => {
    tD.init(e, t), r_.init(e, t);
});
function rP(e) {
    return ii(rI, e);
}
let rj = f("ZodCUID", (e, t) => {
    tM.init(e, t), r_.init(e, t);
});
function rF(e) {
    return ir(rj, e);
}
let rD = f("ZodCUID2", (e, t) => {
    tC.init(e, t), r_.init(e, t);
});
function rM(e) {
    return io(rD, e);
}
let rC = f("ZodULID", (e, t) => {
    tU.init(e, t), r_.init(e, t);
});
function rU(e) {
    return is(rC, e);
}
let rJ = f("ZodXID", (e, t) => {
    tJ.init(e, t), r_.init(e, t);
});
function rR(e) {
    return ia(rJ, e);
}
let rL = f("ZodKSUID", (e, t) => {
    tR.init(e, t), r_.init(e, t);
});
function rV(e) {
    return iu(rL, e);
}
let rB = f("ZodIPv4", (e, t) => {
    tW.init(e, t), r_.init(e, t);
});
function rq(e) {
    return ic(rB, e);
}
let rW = f("ZodMAC", (e, t) => {
    tX.init(e, t), r_.init(e, t);
});
function rH(e) {
    return new rW({ type: "string", format: "mac", check: "string_format", abort: !1, ...D(e) });
}
let rX = f("ZodIPv6", (e, t) => {
    tH.init(e, t), r_.init(e, t);
});
function rK(e) {
    return il(rX, e);
}
let rG = f("ZodCIDRv4", (e, t) => {
    tK.init(e, t), r_.init(e, t);
});
function rY(e) {
    return id(rG, e);
}
let rQ = f("ZodCIDRv6", (e, t) => {
    tG.init(e, t), r_.init(e, t);
});
function r0(e) {
    return ip(rQ, e);
}
let r1 = f("ZodBase64", (e, t) => {
    tQ.init(e, t), r_.init(e, t);
});
function r2(e) {
    return ih(r1, e);
}
let r4 = f("ZodBase64URL", (e, t) => {
    t0.init(e, t), r_.init(e, t);
});
function r9(e) {
    return im(r4, e);
}
let r6 = f("ZodE164", (e, t) => {
    t1.init(e, t), r_.init(e, t);
});
function r7(e) {
    return ig(r6, e);
}
let r3 = f("ZodJWT", (e, t) => {
    t2.init(e, t), r_.init(e, t);
});
function r5(e) {
    return iv(r3, e);
}
let r8 = f("ZodCustomStringFormat", (e, t) => {
    t4.init(e, t), r_.init(e, t);
});
function oe(e, t, n = {}) {
    return iW(r8, e, t, n);
}
function ot(e) {
    return iW(r8, "hostname", eA, e);
}
function on(e) {
    return iW(r8, "hex", eX, e);
}
function oi(e, t) {
    let n = t?.enc ?? "hex",
        i = `${e}_${n}`,
        r = u[i];
    if (!r) throw Error(`Unrecognized hash format: ${i}`);
    return iW(r8, i, r, t);
}
let or = f("ZodNumber", (e, t) => {
    t9.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let {
                    minimum: r,
                    maximum: o,
                    format: s,
                    multipleOf: a,
                    exclusiveMaximum: u,
                    exclusiveMinimum: c,
                } = e._zod.bag;
                "string" == typeof s && s.includes("int") ? (n.type = "integer") : (n.type = "number"),
                    "number" == typeof c &&
                        ("draft-04" === t.target || "openapi-3.0" === t.target
                            ? ((n.minimum = c), (n.exclusiveMinimum = !0))
                            : (n.exclusiveMinimum = c)),
                    "number" == typeof r &&
                        ((n.minimum = r),
                        "number" == typeof c &&
                            "draft-04" !== t.target &&
                            (c >= r ? delete n.minimum : delete n.exclusiveMinimum)),
                    "number" == typeof u &&
                        ("draft-04" === t.target || "openapi-3.0" === t.target
                            ? ((n.maximum = u), (n.exclusiveMaximum = !0))
                            : (n.exclusiveMaximum = u)),
                    "number" == typeof o &&
                        ((n.maximum = o),
                        "number" == typeof u &&
                            "draft-04" !== t.target &&
                            (u <= o ? delete n.maximum : delete n.exclusiveMaximum)),
                    "number" == typeof a && (n.multipleOf = a);
            })(e, t, n, 0)),
        (e.gt = (t, n) => e.check(iw(t, n))),
        (e.gte = (t, n) => e.check(iz(t, n))),
        (e.min = (t, n) => e.check(iz(t, n))),
        (e.lt = (t, n) => e.check(i_(t, n))),
        (e.lte = (t, n) => e.check(iy(t, n))),
        (e.max = (t, n) => e.check(iy(t, n))),
        (e.int = (t) => e.check(oa(t))),
        (e.safe = (t) => e.check(oa(t))),
        (e.positive = (t) => e.check(iw(0, t))),
        (e.nonnegative = (t) => e.check(iz(0, t))),
        (e.negative = (t) => e.check(i_(0, t))),
        (e.nonpositive = (t) => e.check(iy(0, t))),
        (e.multipleOf = (t, n) => e.check(iS(t, n))),
        (e.step = (t, n) => e.check(iS(t, n))),
        (e.finite = () => e);
    let n = e._zod.bag;
    (e.minValue = Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
        (e.maxValue = Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
        (e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = n.format ?? null);
});
function oo(e) {
    return new or({ type: "number", checks: [], ...D(e) });
}
let os = f("ZodNumberFormat", (e, t) => {
    t6.init(e, t), or.init(e, t);
});
function oa(e) {
    return new os({ type: "number", check: "number_format", abort: !1, format: "safeint", ...D(e) });
}
function ou(e) {
    return new os({ type: "number", check: "number_format", abort: !1, format: "float32", ...D(e) });
}
function oc(e) {
    return new os({ type: "number", check: "number_format", abort: !1, format: "float64", ...D(e) });
}
function ol(e) {
    return new os({ type: "number", check: "number_format", abort: !1, format: "int32", ...D(e) });
}
function od(e) {
    return new os({ type: "number", check: "number_format", abort: !1, format: "uint32", ...D(e) });
}
let of = f("ZodBoolean", (e, t) => {
    t7.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
        });
});
function op(e) {
    return new of({ type: "boolean", ...D(e) });
}
let oh = f("ZodBigInt", (e, t) => {
    t3.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("BigInt cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.gte = (t, n) => e.check(iz(t, n))),
        (e.min = (t, n) => e.check(iz(t, n))),
        (e.gt = (t, n) => e.check(iw(t, n))),
        (e.gte = (t, n) => e.check(iz(t, n))),
        (e.min = (t, n) => e.check(iz(t, n))),
        (e.lt = (t, n) => e.check(i_(t, n))),
        (e.lte = (t, n) => e.check(iy(t, n))),
        (e.max = (t, n) => e.check(iy(t, n))),
        (e.positive = (t) => e.check(iw(BigInt(0), t))),
        (e.negative = (t) => e.check(i_(BigInt(0), t))),
        (e.nonpositive = (t) => e.check(iy(BigInt(0), t))),
        (e.nonnegative = (t) => e.check(iz(BigInt(0), t))),
        (e.multipleOf = (t, n) => e.check(iS(t, n)));
    let n = e._zod.bag;
    (e.minValue = n.minimum ?? null), (e.maxValue = n.maximum ?? null), (e.format = n.format ?? null);
});
function om(e) {
    return new oh({ type: "bigint", ...D(e) });
}
let og = f("ZodBigIntFormat", (e, t) => {
    t5.init(e, t), oh.init(e, t);
});
function ov(e) {
    return new og({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...D(e) });
}
function o_(e) {
    return new og({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...D(e) });
}
let oy = f("ZodSymbol", (e, t) => {
    t8.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Symbols cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function ow(e) {
    return new oy({ type: "symbol", ...D(e) });
}
let oz = f("ZodUndefined", (e, t) => {
    ne.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Undefined cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function ob(e) {
    return new oz({ type: "undefined", ...D(e) });
}
let ok = f("ZodNull", (e, t) => {
    nt.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            "openapi-3.0" === e.target
                ? ((t.type = "string"), (t.nullable = !0), (t.enum = [null]))
                : (t.type = "null");
        });
});
function oZ(e) {
    return new ok({ type: "null", ...D(e) });
}
let o$ = f("ZodAny", (e, t) => {
    nn.init(e, t), rh.init(e, t), (e._zod.processJSONSchema = (e, t, n) => {});
});
function oS() {
    return new o$({ type: "any" });
}
let ox = f("ZodUnknown", (e, t) => {
    ni.init(e, t), rh.init(e, t), (e._zod.processJSONSchema = (e, t, n) => {});
});
function oN() {
    return new ox({ type: "unknown" });
}
let oO = f("ZodNever", (e, t) => {
    nr.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.not = {};
        });
});
function oE(e) {
    return new oO({ type: "never", ...D(e) });
}
let oT = f("ZodVoid", (e, t) => {
    no.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Void cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function oA(e) {
    return new oT({ type: "void", ...D(e) });
}
let oI = f("ZodDate", (e, t) => {
    ns.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Date cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (t, n) => e.check(iz(t, n))),
        (e.max = (t, n) => e.check(iy(t, n)));
    let n = e._zod.bag;
    (e.minDate = n.minimum ? new Date(n.minimum) : null), (e.maxDate = n.maximum ? new Date(n.maximum) : null);
});
function oP(e) {
    return new oI({ type: "date", ...D(e) });
}
let oj = f("ZodArray", (e, t) => {
    nu.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def,
                    { minimum: o, maximum: s } = e._zod.bag;
                "number" == typeof o && (n.minItems = o),
                    "number" == typeof s && (n.maxItems = s),
                    (n.type = "array"),
                    (n.items = iX(r.element, t, { ...i, path: [...i.path, "items"] }));
            })(e, t, n, i)),
        (e.element = t.element),
        (e.min = (t, n) => e.check(iT(t, n))),
        (e.nonempty = (t) => e.check(iT(1, t))),
        (e.max = (t, n) => e.check(iE(t, n))),
        (e.length = (t, n) => e.check(iA(t, n))),
        (e.unwrap = () => e.element);
});
function oF(e, t) {
    return new oj({ type: "array", element: e, ...D(t) });
}
function oD(e) {
    return o3(Object.keys(e._zod.def.shape));
}
let oM = f("ZodObject", (e, t) => {
    np.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def;
                (n.type = "object"), (n.properties = {});
                let o = r.shape;
                for (let e in o) n.properties[e] = iX(o[e], t, { ...i, path: [...i.path, "properties", e] });
                let s = new Set(
                    [...new Set(Object.keys(o))].filter((e) => {
                        let n = r.shape[e]._zod;
                        return "input" === t.io ? void 0 === n.optin : void 0 === n.optout;
                    }),
                );
                s.size > 0 && (n.required = Array.from(s)),
                    r.catchall?._zod.def.type === "never"
                        ? (n.additionalProperties = !1)
                        : r.catchall
                          ? r.catchall &&
                            (n.additionalProperties = iX(r.catchall, t, {
                                ...i,
                                path: [...i.path, "additionalProperties"],
                            }))
                          : "output" === t.io && (n.additionalProperties = !1);
            })(e, t, n, i)),
        Z(e, "shape", () => t.shape),
        (e.keyof = () => o3(Object.keys(e._zod.def.shape))),
        (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: oN() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: oN() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: oE() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (t) =>
            (function (e, t) {
                if (!T(t)) throw Error("Invalid input to extend: expected a plain object");
                let n = e._zod.def.checks;
                if (n && n.length > 0) {
                    let n = e._zod.def.shape;
                    for (let e in t)
                        if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
                            throw Error(
                                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                            );
                }
                let i = S(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t };
                        return $(this, "shape", n), n;
                    },
                });
                return F(e, i);
            })(e, t)),
        (e.safeExtend = (t) =>
            (function (e, t) {
                if (!T(t)) throw Error("Invalid input to safeExtend: expected a plain object");
                let n = S(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t };
                        return $(this, "shape", n), n;
                    },
                });
                return F(e, n);
            })(e, t)),
        (e.merge = (t) => {
            let n;
            return (
                (n = S(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
                        return $(this, "shape", n), n;
                    },
                    get catchall() {
                        return t._zod.def.catchall;
                    },
                    checks: [],
                })),
                F(e, n)
            );
        }),
        (e.pick = (t) =>
            (function (e, t) {
                let n = e._zod.def,
                    i = n.checks;
                if (i && i.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
                let r = S(e._zod.def, {
                    get shape() {
                        let e = {};
                        for (let i in t) {
                            if (!(i in n.shape)) throw Error(`Unrecognized key: "${i}"`);
                            t[i] && (e[i] = n.shape[i]);
                        }
                        return $(this, "shape", e), e;
                    },
                    checks: [],
                });
                return F(e, r);
            })(e, t)),
        (e.omit = (t) =>
            (function (e, t) {
                let n = e._zod.def,
                    i = n.checks;
                if (i && i.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
                let r = S(e._zod.def, {
                    get shape() {
                        let i = { ...e._zod.def.shape };
                        for (let e in t) {
                            if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
                            t[e] && delete i[e];
                        }
                        return $(this, "shape", i), i;
                    },
                    checks: [],
                });
                return F(e, r);
            })(e, t)),
        (e.partial = (...t) =>
            (function (e, t, n) {
                let i = t._zod.def.checks;
                if (i && i.length > 0)
                    throw Error(".partial() cannot be used on object schemas containing refinements");
                let r = S(t._zod.def, {
                    get shape() {
                        let i = t._zod.def.shape,
                            r = { ...i };
                        if (n)
                            for (let t in n) {
                                if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
                                n[t] && (r[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t]);
                            }
                        else for (let t in i) r[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t];
                        return $(this, "shape", r), r;
                    },
                    checks: [],
                });
                return F(t, r);
            })(so, e, t[0])),
        (e.required = (...t) => {
            var n;
            let i;
            return (
                (n = t[0]),
                (i = S(e._zod.def, {
                    get shape() {
                        let t = e._zod.def.shape,
                            i = { ...t };
                        if (n)
                            for (let e in n) {
                                if (!(e in i)) throw Error(`Unrecognized key: "${e}"`);
                                n[e] && (i[e] = new sg({ type: "nonoptional", innerType: t[e] }));
                            }
                        else for (let e in t) i[e] = new sg({ type: "nonoptional", innerType: t[e] });
                        return $(this, "shape", i), i;
                    },
                })),
                F(e, i)
            );
        });
});
function oC(e, t) {
    return new oM({ type: "object", shape: e ?? {}, ...D(t) });
}
function oU(e, t) {
    return new oM({ type: "object", shape: e, catchall: oE(), ...D(t) });
}
function oJ(e, t) {
    return new oM({ type: "object", shape: e, catchall: oN(), ...D(t) });
}
let oR = f("ZodUnion", (e, t) => {
    nm.init(e, t), rh.init(e, t), (e._zod.processJSONSchema = (t, n, i) => i0(e, t, n, i)), (e.options = t.options);
});
function oL(e, t) {
    return new oR({ type: "union", options: e, ...D(t) });
}
let oV = f("ZodXor", (e, t) => {
    oR.init(e, t), nv.init(e, t), (e._zod.processJSONSchema = (t, n, i) => i0(e, t, n, i)), (e.options = t.options);
});
function oB(e, t) {
    return new oV({ type: "union", options: e, inclusive: !1, ...D(t) });
}
let oq = f("ZodDiscriminatedUnion", (e, t) => {
    oR.init(e, t), n_.init(e, t);
});
function oW(e, t, n) {
    return new oq({ type: "union", options: t, discriminator: e, ...D(n) });
}
let oH = f("ZodIntersection", (e, t) => {
    ny.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r, o, s, a;
            return (
                (o = iX((r = e._zod.def).left, t, { ...i, path: [...i.path, "allOf", 0] })),
                (s = iX(r.right, t, { ...i, path: [...i.path, "allOf", 1] })),
                void (n.allOf = [
                    ...((a = (e) => "allOf" in e && 1 === Object.keys(e).length)(o) ? o.allOf : [o]),
                    ...(a(s) ? s.allOf : [s]),
                ])
            );
        });
});
function oX(e, t) {
    return new oH({ type: "intersection", left: e, right: t });
}
let oK = f("ZodTuple", (e, t) => {
    nz.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def;
                n.type = "array";
                let o = "draft-2020-12" === t.target ? "prefixItems" : "items",
                    s = "draft-2020-12" === t.target || "openapi-3.0" === t.target ? "items" : "additionalItems",
                    a = r.items.map((e, n) => iX(e, t, { ...i, path: [...i.path, o, n] })),
                    u = r.rest
                        ? iX(r.rest, t, {
                              ...i,
                              path: [...i.path, s, ...("openapi-3.0" === t.target ? [r.items.length] : [])],
                          })
                        : null;
                "draft-2020-12" === t.target
                    ? ((n.prefixItems = a), u && (n.items = u))
                    : "openapi-3.0" === t.target
                      ? ((n.items = { anyOf: a }),
                        u && n.items.anyOf.push(u),
                        (n.minItems = a.length),
                        u || (n.maxItems = a.length))
                      : ((n.items = a), u && (n.additionalItems = u));
                let { minimum: c, maximum: l } = e._zod.bag;
                "number" == typeof c && (n.minItems = c), "number" == typeof l && (n.maxItems = l);
            })(e, t, n, i)),
        (e.rest = (t) => e.clone({ ...e._zod.def, rest: t }));
});
function oG(e, t, n) {
    let i = t instanceof tO,
        r = i ? n : t;
    return new oK({ type: "tuple", items: e, rest: i ? t : null, ...D(r) });
}
let oY = f("ZodRecord", (e, t) => {
    nk.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def;
                n.type = "object";
                let o = r.keyType,
                    s = o._zod.bag,
                    a = s?.patterns;
                if ("loose" === r.mode && a && a.size > 0) {
                    let e = iX(r.valueType, t, { ...i, path: [...i.path, "patternProperties", "*"] });
                    for (let t of ((n.patternProperties = {}), a)) n.patternProperties[t.source] = e;
                } else
                    ("draft-07" === t.target || "draft-2020-12" === t.target) &&
                        (n.propertyNames = iX(r.keyType, t, { ...i, path: [...i.path, "propertyNames"] })),
                        (n.additionalProperties = iX(r.valueType, t, {
                            ...i,
                            path: [...i.path, "additionalProperties"],
                        }));
                let u = o._zod.values;
                if (u) {
                    let e = [...u].filter((e) => "string" == typeof e || "number" == typeof e);
                    e.length > 0 && (n.required = e);
                }
            })(e, t, n, i)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType);
});
function oQ(e, t, n) {
    return new oY({ type: "record", keyType: e, valueType: t, ...D(n) });
}
function o0(e, t, n) {
    let i = F(e);
    return (i._zod.values = void 0), new oY({ type: "record", keyType: i, valueType: t, ...D(n) });
}
function o1(e, t, n) {
    return new oY({ type: "record", keyType: e, valueType: t, mode: "loose", ...D(n) });
}
let o2 = f("ZodMap", (e, t) => {
    nZ.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Map cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType),
        (e.min = (...t) => e.check(iN(...t))),
        (e.nonempty = (t) => e.check(iN(1, t))),
        (e.max = (...t) => e.check(ix(...t))),
        (e.size = (...t) => e.check(iO(...t)));
});
function o4(e, t, n) {
    return new o2({ type: "map", keyType: e, valueType: t, ...D(n) });
}
let o9 = f("ZodSet", (e, t) => {
    nS.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Set cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (...t) => e.check(iN(...t))),
        (e.nonempty = (t) => e.check(iN(1, t))),
        (e.max = (...t) => e.check(ix(...t))),
        (e.size = (...t) => e.check(iO(...t)));
});
function o6(e, t) {
    return new o9({ type: "set", valueType: e, ...D(t) });
}
let o7 = f("ZodEnum", (e, t) => {
    nN.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            (r = v(e._zod.def.entries)).every((e) => "number" == typeof e) && (n.type = "number"),
                r.every((e) => "string" == typeof e) && (n.type = "string"),
                (n.enum = r);
        }),
        (e.enum = t.entries),
        (e.options = Object.values(t.entries));
    let n = new Set(Object.keys(t.entries));
    (e.extract = (e, i) => {
        let r = {};
        for (let i of e)
            if (n.has(i)) r[i] = t.entries[i];
            else throw Error(`Key ${i} not found in enum`);
        return new o7({ ...t, checks: [], ...D(i), entries: r });
    }),
        (e.exclude = (e, i) => {
            let r = { ...t.entries };
            for (let t of e)
                if (n.has(t)) delete r[t];
                else throw Error(`Key ${t} not found in enum`);
            return new o7({ ...t, checks: [], ...D(i), entries: r });
        });
});
function o3(e, t) {
    return new o7({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...D(t) });
}
function o5(e, t) {
    return new o7({ type: "enum", entries: e, ...D(t) });
}
let o8 = f("ZodLiteral", (e, t) => {
    nO.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def,
                    o = [];
                for (let e of r.values)
                    if (void 0 === e) {
                        if ("throw" === t.unrepresentable)
                            throw Error("Literal `undefined` cannot be represented in JSON Schema");
                    } else if ("bigint" == typeof e)
                        if ("throw" === t.unrepresentable)
                            throw Error("BigInt literals cannot be represented in JSON Schema");
                        else o.push(Number(e));
                    else o.push(e);
                if (0 === o.length);
                else if (1 === o.length) {
                    let e = o[0];
                    (n.type = null === e ? "null" : typeof e),
                        "draft-04" === t.target || "openapi-3.0" === t.target ? (n.enum = [e]) : (n.const = e);
                } else
                    o.every((e) => "number" == typeof e) && (n.type = "number"),
                        o.every((e) => "string" == typeof e) && (n.type = "string"),
                        o.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
                        o.every((e) => null === e) && (n.type = "null"),
                        (n.enum = o);
            })(e, t, n, 0)),
        (e.values = new Set(t.values)),
        Object.defineProperty(e, "value", {
            get() {
                if (t.values.length > 1)
                    throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
                return t.values[0];
            },
        });
});
function se(e, t) {
    return new o8({ type: "literal", values: Array.isArray(e) ? e : [e], ...D(t) });
}
let st = f("ZodFile", (e, t) => {
    nE.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = { type: "string", format: "binary", contentEncoding: "binary" },
                    { minimum: o, maximum: s, mime: a } = e._zod.bag;
                void 0 !== o && (r.minLength = o),
                    void 0 !== s && (r.maxLength = s),
                    a
                        ? 1 === a.length
                            ? ((r.contentMediaType = a[0]), Object.assign(n, r))
                            : (Object.assign(n, r), (n.anyOf = a.map((e) => ({ contentMediaType: e }))))
                        : Object.assign(n, r);
            })(e, 0, n, 0)),
        (e.min = (t, n) => e.check(iN(t, n))),
        (e.max = (t, n) => e.check(ix(t, n))),
        (e.mime = (t, n) => e.check(iU(Array.isArray(t) ? t : [t], n)));
});
function sn(e) {
    return new st({ type: "file", ...D(e) });
}
let si = f("ZodTransform", (e, t) => {
    nT.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Transforms cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e._zod.parse = (n, i) => {
            if ("backward" === i.direction) throw new h(e.constructor.name);
            n.addIssue = (i) => {
                "string" == typeof i
                    ? n.issues.push(W(i, n.value, t))
                    : (i.fatal && (i.continue = !1),
                      i.code ?? (i.code = "custom"),
                      i.input ?? (i.input = n.value),
                      i.inst ?? (i.inst = e),
                      n.issues.push(W(i)));
            };
            let r = t.transform(n.value, n);
            return r instanceof Promise ? r.then((e) => ((n.value = e), n)) : ((n.value = r), n);
        });
});
function sr(e) {
    return new si({ type: "transform", transform: e });
}
let so = f("ZodOptional", (e, t) => {
    nI.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => i1(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
});
function ss(e) {
    return new so({ type: "optional", innerType: e });
}
let sa = f("ZodExactOptional", (e, t) => {
    nP.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => i1(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
});
function su(e) {
    return new sa({ type: "optional", innerType: e });
}
let sc = f("ZodNullable", (e, t) => {
    nj.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r, o, s;
            return (
                (o = iX((r = e._zod.def).innerType, t, i)),
                (s = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                    ? ((s.ref = r.innerType), (n.nullable = !0))
                    : (n.anyOf = [o, { type: "null" }]))
            );
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sl(e) {
    return new sc({ type: "nullable", innerType: e });
}
function sd(e) {
    return ss(sl(e));
}
let sf = f("ZodDefault", (e, t) => {
    nF.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iX((r = e._zod.def).innerType, t, i),
                (t.seen.get(e).ref = r.innerType),
                (n.default = JSON.parse(JSON.stringify(r.defaultValue)));
        }),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap);
});
function sp(e, t) {
    return new sf({
        type: "default",
        innerType: e,
        get defaultValue() {
            return "function" == typeof t ? t() : A(t);
        },
    });
}
let sh = f("ZodPrefault", (e, t) => {
    nM.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iX((r = e._zod.def).innerType, t, i),
                (t.seen.get(e).ref = r.innerType),
                "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sm(e, t) {
    return new sh({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return "function" == typeof t ? t() : A(t);
        },
    });
}
let sg = f("ZodNonOptional", (e, t) => {
    nC.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iX((r = e._zod.def).innerType, t, i), (t.seen.get(e).ref = r.innerType);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sv(e, t) {
    return new sg({ type: "nonoptional", innerType: e, ...D(t) });
}
let s_ = f("ZodSuccess", (e, t) => {
    nJ.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sy(e) {
    return new s_({ type: "success", innerType: e });
}
let sw = f("ZodCatch", (e, t) => {
    nR.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r,
                    o = e._zod.def;
                iX(o.innerType, t, i), (t.seen.get(e).ref = o.innerType);
                try {
                    r = o.catchValue(void 0);
                } catch {
                    throw Error("Dynamic catch values are not supported in JSON Schema");
                }
                n.default = r;
            })(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap);
});
function sz(e, t) {
    return new sw({ type: "catch", innerType: e, catchValue: "function" == typeof t ? t : () => t });
}
let sb = f("ZodNaN", (e, t) => {
    nL.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("NaN cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sk(e) {
    return new sb({ type: "nan", ...D(e) });
}
let sZ = f("ZodPipe", (e, t) => {
    nV.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r, o;
            return (
                (r = e._zod.def),
                void (iX((o = "input" === t.io ? ("transform" === r.in._zod.def.type ? r.out : r.in) : r.out), t, i),
                (t.seen.get(e).ref = o))
            );
        }),
        (e.in = t.in),
        (e.out = t.out);
});
function s$(e, t) {
    return new sZ({ type: "pipe", in: e, out: t });
}
let sS = f("ZodCodec", (e, t) => {
    sZ.init(e, t), nq.init(e, t);
});
function sx(e, t, n) {
    return new sS({ type: "pipe", in: e, out: t, transform: n.decode, reverseTransform: n.encode });
}
let sN = f("ZodReadonly", (e, t) => {
    nX.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iX((r = e._zod.def).innerType, t, i), (t.seen.get(e).ref = r.innerType), (n.readOnly = !0);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sO(e) {
    return new sN({ type: "readonly", innerType: e });
}
let sE = f("ZodTemplateLiteral", (e, t) => {
    nG.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.pattern;
                if (!r) throw Error("Pattern not found in template literal");
                (n.type = "string"), (n.pattern = r.source);
            })(e, 0, n, 0));
});
function sT(e, t) {
    return new sE({ type: "template_literal", parts: e, ...D(t) });
}
let sA = f("ZodLazy", (e, t) => {
    n0.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iX((r = e._zod.innerType), t, i), (t.seen.get(e).ref = r);
        }),
        (e.unwrap = () => e._zod.def.getter());
});
function sI(e) {
    return new sA({ type: "lazy", getter: e });
}
let sP = f("ZodPromise", (e, t) => {
    nQ.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iX((r = e._zod.def).innerType, t, i), (t.seen.get(e).ref = r.innerType);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sj(e) {
    return new sP({ type: "promise", innerType: e });
}
let sF = f("ZodFunction", (e, t) => {
    nY.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Function types cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sD(e) {
    return new sF({
        type: "function",
        input: Array.isArray(e?.input) ? oG(e?.input) : (e?.input ?? oF(oN())),
        output: e?.output ?? oN(),
    });
}
let sM = f("ZodCustom", (e, t) => {
    n1.init(e, t),
        rh.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Custom types cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sC(e) {
    let t = new ti({ check: "custom" });
    return (t._zod.check = e), t;
}
function sU(e, t) {
    var n;
    let i;
    return (
        (n = e ?? (() => !0)),
        (i = D(t)).abort ?? (i.abort = !0),
        new sM({ type: "custom", check: "custom", fn: n, ...i })
    );
}
function sJ(e, t = {}) {
    return new sM({ type: "custom", check: "custom", fn: e, ...D(t) });
}
function sR(e) {
    var t;
    let n, i;
    return (
        (t = (t) => (
            (t.addIssue = (e) => {
                "string" == typeof e
                    ? t.issues.push(W(e, t.value, n._zod.def))
                    : (e.fatal && (e.continue = !1),
                      e.code ?? (e.code = "custom"),
                      e.input ?? (e.input = t.value),
                      e.inst ?? (e.inst = n),
                      e.continue ?? (e.continue = !n._zod.def.abort),
                      t.issues.push(W(e)));
            }),
            e(t.value, t)
        )),
        ((i = new ti({ check: "custom", ...D(void 0) }))._zod.check = t),
        (n = i)
    );
}
let sL = function (e) {
        let t = new ti({ check: "describe" });
        return (
            (t._zod.onattach = [
                (t) => {
                    let n = n4.get(t) ?? {};
                    n4.add(t, { ...n, description: e });
                },
            ]),
            (t._zod.check = () => {}),
            t
        );
    },
    sV = function (e) {
        let t = new ti({ check: "meta" });
        return (
            (t._zod.onattach = [
                (t) => {
                    let n = n4.get(t) ?? {};
                    n4.add(t, { ...n, ...e });
                },
            ]),
            (t._zod.check = () => {}),
            t
        );
    };
function sB(e, t = {}) {
    let n = new sM({ type: "custom", check: "custom", fn: (t) => t instanceof e, abort: !0, ...D(t) });
    return (
        (n._zod.bag.Class = e),
        (n._zod.check = (t) => {
            t.value instanceof e ||
                t.issues.push({
                    code: "invalid_type",
                    expected: e.name,
                    input: t.value,
                    inst: n,
                    path: [...(n._zod.def.path ?? [])],
                });
        }),
        n
    );
}
let sq = (...e) =>
    (function (e, t) {
        let n = D(t),
            i = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            r = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
        "sensitive" !== n.case &&
            ((i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
            (r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
        let o = new Set(i),
            s = new Set(r),
            a = e.Codec ?? nq,
            u = e.Boolean ?? t7,
            c = new a({
                type: "pipe",
                in: new (e.String ?? tE)({ type: "string", error: n.error }),
                out: new u({ type: "boolean", error: n.error }),
                transform: (e, t) => {
                    let i = e;
                    return (
                        "sensitive" !== n.case && (i = i.toLowerCase()),
                        !!o.has(i) ||
                            (!s.has(i) &&
                                (t.issues.push({
                                    code: "invalid_value",
                                    expected: "stringbool",
                                    values: [...o, ...s],
                                    input: t.value,
                                    inst: c,
                                    continue: !1,
                                }),
                                {}))
                    );
                },
                reverseTransform: (e, t) => (!0 === e ? i[0] || "true" : r[0] || "false"),
                error: n.error,
            });
        return c;
    })({ Codec: sS, Boolean: of, String: rg }, ...e);
function sW(e) {
    let t = sI(() => oL([rv(e), oo(), op(), oZ(), oF(t), oQ(rv(), t)]));
    return t;
}
function sH(e, t) {
    return s$(sr(e), t);
}
a || (a = {}),
    g({
        localeError:
            ((i = {
                string: { unit: "characters", verb: "to have" },
                file: { unit: "bytes", verb: "to have" },
                array: { unit: "items", verb: "to have" },
                set: { unit: "items", verb: "to have" },
                map: { unit: "entries", verb: "to have" },
            }),
            (r = {
                regex: "input",
                email: "email address",
                url: "URL",
                emoji: "emoji",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO datetime",
                date: "ISO date",
                time: "ISO time",
                duration: "ISO duration",
                ipv4: "IPv4 address",
                ipv6: "IPv6 address",
                mac: "MAC address",
                cidrv4: "IPv4 range",
                cidrv6: "IPv6 range",
                base64: "base64-encoded string",
                base64url: "base64url-encoded string",
                json_string: "JSON string",
                e164: "E.164 number",
                jwt: "JWT",
                template_literal: "input",
            }),
            (o = { nan: "NaN" }),
            (e) => {
                switch (e.code) {
                    case "invalid_type": {
                        let t = o[e.expected] ?? e.expected,
                            n = (function (e) {
                                let t = typeof e;
                                switch (t) {
                                    case "number":
                                        return Number.isNaN(e) ? "nan" : "number";
                                    case "object":
                                        if (null === e) return "null";
                                        if (Array.isArray(e)) return "array";
                                        if (
                                            e &&
                                            Object.getPrototypeOf(e) !== Object.prototype &&
                                            "constructor" in e &&
                                            e.constructor
                                        )
                                            return e.constructor.name;
                                }
                                return t;
                            })(e.input),
                            i = o[n] ?? n;
                        return `Invalid input: expected ${t}, received ${i}`;
                    }
                    case "invalid_value":
                        if (1 === e.values.length) return `Invalid input: expected ${M(e.values[0])}`;
                        return `Invalid option: expected one of ${_(e.values, "|")}`;
                    case "too_big": {
                        let t = e.inclusive ? "<=" : "<",
                            n = i[e.origin] ?? null;
                        if (n)
                            return `Too big: expected ${e.origin ?? "value"} to have ${t}${e.maximum.toString()} ${n.unit ?? "elements"}`;
                        return `Too big: expected ${e.origin ?? "value"} to be ${t}${e.maximum.toString()}`;
                    }
                    case "too_small": {
                        let t = e.inclusive ? ">=" : ">",
                            n = i[e.origin] ?? null;
                        if (n) return `Too small: expected ${e.origin} to have ${t}${e.minimum.toString()} ${n.unit}`;
                        return `Too small: expected ${e.origin} to be ${t}${e.minimum.toString()}`;
                    }
                    case "invalid_format":
                        if ("starts_with" === e.format) return `Invalid string: must start with "${e.prefix}"`;
                        if ("ends_with" === e.format) return `Invalid string: must end with "${e.suffix}"`;
                        if ("includes" === e.format) return `Invalid string: must include "${e.includes}"`;
                        if ("regex" === e.format) return `Invalid string: must match pattern ${e.pattern}`;
                        return `Invalid ${r[e.format] ?? e.format}`;
                    case "not_multiple_of":
                        return `Invalid number: must be a multiple of ${e.divisor}`;
                    case "unrecognized_keys":
                        return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${_(e.keys, ", ")}`;
                    case "invalid_key":
                        return `Invalid key in ${e.origin}`;
                    case "invalid_union":
                    default:
                        return "Invalid input";
                    case "invalid_element":
                        return `Invalid value in ${e.origin}`;
                }
            }),
    });
