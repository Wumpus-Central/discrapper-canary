r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(36056),
    a = r(350508);
class o {
    constructor(e) {
        var n;
        this.fields = null !== (n = e.fields) && void 0 !== n ? n : [];
    }
    prepare() {
        if (this.data) return;
        let e = [],
            n = [],
            r = [];
        for (let i of this.fields)
            if (i.oneof) !r.includes(i.oneof) && (r.push(i.oneof), e.push(i.oneof), n.push(i.oneof));
            else
                switch ((n.push(i.localName), i.kind)) {
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
            known: n,
            oneofs: Object.values(r)
        };
    }
    is(e, n, r = !1) {
        if (n < 0) return !0;
        if (null == e || 'object' != typeof e) return !1;
        this.prepare();
        let i = Object.keys(e),
            o = this.data;
        if (i.length < o.req.length || o.req.some((e) => !i.includes(e)) || (!r && i.some((e) => !o.known.includes(e)))) return !1;
        if (n < 1) return !0;
        for (let i of o.oneofs) {
            let o = e[i];
            if (!(0, a.Li)(o)) return !1;
            if (void 0 === o.oneofKind) continue;
            let s = this.fields.find((e) => e.localName === o.oneofKind);
            if (!s || !this.field(o[o.oneofKind], s, r, n)) return !1;
        }
        for (let i of this.fields) if (void 0 === i.oneof && !this.field(e[i.localName], i, r, n)) return !1;
        return !0;
    }
    field(e, n, r, a) {
        let o = n.repeat;
        switch (n.kind) {
            case 'scalar':
                if (void 0 === e) return n.opt;
                if (o) return this.scalars(e, n.T, a, n.L);
                return this.scalar(e, n.T, n.L);
            case 'enum':
                if (void 0 === e) return n.opt;
                if (o) return this.scalars(e, i.wx.INT32, a);
                return this.scalar(e, i.wx.INT32);
            case 'message':
                if (void 0 === e) break;
                if (o) return this.messages(e, n.T(), r, a);
                return this.message(e, n.T(), r, a);
            case 'map':
                if ('object' != typeof e || null === e) return !1;
                if (a < 2) break;
                if (!this.mapKeys(e, n.K, a)) return !1;
                switch (n.V.kind) {
                    case 'scalar':
                        return this.scalars(Object.values(e), n.V.T, a, n.V.L);
                    case 'enum':
                        return this.scalars(Object.values(e), i.wx.INT32, a);
                    case 'message':
                        return this.messages(Object.values(e), n.V.T(), r, a);
                }
        }
        return !0;
    }
    message(e, n, r, i) {
        return r ? n.isAssignable(e, i) : n.is(e, i);
    }
    messages(e, n, r, i) {
        if (!Array.isArray(e)) return !1;
        if (i < 2) return !0;
        if (r) {
            for (let r = 0; r < e.length && r < i; r++) if (!n.isAssignable(e[r], i - 1)) return !1;
        } else for (let r = 0; r < e.length && r < i; r++) if (!n.is(e[r], i - 1)) return !1;
        return !0;
    }
    scalar(e, n, r) {
        let a = typeof e;
        switch (n) {
            case i.wx.UINT64:
            case i.wx.FIXED64:
            case i.wx.INT64:
            case i.wx.SFIXED64:
            case i.wx.SINT64:
                switch (r) {
                    case i.pz.BIGINT:
                        return 'bigint' == a;
                    case i.pz.NUMBER:
                        return 'number' == a && !isNaN(e);
                    default:
                        return 'string' == a;
                }
            case i.wx.BOOL:
                return 'boolean' == a;
            case i.wx.STRING:
                return 'string' == a;
            case i.wx.BYTES:
                return e instanceof Uint8Array;
            case i.wx.DOUBLE:
            case i.wx.FLOAT:
                return 'number' == a && !isNaN(e);
            default:
                return 'number' == a && Number.isInteger(e);
        }
    }
    scalars(e, n, r, i) {
        if (!Array.isArray(e)) return !1;
        if (r < 2) return !0;
        if (Array.isArray(e)) {
            for (let a = 0; a < e.length && a < r; a++) if (!this.scalar(e[a], n, i)) return !1;
        }
        return !0;
    }
    mapKeys(e, n, r) {
        let a = Object.keys(e);
        switch (n) {
            case i.wx.INT32:
            case i.wx.FIXED32:
            case i.wx.SFIXED32:
            case i.wx.SINT32:
            case i.wx.UINT32:
                return this.scalars(
                    a.slice(0, r).map((e) => parseInt(e)),
                    n,
                    r
                );
            case i.wx.BOOL:
                return this.scalars(
                    a.slice(0, r).map((e) => 'true' == e || ('false' != e && e)),
                    n,
                    r
                );
            default:
                return this.scalars(a, n, r, i.pz.STRING);
        }
    }
}
