let r = n(74509);
e.exports = (e, t) => {
    try {
        return new r(e, t).range || "*";
    } catch (e) {
        return null;
    }
};
