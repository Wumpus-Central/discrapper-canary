function r(e) {
    return null != e
        ? {
              wallpaperId: e.wallpaper_id,
              setterId: e.setter_id
          }
        : void 0;
}
function i(e) {
    return {
        id: e.id,
        label: e.label,
        default: e.default,
        isBlurred: e.is_blurred
    };
}
n.d(t, {
    L: () => r,
    w: () => i
});
