var e = n(779688),
    o = n(829575),
    i = n(6837),
    u = n(620214),
    s = Object.isExtensible;
t.exports =
    e(function () {
        s(1);
    }) || u
        ? function (t) {
              return !!o(t) && (!u || 'ArrayBuffer' !== i(t)) && (!s || s(t));
          }
        : s;
