n.d(t, { Z: () => o });
var r = n(36056),
    i = n(350508);
class o {
    constructor(e) {
        var t;
        this.fields = null != (t = e.fields) ? t : [];
    }
    prepare() {
        if (this.data) return;
        let e = [],
            t = [],
            n = [];
        for (let r of this.fields)
            if (r.oneof) n.includes(r.oneof) || (n.push(r.oneof), e.push(r.oneof), t.push(r.oneof));
            else
                switch ((t.push(r.localName), r.kind)) {
                    case 'scalar':
                    case 'enum':
                        (!r.opt || r.repeat) && e.push(r.localName);
                        break;
                    case 'message':
                        r.repeat && e.push(r.localName);
                        break;
                    case 'map':
                        e.push(r.localName);
                }
        this.data = {
            req: e,
            known: t,
            oneofs: Object.values(n)
        };
    }
    is(e, t, n = !1) {
        if (t < 0) return !0;
        if (null == e || 'object' != typeof e) return !1;
        this.prepare();
        let r = Object.keys(e),
            o = this.data;
        if (r.length < o.req.length || o.req.some((e) => !r.includes(e)) || (!n && r.some((e) => !o.known.includes(e)))) return !1;
        if (t < 1) return !0;
        for (let r of o.oneofs) {
            let o = e[r];
            if (!(0, i.Li)(o)) return !1;
            if (void 0 === o.oneofKind) continue;
            let a = this.fields.find((e) => e.localName === o.oneofKind);
            if (!a || !this.field(o[o.oneofKind], a, n, t)) return !1;
        }
        for (let r of this.fields) if (void 0 === r.oneof && !this.field(e[r.localName], r, n, t)) return !1;
        return !0;
    }
    field(e, t, n, i) {
        let o = t.repeat;
        switch (t.kind) {
            case 'scalar':
                if (void 0 === e) return t.opt;
                if (o) return this.scalars(e, t.T, i, t.L);
                return this.scalar(e, t.T, t.L);
            case 'enum':
                if (void 0 === e) return t.opt;
                if (o) return this.scalars(e, r.wx.INT32, i);
                return this.scalar(e, r.wx.INT32);
            case 'message':
                if (void 0 === e) break;
                if (o) return this.messages(e, t.T(), n, i);
                return this.message(e, t.T(), n, i);
            case 'map':
                if ('object' != typeof e || null === e) return !1;
                if (i < 2) break;
                if (!this.mapKeys(e, t.K, i)) return !1;
                switch (t.V.kind) {
                    case 'scalar':
                        return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                    case 'enum':
                        return this.scalars(Object.values(e), r.wx.INT32, i);
                    case 'message':
                        return this.messages(Object.values(e), t.V.T(), n, i);
                }
        }
        return !0;
    }
    message(e, t, n, r) {
        return n ? t.isAssignable(e, r) : t.is(e, r);
    }
    messages(e, t, n, r) {
        if (!Array.isArray(e)) return !1;
        if (r < 2) return !0;
        if (n) {
            for (let n = 0; n < e.length && n < r; n++) if (!t.isAssignable(e[n], r - 1)) return !1;
        } else for (let n = 0; n < e.length && n < r; n++) if (!t.is(e[n], r - 1)) return !1;
        return !0;
    }
    scalar(e, t, n) {
        let i = typeof e;
        switch (t) {
            case r.wx.UINT64:
            case r.wx.FIXED64:
            case r.wx.INT64:
            case r.wx.SFIXED64:
            case r.wx.SINT64:
                switch (n) {
                    case r.pz.BIGINT:
                        return 'bigint' == i;
                    case r.pz.NUMBER:
                        return 'number' == i && !isNaN(e);
                    default:
                        return 'string' == i;
                }
            case r.wx.BOOL:
                return 'boolean' == i;
            case r.wx.STRING:
                return 'string' == i;
            case r.wx.BYTES:
                return e instanceof Uint8Array;
            case r.wx.DOUBLE:
            case r.wx.FLOAT:
                return 'number' == i && !isNaN(e);
            default:
                return 'number' == i && Number.isInteger(e);
        }
    }
    scalars(e, t, n, r) {
        if (!Array.isArray(e)) return !1;
        if (n < 2) return !0;
        if (Array.isArray(e)) {
            for (let i = 0; i < e.length && i < n; i++) if (!this.scalar(e[i], t, r)) return !1;
        }
        return !0;
    }
    mapKeys(e, t, n) {
        let i = Object.keys(e);
        switch (t) {
            case r.wx.INT32:
            case r.wx.FIXED32:
            case r.wx.SFIXED32:
            case r.wx.SINT32:
            case r.wx.UINT32:
                return this.scalars(
                    i.slice(0, n).map((e) => parseInt(e)),
                    t,
                    n
                );
            case r.wx.BOOL:
                return this.scalars(
                    i.slice(0, n).map((e) => 'true' == e || ('false' != e && e)),
                    t,
                    n
                );
            default:
                return this.scalars(i, t, n, r.pz.STRING);
        }
    }
}
