a.d(e, { V: () => _ });
let r = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
function _(t) {
    return 'warn' === t ? 'warning' : r.includes(t) ? t : 'log';
}
