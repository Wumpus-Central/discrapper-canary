function i(e) {
    return null == e
        ? []
        : "embeddedSurfaces" in e
          ? (e.embeddedSurfaces ?? [])
          : "embedded_surfaces" in e
            ? (e.embedded_surfaces ?? [])
            : [];
}
n.d(
    t,
    {},
    {
        D: function (e) {
            return i(e).length > 0;
        },
        W: function (e, t) {
            return i(e).includes(t);
        },
    },
);
