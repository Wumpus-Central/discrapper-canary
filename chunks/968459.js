s.d(p, { A: () => u });
function u(r) {
    return null == r.serverIP || null == r.port ? null : `${r.serverIP}:${r.port}`;
}
