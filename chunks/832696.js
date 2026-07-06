"use strict";
let i, r, s;
n.d(t, { Ikc: () => sV, YjP: () => rm, jgl: () => s0, k5n: () => s7 });
var a,
    o,
    l = {};
n.r(l),
    n.d(l, {
        base64: () => eL,
        base64url: () => eD,
        bigint: () => eB,
        boolean: () => eW,
        browserEmail: () => eN,
        cidrv4: () => ev,
        cidrv6: () => eb,
        cuid: () => es,
        cuid2: () => ea,
        date: () => eU,
        datetime: () => eV,
        domain: () => eP,
        duration: () => ed,
        e164: () => eM,
        email: () => eg,
        emoji: () => eC,
        extendedDuration: () => e_,
        guid: () => eh,
        hex: () => eq,
        hostname: () => ew,
        html5Email: () => eA,
        idnEmail: () => eS,
        integer: () => eH,
        ipv4: () => ey,
        ipv6: () => eO,
        ksuid: () => eu,
        lowercase: () => e$,
        mac: () => eR,
        md5_base64: () => eJ,
        md5_base64url: () => e0,
        md5_hex: () => eQ,
        nanoid: () => ec,
        null: () => eY,
        number: () => ej,
        rfc5322Email: () => eI,
        sha1_base64: () => e2,
        sha1_base64url: () => e3,
        sha1_hex: () => e1,
        sha256_base64: () => e4,
        sha256_base64url: () => e5,
        sha256_hex: () => e6,
        sha384_base64: () => e8,
        sha384_base64url: () => e9,
        sha384_hex: () => e7,
        sha512_base64: () => tt,
        sha512_base64url: () => tn,
        sha512_hex: () => te,
        string: () => eF,
        time: () => eG,
        ulid: () => eo,
        undefined: () => eK,
        unicodeEmail: () => eT,
        uppercase: () => ez,
        uuid: () => ef,
        uuid4: () => eE,
        uuid6: () => ep,
        uuid7: () => em,
        xid: () => el,
    });
var u = {};
n.r(u),
    n.d(u, {
        endsWith: () => iG,
        gt: () => iI,
        gte: () => iT,
        includes: () => iU,
        length: () => iw,
        lowercase: () => iM,
        lt: () => ig,
        lte: () => iA,
        maxLength: () => iL,
        maxSize: () => iR,
        mime: () => iF,
        minLength: () => iD,
        minSize: () => iv,
        multipleOf: () => iO,
        negative: () => iN,
        nonnegative: () => iy,
        nonpositive: () => iC,
        normalize: () => iH,
        overwrite: () => iB,
        positive: () => iS,
        property: () => iV,
        regex: () => iP,
        size: () => ib,
        slugify: () => iK,
        startsWith: () => ik,
        toLowerCase: () => iW,
        toUpperCase: () => iY,
        trim: () => ij,
        uppercase: () => ix,
    });
var c = {};
n.r(c),
    n.d(c, {
        ZodISODate: () => i6,
        ZodISODateTime: () => i2,
        ZodISODuration: () => i8,
        ZodISOTime: () => i5,
        date: () => i4,
        datetime: () => i3,
        duration: () => i9,
        time: () => i7,
    });
