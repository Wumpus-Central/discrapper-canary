n.d(t, { I: () => r, p: () => a });
var l = n(842209),
    i = n(458524);
function r(e, t) {
    if (null == e) return null;
    let n = (function (e, t) {
        for (let n of [e.displayName, e.untranslatedName]) {
            let e = `/${n}`;
            if (t === e || t.startsWith(`${e} `)) return e;
        }
        return null;
    })(e, t);
    return null == n ? null : { commandId: e.id, applicationId: e.applicationId, commandText: n };
}
function a(e, t, n) {
    if (null == n || !(0, i.l)(n, t)) return null;
    let { command: r, section: a } = l.EW({ channel: e, type: "channel" }, n.commandId, n.applicationId);
    return null == r ? null : { command: r, section: a ?? null };
}
n(827669);
