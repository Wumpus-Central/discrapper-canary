n.d(e, { A: () => o });
var a = n(17928),
    r = n(228366);
let l = { transforms: [] },
    i = l;
class s extends a.Ay.PersistedStore {
    static displayName = "CustomTextTransformStore";
    static persistKey = "CustomTextTransformStore";
    initialize(t) {
        i = t ?? l;
    }
    getTransforms() {
        return i.transforms;
    }
    getState() {
        return i;
    }
}
let o = new s(r.h, {
    CUSTOM_TEXT_TRANSFORM_ADD: function (t) {
        let { transform: e } = t;
        i = { ...i, transforms: [...i.transforms, e] };
    },
    CUSTOM_TEXT_TRANSFORM_UPDATE: function (t) {
        let { transform: e } = t;
        i = { ...i, transforms: i.transforms.map((t) => (t.id === e.id ? e : t)) };
    },
    CUSTOM_TEXT_TRANSFORM_DELETE: function (t) {
        let { id: e } = t;
        i = { ...i, transforms: i.transforms.filter((t) => t.id !== e) };
    },
});