var d = {};
function _(e, t, n) {
    function i(n, i) {
        if (
            (n._zod ||
                Object.defineProperty(n, "_zod", { value: { def: i, constr: a, traits: new Set() }, enumerable: !1 }),
            n._zod.traits.has(e))
        )
            return;
        n._zod.traits.add(e), t(n, i);
        let r = a.prototype,
            s = Object.keys(r);
        for (let e = 0; e < s.length; e++) {
            let t = s[e];
            t in n || (n[t] = r[t].bind(n));
        }
    }
    let r = n?.Parent ?? Object;
    class s extends r {}
    function a(e) {
        var t;
        let r = n?.Parent ? new s() : this;
        for (let n of (i(r, e), (t = r._zod).deferred ?? (t.deferred = []), r._zod.deferred)) n();
        return r;
    }
    return (
        Object.defineProperty(s, "name", { value: e }),
        Object.defineProperty(a, "init", { value: i }),
        Object.defineProperty(a, Symbol.hasInstance, {
            value: (t) => (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
        }),
        Object.defineProperty(a, "name", { value: e }),
        a
    );
}
n.r(d),
    n.d(d, {
        ZodAny: () => sy,
        ZodArray: () => sx,
        ZodBase64: () => r1,
        ZodBase64URL: () => r3,
        ZodBigInt: () => sf,
        ZodBigIntFormat: () => sp,
        ZodBoolean: () => s_,
        ZodCIDRv4: () => rX,
        ZodCIDRv6: () => rJ,
        ZodCUID: () => rx,
        ZodCUID2: () => rk,
        ZodCatch: () => aI,
        ZodCodec: () => aO,
        ZodCustom: () => aG,
        ZodCustomStringFormat: () => r9,
        ZodDate: () => sP,
        ZodDefault: () => a_,
        ZodDiscriminatedUnion: () => sK,
        ZodE164: () => r4,
        ZodEmail: () => rA,
        ZodEmoji: () => rD,
        ZodEnum: () => s5,
        ZodExactOptional: () => ao,
        ZodFile: () => at,
        ZodFunction: () => aU,
        ZodGUID: () => rT,
        ZodIPv4: () => rY,
        ZodIPv6: () => rq,
        ZodIntersection: () => sz,
        ZodJWT: () => r7,
        ZodKSUID: () => rj,
        ZodLazy: () => aw,
        ZodLiteral: () => s9,
        ZodMAC: () => r$,
        ZodMap: () => s2,
        ZodNaN: () => aS,
        ZodNanoID: () => rP,
        ZodNever: () => sb,
        ZodNonOptional: () => ap,
        ZodNull: () => sN,
        ZodNullable: () => au,
        ZodNumber: () => sr,
        ZodNumberFormat: () => sa,
        ZodObject: () => sG,
        ZodOptional: () => as,
        ZodPipe: () => aC,
        ZodPrefault: () => af,
        ZodPromise: () => aM,
        ZodReadonly: () => av,
        ZodRecord: () => sQ,
        ZodSet: () => s6,
        ZodString: () => rp,
        ZodStringFormat: () => rg,
        ZodSuccess: () => ag,
        ZodSymbol: () => sA,
        ZodTemplateLiteral: () => aL,
        ZodTransform: () => ai,
        ZodTuple: () => sZ,
        ZodType: () => rf,
        ZodULID: () => rV,
        ZodURL: () => rv,
        ZodUUID: () => rN,
        ZodUndefined: () => sT,
        ZodUnion: () => sH,
        ZodUnknown: () => sR,
        ZodVoid: () => sD,
        ZodXID: () => rB,
        ZodXor: () => sW,
        _ZodString: () => rE,
        _default: () => ah,
        _function: () => ak,
        any: () => sO,
        array: () => sU,
        base64: () => r2,
        base64url: () => r6,
        bigint: () => sE,
        boolean: () => sh,
        catch: () => aT,
        check: () => aV,
        cidrv4: () => rQ,
        cidrv6: () => r0,
        codec: () => aR,
        cuid: () => rU,
        cuid2: () => rG,
        custom: () => aF,
        date: () => sM,
        describe: () => aj,
        discriminatedUnion: () => s$,
        e164: () => r5,
        email: () => rI,
        emoji: () => rw,
        enum: () => s7,
        exactOptional: () => al,
        file: () => an,
        float32: () => sl,
        float64: () => su,
        function: () => ak,
        guid: () => rS,
        hash: () => si,
        hex: () => sn,
        hostname: () => st,
        httpUrl: () => rL,
        instanceof: () => aY,
        int: () => so,
        int32: () => sc,
        int64: () => sm,
        intersection: () => sq,
        ipv4: () => rK,
        ipv6: () => rZ,
        json: () => a$,
        jwt: () => r8,
        keyof: () => sk,
        ksuid: () => rW,
        lazy: () => aP,
        literal: () => ae,
        looseObject: () => sB,
        looseRecord: () => s1,
        mac: () => rz,
        map: () => s3,
        meta: () => aW,
        nan: () => aN,
        nanoid: () => rM,
        nativeEnum: () => s8,
        never: () => sL,
        nonoptional: () => am,
        null: () => sC,
        nullable: () => ac,
        nullish: () => ad,
        number: () => ss,
        object: () => sV,
        optional: () => aa,
        partialRecord: () => s0,
        pipe: () => ay,
        prefault: () => aE,
        preprocess: () => az,
        promise: () => ax,
        readonly: () => ab,
        record: () => sJ,
        refine: () => aB,
        set: () => s4,
        strictObject: () => sF,
        string: () => rm,
        stringFormat: () => se,
        stringbool: () => aK,
        success: () => aA,
        superRefine: () => aH,
        symbol: () => sI,
        templateLiteral: () => aD,
        transform: () => ar,
        tuple: () => sX,
        uint32: () => sd,
        uint64: () => sg,
        ulid: () => rF,
        undefined: () => sS,
        union: () => sj,
        unknown: () => sv,
        url: () => rb,
        uuid: () => rC,
        uuidv4: () => ry,
        uuidv6: () => rO,
        uuidv7: () => rR,
        void: () => sw,
        xid: () => rH,
        xor: () => sY,
    }),
    Object.freeze({ status: "aborted" }),
    Symbol("zod_brand");
class h extends Error {
    constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
class f extends Error {
    constructor(e) {
        super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError");
    }
}
let E = {};
function p(e) {
    return e && Object.assign(E, e), E;
}
function m(e) {
    let t = Object.values(e).filter((e) => "number" == typeof e);
    return Object.entries(e)
        .filter(([e, n]) => -1 === t.indexOf(+e))
        .map(([e, t]) => t);
}
function g(e, t = "|") {
    return e.map((e) => G(e)).join(t);
}
function A(e, t) {
    return "bigint" == typeof t ? t.toString() : t;
}
function I(e) {
    return {
        get value() {
            {
                let t = e();
                return Object.defineProperty(this, "value", { value: t }), t;
            }
        },
    };
}
function T(e) {
    return null == e;
}
function S(e) {
    let t = +!!e.startsWith("^"),
        n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
}
let N = Symbol("evaluating");
function C(e, t, n) {
    let i;
    Object.defineProperty(e, t, {
        get() {
            if (i !== N) return void 0 === i && ((i = N), (i = n())), i;
        },
        set(n) {
            Object.defineProperty(e, t, { value: n });
        },
        configurable: !0,
    });
}
function y(e, t, n) {
    Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function O(...e) {
    let t = {};
    for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
    return Object.defineProperties({}, t);
}
function R(e) {
    return JSON.stringify(e);
}
let v = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function b(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
let L = I(() => {
    if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return Function(""), !0;
    } catch (e) {
        return !1;
    }
});
function D(e) {
    if (!1 === b(e)) return !1;
    let t = e.constructor;
    if (void 0 === t || "function" != typeof t) return !0;
    let n = t.prototype;
    return !1 !== b(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function w(e) {
    return D(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
let P = new Set(["string", "number", "symbol"]),
    M = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function x(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function U(e, t, n) {
    let i = new e._zod.constr(t ?? e._zod.def);
    return (!t || n?.parent) && (i._zod.parent = e), i;
}
function k(e) {
    if (!e) return {};
    if ("string" == typeof e) return { error: () => e };
    if (e?.message !== void 0) {
        if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
        e.error = e.message;
    }
    return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e;
}
function G(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
let V = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-0x80000000, 0x7fffffff],
        uint32: [0, 0xffffffff],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
    },
    F = {
        int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
        uint64: [BigInt(0), BigInt("18446744073709551615")],
    };
function B(e, t = 0) {
    if (!0 === e.aborted) return !0;
    for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
    return !1;
}
function H(e, t) {
    return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
}
function j(e) {
    return "string" == typeof e ? e : e?.message;
}
function W(e, t, n) {
    let i = { ...e, path: e.path ?? [] };
    return (
        e.message ||
            (i.message =
                j(e.inst?._zod.def?.error?.(e)) ??
                j(t?.error?.(e)) ??
                j(n.customError?.(e)) ??
                j(n.localeError?.(e)) ??
                "Invalid input"),
        delete i.inst,
        delete i.continue,
        t?.reportInput || delete i.input,
        i
    );
}
function Y(e) {
    return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function K(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function $(...e) {
    let [t, n, i] = e;
    return "string" == typeof t ? { message: t, code: "custom", input: n, inst: i } : { ...t };
}
let z = (e, t) => {
        (e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, A, 2)),
            Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 });
    },
    q = _("$ZodError", z),
    Z = _("$ZodError", z, { Parent: Error }),
    X = (e) => (t, n, i, r) => {
        let s = i ? Object.assign(i, { async: !1 }) : { async: !1 },
            a = t._zod.run({ value: n, issues: [] }, s);
        if (a instanceof Promise) throw new h();
        if (a.issues.length) {
            let t = new (r?.Err ?? e)(a.issues.map((e) => W(e, s, p())));
            throw (v(t, r?.callee), t);
        }
        return a.value;
    },
    Q = X(Z),
    J = (e) => async (t, n, i, r) => {
        let s = i ? Object.assign(i, { async: !0 }) : { async: !0 },
            a = t._zod.run({ value: n, issues: [] }, s);
        if ((a instanceof Promise && (a = await a), a.issues.length)) {
            let t = new (r?.Err ?? e)(a.issues.map((e) => W(e, s, p())));
            throw (v(t, r?.callee), t);
        }
        return a.value;
    },
    ee = J(Z),
    et = (e) => (t, n, i) => {
        let r = i ? { ...i, async: !1 } : { async: !1 },
            s = t._zod.run({ value: n, issues: [] }, r);
        if (s instanceof Promise) throw new h();
        return s.issues.length
            ? { success: !1, error: new (e ?? q)(s.issues.map((e) => W(e, r, p()))) }
            : { success: !0, data: s.value };
    },
    en = et(Z),
    ei = (e) => async (t, n, i) => {
        let r = i ? Object.assign(i, { async: !0 }) : { async: !0 },
            s = t._zod.run({ value: n, issues: [] }, r);
        return (
            s instanceof Promise && (s = await s),
            s.issues.length
                ? { success: !1, error: new e(s.issues.map((e) => W(e, r, p()))) }
                : { success: !0, data: s.value }
        );
    },
    er = ei(Z),
    es = /^[cC][^\s-]{8,}$/,
    ea = /^[0-9a-z]+$/,
    eo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    el = /^[0-9a-vA-V]{20}$/,
    eu = /^[A-Za-z0-9]{27}$/,
    ec = /^[a-zA-Z0-9_-]{21}$/,
    ed = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    e_ =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    eh = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    ef = (e) =>
        e
            ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    eE = ef(4),
    ep = ef(6),
    em = ef(7),
    eg = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    eA =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    eI =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    eT = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
    eS = eT,
    eN =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function eC() {
    return RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
let ey =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    eO =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    eR = (e) => {
        let t = x(e ?? ":");
        return RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
    },
    ev =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    eb =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    eL = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    eD = /^[A-Za-z0-9_-]*$/,
    ew =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    eP = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    eM = /^\+[1-9]\d{6,14}$/,
    ex =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    eU = RegExp(`^${ex}$`);
function ek(e) {
    let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e.precision
        ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function eG(e) {
    return RegExp(`^${ek(e)}$`);
}
function eV(e) {
    let t = ek({ precision: e.precision }),
        n = ["Z"];
    e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    let i = `${t}(?:${n.join("|")})`;
    return RegExp(`^${ex}T(?:${i})$`);
}
let eF = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
        return RegExp(`^${t}$`);
    },
    eB = /^-?\d+n?$/,
    eH = /^-?\d+$/,
    ej = /^-?\d+(?:\.\d+)?$/,
    eW = /^(?:true|false)$/i,
    eY = /^null$/i,
    eK = /^undefined$/i,
    e$ = /^[^A-Z]*$/,
    ez = /^[^a-z]*$/,
    eq = /^[0-9a-fA-F]*$/;
function eZ(e, t) {
    return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function eX(e) {
    return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
let eQ = /^[0-9a-fA-F]{32}$/,
    eJ = eZ(22, "=="),
    e0 = eX(22),
    e1 = /^[0-9a-fA-F]{40}$/,
    e2 = eZ(27, "="),
    e3 = eX(27),
    e6 = /^[0-9a-fA-F]{64}$/,
    e4 = eZ(43, "="),
    e5 = eX(43),
    e7 = /^[0-9a-fA-F]{96}$/,
    e8 = eZ(64, ""),
    e9 = eX(64),
    te = /^[0-9a-fA-F]{128}$/,
    tt = eZ(86, "=="),
    tn = eX(86),
    ti = _("$ZodCheck", (e, t) => {
        var n;
        e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []);
    }),
    tr = { number: "number", bigint: "bigint", object: "date" },
    ts = _("$ZodCheckLessThan", (e, t) => {
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
    ta = _("$ZodCheckGreaterThan", (e, t) => {
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
    to = _("$ZodCheckMultipleOf", (e, t) => {
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
                          let s = n > r ? n : r;
                          return (
                              (Number.parseInt(e.toFixed(s).replace(".", "")) %
                                  Number.parseInt(t.toFixed(s).replace(".", ""))) /
                              10 ** s
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
    tl = _("$ZodCheckNumberFormat", (e, t) => {
        ti.init(e, t), (t.format = t.format || "float64");
        let n = t.format?.includes("int"),
            i = n ? "int" : "number",
            [r, s] = V[t.format];
        e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.format = t.format), (i.minimum = r), (i.maximum = s), n && (i.pattern = eH);
        }),
            (e._zod.check = (a) => {
                let o = a.value;
                if (n) {
                    if (!Number.isInteger(o))
                        return void a.issues.push({
                            expected: i,
                            format: t.format,
                            code: "invalid_type",
                            continue: !1,
                            input: o,
                            inst: e,
                        });
                    if (!Number.isSafeInteger(o))
                        return void (o > 0
                            ? a.issues.push({
                                  input: o,
                                  code: "too_big",
                                  maximum: Number.MAX_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: i,
                                  inclusive: !0,
                                  continue: !t.abort,
                              })
                            : a.issues.push({
                                  input: o,
                                  code: "too_small",
                                  minimum: Number.MIN_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: i,
                                  inclusive: !0,
                                  continue: !t.abort,
                              }));
                }
                o < r &&
                    a.issues.push({
                        origin: "number",
                        input: o,
                        code: "too_small",
                        minimum: r,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    o > s &&
                        a.issues.push({
                            origin: "number",
                            input: o,
                            code: "too_big",
                            maximum: s,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        });
            });
    }),
    tu = _("$ZodCheckBigIntFormat", (e, t) => {
        ti.init(e, t);
        let [n, i] = F[t.format];
        e._zod.onattach.push((e) => {
            let r = e._zod.bag;
            (r.format = t.format), (r.minimum = n), (r.maximum = i);
        }),
            (e._zod.check = (r) => {
                let s = r.value;
                s < n &&
                    r.issues.push({
                        origin: "bigint",
                        input: s,
                        code: "too_small",
                        minimum: n,
                        inclusive: !0,
                        inst: e,
                        continue: !t.abort,
                    }),
                    s > i &&
                        r.issues.push({
                            origin: "bigint",
                            input: s,
                            code: "too_big",
                            maximum: i,
                            inclusive: !0,
                            inst: e,
                            continue: !t.abort,
                        });
            });
    }),
    tc = _("$ZodCheckMaxSize", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !T(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.maximum ?? 1 / 0;
                t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                i.size <= t.maximum ||
                    n.issues.push({
                        origin: Y(i),
                        code: "too_big",
                        maximum: t.maximum,
                        inclusive: !0,
                        input: i,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    td = _("$ZodCheckMinSize", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !T(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.minimum ?? -1 / 0;
                t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                i.size >= t.minimum ||
                    n.issues.push({
                        origin: Y(i),
                        code: "too_small",
                        minimum: t.minimum,
                        inclusive: !0,
                        input: i,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    t_ = _("$ZodCheckSizeEquals", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !T(t) && void 0 !== t.size;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.minimum = t.size), (n.maximum = t.size), (n.size = t.size);
            }),
            (e._zod.check = (n) => {
                let i = n.value,
                    r = i.size;
                if (r === t.size) return;
                let s = r > t.size;
                n.issues.push({
                    origin: Y(i),
                    ...(s ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            });
    }),
    th = _("$ZodCheckMaxLength", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !T(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.maximum ?? 1 / 0;
                t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                if (i.length <= t.maximum) return;
                let r = K(i);
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
    tf = _("$ZodCheckMinLength", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !T(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag.minimum ?? -1 / 0;
                t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
                let i = n.value;
                if (i.length >= t.minimum) return;
                let r = K(i);
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
    tE = _("$ZodCheckLengthEquals", (e, t) => {
        var n;
        ti.init(e, t),
            (n = e._zod.def).when ??
                (n.when = (e) => {
                    let t = e.value;
                    return !T(t) && void 0 !== t.length;
                }),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                (n.minimum = t.length), (n.maximum = t.length), (n.length = t.length);
            }),
            (e._zod.check = (n) => {
                let i = n.value,
                    r = i.length;
                if (r === t.length) return;
                let s = K(i),
                    a = r > t.length;
                n.issues.push({
                    origin: s,
                    ...(a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
                    inclusive: !0,
                    exact: !0,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                });
            });
    }),
    tp = _("$ZodCheckStringFormat", (e, t) => {
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
    tm = _("$ZodCheckRegex", (e, t) => {
        tp.init(e, t),
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
    tg = _("$ZodCheckLowerCase", (e, t) => {
        t.pattern ?? (t.pattern = e$), tp.init(e, t);
    }),
    tA = _("$ZodCheckUpperCase", (e, t) => {
        t.pattern ?? (t.pattern = ez), tp.init(e, t);
    }),
    tI = _("$ZodCheckIncludes", (e, t) => {
        ti.init(e, t);
        let n = x(t.includes),
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
    tT = _("$ZodCheckStartsWith", (e, t) => {
        ti.init(e, t);
        let n = RegExp(`^${x(t.prefix)}.*`);
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
    tS = _("$ZodCheckEndsWith", (e, t) => {
        ti.init(e, t);
        let n = RegExp(`.*${x(t.suffix)}$`);
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
function tN(e, t, n) {
    e.issues.length && t.issues.push(...H(n, e.issues));
}
let tC = _("$ZodCheckProperty", (e, t) => {
        ti.init(e, t),
            (e._zod.check = (e) => {
                let n = t.schema._zod.run({ value: e.value[t.property], issues: [] }, {});
                if (n instanceof Promise) return n.then((n) => tN(n, e, t.property));
                tN(n, e, t.property);
            });
    }),
    ty = _("$ZodCheckMimeType", (e, t) => {
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
    tO = _("$ZodCheckOverwrite", (e, t) => {
        ti.init(e, t),
            (e._zod.check = (e) => {
                e.value = t.tx(e.value);
            });
    });
class tR {
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
let tv = { major: 4, minor: 3, patch: 6 },
    tb = _("$ZodType", (e, t) => {
        var n;
        e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = tv);
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
                        r = B(e);
                    for (let s of t) {
                        if (s._zod.def.when) {
                            if (!s._zod.def.when(e)) continue;
                        } else if (r) continue;
                        let t = e.issues.length,
                            a = s._zod.check(e);
                        if (a instanceof Promise && n?.async === !1) throw new h();
                        if (i || a instanceof Promise)
                            i = (i ?? Promise.resolve()).then(async () => {
                                await a, e.issues.length !== t && (r || (r = B(e, t)));
                            });
                        else {
                            if (e.issues.length === t) continue;
                            r || (r = B(e, t));
                        }
                    }
                    return i ? i.then(() => e) : e;
                },
                n = (n, r, s) => {
                    if (B(n)) return (n.aborted = !0), n;
                    let a = t(r, i, s);
                    if (a instanceof Promise) {
                        if (!1 === s.async) throw new h();
                        return a.then((t) => e._zod.parse(t, s));
                    }
                    return e._zod.parse(a, s);
                };
            e._zod.run = (r, s) => {
                if (s.skipChecks) return e._zod.parse(r, s);
                if ("backward" === s.direction) {
                    let t = e._zod.parse({ value: r.value, issues: [] }, { ...s, skipChecks: !0 });
                    return t instanceof Promise ? t.then((e) => n(e, r, s)) : n(t, r, s);
                }
                let a = e._zod.parse(r, s);
                if (a instanceof Promise) {
                    if (!1 === s.async) throw new h();
                    return a.then((e) => t(e, i, s));
                }
                return t(a, i, s);
            };
        }
        C(e, "~standard", () => ({
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
    tL = _("$ZodString", (e, t) => {
        tb.init(e, t),
            (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? eF(e._zod.bag)),
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
    tD = _("$ZodStringFormat", (e, t) => {
        tp.init(e, t), tL.init(e, t);
    }),
    tw = _("$ZodGUID", (e, t) => {
        t.pattern ?? (t.pattern = eh), tD.init(e, t);
    }),
    tP = _("$ZodUUID", (e, t) => {
        if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
            if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = ef(e));
        } else t.pattern ?? (t.pattern = ef());
        tD.init(e, t);
    }),
    tM = _("$ZodEmail", (e, t) => {
        t.pattern ?? (t.pattern = eg), tD.init(e, t);
    }),
    tx = _("$ZodURL", (e, t) => {
        tD.init(e, t),
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
    tU = _("$ZodEmoji", (e, t) => {
        t.pattern ?? (t.pattern = eC()), tD.init(e, t);
    }),
    tk = _("$ZodNanoID", (e, t) => {
        t.pattern ?? (t.pattern = ec), tD.init(e, t);
    }),
    tG = _("$ZodCUID", (e, t) => {
        t.pattern ?? (t.pattern = es), tD.init(e, t);
    }),
    tV = _("$ZodCUID2", (e, t) => {
        t.pattern ?? (t.pattern = ea), tD.init(e, t);
    }),
    tF = _("$ZodULID", (e, t) => {
        t.pattern ?? (t.pattern = eo), tD.init(e, t);
    }),
    tB = _("$ZodXID", (e, t) => {
        t.pattern ?? (t.pattern = el), tD.init(e, t);
    }),
    tH = _("$ZodKSUID", (e, t) => {
        t.pattern ?? (t.pattern = eu), tD.init(e, t);
    }),
    tj = _("$ZodISODateTime", (e, t) => {
        t.pattern ?? (t.pattern = eV(t)), tD.init(e, t);
    }),
    tW = _("$ZodISODate", (e, t) => {
        t.pattern ?? (t.pattern = eU), tD.init(e, t);
    }),
    tY = _("$ZodISOTime", (e, t) => {
        t.pattern ?? (t.pattern = eG(t)), tD.init(e, t);
    }),
    tK = _("$ZodISODuration", (e, t) => {
        t.pattern ?? (t.pattern = ed), tD.init(e, t);
    }),
    t$ = _("$ZodIPv4", (e, t) => {
        t.pattern ?? (t.pattern = ey), tD.init(e, t), (e._zod.bag.format = "ipv4");
    }),
    tz = _("$ZodIPv6", (e, t) => {
        t.pattern ?? (t.pattern = eO),
            tD.init(e, t),
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
    tq = _("$ZodMAC", (e, t) => {
        t.pattern ?? (t.pattern = eR(t.delimiter)), tD.init(e, t), (e._zod.bag.format = "mac");
    }),
    tZ = _("$ZodCIDRv4", (e, t) => {
        t.pattern ?? (t.pattern = ev), tD.init(e, t);
    }),
    tX = _("$ZodCIDRv6", (e, t) => {
        t.pattern ?? (t.pattern = eb),
            tD.init(e, t),
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
function tQ(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return atob(e), !0;
    } catch {
        return !1;
    }
}
let tJ = _("$ZodBase64", (e, t) => {
        t.pattern ?? (t.pattern = eL),
            tD.init(e, t),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (n) => {
                tQ(n.value) ||
                    n.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                    });
            });
    }),
    t0 = _("$ZodBase64URL", (e, t) => {
        t.pattern ?? (t.pattern = eD),
            tD.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
                !(function (e) {
                    if (!eD.test(e)) return !1;
                    let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                    return tQ(t.padEnd(4 * Math.ceil(t.length / 4), "="));
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
    t1 = _("$ZodE164", (e, t) => {
        t.pattern ?? (t.pattern = eM), tD.init(e, t);
    }),
    t2 = _("$ZodJWT", (e, t) => {
        tD.init(e, t),
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
    t3 = _("$ZodCustomStringFormat", (e, t) => {
        tD.init(e, t),
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
    t6 = _("$ZodNumber", (e, t) => {
        tb.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? ej),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = Number(n.value);
                    } catch (e) {}
                let r = n.value;
                if ("number" == typeof r && !Number.isNaN(r) && Number.isFinite(r)) return n;
                let s =
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
                        ...(s ? { received: s } : {}),
                    }),
                    n
                );
            });
    }),
    t4 = _("$ZodNumberFormat", (e, t) => {
        tl.init(e, t), t6.init(e, t);
    }),
    t5 = _("$ZodBoolean", (e, t) => {
        tb.init(e, t),
            (e._zod.pattern = eW),
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
    t7 = _("$ZodBigInt", (e, t) => {
        tb.init(e, t),
            (e._zod.pattern = eB),
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
    t8 = _("$ZodBigIntFormat", (e, t) => {
        tu.init(e, t), t7.init(e, t);
    }),
    t9 = _("$ZodSymbol", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return (
                    "symbol" == typeof i ||
                        t.issues.push({ expected: "symbol", code: "invalid_type", input: i, inst: e }),
                    t
                );
            });
    }),
    ne = _("$ZodUndefined", (e, t) => {
        tb.init(e, t),
            (e._zod.pattern = eK),
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
    nt = _("$ZodNull", (e, t) => {
        tb.init(e, t),
            (e._zod.pattern = eY),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return null === i || t.issues.push({ expected: "null", code: "invalid_type", input: i, inst: e }), t;
            });
    }),
    nn = _("$ZodAny", (e, t) => {
        tb.init(e, t), (e._zod.parse = (e) => e);
    }),
    ni = _("$ZodUnknown", (e, t) => {
        tb.init(e, t), (e._zod.parse = (e) => e);
    }),
    nr = _("$ZodNever", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (t, n) => (
                t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }), t
            ));
    }),
    ns = _("$ZodVoid", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return void 0 === i || t.issues.push({ expected: "void", code: "invalid_type", input: i, inst: e }), t;
            });
    }),
    na = _("$ZodDate", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (n, i) => {
                if (t.coerce)
                    try {
                        n.value = new Date(n.value);
                    } catch (e) {}
                let r = n.value,
                    s = r instanceof Date;
                return (
                    (s && !Number.isNaN(r.getTime())) ||
                        n.issues.push({
                            expected: "date",
                            code: "invalid_type",
                            input: r,
                            ...(s ? { received: "Invalid Date" } : {}),
                            inst: e,
                        }),
                    n
                );
            });
    });
function no(e, t, n) {
    e.issues.length && t.issues.push(...H(n, e.issues)), (t.value[n] = e.value);
}
let nl = _("$ZodArray", (e, t) => {
    tb.init(e, t),
        (e._zod.parse = (n, i) => {
            let r = n.value;
            if (!Array.isArray(r))
                return n.issues.push({ expected: "array", code: "invalid_type", input: r, inst: e }), n;
            n.value = Array(r.length);
            let s = [];
            for (let e = 0; e < r.length; e++) {
                let a = r[e],
                    o = t.element._zod.run({ value: a, issues: [] }, i);
                o instanceof Promise ? s.push(o.then((t) => no(t, n, e))) : no(o, n, e);
            }
            return s.length ? Promise.all(s).then(() => n) : n;
        });
});
function nu(e, t, n, i, r) {
    if (e.issues.length) {
        if (r && !(n in i)) return;
        t.issues.push(...H(n, e.issues));
    }
    void 0 === e.value ? n in i && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function nc(e) {
    var t;
    let n = Object.keys(e.shape);
    for (let t of n)
        if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${t}": expected a Zod schema`);
    let i = Object.keys((t = e.shape)).filter((e) => "optional" === t[e]._zod.optin && "optional" === t[e]._zod.optout);
    return { ...e, keys: n, keySet: new Set(n), numKeys: n.length, optionalKeys: new Set(i) };
}
function nd(e, t, n, i, r, s) {
    let a = [],
        o = r.keySet,
        l = r.catchall._zod,
        u = l.def.type,
        c = "optional" === l.optout;
    for (let r in t) {
        if (o.has(r)) continue;
        if ("never" === u) {
            a.push(r);
            continue;
        }
        let s = l.run({ value: t[r], issues: [] }, i);
        s instanceof Promise ? e.push(s.then((e) => nu(e, n, r, t, c))) : nu(s, n, r, t, c);
    }
    return (a.length && n.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: s }), e.length)
        ? Promise.all(e).then(() => n)
        : n;
}
let n_ = _("$ZodObject", (e, t) => {
        let n;
        tb.init(e, t);
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
        let r = I(() => nc(t));
        C(e._zod, "propValues", () => {
            let e = t.shape,
                n = {};
            for (let t in e) {
                let i = e[t]._zod;
                if (i.values) for (let e of (n[t] ?? (n[t] = new Set()), i.values)) n[t].add(e);
            }
            return n;
        });
        let s = t.catchall;
        e._zod.parse = (t, i) => {
            n ?? (n = r.value);
            let a = t.value;
            if (!b(a)) return t.issues.push({ expected: "object", code: "invalid_type", input: a, inst: e }), t;
            t.value = {};
            let o = [],
                l = n.shape;
            for (let e of n.keys) {
                let n = l[e],
                    r = "optional" === n._zod.optout,
                    s = n._zod.run({ value: a[e], issues: [] }, i);
                s instanceof Promise ? o.push(s.then((n) => nu(n, t, e, a, r))) : nu(s, t, e, a, r);
            }
            return s ? nd(o, a, t, i, r.value, e) : o.length ? Promise.all(o).then(() => t) : t;
        };
    }),
    nh = _("$ZodObjectJIT", (e, t) => {
        let n, i;
        n_.init(e, t);
        let r = e._zod.parse,
            s = I(() => nc(t)),
            a = !E.jitless,
            o = a && L.value,
            l = t.catchall;
        e._zod.parse = (u, c) => {
            i ?? (i = s.value);
            let d = u.value;
            return b(d)
                ? a && o && c?.async === !1 && !0 !== c.jitless
                    ? (n ||
                          (n = ((e) => {
                              let t = new tR(["shape", "payload", "ctx"]),
                                  n = s.value,
                                  i = (e) => {
                                      let t = R(e);
                                      return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                                  };
                              t.write("const input = payload.value;");
                              let r = Object.create(null),
                                  a = 0;
                              for (let e of n.keys) r[e] = `key_${a++}`;
                              for (let s of (t.write("const newResult = {};"), n.keys)) {
                                  let n = r[s],
                                      a = R(s),
                                      o = e[s],
                                      l = o?._zod?.optout === "optional";
                                  t.write(`const ${n} = ${i(s)};`),
                                      l
                                          ? t.write(`
        if (${n}.issues.length) {
          if (${a} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${a}, ...iss.path] : [${a}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${a} in input) {
            newResult[${a}] = undefined;
          }
        } else {
          newResult[${a}] = ${n}.value;
        }
        
      `)
                                          : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${a}, ...iss.path] : [${a}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${a} in input) {
            newResult[${a}] = undefined;
          }
        } else {
          newResult[${a}] = ${n}.value;
        }
        
      `);
                              }
                              t.write("payload.value = newResult;"), t.write("return payload;");
                              let o = t.compile();
                              return (t, n) => o(e, t, n);
                          })(t.shape)),
                      (u = n(u, c)),
                      l)
                        ? nd([], d, u, c, i, e)
                        : u
                    : r(u, c)
                : (u.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }), u);
        };
    });
function nf(e, t, n, i) {
    for (let n of e) if (0 === n.issues.length) return (t.value = n.value), t;
    let r = e.filter((e) => !B(e));
    return 1 === r.length
        ? ((t.value = r[0].value), r[0])
        : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => W(e, i, p()))),
          }),
          t);
}
let nE = _("$ZodUnion", (e, t) => {
    tb.init(e, t),
        C(e._zod, "optin", () => (t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0)),
        C(e._zod, "optout", () => (t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
        C(e._zod, "values", () => {
            if (t.options.every((e) => e._zod.values))
                return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
        }),
        C(e._zod, "pattern", () => {
            if (t.options.every((e) => e._zod.pattern)) {
                let e = t.options.map((e) => e._zod.pattern);
                return RegExp(`^(${e.map((e) => S(e.source)).join("|")})$`);
            }
        });
    let n = 1 === t.options.length,
        i = t.options[0]._zod.run;
    e._zod.parse = (r, s) => {
        if (n) return i(r, s);
        let a = !1,
            o = [];
        for (let e of t.options) {
            let t = e._zod.run({ value: r.value, issues: [] }, s);
            if (t instanceof Promise) o.push(t), (a = !0);
            else {
                if (0 === t.issues.length) return t;
                o.push(t);
            }
        }
        return a ? Promise.all(o).then((t) => nf(t, r, e, s)) : nf(o, r, e, s);
    };
});
function np(e, t, n, i) {
    let r = e.filter((e) => 0 === e.issues.length);
    return (
        1 === r.length
            ? (t.value = r[0].value)
            : 0 === r.length
              ? t.issues.push({
                    code: "invalid_union",
                    input: t.value,
                    inst: n,
                    errors: e.map((e) => e.issues.map((e) => W(e, i, p()))),
                })
              : t.issues.push({ code: "invalid_union", input: t.value, inst: n, errors: [], inclusive: !1 }),
        t
    );
}
let nm = _("$ZodXor", (e, t) => {
        nE.init(e, t), (t.inclusive = !1);
        let n = 1 === t.options.length,
            i = t.options[0]._zod.run;
        e._zod.parse = (r, s) => {
            if (n) return i(r, s);
            let a = !1,
                o = [];
            for (let e of t.options) {
                let t = e._zod.run({ value: r.value, issues: [] }, s);
                t instanceof Promise ? (o.push(t), (a = !0)) : o.push(t);
            }
            return a ? Promise.all(o).then((t) => np(t, r, e, s)) : np(o, r, e, s);
        };
    }),
    ng = _("$ZodDiscriminatedUnion", (e, t) => {
        (t.inclusive = !1), nE.init(e, t);
        let n = e._zod.parse;
        C(e._zod, "propValues", () => {
            let e = {};
            for (let n of t.options) {
                let i = n._zod.propValues;
                if (!i || 0 === Object.keys(i).length)
                    throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
                for (let [t, n] of Object.entries(i)) for (let i of (e[t] || (e[t] = new Set()), n)) e[t].add(i);
            }
            return e;
        });
        let i = I(() => {
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
        e._zod.parse = (r, s) => {
            let a = r.value;
            if (!b(a)) return r.issues.push({ code: "invalid_type", expected: "object", input: a, inst: e }), r;
            let o = i.value.get(a?.[t.discriminator]);
            return o
                ? o._zod.run(r, s)
                : t.unionFallback
                  ? n(r, s)
                  : (r.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: t.discriminator,
                        input: a,
                        path: [t.discriminator],
                        inst: e,
                    }),
                    r);
        };
    }),
    nA = _("$ZodIntersection", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (e, n) => {
                let i = e.value,
                    r = t.left._zod.run({ value: i, issues: [] }, n),
                    s = t.right._zod.run({ value: i, issues: [] }, n);
                return r instanceof Promise || s instanceof Promise
                    ? Promise.all([r, s]).then(([t, n]) => nI(e, t, n))
                    : nI(e, r, s);
            });
    });
function nI(e, t, n) {
    let i,
        r = new Map();
    for (let n of t.issues)
        if ("unrecognized_keys" === n.code)
            for (let e of (i ?? (i = n), n.keys)) r.has(e) || r.set(e, {}), (r.get(e).l = !0);
        else e.issues.push(n);
    for (let t of n.issues)
        if ("unrecognized_keys" === t.code) for (let e of t.keys) r.has(e) || r.set(e, {}), (r.get(e).r = !0);
        else e.issues.push(t);
    let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
    if ((s.length && i && e.issues.push({ ...i, keys: s }), B(e))) return e;
    let a = (function e(t, n) {
        if (t === n || (t instanceof Date && n instanceof Date && +t == +n)) return { valid: !0, data: t };
        if (D(t) && D(n)) {
            let i = Object.keys(n),
                r = Object.keys(t).filter((e) => -1 !== i.indexOf(e)),
                s = { ...t, ...n };
            for (let i of r) {
                let r = e(t[i], n[i]);
                if (!r.valid) return { valid: !1, mergeErrorPath: [i, ...r.mergeErrorPath] };
                s[i] = r.data;
            }
            return { valid: !0, data: s };
        }
        if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
            let i = [];
            for (let r = 0; r < t.length; r++) {
                let s = e(t[r], n[r]);
                if (!s.valid) return { valid: !1, mergeErrorPath: [r, ...s.mergeErrorPath] };
                i.push(s.data);
            }
            return { valid: !0, data: i };
        }
        return { valid: !1, mergeErrorPath: [] };
    })(t.value, n.value);
    if (!a.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
    return (e.value = a.data), e;
}
let nT = _("$ZodTuple", (e, t) => {
    tb.init(e, t);
    let n = t.items;
    e._zod.parse = (i, r) => {
        let s = i.value;
        if (!Array.isArray(s)) return i.issues.push({ input: s, inst: e, expected: "tuple", code: "invalid_type" }), i;
        i.value = [];
        let a = [],
            o = [...n].reverse().findIndex((e) => "optional" !== e._zod.optin),
            l = -1 === o ? 0 : n.length - o;
        if (!t.rest) {
            let t = s.length > n.length,
                r = s.length < l - 1;
            if (t || r)
                return (
                    i.issues.push({
                        ...(t
                            ? { code: "too_big", maximum: n.length, inclusive: !0 }
                            : { code: "too_small", minimum: n.length }),
                        input: s,
                        inst: e,
                        origin: "array",
                    }),
                    i
                );
        }
        let u = -1;
        for (let e of n) {
            if (++u >= s.length && u >= l) continue;
            let t = e._zod.run({ value: s[u], issues: [] }, r);
            t instanceof Promise ? a.push(t.then((e) => nS(e, i, u))) : nS(t, i, u);
        }
        if (t.rest)
            for (let e of s.slice(n.length)) {
                u++;
                let n = t.rest._zod.run({ value: e, issues: [] }, r);
                n instanceof Promise ? a.push(n.then((e) => nS(e, i, u))) : nS(n, i, u);
            }
        return a.length ? Promise.all(a).then(() => i) : i;
    };
});
function nS(e, t, n) {
    e.issues.length && t.issues.push(...H(n, e.issues)), (t.value[n] = e.value);
}
let nN = _("$ZodRecord", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (n, i) => {
                let r = n.value;
                if (!D(r)) return n.issues.push({ expected: "record", code: "invalid_type", input: r, inst: e }), n;
                let s = [],
                    a = t.keyType._zod.values;
                if (a) {
                    let o;
                    n.value = {};
                    let l = new Set();
                    for (let e of a)
                        if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                            l.add("number" == typeof e ? e.toString() : e);
                            let a = t.valueType._zod.run({ value: r[e], issues: [] }, i);
                            a instanceof Promise
                                ? s.push(
                                      a.then((t) => {
                                          t.issues.length && n.issues.push(...H(e, t.issues)), (n.value[e] = t.value);
                                      }),
                                  )
                                : (a.issues.length && n.issues.push(...H(e, a.issues)), (n.value[e] = a.value));
                        }
                    for (let e in r) l.has(e) || (o = o ?? []).push(e);
                    o && o.length > 0 && n.issues.push({ code: "unrecognized_keys", input: r, inst: e, keys: o });
                } else
                    for (let a of ((n.value = {}), Reflect.ownKeys(r))) {
                        if ("__proto__" === a) continue;
                        let o = t.keyType._zod.run({ value: a, issues: [] }, i);
                        if (o instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                        if ("string" == typeof a && ej.test(a) && o.issues.length) {
                            let e = t.keyType._zod.run({ value: Number(a), issues: [] }, i);
                            if (e instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            0 === e.issues.length && (o = e);
                        }
                        if (o.issues.length) {
                            "loose" === t.mode
                                ? (n.value[a] = r[a])
                                : n.issues.push({
                                      code: "invalid_key",
                                      origin: "record",
                                      issues: o.issues.map((e) => W(e, i, p())),
                                      input: a,
                                      path: [a],
                                      inst: e,
                                  });
                            continue;
                        }
                        let l = t.valueType._zod.run({ value: r[a], issues: [] }, i);
                        l instanceof Promise
                            ? s.push(
                                  l.then((e) => {
                                      e.issues.length && n.issues.push(...H(a, e.issues)), (n.value[o.value] = e.value);
                                  }),
                              )
                            : (l.issues.length && n.issues.push(...H(a, l.issues)), (n.value[o.value] = l.value));
                    }
                return s.length ? Promise.all(s).then(() => n) : n;
            });
    }),
    nC = _("$ZodMap", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (n, i) => {
                let r = n.value;
                if (!(r instanceof Map))
                    return n.issues.push({ expected: "map", code: "invalid_type", input: r, inst: e }), n;
                let s = [];
                for (let [a, o] of ((n.value = new Map()), r)) {
                    let l = t.keyType._zod.run({ value: a, issues: [] }, i),
                        u = t.valueType._zod.run({ value: o, issues: [] }, i);
                    l instanceof Promise || u instanceof Promise
                        ? s.push(
                              Promise.all([l, u]).then(([t, s]) => {
                                  ny(t, s, n, a, r, e, i);
                              }),
                          )
                        : ny(l, u, n, a, r, e, i);
                }
                return s.length ? Promise.all(s).then(() => n) : n;
            });
    });
function ny(e, t, n, i, r, s, a) {
    e.issues.length &&
        (P.has(typeof i)
            ? n.issues.push(...H(i, e.issues))
            : n.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: r,
                  inst: s,
                  issues: e.issues.map((e) => W(e, a, p())),
              })),
        t.issues.length &&
            (P.has(typeof i)
                ? n.issues.push(...H(i, t.issues))
                : n.issues.push({
                      origin: "map",
                      code: "invalid_element",
                      input: r,
                      inst: s,
                      key: i,
                      issues: t.issues.map((e) => W(e, a, p())),
                  })),
        n.value.set(e.value, t.value);
}
let nO = _("$ZodSet", (e, t) => {
    tb.init(e, t),
        (e._zod.parse = (n, i) => {
            let r = n.value;
            if (!(r instanceof Set))
                return n.issues.push({ input: r, inst: e, expected: "set", code: "invalid_type" }), n;
            let s = [];
            for (let e of ((n.value = new Set()), r)) {
                let r = t.valueType._zod.run({ value: e, issues: [] }, i);
                r instanceof Promise ? s.push(r.then((e) => nR(e, n))) : nR(r, n);
            }
            return s.length ? Promise.all(s).then(() => n) : n;
        });
});
function nR(e, t) {
    e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
let nv = _("$ZodEnum", (e, t) => {
        tb.init(e, t);
        let n = m(t.entries),
            i = new Set(n);
        (e._zod.values = i),
            (e._zod.pattern = RegExp(
                `^(${n
                    .filter((e) => P.has(typeof e))
                    .map((e) => ("string" == typeof e ? x(e) : e.toString()))
                    .join("|")})$`,
            )),
            (e._zod.parse = (t, r) => {
                let s = t.value;
                return i.has(s) || t.issues.push({ code: "invalid_value", values: n, input: s, inst: e }), t;
            });
    }),
    nb = _("$ZodLiteral", (e, t) => {
        if ((tb.init(e, t), 0 === t.values.length)) throw Error("Cannot create literal schema with no valid values");
        let n = new Set(t.values);
        (e._zod.values = n),
            (e._zod.pattern = RegExp(
                `^(${t.values.map((e) => ("string" == typeof e ? x(e) : e ? x(e.toString()) : String(e))).join("|")})$`,
            )),
            (e._zod.parse = (i, r) => {
                let s = i.value;
                return n.has(s) || i.issues.push({ code: "invalid_value", values: t.values, input: s, inst: e }), i;
            });
    }),
    nL = _("$ZodFile", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (t, n) => {
                let i = t.value;
                return (
                    i instanceof File || t.issues.push({ expected: "file", code: "invalid_type", input: i, inst: e }), t
                );
            });
    }),
    nD = _("$ZodTransform", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (n, i) => {
                if ("backward" === i.direction) throw new f(e.constructor.name);
                let r = t.transform(n.value, n);
                if (i.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((e) => ((n.value = e), n));
                if (r instanceof Promise) throw new h();
                return (n.value = r), n;
            });
    });
function nw(e, t) {
    return e.issues.length && void 0 === t ? { issues: [], value: void 0 } : e;
}
let nP = _("$ZodOptional", (e, t) => {
        tb.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            C(e._zod, "values", () =>
                t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
            ),
            C(e._zod, "pattern", () => {
                let e = t.innerType._zod.pattern;
                return e ? RegExp(`^(${S(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
                if ("optional" === t.innerType._zod.optin) {
                    let i = t.innerType._zod.run(e, n);
                    return i instanceof Promise ? i.then((t) => nw(t, e.value)) : nw(i, e.value);
                }
                return void 0 === e.value ? e : t.innerType._zod.run(e, n);
            });
    }),
    nM = _("$ZodExactOptional", (e, t) => {
        nP.init(e, t),
            C(e._zod, "values", () => t.innerType._zod.values),
            C(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
    }),
    nx = _("$ZodNullable", (e, t) => {
        tb.init(e, t),
            C(e._zod, "optin", () => t.innerType._zod.optin),
            C(e._zod, "optout", () => t.innerType._zod.optout),
            C(e._zod, "pattern", () => {
                let e = t.innerType._zod.pattern;
                return e ? RegExp(`^(${S(e.source)}|null)$`) : void 0;
            }),
            C(e._zod, "values", () => (t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0)),
            (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n)));
    }),
    nU = _("$ZodDefault", (e, t) => {
        tb.init(e, t),
            (e._zod.optin = "optional"),
            C(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n);
                if (void 0 === e.value) return (e.value = t.defaultValue), e;
                let i = t.innerType._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => nk(e, t)) : nk(i, t);
            });
    });
function nk(e, t) {
    return void 0 === e.value && (e.value = t.defaultValue), e;
}
let nG = _("$ZodPrefault", (e, t) => {
        tb.init(e, t),
            (e._zod.optin = "optional"),
            C(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => (
                "backward" === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
                t.innerType._zod.run(e, n)
            ));
    }),
    nV = _("$ZodNonOptional", (e, t) => {
        tb.init(e, t),
            C(e._zod, "values", () => {
                let e = t.innerType._zod.values;
                return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, i) => {
                let r = t.innerType._zod.run(n, i);
                return r instanceof Promise ? r.then((t) => nF(t, e)) : nF(r, e);
            });
    });
function nF(e, t) {
    return (
        e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
        e
    );
}
let nB = _("$ZodSuccess", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) throw new f("ZodSuccess");
                let i = t.innerType._zod.run(e, n);
                return i instanceof Promise
                    ? i.then((t) => ((e.value = 0 === t.issues.length), e))
                    : ((e.value = 0 === i.issues.length), e);
            });
    }),
    nH = _("$ZodCatch", (e, t) => {
        tb.init(e, t),
            C(e._zod, "optin", () => t.innerType._zod.optin),
            C(e._zod, "optout", () => t.innerType._zod.optout),
            C(e._zod, "values", () => t.innerType._zod.values),
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
                                      error: { issues: i.issues.map((e) => W(e, n, p())) },
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
                              error: { issues: i.issues.map((e) => W(e, n, p())) },
                              input: e.value,
                          })),
                          (e.issues = [])),
                      e);
            });
    }),
    nj = _("$ZodNaN", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (t, n) => (
                ("number" == typeof t.value && Number.isNaN(t.value)) ||
                    t.issues.push({ input: t.value, inst: e, expected: "nan", code: "invalid_type" }),
                t
            ));
    }),
    nW = _("$ZodPipe", (e, t) => {
        tb.init(e, t),
            C(e._zod, "values", () => t.in._zod.values),
            C(e._zod, "optin", () => t.in._zod.optin),
            C(e._zod, "optout", () => t.out._zod.optout),
            C(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) {
                    let i = t.out._zod.run(e, n);
                    return i instanceof Promise ? i.then((e) => nY(e, t.in, n)) : nY(i, t.in, n);
                }
                let i = t.in._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => nY(e, t.out, n)) : nY(i, t.out, n);
            });
    });
function nY(e, t, n) {
    return e.issues.length ? ((e.aborted = !0), e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
let nK = _("$ZodCodec", (e, t) => {
    tb.init(e, t),
        C(e._zod, "values", () => t.in._zod.values),
        C(e._zod, "optin", () => t.in._zod.optin),
        C(e._zod, "optout", () => t.out._zod.optout),
        C(e._zod, "propValues", () => t.in._zod.propValues),
        (e._zod.parse = (e, n) => {
            if ("forward" === (n.direction || "forward")) {
                let i = t.in._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => n$(e, t, n)) : n$(i, t, n);
            }
            {
                let i = t.out._zod.run(e, n);
                return i instanceof Promise ? i.then((e) => n$(e, t, n)) : n$(i, t, n);
            }
        });
});
function n$(e, t, n) {
    if (e.issues.length) return (e.aborted = !0), e;
    if ("forward" === (n.direction || "forward")) {
        let i = t.transform(e.value, e);
        return i instanceof Promise ? i.then((i) => nz(e, i, t.out, n)) : nz(e, i, t.out, n);
    }
    {
        let i = t.reverseTransform(e.value, e);
        return i instanceof Promise ? i.then((i) => nz(e, i, t.in, n)) : nz(e, i, t.in, n);
    }
}
function nz(e, t, n, i) {
    return e.issues.length ? ((e.aborted = !0), e) : n._zod.run({ value: t, issues: e.issues }, i);
}
let nq = _("$ZodReadonly", (e, t) => {
    tb.init(e, t),
        C(e._zod, "propValues", () => t.innerType._zod.propValues),
        C(e._zod, "values", () => t.innerType._zod.values),
        C(e._zod, "optin", () => t.innerType?._zod?.optin),
        C(e._zod, "optout", () => t.innerType?._zod?.optout),
        (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let i = t.innerType._zod.run(e, n);
            return i instanceof Promise ? i.then(nZ) : nZ(i);
        });
});
function nZ(e) {
    return (e.value = Object.freeze(e.value)), e;
}
let nX = _("$ZodTemplateLiteral", (e, t) => {
        tb.init(e, t);
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
            } else if (null === e || M.has(typeof e)) n.push(x(`${e}`));
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
    nQ = _(
        "$ZodFunction",
        (e, t) => (
            tb.init(e, t),
            (e._def = t),
            (e._zod.def = t),
            (e.implement = (t) => {
                if ("function" != typeof t) throw Error("implement() must be called with a function");
                return function (...n) {
                    let i = Reflect.apply(t, this, e._def.input ? Q(e._def.input, n) : n);
                    return e._def.output ? Q(e._def.output, i) : i;
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
                              input: new nT({ type: "tuple", items: t[0], rest: t[1] }),
                              output: e._def.output,
                          }
                        : { type: "function", input: t[0], output: e._def.output },
                );
            }),
            (e.output = (t) => new e.constructor({ type: "function", input: e._def.input, output: t })),
            e
        ),
    ),
    nJ = _("$ZodPromise", (e, t) => {
        tb.init(e, t),
            (e._zod.parse = (e, n) =>
                Promise.resolve(e.value).then((e) => t.innerType._zod.run({ value: e, issues: [] }, n)));
    }),
    n0 = _("$ZodLazy", (e, t) => {
        tb.init(e, t),
            C(e._zod, "innerType", () => t.getter()),
            C(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
            C(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
            C(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
            C(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n));
    }),
    n1 = _("$ZodCustom", (e, t) => {
        ti.init(e, t),
            tb.init(e, t),
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
        i._zod.def.params && (e.params = i._zod.def.params), t.issues.push($(e));
    }
}
Symbol("ZodOutput"), Symbol("ZodInput");
(a = globalThis).__zod_globalRegistry ??
    (a.__zod_globalRegistry = new (class e {
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
let n3 = globalThis.__zod_globalRegistry;
function n6(e, t) {
    return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...k(t) });
}
function n4(e, t) {
    return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...k(t) });
}
function n5(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...k(t) });
}
function n7(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...k(t) });
}
function n8(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...k(t) });
}
function n9(e, t) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...k(t) });
}
function ie(e, t) {
    return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...k(t) });
}
function it(e, t) {
    return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...k(t) });
}
function ii(e, t) {
    return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...k(t) });
}
function ir(e, t) {
    return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...k(t) });
}
function is(e, t) {
    return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...k(t) });
}
function ia(e, t) {
    return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...k(t) });
}
function io(e, t) {
    return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...k(t) });
}
function il(e, t) {
    return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...k(t) });
}
function iu(e, t) {
    return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...k(t) });
}
function ic(e, t) {
    return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...k(t) });
}
function id(e, t) {
    return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...k(t) });
}
function i_(e, t) {
    return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...k(t) });
}
function ih(e, t) {
    return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...k(t) });
}
function iE(e, t) {
    return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...k(t) });
}
function ip(e, t) {
    return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...k(t) });
}
function im(e, t) {
    return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...k(t) });
}
function ig(e, t) {
    return new ts({ check: "less_than", ...k(t), value: e, inclusive: !1 });
}
function iA(e, t) {
    return new ts({ check: "less_than", ...k(t), value: e, inclusive: !0 });
}
function iI(e, t) {
    return new ta({ check: "greater_than", ...k(t), value: e, inclusive: !1 });
}
function iT(e, t) {
    return new ta({ check: "greater_than", ...k(t), value: e, inclusive: !0 });
}
function iS(e) {
    return iI(0, e);
}
function iN(e) {
    return ig(0, e);
}
function iC(e) {
    return iA(0, e);
}
function iy(e) {
    return iT(0, e);
}
function iO(e, t) {
    return new to({ check: "multiple_of", ...k(t), value: e });
}
function iR(e, t) {
    return new tc({ check: "max_size", ...k(t), maximum: e });
}
function iv(e, t) {
    return new td({ check: "min_size", ...k(t), minimum: e });
}
function ib(e, t) {
    return new t_({ check: "size_equals", ...k(t), size: e });
}
function iL(e, t) {
    return new th({ check: "max_length", ...k(t), maximum: e });
}
function iD(e, t) {
    return new tf({ check: "min_length", ...k(t), minimum: e });
}
function iw(e, t) {
    return new tE({ check: "length_equals", ...k(t), length: e });
}
function iP(e, t) {
    return new tm({ check: "string_format", format: "regex", ...k(t), pattern: e });
}
function iM(e) {
    return new tg({ check: "string_format", format: "lowercase", ...k(e) });
}
function ix(e) {
    return new tA({ check: "string_format", format: "uppercase", ...k(e) });
}
function iU(e, t) {
    return new tI({ check: "string_format", format: "includes", ...k(t), includes: e });
}
function ik(e, t) {
    return new tT({ check: "string_format", format: "starts_with", ...k(t), prefix: e });
}
function iG(e, t) {
    return new tS({ check: "string_format", format: "ends_with", ...k(t), suffix: e });
}
function iV(e, t, n) {
    return new tC({ check: "property", property: e, schema: t, ...k(n) });
}
function iF(e, t) {
    return new ty({ check: "mime_type", mime: e, ...k(t) });
}
function iB(e) {
    return new tO({ check: "overwrite", tx: e });
}
function iH(e) {
    return iB((t) => t.normalize(e));
}
function ij() {
    return iB((e) => e.trim());
}
function iW() {
    return iB((e) => e.toLowerCase());
}
function iY() {
    return iB((e) => e.toUpperCase());
}
function iK() {
    return iB((e) =>
        e
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, ""),
    );
}
function i$(e, t, n, i = {}) {
    let r = k(i),
        s = {
            ...k(i),
            check: "string_format",
            type: "string",
            format: t,
            fn: "function" == typeof n ? n : (e) => n.test(e),
            ...r,
        };
    return n instanceof RegExp && (s.pattern = n), new e(s);
}
function iz(e) {
    let t = e?.target ?? "draft-2020-12";
    return (
        "draft-4" === t && (t = "draft-04"),
        "draft-7" === t && (t = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? n3,
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
function iq(e, t, n = { path: [], schemaPath: [] }) {
    var i;
    let r = e._zod.def,
        s = t.seen.get(e);
    if (s) return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
    let a = { schema: {}, count: 1, cycle: void 0, path: n.path };
    t.seen.set(e, a);
    let o = e._zod.toJSONSchema?.();
    if (o) a.schema = o;
    else {
        let i = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, i);
        else {
            let n = a.schema,
                s = t.processors[r.type];
            if (!s) throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
            s(e, t, n, i);
        }
        let s = e._zod.parent;
        s && (a.ref || (a.ref = s), iq(s, t, i), (t.seen.get(s).isParent = !0));
    }
    let l = t.metadataRegistry.get(e);
    return (
        l && Object.assign(a.schema, l),
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
            (delete a.schema.examples, delete a.schema.default),
        "input" === t.io && a.schema._prefault && ((i = a.schema).default ?? (i.default = a.schema._prefault)),
        delete a.schema._prefault,
        t.seen.get(e).schema
    );
}
function iZ(e, t) {
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
            { ref: r, defId: s } = ((t) => {
                let i = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    let n = e.external.registry.get(t[0])?.id,
                        r = e.external.uri ?? ((e) => e);
                    if (n) return { ref: r(n) };
                    let s = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                    return (t[1].defId = s), { defId: s, ref: `${r("__shared")}#/${i}/${s}` };
                }
                if (t[1] === n) return { ref: "#" };
                let r = `#/${i}/`,
                    s = t[1].schema.id ?? `__schema${e.counter++}`;
                return { defId: s, ref: r + s };
            })(t);
        (i.def = { ...i.schema }), s && (i.defId = s);
        let a = i.schema;
        for (let e in a) delete a[e];
        a.$ref = r;
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
function iX(e, t) {
    let n = e.seen.get(t);
    if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = (t) => {
        let n = e.seen.get(t);
        if (null === n.ref) return;
        let r = n.def ?? n.schema,
            s = { ...r },
            a = n.ref;
        if (((n.ref = null), a)) {
            i(a);
            let n = e.seen.get(a),
                o = n.schema;
            if (
                (o.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                    ? ((r.allOf = r.allOf ?? []), r.allOf.push(o))
                    : Object.assign(r, o),
                Object.assign(r, s),
                t._zod.parent === a)
            )
                for (let e in r) "$ref" !== e && "allOf" !== e && (e in s || delete r[e]);
            if (o.$ref && n.def)
                for (let e in r)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in n.def &&
                        JSON.stringify(r[e]) === JSON.stringify(n.def[e]) &&
                        delete r[e];
        }
        let o = t._zod.parent;
        if (o && o !== a) {
            i(o);
            let t = e.seen.get(o);
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
    let s = e.external?.defs ?? {};
    for (let t of e.seen.entries()) {
        let e = t[1];
        e.def && e.defId && (s[e.defId] = e.def);
    }
    e.external || (Object.keys(s).length > 0 && ("draft-2020-12" === e.target ? (r.$defs = s) : (r.definitions = s)));
    try {
        let n = JSON.parse(JSON.stringify(r));
        return (
            Object.defineProperty(n, "~standard", {
                value: {
                    ...t["~standard"],
                    jsonSchema: { input: iQ(t, "input", e.processors), output: iQ(t, "output", e.processors) },
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
let iQ =
        (e, t, n = {}) =>
        (i) => {
            let { libraryOptions: r, target: s } = i ?? {},
                a = iz({ ...(r ?? {}), target: s, io: t, processors: n });
            return iq(e, a), iZ(a, e), iX(a, e);
        },
    iJ = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    i0 = (e, t, n, i) => {
        let r = e._zod.def,
            s = !1 === r.inclusive,
            a = r.options.map((e, n) => iq(e, t, { ...i, path: [...i.path, s ? "oneOf" : "anyOf", n] }));
        s ? (n.oneOf = a) : (n.anyOf = a);
    },
    i1 = (e, t, n, i) => {
        let r = e._zod.def;
        iq(r.innerType, t, i), (t.seen.get(e).ref = r.innerType);
    },
    i2 = _("ZodISODateTime", (e, t) => {
        tj.init(e, t), rg.init(e, t);
    });
function i3(e) {
    return new i2({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...k(e),
    });
}
let i6 = _("ZodISODate", (e, t) => {
    tW.init(e, t), rg.init(e, t);
});
function i4(e) {
    return new i6({ type: "string", format: "date", check: "string_format", ...k(e) });
}
let i5 = _("ZodISOTime", (e, t) => {
    tY.init(e, t), rg.init(e, t);
});
function i7(e) {
    return new i5({ type: "string", format: "time", check: "string_format", precision: null, ...k(e) });
}
let i8 = _("ZodISODuration", (e, t) => {
    tK.init(e, t), rg.init(e, t);
});
function i9(e) {
    return new i8({ type: "string", format: "duration", check: "string_format", ...k(e) });
}
let re = (e, t) => {
    q.init(e, t),
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
                    e.issues.push(t), (e.message = JSON.stringify(e.issues, A, 2));
                },
            },
            addIssues: {
                value: (t) => {
                    e.issues.push(...t), (e.message = JSON.stringify(e.issues, A, 2));
                },
            },
            isEmpty: { get: () => 0 === e.issues.length },
        });
};
_("ZodError", re);
let rt = _("ZodError", re, { Parent: Error }),
    rn = X(rt),
    ri = J(rt),
    rr = et(rt),
    rs = ei(rt),
    ra = (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return X(rt)(e, t, i);
    },
    ro = (e, t, n) => X(rt)(e, t, n),
    rl = async (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return J(rt)(e, t, i);
    },
    ru = async (e, t, n) => J(rt)(e, t, n),
    rc = (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return et(rt)(e, t, i);
    },
    rd = (e, t, n) => et(rt)(e, t, n),
    r_ = async (e, t, n) => {
        let i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
        return ei(rt)(e, t, i);
    },
    rh = async (e, t, n) => ei(rt)(e, t, n),
    rf = _(
        "ZodType",
        (e, t) => (
            tb.init(e, t),
            Object.assign(e["~standard"], { jsonSchema: { input: iQ(e, "input"), output: iQ(e, "output") } }),
            (e.toJSONSchema = (
                (e, t = {}) =>
                (n) => {
                    let i = iz({ ...n, processors: t });
                    return iq(e, i), iZ(i, e), iX(i, e);
                }
            )(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.check = (...n) =>
                e.clone(
                    O(t, {
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
            (e.clone = (t, n) => U(e, t, n)),
            (e.brand = () => e),
            (e.register = (t, n) => (t.add(e, n), e)),
            (e.parse = (t, n) => rn(e, t, n, { callee: e.parse })),
            (e.safeParse = (t, n) => rr(e, t, n)),
            (e.parseAsync = async (t, n) => ri(e, t, n, { callee: e.parseAsync })),
            (e.safeParseAsync = async (t, n) => rs(e, t, n)),
            (e.spa = e.safeParseAsync),
            (e.encode = (t, n) => ra(e, t, n)),
            (e.decode = (t, n) => ro(e, t, n)),
            (e.encodeAsync = async (t, n) => rl(e, t, n)),
            (e.decodeAsync = async (t, n) => ru(e, t, n)),
            (e.safeEncode = (t, n) => rc(e, t, n)),
            (e.safeDecode = (t, n) => rd(e, t, n)),
            (e.safeEncodeAsync = async (t, n) => r_(e, t, n)),
            (e.safeDecodeAsync = async (t, n) => rh(e, t, n)),
            (e.refine = (t, n) => e.check(aB(t, n))),
            (e.superRefine = (t) => e.check(aH(t))),
            (e.overwrite = (t) => e.check(iB(t))),
            (e.optional = () => aa(e)),
            (e.exactOptional = () => al(e)),
            (e.nullable = () => ac(e)),
            (e.nullish = () => aa(ac(e))),
            (e.nonoptional = (t) => am(e, t)),
            (e.array = () => sU(e)),
            (e.or = (t) => sj([e, t])),
            (e.and = (t) => sq(e, t)),
            (e.transform = (t) => ay(e, ar(t))),
            (e.default = (t) => ah(e, t)),
            (e.prefault = (t) => aE(e, t)),
            (e.catch = (t) => aT(e, t)),
            (e.pipe = (t) => ay(e, t)),
            (e.readonly = () => ab(e)),
            (e.describe = (t) => {
                let n = e.clone();
                return n3.add(n, { description: t }), n;
            }),
            Object.defineProperty(e, "description", { get: () => n3.get(e)?.description, configurable: !0 }),
            (e.meta = (...t) => {
                if (0 === t.length) return n3.get(e);
                let n = e.clone();
                return n3.add(n, t[0]), n;
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (t) => t(e)),
            e
        ),
    ),
    rE = _("_ZodString", (e, t) => {
        tL.init(e, t),
            rf.init(e, t),
            (e._zod.processJSONSchema = (t, n, i) =>
                ((e, t, n, i) => {
                    n.type = "string";
                    let { minimum: r, maximum: s, format: a, patterns: o, contentEncoding: l } = e._zod.bag;
                    if (
                        ("number" == typeof r && (n.minLength = r),
                        "number" == typeof s && (n.maxLength = s),
                        a &&
                            ((n.format = iJ[a] ?? a),
                            "" === n.format && delete n.format,
                            "time" === a && delete n.format),
                        l && (n.contentEncoding = l),
                        o && o.size > 0)
                    ) {
                        let e = [...o];
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
            (e.regex = (...t) => e.check(iP(...t))),
            (e.includes = (...t) => e.check(iU(...t))),
            (e.startsWith = (...t) => e.check(ik(...t))),
            (e.endsWith = (...t) => e.check(iG(...t))),
            (e.min = (...t) => e.check(iD(...t))),
            (e.max = (...t) => e.check(iL(...t))),
            (e.length = (...t) => e.check(iw(...t))),
            (e.nonempty = (...t) => e.check(iD(1, ...t))),
            (e.lowercase = (t) => e.check(iM(t))),
            (e.uppercase = (t) => e.check(ix(t))),
            (e.trim = () => e.check(ij())),
            (e.normalize = (...t) => e.check(iH(...t))),
            (e.toLowerCase = () => e.check(iW())),
            (e.toUpperCase = () => e.check(iY())),
            (e.slugify = () => e.check(iK()));
    }),
    rp = _("ZodString", (e, t) => {
        tL.init(e, t),
            rE.init(e, t),
            (e.email = (t) => e.check(n6(rA, t))),
            (e.url = (t) => e.check(ie(rv, t))),
            (e.jwt = (t) => e.check(im(r7, t))),
            (e.emoji = (t) => e.check(it(rD, t))),
            (e.guid = (t) => e.check(n4(rT, t))),
            (e.uuid = (t) => e.check(n5(rN, t))),
            (e.uuidv4 = (t) => e.check(n7(rN, t))),
            (e.uuidv6 = (t) => e.check(n8(rN, t))),
            (e.uuidv7 = (t) => e.check(n9(rN, t))),
            (e.nanoid = (t) => e.check(ii(rP, t))),
            (e.guid = (t) => e.check(n4(rT, t))),
            (e.cuid = (t) => e.check(ir(rx, t))),
            (e.cuid2 = (t) => e.check(is(rk, t))),
            (e.ulid = (t) => e.check(ia(rV, t))),
            (e.base64 = (t) => e.check(ih(r1, t))),
            (e.base64url = (t) => e.check(iE(r3, t))),
            (e.xid = (t) => e.check(io(rB, t))),
            (e.ksuid = (t) => e.check(il(rj, t))),
            (e.ipv4 = (t) => e.check(iu(rY, t))),
            (e.ipv6 = (t) => e.check(ic(rq, t))),
            (e.cidrv4 = (t) => e.check(id(rX, t))),
            (e.cidrv6 = (t) => e.check(i_(rJ, t))),
            (e.e164 = (t) => e.check(ip(r4, t))),
            (e.datetime = (t) => e.check(i3(t))),
            (e.date = (t) => e.check(i4(t))),
            (e.time = (t) => e.check(i7(t))),
            (e.duration = (t) => e.check(i9(t)));
    });
function rm(e) {
    return new rp({ type: "string", ...k(e) });
}
let rg = _("ZodStringFormat", (e, t) => {
        tD.init(e, t), rE.init(e, t);
    }),
    rA = _("ZodEmail", (e, t) => {
        tM.init(e, t), rg.init(e, t);
    });
function rI(e) {
    return n6(rA, e);
}
let rT = _("ZodGUID", (e, t) => {
    tw.init(e, t), rg.init(e, t);
});
function rS(e) {
    return n4(rT, e);
}
let rN = _("ZodUUID", (e, t) => {
    tP.init(e, t), rg.init(e, t);
});
function rC(e) {
    return n5(rN, e);
}
function ry(e) {
    return n7(rN, e);
}
function rO(e) {
    return n8(rN, e);
}
function rR(e) {
    return n9(rN, e);
}
let rv = _("ZodURL", (e, t) => {
    tx.init(e, t), rg.init(e, t);
});
function rb(e) {
    return ie(rv, e);
}
function rL(e) {
    return ie(rv, { protocol: /^https?$/, hostname: eP, ...k(e) });
}
let rD = _("ZodEmoji", (e, t) => {
    tU.init(e, t), rg.init(e, t);
});
function rw(e) {
    return it(rD, e);
}
let rP = _("ZodNanoID", (e, t) => {
    tk.init(e, t), rg.init(e, t);
});
function rM(e) {
    return ii(rP, e);
}
let rx = _("ZodCUID", (e, t) => {
    tG.init(e, t), rg.init(e, t);
});
function rU(e) {
    return ir(rx, e);
}
let rk = _("ZodCUID2", (e, t) => {
    tV.init(e, t), rg.init(e, t);
});
function rG(e) {
    return is(rk, e);
}
let rV = _("ZodULID", (e, t) => {
    tF.init(e, t), rg.init(e, t);
});
function rF(e) {
    return ia(rV, e);
}
let rB = _("ZodXID", (e, t) => {
    tB.init(e, t), rg.init(e, t);
});
function rH(e) {
    return io(rB, e);
}
let rj = _("ZodKSUID", (e, t) => {
    tH.init(e, t), rg.init(e, t);
});
function rW(e) {
    return il(rj, e);
}
let rY = _("ZodIPv4", (e, t) => {
    t$.init(e, t), rg.init(e, t);
});
function rK(e) {
    return iu(rY, e);
}
let r$ = _("ZodMAC", (e, t) => {
    tq.init(e, t), rg.init(e, t);
});
function rz(e) {
    return new r$({ type: "string", format: "mac", check: "string_format", abort: !1, ...k(e) });
}
let rq = _("ZodIPv6", (e, t) => {
    tz.init(e, t), rg.init(e, t);
});
function rZ(e) {
    return ic(rq, e);
}
let rX = _("ZodCIDRv4", (e, t) => {
    tZ.init(e, t), rg.init(e, t);
});
function rQ(e) {
    return id(rX, e);
}
let rJ = _("ZodCIDRv6", (e, t) => {
    tX.init(e, t), rg.init(e, t);
});
function r0(e) {
    return i_(rJ, e);
}
let r1 = _("ZodBase64", (e, t) => {
    tJ.init(e, t), rg.init(e, t);
});
function r2(e) {
    return ih(r1, e);
}
let r3 = _("ZodBase64URL", (e, t) => {
    t0.init(e, t), rg.init(e, t);
});
function r6(e) {
    return iE(r3, e);
}
let r4 = _("ZodE164", (e, t) => {
    t1.init(e, t), rg.init(e, t);
});
function r5(e) {
    return ip(r4, e);
}
let r7 = _("ZodJWT", (e, t) => {
    t2.init(e, t), rg.init(e, t);
});
function r8(e) {
    return im(r7, e);
}
let r9 = _("ZodCustomStringFormat", (e, t) => {
    t3.init(e, t), rg.init(e, t);
});
function se(e, t, n = {}) {
    return i$(r9, e, t, n);
}
function st(e) {
    return i$(r9, "hostname", ew, e);
}
function sn(e) {
    return i$(r9, "hex", eq, e);
}
function si(e, t) {
    let n = t?.enc ?? "hex",
        i = `${e}_${n}`,
        r = l[i];
    if (!r) throw Error(`Unrecognized hash format: ${i}`);
    return i$(r9, i, r, t);
}
let sr = _("ZodNumber", (e, t) => {
    t6.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let {
                    minimum: r,
                    maximum: s,
                    format: a,
                    multipleOf: o,
                    exclusiveMaximum: l,
                    exclusiveMinimum: u,
                } = e._zod.bag;
                "string" == typeof a && a.includes("int") ? (n.type = "integer") : (n.type = "number"),
                    "number" == typeof u &&
                        ("draft-04" === t.target || "openapi-3.0" === t.target
                            ? ((n.minimum = u), (n.exclusiveMinimum = !0))
                            : (n.exclusiveMinimum = u)),
                    "number" == typeof r &&
                        ((n.minimum = r),
                        "number" == typeof u &&
                            "draft-04" !== t.target &&
                            (u >= r ? delete n.minimum : delete n.exclusiveMinimum)),
                    "number" == typeof l &&
                        ("draft-04" === t.target || "openapi-3.0" === t.target
                            ? ((n.maximum = l), (n.exclusiveMaximum = !0))
                            : (n.exclusiveMaximum = l)),
                    "number" == typeof s &&
                        ((n.maximum = s),
                        "number" == typeof l &&
                            "draft-04" !== t.target &&
                            (l <= s ? delete n.maximum : delete n.exclusiveMaximum)),
                    "number" == typeof o && (n.multipleOf = o);
            })(e, t, n, 0)),
        (e.gt = (t, n) => e.check(iI(t, n))),
        (e.gte = (t, n) => e.check(iT(t, n))),
        (e.min = (t, n) => e.check(iT(t, n))),
        (e.lt = (t, n) => e.check(ig(t, n))),
        (e.lte = (t, n) => e.check(iA(t, n))),
        (e.max = (t, n) => e.check(iA(t, n))),
        (e.int = (t) => e.check(so(t))),
        (e.safe = (t) => e.check(so(t))),
        (e.positive = (t) => e.check(iI(0, t))),
        (e.nonnegative = (t) => e.check(iT(0, t))),
        (e.negative = (t) => e.check(ig(0, t))),
        (e.nonpositive = (t) => e.check(iA(0, t))),
        (e.multipleOf = (t, n) => e.check(iO(t, n))),
        (e.step = (t, n) => e.check(iO(t, n))),
        (e.finite = () => e);
    let n = e._zod.bag;
    (e.minValue = Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
        (e.maxValue = Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
        (e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = n.format ?? null);
});
function ss(e) {
    return new sr({ type: "number", checks: [], ...k(e) });
}
let sa = _("ZodNumberFormat", (e, t) => {
    t4.init(e, t), sr.init(e, t);
});
function so(e) {
    return new sa({ type: "number", check: "number_format", abort: !1, format: "safeint", ...k(e) });
}
function sl(e) {
    return new sa({ type: "number", check: "number_format", abort: !1, format: "float32", ...k(e) });
}
function su(e) {
    return new sa({ type: "number", check: "number_format", abort: !1, format: "float64", ...k(e) });
}
function sc(e) {
    return new sa({ type: "number", check: "number_format", abort: !1, format: "int32", ...k(e) });
}
function sd(e) {
    return new sa({ type: "number", check: "number_format", abort: !1, format: "uint32", ...k(e) });
}
let s_ = _("ZodBoolean", (e, t) => {
    t5.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
        });
});
function sh(e) {
    return new s_({ type: "boolean", ...k(e) });
}
let sf = _("ZodBigInt", (e, t) => {
    t7.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("BigInt cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.gte = (t, n) => e.check(iT(t, n))),
        (e.min = (t, n) => e.check(iT(t, n))),
        (e.gt = (t, n) => e.check(iI(t, n))),
        (e.gte = (t, n) => e.check(iT(t, n))),
        (e.min = (t, n) => e.check(iT(t, n))),
        (e.lt = (t, n) => e.check(ig(t, n))),
        (e.lte = (t, n) => e.check(iA(t, n))),
        (e.max = (t, n) => e.check(iA(t, n))),
        (e.positive = (t) => e.check(iI(BigInt(0), t))),
        (e.negative = (t) => e.check(ig(BigInt(0), t))),
        (e.nonpositive = (t) => e.check(iA(BigInt(0), t))),
        (e.nonnegative = (t) => e.check(iT(BigInt(0), t))),
        (e.multipleOf = (t, n) => e.check(iO(t, n)));
    let n = e._zod.bag;
    (e.minValue = n.minimum ?? null), (e.maxValue = n.maximum ?? null), (e.format = n.format ?? null);
});
function sE(e) {
    return new sf({ type: "bigint", ...k(e) });
}
let sp = _("ZodBigIntFormat", (e, t) => {
    t8.init(e, t), sf.init(e, t);
});
function sm(e) {
    return new sp({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...k(e) });
}
function sg(e) {
    return new sp({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...k(e) });
}
let sA = _("ZodSymbol", (e, t) => {
    t9.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Symbols cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sI(e) {
    return new sA({ type: "symbol", ...k(e) });
}
let sT = _("ZodUndefined", (e, t) => {
    ne.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Undefined cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sS(e) {
    return new sT({ type: "undefined", ...k(e) });
}
let sN = _("ZodNull", (e, t) => {
    nt.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            "openapi-3.0" === e.target
                ? ((t.type = "string"), (t.nullable = !0), (t.enum = [null]))
                : (t.type = "null");
        });
});
function sC(e) {
    return new sN({ type: "null", ...k(e) });
}
let sy = _("ZodAny", (e, t) => {
    nn.init(e, t), rf.init(e, t), (e._zod.processJSONSchema = (e, t, n) => {});
});
function sO() {
    return new sy({ type: "any" });
}
let sR = _("ZodUnknown", (e, t) => {
    ni.init(e, t), rf.init(e, t), (e._zod.processJSONSchema = (e, t, n) => {});
});
function sv() {
    return new sR({ type: "unknown" });
}
let sb = _("ZodNever", (e, t) => {
    nr.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.not = {};
        });
});
function sL(e) {
    return new sb({ type: "never", ...k(e) });
}
let sD = _("ZodVoid", (e, t) => {
    ns.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Void cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sw(e) {
    return new sD({ type: "void", ...k(e) });
}
let sP = _("ZodDate", (e, t) => {
    na.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Date cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (t, n) => e.check(iT(t, n))),
        (e.max = (t, n) => e.check(iA(t, n)));
    let n = e._zod.bag;
    (e.minDate = n.minimum ? new Date(n.minimum) : null), (e.maxDate = n.maximum ? new Date(n.maximum) : null);
});
function sM(e) {
    return new sP({ type: "date", ...k(e) });
}
let sx = _("ZodArray", (e, t) => {
    nl.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def,
                    { minimum: s, maximum: a } = e._zod.bag;
                "number" == typeof s && (n.minItems = s),
                    "number" == typeof a && (n.maxItems = a),
                    (n.type = "array"),
                    (n.items = iq(r.element, t, { ...i, path: [...i.path, "items"] }));
            })(e, t, n, i)),
        (e.element = t.element),
        (e.min = (t, n) => e.check(iD(t, n))),
        (e.nonempty = (t) => e.check(iD(1, t))),
        (e.max = (t, n) => e.check(iL(t, n))),
        (e.length = (t, n) => e.check(iw(t, n))),
        (e.unwrap = () => e.element);
});
function sU(e, t) {
    return new sx({ type: "array", element: e, ...k(t) });
}
function sk(e) {
    return s7(Object.keys(e._zod.def.shape));
}
let sG = _("ZodObject", (e, t) => {
    nh.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def;
                (n.type = "object"), (n.properties = {});
                let s = r.shape;
                for (let e in s) n.properties[e] = iq(s[e], t, { ...i, path: [...i.path, "properties", e] });
                let a = new Set(
                    [...new Set(Object.keys(s))].filter((e) => {
                        let n = r.shape[e]._zod;
                        return "input" === t.io ? void 0 === n.optin : void 0 === n.optout;
                    }),
                );
                a.size > 0 && (n.required = Array.from(a)),
                    r.catchall?._zod.def.type === "never"
                        ? (n.additionalProperties = !1)
                        : r.catchall
                          ? r.catchall &&
                            (n.additionalProperties = iq(r.catchall, t, {
                                ...i,
                                path: [...i.path, "additionalProperties"],
                            }))
                          : "output" === t.io && (n.additionalProperties = !1);
            })(e, t, n, i)),
        C(e, "shape", () => t.shape),
        (e.keyof = () => s7(Object.keys(e._zod.def.shape))),
        (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: sv() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: sv() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: sL() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (t) =>
            (function (e, t) {
                if (!D(t)) throw Error("Invalid input to extend: expected a plain object");
                let n = e._zod.def.checks;
                if (n && n.length > 0) {
                    let n = e._zod.def.shape;
                    for (let e in t)
                        if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
                            throw Error(
                                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                            );
                }
                let i = O(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t };
                        return y(this, "shape", n), n;
                    },
                });
                return U(e, i);
            })(e, t)),
        (e.safeExtend = (t) =>
            (function (e, t) {
                if (!D(t)) throw Error("Invalid input to safeExtend: expected a plain object");
                let n = O(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t };
                        return y(this, "shape", n), n;
                    },
                });
                return U(e, n);
            })(e, t)),
        (e.merge = (t) => {
            let n;
            return (
                (n = O(e._zod.def, {
                    get shape() {
                        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
                        return y(this, "shape", n), n;
                    },
                    get catchall() {
                        return t._zod.def.catchall;
                    },
                    checks: [],
                })),
                U(e, n)
            );
        }),
        (e.pick = (t) =>
            (function (e, t) {
                let n = e._zod.def,
                    i = n.checks;
                if (i && i.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
                let r = O(e._zod.def, {
                    get shape() {
                        let e = {};
                        for (let i in t) {
                            if (!(i in n.shape)) throw Error(`Unrecognized key: "${i}"`);
                            t[i] && (e[i] = n.shape[i]);
                        }
                        return y(this, "shape", e), e;
                    },
                    checks: [],
                });
                return U(e, r);
            })(e, t)),
        (e.omit = (t) =>
            (function (e, t) {
                let n = e._zod.def,
                    i = n.checks;
                if (i && i.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
                let r = O(e._zod.def, {
                    get shape() {
                        let i = { ...e._zod.def.shape };
                        for (let e in t) {
                            if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
                            t[e] && delete i[e];
                        }
                        return y(this, "shape", i), i;
                    },
                    checks: [],
                });
                return U(e, r);
            })(e, t)),
        (e.partial = (...t) =>
            (function (e, t, n) {
                let i = t._zod.def.checks;
                if (i && i.length > 0)
                    throw Error(".partial() cannot be used on object schemas containing refinements");
                let r = O(t._zod.def, {
                    get shape() {
                        let i = t._zod.def.shape,
                            r = { ...i };
                        if (n)
                            for (let t in n) {
                                if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
                                n[t] && (r[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t]);
                            }
                        else for (let t in i) r[t] = e ? new e({ type: "optional", innerType: i[t] }) : i[t];
                        return y(this, "shape", r), r;
                    },
                    checks: [],
                });
                return U(t, r);
            })(as, e, t[0])),
        (e.required = (...t) => {
            var n;
            let i;
            return (
                (n = t[0]),
                (i = O(e._zod.def, {
                    get shape() {
                        let t = e._zod.def.shape,
                            i = { ...t };
                        if (n)
                            for (let e in n) {
                                if (!(e in i)) throw Error(`Unrecognized key: "${e}"`);
                                n[e] && (i[e] = new ap({ type: "nonoptional", innerType: t[e] }));
                            }
                        else for (let e in t) i[e] = new ap({ type: "nonoptional", innerType: t[e] });
                        return y(this, "shape", i), i;
                    },
                })),
                U(e, i)
            );
        });
});
function sV(e, t) {
    return new sG({ type: "object", shape: e ?? {}, ...k(t) });
}
function sF(e, t) {
    return new sG({ type: "object", shape: e, catchall: sL(), ...k(t) });
}
function sB(e, t) {
    return new sG({ type: "object", shape: e, catchall: sv(), ...k(t) });
}
let sH = _("ZodUnion", (e, t) => {
    nE.init(e, t), rf.init(e, t), (e._zod.processJSONSchema = (t, n, i) => i0(e, t, n, i)), (e.options = t.options);
});
function sj(e, t) {
    return new sH({ type: "union", options: e, ...k(t) });
}
let sW = _("ZodXor", (e, t) => {
    sH.init(e, t), nm.init(e, t), (e._zod.processJSONSchema = (t, n, i) => i0(e, t, n, i)), (e.options = t.options);
});
function sY(e, t) {
    return new sW({ type: "union", options: e, inclusive: !1, ...k(t) });
}
let sK = _("ZodDiscriminatedUnion", (e, t) => {
    sH.init(e, t), ng.init(e, t);
});
function s$(e, t, n) {
    return new sK({ type: "union", options: t, discriminator: e, ...k(n) });
}
let sz = _("ZodIntersection", (e, t) => {
    nA.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r, s, a, o;
            return (
                (s = iq((r = e._zod.def).left, t, { ...i, path: [...i.path, "allOf", 0] })),
                (a = iq(r.right, t, { ...i, path: [...i.path, "allOf", 1] })),
                void (n.allOf = [
                    ...((o = (e) => "allOf" in e && 1 === Object.keys(e).length)(s) ? s.allOf : [s]),
                    ...(o(a) ? a.allOf : [a]),
                ])
            );
        });
});
function sq(e, t) {
    return new sz({ type: "intersection", left: e, right: t });
}
let sZ = _("ZodTuple", (e, t) => {
    nT.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def;
                n.type = "array";
                let s = "draft-2020-12" === t.target ? "prefixItems" : "items",
                    a = "draft-2020-12" === t.target || "openapi-3.0" === t.target ? "items" : "additionalItems",
                    o = r.items.map((e, n) => iq(e, t, { ...i, path: [...i.path, s, n] })),
                    l = r.rest
                        ? iq(r.rest, t, {
                              ...i,
                              path: [...i.path, a, ...("openapi-3.0" === t.target ? [r.items.length] : [])],
                          })
                        : null;
                "draft-2020-12" === t.target
                    ? ((n.prefixItems = o), l && (n.items = l))
                    : "openapi-3.0" === t.target
                      ? ((n.items = { anyOf: o }),
                        l && n.items.anyOf.push(l),
                        (n.minItems = o.length),
                        l || (n.maxItems = o.length))
                      : ((n.items = o), l && (n.additionalItems = l));
                let { minimum: u, maximum: c } = e._zod.bag;
                "number" == typeof u && (n.minItems = u), "number" == typeof c && (n.maxItems = c);
            })(e, t, n, i)),
        (e.rest = (t) => e.clone({ ...e._zod.def, rest: t }));
});
function sX(e, t, n) {
    let i = t instanceof tb,
        r = i ? n : t;
    return new sZ({ type: "tuple", items: e, rest: i ? t : null, ...k(r) });
}
let sQ = _("ZodRecord", (e, t) => {
    nN.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def;
                n.type = "object";
                let s = r.keyType,
                    a = s._zod.bag,
                    o = a?.patterns;
                if ("loose" === r.mode && o && o.size > 0) {
                    let e = iq(r.valueType, t, { ...i, path: [...i.path, "patternProperties", "*"] });
                    for (let t of ((n.patternProperties = {}), o)) n.patternProperties[t.source] = e;
                } else
                    ("draft-07" === t.target || "draft-2020-12" === t.target) &&
                        (n.propertyNames = iq(r.keyType, t, { ...i, path: [...i.path, "propertyNames"] })),
                        (n.additionalProperties = iq(r.valueType, t, {
                            ...i,
                            path: [...i.path, "additionalProperties"],
                        }));
                let l = s._zod.values;
                if (l) {
                    let e = [...l].filter((e) => "string" == typeof e || "number" == typeof e);
                    e.length > 0 && (n.required = e);
                }
            })(e, t, n, i)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType);
});
function sJ(e, t, n) {
    return new sQ({ type: "record", keyType: e, valueType: t, ...k(n) });
}
function s0(e, t, n) {
    let i = U(e);
    return (i._zod.values = void 0), new sQ({ type: "record", keyType: i, valueType: t, ...k(n) });
}
function s1(e, t, n) {
    return new sQ({ type: "record", keyType: e, valueType: t, mode: "loose", ...k(n) });
}
let s2 = _("ZodMap", (e, t) => {
    nC.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Map cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.keyType = t.keyType),
        (e.valueType = t.valueType),
        (e.min = (...t) => e.check(iv(...t))),
        (e.nonempty = (t) => e.check(iv(1, t))),
        (e.max = (...t) => e.check(iR(...t))),
        (e.size = (...t) => e.check(ib(...t)));
});
function s3(e, t, n) {
    return new s2({ type: "map", keyType: e, valueType: t, ...k(n) });
}
let s6 = _("ZodSet", (e, t) => {
    nO.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Set cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (...t) => e.check(iv(...t))),
        (e.nonempty = (t) => e.check(iv(1, t))),
        (e.max = (...t) => e.check(iR(...t))),
        (e.size = (...t) => e.check(ib(...t)));
});
function s4(e, t) {
    return new s6({ type: "set", valueType: e, ...k(t) });
}
let s5 = _("ZodEnum", (e, t) => {
    nv.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            (r = m(e._zod.def.entries)).every((e) => "number" == typeof e) && (n.type = "number"),
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
        return new s5({ ...t, checks: [], ...k(i), entries: r });
    }),
        (e.exclude = (e, i) => {
            let r = { ...t.entries };
            for (let t of e)
                if (n.has(t)) delete r[t];
                else throw Error(`Key ${t} not found in enum`);
            return new s5({ ...t, checks: [], ...k(i), entries: r });
        });
});
function s7(e, t) {
    return new s5({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...k(t) });
}
function s8(e, t) {
    return new s5({ type: "enum", entries: e, ...k(t) });
}
let s9 = _("ZodLiteral", (e, t) => {
    nb.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.def,
                    s = [];
                for (let e of r.values)
                    if (void 0 === e) {
                        if ("throw" === t.unrepresentable)
                            throw Error("Literal `undefined` cannot be represented in JSON Schema");
                    } else if ("bigint" == typeof e)
                        if ("throw" === t.unrepresentable)
                            throw Error("BigInt literals cannot be represented in JSON Schema");
                        else s.push(Number(e));
                    else s.push(e);
                if (0 === s.length);
                else if (1 === s.length) {
                    let e = s[0];
                    (n.type = null === e ? "null" : typeof e),
                        "draft-04" === t.target || "openapi-3.0" === t.target ? (n.enum = [e]) : (n.const = e);
                } else
                    s.every((e) => "number" == typeof e) && (n.type = "number"),
                        s.every((e) => "string" == typeof e) && (n.type = "string"),
                        s.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
                        s.every((e) => null === e) && (n.type = "null"),
                        (n.enum = s);
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
function ae(e, t) {
    return new s9({ type: "literal", values: Array.isArray(e) ? e : [e], ...k(t) });
}
let at = _("ZodFile", (e, t) => {
    nL.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = { type: "string", format: "binary", contentEncoding: "binary" },
                    { minimum: s, maximum: a, mime: o } = e._zod.bag;
                void 0 !== s && (r.minLength = s),
                    void 0 !== a && (r.maxLength = a),
                    o
                        ? 1 === o.length
                            ? ((r.contentMediaType = o[0]), Object.assign(n, r))
                            : (Object.assign(n, r), (n.anyOf = o.map((e) => ({ contentMediaType: e }))))
                        : Object.assign(n, r);
            })(e, 0, n, 0)),
        (e.min = (t, n) => e.check(iv(t, n))),
        (e.max = (t, n) => e.check(iR(t, n))),
        (e.mime = (t, n) => e.check(iF(Array.isArray(t) ? t : [t], n)));
});
function an(e) {
    return new at({ type: "file", ...k(e) });
}
let ai = _("ZodTransform", (e, t) => {
    nD.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Transforms cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e._zod.parse = (n, i) => {
            if ("backward" === i.direction) throw new f(e.constructor.name);
            n.addIssue = (i) => {
                "string" == typeof i
                    ? n.issues.push($(i, n.value, t))
                    : (i.fatal && (i.continue = !1),
                      i.code ?? (i.code = "custom"),
                      i.input ?? (i.input = n.value),
                      i.inst ?? (i.inst = e),
                      n.issues.push($(i)));
            };
            let r = t.transform(n.value, n);
            return r instanceof Promise ? r.then((e) => ((n.value = e), n)) : ((n.value = r), n);
        });
});
function ar(e) {
    return new ai({ type: "transform", transform: e });
}
let as = _("ZodOptional", (e, t) => {
    nP.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => i1(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
});
function aa(e) {
    return new as({ type: "optional", innerType: e });
}
let ao = _("ZodExactOptional", (e, t) => {
    nM.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => i1(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType);
});
function al(e) {
    return new ao({ type: "optional", innerType: e });
}
let au = _("ZodNullable", (e, t) => {
    nx.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r, s, a;
            return (
                (s = iq((r = e._zod.def).innerType, t, i)),
                (a = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                    ? ((a.ref = r.innerType), (n.nullable = !0))
                    : (n.anyOf = [s, { type: "null" }]))
            );
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function ac(e) {
    return new au({ type: "nullable", innerType: e });
}
function ad(e) {
    return aa(ac(e));
}
let a_ = _("ZodDefault", (e, t) => {
    nU.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iq((r = e._zod.def).innerType, t, i),
                (t.seen.get(e).ref = r.innerType),
                (n.default = JSON.parse(JSON.stringify(r.defaultValue)));
        }),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap);
});
function ah(e, t) {
    return new a_({
        type: "default",
        innerType: e,
        get defaultValue() {
            return "function" == typeof t ? t() : w(t);
        },
    });
}
let af = _("ZodPrefault", (e, t) => {
    nG.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iq((r = e._zod.def).innerType, t, i),
                (t.seen.get(e).ref = r.innerType),
                "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function aE(e, t) {
    return new af({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return "function" == typeof t ? t() : w(t);
        },
    });
}
let ap = _("ZodNonOptional", (e, t) => {
    nV.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iq((r = e._zod.def).innerType, t, i), (t.seen.get(e).ref = r.innerType);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function am(e, t) {
    return new ap({ type: "nonoptional", innerType: e, ...k(t) });
}
let ag = _("ZodSuccess", (e, t) => {
    nB.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function aA(e) {
    return new ag({ type: "success", innerType: e });
}
let aI = _("ZodCatch", (e, t) => {
    nH.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r,
                    s = e._zod.def;
                iq(s.innerType, t, i), (t.seen.get(e).ref = s.innerType);
                try {
                    r = s.catchValue(void 0);
                } catch {
                    throw Error("Dynamic catch values are not supported in JSON Schema");
                }
                n.default = r;
            })(e, t, n, i)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap);
});
function aT(e, t) {
    return new aI({ type: "catch", innerType: e, catchValue: "function" == typeof t ? t : () => t });
}
let aS = _("ZodNaN", (e, t) => {
    nj.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("NaN cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function aN(e) {
    return new aS({ type: "nan", ...k(e) });
}
let aC = _("ZodPipe", (e, t) => {
    nW.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r, s;
            return (
                (r = e._zod.def),
                void (iq((s = "input" === t.io ? ("transform" === r.in._zod.def.type ? r.out : r.in) : r.out), t, i),
                (t.seen.get(e).ref = s))
            );
        }),
        (e.in = t.in),
        (e.out = t.out);
});
function ay(e, t) {
    return new aC({ type: "pipe", in: e, out: t });
}
let aO = _("ZodCodec", (e, t) => {
    aC.init(e, t), nK.init(e, t);
});
function aR(e, t, n) {
    return new aO({ type: "pipe", in: e, out: t, transform: n.decode, reverseTransform: n.encode });
}
let av = _("ZodReadonly", (e, t) => {
    nq.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iq((r = e._zod.def).innerType, t, i), (t.seen.get(e).ref = r.innerType), (n.readOnly = !0);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function ab(e) {
    return new av({ type: "readonly", innerType: e });
}
let aL = _("ZodTemplateLiteral", (e, t) => {
    nX.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) =>
            ((e, t, n, i) => {
                let r = e._zod.pattern;
                if (!r) throw Error("Pattern not found in template literal");
                (n.type = "string"), (n.pattern = r.source);
            })(e, 0, n, 0));
});
function aD(e, t) {
    return new aL({ type: "template_literal", parts: e, ...k(t) });
}
let aw = _("ZodLazy", (e, t) => {
    n0.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iq((r = e._zod.innerType), t, i), (t.seen.get(e).ref = r);
        }),
        (e.unwrap = () => e._zod.def.getter());
});
function aP(e) {
    return new aw({ type: "lazy", getter: e });
}
let aM = _("ZodPromise", (e, t) => {
    nJ.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (t, n, i) => {
            let r;
            iq((r = e._zod.def).innerType, t, i), (t.seen.get(e).ref = r.innerType);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function ax(e) {
    return new aM({ type: "promise", innerType: e });
}
let aU = _("ZodFunction", (e, t) => {
    nQ.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Function types cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function ak(e) {
    return new aU({
        type: "function",
        input: Array.isArray(e?.input) ? sX(e?.input) : (e?.input ?? sU(sv())),
        output: e?.output ?? sv(),
    });
}
let aG = _("ZodCustom", (e, t) => {
    n1.init(e, t),
        rf.init(e, t),
        (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, i) => {
                if ("throw" === t.unrepresentable) throw Error("Custom types cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function aV(e) {
    let t = new ti({ check: "custom" });
    return (t._zod.check = e), t;
}
function aF(e, t) {
    var n;
    let i;
    return (
        (n = e ?? (() => !0)),
        (i = k(t)).abort ?? (i.abort = !0),
        new aG({ type: "custom", check: "custom", fn: n, ...i })
    );
}
function aB(e, t = {}) {
    return new aG({ type: "custom", check: "custom", fn: e, ...k(t) });
}
function aH(e) {
    var t;
    let n, i;
    return (
        (t = (t) => (
            (t.addIssue = (e) => {
                "string" == typeof e
                    ? t.issues.push($(e, t.value, n._zod.def))
                    : (e.fatal && (e.continue = !1),
                      e.code ?? (e.code = "custom"),
                      e.input ?? (e.input = t.value),
                      e.inst ?? (e.inst = n),
                      e.continue ?? (e.continue = !n._zod.def.abort),
                      t.issues.push($(e)));
            }),
            e(t.value, t)
        )),
        ((i = new ti({ check: "custom", ...k(void 0) }))._zod.check = t),
        (n = i)
    );
}
let aj = function (e) {
        let t = new ti({ check: "describe" });
        return (
            (t._zod.onattach = [
                (t) => {
                    let n = n3.get(t) ?? {};
                    n3.add(t, { ...n, description: e });
                },
            ]),
            (t._zod.check = () => {}),
            t
        );
    },
    aW = function (e) {
        let t = new ti({ check: "meta" });
        return (
            (t._zod.onattach = [
                (t) => {
                    let n = n3.get(t) ?? {};
                    n3.add(t, { ...n, ...e });
                },
            ]),
            (t._zod.check = () => {}),
            t
        );
    };
function aY(e, t = {}) {
    let n = new aG({ type: "custom", check: "custom", fn: (t) => t instanceof e, abort: !0, ...k(t) });
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
let aK = (...e) =>
    (function (e, t) {
        let n = k(t),
            i = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            r = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
        "sensitive" !== n.case &&
            ((i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
            (r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
        let s = new Set(i),
            a = new Set(r),
            o = e.Codec ?? nK,
            l = e.Boolean ?? t5,
            u = new o({
                type: "pipe",
                in: new (e.String ?? tL)({ type: "string", error: n.error }),
                out: new l({ type: "boolean", error: n.error }),
                transform: (e, t) => {
                    let i = e;
                    return (
                        "sensitive" !== n.case && (i = i.toLowerCase()),
                        !!s.has(i) ||
                            (!a.has(i) &&
                                (t.issues.push({
                                    code: "invalid_value",
                                    expected: "stringbool",
                                    values: [...s, ...a],
                                    input: t.value,
                                    inst: u,
                                    continue: !1,
                                }),
                                {}))
                    );
                },
                reverseTransform: (e, t) => (!0 === e ? i[0] || "true" : r[0] || "false"),
                error: n.error,
            });
        return u;
    })({ Codec: aO, Boolean: s_, String: rp }, ...e);
function a$(e) {
    let t = aP(() => sj([rm(e), ss(), sh(), sC(), sU(t), sJ(rm(), t)]));
    return t;
}
function az(e, t) {
    return ay(ar(e), t);
}
o || (o = {}),
    p({
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
            (s = { nan: "NaN" }),
            (e) => {
                switch (e.code) {
                    case "invalid_type": {
                        let t = s[e.expected] ?? e.expected,
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
                            i = s[n] ?? n;
                        return `Invalid input: expected ${t}, received ${i}`;
                    }
                    case "invalid_value":
                        if (1 === e.values.length) return `Invalid input: expected ${G(e.values[0])}`;
                        return `Invalid option: expected one of ${g(e.values, "|")}`;
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
                        return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${g(e.keys, ", ")}`;
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
