t.d(n, { A: () => i });
function i(e) {
    return null == e.serverIP || null == e.port ? null : `${e.serverIP}:${e.port}`;
}
