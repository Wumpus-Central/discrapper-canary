var r = String;
t.exports = function (t) {
    try {
        return r(t);
    } catch (t) {
        return 'Object';
    }
};
