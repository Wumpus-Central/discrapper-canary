let n = '2.0.0',
    r = 256,
    i = Number.MAX_SAFE_INTEGER || 9007199254740991,
    a = 16,
    o = 250,
    s = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
e.exports = {
    MAX_LENGTH: r,
    MAX_SAFE_COMPONENT_LENGTH: a,
    MAX_SAFE_BUILD_LENGTH: o,
    MAX_SAFE_INTEGER: i,
    RELEASE_TYPES: s,
    SEMVER_SPEC_VERSION: n,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
};
