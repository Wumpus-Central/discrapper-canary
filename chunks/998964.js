t.d(n, { Z: () => r });
function r(e) {
    return null == e.serverIP || null == e.port ? null : "".concat(e.serverIP, ":").concat(e.port);
}
