n.d(t, { Y: () => o });
var i = n(912860),
    r = n(873546),
    a = n(330711);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (null != a.Z.Messages.SELF_XSS_HEADER) {
        if ((console.log('%c'.concat(a.Z.Messages.SELF_XSS_HEADER), 'color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;'), console.log('%c'.concat(a.Z.Messages.SELF_XSS_LINE_1), 'font-size: 16px;'), console.log('%c'.concat(a.Z.Messages.SELF_XSS_LINE_2), 'font-size: 18px; font-weight: bold; color: red;'), e >= 4)) {
            console.log('%c'.concat(a.Z.Messages.SELF_XSS_LINE_3), 'font-size: 16px;');
            let e = a.Z.Messages.SELF_XSS_LINE_4.format({ url: ''.concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, '/jobs') });
            console.log('%c'.concat(e), 'font-size: 16px;');
        } else setTimeout(() => s(e + 1), 1000);
    }
}
function o(e, t) {
    if (null != t && '0.0.0' === t.remoteApp.getVersion()) return;
    let n = new i.b();
    if (null != t) {
        if (null != t.window.setDevtoolsCallbacks)
            t.window.setDevtoolsCallbacks(
                () => {
                    e.hideToken(), s();
                },
                () => {
                    e.showToken();
                }
            );
        else {
            let n = t.window.webContents;
            n.removeAllListeners('devtools-opened'),
                n.on('devtools-opened', () => {
                    e.hideToken(), s();
                }),
                n.on('devtools-closed', e.showToken);
        }
    } else
        r.tq ||
            r.Em ||
            n.on('changed', (t) => {
                let { open: n } = t;
                n ? (e.hideToken(), s()) : e.showToken();
            });
    window.addEventListener('beforeunload', (t) => {
        t.isTrusted && e.showToken();
    });
}
