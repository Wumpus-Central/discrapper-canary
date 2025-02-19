function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
n.d(t, {
    Ru: () => a,
    aH: () => o
});
var o = (function (e) {
        return (e.DEFAULT = 'AppIcon'), e;
    })({}),
    a = (function (e) {
        return (e.BRAND_DARK = 'BrandDarkIcon'), (e.BRAND_INVERTED = 'BrandInvertedIcon'), (e.MATTE_LIGHT = 'MatteLightIcon'), (e.MATTE_DARK = 'MatteDarkIcon'), (e.PASTEL = 'PastelIcon'), (e.PIRATE = 'PirateIcon'), (e.CAMO = 'CamoIcon'), (e.SUNSET = 'SunsetIcon'), (e.GALAXY = 'GalaxyIcon'), (e.Y2K = 'Y2KIcon'), (e.CHERRY_BLOSSOM = 'CherryBlossomIcon'), (e.BEANIE = 'BeanieIcon'), (e.GAMING = 'GamingIcon'), (e.CIRCUIT = 'CircuitIcon'), (e.HOLO_WAVES = 'HoloWavesIcon'), (e.BLUSH = 'BlushIcon'), (e.ANGRY = 'AngryIcon'), (e.MANGA = 'MangaIcon'), (e.CONTROLLER = 'ControllerIcon'), (e.MUSHROOM = 'MushroomIcon'), (e.BLURPLE_TWILIGHT = 'BlurpleTwilightIcon'), (e.IN_RAINBOWS = 'InRainbowsIcon'), (e.COLOR_WAVE = 'ColorWaveIcon'), (e.MIDNIGHT_PRISM = 'MidnightPrismIcon'), e;
    })({});
i(
    {},
    o,
    a,
    (function (e) {
        return (e.DRIP = 'DripIcon'), (e.SLIMY = 'SlimyIcon'), (e.ZOMBIE = 'ZombieIcon'), (e.CLYDE_STEIN = 'ClydeSteinIcon'), e;
    })({})
);
