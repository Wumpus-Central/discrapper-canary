n.d(t, {
    CC: () => _,
    GY: () => o,
});
var r = n(606093);
let i = new Map(),
    a = new Set();
function o(e, t) {
    try {
        t.exception.values.forEach((t) => {
            if (t.stacktrace)
                for (let n of t.stacktrace.frames || []) {
                    if (!n.filename || n.module_metadata) continue;
                    let t = (function (e, t) {
                        if (r.n._sentryModuleMetadata)
                            for (let t of Object.keys(r.n._sentryModuleMetadata)) {
                                let n = r.n._sentryModuleMetadata[t];
                                if (!a.has(t)) {
                                    for (let r of (a.add(t), e(t).reverse()))
                                        if (r.filename) {
                                            i.set(r.filename, n);
                                            break;
                                        }
                                }
                            }
                        return i.get(t);
                    })(e, n.filename);
                    t && (n.module_metadata = t);
                }
        });
    } catch (e) {}
}
function _(e) {
    try {
        e.exception.values.forEach((e) => {
            if (e.stacktrace) for (let t of e.stacktrace.frames || []) delete t.module_metadata;
        });
    } catch (e) {}
}
