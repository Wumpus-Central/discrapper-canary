let i, r, a;
t.d(n, { Ikc: () => aR, YjP: () => ry, jgl: () => a0, k5n: () => a6 });
var s,
    o,
    u = {};
t.r(u),
    t.d(u, {
        base64: () => ex,
        base64url: () => eO,
        bigint: () => eB,
        boolean: () => eU,
        browserEmail: () => eS,
        cidrv4: () => eT,
        cidrv6: () => eA,
        cuid: () => ea,
        cuid2: () => es,
        date: () => eC,
        datetime: () => eR,
        domain: () => eM,
        duration: () => ec,
        e164: () => eI,
        email: () => eg,
        emoji: () => ek,
        extendedDuration: () => ef,
        guid: () => ep,
        hex: () => eK,
        hostname: () => e$,
        html5Email: () => ew,
        idnEmail: () => ez,
        integer: () => eG,
        ipv4: () => eN,
        ipv6: () => eE,
        ksuid: () => el,
        lowercase: () => eJ,
        mac: () => eZ,
        md5_base64: () => eX,
        md5_base64url: () => e0,
        md5_hex: () => eQ,
        nanoid: () => ed,
        null: () => eq,
        number: () => ej,
        rfc5322Email: () => ev,
        sha1_base64: () => e2,
        sha1_base64url: () => e4,
        sha1_hex: () => e1,
        sha256_base64: () => e9,
        sha256_base64url: () => e5,
        sha256_hex: () => e3,
        sha384_base64: () => e7,
        sha384_base64url: () => e8,
        sha384_hex: () => e6,
        sha512_base64: () => nn,
        sha512_base64url: () => nt,
        sha512_hex: () => ne,
        string: () => eF,
        time: () => eP,
        ulid: () => eo,
        undefined: () => eH,
        unicodeEmail: () => eb,
        uppercase: () => eV,
        uuid: () => eh,
        uuid4: () => e_,
        uuid6: () => em,
        uuid7: () => ey,
        xid: () => eu,
    });
var l = {};
t.r(l),
    t.d(l, {
        endsWith: () => iP,
        gt: () => iv,
        gte: () => ib,
        includes: () => iC,
        length: () => i$,
        lowercase: () => iI,
        lt: () => ig,
        lte: () => iw,
        maxLength: () => ix,
        maxSize: () => iZ,
        mime: () => iF,
        minLength: () => iO,
        minSize: () => iT,
        multipleOf: () => iE,
        negative: () => iS,
        nonnegative: () => iN,
        nonpositive: () => ik,
        normalize: () => iG,
        overwrite: () => iB,
        positive: () => iz,
        property: () => iR,
        regex: () => iM,
        size: () => iA,
        slugify: () => iH,
        startsWith: () => iD,
        toLowerCase: () => iU,
        toUpperCase: () => iq,
        trim: () => ij,
        uppercase: () => iL,
    });
var d = {};
t.r(d),
    t.d(d, {
        ZodISODate: () => i3,
        ZodISODateTime: () => i2,
        ZodISODuration: () => i7,
        ZodISOTime: () => i5,
        date: () => i9,
        datetime: () => i4,
        duration: () => i8,
        time: () => i6,
    });
