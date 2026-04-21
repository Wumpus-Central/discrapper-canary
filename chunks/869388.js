"use strict";
s.d(e, { A: () => o });
var n = s(311907),
    a = s(73153);
let r = { transforms: [] },
    i = r;
class l extends n.Ay.PersistedStore {
    static displayName = "CustomTextTransformStore";
    static persistKey = "CustomTextTransformStore";
    initialize(t) {
        i = t ?? r;
    }
    getTransforms() {
        return i.transforms;
    }
    getState() {
        return i;
    }
}
let o = new l(a.h, {
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
