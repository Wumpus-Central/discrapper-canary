var n = String;
e.exports = function (e) {
    try {
        return n(e);
    } catch (e) {
        return 'Object';
    }
};
