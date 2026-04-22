i.d(t, { A: () => n });
let n = {
    BIG_ENDIAN: 19789,
    LITTLE_ENDIAN: 18761,
    getByteOrder: function (e, t) {
        if (18761 === e.getUint16(t)) return 18761;
        if (19789 === e.getUint16(t)) return 19789;
        throw Error("Illegal byte order value. Faulty image.");
    },
};
