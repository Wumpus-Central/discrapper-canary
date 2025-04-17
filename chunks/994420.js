n.d(t, { Z: () => o });
function o() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {}
    return (o = function () {
        return !!e;
    })();
}
