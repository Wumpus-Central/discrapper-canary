var t = {
        __proto__: null,
        foo: {}
    },
    n = Object;
e.exports = function () {
    return { __proto__: t }.foo === t.foo && !(t instanceof n);
};
