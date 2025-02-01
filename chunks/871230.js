var i = n(957578).Buffer;
e.exports = function (e, t, n) {
    if (i.isBuffer(e)) return e;
    if ('string' == typeof e) return i.from(e, t);
    if (ArrayBuffer.isView(e)) return i.from(e.buffer);
    throw TypeError(n + ' must be a string, a Buffer, a typed array or a DataView');
};
