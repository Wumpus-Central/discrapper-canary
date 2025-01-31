n.d(t, { Z: () => r }), n(47120);
let i = ['allow-pointer-lock', 'allow-scripts', 'allow-same-origin', 'allow-forms'];
function r(e) {
    let { allowPopups: t } = e,
        n = i;
    return t && (n = [...i, 'allow-popups', 'allow-popups-to-escape-sandbox']), n.join(' ');
}
