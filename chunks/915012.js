var t = /\s/;
function n(e) {
    for (var n = e.length; n-- && t.test(e.charAt(n)); );
    return n;
}
e.exports = n;
