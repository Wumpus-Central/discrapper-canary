a.d(e, { V: () => n });
let r = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
function n(t) {
    return 'warn' === t ? 'warning' : r.includes(t) ? t : 'log';
}
