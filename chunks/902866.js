r.d(n, {
    Y: function () {
        return l;
    }
});
var i = r(912860),
    a = r(873546),
    o = r(330711);
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (null != o.Z.Messages.SELF_XSS_HEADER) {
        if ((console.log('%c'.concat(o.Z.Messages.SELF_XSS_HEADER), 'color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;'), console.log('%c'.concat(o.Z.Messages.SELF_XSS_LINE_1), 'font-size: 16px;'), console.log('%c'.concat(o.Z.Messages.SELF_XSS_LINE_2), 'font-size: 18px; font-weight: bold; color: red;'), e >= 4)) {
            console.log('%c'.concat(o.Z.Messages.SELF_XSS_LINE_3), 'font-size: 16px;');
            let e = o.Z.Messages.SELF_XSS_LINE_4.format({ url: ''.concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, '/jobs') });
            console.log('%c'.concat(e), 'font-size: 16px;');
        } else setTimeout(() => s(e + 1), 1000);
    }
}
function l(e, n) {
    if (null != n && '0.0.0' === n.remoteApp.getVersion()) return;
    let r = new i.b();
    if (null != n) {
        if (null != n.window.setDevtoolsCallbacks)
            n.window.setDevtoolsCallbacks(
                () => {
                    e.hideToken(), s();
                },
                () => {
                    e.showToken();
                }
            );
        else {
            let r = n.window.webContents;
            r.removeAllListeners('devtools-opened'),
                r.on('devtools-opened', () => {
                    e.hideToken(), s();
                }),
                r.on('devtools-closed', e.showToken);
        }
    } else
        !a.tq &&
            !a.Em &&
            r.on('changed', (n) => {
                let { open: r } = n;
                r ? (e.hideToken(), s()) : e.showToken();
            });
    window.addEventListener('beforeunload', (n) => {
        n.isTrusted && e.showToken();
    });
}
