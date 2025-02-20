n.d(t, { Z: () => i });
var r = {
    start: 'end',
    end: 'start'
};
function i(e) {
    return e.replace(/start|end/g, function (e) {
        return r[e];
    });
}
