var n,
    i = r(114912),
    o = 'Unknown',
    a = new i().getResult(),
    u = (function (t) {
        if (!t)
            return {
                major: '',
                minor: ''
            };
        var e = t.split('.');
        return {
            major: e[0],
            minor: e[1]
        };
    })(a.browser.version);
t.exports = {
    browserArchitecture: a.cpu.architecture || o,
    browserFullVersion: a.browser.version || o,
    browserMinorVersion: u.minor || o,
    browserName: a.browser.name || o,
    browserVersion: a.browser.major || o,
    deviceName: a.device.model || o,
    engineName: a.engine.name || o,
    engineVersion: a.engine.version || o,
    platformArchitecture: a.cpu.architecture || o,
    platformName: { 'Mac OS': 'Mac OS X' }[(n = a.os.name)] || n || o,
    platformVersion: a.os.version || o,
    platformFullVersion: a.os.version || o
};
