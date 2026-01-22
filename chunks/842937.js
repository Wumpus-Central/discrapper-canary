function r(e) {
    return e
        .replace(/[\s-~]+/g, "-")
        .replace(/^-+/, "")
        .replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
        .toLowerCase();
}
n.d(t, { A: () => r }), n(747238), n(812715);
