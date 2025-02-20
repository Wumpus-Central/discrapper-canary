let t = '2.0.0',
    n = 256,
    r = Number.MAX_SAFE_INTEGER || 9007199254740991,
    i = 16,
    o = 250,
    a = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
e.exports = {
    MAX_LENGTH: n,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: o,
    MAX_SAFE_INTEGER: r,
    RELEASE_TYPES: a,
    SEMVER_SPEC_VERSION: t,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
};
