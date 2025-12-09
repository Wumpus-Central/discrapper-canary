n.d(t, { Z: () => l }), n(49124), n(388685);
var r = n(433517),
    i = n(710845),
    a = n(915486);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s {
    isValidCachedProto(e) {
        return null != e && "object" == typeof e && !Array.isArray(e);
    }
    buildParsedCacheKey(e, t) {
        return "".concat(this.name, ":parsed:").concat(e, ":").concat(t);
    }
    buildProtoToSaveCacheKey(e, t, n) {
        return "".concat(this.name, ":protoToSave:").concat(e, ":").concat(t, ":v").concat(n);
    }
    readFromStorage(e, t) {
        let n = r.K.getRaw(e);
        if (null == n) return null;
        try {
            return JSON.parse(n, a.RH);
        } catch (n) {
            return (
                this.logger.warn("".concat(this.name, ": ").concat(t), {
                    cacheKey: e,
                    error: n,
                }),
                null
            );
        }
    }
    writeWithCleanup(e, t, n, i, o) {
        let s = e.get(t);
        if (null != s && s !== n)
            try {
                r.K.remove(s);
            } catch (e) {}
        e.set(t, n);
        try {
            r.K.setRaw(n, JSON.stringify(i, a.h7));
        } catch (e) {
            this.logger.warn("".concat(this.name, ": ").concat(o), {
                type: t,
                cacheKey: n,
                error: e,
            });
        }
    }
    readParsedProto(e, t) {
        if ("" === t) return null;
        let n = this.buildParsedCacheKey(e, t),
            r = this.readFromStorage(n, "failed to parse cached proto");
        return this.isValidCachedProto(r)
            ? (this.currentParsedCacheKeys.set(e, n), r)
            : (this.logger.verbose("".concat(this.name, ": cache miss for parsed proto"), {
                  type: e,
                  b64: t,
              }),
              null);
    }
    writeParsedProto(e, t, n) {
        if ("" === t) return;
        let r = this.buildParsedCacheKey(e, t);
        this.writeWithCleanup(this.currentParsedCacheKeys, e, r, n, "failed to cache parsed proto");
    }
    readProtoToSave(e, t, n) {
        let r = this.buildProtoToSaveCacheKey(e, t, n),
            i = this.readFromStorage(r, "failed to parse cached protoToSave");
        return this.isValidCachedProto(i)
            ? (this.currentProtoToSaveCacheKeys.set(e, r), i)
            : (this.logger.verbose("".concat(this.name, ": cache miss for protoToSave"), {
                  type: e,
                  b64: t,
                  version: n,
              }),
              null);
    }
    writeProtoToSave(e, t, n, r) {
        let i = this.buildProtoToSaveCacheKey(e, t, n);
        this.writeWithCleanup(this.currentProtoToSaveCacheKeys, e, i, r, "failed to cache protoToSave");
    }
    constructor(e) {
        o(this, "name", void 0),
            o(this, "logger", void 0),
            o(this, "currentParsedCacheKeys", new Map()),
            o(this, "currentProtoToSaveCacheKeys", new Map()),
            (this.name = e),
            (this.logger = new i.Z(e));
    }
}
let l = s;
