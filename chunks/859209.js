var r = a(354848),
    n = a(97131),
    o = a(230364),
    _ = a(492424);
t.exports = function (t, e, a, i) {
    i || (i = {});
    var c = i.enumerable,
        s = void 0 !== i.name ? i.name : e;
    if ((r(a) && o(a, s, i), i.global)) c ? (t[e] = a) : _(e, a);
    else {
        try {
            i.unsafe ? t[e] && (c = !0) : delete t[e];
        } catch (t) {}
        c
            ? (t[e] = a)
            : n.f(t, e, {
                  value: a,
                  enumerable: !1,
                  configurable: !i.nonConfigurable,
                  writable: !i.nonWritable
              });
    }
    return t;
};
