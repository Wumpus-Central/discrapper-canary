function r(e) {
    return e
        .replace(/[\s-~]+/g, '-')
        .replace(/^-+/, '')
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
        .toLowerCase();
}
n.d(t, { Z: () => r }), n(704826), n(35282);
