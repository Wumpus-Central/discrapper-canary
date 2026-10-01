n.d(t, { I: () => a, p: () => r });
var l = n(842209),
    i = n(458524);
function a(e, t) {
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
function r(e, t, n) {
    if (null == n || !(0, i.l)(n, t)) return null;
    let { command: a, section: r } = l.EW({ channel: e, type: "channel" }, n.commandId, n.applicationId);
    return null == a ? null : { command: a, section: r ?? null };
}
n(827669);
