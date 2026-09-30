n.d(t, { I: () => i, p: () => a });
var l = n(842209),
    r = n(458524);
function i(e, t) {
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
    if (null == n || !(0, r.l)(n, t)) return null;
    let { command: i, section: a } = l.EW({ channel: e, type: "channel" }, n.commandId, n.applicationId);
    return null == i ? null : { command: i, section: a ?? null };
}
n(827669);
