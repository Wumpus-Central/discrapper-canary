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
        isBlurred: e.is_blurred,
        designGroupId: e.design_group_id,
        primaryColor: e.primary_color,
        secondaryColor: e.secondary_color
    };
}
n.d(t, {
    L: () => r,
    w: () => i
});
