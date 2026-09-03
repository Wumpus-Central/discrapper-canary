function i() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
function r(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
n.d(t, { A: () => i, p: () => r });
