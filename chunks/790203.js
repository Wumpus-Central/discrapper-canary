i.d(e, { b: () => n });
var r = i(575593),
    s = i(116833);
function n(t) {
    let { product: e } = t,
        i = "6/4";
    switch (e.type) {
        case r.R.NAMEPLATE:
        case r.R.AVATAR_DECORATION:
            i = "16/9";
            break;
        case r.R.BUNDLE:
        case r.R.PROFILE_EFFECT:
        default:
            i = "6/4";
    }
    return {
        type: "dynamic",
        component: s.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
        aspectRatio: i,
        props: { product: e, forCollectedModal: !0 },
    };
}
