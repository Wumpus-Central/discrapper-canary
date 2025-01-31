function i(e) {
    return e
        .replace(/[\s-~]+/g, '-')
        .replace(/^-+/, '')
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
        .toLowerCase();
}
n.d(t, { Z: () => i }), n(757143);
