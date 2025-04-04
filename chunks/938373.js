var r = a(507604),
    n = a(77025),
    _ = Function.prototype,
    o = r && Object.getOwnPropertyDescriptor,
    i = n(_, 'name'),
    c = i && (!r || (r && o(_, 'name').configurable));
t.exports = {
    EXISTS: i,
    PROPER: i && 'something' === function () {}.name,
    CONFIGURABLE: c
};
