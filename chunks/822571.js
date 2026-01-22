n.d(t, { A: () => l });
var r = n(65412),
    i = n(638504),
    a = n(287683),
    s = n(315069);
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
class l extends s.A {
    static createFromServer(e) {
        let t = new TextDecoder("utf-8", { ignoreBOM: !0 });
        return new l({
            id: e.id,
            componentType: e.component_type,
            properties: a.m.fromBinary((0, r.A)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new i.V(e, t),
            }),
            promotionId: e.promotion_id,
        });
    }
    constructor(e) {
        super(),
            o(this, "id", void 0),
            o(this, "componentType", void 0),
            o(this, "properties", void 0),
            o(this, "promotionId", void 0),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties),
            (this.promotionId = e.promotionId);
    }
}
