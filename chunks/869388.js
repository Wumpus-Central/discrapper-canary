"use strict";
s.d(e, { A: () => c });
var n = s(311907),
    r = s(73153);
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
let c = new l(r.h, {
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
