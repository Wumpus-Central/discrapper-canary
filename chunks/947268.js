var r = n(567701),
    i = "Unknown",
    a = { "Mac OS": "Mac OS X" };
function o(e) {
    return a[e] || e;
}
function s(e) {
    if (!e)
        return {
            major: "",
            minor: "",
        };
    var t = e.split(".");
    return {
        major: t[0],
        minor: t[1],
    };
}
var l = new r().getResult(),
    c = s(l.browser.version);
e.exports = {
    browserArchitecture: l.cpu.architecture || i,
    browserFullVersion: l.browser.version || i,
    browserMinorVersion: c.minor || i,
    browserName: l.browser.name || i,
    browserVersion: l.browser.major || i,
    deviceName: l.device.model || i,
    engineName: l.engine.name || i,
    engineVersion: l.engine.version || i,
    platformArchitecture: l.cpu.architecture || i,
    platformName: o(l.os.name) || i,
    platformVersion: l.os.version || i,
    platformFullVersion: l.os.version || i,
};
