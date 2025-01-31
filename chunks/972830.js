n.d(t, { h: () => o }), n(177593), n(653041);
var i = n(570140),
    r = n(38618);
let a = [];
function s(e) {
    setImmediate(() => e());
}
function o(e) {
    r.Z.isConnectedOrOverlay() ? s(e) : a.push(e);
}
i.Z.subscribe('CONNECTION_OPEN', () => {
    a.forEach((e) => s(e)), (a = []);
}),
    i.Z.subscribe('CONNECTION_RESUMED', () => {
        a.forEach((e) => s(e)), (a = []);
    });
