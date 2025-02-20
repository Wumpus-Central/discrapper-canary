function r(e) {
    if (null == e) return !1;
    for (var t = 0; t < e.length; t++) if (e[t].voiceState.selfStream) return !0;
    return !1;
}
n.d(t, { a: () => r });
