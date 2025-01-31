n.d(t, { Z: () => r });
var i = {
    start: 'end',
    end: 'start'
};
function r(e) {
    return e.replace(/start|end/g, function (e) {
        return i[e];
    });
}
