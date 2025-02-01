let t = '2.0.0',
    n = 256,
    i = Number.MAX_SAFE_INTEGER || 9007199254740991,
    r = 16,
    a = 250,
    s = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
e.exports = {
    MAX_LENGTH: n,
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_SAFE_INTEGER: i,
    RELEASE_TYPES: s,
    SEMVER_SPEC_VERSION: t,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
};
