function i(e) {
    return null == e
        ? []
        : "embeddedSurfaces" in e
          ? (e.embeddedSurfaces ?? [])
          : "embedded_surfaces" in e
            ? (e.embedded_surfaces ?? [])
            : [];
}
function r(e) {
    return i(e).length > 0;
}
function a(e, t) {
    return i(e).includes(t);
}
n.d(t, { D: () => r, W: () => a });
