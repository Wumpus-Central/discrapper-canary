var t = String;
e.exports = function (e) {
    try {
        return t(e);
    } catch (e) {
        return 'Object';
    }
};
