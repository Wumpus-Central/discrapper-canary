n.d(t, { Z: () => r });
var i = n(413135).Buffer;
function r(e) {
    try {
        return i.from(JSON.stringify(e)).toString('base64');
    } catch (e) {
        return null;
    }
}
