a.d(e, { R: () => i });
var r = a(622916),
    n = a(255768),
    _ = a(73453),
    o = a(820754);
function i(t, e) {
    let a;
    if (!(0, _.z)(t)) return [!1];
    a = 'function' == typeof t.tracesSampler ? t.tracesSampler(e) : void 0 !== e.parentSampled ? e.parentSampled : void 0 !== t.tracesSampleRate ? t.tracesSampleRate : 1;
    let i = (0, o.o)(a);
    return void 0 === i ? (n.X && r.kg.warn('[Tracing] Discarding transaction because of invalid sample rate.'), [!1]) : i ? (Math.random() < i ? [!0, i] : (n.X && r.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(a)})`), [!1, i])) : (n.X && r.kg.log(`[Tracing] Discarding transaction because ${'function' == typeof t.tracesSampler ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`), [!1, i]);
}
