"use strict";
n.d(t, { b: () => s });
var r = n(575593),
    i = n(116833);
function s(e) {
    let { product: t } = e,
        n = "6/4";
    switch (t.type) {
        case r.R.NAMEPLATE:
        case r.R.AVATAR_DECORATION:
            n = "16/9";
            break;
        case r.R.BUNDLE:
        case r.R.PROFILE_EFFECT:
        default:
            n = "6/4";
    }
    return {
        type: "dynamic",
        component: i.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
        aspectRatio: n,
        props: { product: t, forCollectedModal: !0 },
    };
}
