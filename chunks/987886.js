_.d(e, { B: () => r });
let a = _(899517).n;
function r() {
    let t = a.chrome,
        e = t && t.app && t.app.runtime,
        _ = "history" in a && !!a.history.pushState && !!a.history.replaceState;
    return !e && _;
}