var c = {};
function f(e, n, t) {
    function i(t, i) {
        if (
            (t._zod ||
                Object.defineProperty(t, "_zod", { value: { def: i, constr: s, traits: new Set() }, enumerable: !1 }),
            t._zod.traits.has(e))
        )
            return;
        t._zod.traits.add(e), n(t, i);
        let r = s.prototype,
            a = Object.keys(r);
        for (let e = 0; e < a.length; e++) {
            let n = a[e];
            n in t || (t[n] = r[n].bind(t));
        }
    }
    let r = t?.Parent ?? Object;
    class a extends r {}
    function s(e) {
        var n;
        let r = t?.Parent ? new a() : this;
        for (let t of (i(r, e), (n = r._zod).deferred ?? (n.deferred = []), r._zod.deferred)) t();
        return r;
    }
    return (
        Object.defineProperty(a, "name", { value: e }),
        Object.defineProperty(s, "init", { value: i }),
        Object.defineProperty(s, Symbol.hasInstance, {
            value: (n) => (!!t?.Parent && n instanceof t.Parent) || n?._zod?.traits?.has(e),
        }),
        Object.defineProperty(s, "name", { value: e }),
        s
    );
}
t.r(c),
    t.d(c, {
        ZodAny: () => aN,
        ZodArray: () => aL,
        ZodBase64: () => r1,
        ZodBase64URL: () => r4,
        ZodBigInt: () => ah,
        ZodBigIntFormat: () => am,
        ZodBoolean: () => af,
        ZodCIDRv4: () => rY,
        ZodCIDRv6: () => rX,
        ZodCUID: () => rL,
        ZodCUID2: () => rD,
        ZodCatch: () => sv,
        ZodCodec: () => sE,
        ZodCustom: () => sP,
        ZodCustomStringFormat: () => r8,
        ZodDate: () => aM,
        ZodDefault: () => sf,
        ZodDiscriminatedUnion: () => aH,
        ZodE164: () => r9,
        ZodEmail: () => rw,
        ZodEmoji: () => rO,
        ZodEnum: () => a5,
        ZodExactOptional: () => so,
        ZodFile: () => sn,
        ZodFunction: () => sC,
        ZodGUID: () => rb,
        ZodIPv4: () => rq,
        ZodIPv6: () => rK,
        ZodIntersection: () => aV,
        ZodJWT: () => r6,
        ZodKSUID: () => rj,
        ZodLazy: () => s$,
        ZodLiteral: () => a8,
        ZodMAC: () => rJ,
        ZodMap: () => a2,
        ZodNaN: () => sz,
        ZodNanoID: () => rM,
        ZodNever: () => aA,
        ZodNonOptional: () => sm,
        ZodNull: () => aS,
        ZodNullable: () => sl,
        ZodNumber: () => ar,
        ZodNumberFormat: () => as,
        ZodObject: () => aP,
        ZodOptional: () => sa,
        ZodPipe: () => sk,
        ZodPrefault: () => sh,
        ZodPromise: () => sI,
        ZodReadonly: () => sT,
        ZodRecord: () => aQ,
        ZodSet: () => a3,
        ZodString: () => rm,
        ZodStringFormat: () => rg,
        ZodSuccess: () => sg,
        ZodSymbol: () => aw,
        ZodTemplateLiteral: () => sx,
        ZodTransform: () => si,
        ZodTuple: () => aW,
        ZodType: () => rh,
        ZodULID: () => rR,
        ZodURL: () => rT,
        ZodUUID: () => rS,
        ZodUndefined: () => ab,
        ZodUnion: () => aG,
        ZodUnknown: () => aZ,
        ZodVoid: () => aO,
        ZodXID: () => rB,
        ZodXor: () => aU,
        _ZodString: () => r_,
        _default: () => sp,
        _function: () => sD,
        any: () => aE,
        array: () => aC,
        base64: () => r2,
        base64url: () => r3,
        bigint: () => a_,
        boolean: () => ap,
        catch: () => sb,
        check: () => sR,
        cidrv4: () => rQ,
        cidrv6: () => r0,
        codec: () => sZ,
        cuid: () => rC,
        cuid2: () => rP,
        custom: () => sF,
        date: () => aI,
        describe: () => sj,
        discriminatedUnion: () => aJ,
        e164: () => r5,
        email: () => rv,
        emoji: () => r$,
        enum: () => a6,
        exactOptional: () => su,
        file: () => st,
        float32: () => au,
        float64: () => al,
        function: () => sD,
        guid: () => rz,
        hash: () => ai,
        hex: () => at,
        hostname: () => an,
        httpUrl: () => rx,
        instanceof: () => sq,
        int: () => ao,
        int32: () => ad,
        int64: () => ay,
        intersection: () => aK,
        ipv4: () => rH,
        ipv6: () => rW,
        json: () => sJ,
        jwt: () => r7,
        keyof: () => aD,
        ksuid: () => rU,
        lazy: () => sM,
        literal: () => se,
        looseObject: () => aB,
        looseRecord: () => a1,
        mac: () => rV,
        map: () => a4,
        meta: () => sU,
        nan: () => sS,
        nanoid: () => rI,
        nativeEnum: () => a7,
        never: () => ax,
        nonoptional: () => sy,
        null: () => ak,
        nullable: () => sd,
        nullish: () => sc,
        number: () => aa,
        object: () => aR,
        optional: () => ss,
        partialRecord: () => a0,
        pipe: () => sN,
        prefault: () => s_,
        preprocess: () => sV,
        promise: () => sL,
        readonly: () => sA,
        record: () => aX,
        refine: () => sB,
        set: () => a9,
        strictObject: () => aF,
        string: () => ry,
        stringFormat: () => ae,
        stringbool: () => sH,
        success: () => sw,
        superRefine: () => sG,
        symbol: () => av,
        templateLiteral: () => sO,
        transform: () => sr,
        tuple: () => aY,
        uint32: () => ac,
        uint64: () => ag,
        ulid: () => rF,
        undefined: () => az,
        union: () => aj,
        unknown: () => aT,
        url: () => rA,
        uuid: () => rk,
        uuidv4: () => rN,
        uuidv6: () => rE,
        uuidv7: () => rZ,
        void: () => a$,
        xid: () => rG,
        xor: () => aq,
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
let _ = {};
function m(e) {
    return e && Object.assign(_, e), _;
}
function y(e) {
    let n = Object.values(e).filter((e) => "number" == typeof e);
    return Object.entries(e)
        .filter(([e, t]) => -1 === n.indexOf(+e))
        .map(([e, n]) => n);
}
function g(e, n = "|") {
    return e.map((e) => P(e)).join(n);
}
function w(e, n) {
    return "bigint" == typeof n ? n.toString() : n;
}
function v(e) {
    return {
        get value() {
            {
                let n = e();
                return Object.defineProperty(this, "value", { value: n }), n;
            }
        },
    };
}
function b(e) {
    return null == e;
}
function z(e) {
    let n = +!!e.startsWith("^"),
        t = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(n, t);
}
let S = Symbol("evaluating");
function k(e, n, t) {
    let i;
    Object.defineProperty(e, n, {
        get() {
            if (i !== S) return void 0 === i && ((i = S), (i = t())), i;
        },
        set(t) {
            Object.defineProperty(e, n, { value: t });
        },
        configurable: !0,
    });
}
function N(e, n, t) {
    Object.defineProperty(e, n, { value: t, writable: !0, enumerable: !0, configurable: !0 });
}
function E(...e) {
    let n = {};
    for (let t of e) Object.assign(n, Object.getOwnPropertyDescriptors(t));
    return Object.defineProperties({}, n);
}
function Z(e) {
    return JSON.stringify(e);
}
let T = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function A(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
let x = v(() => {
    if ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
        return Function(""), !0;
    } catch (e) {
        return !1;
    }
});
function O(e) {
    if (!1 === A(e)) return !1;
    let n = e.constructor;
    if (void 0 === n || "function" != typeof n) return !0;
    let t = n.prototype;
    return !1 !== A(t) && !1 !== Object.prototype.hasOwnProperty.call(t, "isPrototypeOf");
}
function $(e) {
    return O(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
let M = new Set(["string", "number", "symbol"]),
    I = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function L(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function C(e, n, t) {
    let i = new e._zod.constr(n ?? e._zod.def);
    return (!n || t?.parent) && (i._zod.parent = e), i;
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
function P(e) {
    return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
let R = {
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
function B(e, n = 0) {
    if (!0 === e.aborted) return !0;
    for (let t = n; t < e.issues.length; t++) if (e.issues[t]?.continue !== !0) return !0;
    return !1;
}
function G(e, n) {
    return n.map((n) => (n.path ?? (n.path = []), n.path.unshift(e), n));
}
function j(e) {
    return "string" == typeof e ? e : e?.message;
}
function U(e, n, t) {
    let i = { ...e, path: e.path ?? [] };
    return (
        e.message ||
            (i.message =
                j(e.inst?._zod.def?.error?.(e)) ??
                j(n?.error?.(e)) ??
                j(t.customError?.(e)) ??
                j(t.localeError?.(e)) ??
                "Invalid input"),
        delete i.inst,
        delete i.continue,
        n?.reportInput || delete i.input,
        i
    );
}
function q(e) {
    return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function H(e) {
    return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function J(...e) {
    let [n, t, i] = e;
    return "string" == typeof n ? { message: n, code: "custom", input: t, inst: i } : { ...n };
}
let V = (e, n) => {
        (e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: n, enumerable: !1 }),
            (e.message = JSON.stringify(n, w, 2)),
            Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 });
    },
    K = f("$ZodError", V),
    W = f("$ZodError", V, { Parent: Error }),
    Y = (e) => (n, t, i, r) => {
        let a = i ? Object.assign(i, { async: !1 }) : { async: !1 },
            s = n._zod.run({ value: t, issues: [] }, a);
        if (s instanceof Promise) throw new p();
        if (s.issues.length) {
            let n = new (r?.Err ?? e)(s.issues.map((e) => U(e, a, m())));
            throw (T(n, r?.callee), n);
        }
        return s.value;
    },
    Q = Y(W),
    X = (e) => async (n, t, i, r) => {
        let a = i ? Object.assign(i, { async: !0 }) : { async: !0 },
            s = n._zod.run({ value: t, issues: [] }, a);
        if ((s instanceof Promise && (s = await s), s.issues.length)) {
            let n = new (r?.Err ?? e)(s.issues.map((e) => U(e, a, m())));
            throw (T(n, r?.callee), n);
        }
        return s.value;
    },
    ee = X(W),
    en = (e) => (n, t, i) => {
        let r = i ? { ...i, async: !1 } : { async: !1 },
            a = n._zod.run({ value: t, issues: [] }, r);
        if (a instanceof Promise) throw new p();
        return a.issues.length
            ? { success: !1, error: new (e ?? K)(a.issues.map((e) => U(e, r, m()))) }
            : { success: !0, data: a.value };
    },
    et = en(W),
    ei = (e) => async (n, t, i) => {
        let r = i ? Object.assign(i, { async: !0 }) : { async: !0 },
            a = n._zod.run({ value: t, issues: [] }, r);
        return (
            a instanceof Promise && (a = await a),
            a.issues.length
                ? { success: !1, error: new e(a.issues.map((e) => U(e, r, m()))) }
                : { success: !0, data: a.value }
        );
    },
    er = ei(W),
    ea = /^[cC][^\s-]{8,}$/,
    es = /^[0-9a-z]+$/,
    eo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
    eu = /^[0-9a-vA-V]{20}$/,
    el = /^[A-Za-z0-9]{27}$/,
    ed = /^[a-zA-Z0-9_-]{21}$/,
    ec = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
    ef =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    ep = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
    eh = (e) =>
        e
            ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    e_ = eh(4),
    em = eh(6),
    ey = eh(7),
    eg = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
    ew =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ev =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    eb = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
    ez = eb,
    eS =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function ek() {
    return RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
let eN =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    eE =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
    eZ = (e) => {
        let n = L(e ?? ":");
        return RegExp(`^(?:[0-9A-F]{2}${n}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${n}){5}[0-9a-f]{2}$`);
    },
    eT =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
    eA =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    ex = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
    eO = /^[A-Za-z0-9_-]*$/,
    e$ =
        /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
    eM = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    eI = /^\+[1-9]\d{6,14}$/,
    eL =
        "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    eC = RegExp(`^${eL}$`);
function eD(e) {
    let n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e.precision
        ? -1 === e.precision
            ? `${n}`
            : 0 === e.precision
              ? `${n}:[0-5]\\d`
              : `${n}:[0-5]\\d\\.\\d{${e.precision}}`
        : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function eP(e) {
    return RegExp(`^${eD(e)}$`);
}
function eR(e) {
    let n = eD({ precision: e.precision }),
        t = ["Z"];
    e.local && t.push(""), e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    let i = `${n}(?:${t.join("|")})`;
    return RegExp(`^${eL}T(?:${i})$`);
}
let eF = (e) => {
        let n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
        return RegExp(`^${n}$`);
    },
    eB = /^-?\d+n?$/,
    eG = /^-?\d+$/,
    ej = /^-?\d+(?:\.\d+)?$/,
    eU = /^(?:true|false)$/i,
    eq = /^null$/i,
    eH = /^undefined$/i,
    eJ = /^[^A-Z]*$/,
    eV = /^[^a-z]*$/,
    eK = /^[0-9a-fA-F]*$/;
function eW(e, n) {
    return RegExp(`^[A-Za-z0-9+/]{${e}}${n}$`);
}
function eY(e) {
    return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
let eQ = /^[0-9a-fA-F]{32}$/,
    eX = eW(22, "=="),
    e0 = eY(22),
    e1 = /^[0-9a-fA-F]{40}$/,
    e2 = eW(27, "="),
    e4 = eY(27),
    e3 = /^[0-9a-fA-F]{64}$/,
    e9 = eW(43, "="),
    e5 = eY(43),
    e6 = /^[0-9a-fA-F]{96}$/,
    e7 = eW(64, ""),
    e8 = eY(64),
    ne = /^[0-9a-fA-F]{128}$/,
    nn = eW(86, "=="),
    nt = eY(86),
    ni = f("$ZodCheck", (e, n) => {
        var t;
        e._zod ?? (e._zod = {}), (e._zod.def = n), (t = e._zod).onattach ?? (t.onattach = []);
    }),
    nr = { number: "number", bigint: "bigint", object: "date" },
    na = f("$ZodCheckLessThan", (e, n) => {
        ni.init(e, n);
        let t = nr[typeof n.value];
        e._zod.onattach.push((e) => {
            let t = e._zod.bag,
                i = (n.inclusive ? t.maximum : t.exclusiveMaximum) ?? 1 / 0;
            n.value < i && (n.inclusive ? (t.maximum = n.value) : (t.exclusiveMaximum = n.value));
        }),
            (e._zod.check = (i) => {
                (n.inclusive ? i.value <= n.value : i.value < n.value) ||
                    i.issues.push({
                        origin: t,
                        code: "too_big",
                        maximum: "object" == typeof n.value ? n.value.getTime() : n.value,
                        input: i.value,
                        inclusive: n.inclusive,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    ns = f("$ZodCheckGreaterThan", (e, n) => {
        ni.init(e, n);
        let t = nr[typeof n.value];
        e._zod.onattach.push((e) => {
            let t = e._zod.bag,
                i = (n.inclusive ? t.minimum : t.exclusiveMinimum) ?? -1 / 0;
            n.value > i && (n.inclusive ? (t.minimum = n.value) : (t.exclusiveMinimum = n.value));
        }),
            (e._zod.check = (i) => {
                (n.inclusive ? i.value >= n.value : i.value > n.value) ||
                    i.issues.push({
                        origin: t,
                        code: "too_small",
                        minimum: "object" == typeof n.value ? n.value.getTime() : n.value,
                        input: i.value,
                        inclusive: n.inclusive,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    no = f("$ZodCheckMultipleOf", (e, n) => {
        ni.init(e, n),
            e._zod.onattach.push((e) => {
                var t;
                (t = e._zod.bag).multipleOf ?? (t.multipleOf = n.value);
            }),
            (e._zod.check = (t) => {
                if (typeof t.value != typeof n.value) throw Error("Cannot mix number and bigint in multiple_of check.");
                ("bigint" == typeof t.value
                    ? t.value % n.value === BigInt(0)
                    : 0 ===
                      (function (e, n) {
                          let t = (e.toString().split(".")[1] || "").length,
                              i = n.toString(),
                              r = (i.split(".")[1] || "").length;
                          if (0 === r && /\d?e-\d?/.test(i)) {
                              let e = i.match(/\d?e-(\d?)/);
                              e?.[1] && (r = Number.parseInt(e[1]));
                          }
                          let a = t > r ? t : r;
                          return (
                              (Number.parseInt(e.toFixed(a).replace(".", "")) %
                                  Number.parseInt(n.toFixed(a).replace(".", ""))) /
                              10 ** a
                          );
                      })(t.value, n.value)) ||
                    t.issues.push({
                        origin: typeof t.value,
                        code: "not_multiple_of",
                        divisor: n.value,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    nu = f("$ZodCheckNumberFormat", (e, n) => {
        ni.init(e, n), (n.format = n.format || "float64");
        let t = n.format?.includes("int"),
            i = t ? "int" : "number",
            [r, a] = R[n.format];
        e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.format = n.format), (i.minimum = r), (i.maximum = a), t && (i.pattern = eG);
        }),
            (e._zod.check = (s) => {
                let o = s.value;
                if (t) {
                    if (!Number.isInteger(o))
                        return void s.issues.push({
                            expected: i,
                            format: n.format,
                            code: "invalid_type",
                            continue: !1,
                            input: o,
                            inst: e,
                        });
                    if (!Number.isSafeInteger(o))
                        return void (o > 0
                            ? s.issues.push({
                                  input: o,
                                  code: "too_big",
                                  maximum: Number.MAX_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: i,
                                  inclusive: !0,
                                  continue: !n.abort,
                              })
                            : s.issues.push({
                                  input: o,
                                  code: "too_small",
                                  minimum: Number.MIN_SAFE_INTEGER,
                                  note: "Integers must be within the safe integer range.",
                                  inst: e,
                                  origin: i,
                                  inclusive: !0,
                                  continue: !n.abort,
                              }));
                }
                o < r &&
                    s.issues.push({
                        origin: "number",
                        input: o,
                        code: "too_small",
                        minimum: r,
                        inclusive: !0,
                        inst: e,
                        continue: !n.abort,
                    }),
                    o > a &&
                        s.issues.push({
                            origin: "number",
                            input: o,
                            code: "too_big",
                            maximum: a,
                            inclusive: !0,
                            inst: e,
                            continue: !n.abort,
                        });
            });
    }),
    nl = f("$ZodCheckBigIntFormat", (e, n) => {
        ni.init(e, n);
        let [t, i] = F[n.format];
        e._zod.onattach.push((e) => {
            let r = e._zod.bag;
            (r.format = n.format), (r.minimum = t), (r.maximum = i);
        }),
            (e._zod.check = (r) => {
                let a = r.value;
                a < t &&
                    r.issues.push({
                        origin: "bigint",
                        input: a,
                        code: "too_small",
                        minimum: t,
                        inclusive: !0,
                        inst: e,
                        continue: !n.abort,
                    }),
                    a > i &&
                        r.issues.push({
                            origin: "bigint",
                            input: a,
                            code: "too_big",
                            maximum: i,
                            inclusive: !0,
                            inst: e,
                            continue: !n.abort,
                        });
            });
    }),
    nd = f("$ZodCheckMaxSize", (e, n) => {
        var t;
        ni.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return !b(n) && void 0 !== n.size;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag.maximum ?? 1 / 0;
                n.maximum < t && (e._zod.bag.maximum = n.maximum);
            }),
            (e._zod.check = (t) => {
                let i = t.value;
                i.size <= n.maximum ||
                    t.issues.push({
                        origin: q(i),
                        code: "too_big",
                        maximum: n.maximum,
                        inclusive: !0,
                        input: i,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    nc = f("$ZodCheckMinSize", (e, n) => {
        var t;
        ni.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return !b(n) && void 0 !== n.size;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag.minimum ?? -1 / 0;
                n.minimum > t && (e._zod.bag.minimum = n.minimum);
            }),
            (e._zod.check = (t) => {
                let i = t.value;
                i.size >= n.minimum ||
                    t.issues.push({
                        origin: q(i),
                        code: "too_small",
                        minimum: n.minimum,
                        inclusive: !0,
                        input: i,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    nf = f("$ZodCheckSizeEquals", (e, n) => {
        var t;
        ni.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return !b(n) && void 0 !== n.size;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                (t.minimum = n.size), (t.maximum = n.size), (t.size = n.size);
            }),
            (e._zod.check = (t) => {
                let i = t.value,
                    r = i.size;
                if (r === n.size) return;
                let a = r > n.size;
                t.issues.push({
                    origin: q(i),
                    ...(a ? { code: "too_big", maximum: n.size } : { code: "too_small", minimum: n.size }),
                    inclusive: !0,
                    exact: !0,
                    input: t.value,
                    inst: e,
                    continue: !n.abort,
                });
            });
    }),
    np = f("$ZodCheckMaxLength", (e, n) => {
        var t;
        ni.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return !b(n) && void 0 !== n.length;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag.maximum ?? 1 / 0;
                n.maximum < t && (e._zod.bag.maximum = n.maximum);
            }),
            (e._zod.check = (t) => {
                let i = t.value;
                if (i.length <= n.maximum) return;
                let r = H(i);
                t.issues.push({
                    origin: r,
                    code: "too_big",
                    maximum: n.maximum,
                    inclusive: !0,
                    input: i,
                    inst: e,
                    continue: !n.abort,
                });
            });
    }),
    nh = f("$ZodCheckMinLength", (e, n) => {
        var t;
        ni.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return !b(n) && void 0 !== n.length;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag.minimum ?? -1 / 0;
                n.minimum > t && (e._zod.bag.minimum = n.minimum);
            }),
            (e._zod.check = (t) => {
                let i = t.value;
                if (i.length >= n.minimum) return;
                let r = H(i);
                t.issues.push({
                    origin: r,
                    code: "too_small",
                    minimum: n.minimum,
                    inclusive: !0,
                    input: i,
                    inst: e,
                    continue: !n.abort,
                });
            });
    }),
    n_ = f("$ZodCheckLengthEquals", (e, n) => {
        var t;
        ni.init(e, n),
            (t = e._zod.def).when ??
                (t.when = (e) => {
                    let n = e.value;
                    return !b(n) && void 0 !== n.length;
                }),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                (t.minimum = n.length), (t.maximum = n.length), (t.length = n.length);
            }),
            (e._zod.check = (t) => {
                let i = t.value,
                    r = i.length;
                if (r === n.length) return;
                let a = H(i),
                    s = r > n.length;
                t.issues.push({
                    origin: a,
                    ...(s ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length }),
                    inclusive: !0,
                    exact: !0,
                    input: t.value,
                    inst: e,
                    continue: !n.abort,
                });
            });
    }),
    nm = f("$ZodCheckStringFormat", (e, n) => {
        var t, i;
        ni.init(e, n),
            e._zod.onattach.push((e) => {
                let t = e._zod.bag;
                (t.format = n.format), n.pattern && (t.patterns ?? (t.patterns = new Set()), t.patterns.add(n.pattern));
            }),
            n.pattern
                ? ((t = e._zod).check ??
                  (t.check = (t) => {
                      (n.pattern.lastIndex = 0),
                          n.pattern.test(t.value) ||
                              t.issues.push({
                                  origin: "string",
                                  code: "invalid_format",
                                  format: n.format,
                                  input: t.value,
                                  ...(n.pattern ? { pattern: n.pattern.toString() } : {}),
                                  inst: e,
                                  continue: !n.abort,
                              });
                  }))
                : ((i = e._zod).check ?? (i.check = () => {}));
    }),
    ny = f("$ZodCheckRegex", (e, n) => {
        nm.init(e, n),
            (e._zod.check = (t) => {
                (n.pattern.lastIndex = 0),
                    n.pattern.test(t.value) ||
                        t.issues.push({
                            origin: "string",
                            code: "invalid_format",
                            format: "regex",
                            input: t.value,
                            pattern: n.pattern.toString(),
                            inst: e,
                            continue: !n.abort,
                        });
            });
    }),
    ng = f("$ZodCheckLowerCase", (e, n) => {
        n.pattern ?? (n.pattern = eJ), nm.init(e, n);
    }),
    nw = f("$ZodCheckUpperCase", (e, n) => {
        n.pattern ?? (n.pattern = eV), nm.init(e, n);
    }),
    nv = f("$ZodCheckIncludes", (e, n) => {
        ni.init(e, n);
        let t = L(n.includes),
            i = new RegExp("number" == typeof n.position ? `^.{${n.position}}${t}` : t);
        (n.pattern = i),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                n.patterns ?? (n.patterns = new Set()), n.patterns.add(i);
            }),
            (e._zod.check = (t) => {
                t.value.includes(n.includes, n.position) ||
                    t.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "includes",
                        includes: n.includes,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    nb = f("$ZodCheckStartsWith", (e, n) => {
        ni.init(e, n);
        let t = RegExp(`^${L(n.prefix)}.*`);
        n.pattern ?? (n.pattern = t),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                n.patterns ?? (n.patterns = new Set()), n.patterns.add(t);
            }),
            (e._zod.check = (t) => {
                t.value.startsWith(n.prefix) ||
                    t.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "starts_with",
                        prefix: n.prefix,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    nz = f("$ZodCheckEndsWith", (e, n) => {
        ni.init(e, n);
        let t = RegExp(`.*${L(n.suffix)}$`);
        n.pattern ?? (n.pattern = t),
            e._zod.onattach.push((e) => {
                let n = e._zod.bag;
                n.patterns ?? (n.patterns = new Set()), n.patterns.add(t);
            }),
            (e._zod.check = (t) => {
                t.value.endsWith(n.suffix) ||
                    t.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: "ends_with",
                        suffix: n.suffix,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    });
function nS(e, n, t) {
    e.issues.length && n.issues.push(...G(t, e.issues));
}
let nk = f("$ZodCheckProperty", (e, n) => {
        ni.init(e, n),
            (e._zod.check = (e) => {
                let t = n.schema._zod.run({ value: e.value[n.property], issues: [] }, {});
                if (t instanceof Promise) return t.then((t) => nS(t, e, n.property));
                nS(t, e, n.property);
            });
    }),
    nN = f("$ZodCheckMimeType", (e, n) => {
        ni.init(e, n);
        let t = new Set(n.mime);
        e._zod.onattach.push((e) => {
            e._zod.bag.mime = n.mime;
        }),
            (e._zod.check = (i) => {
                t.has(i.value.type) ||
                    i.issues.push({
                        code: "invalid_value",
                        values: n.mime,
                        input: i.value.type,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    nE = f("$ZodCheckOverwrite", (e, n) => {
        ni.init(e, n),
            (e._zod.check = (e) => {
                e.value = n.tx(e.value);
            });
    });
class nZ {
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
        let n = e.split("\n").filter((e) => e),
            t = Math.min(...n.map((e) => e.length - e.trimStart().length));
        for (let e of n.map((e) => e.slice(t)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e);
    }
    compile() {
        return Function(...this?.args, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"));
    }
}
let nT = { major: 4, minor: 3, patch: 6 },
    nA = f("$ZodType", (e, n) => {
        var t;
        e ?? (e = {}), (e._zod.def = n), (e._zod.bag = e._zod.bag || {}), (e._zod.version = nT);
        let i = [...(e._zod.def.checks ?? [])];
        for (let n of (e._zod.traits.has("$ZodCheck") && i.unshift(e), i)) for (let t of n._zod.onattach) t(e);
        if (0 === i.length)
            (t = e._zod).deferred ?? (t.deferred = []),
                e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse;
                });
        else {
            let n = (e, n, t) => {
                    let i,
                        r = B(e);
                    for (let a of n) {
                        if (a._zod.def.when) {
                            if (!a._zod.def.when(e)) continue;
                        } else if (r) continue;
                        let n = e.issues.length,
                            s = a._zod.check(e);
                        if (s instanceof Promise && t?.async === !1) throw new p();
                        if (i || s instanceof Promise)
                            i = (i ?? Promise.resolve()).then(async () => {
                                await s, e.issues.length !== n && (r || (r = B(e, n)));
                            });
                        else {
                            if (e.issues.length === n) continue;
                            r || (r = B(e, n));
                        }
                    }
                    return i ? i.then(() => e) : e;
                },
                t = (t, r, a) => {
                    if (B(t)) return (t.aborted = !0), t;
                    let s = n(r, i, a);
                    if (s instanceof Promise) {
                        if (!1 === a.async) throw new p();
                        return s.then((n) => e._zod.parse(n, a));
                    }
                    return e._zod.parse(s, a);
                };
            e._zod.run = (r, a) => {
                if (a.skipChecks) return e._zod.parse(r, a);
                if ("backward" === a.direction) {
                    let n = e._zod.parse({ value: r.value, issues: [] }, { ...a, skipChecks: !0 });
                    return n instanceof Promise ? n.then((e) => t(e, r, a)) : t(n, r, a);
                }
                let s = e._zod.parse(r, a);
                if (s instanceof Promise) {
                    if (!1 === a.async) throw new p();
                    return s.then((e) => n(e, i, a));
                }
                return n(s, i, a);
            };
        }
        k(e, "~standard", () => ({
            validate: (n) => {
                try {
                    let t = et(e, n);
                    return t.success ? { value: t.data } : { issues: t.error?.issues };
                } catch (t) {
                    return er(e, n).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }));
                }
            },
            vendor: "zod",
            version: 1,
        }));
    }),
    nx = f("$ZodString", (e, n) => {
        nA.init(e, n),
            (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? eF(e._zod.bag)),
            (e._zod.parse = (t, i) => {
                if (n.coerce)
                    try {
                        t.value = String(t.value);
                    } catch (e) {}
                return (
                    "string" == typeof t.value ||
                        t.issues.push({ expected: "string", code: "invalid_type", input: t.value, inst: e }),
                    t
                );
            });
    }),
    nO = f("$ZodStringFormat", (e, n) => {
        nm.init(e, n), nx.init(e, n);
    }),
    n$ = f("$ZodGUID", (e, n) => {
        n.pattern ?? (n.pattern = ep), nO.init(e, n);
    }),
    nM = f("$ZodUUID", (e, n) => {
        if (n.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[n.version];
            if (void 0 === e) throw Error(`Invalid UUID version: "${n.version}"`);
            n.pattern ?? (n.pattern = eh(e));
        } else n.pattern ?? (n.pattern = eh());
        nO.init(e, n);
    }),
    nI = f("$ZodEmail", (e, n) => {
        n.pattern ?? (n.pattern = eg), nO.init(e, n);
    }),
    nL = f("$ZodURL", (e, n) => {
        nO.init(e, n),
            (e._zod.check = (t) => {
                try {
                    let i = t.value.trim(),
                        r = new URL(i);
                    n.hostname &&
                        ((n.hostname.lastIndex = 0),
                        n.hostname.test(r.hostname) ||
                            t.issues.push({
                                code: "invalid_format",
                                format: "url",
                                note: "Invalid hostname",
                                pattern: n.hostname.source,
                                input: t.value,
                                inst: e,
                                continue: !n.abort,
                            })),
                        n.protocol &&
                            ((n.protocol.lastIndex = 0),
                            n.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) ||
                                t.issues.push({
                                    code: "invalid_format",
                                    format: "url",
                                    note: "Invalid protocol",
                                    pattern: n.protocol.source,
                                    input: t.value,
                                    inst: e,
                                    continue: !n.abort,
                                })),
                        n.normalize ? (t.value = r.href) : (t.value = i);
                    return;
                } catch (i) {
                    t.issues.push({
                        code: "invalid_format",
                        format: "url",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
                }
            });
    }),
    nC = f("$ZodEmoji", (e, n) => {
        n.pattern ?? (n.pattern = ek()), nO.init(e, n);
    }),
    nD = f("$ZodNanoID", (e, n) => {
        n.pattern ?? (n.pattern = ed), nO.init(e, n);
    }),
    nP = f("$ZodCUID", (e, n) => {
        n.pattern ?? (n.pattern = ea), nO.init(e, n);
    }),
    nR = f("$ZodCUID2", (e, n) => {
        n.pattern ?? (n.pattern = es), nO.init(e, n);
    }),
    nF = f("$ZodULID", (e, n) => {
        n.pattern ?? (n.pattern = eo), nO.init(e, n);
    }),
    nB = f("$ZodXID", (e, n) => {
        n.pattern ?? (n.pattern = eu), nO.init(e, n);
    }),
    nG = f("$ZodKSUID", (e, n) => {
        n.pattern ?? (n.pattern = el), nO.init(e, n);
    }),
    nj = f("$ZodISODateTime", (e, n) => {
        n.pattern ?? (n.pattern = eR(n)), nO.init(e, n);
    }),
    nU = f("$ZodISODate", (e, n) => {
        n.pattern ?? (n.pattern = eC), nO.init(e, n);
    }),
    nq = f("$ZodISOTime", (e, n) => {
        n.pattern ?? (n.pattern = eP(n)), nO.init(e, n);
    }),
    nH = f("$ZodISODuration", (e, n) => {
        n.pattern ?? (n.pattern = ec), nO.init(e, n);
    }),
    nJ = f("$ZodIPv4", (e, n) => {
        n.pattern ?? (n.pattern = eN), nO.init(e, n), (e._zod.bag.format = "ipv4");
    }),
    nV = f("$ZodIPv6", (e, n) => {
        n.pattern ?? (n.pattern = eE),
            nO.init(e, n),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (t) => {
                try {
                    new URL(`http://[${t.value}]`);
                } catch {
                    t.issues.push({
                        code: "invalid_format",
                        format: "ipv6",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
                }
            });
    }),
    nK = f("$ZodMAC", (e, n) => {
        n.pattern ?? (n.pattern = eZ(n.delimiter)), nO.init(e, n), (e._zod.bag.format = "mac");
    }),
    nW = f("$ZodCIDRv4", (e, n) => {
        n.pattern ?? (n.pattern = eT), nO.init(e, n);
    }),
    nY = f("$ZodCIDRv6", (e, n) => {
        n.pattern ?? (n.pattern = eA),
            nO.init(e, n),
            (e._zod.check = (t) => {
                let i = t.value.split("/");
                try {
                    if (2 !== i.length) throw Error();
                    let [e, n] = i;
                    if (!n) throw Error();
                    let t = Number(n);
                    if (`${t}` !== n || t < 0 || t > 128) throw Error();
                    new URL(`http://[${e}]`);
                } catch {
                    t.issues.push({
                        code: "invalid_format",
                        format: "cidrv6",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
                }
            });
    });
function nQ(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return atob(e), !0;
    } catch {
        return !1;
    }
}
let nX = f("$ZodBase64", (e, n) => {
        n.pattern ?? (n.pattern = ex),
            nO.init(e, n),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (t) => {
                nQ(t.value) ||
                    t.issues.push({
                        code: "invalid_format",
                        format: "base64",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    n0 = f("$ZodBase64URL", (e, n) => {
        n.pattern ?? (n.pattern = eO),
            nO.init(e, n),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (t) => {
                !(function (e) {
                    if (!eO.test(e)) return !1;
                    let n = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                    return nQ(n.padEnd(4 * Math.ceil(n.length / 4), "="));
                })(t.value) &&
                    t.issues.push({
                        code: "invalid_format",
                        format: "base64url",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    n1 = f("$ZodE164", (e, n) => {
        n.pattern ?? (n.pattern = eI), nO.init(e, n);
    }),
    n2 = f("$ZodJWT", (e, n) => {
        nO.init(e, n),
            (e._zod.check = (t) => {
                !(function (e, n = null) {
                    try {
                        let t = e.split(".");
                        if (3 !== t.length) return !1;
                        let [i] = t;
                        if (!i) return !1;
                        let r = JSON.parse(atob(i));
                        if (("typ" in r && r?.typ !== "JWT") || !r.alg || (n && (!("alg" in r) || r.alg !== n)))
                            return !1;
                        return !0;
                    } catch {
                        return !1;
                    }
                })(t.value, n.alg) &&
                    t.issues.push({
                        code: "invalid_format",
                        format: "jwt",
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    n4 = f("$ZodCustomStringFormat", (e, n) => {
        nO.init(e, n),
            (e._zod.check = (t) => {
                n.fn(t.value) ||
                    t.issues.push({
                        code: "invalid_format",
                        format: n.format,
                        input: t.value,
                        inst: e,
                        continue: !n.abort,
                    });
            });
    }),
    n3 = f("$ZodNumber", (e, n) => {
        nA.init(e, n),
            (e._zod.pattern = e._zod.bag.pattern ?? ej),
            (e._zod.parse = (t, i) => {
                if (n.coerce)
                    try {
                        t.value = Number(t.value);
                    } catch (e) {}
                let r = t.value;
                if ("number" == typeof r && !Number.isNaN(r) && Number.isFinite(r)) return t;
                let a =
                    "number" == typeof r
                        ? Number.isNaN(r)
                            ? "NaN"
                            : Number.isFinite(r)
                              ? void 0
                              : "Infinity"
                        : void 0;
                return (
                    t.issues.push({
                        expected: "number",
                        code: "invalid_type",
                        input: r,
                        inst: e,
                        ...(a ? { received: a } : {}),
                    }),
                    t
                );
            });
    }),
    n9 = f("$ZodNumberFormat", (e, n) => {
        nu.init(e, n), n3.init(e, n);
    }),
    n5 = f("$ZodBoolean", (e, n) => {
        nA.init(e, n),
            (e._zod.pattern = eU),
            (e._zod.parse = (t, i) => {
                if (n.coerce)
                    try {
                        t.value = !!t.value;
                    } catch (e) {}
                let r = t.value;
                return (
                    "boolean" == typeof r ||
                        t.issues.push({ expected: "boolean", code: "invalid_type", input: r, inst: e }),
                    t
                );
            });
    }),
    n6 = f("$ZodBigInt", (e, n) => {
        nA.init(e, n),
            (e._zod.pattern = eB),
            (e._zod.parse = (t, i) => {
                if (n.coerce)
                    try {
                        t.value = BigInt(t.value);
                    } catch (e) {}
                return (
                    "bigint" == typeof t.value ||
                        t.issues.push({ expected: "bigint", code: "invalid_type", input: t.value, inst: e }),
                    t
                );
            });
    }),
    n7 = f("$ZodBigIntFormat", (e, n) => {
        nl.init(e, n), n6.init(e, n);
    }),
    n8 = f("$ZodSymbol", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (n, t) => {
                let i = n.value;
                return (
                    "symbol" == typeof i ||
                        n.issues.push({ expected: "symbol", code: "invalid_type", input: i, inst: e }),
                    n
                );
            });
    }),
    te = f("$ZodUndefined", (e, n) => {
        nA.init(e, n),
            (e._zod.pattern = eH),
            (e._zod.values = new Set([void 0])),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            (e._zod.parse = (n, t) => {
                let i = n.value;
                return (
                    void 0 === i || n.issues.push({ expected: "undefined", code: "invalid_type", input: i, inst: e }), n
                );
            });
    }),
    tn = f("$ZodNull", (e, n) => {
        nA.init(e, n),
            (e._zod.pattern = eq),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (n, t) => {
                let i = n.value;
                return null === i || n.issues.push({ expected: "null", code: "invalid_type", input: i, inst: e }), n;
            });
    }),
    tt = f("$ZodAny", (e, n) => {
        nA.init(e, n), (e._zod.parse = (e) => e);
    }),
    ti = f("$ZodUnknown", (e, n) => {
        nA.init(e, n), (e._zod.parse = (e) => e);
    }),
    tr = f("$ZodNever", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (n, t) => (
                n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: e }), n
            ));
    }),
    ta = f("$ZodVoid", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (n, t) => {
                let i = n.value;
                return void 0 === i || n.issues.push({ expected: "void", code: "invalid_type", input: i, inst: e }), n;
            });
    }),
    ts = f("$ZodDate", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (t, i) => {
                if (n.coerce)
                    try {
                        t.value = new Date(t.value);
                    } catch (e) {}
                let r = t.value,
                    a = r instanceof Date;
                return (
                    (a && !Number.isNaN(r.getTime())) ||
                        t.issues.push({
                            expected: "date",
                            code: "invalid_type",
                            input: r,
                            ...(a ? { received: "Invalid Date" } : {}),
                            inst: e,
                        }),
                    t
                );
            });
    });
function to(e, n, t) {
    e.issues.length && n.issues.push(...G(t, e.issues)), (n.value[t] = e.value);
}
let tu = f("$ZodArray", (e, n) => {
    nA.init(e, n),
        (e._zod.parse = (t, i) => {
            let r = t.value;
            if (!Array.isArray(r))
                return t.issues.push({ expected: "array", code: "invalid_type", input: r, inst: e }), t;
            t.value = Array(r.length);
            let a = [];
            for (let e = 0; e < r.length; e++) {
                let s = r[e],
                    o = n.element._zod.run({ value: s, issues: [] }, i);
                o instanceof Promise ? a.push(o.then((n) => to(n, t, e))) : to(o, t, e);
            }
            return a.length ? Promise.all(a).then(() => t) : t;
        });
});
function tl(e, n, t, i, r) {
    if (e.issues.length) {
        if (r && !(t in i)) return;
        n.issues.push(...G(t, e.issues));
    }
    void 0 === e.value ? t in i && (n.value[t] = void 0) : (n.value[t] = e.value);
}
function td(e) {
    var n;
    let t = Object.keys(e.shape);
    for (let n of t)
        if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${n}": expected a Zod schema`);
    let i = Object.keys((n = e.shape)).filter((e) => "optional" === n[e]._zod.optin && "optional" === n[e]._zod.optout);
    return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(i) };
}
function tc(e, n, t, i, r, a) {
    let s = [],
        o = r.keySet,
        u = r.catchall._zod,
        l = u.def.type,
        d = "optional" === u.optout;
    for (let r in n) {
        if (o.has(r)) continue;
        if ("never" === l) {
            s.push(r);
            continue;
        }
        let a = u.run({ value: n[r], issues: [] }, i);
        a instanceof Promise ? e.push(a.then((e) => tl(e, t, r, n, d))) : tl(a, t, r, n, d);
    }
    return (s.length && t.issues.push({ code: "unrecognized_keys", keys: s, input: n, inst: a }), e.length)
        ? Promise.all(e).then(() => t)
        : t;
}
let tf = f("$ZodObject", (e, n) => {
        let t;
        nA.init(e, n);
        let i = Object.getOwnPropertyDescriptor(n, "shape");
        if (!i?.get) {
            let e = n.shape;
            Object.defineProperty(n, "shape", {
                get: () => {
                    let t = { ...e };
                    return Object.defineProperty(n, "shape", { value: t }), t;
                },
            });
        }
        let r = v(() => td(n));
        k(e._zod, "propValues", () => {
            let e = n.shape,
                t = {};
            for (let n in e) {
                let i = e[n]._zod;
                if (i.values) for (let e of (t[n] ?? (t[n] = new Set()), i.values)) t[n].add(e);
            }
            return t;
        });
        let a = n.catchall;
        e._zod.parse = (n, i) => {
            t ?? (t = r.value);
            let s = n.value;
            if (!A(s)) return n.issues.push({ expected: "object", code: "invalid_type", input: s, inst: e }), n;
            n.value = {};
            let o = [],
                u = t.shape;
            for (let e of t.keys) {
                let t = u[e],
                    r = "optional" === t._zod.optout,
                    a = t._zod.run({ value: s[e], issues: [] }, i);
                a instanceof Promise ? o.push(a.then((t) => tl(t, n, e, s, r))) : tl(a, n, e, s, r);
            }
            return a ? tc(o, s, n, i, r.value, e) : o.length ? Promise.all(o).then(() => n) : n;
        };
    }),
    tp = f("$ZodObjectJIT", (e, n) => {
        let t, i;
        tf.init(e, n);
        let r = e._zod.parse,
            a = v(() => td(n)),
            s = !_.jitless,
            o = s && x.value,
            u = n.catchall;
        e._zod.parse = (l, d) => {
            i ?? (i = a.value);
            let c = l.value;
            return A(c)
                ? s && o && d?.async === !1 && !0 !== d.jitless
                    ? (t ||
                          (t = ((e) => {
                              let n = new nZ(["shape", "payload", "ctx"]),
                                  t = a.value,
                                  i = (e) => {
                                      let n = Z(e);
                                      return `shape[${n}]._zod.run({ value: input[${n}], issues: [] }, ctx)`;
                                  };
                              n.write("const input = payload.value;");
                              let r = Object.create(null),
                                  s = 0;
                              for (let e of t.keys) r[e] = `key_${s++}`;
                              for (let a of (n.write("const newResult = {};"), t.keys)) {
                                  let t = r[a],
                                      s = Z(a),
                                      o = e[a],
                                      u = o?._zod?.optout === "optional";
                                  n.write(`const ${t} = ${i(a)};`),
                                      u
                                          ? n.write(`
        if (${t}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${t}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${t}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${t}.value;
        }
        
      `)
                                          : n.write(`
        if (${t}.issues.length) {
          payload.issues = payload.issues.concat(${t}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${t}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${t}.value;
        }
        
      `);
                              }
                              n.write("payload.value = newResult;"), n.write("return payload;");
                              let o = n.compile();
                              return (n, t) => o(e, n, t);
                          })(n.shape)),
                      (l = t(l, d)),
                      u)
                        ? tc([], c, l, d, i, e)
                        : l
                    : r(l, d)
                : (l.issues.push({ expected: "object", code: "invalid_type", input: c, inst: e }), l);
        };
    });
function th(e, n, t, i) {
    for (let t of e) if (0 === t.issues.length) return (n.value = t.value), n;
    let r = e.filter((e) => !B(e));
    return 1 === r.length
        ? ((n.value = r[0].value), r[0])
        : (n.issues.push({
              code: "invalid_union",
              input: n.value,
              inst: t,
              errors: e.map((e) => e.issues.map((e) => U(e, i, m()))),
          }),
          n);
}
let t_ = f("$ZodUnion", (e, n) => {
    nA.init(e, n),
        k(e._zod, "optin", () => (n.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0)),
        k(e._zod, "optout", () => (n.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
        k(e._zod, "values", () => {
            if (n.options.every((e) => e._zod.values))
                return new Set(n.options.flatMap((e) => Array.from(e._zod.values)));
        }),
        k(e._zod, "pattern", () => {
            if (n.options.every((e) => e._zod.pattern)) {
                let e = n.options.map((e) => e._zod.pattern);
                return RegExp(`^(${e.map((e) => z(e.source)).join("|")})$`);
            }
        });
    let t = 1 === n.options.length,
        i = n.options[0]._zod.run;
    e._zod.parse = (r, a) => {
        if (t) return i(r, a);
        let s = !1,
            o = [];
        for (let e of n.options) {
            let n = e._zod.run({ value: r.value, issues: [] }, a);
            if (n instanceof Promise) o.push(n), (s = !0);
            else {
                if (0 === n.issues.length) return n;
                o.push(n);
            }
        }
        return s ? Promise.all(o).then((n) => th(n, r, e, a)) : th(o, r, e, a);
    };
});
function tm(e, n, t, i) {
    let r = e.filter((e) => 0 === e.issues.length);
    return (
        1 === r.length
            ? (n.value = r[0].value)
            : 0 === r.length
              ? n.issues.push({
                    code: "invalid_union",
                    input: n.value,
                    inst: t,
                    errors: e.map((e) => e.issues.map((e) => U(e, i, m()))),
                })
              : n.issues.push({ code: "invalid_union", input: n.value, inst: t, errors: [], inclusive: !1 }),
        n
    );
}
let ty = f("$ZodXor", (e, n) => {
        t_.init(e, n), (n.inclusive = !1);
        let t = 1 === n.options.length,
            i = n.options[0]._zod.run;
        e._zod.parse = (r, a) => {
            if (t) return i(r, a);
            let s = !1,
                o = [];
            for (let e of n.options) {
                let n = e._zod.run({ value: r.value, issues: [] }, a);
                n instanceof Promise ? (o.push(n), (s = !0)) : o.push(n);
            }
            return s ? Promise.all(o).then((n) => tm(n, r, e, a)) : tm(o, r, e, a);
        };
    }),
    tg = f("$ZodDiscriminatedUnion", (e, n) => {
        (n.inclusive = !1), t_.init(e, n);
        let t = e._zod.parse;
        k(e._zod, "propValues", () => {
            let e = {};
            for (let t of n.options) {
                let i = t._zod.propValues;
                if (!i || 0 === Object.keys(i).length)
                    throw Error(`Invalid discriminated union option at index "${n.options.indexOf(t)}"`);
                for (let [n, t] of Object.entries(i)) for (let i of (e[n] || (e[n] = new Set()), t)) e[n].add(i);
            }
            return e;
        });
        let i = v(() => {
            let e = n.options,
                t = new Map();
            for (let i of e) {
                let e = i._zod.propValues?.[n.discriminator];
                if (!e || 0 === e.size)
                    throw Error(`Invalid discriminated union option at index "${n.options.indexOf(i)}"`);
                for (let n of e) {
                    if (t.has(n)) throw Error(`Duplicate discriminator value "${String(n)}"`);
                    t.set(n, i);
                }
            }
            return t;
        });
        e._zod.parse = (r, a) => {
            let s = r.value;
            if (!A(s)) return r.issues.push({ code: "invalid_type", expected: "object", input: s, inst: e }), r;
            let o = i.value.get(s?.[n.discriminator]);
            return o
                ? o._zod.run(r, a)
                : n.unionFallback
                  ? t(r, a)
                  : (r.issues.push({
                        code: "invalid_union",
                        errors: [],
                        note: "No matching discriminator",
                        discriminator: n.discriminator,
                        input: s,
                        path: [n.discriminator],
                        inst: e,
                    }),
                    r);
        };
    }),
    tw = f("$ZodIntersection", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (e, t) => {
                let i = e.value,
                    r = n.left._zod.run({ value: i, issues: [] }, t),
                    a = n.right._zod.run({ value: i, issues: [] }, t);
                return r instanceof Promise || a instanceof Promise
                    ? Promise.all([r, a]).then(([n, t]) => tv(e, n, t))
                    : tv(e, r, a);
            });
    });
function tv(e, n, t) {
    let i,
        r = new Map();
    for (let t of n.issues)
        if ("unrecognized_keys" === t.code)
            for (let e of (i ?? (i = t), t.keys)) r.has(e) || r.set(e, {}), (r.get(e).l = !0);
        else e.issues.push(t);
    for (let n of t.issues)
        if ("unrecognized_keys" === n.code) for (let e of n.keys) r.has(e) || r.set(e, {}), (r.get(e).r = !0);
        else e.issues.push(n);
    let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
    if ((a.length && i && e.issues.push({ ...i, keys: a }), B(e))) return e;
    let s = (function e(n, t) {
        if (n === t || (n instanceof Date && t instanceof Date && +n == +t)) return { valid: !0, data: n };
        if (O(n) && O(t)) {
            let i = Object.keys(t),
                r = Object.keys(n).filter((e) => -1 !== i.indexOf(e)),
                a = { ...n, ...t };
            for (let i of r) {
                let r = e(n[i], t[i]);
                if (!r.valid) return { valid: !1, mergeErrorPath: [i, ...r.mergeErrorPath] };
                a[i] = r.data;
            }
            return { valid: !0, data: a };
        }
        if (Array.isArray(n) && Array.isArray(t)) {
            if (n.length !== t.length) return { valid: !1, mergeErrorPath: [] };
            let i = [];
            for (let r = 0; r < n.length; r++) {
                let a = e(n[r], t[r]);
                if (!a.valid) return { valid: !1, mergeErrorPath: [r, ...a.mergeErrorPath] };
                i.push(a.data);
            }
            return { valid: !0, data: i };
        }
        return { valid: !1, mergeErrorPath: [] };
    })(n.value, t.value);
    if (!s.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
    return (e.value = s.data), e;
}
let tb = f("$ZodTuple", (e, n) => {
    nA.init(e, n);
    let t = n.items;
    e._zod.parse = (i, r) => {
        let a = i.value;
        if (!Array.isArray(a)) return i.issues.push({ input: a, inst: e, expected: "tuple", code: "invalid_type" }), i;
        i.value = [];
        let s = [],
            o = [...t].reverse().findIndex((e) => "optional" !== e._zod.optin),
            u = -1 === o ? 0 : t.length - o;
        if (!n.rest) {
            let n = a.length > t.length,
                r = a.length < u - 1;
            if (n || r)
                return (
                    i.issues.push({
                        ...(n
                            ? { code: "too_big", maximum: t.length, inclusive: !0 }
                            : { code: "too_small", minimum: t.length }),
                        input: a,
                        inst: e,
                        origin: "array",
                    }),
                    i
                );
        }
        let l = -1;
        for (let e of t) {
            if (++l >= a.length && l >= u) continue;
            let n = e._zod.run({ value: a[l], issues: [] }, r);
            n instanceof Promise ? s.push(n.then((e) => tz(e, i, l))) : tz(n, i, l);
        }
        if (n.rest)
            for (let e of a.slice(t.length)) {
                l++;
                let t = n.rest._zod.run({ value: e, issues: [] }, r);
                t instanceof Promise ? s.push(t.then((e) => tz(e, i, l))) : tz(t, i, l);
            }
        return s.length ? Promise.all(s).then(() => i) : i;
    };
});
function tz(e, n, t) {
    e.issues.length && n.issues.push(...G(t, e.issues)), (n.value[t] = e.value);
}
let tS = f("$ZodRecord", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (t, i) => {
                let r = t.value;
                if (!O(r)) return t.issues.push({ expected: "record", code: "invalid_type", input: r, inst: e }), t;
                let a = [],
                    s = n.keyType._zod.values;
                if (s) {
                    let o;
                    t.value = {};
                    let u = new Set();
                    for (let e of s)
                        if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                            u.add("number" == typeof e ? e.toString() : e);
                            let s = n.valueType._zod.run({ value: r[e], issues: [] }, i);
                            s instanceof Promise
                                ? a.push(
                                      s.then((n) => {
                                          n.issues.length && t.issues.push(...G(e, n.issues)), (t.value[e] = n.value);
                                      }),
                                  )
                                : (s.issues.length && t.issues.push(...G(e, s.issues)), (t.value[e] = s.value));
                        }
                    for (let e in r) u.has(e) || (o = o ?? []).push(e);
                    o && o.length > 0 && t.issues.push({ code: "unrecognized_keys", input: r, inst: e, keys: o });
                } else
                    for (let s of ((t.value = {}), Reflect.ownKeys(r))) {
                        if ("__proto__" === s) continue;
                        let o = n.keyType._zod.run({ value: s, issues: [] }, i);
                        if (o instanceof Promise) throw Error("Async schemas not supported in object keys currently");
                        if ("string" == typeof s && ej.test(s) && o.issues.length) {
                            let e = n.keyType._zod.run({ value: Number(s), issues: [] }, i);
                            if (e instanceof Promise)
                                throw Error("Async schemas not supported in object keys currently");
                            0 === e.issues.length && (o = e);
                        }
                        if (o.issues.length) {
                            "loose" === n.mode
                                ? (t.value[s] = r[s])
                                : t.issues.push({
                                      code: "invalid_key",
                                      origin: "record",
                                      issues: o.issues.map((e) => U(e, i, m())),
                                      input: s,
                                      path: [s],
                                      inst: e,
                                  });
                            continue;
                        }
                        let u = n.valueType._zod.run({ value: r[s], issues: [] }, i);
                        u instanceof Promise
                            ? a.push(
                                  u.then((e) => {
                                      e.issues.length && t.issues.push(...G(s, e.issues)), (t.value[o.value] = e.value);
                                  }),
                              )
                            : (u.issues.length && t.issues.push(...G(s, u.issues)), (t.value[o.value] = u.value));
                    }
                return a.length ? Promise.all(a).then(() => t) : t;
            });
    }),
    tk = f("$ZodMap", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (t, i) => {
                let r = t.value;
                if (!(r instanceof Map))
                    return t.issues.push({ expected: "map", code: "invalid_type", input: r, inst: e }), t;
                let a = [];
                for (let [s, o] of ((t.value = new Map()), r)) {
                    let u = n.keyType._zod.run({ value: s, issues: [] }, i),
                        l = n.valueType._zod.run({ value: o, issues: [] }, i);
                    u instanceof Promise || l instanceof Promise
                        ? a.push(
                              Promise.all([u, l]).then(([n, a]) => {
                                  tN(n, a, t, s, r, e, i);
                              }),
                          )
                        : tN(u, l, t, s, r, e, i);
                }
                return a.length ? Promise.all(a).then(() => t) : t;
            });
    });
function tN(e, n, t, i, r, a, s) {
    e.issues.length &&
        (M.has(typeof i)
            ? t.issues.push(...G(i, e.issues))
            : t.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: r,
                  inst: a,
                  issues: e.issues.map((e) => U(e, s, m())),
              })),
        n.issues.length &&
            (M.has(typeof i)
                ? t.issues.push(...G(i, n.issues))
                : t.issues.push({
                      origin: "map",
                      code: "invalid_element",
                      input: r,
                      inst: a,
                      key: i,
                      issues: n.issues.map((e) => U(e, s, m())),
                  })),
        t.value.set(e.value, n.value);
}
let tE = f("$ZodSet", (e, n) => {
    nA.init(e, n),
        (e._zod.parse = (t, i) => {
            let r = t.value;
            if (!(r instanceof Set))
                return t.issues.push({ input: r, inst: e, expected: "set", code: "invalid_type" }), t;
            let a = [];
            for (let e of ((t.value = new Set()), r)) {
                let r = n.valueType._zod.run({ value: e, issues: [] }, i);
                r instanceof Promise ? a.push(r.then((e) => tZ(e, t))) : tZ(r, t);
            }
            return a.length ? Promise.all(a).then(() => t) : t;
        });
});
function tZ(e, n) {
    e.issues.length && n.issues.push(...e.issues), n.value.add(e.value);
}
let tT = f("$ZodEnum", (e, n) => {
        nA.init(e, n);
        let t = y(n.entries),
            i = new Set(t);
        (e._zod.values = i),
            (e._zod.pattern = RegExp(
                `^(${t
                    .filter((e) => M.has(typeof e))
                    .map((e) => ("string" == typeof e ? L(e) : e.toString()))
                    .join("|")})$`,
            )),
            (e._zod.parse = (n, r) => {
                let a = n.value;
                return i.has(a) || n.issues.push({ code: "invalid_value", values: t, input: a, inst: e }), n;
            });
    }),
    tA = f("$ZodLiteral", (e, n) => {
        if ((nA.init(e, n), 0 === n.values.length)) throw Error("Cannot create literal schema with no valid values");
        let t = new Set(n.values);
        (e._zod.values = t),
            (e._zod.pattern = RegExp(
                `^(${n.values.map((e) => ("string" == typeof e ? L(e) : e ? L(e.toString()) : String(e))).join("|")})$`,
            )),
            (e._zod.parse = (i, r) => {
                let a = i.value;
                return t.has(a) || i.issues.push({ code: "invalid_value", values: n.values, input: a, inst: e }), i;
            });
    }),
    tx = f("$ZodFile", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (n, t) => {
                let i = n.value;
                return (
                    i instanceof File || n.issues.push({ expected: "file", code: "invalid_type", input: i, inst: e }), n
                );
            });
    }),
    tO = f("$ZodTransform", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (t, i) => {
                if ("backward" === i.direction) throw new h(e.constructor.name);
                let r = n.transform(t.value, t);
                if (i.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((e) => ((t.value = e), t));
                if (r instanceof Promise) throw new p();
                return (t.value = r), t;
            });
    });
function t$(e, n) {
    return e.issues.length && void 0 === n ? { issues: [], value: void 0 } : e;
}
let tM = f("$ZodOptional", (e, n) => {
        nA.init(e, n),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            k(e._zod, "values", () =>
                n.innerType._zod.values ? new Set([...n.innerType._zod.values, void 0]) : void 0,
            ),
            k(e._zod, "pattern", () => {
                let e = n.innerType._zod.pattern;
                return e ? RegExp(`^(${z(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, t) => {
                if ("optional" === n.innerType._zod.optin) {
                    let i = n.innerType._zod.run(e, t);
                    return i instanceof Promise ? i.then((n) => t$(n, e.value)) : t$(i, e.value);
                }
                return void 0 === e.value ? e : n.innerType._zod.run(e, t);
            });
    }),
    tI = f("$ZodExactOptional", (e, n) => {
        tM.init(e, n),
            k(e._zod, "values", () => n.innerType._zod.values),
            k(e._zod, "pattern", () => n.innerType._zod.pattern),
            (e._zod.parse = (e, t) => n.innerType._zod.run(e, t));
    }),
    tL = f("$ZodNullable", (e, n) => {
        nA.init(e, n),
            k(e._zod, "optin", () => n.innerType._zod.optin),
            k(e._zod, "optout", () => n.innerType._zod.optout),
            k(e._zod, "pattern", () => {
                let e = n.innerType._zod.pattern;
                return e ? RegExp(`^(${z(e.source)}|null)$`) : void 0;
            }),
            k(e._zod, "values", () => (n.innerType._zod.values ? new Set([...n.innerType._zod.values, null]) : void 0)),
            (e._zod.parse = (e, t) => (null === e.value ? e : n.innerType._zod.run(e, t)));
    }),
    tC = f("$ZodDefault", (e, n) => {
        nA.init(e, n),
            (e._zod.optin = "optional"),
            k(e._zod, "values", () => n.innerType._zod.values),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) return n.innerType._zod.run(e, t);
                if (void 0 === e.value) return (e.value = n.defaultValue), e;
                let i = n.innerType._zod.run(e, t);
                return i instanceof Promise ? i.then((e) => tD(e, n)) : tD(i, n);
            });
    });
function tD(e, n) {
    return void 0 === e.value && (e.value = n.defaultValue), e;
}
let tP = f("$ZodPrefault", (e, n) => {
        nA.init(e, n),
            (e._zod.optin = "optional"),
            k(e._zod, "values", () => n.innerType._zod.values),
            (e._zod.parse = (e, t) => (
                "backward" === t.direction || (void 0 === e.value && (e.value = n.defaultValue)),
                n.innerType._zod.run(e, t)
            ));
    }),
    tR = f("$ZodNonOptional", (e, n) => {
        nA.init(e, n),
            k(e._zod, "values", () => {
                let e = n.innerType._zod.values;
                return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (t, i) => {
                let r = n.innerType._zod.run(t, i);
                return r instanceof Promise ? r.then((n) => tF(n, e)) : tF(r, e);
            });
    });
function tF(e, n) {
    return (
        e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: n }),
        e
    );
}
let tB = f("$ZodSuccess", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) throw new h("ZodSuccess");
                let i = n.innerType._zod.run(e, t);
                return i instanceof Promise
                    ? i.then((n) => ((e.value = 0 === n.issues.length), e))
                    : ((e.value = 0 === i.issues.length), e);
            });
    }),
    tG = f("$ZodCatch", (e, n) => {
        nA.init(e, n),
            k(e._zod, "optin", () => n.innerType._zod.optin),
            k(e._zod, "optout", () => n.innerType._zod.optout),
            k(e._zod, "values", () => n.innerType._zod.values),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) return n.innerType._zod.run(e, t);
                let i = n.innerType._zod.run(e, t);
                return i instanceof Promise
                    ? i.then(
                          (i) => (
                              (e.value = i.value),
                              i.issues.length &&
                                  ((e.value = n.catchValue({
                                      ...e,
                                      error: { issues: i.issues.map((e) => U(e, t, m())) },
                                      input: e.value,
                                  })),
                                  (e.issues = [])),
                              e
                          ),
                      )
                    : ((e.value = i.value),
                      i.issues.length &&
                          ((e.value = n.catchValue({
                              ...e,
                              error: { issues: i.issues.map((e) => U(e, t, m())) },
                              input: e.value,
                          })),
                          (e.issues = [])),
                      e);
            });
    }),
    tj = f("$ZodNaN", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (n, t) => (
                ("number" == typeof n.value && Number.isNaN(n.value)) ||
                    n.issues.push({ input: n.value, inst: e, expected: "nan", code: "invalid_type" }),
                n
            ));
    }),
    tU = f("$ZodPipe", (e, n) => {
        nA.init(e, n),
            k(e._zod, "values", () => n.in._zod.values),
            k(e._zod, "optin", () => n.in._zod.optin),
            k(e._zod, "optout", () => n.out._zod.optout),
            k(e._zod, "propValues", () => n.in._zod.propValues),
            (e._zod.parse = (e, t) => {
                if ("backward" === t.direction) {
                    let i = n.out._zod.run(e, t);
                    return i instanceof Promise ? i.then((e) => tq(e, n.in, t)) : tq(i, n.in, t);
                }
                let i = n.in._zod.run(e, t);
                return i instanceof Promise ? i.then((e) => tq(e, n.out, t)) : tq(i, n.out, t);
            });
    });
function tq(e, n, t) {
    return e.issues.length ? ((e.aborted = !0), e) : n._zod.run({ value: e.value, issues: e.issues }, t);
}
let tH = f("$ZodCodec", (e, n) => {
    nA.init(e, n),
        k(e._zod, "values", () => n.in._zod.values),
        k(e._zod, "optin", () => n.in._zod.optin),
        k(e._zod, "optout", () => n.out._zod.optout),
        k(e._zod, "propValues", () => n.in._zod.propValues),
        (e._zod.parse = (e, t) => {
            if ("forward" === (t.direction || "forward")) {
                let i = n.in._zod.run(e, t);
                return i instanceof Promise ? i.then((e) => tJ(e, n, t)) : tJ(i, n, t);
            }
            {
                let i = n.out._zod.run(e, t);
                return i instanceof Promise ? i.then((e) => tJ(e, n, t)) : tJ(i, n, t);
            }
        });
});
function tJ(e, n, t) {
    if (e.issues.length) return (e.aborted = !0), e;
    if ("forward" === (t.direction || "forward")) {
        let i = n.transform(e.value, e);
        return i instanceof Promise ? i.then((i) => tV(e, i, n.out, t)) : tV(e, i, n.out, t);
    }
    {
        let i = n.reverseTransform(e.value, e);
        return i instanceof Promise ? i.then((i) => tV(e, i, n.in, t)) : tV(e, i, n.in, t);
    }
}
function tV(e, n, t, i) {
    return e.issues.length ? ((e.aborted = !0), e) : t._zod.run({ value: n, issues: e.issues }, i);
}
let tK = f("$ZodReadonly", (e, n) => {
    nA.init(e, n),
        k(e._zod, "propValues", () => n.innerType._zod.propValues),
        k(e._zod, "values", () => n.innerType._zod.values),
        k(e._zod, "optin", () => n.innerType?._zod?.optin),
        k(e._zod, "optout", () => n.innerType?._zod?.optout),
        (e._zod.parse = (e, t) => {
            if ("backward" === t.direction) return n.innerType._zod.run(e, t);
            let i = n.innerType._zod.run(e, t);
            return i instanceof Promise ? i.then(tW) : tW(i);
        });
});
function tW(e) {
    return (e.value = Object.freeze(e.value)), e;
}
let tY = f("$ZodTemplateLiteral", (e, n) => {
        nA.init(e, n);
        let t = [];
        for (let e of n.parts)
            if ("object" == typeof e && null !== e) {
                if (!e._zod.pattern)
                    throw Error(`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`);
                let n = e._zod.pattern instanceof RegExp ? e._zod.pattern.source : e._zod.pattern;
                if (!n) throw Error(`Invalid template literal part: ${e._zod.traits}`);
                let i = +!!n.startsWith("^"),
                    r = n.endsWith("$") ? n.length - 1 : n.length;
                t.push(n.slice(i, r));
            } else if (null === e || I.has(typeof e)) t.push(L(`${e}`));
            else throw Error(`Invalid template literal part: ${e}`);
        (e._zod.pattern = RegExp(`^${t.join("")}$`)),
            (e._zod.parse = (t, i) => (
                "string" != typeof t.value
                    ? t.issues.push({ input: t.value, inst: e, expected: "string", code: "invalid_type" })
                    : ((e._zod.pattern.lastIndex = 0),
                      e._zod.pattern.test(t.value) ||
                          t.issues.push({
                              input: t.value,
                              inst: e,
                              code: "invalid_format",
                              format: n.format ?? "template_literal",
                              pattern: e._zod.pattern.source,
                          })),
                t
            ));
    }),
    tQ = f(
        "$ZodFunction",
        (e, n) => (
            nA.init(e, n),
            (e._def = n),
            (e._zod.def = n),
            (e.implement = (n) => {
                if ("function" != typeof n) throw Error("implement() must be called with a function");
                return function (...t) {
                    let i = Reflect.apply(n, this, e._def.input ? Q(e._def.input, t) : t);
                    return e._def.output ? Q(e._def.output, i) : i;
                };
            }),
            (e.implementAsync = (n) => {
                if ("function" != typeof n) throw Error("implementAsync() must be called with a function");
                return async function (...t) {
                    let i = e._def.input ? await ee(e._def.input, t) : t,
                        r = await Reflect.apply(n, this, i);
                    return e._def.output ? await ee(e._def.output, r) : r;
                };
            }),
            (e._zod.parse = (n, t) => (
                "function" != typeof n.value
                    ? n.issues.push({ code: "invalid_type", expected: "function", input: n.value, inst: e })
                    : e._def.output && "promise" === e._def.output._zod.def.type
                      ? (n.value = e.implementAsync(n.value))
                      : (n.value = e.implement(n.value)),
                n
            )),
            (e.input = (...n) => {
                let t = e.constructor;
                return new t(
                    Array.isArray(n[0])
                        ? {
                              type: "function",
                              input: new tb({ type: "tuple", items: n[0], rest: n[1] }),
                              output: e._def.output,
                          }
                        : { type: "function", input: n[0], output: e._def.output },
                );
            }),
            (e.output = (n) => new e.constructor({ type: "function", input: e._def.input, output: n })),
            e
        ),
    ),
    tX = f("$ZodPromise", (e, n) => {
        nA.init(e, n),
            (e._zod.parse = (e, t) =>
                Promise.resolve(e.value).then((e) => n.innerType._zod.run({ value: e, issues: [] }, t)));
    }),
    t0 = f("$ZodLazy", (e, n) => {
        nA.init(e, n),
            k(e._zod, "innerType", () => n.getter()),
            k(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
            k(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
            k(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
            k(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (n, t) => e._zod.innerType._zod.run(n, t));
    }),
    t1 = f("$ZodCustom", (e, n) => {
        ni.init(e, n),
            nA.init(e, n),
            (e._zod.parse = (e, n) => e),
            (e._zod.check = (t) => {
                let i = t.value,
                    r = n.fn(i);
                if (r instanceof Promise) return r.then((n) => t2(n, t, i, e));
                t2(r, t, i, e);
            });
    });
function t2(e, n, t, i) {
    if (!e) {
        let e = { code: "custom", input: t, inst: i, path: [...(i._zod.def.path ?? [])], continue: !i._zod.def.abort };
        i._zod.def.params && (e.params = i._zod.def.params), n.issues.push(J(e));
    }
}
Symbol("ZodOutput"), Symbol("ZodInput");
(s = globalThis).__zod_globalRegistry ??
    (s.__zod_globalRegistry = new (class e {
        constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
        }
        add(e, ...n) {
            let t = n[0];
            return this._map.set(e, t), t && "object" == typeof t && "id" in t && this._idmap.set(t.id, e), this;
        }
        clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
        }
        remove(e) {
            let n = this._map.get(e);
            return n && "object" == typeof n && "id" in n && this._idmap.delete(n.id), this._map.delete(e), this;
        }
        get(e) {
            let n = e._zod.parent;
            if (n) {
                let t = { ...(this.get(n) ?? {}) };
                delete t.id;
                let i = { ...t, ...this._map.get(e) };
                return Object.keys(i).length ? i : void 0;
            }
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
    })());
let t4 = globalThis.__zod_globalRegistry;
function t3(e, n) {
    return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...D(n) });
}
function t9(e, n) {
    return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...D(n) });
}
function t5(e, n) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...D(n) });
}
function t6(e, n) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...D(n) });
}
function t7(e, n) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...D(n) });
}
function t8(e, n) {
    return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...D(n) });
}
function ie(e, n) {
    return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...D(n) });
}
function it(e, n) {
    return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...D(n) });
}
function ii(e, n) {
    return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...D(n) });
}
function ir(e, n) {
    return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...D(n) });
}
function ia(e, n) {
    return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...D(n) });
}
function is(e, n) {
    return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...D(n) });
}
function io(e, n) {
    return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...D(n) });
}
function iu(e, n) {
    return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...D(n) });
}
function il(e, n) {
    return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...D(n) });
}
function id(e, n) {
    return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...D(n) });
}
function ic(e, n) {
    return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...D(n) });
}
function ip(e, n) {
    return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...D(n) });
}
function ih(e, n) {
    return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...D(n) });
}
function i_(e, n) {
    return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...D(n) });
}
function im(e, n) {
    return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...D(n) });
}
function iy(e, n) {
    return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...D(n) });
}
function ig(e, n) {
    return new na({ check: "less_than", ...D(n), value: e, inclusive: !1 });
}
function iw(e, n) {
    return new na({ check: "less_than", ...D(n), value: e, inclusive: !0 });
}
function iv(e, n) {
    return new ns({ check: "greater_than", ...D(n), value: e, inclusive: !1 });
}
function ib(e, n) {
    return new ns({ check: "greater_than", ...D(n), value: e, inclusive: !0 });
}
function iz(e) {
    return iv(0, e);
}
function iS(e) {
    return ig(0, e);
}
function ik(e) {
    return iw(0, e);
}
function iN(e) {
    return ib(0, e);
}
function iE(e, n) {
    return new no({ check: "multiple_of", ...D(n), value: e });
}
function iZ(e, n) {
    return new nd({ check: "max_size", ...D(n), maximum: e });
}
function iT(e, n) {
    return new nc({ check: "min_size", ...D(n), minimum: e });
}
function iA(e, n) {
    return new nf({ check: "size_equals", ...D(n), size: e });
}
function ix(e, n) {
    return new np({ check: "max_length", ...D(n), maximum: e });
}
function iO(e, n) {
    return new nh({ check: "min_length", ...D(n), minimum: e });
}
function i$(e, n) {
    return new n_({ check: "length_equals", ...D(n), length: e });
}
function iM(e, n) {
    return new ny({ check: "string_format", format: "regex", ...D(n), pattern: e });
}
function iI(e) {
    return new ng({ check: "string_format", format: "lowercase", ...D(e) });
}
function iL(e) {
    return new nw({ check: "string_format", format: "uppercase", ...D(e) });
}
function iC(e, n) {
    return new nv({ check: "string_format", format: "includes", ...D(n), includes: e });
}
function iD(e, n) {
    return new nb({ check: "string_format", format: "starts_with", ...D(n), prefix: e });
}
function iP(e, n) {
    return new nz({ check: "string_format", format: "ends_with", ...D(n), suffix: e });
}
function iR(e, n, t) {
    return new nk({ check: "property", property: e, schema: n, ...D(t) });
}
function iF(e, n) {
    return new nN({ check: "mime_type", mime: e, ...D(n) });
}
function iB(e) {
    return new nE({ check: "overwrite", tx: e });
}
function iG(e) {
    return iB((n) => n.normalize(e));
}
function ij() {
    return iB((e) => e.trim());
}
function iU() {
    return iB((e) => e.toLowerCase());
}
function iq() {
    return iB((e) => e.toUpperCase());
}
function iH() {
    return iB((e) =>
        e
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, ""),
    );
}
function iJ(e, n, t, i = {}) {
    let r = D(i),
        a = {
            ...D(i),
            check: "string_format",
            type: "string",
            format: n,
            fn: "function" == typeof t ? t : (e) => t.test(e),
            ...r,
        };
    return t instanceof RegExp && (a.pattern = t), new e(a);
}
function iV(e) {
    let n = e?.target ?? "draft-2020-12";
    return (
        "draft-4" === n && (n = "draft-04"),
        "draft-7" === n && (n = "draft-07"),
        {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? t4,
            target: n,
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
function iK(e, n, t = { path: [], schemaPath: [] }) {
    var i;
    let r = e._zod.def,
        a = n.seen.get(e);
    if (a) return a.count++, t.schemaPath.includes(e) && (a.cycle = t.path), a.schema;
    let s = { schema: {}, count: 1, cycle: void 0, path: t.path };
    n.seen.set(e, s);
    let o = e._zod.toJSONSchema?.();
    if (o) s.schema = o;
    else {
        let i = { ...t, schemaPath: [...t.schemaPath, e], path: t.path };
        if (e._zod.processJSONSchema) e._zod.processJSONSchema(n, s.schema, i);
        else {
            let t = s.schema,
                a = n.processors[r.type];
            if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
            a(e, n, t, i);
        }
        let a = e._zod.parent;
        a && (s.ref || (s.ref = a), iK(a, n, i), (n.seen.get(a).isParent = !0));
    }
    let u = n.metadataRegistry.get(e);
    return (
        u && Object.assign(s.schema, u),
        "input" === n.io &&
            (function e(n, t) {
                let i = t ?? { seen: new Set() };
                if (i.seen.has(n)) return !1;
                i.seen.add(n);
                let r = n._zod.def;
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
                    for (let n in r.shape) if (e(r.shape[n], i)) return !0;
                    return !1;
                }
                if ("union" === r.type) {
                    for (let n of r.options) if (e(n, i)) return !0;
                    return !1;
                }
                if ("tuple" === r.type) {
                    for (let n of r.items) if (e(n, i)) return !0;
                    if (r.rest && e(r.rest, i)) return !0;
                }
                return !1;
            })(e) &&
            (delete s.schema.examples, delete s.schema.default),
        "input" === n.io && s.schema._prefault && ((i = s.schema).default ?? (i.default = s.schema._prefault)),
        delete s.schema._prefault,
        n.seen.get(e).schema
    );
}
function iW(e, n) {
    let t = e.seen.get(n);
    if (!t) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = new Map();
    for (let n of e.seen.entries()) {
        let t = e.metadataRegistry.get(n[0])?.id;
        if (t) {
            let e = i.get(t);
            if (e && e !== n[0])
                throw Error(
                    `Duplicate schema id "${t}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
            i.set(t, n[0]);
        }
    }
    let r = (n) => {
        if (n[1].schema.$ref) return;
        let i = n[1],
            { ref: r, defId: a } = ((n) => {
                let i = "draft-2020-12" === e.target ? "$defs" : "definitions";
                if (e.external) {
                    let t = e.external.registry.get(n[0])?.id,
                        r = e.external.uri ?? ((e) => e);
                    if (t) return { ref: r(t) };
                    let a = n[1].defId ?? n[1].schema.id ?? `schema${e.counter++}`;
                    return (n[1].defId = a), { defId: a, ref: `${r("__shared")}#/${i}/${a}` };
                }
                if (n[1] === t) return { ref: "#" };
                let r = `#/${i}/`,
                    a = n[1].schema.id ?? `__schema${e.counter++}`;
                return { defId: a, ref: r + a };
            })(n);
        (i.def = { ...i.schema }), a && (i.defId = a);
        let s = i.schema;
        for (let e in s) delete s[e];
        s.$ref = r;
    };
    if ("throw" === e.cycles)
        for (let n of e.seen.entries()) {
            let e = n[1];
            if (e.cycle)
                throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
    for (let t of e.seen.entries()) {
        let i = t[1];
        if (n === t[0]) {
            r(t);
            continue;
        }
        if (e.external) {
            let i = e.external.registry.get(t[0])?.id;
            if (n !== t[0] && i) {
                r(t);
                continue;
            }
        }
        if (e.metadataRegistry.get(t[0])?.id || i.cycle || (i.count > 1 && "ref" === e.reused)) {
            r(t);
            continue;
        }
    }
}
function iY(e, n) {
    let t = e.seen.get(n);
    if (!t) throw Error("Unprocessed schema. This is a bug in Zod.");
    let i = (n) => {
        let t = e.seen.get(n);
        if (null === t.ref) return;
        let r = t.def ?? t.schema,
            a = { ...r },
            s = t.ref;
        if (((t.ref = null), s)) {
            i(s);
            let t = e.seen.get(s),
                o = t.schema;
            if (
                (o.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                    ? ((r.allOf = r.allOf ?? []), r.allOf.push(o))
                    : Object.assign(r, o),
                Object.assign(r, a),
                n._zod.parent === s)
            )
                for (let e in r) "$ref" !== e && "allOf" !== e && (e in a || delete r[e]);
            if (o.$ref && t.def)
                for (let e in r)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in t.def &&
                        JSON.stringify(r[e]) === JSON.stringify(t.def[e]) &&
                        delete r[e];
        }
        let o = n._zod.parent;
        if (o && o !== s) {
            i(o);
            let n = e.seen.get(o);
            if (n?.schema.$ref && ((r.$ref = n.schema.$ref), n.def))
                for (let e in r)
                    "$ref" !== e &&
                        "allOf" !== e &&
                        e in n.def &&
                        JSON.stringify(r[e]) === JSON.stringify(n.def[e]) &&
                        delete r[e];
        }
        e.override({ zodSchema: n, jsonSchema: r, path: t.path ?? [] });
    };
    for (let n of [...e.seen.entries()].reverse()) i(n[0]);
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
        let t = e.external.registry.get(n)?.id;
        if (!t) throw Error("Schema is missing an `id` property");
        r.$id = e.external.uri(t);
    }
    Object.assign(r, t.def ?? t.schema);
    let a = e.external?.defs ?? {};
    for (let n of e.seen.entries()) {
        let e = n[1];
        e.def && e.defId && (a[e.defId] = e.def);
    }
    e.external || (Object.keys(a).length > 0 && ("draft-2020-12" === e.target ? (r.$defs = a) : (r.definitions = a)));
    try {
        let t = JSON.parse(JSON.stringify(r));
        return (
            Object.defineProperty(t, "~standard", {
                value: {
                    ...n["~standard"],
                    jsonSchema: { input: iQ(n, "input", e.processors), output: iQ(n, "output", e.processors) },
                },
                enumerable: !1,
                writable: !1,
            }),
            t
        );
    } catch (e) {
        throw Error("Error converting schema to JSON.");
    }
}
let iQ =
        (e, n, t = {}) =>
        (i) => {
            let { libraryOptions: r, target: a } = i ?? {},
                s = iV({ ...(r ?? {}), target: a, io: n, processors: t });
            return iK(e, s), iW(s, e), iY(s, e);
        },
    iX = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
    i0 = (e, n, t, i) => {
        let r = e._zod.def,
            a = !1 === r.inclusive,
            s = r.options.map((e, t) => iK(e, n, { ...i, path: [...i.path, a ? "oneOf" : "anyOf", t] }));
        a ? (t.oneOf = s) : (t.anyOf = s);
    },
    i1 = (e, n, t, i) => {
        let r = e._zod.def;
        iK(r.innerType, n, i), (n.seen.get(e).ref = r.innerType);
    },
    i2 = f("ZodISODateTime", (e, n) => {
        nj.init(e, n), rg.init(e, n);
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
let i3 = f("ZodISODate", (e, n) => {
    nU.init(e, n), rg.init(e, n);
});
function i9(e) {
    return new i3({ type: "string", format: "date", check: "string_format", ...D(e) });
}
let i5 = f("ZodISOTime", (e, n) => {
    nq.init(e, n), rg.init(e, n);
});
function i6(e) {
    return new i5({ type: "string", format: "time", check: "string_format", precision: null, ...D(e) });
}
let i7 = f("ZodISODuration", (e, n) => {
    nH.init(e, n), rg.init(e, n);
});
function i8(e) {
    return new i7({ type: "string", format: "duration", check: "string_format", ...D(e) });
}
let re = (e, n) => {
    K.init(e, n),
        (e.name = "ZodError"),
        Object.defineProperties(e, {
            format: {
                value: (n) =>
                    (function (e, n = (e) => e.message) {
                        let t = { _errors: [] },
                            i = (e) => {
                                for (let r of e.issues)
                                    if ("invalid_union" === r.code && r.errors.length)
                                        r.errors.map((e) => i({ issues: e }));
                                    else if ("invalid_key" === r.code) i({ issues: r.issues });
                                    else if ("invalid_element" === r.code) i({ issues: r.issues });
                                    else if (0 === r.path.length) t._errors.push(n(r));
                                    else {
                                        let e = t,
                                            i = 0;
                                        for (; i < r.path.length; ) {
                                            let t = r.path[i];
                                            i === r.path.length - 1
                                                ? ((e[t] = e[t] || { _errors: [] }), e[t]._errors.push(n(r)))
                                                : (e[t] = e[t] || { _errors: [] }),
                                                (e = e[t]),
                                                i++;
                                        }
                                    }
                            };
                        return i(e), t;
                    })(e, n),
            },
            flatten: {
                value: (n) =>
                    (function (e, n = (e) => e.message) {
                        let t = {},
                            i = [];
                        for (let r of e.issues)
                            r.path.length > 0
                                ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(n(r)))
                                : i.push(n(r));
                        return { formErrors: i, fieldErrors: t };
                    })(e, n),
            },
            addIssue: {
                value: (n) => {
                    e.issues.push(n), (e.message = JSON.stringify(e.issues, w, 2));
                },
            },
            addIssues: {
                value: (n) => {
                    e.issues.push(...n), (e.message = JSON.stringify(e.issues, w, 2));
                },
            },
            isEmpty: { get: () => 0 === e.issues.length },
        });
};
f("ZodError", re);
let rn = f("ZodError", re, { Parent: Error }),
    rt = Y(rn),
    ri = X(rn),
    rr = en(rn),
    ra = ei(rn),
    rs = (e, n, t) => {
        let i = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return Y(rn)(e, n, i);
    },
    ro = (e, n, t) => Y(rn)(e, n, t),
    ru = async (e, n, t) => {
        let i = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return X(rn)(e, n, i);
    },
    rl = async (e, n, t) => X(rn)(e, n, t),
    rd = (e, n, t) => {
        let i = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return en(rn)(e, n, i);
    },
    rc = (e, n, t) => en(rn)(e, n, t),
    rf = async (e, n, t) => {
        let i = t ? Object.assign(t, { direction: "backward" }) : { direction: "backward" };
        return ei(rn)(e, n, i);
    },
    rp = async (e, n, t) => ei(rn)(e, n, t),
    rh = f(
        "ZodType",
        (e, n) => (
            nA.init(e, n),
            Object.assign(e["~standard"], { jsonSchema: { input: iQ(e, "input"), output: iQ(e, "output") } }),
            (e.toJSONSchema = (
                (e, n = {}) =>
                (t) => {
                    let i = iV({ ...t, processors: n });
                    return iK(e, i), iW(i, e), iY(i, e);
                }
            )(e, {})),
            (e.def = n),
            (e.type = n.type),
            Object.defineProperty(e, "_def", { value: n }),
            (e.check = (...t) =>
                e.clone(
                    E(n, {
                        checks: [
                            ...(n.checks ?? []),
                            ...t.map((e) =>
                                "function" == typeof e
                                    ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } }
                                    : e,
                            ),
                        ],
                    }),
                    { parent: !0 },
                )),
            (e.with = e.check),
            (e.clone = (n, t) => C(e, n, t)),
            (e.brand = () => e),
            (e.register = (n, t) => (n.add(e, t), e)),
            (e.parse = (n, t) => rt(e, n, t, { callee: e.parse })),
            (e.safeParse = (n, t) => rr(e, n, t)),
            (e.parseAsync = async (n, t) => ri(e, n, t, { callee: e.parseAsync })),
            (e.safeParseAsync = async (n, t) => ra(e, n, t)),
            (e.spa = e.safeParseAsync),
            (e.encode = (n, t) => rs(e, n, t)),
            (e.decode = (n, t) => ro(e, n, t)),
            (e.encodeAsync = async (n, t) => ru(e, n, t)),
            (e.decodeAsync = async (n, t) => rl(e, n, t)),
            (e.safeEncode = (n, t) => rd(e, n, t)),
            (e.safeDecode = (n, t) => rc(e, n, t)),
            (e.safeEncodeAsync = async (n, t) => rf(e, n, t)),
            (e.safeDecodeAsync = async (n, t) => rp(e, n, t)),
            (e.refine = (n, t) => e.check(sB(n, t))),
            (e.superRefine = (n) => e.check(sG(n))),
            (e.overwrite = (n) => e.check(iB(n))),
            (e.optional = () => ss(e)),
            (e.exactOptional = () => su(e)),
            (e.nullable = () => sd(e)),
            (e.nullish = () => ss(sd(e))),
            (e.nonoptional = (n) => sy(e, n)),
            (e.array = () => aC(e)),
            (e.or = (n) => aj([e, n])),
            (e.and = (n) => aK(e, n)),
            (e.transform = (n) => sN(e, sr(n))),
            (e.default = (n) => sp(e, n)),
            (e.prefault = (n) => s_(e, n)),
            (e.catch = (n) => sb(e, n)),
            (e.pipe = (n) => sN(e, n)),
            (e.readonly = () => sA(e)),
            (e.describe = (n) => {
                let t = e.clone();
                return t4.add(t, { description: n }), t;
            }),
            Object.defineProperty(e, "description", { get: () => t4.get(e)?.description, configurable: !0 }),
            (e.meta = (...n) => {
                if (0 === n.length) return t4.get(e);
                let t = e.clone();
                return t4.add(t, n[0]), t;
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (n) => n(e)),
            e
        ),
    ),
    r_ = f("_ZodString", (e, n) => {
        nx.init(e, n),
            rh.init(e, n),
            (e._zod.processJSONSchema = (n, t, i) =>
                ((e, n, t, i) => {
                    t.type = "string";
                    let { minimum: r, maximum: a, format: s, patterns: o, contentEncoding: u } = e._zod.bag;
                    if (
                        ("number" == typeof r && (t.minLength = r),
                        "number" == typeof a && (t.maxLength = a),
                        s &&
                            ((t.format = iX[s] ?? s),
                            "" === t.format && delete t.format,
                            "time" === s && delete t.format),
                        u && (t.contentEncoding = u),
                        o && o.size > 0)
                    ) {
                        let e = [...o];
                        1 === e.length
                            ? (t.pattern = e[0].source)
                            : e.length > 1 &&
                              (t.allOf = [
                                  ...e.map((e) => ({
                                      ...("draft-07" === n.target ||
                                      "draft-04" === n.target ||
                                      "openapi-3.0" === n.target
                                          ? { type: "string" }
                                          : {}),
                                      pattern: e.source,
                                  })),
                              ]);
                    }
                })(e, n, t, 0));
        let t = e._zod.bag;
        (e.format = t.format ?? null),
            (e.minLength = t.minimum ?? null),
            (e.maxLength = t.maximum ?? null),
            (e.regex = (...n) => e.check(iM(...n))),
            (e.includes = (...n) => e.check(iC(...n))),
            (e.startsWith = (...n) => e.check(iD(...n))),
            (e.endsWith = (...n) => e.check(iP(...n))),
            (e.min = (...n) => e.check(iO(...n))),
            (e.max = (...n) => e.check(ix(...n))),
            (e.length = (...n) => e.check(i$(...n))),
            (e.nonempty = (...n) => e.check(iO(1, ...n))),
            (e.lowercase = (n) => e.check(iI(n))),
            (e.uppercase = (n) => e.check(iL(n))),
            (e.trim = () => e.check(ij())),
            (e.normalize = (...n) => e.check(iG(...n))),
            (e.toLowerCase = () => e.check(iU())),
            (e.toUpperCase = () => e.check(iq())),
            (e.slugify = () => e.check(iH()));
    }),
    rm = f("ZodString", (e, n) => {
        nx.init(e, n),
            r_.init(e, n),
            (e.email = (n) => e.check(t3(rw, n))),
            (e.url = (n) => e.check(ie(rT, n))),
            (e.jwt = (n) => e.check(iy(r6, n))),
            (e.emoji = (n) => e.check(it(rO, n))),
            (e.guid = (n) => e.check(t9(rb, n))),
            (e.uuid = (n) => e.check(t5(rS, n))),
            (e.uuidv4 = (n) => e.check(t6(rS, n))),
            (e.uuidv6 = (n) => e.check(t7(rS, n))),
            (e.uuidv7 = (n) => e.check(t8(rS, n))),
            (e.nanoid = (n) => e.check(ii(rM, n))),
            (e.guid = (n) => e.check(t9(rb, n))),
            (e.cuid = (n) => e.check(ir(rL, n))),
            (e.cuid2 = (n) => e.check(ia(rD, n))),
            (e.ulid = (n) => e.check(is(rR, n))),
            (e.base64 = (n) => e.check(ih(r1, n))),
            (e.base64url = (n) => e.check(i_(r4, n))),
            (e.xid = (n) => e.check(io(rB, n))),
            (e.ksuid = (n) => e.check(iu(rj, n))),
            (e.ipv4 = (n) => e.check(il(rq, n))),
            (e.ipv6 = (n) => e.check(id(rK, n))),
            (e.cidrv4 = (n) => e.check(ic(rY, n))),
            (e.cidrv6 = (n) => e.check(ip(rX, n))),
            (e.e164 = (n) => e.check(im(r9, n))),
            (e.datetime = (n) => e.check(i4(n))),
            (e.date = (n) => e.check(i9(n))),
            (e.time = (n) => e.check(i6(n))),
            (e.duration = (n) => e.check(i8(n)));
    });
function ry(e) {
    return new rm({ type: "string", ...D(e) });
}
let rg = f("ZodStringFormat", (e, n) => {
        nO.init(e, n), r_.init(e, n);
    }),
    rw = f("ZodEmail", (e, n) => {
        nI.init(e, n), rg.init(e, n);
    });
function rv(e) {
    return t3(rw, e);
}
let rb = f("ZodGUID", (e, n) => {
    n$.init(e, n), rg.init(e, n);
});
function rz(e) {
    return t9(rb, e);
}
let rS = f("ZodUUID", (e, n) => {
    nM.init(e, n), rg.init(e, n);
});
function rk(e) {
    return t5(rS, e);
}
function rN(e) {
    return t6(rS, e);
}
function rE(e) {
    return t7(rS, e);
}
function rZ(e) {
    return t8(rS, e);
}
let rT = f("ZodURL", (e, n) => {
    nL.init(e, n), rg.init(e, n);
});
function rA(e) {
    return ie(rT, e);
}
function rx(e) {
    return ie(rT, { protocol: /^https?$/, hostname: eM, ...D(e) });
}
let rO = f("ZodEmoji", (e, n) => {
    nC.init(e, n), rg.init(e, n);
});
function r$(e) {
    return it(rO, e);
}
let rM = f("ZodNanoID", (e, n) => {
    nD.init(e, n), rg.init(e, n);
});
function rI(e) {
    return ii(rM, e);
}
let rL = f("ZodCUID", (e, n) => {
    nP.init(e, n), rg.init(e, n);
});
function rC(e) {
    return ir(rL, e);
}
let rD = f("ZodCUID2", (e, n) => {
    nR.init(e, n), rg.init(e, n);
});
function rP(e) {
    return ia(rD, e);
}
let rR = f("ZodULID", (e, n) => {
    nF.init(e, n), rg.init(e, n);
});
function rF(e) {
    return is(rR, e);
}
let rB = f("ZodXID", (e, n) => {
    nB.init(e, n), rg.init(e, n);
});
function rG(e) {
    return io(rB, e);
}
let rj = f("ZodKSUID", (e, n) => {
    nG.init(e, n), rg.init(e, n);
});
function rU(e) {
    return iu(rj, e);
}
let rq = f("ZodIPv4", (e, n) => {
    nJ.init(e, n), rg.init(e, n);
});
function rH(e) {
    return il(rq, e);
}
let rJ = f("ZodMAC", (e, n) => {
    nK.init(e, n), rg.init(e, n);
});
function rV(e) {
    return new rJ({ type: "string", format: "mac", check: "string_format", abort: !1, ...D(e) });
}
let rK = f("ZodIPv6", (e, n) => {
    nV.init(e, n), rg.init(e, n);
});
function rW(e) {
    return id(rK, e);
}
let rY = f("ZodCIDRv4", (e, n) => {
    nW.init(e, n), rg.init(e, n);
});
function rQ(e) {
    return ic(rY, e);
}
let rX = f("ZodCIDRv6", (e, n) => {
    nY.init(e, n), rg.init(e, n);
});
function r0(e) {
    return ip(rX, e);
}
let r1 = f("ZodBase64", (e, n) => {
    nX.init(e, n), rg.init(e, n);
});
function r2(e) {
    return ih(r1, e);
}
let r4 = f("ZodBase64URL", (e, n) => {
    n0.init(e, n), rg.init(e, n);
});
function r3(e) {
    return i_(r4, e);
}
let r9 = f("ZodE164", (e, n) => {
    n1.init(e, n), rg.init(e, n);
});
function r5(e) {
    return im(r9, e);
}
let r6 = f("ZodJWT", (e, n) => {
    n2.init(e, n), rg.init(e, n);
});
function r7(e) {
    return iy(r6, e);
}
let r8 = f("ZodCustomStringFormat", (e, n) => {
    n4.init(e, n), rg.init(e, n);
});
function ae(e, n, t = {}) {
    return iJ(r8, e, n, t);
}
function an(e) {
    return iJ(r8, "hostname", e$, e);
}
function at(e) {
    return iJ(r8, "hex", eK, e);
}
function ai(e, n) {
    let t = n?.enc ?? "hex",
        i = `${e}_${t}`,
        r = u[i];
    if (!r) throw Error(`Unrecognized hash format: ${i}`);
    return iJ(r8, i, r, n);
}
let ar = f("ZodNumber", (e, n) => {
    n3.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let {
                    minimum: r,
                    maximum: a,
                    format: s,
                    multipleOf: o,
                    exclusiveMaximum: u,
                    exclusiveMinimum: l,
                } = e._zod.bag;
                "string" == typeof s && s.includes("int") ? (t.type = "integer") : (t.type = "number"),
                    "number" == typeof l &&
                        ("draft-04" === n.target || "openapi-3.0" === n.target
                            ? ((t.minimum = l), (t.exclusiveMinimum = !0))
                            : (t.exclusiveMinimum = l)),
                    "number" == typeof r &&
                        ((t.minimum = r),
                        "number" == typeof l &&
                            "draft-04" !== n.target &&
                            (l >= r ? delete t.minimum : delete t.exclusiveMinimum)),
                    "number" == typeof u &&
                        ("draft-04" === n.target || "openapi-3.0" === n.target
                            ? ((t.maximum = u), (t.exclusiveMaximum = !0))
                            : (t.exclusiveMaximum = u)),
                    "number" == typeof a &&
                        ((t.maximum = a),
                        "number" == typeof u &&
                            "draft-04" !== n.target &&
                            (u <= a ? delete t.maximum : delete t.exclusiveMaximum)),
                    "number" == typeof o && (t.multipleOf = o);
            })(e, n, t, 0)),
        (e.gt = (n, t) => e.check(iv(n, t))),
        (e.gte = (n, t) => e.check(ib(n, t))),
        (e.min = (n, t) => e.check(ib(n, t))),
        (e.lt = (n, t) => e.check(ig(n, t))),
        (e.lte = (n, t) => e.check(iw(n, t))),
        (e.max = (n, t) => e.check(iw(n, t))),
        (e.int = (n) => e.check(ao(n))),
        (e.safe = (n) => e.check(ao(n))),
        (e.positive = (n) => e.check(iv(0, n))),
        (e.nonnegative = (n) => e.check(ib(0, n))),
        (e.negative = (n) => e.check(ig(0, n))),
        (e.nonpositive = (n) => e.check(iw(0, n))),
        (e.multipleOf = (n, t) => e.check(iE(n, t))),
        (e.step = (n, t) => e.check(iE(n, t))),
        (e.finite = () => e);
    let t = e._zod.bag;
    (e.minValue = Math.max(t.minimum ?? -1 / 0, t.exclusiveMinimum ?? -1 / 0) ?? null),
        (e.maxValue = Math.min(t.maximum ?? 1 / 0, t.exclusiveMaximum ?? 1 / 0) ?? null),
        (e.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5)),
        (e.isFinite = !0),
        (e.format = t.format ?? null);
});
function aa(e) {
    return new ar({ type: "number", checks: [], ...D(e) });
}
let as = f("ZodNumberFormat", (e, n) => {
    n9.init(e, n), ar.init(e, n);
});
function ao(e) {
    return new as({ type: "number", check: "number_format", abort: !1, format: "safeint", ...D(e) });
}
function au(e) {
    return new as({ type: "number", check: "number_format", abort: !1, format: "float32", ...D(e) });
}
function al(e) {
    return new as({ type: "number", check: "number_format", abort: !1, format: "float64", ...D(e) });
}
function ad(e) {
    return new as({ type: "number", check: "number_format", abort: !1, format: "int32", ...D(e) });
}
function ac(e) {
    return new as({ type: "number", check: "number_format", abort: !1, format: "uint32", ...D(e) });
}
let af = f("ZodBoolean", (e, n) => {
    n5.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) => {
            n.type = "boolean";
        });
});
function ap(e) {
    return new af({ type: "boolean", ...D(e) });
}
let ah = f("ZodBigInt", (e, n) => {
    n6.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("BigInt cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.gte = (n, t) => e.check(ib(n, t))),
        (e.min = (n, t) => e.check(ib(n, t))),
        (e.gt = (n, t) => e.check(iv(n, t))),
        (e.gte = (n, t) => e.check(ib(n, t))),
        (e.min = (n, t) => e.check(ib(n, t))),
        (e.lt = (n, t) => e.check(ig(n, t))),
        (e.lte = (n, t) => e.check(iw(n, t))),
        (e.max = (n, t) => e.check(iw(n, t))),
        (e.positive = (n) => e.check(iv(BigInt(0), n))),
        (e.negative = (n) => e.check(ig(BigInt(0), n))),
        (e.nonpositive = (n) => e.check(iw(BigInt(0), n))),
        (e.nonnegative = (n) => e.check(ib(BigInt(0), n))),
        (e.multipleOf = (n, t) => e.check(iE(n, t)));
    let t = e._zod.bag;
    (e.minValue = t.minimum ?? null), (e.maxValue = t.maximum ?? null), (e.format = t.format ?? null);
});
function a_(e) {
    return new ah({ type: "bigint", ...D(e) });
}
let am = f("ZodBigIntFormat", (e, n) => {
    n7.init(e, n), ah.init(e, n);
});
function ay(e) {
    return new am({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...D(e) });
}
function ag(e) {
    return new am({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...D(e) });
}
let aw = f("ZodSymbol", (e, n) => {
    n8.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Symbols cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function av(e) {
    return new aw({ type: "symbol", ...D(e) });
}
let ab = f("ZodUndefined", (e, n) => {
    te.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Undefined cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function az(e) {
    return new ab({ type: "undefined", ...D(e) });
}
let aS = f("ZodNull", (e, n) => {
    tn.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) => {
            "openapi-3.0" === e.target
                ? ((n.type = "string"), (n.nullable = !0), (n.enum = [null]))
                : (n.type = "null");
        });
});
function ak(e) {
    return new aS({ type: "null", ...D(e) });
}
let aN = f("ZodAny", (e, n) => {
    tt.init(e, n), rh.init(e, n), (e._zod.processJSONSchema = (e, n, t) => {});
});
function aE() {
    return new aN({ type: "any" });
}
let aZ = f("ZodUnknown", (e, n) => {
    ti.init(e, n), rh.init(e, n), (e._zod.processJSONSchema = (e, n, t) => {});
});
function aT() {
    return new aZ({ type: "unknown" });
}
let aA = f("ZodNever", (e, n) => {
    tr.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) => {
            n.not = {};
        });
});
function ax(e) {
    return new aA({ type: "never", ...D(e) });
}
let aO = f("ZodVoid", (e, n) => {
    ta.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Void cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function a$(e) {
    return new aO({ type: "void", ...D(e) });
}
let aM = f("ZodDate", (e, n) => {
    ts.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Date cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (n, t) => e.check(ib(n, t))),
        (e.max = (n, t) => e.check(iw(n, t)));
    let t = e._zod.bag;
    (e.minDate = t.minimum ? new Date(t.minimum) : null), (e.maxDate = t.maximum ? new Date(t.maximum) : null);
});
function aI(e) {
    return new aM({ type: "date", ...D(e) });
}
let aL = f("ZodArray", (e, n) => {
    tu.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = e._zod.def,
                    { minimum: a, maximum: s } = e._zod.bag;
                "number" == typeof a && (t.minItems = a),
                    "number" == typeof s && (t.maxItems = s),
                    (t.type = "array"),
                    (t.items = iK(r.element, n, { ...i, path: [...i.path, "items"] }));
            })(e, n, t, i)),
        (e.element = n.element),
        (e.min = (n, t) => e.check(iO(n, t))),
        (e.nonempty = (n) => e.check(iO(1, n))),
        (e.max = (n, t) => e.check(ix(n, t))),
        (e.length = (n, t) => e.check(i$(n, t))),
        (e.unwrap = () => e.element);
});
function aC(e, n) {
    return new aL({ type: "array", element: e, ...D(n) });
}
function aD(e) {
    return a6(Object.keys(e._zod.def.shape));
}
let aP = f("ZodObject", (e, n) => {
    tp.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = e._zod.def;
                (t.type = "object"), (t.properties = {});
                let a = r.shape;
                for (let e in a) t.properties[e] = iK(a[e], n, { ...i, path: [...i.path, "properties", e] });
                let s = new Set(
                    [...new Set(Object.keys(a))].filter((e) => {
                        let t = r.shape[e]._zod;
                        return "input" === n.io ? void 0 === t.optin : void 0 === t.optout;
                    }),
                );
                s.size > 0 && (t.required = Array.from(s)),
                    r.catchall?._zod.def.type === "never"
                        ? (t.additionalProperties = !1)
                        : r.catchall
                          ? r.catchall &&
                            (t.additionalProperties = iK(r.catchall, n, {
                                ...i,
                                path: [...i.path, "additionalProperties"],
                            }))
                          : "output" === n.io && (t.additionalProperties = !1);
            })(e, n, t, i)),
        k(e, "shape", () => n.shape),
        (e.keyof = () => a6(Object.keys(e._zod.def.shape))),
        (e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n })),
        (e.passthrough = () => e.clone({ ...e._zod.def, catchall: aT() })),
        (e.loose = () => e.clone({ ...e._zod.def, catchall: aT() })),
        (e.strict = () => e.clone({ ...e._zod.def, catchall: ax() })),
        (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
        (e.extend = (n) =>
            (function (e, n) {
                if (!O(n)) throw Error("Invalid input to extend: expected a plain object");
                let t = e._zod.def.checks;
                if (t && t.length > 0) {
                    let t = e._zod.def.shape;
                    for (let e in n)
                        if (void 0 !== Object.getOwnPropertyDescriptor(t, e))
                            throw Error(
                                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                            );
                }
                let i = E(e._zod.def, {
                    get shape() {
                        let t = { ...e._zod.def.shape, ...n };
                        return N(this, "shape", t), t;
                    },
                });
                return C(e, i);
            })(e, n)),
        (e.safeExtend = (n) =>
            (function (e, n) {
                if (!O(n)) throw Error("Invalid input to safeExtend: expected a plain object");
                let t = E(e._zod.def, {
                    get shape() {
                        let t = { ...e._zod.def.shape, ...n };
                        return N(this, "shape", t), t;
                    },
                });
                return C(e, t);
            })(e, n)),
        (e.merge = (n) => {
            let t;
            return (
                (t = E(e._zod.def, {
                    get shape() {
                        let t = { ...e._zod.def.shape, ...n._zod.def.shape };
                        return N(this, "shape", t), t;
                    },
                    get catchall() {
                        return n._zod.def.catchall;
                    },
                    checks: [],
                })),
                C(e, t)
            );
        }),
        (e.pick = (n) =>
            (function (e, n) {
                let t = e._zod.def,
                    i = t.checks;
                if (i && i.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
                let r = E(e._zod.def, {
                    get shape() {
                        let e = {};
                        for (let i in n) {
                            if (!(i in t.shape)) throw Error(`Unrecognized key: "${i}"`);
                            n[i] && (e[i] = t.shape[i]);
                        }
                        return N(this, "shape", e), e;
                    },
                    checks: [],
                });
                return C(e, r);
            })(e, n)),
        (e.omit = (n) =>
            (function (e, n) {
                let t = e._zod.def,
                    i = t.checks;
                if (i && i.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
                let r = E(e._zod.def, {
                    get shape() {
                        let i = { ...e._zod.def.shape };
                        for (let e in n) {
                            if (!(e in t.shape)) throw Error(`Unrecognized key: "${e}"`);
                            n[e] && delete i[e];
                        }
                        return N(this, "shape", i), i;
                    },
                    checks: [],
                });
                return C(e, r);
            })(e, n)),
        (e.partial = (...n) =>
            (function (e, n, t) {
                let i = n._zod.def.checks;
                if (i && i.length > 0)
                    throw Error(".partial() cannot be used on object schemas containing refinements");
                let r = E(n._zod.def, {
                    get shape() {
                        let i = n._zod.def.shape,
                            r = { ...i };
                        if (t)
                            for (let n in t) {
                                if (!(n in i)) throw Error(`Unrecognized key: "${n}"`);
                                t[n] && (r[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n]);
                            }
                        else for (let n in i) r[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n];
                        return N(this, "shape", r), r;
                    },
                    checks: [],
                });
                return C(n, r);
            })(sa, e, n[0])),
        (e.required = (...n) => {
            var t;
            let i;
            return (
                (t = n[0]),
                (i = E(e._zod.def, {
                    get shape() {
                        let n = e._zod.def.shape,
                            i = { ...n };
                        if (t)
                            for (let e in t) {
                                if (!(e in i)) throw Error(`Unrecognized key: "${e}"`);
                                t[e] && (i[e] = new sm({ type: "nonoptional", innerType: n[e] }));
                            }
                        else for (let e in n) i[e] = new sm({ type: "nonoptional", innerType: n[e] });
                        return N(this, "shape", i), i;
                    },
                })),
                C(e, i)
            );
        });
});
function aR(e, n) {
    return new aP({ type: "object", shape: e ?? {}, ...D(n) });
}
function aF(e, n) {
    return new aP({ type: "object", shape: e, catchall: ax(), ...D(n) });
}
function aB(e, n) {
    return new aP({ type: "object", shape: e, catchall: aT(), ...D(n) });
}
let aG = f("ZodUnion", (e, n) => {
    t_.init(e, n), rh.init(e, n), (e._zod.processJSONSchema = (n, t, i) => i0(e, n, t, i)), (e.options = n.options);
});
function aj(e, n) {
    return new aG({ type: "union", options: e, ...D(n) });
}
let aU = f("ZodXor", (e, n) => {
    aG.init(e, n), ty.init(e, n), (e._zod.processJSONSchema = (n, t, i) => i0(e, n, t, i)), (e.options = n.options);
});
function aq(e, n) {
    return new aU({ type: "union", options: e, inclusive: !1, ...D(n) });
}
let aH = f("ZodDiscriminatedUnion", (e, n) => {
    aG.init(e, n), tg.init(e, n);
});
function aJ(e, n, t) {
    return new aH({ type: "union", options: n, discriminator: e, ...D(t) });
}
let aV = f("ZodIntersection", (e, n) => {
    tw.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r, a, s, o;
            return (
                (a = iK((r = e._zod.def).left, n, { ...i, path: [...i.path, "allOf", 0] })),
                (s = iK(r.right, n, { ...i, path: [...i.path, "allOf", 1] })),
                void (t.allOf = [
                    ...((o = (e) => "allOf" in e && 1 === Object.keys(e).length)(a) ? a.allOf : [a]),
                    ...(o(s) ? s.allOf : [s]),
                ])
            );
        });
});
function aK(e, n) {
    return new aV({ type: "intersection", left: e, right: n });
}
let aW = f("ZodTuple", (e, n) => {
    tb.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = e._zod.def;
                t.type = "array";
                let a = "draft-2020-12" === n.target ? "prefixItems" : "items",
                    s = "draft-2020-12" === n.target || "openapi-3.0" === n.target ? "items" : "additionalItems",
                    o = r.items.map((e, t) => iK(e, n, { ...i, path: [...i.path, a, t] })),
                    u = r.rest
                        ? iK(r.rest, n, {
                              ...i,
                              path: [...i.path, s, ...("openapi-3.0" === n.target ? [r.items.length] : [])],
                          })
                        : null;
                "draft-2020-12" === n.target
                    ? ((t.prefixItems = o), u && (t.items = u))
                    : "openapi-3.0" === n.target
                      ? ((t.items = { anyOf: o }),
                        u && t.items.anyOf.push(u),
                        (t.minItems = o.length),
                        u || (t.maxItems = o.length))
                      : ((t.items = o), u && (t.additionalItems = u));
                let { minimum: l, maximum: d } = e._zod.bag;
                "number" == typeof l && (t.minItems = l), "number" == typeof d && (t.maxItems = d);
            })(e, n, t, i)),
        (e.rest = (n) => e.clone({ ...e._zod.def, rest: n }));
});
function aY(e, n, t) {
    let i = n instanceof nA,
        r = i ? t : n;
    return new aW({ type: "tuple", items: e, rest: i ? n : null, ...D(r) });
}
let aQ = f("ZodRecord", (e, n) => {
    tS.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = e._zod.def;
                t.type = "object";
                let a = r.keyType,
                    s = a._zod.bag,
                    o = s?.patterns;
                if ("loose" === r.mode && o && o.size > 0) {
                    let e = iK(r.valueType, n, { ...i, path: [...i.path, "patternProperties", "*"] });
                    for (let n of ((t.patternProperties = {}), o)) t.patternProperties[n.source] = e;
                } else
                    ("draft-07" === n.target || "draft-2020-12" === n.target) &&
                        (t.propertyNames = iK(r.keyType, n, { ...i, path: [...i.path, "propertyNames"] })),
                        (t.additionalProperties = iK(r.valueType, n, {
                            ...i,
                            path: [...i.path, "additionalProperties"],
                        }));
                let u = a._zod.values;
                if (u) {
                    let e = [...u].filter((e) => "string" == typeof e || "number" == typeof e);
                    e.length > 0 && (t.required = e);
                }
            })(e, n, t, i)),
        (e.keyType = n.keyType),
        (e.valueType = n.valueType);
});
function aX(e, n, t) {
    return new aQ({ type: "record", keyType: e, valueType: n, ...D(t) });
}
function a0(e, n, t) {
    let i = C(e);
    return (i._zod.values = void 0), new aQ({ type: "record", keyType: i, valueType: n, ...D(t) });
}
function a1(e, n, t) {
    return new aQ({ type: "record", keyType: e, valueType: n, mode: "loose", ...D(t) });
}
let a2 = f("ZodMap", (e, n) => {
    tk.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Map cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.keyType = n.keyType),
        (e.valueType = n.valueType),
        (e.min = (...n) => e.check(iT(...n))),
        (e.nonempty = (n) => e.check(iT(1, n))),
        (e.max = (...n) => e.check(iZ(...n))),
        (e.size = (...n) => e.check(iA(...n)));
});
function a4(e, n, t) {
    return new a2({ type: "map", keyType: e, valueType: n, ...D(t) });
}
let a3 = f("ZodSet", (e, n) => {
    tE.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Set cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e.min = (...n) => e.check(iT(...n))),
        (e.nonempty = (n) => e.check(iT(1, n))),
        (e.max = (...n) => e.check(iZ(...n))),
        (e.size = (...n) => e.check(iA(...n)));
});
function a9(e, n) {
    return new a3({ type: "set", valueType: e, ...D(n) });
}
let a5 = f("ZodEnum", (e, n) => {
    tT.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            (r = y(e._zod.def.entries)).every((e) => "number" == typeof e) && (t.type = "number"),
                r.every((e) => "string" == typeof e) && (t.type = "string"),
                (t.enum = r);
        }),
        (e.enum = n.entries),
        (e.options = Object.values(n.entries));
    let t = new Set(Object.keys(n.entries));
    (e.extract = (e, i) => {
        let r = {};
        for (let i of e)
            if (t.has(i)) r[i] = n.entries[i];
            else throw Error(`Key ${i} not found in enum`);
        return new a5({ ...n, checks: [], ...D(i), entries: r });
    }),
        (e.exclude = (e, i) => {
            let r = { ...n.entries };
            for (let n of e)
                if (t.has(n)) delete r[n];
                else throw Error(`Key ${n} not found in enum`);
            return new a5({ ...n, checks: [], ...D(i), entries: r });
        });
});
function a6(e, n) {
    return new a5({ type: "enum", entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e, ...D(n) });
}
function a7(e, n) {
    return new a5({ type: "enum", entries: e, ...D(n) });
}
let a8 = f("ZodLiteral", (e, n) => {
    tA.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = e._zod.def,
                    a = [];
                for (let e of r.values)
                    if (void 0 === e) {
                        if ("throw" === n.unrepresentable)
                            throw Error("Literal `undefined` cannot be represented in JSON Schema");
                    } else if ("bigint" == typeof e)
                        if ("throw" === n.unrepresentable)
                            throw Error("BigInt literals cannot be represented in JSON Schema");
                        else a.push(Number(e));
                    else a.push(e);
                if (0 === a.length);
                else if (1 === a.length) {
                    let e = a[0];
                    (t.type = null === e ? "null" : typeof e),
                        "draft-04" === n.target || "openapi-3.0" === n.target ? (t.enum = [e]) : (t.const = e);
                } else
                    a.every((e) => "number" == typeof e) && (t.type = "number"),
                        a.every((e) => "string" == typeof e) && (t.type = "string"),
                        a.every((e) => "boolean" == typeof e) && (t.type = "boolean"),
                        a.every((e) => null === e) && (t.type = "null"),
                        (t.enum = a);
            })(e, n, t, 0)),
        (e.values = new Set(n.values)),
        Object.defineProperty(e, "value", {
            get() {
                if (n.values.length > 1)
                    throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
                return n.values[0];
            },
        });
});
function se(e, n) {
    return new a8({ type: "literal", values: Array.isArray(e) ? e : [e], ...D(n) });
}
let sn = f("ZodFile", (e, n) => {
    tx.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = { type: "string", format: "binary", contentEncoding: "binary" },
                    { minimum: a, maximum: s, mime: o } = e._zod.bag;
                void 0 !== a && (r.minLength = a),
                    void 0 !== s && (r.maxLength = s),
                    o
                        ? 1 === o.length
                            ? ((r.contentMediaType = o[0]), Object.assign(t, r))
                            : (Object.assign(t, r), (t.anyOf = o.map((e) => ({ contentMediaType: e }))))
                        : Object.assign(t, r);
            })(e, 0, t, 0)),
        (e.min = (n, t) => e.check(iT(n, t))),
        (e.max = (n, t) => e.check(iZ(n, t))),
        (e.mime = (n, t) => e.check(iF(Array.isArray(n) ? n : [n], t)));
});
function st(e) {
    return new sn({ type: "file", ...D(e) });
}
let si = f("ZodTransform", (e, n) => {
    tO.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Transforms cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
        (e._zod.parse = (t, i) => {
            if ("backward" === i.direction) throw new h(e.constructor.name);
            t.addIssue = (i) => {
                "string" == typeof i
                    ? t.issues.push(J(i, t.value, n))
                    : (i.fatal && (i.continue = !1),
                      i.code ?? (i.code = "custom"),
                      i.input ?? (i.input = t.value),
                      i.inst ?? (i.inst = e),
                      t.issues.push(J(i)));
            };
            let r = n.transform(t.value, t);
            return r instanceof Promise ? r.then((e) => ((t.value = e), t)) : ((t.value = r), t);
        });
});
function sr(e) {
    return new si({ type: "transform", transform: e });
}
let sa = f("ZodOptional", (e, n) => {
    tM.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => i1(e, n, t, i)),
        (e.unwrap = () => e._zod.def.innerType);
});
function ss(e) {
    return new sa({ type: "optional", innerType: e });
}
let so = f("ZodExactOptional", (e, n) => {
    tI.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => i1(e, n, t, i)),
        (e.unwrap = () => e._zod.def.innerType);
});
function su(e) {
    return new so({ type: "optional", innerType: e });
}
let sl = f("ZodNullable", (e, n) => {
    tL.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r, a, s;
            return (
                (a = iK((r = e._zod.def).innerType, n, i)),
                (s = n.seen.get(e)),
                void ("openapi-3.0" === n.target
                    ? ((s.ref = r.innerType), (t.nullable = !0))
                    : (t.anyOf = [a, { type: "null" }]))
            );
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sd(e) {
    return new sl({ type: "nullable", innerType: e });
}
function sc(e) {
    return ss(sd(e));
}
let sf = f("ZodDefault", (e, n) => {
    tC.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            iK((r = e._zod.def).innerType, n, i),
                (n.seen.get(e).ref = r.innerType),
                (t.default = JSON.parse(JSON.stringify(r.defaultValue)));
        }),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeDefault = e.unwrap);
});
function sp(e, n) {
    return new sf({
        type: "default",
        innerType: e,
        get defaultValue() {
            return "function" == typeof n ? n() : $(n);
        },
    });
}
let sh = f("ZodPrefault", (e, n) => {
    tP.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            iK((r = e._zod.def).innerType, n, i),
                (n.seen.get(e).ref = r.innerType),
                "input" === n.io && (t._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function s_(e, n) {
    return new sh({
        type: "prefault",
        innerType: e,
        get defaultValue() {
            return "function" == typeof n ? n() : $(n);
        },
    });
}
let sm = f("ZodNonOptional", (e, n) => {
    tR.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            iK((r = e._zod.def).innerType, n, i), (n.seen.get(e).ref = r.innerType);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sy(e, n) {
    return new sm({ type: "nonoptional", innerType: e, ...D(n) });
}
let sg = f("ZodSuccess", (e, n) => {
    tB.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) => {
            n.type = "boolean";
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sw(e) {
    return new sg({ type: "success", innerType: e });
}
let sv = f("ZodCatch", (e, n) => {
    tG.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r,
                    a = e._zod.def;
                iK(a.innerType, n, i), (n.seen.get(e).ref = a.innerType);
                try {
                    r = a.catchValue(void 0);
                } catch {
                    throw Error("Dynamic catch values are not supported in JSON Schema");
                }
                t.default = r;
            })(e, n, t, i)),
        (e.unwrap = () => e._zod.def.innerType),
        (e.removeCatch = e.unwrap);
});
function sb(e, n) {
    return new sv({ type: "catch", innerType: e, catchValue: "function" == typeof n ? n : () => n });
}
let sz = f("ZodNaN", (e, n) => {
    tj.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("NaN cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sS(e) {
    return new sz({ type: "nan", ...D(e) });
}
let sk = f("ZodPipe", (e, n) => {
    tU.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r, a;
            return (
                (r = e._zod.def),
                void (iK((a = "input" === n.io ? ("transform" === r.in._zod.def.type ? r.out : r.in) : r.out), n, i),
                (n.seen.get(e).ref = a))
            );
        }),
        (e.in = n.in),
        (e.out = n.out);
});
function sN(e, n) {
    return new sk({ type: "pipe", in: e, out: n });
}
let sE = f("ZodCodec", (e, n) => {
    sk.init(e, n), tH.init(e, n);
});
function sZ(e, n, t) {
    return new sE({ type: "pipe", in: e, out: n, transform: t.decode, reverseTransform: t.encode });
}
let sT = f("ZodReadonly", (e, n) => {
    tK.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            iK((r = e._zod.def).innerType, n, i), (n.seen.get(e).ref = r.innerType), (t.readOnly = !0);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sA(e) {
    return new sT({ type: "readonly", innerType: e });
}
let sx = f("ZodTemplateLiteral", (e, n) => {
    tY.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) =>
            ((e, n, t, i) => {
                let r = e._zod.pattern;
                if (!r) throw Error("Pattern not found in template literal");
                (t.type = "string"), (t.pattern = r.source);
            })(e, 0, t, 0));
});
function sO(e, n) {
    return new sx({ type: "template_literal", parts: e, ...D(n) });
}
let s$ = f("ZodLazy", (e, n) => {
    t0.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            iK((r = e._zod.innerType), n, i), (n.seen.get(e).ref = r);
        }),
        (e.unwrap = () => e._zod.def.getter());
});
function sM(e) {
    return new s$({ type: "lazy", getter: e });
}
let sI = f("ZodPromise", (e, n) => {
    tX.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (n, t, i) => {
            let r;
            iK((r = e._zod.def).innerType, n, i), (n.seen.get(e).ref = r.innerType);
        }),
        (e.unwrap = () => e._zod.def.innerType);
});
function sL(e) {
    return new sI({ type: "promise", innerType: e });
}
let sC = f("ZodFunction", (e, n) => {
    tQ.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Function types cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sD(e) {
    return new sC({
        type: "function",
        input: Array.isArray(e?.input) ? aY(e?.input) : (e?.input ?? aC(aT())),
        output: e?.output ?? aT(),
    });
}
let sP = f("ZodCustom", (e, n) => {
    t1.init(e, n),
        rh.init(e, n),
        (e._zod.processJSONSchema = (e, n, t) =>
            ((e, n, t, i) => {
                if ("throw" === n.unrepresentable) throw Error("Custom types cannot be represented in JSON Schema");
            })(0, e, 0, 0));
});
function sR(e) {
    let n = new ni({ check: "custom" });
    return (n._zod.check = e), n;
}
function sF(e, n) {
    var t;
    let i;
    return (
        (t = e ?? (() => !0)),
        (i = D(n)).abort ?? (i.abort = !0),
        new sP({ type: "custom", check: "custom", fn: t, ...i })
    );
}
function sB(e, n = {}) {
    return new sP({ type: "custom", check: "custom", fn: e, ...D(n) });
}
function sG(e) {
    var n;
    let t, i;
    return (
        (n = (n) => (
            (n.addIssue = (e) => {
                "string" == typeof e
                    ? n.issues.push(J(e, n.value, t._zod.def))
                    : (e.fatal && (e.continue = !1),
                      e.code ?? (e.code = "custom"),
                      e.input ?? (e.input = n.value),
                      e.inst ?? (e.inst = t),
                      e.continue ?? (e.continue = !t._zod.def.abort),
                      n.issues.push(J(e)));
            }),
            e(n.value, n)
        )),
        ((i = new ni({ check: "custom", ...D(void 0) }))._zod.check = n),
        (t = i)
    );
}
let sj = function (e) {
        let n = new ni({ check: "describe" });
        return (
            (n._zod.onattach = [
                (n) => {
                    let t = t4.get(n) ?? {};
                    t4.add(n, { ...t, description: e });
                },
            ]),
            (n._zod.check = () => {}),
            n
        );
    },
    sU = function (e) {
        let n = new ni({ check: "meta" });
        return (
            (n._zod.onattach = [
                (n) => {
                    let t = t4.get(n) ?? {};
                    t4.add(n, { ...t, ...e });
                },
            ]),
            (n._zod.check = () => {}),
            n
        );
    };
function sq(e, n = {}) {
    let t = new sP({ type: "custom", check: "custom", fn: (n) => n instanceof e, abort: !0, ...D(n) });
    return (
        (t._zod.bag.Class = e),
        (t._zod.check = (n) => {
            n.value instanceof e ||
                n.issues.push({
                    code: "invalid_type",
                    expected: e.name,
                    input: n.value,
                    inst: t,
                    path: [...(t._zod.def.path ?? [])],
                });
        }),
        t
    );
}
let sH = (...e) =>
    (function (e, n) {
        let t = D(n),
            i = t.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            r = t.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
        "sensitive" !== t.case &&
            ((i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
            (r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
        let a = new Set(i),
            s = new Set(r),
            o = e.Codec ?? tH,
            u = e.Boolean ?? n5,
            l = new o({
                type: "pipe",
                in: new (e.String ?? nx)({ type: "string", error: t.error }),
                out: new u({ type: "boolean", error: t.error }),
                transform: (e, n) => {
                    let i = e;
                    return (
                        "sensitive" !== t.case && (i = i.toLowerCase()),
                        !!a.has(i) ||
                            (!s.has(i) &&
                                (n.issues.push({
                                    code: "invalid_value",
                                    expected: "stringbool",
                                    values: [...a, ...s],
                                    input: n.value,
                                    inst: l,
                                    continue: !1,
                                }),
                                {}))
                    );
                },
                reverseTransform: (e, n) => (!0 === e ? i[0] || "true" : r[0] || "false"),
                error: t.error,
            });
        return l;
    })({ Codec: sE, Boolean: af, String: rm }, ...e);
function sJ(e) {
    let n = sM(() => aj([ry(e), aa(), ap(), ak(), aC(n), aX(ry(), n)]));
    return n;
}
function sV(e, n) {
    return sN(sr(e), n);
}
o || (o = {}),
    m({
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
            (a = { nan: "NaN" }),
            (e) => {
                switch (e.code) {
                    case "invalid_type": {
                        let n = a[e.expected] ?? e.expected,
                            t = (function (e) {
                                let n = typeof e;
                                switch (n) {
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
                                return n;
                            })(e.input),
                            i = a[t] ?? t;
                        return `Invalid input: expected ${n}, received ${i}`;
                    }
                    case "invalid_value":
                        if (1 === e.values.length) return `Invalid input: expected ${P(e.values[0])}`;
                        return `Invalid option: expected one of ${g(e.values, "|")}`;
                    case "too_big": {
                        let n = e.inclusive ? "<=" : "<",
                            t = i[e.origin] ?? null;
                        if (t)
                            return `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${t.unit ?? "elements"}`;
                        return `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
                    }
                    case "too_small": {
                        let n = e.inclusive ? ">=" : ">",
                            t = i[e.origin] ?? null;
                        if (t) return `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${t.unit}`;
                        return `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
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
