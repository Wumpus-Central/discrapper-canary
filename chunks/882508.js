n.d(t, {
    D: () => a,
    c: () => o,
});
var r = n(481060),
    i = n(164670);
function a(e) {
    let { imageUrl: t, backgroundImageUrl: n, altText: i, customClassNames: a } = e;
    return {
        type: "dynamic",
        component: r.AX$.SOCIAL_LAYER_SKU_PREVIEW,
        aspectRatio: "16/9",
        props: {
            imageUrl: t,
            backgroundImageUrl: n,
            altText: i,
            customClassNames: a,
        },
    };
}
function o(e) {
    return a({
        imageUrl: (0, i.Do)(e),
        backgroundImageUrl: (0, i.a7)(e),
        altText: e.name,
    });
}
