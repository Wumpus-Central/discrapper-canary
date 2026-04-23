"use strict";
s.d(e, { A: () => o });
var n = s(17928),
    r = s(228366);
let a = { transforms: [] },
    i = a;
class l extends n.Ay.PersistedStore {
    static displayName = "CustomTextTransformStore";
    static persistKey = "CustomTextTransformStore";
    initialize(t) {
        i = t ?? a;
    }
    getTransforms() {
        return i.transforms;
    }
    getState() {
        return i;
    }
}
let o = new l(r.h, {
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
