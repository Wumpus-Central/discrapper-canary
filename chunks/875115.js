function t(e) {
    for (var t, n = e.length; n--; )
        if (255 === (t = e.readUInt8(n))) e.writeUInt8(0, n);
        else {
            t++, e.writeUInt8(t, n);
            break;
        }
}
e.exports = t;
