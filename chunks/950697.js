n.d(t, { Z: () => a });
var i = n(36056),
    r = n(350508);
class a {
    constructor(e) {
        var t;
        this.fields = null !== (t = e.fields) && void 0 !== t ? t : [];
    }
    prepare() {
        if (this.data) return;
        let e = [],
            t = [],
            n = [];
        for (let i of this.fields)
            if (i.oneof) n.includes(i.oneof) || (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof));
            else
                switch ((t.push(i.localName), i.kind)) {
                    case 'scalar':
                    case 'enum':
                        (!i.opt || i.repeat) && e.push(i.localName);
                        break;
                    case 'message':
                        i.repeat && e.push(i.localName);
                        break;
                    case 'map':
                        e.push(i.localName);
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
        let i = Object.keys(e),
            a = this.data;
        if (i.length < a.req.length || a.req.some((e) => !i.includes(e)) || (!n && i.some((e) => !a.known.includes(e)))) return !1;
        if (t < 1) return !0;
        for (let i of a.oneofs) {
            let a = e[i];
            if (!(0, r.Li)(a)) return !1;
            if (void 0 === a.oneofKind) continue;
            let s = this.fields.find((e) => e.localName === a.oneofKind);
            if (!s || !this.field(a[a.oneofKind], s, n, t)) return !1;
        }
        for (let i of this.fields) if (void 0 === i.oneof && !this.field(e[i.localName], i, n, t)) return !1;
        return !0;
    }
    field(e, t, n, r) {
        let a = t.repeat;
        switch (t.kind) {
            case 'scalar':
                if (void 0 === e) return t.opt;
                if (a) return this.scalars(e, t.T, r, t.L);
                return this.scalar(e, t.T, t.L);
            case 'enum':
                if (void 0 === e) return t.opt;
                if (a) return this.scalars(e, i.wx.INT32, r);
                return this.scalar(e, i.wx.INT32);
            case 'message':
                if (void 0 === e) break;
                if (a) return this.messages(e, t.T(), n, r);
                return this.message(e, t.T(), n, r);
            case 'map':
                if ('object' != typeof e || null === e) return !1;
                if (r < 2) break;
                if (!this.mapKeys(e, t.K, r)) return !1;
                switch (t.V.kind) {
                    case 'scalar':
                        return this.scalars(Object.values(e), t.V.T, r, t.V.L);
                    case 'enum':
                        return this.scalars(Object.values(e), i.wx.INT32, r);
                    case 'message':
                        return this.messages(Object.values(e), t.V.T(), n, r);
                }
        }
        return !0;
    }
    message(e, t, n, i) {
        return n ? t.isAssignable(e, i) : t.is(e, i);
    }
    messages(e, t, n, i) {
        if (!Array.isArray(e)) return !1;
        if (i < 2) return !0;
        if (n) {
            for (let n = 0; n < e.length && n < i; n++) if (!t.isAssignable(e[n], i - 1)) return !1;
        } else for (let n = 0; n < e.length && n < i; n++) if (!t.is(e[n], i - 1)) return !1;
        return !0;
    }
    scalar(e, t, n) {
        let r = typeof e;
        switch (t) {
            case i.wx.UINT64:
            case i.wx.FIXED64:
            case i.wx.INT64:
            case i.wx.SFIXED64:
            case i.wx.SINT64:
                switch (n) {
                    case i.pz.BIGINT:
                        return 'bigint' == r;
                    case i.pz.NUMBER:
                        return 'number' == r && !isNaN(e);
                    default:
                        return 'string' == r;
                }
            case i.wx.BOOL:
                return 'boolean' == r;
            case i.wx.STRING:
                return 'string' == r;
            case i.wx.BYTES:
                return e instanceof Uint8Array;
            case i.wx.DOUBLE:
            case i.wx.FLOAT:
                return 'number' == r && !isNaN(e);
            default:
                return 'number' == r && Number.isInteger(e);
        }
    }
    scalars(e, t, n, i) {
        if (!Array.isArray(e)) return !1;
        if (n < 2) return !0;
        if (Array.isArray(e)) {
            for (let r = 0; r < e.length && r < n; r++) if (!this.scalar(e[r], t, i)) return !1;
        }
        return !0;
    }
    mapKeys(e, t, n) {
        let r = Object.keys(e);
        switch (t) {
            case i.wx.INT32:
            case i.wx.FIXED32:
            case i.wx.SFIXED32:
            case i.wx.SINT32:
            case i.wx.UINT32:
                return this.scalars(
                    r.slice(0, n).map((e) => parseInt(e)),
                    t,
                    n
                );
            case i.wx.BOOL:
                return this.scalars(
                    r.slice(0, n).map((e) => 'true' == e || ('false' != e && e)),
                    t,
                    n
                );
            default:
                return this.scalars(r, t, n, i.pz.STRING);
        }
    }
}
